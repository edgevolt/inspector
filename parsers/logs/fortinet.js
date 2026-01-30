/**
 * FortiGate Log Parser (FortiOS 7.x)
 * Parses FortiGate firewall logs in key=value format
 * Supports FortiOS 7.x log formats
 */

/**
 * Parse a FortiGate log line
 * @param {string} logLine - Raw log line
 * @returns {object} Parsed log object with key-value pairs
 */
export function parseLog(logLine) {
    if (!logLine || typeof logLine !== 'string') {
        return {};
    }

    const parsed = {};

    // FortiGate logs use key=value format
    // Values can be quoted or unquoted
    // Pattern: key="quoted value" or key=unquoted_value

    const regex = /(\w+)=(?:"([^"]*)"|([^\s]*))/g;
    let match;

    while ((match = regex.exec(logLine)) !== null) {
        const key = match[1];
        const value = match[2] !== undefined ? match[2] : match[3];

        // Convert numeric values
        if (value && /^\d+$/.test(value)) {
            parsed[key] = parseInt(value, 10);
        } else {
            parsed[key] = value;
        }
    }

    return parsed;
}

/**
 * Parse multiple FortiGate log lines
 * @param {string} logText - Multiple log lines separated by newlines
 * @returns {Array} Array of parsed log objects
 */
export function parseLogs(logText) {
    if (!logText || typeof logText !== 'string') {
        return [];
    }

    const lines = logText.split('\n').filter(line => line.trim());
    return lines.map(line => parseLog(line));
}

/**
 * Extract specific field from parsed log
 * @param {object} parsedLog - Parsed log object
 * @param {string} fieldName - Field name to extract
 * @returns {any} Field value or null if not found
 */
export function getField(parsedLog, fieldName) {
    return parsedLog[fieldName] || null;
}

/**
 * Check if log matches specific criteria
 * @param {object} parsedLog - Parsed log object
 * @param {object} criteria - Criteria object with field-value pairs
 * @returns {boolean} True if log matches all criteria
 */
export function matchesCriteria(parsedLog, criteria) {
    if (!criteria || typeof criteria !== 'object') {
        return true;
    }

    return Object.entries(criteria).every(([key, value]) => {
        return parsedLog[key] === value;
    });
}

/**
 * Filter logs by criteria
 * @param {Array} parsedLogs - Array of parsed log objects
 * @param {object} criteria - Criteria object with field-value pairs
 * @returns {Array} Filtered array of logs
 */
export function filterLogs(parsedLogs, criteria) {
    if (!Array.isArray(parsedLogs)) {
        return [];
    }

    return parsedLogs.filter(log => matchesCriteria(log, criteria));
}

/**
 * Get unique values for a specific field across multiple logs
 * @param {Array} parsedLogs - Array of parsed log objects
 * @param {string} fieldName - Field name to extract
 * @returns {Array} Array of unique values
 */
export function getUniqueValues(parsedLogs, fieldName) {
    if (!Array.isArray(parsedLogs)) {
        return [];
    }

    const values = parsedLogs
        .map(log => log[fieldName])
        .filter(value => value !== undefined && value !== null);

    return [...new Set(values)];
}

/**
 * Count occurrences of field values
 * @param {Array} parsedLogs - Array of parsed log objects
 * @param {string} fieldName - Field name to count
 * @returns {object} Object with value counts
 */
export function countFieldValues(parsedLogs, fieldName) {
    if (!Array.isArray(parsedLogs)) {
        return {};
    }

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
 * Get summary statistics for parsed logs
 * @param {Array} parsedLogs - Array of parsed log objects
 * @returns {object} Summary statistics
 */
export function getSummaryStats(parsedLogs) {
    if (!Array.isArray(parsedLogs) || parsedLogs.length === 0) {
        return {
            totalLogs: 0,
            uniqueSourceIPs: 0,
            uniqueDestIPs: 0,
            actions: {},
            services: {},
            policies: {}
        };
    }

    return {
        totalLogs: parsedLogs.length,
        uniqueSourceIPs: getUniqueValues(parsedLogs, 'srcip').length,
        uniqueDestIPs: getUniqueValues(parsedLogs, 'dstip').length,
        actions: countFieldValues(parsedLogs, 'action'),
        services: countFieldValues(parsedLogs, 'service'),
        policies: countFieldValues(parsedLogs, 'policyid')
    };
}

/**
 * Format parsed log as human-readable text
 * @param {object} parsedLog - Parsed log object
 * @returns {string} Formatted log text
 */
export function formatLog(parsedLog) {
    if (!parsedLog || typeof parsedLog !== 'object') {
        return '';
    }

    const lines = [];

    // Add timestamp if available
    if (parsedLog.date && parsedLog.time) {
        lines.push(`Timestamp: ${parsedLog.date} ${parsedLog.time}`);
    }

    // Add device info
    if (parsedLog.devname) {
        lines.push(`Device: ${parsedLog.devname}`);
    }

    // Add log type
    if (parsedLog.type) {
        lines.push(`Type: ${parsedLog.type}${parsedLog.subtype ? '/' + parsedLog.subtype : ''}`);
    }

    // Add action
    if (parsedLog.action) {
        lines.push(`Action: ${parsedLog.action}`);
    }

    // Add source/destination
    if (parsedLog.srcip) {
        lines.push(`Source: ${parsedLog.srcip}${parsedLog.srcport ? ':' + parsedLog.srcport : ''}`);
    }
    if (parsedLog.dstip) {
        lines.push(`Destination: ${parsedLog.dstip}${parsedLog.dstport ? ':' + parsedLog.dstport : ''}`);
    }

    // Add service/protocol
    if (parsedLog.service) {
        lines.push(`Service: ${parsedLog.service}`);
    }

    // Add policy
    if (parsedLog.policyid) {
        lines.push(`Policy ID: ${parsedLog.policyid}`);
    }

    // Add security events
    if (parsedLog.virus) {
        lines.push(`Virus: ${parsedLog.virus}`);
    }
    if (parsedLog.attack) {
        lines.push(`Attack: ${parsedLog.attack}`);
    }

    return lines.join('\n');
}
