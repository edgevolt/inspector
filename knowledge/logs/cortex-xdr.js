/**
 * Palo Alto Networks Cortex XDR Log Field Knowledge Base
 * Comprehensive definitions for Cortex XDR Endpoint/Network logs (XQL / JSON Export)
 * Covers Event (XDR Endpoint), Network, File, Registry, and Incident/Alert schemas
 */

export default {
    // ============================================================
    //  CORE IDENTIFIERS & METADATA
    // ============================================================
    event_timestamp: {
        description: 'Timestamp indicating the precise time the event occurred on the endpoint',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:00.000Z', '1706540000000']
    },
    insert_timestamp: {
        description: 'Timestamp when the event was ingested into the Cortex XDR data lake',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:15.123Z']
    },
    event_id: {
        description: 'Unique identifier global to Cortex XDR for the specific event record',
        category: 'default',
        examples: ['12345678-ABCD-9012-3456-7890ABCDEF12']
    },
    event_type: {
        description: 'High-level categorization of the event (e.g., PROCESS, NETWORK, FILE, REGISTRY)',
        category: 'action',
        examples: ['PROCESS', 'NETWORK', 'FILE', 'REGISTRY']
    },
    event_sub_type: {
        description: 'Detailed sub-categorization of the event (e.g., PROCESS_START, NETWORK_CONNECTION)',
        category: 'action',
        examples: ['PROCESS_START', 'NETWORK_CONNECTION', 'FILE_CREATE', 'REGISTRY_WRITE']
    },
    log_source: {
        description: 'The product or module that generated the log (e.g., XDR Traps, NGFW, GlobalProtect)',
        category: 'source',
        examples: ['XDR Agent', 'PANW NGFW', 'GlobalProtect']
    },
    tenant_id: {
        description: 'Identifier for the specific Cortex XDR tenant/customer',
        category: 'default',
        examples: ['xyz123']
    },

    // ============================================================
    //  ENDPOINT & AGENT METADATA
    // ============================================================
    agent_id: {
        description: 'Unique global identifier for the Cortex XDR agent installed on the endpoint',
        category: 'source',
        examples: ['A1B2C3D4E5F67890A1B2C3D4E5F67890']
    },
    agent_hostname: {
        description: 'Hostname of the endpoint where the Cortex XDR agent is installed',
        category: 'source',
        examples: ['DESKTOP-ABC123', 'SRV-SQL-01']
    },
    agent_os_type: {
        description: 'Operating system platform of the endpoint (e.g., Windows, macOS, Linux)',
        category: 'source',
        examples: ['Windows', 'macOS', 'Linux']
    },
    agent_os_version: {
        description: 'Specific version or build of the operating system',
        category: 'source',
        examples: ['10.0.19045', '14.3.1']
    },
    agent_version: {
        description: 'Version string of the installed Cortex XDR agent firmware',
        category: 'default',
        examples: ['8.2.0.1234']
    },
    agent_ip_addresses: {
        description: 'Array or comma-separated list of all IP addresses bound to the agent endpoint',
        category: 'source',
        examples: ['192.168.1.50, 10.0.0.5']
    },
    agent_mac_addresses: {
        description: 'Array or comma-separated list of all MAC addresses bound to the agent endpoint',
        category: 'source',
        examples: ['00:1A:2B:3C:4D:5E']
    },
    user_name: {
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
    //  ACTOR / INITIATING PROCESS (Source)
    // ============================================================
    actor_process_image_path: {
        description: 'Full file path to the executable image of the process that initiated the event',
        category: 'source',
        examples: ['C:\\Windows\\System32\\cmd.exe']
    },
    actor_process_image_name: {
        description: 'Name of the executable file that initiated the event',
        category: 'source',
        examples: ['cmd.exe', 'powershell.exe', 'explorer.exe']
    },
    actor_process_command_line: {
        description: 'Command line string used to launch the initiating actor process (including arguments)',
        category: 'action',
        examples: ['cmd.exe /c start script.bat']
    },
    actor_process_os_pid: {
        description: 'Operating System Process ID (PID) of the initiating actor process',
        category: 'source',
        examples: ['4096']
    },
    actor_process_causality_id: {
        description: 'Cortex XDR specific identifier linking processes into a causal chain (Causality ID)',
        category: 'default',
        examples: ['12345678abcdef90']
    },
    actor_process_instance_id: {
        description: 'Globally unique identifier for the specific execution instance of the actor process',
        category: 'default',
        examples: ['90ABCDEF12345678']
    },
    actor_process_image_sha256: {
        description: 'SHA-256 hash of the initiating actor process executable',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },
    actor_process_signature_status: {
        description: 'Status of the digital signature check for the actor process (e.g., SIGNED_VALID)',
        category: 'security',
        examples: ['SIGNED_VALID', 'UNSIGNED', 'INVALID']
    },
    actor_process_signature_vendor: {
        description: 'Publisher name corresponding to the digital signature on the actor process',
        category: 'security',
        examples: ['Microsoft Corporation', 'Palo Alto Networks']
    },
    actor_thread_thread_id: {
        description: 'Operating System Thread ID within the actor process that executed the event',
        category: 'source',
        examples: ['1044']
    },

    // ============================================================
    //  ACTION / TARGET PROCESS (Destination Process)
    // ============================================================
    action_process_image_path: {
        description: 'Full file path to the executable image of the target process spawned or accessed',
        category: 'destination',
        examples: ['C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe']
    },
    action_process_image_name: {
        description: 'Name of the executable file representing the target process',
        category: 'destination',
        examples: ['powershell.exe', 'malware.exe']
    },
    action_process_command_line: {
        description: 'Command line string used to launch the target process (including arguments)',
        category: 'action',
        examples: ['powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA...']
    },
    action_process_os_pid: {
        description: 'Operating System Process ID (PID) of the target process',
        category: 'destination',
        examples: ['8192']
    },
    action_process_instance_id: {
        description: 'Globally unique identifier for the specific execution instance of the target process',
        category: 'default',
        examples: ['ABCDEF1234567890']
    },
    action_process_image_sha256: {
        description: 'SHA-256 hash of the target process executable payload',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },
    action_process_signature_status: {
        description: 'Status of the digital signature check for the target process execution',
        category: 'security',
        examples: ['SIGNED_VALID', 'UNSIGNED', 'INVALID']
    },

    // ============================================================
    //  NETWORK ACTIVITY (Action Network)
    // ============================================================
    action_local_ip: {
        description: 'Local Source IPv4 or IPv6 address initiating the network connection',
        category: 'source',
        examples: ['192.168.1.50']
    },
    action_local_port: {
        description: 'Local Source port mapped to the network socket connection',
        category: 'source',
        examples: ['54321']
    },
    action_remote_ip: {
        description: 'Remote Destination IPv4 or IPv6 address receiving the connection',
        category: 'destination',
        examples: ['203.0.113.100']
    },
    action_remote_port: {
        description: 'Remote Destination port associated with the network trace',
        category: 'destination',
        examples: ['443', '80', '53']
    },
    action_network_protocol: {
        description: 'Layer 4 Transport Protocol (e.g., TCP, UDP, ICMP)',
        category: 'protocol',
        examples: ['TCP', 'UDP']
    },
    action_country: {
        description: 'Geographic country mapping corresponding to the Remote IP address',
        category: 'traffic',
        examples: ['US', 'CN', 'RU']
    },
    action_dst_host: {
        description: 'Destination hostname or FQDN associated with the network traffic trace',
        category: 'destination',
        examples: ['api.example.com', 'malicious.com']
    },

    // ============================================================
    //  FILE ACTIVITY (Action File)
    // ============================================================
    action_file_path: {
        description: 'Full file path of a file that was created, read, or modified',
        category: 'destination',
        examples: ['C:\\Users\\jsmith\\Downloads\\payload.exe']
    },
    action_file_name: {
        description: 'Name of the targeted file object',
        category: 'destination',
        examples: ['payload.exe', 'document.docx']
    },
    action_file_extension: {
        description: 'Extract of the target files string extension (e.g., .exe, .dll)',
        category: 'default',
        examples: ['exe', 'dll']
    },
    action_file_sha256: {
        description: 'Cryptographic SHA-256 hash representation of the targeted file',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },
    action_file_size: {
        description: 'Size of the targeted file payload on disk (in bytes)',
        category: 'default',
        examples: ['1048576']
    },
    action_file_previous_name: {
        description: 'Original name of the file before a specific rename/move action',
        category: 'source',
        examples: ['old_name.tmp']
    },
    action_file_previous_path: {
        description: 'Original path of the file before a specific rename/move action',
        category: 'source',
        examples: ['C:\\Windows\\Temp\\old_name.tmp']
    },

    // ============================================================
    //  REGISTRY ACTIVITY (Action Registry)
    // ============================================================
    action_registry_key_name: {
        description: 'Full hierarchy path to the Windows Registry Key being modified',
        category: 'destination',
        examples: ['HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run']
    },
    action_registry_value_name: {
        description: 'Name of the specific Windows Registry value within the targeted key',
        category: 'destination',
        examples: ['PersistenceKey']
    },
    action_registry_data: {
        description: 'Data written into the specific Registry Key / value mapping',
        category: 'action',
        examples: ['C:\\Windows\\Temp\\malware.exe']
    },
    action_registry_previous_data: {
        description: 'Data held within the specific Registry Key / value mapping before modification',
        category: 'source',
        examples: ['C:\\Windows\\System32\\svchost.exe']
    },

    // ============================================================
    //  INCIDENTS, ALERTS & DETECTIONS
    // ============================================================
    incident_id: {
        description: 'High-level Incident ID grouping multiple aggregated security alerts',
        category: 'security',
        examples: ['INC-1234']
    },
    alert_id: {
        description: 'Unique global identifier for the specific security alert',
        category: 'security',
        examples: ['12345678-ABCD-1234']
    },
    alert_name: {
        description: 'Classification name defining the detected behavioral or static threat',
        category: 'security',
        examples: ['Suspicious PowerShell command execution', 'WildFire Malware Detection']
    },
    alert_description: {
        description: 'Detailed explanation summarizing the malicious behavior and potential impact',
        category: 'security',
        examples: ['A PowerShell script was executed with an obfuscated base64 command line.']
    },
    alert_category: {
        description: 'Classification of the security alert defining its lifecycle stage (MITRE Mapping)',
        category: 'security',
        examples: ['Execution', 'Privilege Escalation']
    },
    alert_severity: {
        description: 'Assigned severity level reflecting the dangerousness of the threat (Low, Medium, High, Critical)',
        category: 'security',
        examples: ['High', 'Critical']
    },
    alert_source: {
        description: 'Cortex component or engine generating the specific protective alert (e.g., WildFire, Analytics, XDR Agent)',
        category: 'security',
        examples: ['XDR Agent', 'Analytics Engine', 'WildFire']
    },
    mitigation_status: {
        description: 'State detailing if the protective engines actively blocked or quarantined the threat',
        category: 'security',
        examples: ['Blocked', 'Reported', 'Failed']
    },
    resolution_status: {
        description: 'Current status detailing human analysis on the alert',
        category: 'security',
        examples: ['Under Investigation', 'Resolved_True_Positive', 'Resolved_False_Positive']
    },
    module_id: {
        description: 'Cortex engine module that identified or protected against the behavior',
        category: 'security',
        examples: ['Anti-Malware', 'Behavioral Threat Protection (BTP)']
    },
    xdr_url: {
        description: 'Direct deep-link to the incident investigation within the Cortex XDR console',
        category: 'default',
        examples: ['https://tenant.xdr.paloaltonetworks.com/app/investigate/incident/1234']
    }
};
