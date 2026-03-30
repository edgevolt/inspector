/**
 * Microsoft Defender for Endpoint Log Parser
 * Parses Microsoft 365 Defender / Defender for Endpoint logs in JSON format
 * Supports Advanced Hunting data flattening and table-specific auto-detection
 */

/**
 * Flatten a nested JSON object into a single-level object using dot-notation keys.
 * Arrays of objects are serialized as summarized strings; primitive arrays are joined.
 */
function flattenObject(obj, prefix = '', result = {}) {
    if (obj === null || obj === undefined) {
        return result;
    }

    for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;

        if (value === null || value === undefined) {
            continue;
        } else if (Array.isArray(value)) {
            if (value.length === 0) {
                result[fullKey] = '[]';
            } else if (typeof value[0] === 'object' && value[0] !== null) {
                result[fullKey] = summarizeObjectArray(value, key);
            } else {
                result[fullKey] = value.join(', ');
            }
        } else if (typeof value === 'object') {
            flattenObject(value, fullKey, result);
        } else {
            result[fullKey] = value;
        }
    }

    return result;
}

/**
 * Create a readable summary of an array of objects.
 */
function summarizeObjectArray(arr, fieldName) {
    const lowerName = fieldName.toLowerCase();

    // Fallback: simple stringification
    return arr.map(item => {
        if (item.Name || item.name) return item.Name || item.name;
        if (item.Value || item.value) return item.Value || item.value;
        return JSON.stringify(item);
    }).join('; ');
}

/**
 * Truncate a string value for display.
 */
function truncateValue(value, maxLen = 60) {
    if (!value || typeof value !== 'string') return String(value);
    const cleaned = value.replace(/^["']|["']$/g, '');
    if (cleaned.length <= maxLen) return cleaned;
    return cleaned.substring(0, maxLen) + '…';
}

/**
 * Detect the MDE event sub-type (TableName equivalent) from a parsed JSON object.
 */
function detectLogSubType(obj) {
    if (!obj || typeof obj !== 'object') return 'Unknown';

    // If explicit TableName is provided in Advanced Hunting queries
    if (obj.TableName) {
        return obj.TableName;
    }

    // Inference based on MDE unique properties
    if (obj.AlertId || obj.Severity) {
        return 'AlertEvents';
    }

    if (obj.InitiatingProcessCommandLine && !obj.FolderPath && !obj.RemoteIP && !obj.RegistryKey) {
        return 'DeviceProcessEvents';
    }

    if (obj.RemoteIP || obj.LocalIP || obj.RemotePort) {
        return 'DeviceNetworkEvents';
    }

    if (obj.TargetFileName || obj.FolderPath || obj.PreviousFileName) {
        return 'DeviceFileEvents';
    }

    if (obj.RegistryKey || obj.RegistryValueName) {
        return 'DeviceRegistryEvents';
    }

    if (obj.LogonType && obj.AccountDomain) {
        return 'DeviceLogonEvents';
    }

    if (obj.SharedModuleMD5 || obj.InitiatingProcessImageFileName) {
        return 'DeviceImageLoadEvents';
    }

    if (obj.DeliveryAction || obj.NetworkMessageId) {
        return 'EmailEvents';
    }

    return 'DeviceEvents';
}

/**
 * Parse a single MDE log entry.
 */
export function parseLog(logLine) {
    if (!logLine) return {};

    let rawObj;
    if (typeof logLine === 'object') {
        rawObj = logLine;
    } else if (typeof logLine === 'string') {
        const trimmed = logLine.trim();
        if (!trimmed) return {};

        try {
            const parsed = JSON.parse(trimmed);
            rawObj = Array.isArray(parsed) ? (parsed[0] || {}) : parsed;
        } catch (e) {
            const recovered = tryRecoverJSON(trimmed);
            if (recovered) {
                rawObj = recovered;
            } else {
                return { _parseError: `Invalid JSON: ${e.message}`, _raw: truncateValue(trimmed, 200) };
            }
        }
    } else {
        return {};
    }

    const subType = detectLogSubType(rawObj);
    const flattened = flattenObject(rawObj);

    flattened._logSubType = subType;
    flattened._log_source = 'Microsoft Defender for Endpoint';

    return flattened;
}

function tryRecoverJSON(text) {
    const firstLine = text.split('\n').find(l => l.trim().startsWith('{'));
    if (firstLine) {
        try { return JSON.parse(firstLine.trim()); } catch (_) {}
    }
    const cleaned = text.replace(/,\s*([\]}])/g, '$1');
    try {
        const parsed = JSON.parse(cleaned);
        return Array.isArray(parsed) ? parsed[0] : parsed;
    } catch (_) {}
    return null;
}

export function parseLogs(logText) {
    if (!logText || typeof logText !== 'string') return [];
    const trimmed = logText.trim();
    if (!trimmed) return [];

    if (trimmed.startsWith('[')) {
        try {
            const arr = JSON.parse(trimmed);
            if (Array.isArray(arr)) return arr.map(item => parseLog(item));
        } catch (_) {}
    }

    if (trimmed.startsWith('{')) {
        try {
            const obj = JSON.parse(trimmed);
            return [parseLog(obj)];
        } catch (_) {}
    }

    const lines = trimmed.split('\n').filter(l => l.trim().startsWith('{'));
    if (lines.length > 0) {
        return lines.map(line => parseLog(line.trim()));
    }

    return [parseLog(trimmed)];
}

export function getField(parsedLog, fieldName) {
    return parsedLog[fieldName] !== undefined ? parsedLog[fieldName] : null;
}

export function matchesCriteria(parsedLog, criteria) {
    if (!criteria || typeof criteria !== 'object') return true;
    return Object.entries(criteria).every(([key, value]) => parsedLog[key] === value);
}

export function filterLogs(parsedLogs, criteria) {
    if (!Array.isArray(parsedLogs)) return [];
    return parsedLogs.filter(log => matchesCriteria(log, criteria));
}

export function getUniqueValues(parsedLogs, fieldName) {
    if (!Array.isArray(parsedLogs)) return [];
    const values = parsedLogs
        .map(log => log[fieldName])
        .filter(value => value !== undefined && value !== null);
    return [...new Set(values)];
}

export function countFieldValues(parsedLogs, fieldName) {
    if (!Array.isArray(parsedLogs)) return {};
    const counts = {};
    parsedLogs.forEach(log => {
        const value = log[fieldName];
        if (value !== undefined && value !== null) {
            counts[value] = (counts[value] || 0) + 1;
        }
    });
    return counts;
}

export function getSummaryStats(parsedLogs) {
    if (!Array.isArray(parsedLogs) || parsedLogs.length === 0) {
        return {
            totalLogs: 0,
            uniqueDevices: 0,
            logSubTypes: {},
            actionTypes: {}
        };
    }

    return {
        totalLogs: parsedLogs.length,
        uniqueDevices: getUniqueValues(parsedLogs, 'DeviceId').length,
        logSubTypes: countFieldValues(parsedLogs, '_logSubType'),
        actionTypes: countFieldValues(parsedLogs, 'ActionType')
    };
}
