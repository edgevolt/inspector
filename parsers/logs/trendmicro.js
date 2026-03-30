/**
 * Trend Micro Endpoint Log Parser
 * Parses Trend Micro Vision One / Apex One endpoint logs (JSON Format)
 * Supports flattening nested event structures and categorizing event sub-types (e.g. Process, Threat, Network)
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
 * Detect the Trend Micro event sub-type from a parsed JSON object.
 */
function detectLogSubType(obj) {
    if (!obj || typeof obj !== 'object') return 'Unknown';

    if (obj.logType) {
        return obj.logType.toUpperCase();
    }

    // Inference based on Trend Micro distinct properties
    if (obj.threatName || obj.riskLevel || obj.threatType) {
        return 'ALERT / THREAT';
    }

    if (obj.dstIp || obj.dstPort || obj.requestUrl || obj.connectionDirection) {
        return 'NETWORK ACTIVITY';
    }

    if (obj.processName || obj.processCmd || obj.parentProcessName) {
        return 'PROCESS ACTIVITY';
    }

    if (obj.objectFilePath || obj.objectFileName) {
        return 'FILE ACTIVITY';
    }

    if (obj.registryKey || obj.registryValueName) {
        return 'REGISTRY ACTIVITY';
    }

    if (obj.logonUser || obj.logonType) {
        return 'USER ACTIVITY';
    }

    return 'ENDPOINT EVENT';
}

/**
 * Parse a single Trend Micro log entry.
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
    flattened._log_source = 'Trend Micro';

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
            uniqueEndpoints: 0,
            logSubTypes: {},
            threats: {}
        };
    }

    return {
        totalLogs: parsedLogs.length,
        uniqueEndpoints: getUniqueValues(parsedLogs, 'endpointGuid').length,
        logSubTypes: countFieldValues(parsedLogs, '_logSubType'),
        threats: countFieldValues(parsedLogs, 'threatName')
    };
}
