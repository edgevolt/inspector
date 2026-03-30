/**
 * CrowdStrike Falcon Log Parser
 * Parses CrowdStrike Falcon logs (such as FDR or Streaming API) in JSON format
 * Supports flattening nested event structures and categorizing event sub-types
 */

/**
 * Flatten a nested JSON object into a single-level object using dot-notation keys.
 * Arrays of objects are serialized as summarized strings; primitive arrays are joined.
 * @param {object} obj - Nested object to flatten
 * @param {string} prefix - Current key prefix
 * @param {object} result - Accumulator
 * @returns {object} Flattened key-value object
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
 * Extracts key display properties to produce a compact representation.
 * @param {Array} arr - Array of objects
 * @param {string} fieldName - Parent field name
 * @returns {string} Summarized string
 */
function summarizeObjectArray(arr, fieldName) {
    const lowerName = fieldName.toLowerCase();

    // Fallback: simple stringification with common attributes
    return arr.map(item => {
        if (item.Name || item.name) return item.Name || item.name;
        if (item.Value || item.value) return item.Value || item.value;
        return JSON.stringify(item);
    }).join('; ');
}

/**
 * Truncate a string value for display.
 * @param {string} value - Value to truncate
 * @param {number} maxLen - Maximum length (default 60)
 * @returns {string} Truncated value
 */
function truncateValue(value, maxLen = 60) {
    if (!value || typeof value !== 'string') return String(value);
    const cleaned = value.replace(/^["']|["']$/g, '');
    if (cleaned.length <= maxLen) return cleaned;
    return cleaned.substring(0, maxLen) + '…';
}

/**
 * Detect the CrowdStrike event sub-type from a parsed JSON object.
 * @param {object} obj - Raw parsed JSON object
 * @returns {string} Sub-type (Process, Network, DNS, File, Registry, Detection, Authentication, or Unknown)
 */
function detectLogSubType(obj) {
    if (!obj || typeof obj !== 'object') return 'Unknown';

    const eventName = (obj.EventName || obj.event_simpleName || obj.EventType || '').toLowerCase();

    // Detections / Alerts
    if (obj.DetectName || obj.Severity || eventName.includes('detect') || eventName.includes('incident')) {
        return 'Detection';
    }

    // Process Activity
    if (eventName.includes('process') || obj.CommandLine || obj.ParentProcessId) {
        return 'Process';
    }

    // Network Activity
    if (eventName.includes('network') || obj.RemoteAddressIP4 || obj.RemotePort) {
        return 'Network';
    }

    // DNS Activity
    if (eventName.includes('dns') || obj.DomainName) {
        return 'DNS';
    }

    // Authentication Activity
    if (eventName.includes('logon') || obj.LogonType) {
        return 'Authentication';
    }

    // File / Registry Activity
    if (eventName.includes('file') || obj.TargetFileName) {
        return 'File';
    }
    if (eventName.includes('registr') || obj.RegistryPath) {
        return 'Registry';
    }

    return 'General';
}

/**
 * Parse a single CrowdStrike log entry.
 * @param {string|object} logLine - Raw JSON log string or object
 * @returns {object} Parsed and flattened log object
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
    flattened._log_source = 'CrowdStrike Falcon';

    return flattened;
}

/**
 * Attempt to recover a valid JSON object from malformed input.
 */
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

/**
 * Parse multiple CrowdStrike log entries.
 */
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

/**
 * Get summary statistics for parsed CrowdStrike logs
 */
export function getSummaryStats(parsedLogs) {
    if (!Array.isArray(parsedLogs) || parsedLogs.length === 0) {
        return {
            totalLogs: 0,
            uniqueComputers: 0,
            logSubTypes: {},
            events: {},
            detections: {}
        };
    }

    // Try finding commonly used event type properties
    const eventNameProp = parsedLogs[0].EventName !== undefined ? 'EventName' : 'event_simpleName';

    return {
        totalLogs: parsedLogs.length,
        uniqueComputers: getUniqueValues(parsedLogs, 'ComputerName').length,
        logSubTypes: countFieldValues(parsedLogs, '_logSubType'),
        events: countFieldValues(parsedLogs, eventNameProp),
        detections: countFieldValues(parsedLogs, 'DetectName')
    };
}
