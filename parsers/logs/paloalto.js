/**
 * Palo Alto Networks Log Parser (PAN-OS 11.x)
 * Parses Palo Alto Networks firewall logs in CSV format
 * Supports PAN-OS 11.x Traffic and Threat log formats
 */

/**
 * Traffic log field mapping (PAN-OS 11.x - 108 fields)
 * Based on official PAN-OS 11.0/11.1/11.2 syslog format
 */
const TRAFFIC_FIELDS = [
    'future_use_1', 'receive_time', 'serial_number', 'type', 'subtype',
    'future_use_2', 'generated_time', 'src_ip', 'dst_ip', 'nat_src_ip',
    'nat_dst_ip', 'rule_name', 'src_user', 'dst_user', 'application',
    'virtual_system', 'src_zone', 'dst_zone', 'inbound_interface', 'outbound_interface',
    'log_action', 'future_use_3', 'session_id', 'repeat_count', 'src_port',
    'dst_port', 'nat_src_port', 'nat_dst_port', 'flags', 'protocol',
    'action', 'bytes', 'bytes_sent', 'bytes_received', 'packets',
    'start_time', 'elapsed_time', 'category', 'future_use_4', 'sequence_number',
    'action_flags', 'src_country', 'dst_country', 'future_use_5', 'packets_sent',
    'packets_received', 'session_end_reason', 'device_group_hierarchy_1', 'device_group_hierarchy_2', 'device_group_hierarchy_3',
    'device_group_hierarchy_4', 'virtual_system_name', 'device_name', 'action_source', 'src_vm_uuid',
    'dst_vm_uuid', 'tunnel_id', 'monitor_tag', 'parent_session_id', 'parent_start_time',
    'tunnel_type', 'sctp_association_id', 'sctp_chunks', 'sctp_chunks_sent', 'sctp_chunks_received',
    'rule_uuid', 'http2_connection', 'app_flap_count', 'policy_id', 'link_switches',
    'sdwan_cluster', 'sdwan_device_type', 'sdwan_cluster_type', 'sdwan_site', 'dynamic_user_group_name',
    'xff_address', 'src_device_category', 'src_device_profile', 'src_device_model', 'src_device_vendor',
    'src_device_os_family', 'src_device_os_version', 'src_hostname', 'src_mac_address', 'dst_device_category',
    'dst_device_profile', 'dst_device_model', 'dst_device_vendor', 'dst_device_os_family', 'dst_device_os_version',
    'dst_hostname', 'dst_mac_address', 'container_id', 'pod_namespace', 'pod_name',
    'src_external_dynamic_list', 'dst_external_dynamic_list', 'host_id', 'serial_number_2', 'src_dynamic_address_group',
    'dst_dynamic_address_group', 'session_owner', 'high_res_timestamp', 'a_slice_service_type', 'a_slice_differentiator',
    'app_subcategory', 'app_category', 'app_technology'
];

/**
 * Threat log field mapping (PAN-OS 11.x - 93 fields)
 * Includes all traffic fields plus threat-specific fields
 */
const THREAT_FIELDS = [
    'future_use_1', 'receive_time', 'serial_number', 'type', 'subtype',
    'future_use_2', 'generated_time', 'src_ip', 'dst_ip', 'nat_src_ip',
    'nat_dst_ip', 'rule_name', 'src_user', 'dst_user', 'application',
    'virtual_system', 'src_zone', 'dst_zone', 'inbound_interface', 'outbound_interface',
    'log_action', 'future_use_3', 'session_id', 'repeat_count', 'src_port',
    'dst_port', 'nat_src_port', 'nat_dst_port', 'flags', 'protocol',
    'action', 'url', 'threat_name', 'threat_category', 'severity',
    'direction', 'sequence_number', 'action_flags', 'src_country', 'dst_country',
    'future_use_4', 'content_type', 'pcap_id', 'file_digest', 'cloud',
    'url_index', 'user_agent', 'file_type', 'xff_address', 'referer',
    'sender', 'subject', 'recipient', 'report_id', 'device_group_hierarchy_1',
    'device_group_hierarchy_2', 'device_group_hierarchy_3', 'device_group_hierarchy_4', 'virtual_system_name', 'device_name',
    'future_use_5', 'src_vm_uuid', 'dst_vm_uuid', 'http_method', 'tunnel_id',
    'monitor_tag', 'parent_session_id', 'parent_start_time', 'tunnel_type', 'threat_id',
    'category_of_threat', 'content_version', 'future_use_6', 'sctp_association_id', 'payload_protocol_id',
    'http_headers', 'url_category_list', 'rule_uuid', 'http2_connection', 'dynamic_user_group_name',
    'xff_address_2', 'src_device_category', 'src_device_profile', 'src_device_model', 'src_device_vendor',
    'src_device_os_family', 'src_device_os_version', 'src_hostname', 'src_mac_address', 'dst_device_category',
    'dst_device_profile', 'dst_device_model', 'dst_device_vendor', 'dst_device_os_family', 'dst_device_os_version',
    'dst_hostname', 'dst_mac_address', 'container_id', 'pod_namespace', 'pod_name',
    'src_external_dynamic_list', 'dst_external_dynamic_list', 'host_id', 'serial_number_2', 'src_dynamic_address_group',
    'dst_dynamic_address_group', 'session_owner', 'high_res_timestamp', 'nsdsai_ssa', 'nsdsai_sda'
];

/**
 * Parse CSV line with proper escape sequence handling
 * Palo Alto uses backslash to escape commas within fields
 * @param {string} line - CSV line
 * @returns {Array} Array of field values
 */
function parseCSVLine(line) {
    const fields = [];
    let currentField = '';
    let i = 0;

    while (i < line.length) {
        const char = line[i];

        // Handle escaped comma
        if (char === '\\' && i + 1 < line.length && line[i + 1] === ',') {
            currentField += ',';
            i += 2;
            continue;
        }

        // Handle field separator
        if (char === ',') {
            fields.push(currentField.trim());
            currentField = '';
            i++;
            continue;
        }

        currentField += char;
        i++;
    }

    // Add the last field
    if (currentField || line.endsWith(',')) {
        fields.push(currentField.trim());
    }

    return fields;
}

/**
 * Determine log type from parsed fields
 * @param {Array} fields - Parsed CSV fields
 * @returns {string|null} Log type ('TRAFFIC' or 'THREAT') or null
 */
function detectLogType(fields) {
    if (fields.length < 5) return null;

    const type = fields[3]?.toUpperCase();
    const subtype = fields[4]?.toLowerCase();

    if (type === 'TRAFFIC') return 'TRAFFIC';
    if (type === 'THREAT') return 'THREAT';

    return null;
}

/**
 * Map CSV fields to named object based on log type
 * @param {Array} fields - Parsed CSV fields
 * @param {string} logType - Log type ('TRAFFIC' or 'THREAT')
 * @returns {object} Mapped field object
 */
function mapFields(fields, logType) {
    const fieldMap = logType === 'TRAFFIC' ? TRAFFIC_FIELDS : THREAT_FIELDS;
    const mapped = {};

    for (let i = 0; i < fields.length && i < fieldMap.length; i++) {
        const fieldName = fieldMap[i];
        const value = fields[i];

        // Skip FUTURE_USE fields
        if (fieldName.startsWith('future_use')) continue;

        // Skip empty values
        if (!value || value === '') continue;

        // Convert numeric values
        if (/^\d+$/.test(value)) {
            mapped[fieldName] = parseInt(value, 10);
        } else {
            mapped[fieldName] = value;
        }
    }

    return mapped;
}

/**
 * Parse a Palo Alto log line
 * @param {string} logLine - Raw CSV log line
 * @returns {object} Parsed log object with key-value pairs
 */
export function parseLog(logLine) {
    if (!logLine || typeof logLine !== 'string') {
        return {};
    }

    // Parse CSV fields
    const fields = parseCSVLine(logLine);

    // Detect log type
    const logType = detectLogType(fields);
    if (!logType) {
        return { error: 'Unable to detect log type', raw_fields: fields };
    }

    // Map fields to named object
    const parsed = mapFields(fields, logType);

    // Add log type for reference
    parsed._log_type = logType;

    return parsed;
}

/**
 * Parse multiple Palo Alto log lines
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
            applications: {},
            threats: {}
        };
    }

    return {
        totalLogs: parsedLogs.length,
        uniqueSourceIPs: getUniqueValues(parsedLogs, 'src_ip').length,
        uniqueDestIPs: getUniqueValues(parsedLogs, 'dst_ip').length,
        actions: countFieldValues(parsedLogs, 'action'),
        applications: countFieldValues(parsedLogs, 'application'),
        threats: countFieldValues(parsedLogs, 'threat_name')
    };
}
