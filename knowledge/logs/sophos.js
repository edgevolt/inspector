/**
 * Sophos Endpoint Log Field Knowledge Base
 * Comprehensive definitions for Sophos Intercept X and Sophos Central logs (JSON Export / Live Discover)
 * Covers Event, Network, File, Registry, and Alert/Threat schemas
 */

export default {
    // ============================================================
    //  CORE IDENTIFIERS & METADATA
    // ============================================================
    created_at: {
        description: 'Timestamp when the event was generated or ingested into Sophos Central',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:15.123Z']
    },
    when: {
        description: 'Timestamp indicating the precise time the event occurred on the endpoint',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:00.000Z', '1706540000']
    },
    id: {
        description: 'Unique global identifier for the specific event record within Sophos',
        category: 'default',
        examples: ['12345678-ABCD-9012-3456-7890ABCDEF12']
    },
    customer_id: {
        description: 'Identifier for the specific Sophos Central customer/tenant',
        category: 'default',
        examples: ['xyz123']
    },
    tenant_id: {
        description: 'Identifier for the specific Sophos Central tenant',
        category: 'default',
        examples: ['xyz123']
    },
    type: {
        description: 'Event type identifier (e.g., Event::Endpoint::Threat::Detected, Event::Endpoint::Process::Created)',
        category: 'action',
        examples: ['Event::Endpoint::Threat::Detected', 'Event::Endpoint::DataLossPreventionUserAllowed']
    },
    name: {
        description: 'Human-readable name of the event or alert',
        category: 'action',
        examples: ['Malware detected', 'Process Created', 'Web Control Violation']
    },
    group: {
        description: 'High-level thematic grouping of the event (e.g., MALWARE, PUA, WEB_CONTROL)',
        category: 'action',
        examples: ['MALWARE', 'PUA', 'WEB_CONTROL', 'DATA_LOSS_PREVENTION']
    },
    description: {
        description: 'Detailed explanation summarizing the event or malicious behavior',
        category: 'default',
        examples: ['A malicious file was blocked from executing.', 'User bypassed the web filter warning.']
    },
    event_type: {
        description: 'Categorization of the event (e.g., Process, Network, Threat)',
        category: 'action',
        examples: ['Process', 'Network', 'File', 'Registry', 'Threat']
    },
    event_sub_type: {
        description: 'Sub-categorization of the event (e.g., Creation, Deletion, Modification)',
        category: 'action',
        examples: ['Creation', 'Deletion', 'Modification']
    },

    // ============================================================
    //  ENDPOINT & AGENT METADATA
    // ============================================================
    endpoint_id: {
        description: 'Unique global identifier for the Sophos agent/endpoint',
        category: 'source',
        examples: ['A1B2C3D4-E5F6-7890-A1B2-C3D4E5F67890']
    },
    endpoint_type: {
        description: 'Type of the endpoint (e.g., computer, server, mobile)',
        category: 'source',
        examples: ['computer', 'server', 'mobile']
    },
    host: {
        description: 'Hostname of the endpoint where the event occurred',
        category: 'source',
        examples: ['DESKTOP-ABC123', 'SRV-SQL-01']
    },
    system: {
        description: 'System name or FQDN of the endpoint',
        category: 'source',
        examples: ['DESKTOP-ABC123.contoso.local']
    },
    os: {
        description: 'Operating system platform of the endpoint (e.g., Windows, macOS, Linux)',
        category: 'source',
        examples: ['Windows', 'macOS', 'Linux']
    },
    platform: {
        description: 'Platform of the endpoint (e.g., win, mac, linux)',
        category: 'source',
        examples: ['win', 'mac', 'linux']
    },
    device_type: {
        description: 'Type of device (e.g., desktop, laptop, server)',
        category: 'source',
        examples: ['desktop', 'laptop', 'server']
    },
    source_info_ip: {
        description: 'Local IP address of the endpoint reporting the event',
        category: 'source',
        examples: ['192.168.1.50', '10.0.0.5']
    },
    source_info_mac: {
        description: 'MAC address of the endpoint',
        category: 'source',
        examples: ['00:1A:2B:3C:4D:5E']
    },
    user_id: {
        description: 'Unique identifier for the user account associated with the event',
        category: 'source',
        examples: ['S-1-5-21-3623811015-3361044348-30300820-1013']
    },
    user: {
        description: 'Target user account active on the endpoint during the recorded event',
        category: 'source',
        examples: ['jsmith', 'SYSTEM']
    },
    user_domain: {
        description: 'Active Directory domain or workgroup associated with the user account',
        category: 'source',
        examples: ['CONTOSO', 'WORKGROUP']
    },

    // ============================================================
    //  PROCESS ACTIVITY (Source and Target)
    // ============================================================
    process_name: {
        description: 'Name of the executable file associated with the target process',
        category: 'destination',
        examples: ['powershell.exe', 'cmd.exe', 'malware.exe']
    },
    process_path: {
        description: 'Full file path to the executable image of the target process',
        category: 'destination',
        examples: ['C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe']
    },
    cmd_line: {
        description: 'Full command line arguments mapping to the executing target process',
        category: 'action',
        examples: ['powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA...']
    },
    pid: {
        description: 'Operating System Process ID (PID) of the executing process',
        category: 'destination',
        examples: ['8192']
    },
    sha256: {
        description: 'SHA-256 hash of the process executable or targeted file payload',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },
    sha1: {
        description: 'SHA-1 hash of the process executable or targeted file payload',
        category: 'security',
        examples: ['da39a3ee5e6b4b0d3255bfef95601890afd80709']
    },
    md5: {
        description: 'MD5 hash of the process executable or targeted file payload',
        category: 'security',
        examples: ['d41d8cd98f00b204e9800998ecf8427e']
    },
    file_size: {
        description: 'Size of the targeted file or executable payload on disk (in bytes)',
        category: 'default',
        examples: ['1048576']
    },
    app_name: {
        description: 'Application name associated with the process or event',
        category: 'default',
        examples: ['Microsoft PowerShell', 'Google Chrome']
    },

    // ============================================================
    //  PARENT PROCESS
    // ============================================================
    parent_name: {
        description: 'Name of the immediate parent process that spawned the execution',
        category: 'source',
        examples: ['explorer.exe', 'cmd.exe']
    },
    parent_path: {
        description: 'Full file path to the executable image of the parent process',
        category: 'source',
        examples: ['C:\\Windows\\explorer.exe']
    },
    parent_cmd_line: {
        description: 'Command line string used to launch the parent process (including arguments)',
        category: 'action',
        examples: ['cmd.exe /c start script.bat']
    },
    parent_pid: {
        description: 'Process ID (PID) of the immediate parent process',
        category: 'source',
        examples: ['1024']
    },
    parent_sha256: {
        description: 'SHA-256 hash of the immediate parent process executable payloads',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },

    // ============================================================
    //  NETWORK ACTIVITY
    // ============================================================
    local_ip: {
        description: 'Local Source IPv4 or IPv6 address initiating or receiving the connection',
        category: 'source',
        examples: ['192.168.1.50']
    },
    local_port: {
        description: 'Local Source port mapped to the network socket',
        category: 'source',
        examples: ['54321']
    },
    remote_ip: {
        description: 'Remote Destination IPv4 or IPv6 address',
        category: 'destination',
        examples: ['203.0.113.100']
    },
    remote_port: {
        description: 'Remote Destination port (e.g., 80, 443, 53)',
        category: 'destination',
        examples: ['443']
    },
    protocol: {
        description: 'Layer 4 Transport Protocol (e.g., TCP, UDP, ICMP)',
        category: 'protocol',
        examples: ['TCP', 'UDP']
    },
    direction: {
        description: 'Network communication direction (outbound vs inbound)',
        category: 'traffic',
        examples: ['outbound', 'inbound']
    },
    url: {
        description: 'Target Uniform Resource Locator (URL) requested in web traffic events',
        category: 'destination',
        examples: ['http://malicious.example.com/payload.exe']
    },
    domain: {
        description: 'Destination domain or FQDN associated with the network traffic trace',
        category: 'destination',
        examples: ['api.example.com', 'malicious.com']
    },
    web_property: {
        description: 'Web property or category associated with the URL or domain',
        category: 'default',
        examples: ['Search Engines', 'Malware']
    },

    // ============================================================
    //  FILE & REGISTRY ACTIVITY
    // ============================================================
    path: {
        description: 'Full file path or registry key associated with the event',
        category: 'destination',
        examples: ['C:\\Users\\jsmith\\Downloads\\payload.exe', 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run']
    },
    action: {
        description: 'Action performed on the file or registry key (e.g., Created, Deleted, Read, Written)',
        category: 'action',
        examples: ['Created', 'Deleted', 'Read', 'Written']
    },
    category_type: {
        description: 'Category of the item being monitored (e.g., File, Registry, Network)',
        category: 'default',
        examples: ['File', 'Registry', 'Network']
    },

    // ============================================================
    //  INCIDENTS, ALERTS & DETECTIONS
    // ============================================================
    incident_id: {
        description: 'High-level Incident ID grouping multiple aggregated security alerts',
        category: 'security',
        examples: ['INC-1234']
    },
    severity: {
        description: 'Assigned severity level reflecting the dangerousness of the threat (low, medium, high, critical)',
        category: 'security',
        examples: ['high', 'critical', 'medium', 'low']
    },
    threat: {
        description: 'Name or classification defining the detected behavioral or static threat',
        category: 'security',
        examples: ['Troj/Ransom-A', 'Mal/Generic-S']
    },
    threatType: {
        description: 'Type of threat detected (e.g., malware, pua, exploit)',
        category: 'security',
        examples: ['malware', 'pua', 'exploit']
    },
    threat_source: {
        description: 'Source or engine that generated the threat detection',
        category: 'security',
        examples: ['Sophos Intercept X', 'Sophos Anti-Virus']
    },
    detection_identity_name: {
        description: 'Specific detection identity or rule name triggering the alert',
        category: 'security',
        examples: ['CryptoGuard', 'CredGuard']
    },
    rule_name: {
        description: 'Name of the specific rule or policy that triggered the event',
        category: 'security',
        examples: ['Block executable files', 'Detect Ransomware']
    },
    core_rule_id: {
        description: 'ID of the core rule triggering the detection in Live Discover',
        category: 'security',
        examples: ['123', '456']
    },
    mitigation_action: {
        description: 'Action taken by Sophos to mitigate the threat (e.g., Blocked, Cleaned, Quarantined)',
        category: 'security',
        examples: ['Blocked', 'Cleaned', 'Quarantined', 'Detected']
    },
    target_hash: {
        description: 'Hash of the target being acted upon in a detection event',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    }
};
