/**
 * SentinelOne Log Field Knowledge Base
 * Comprehensive definitions for SentinelOne Endpoint Detection and Response (EDR) logs
 * Covers Deep Visibility, Threat Management, and Agent Activity telemetry
 */

export default {
    // ============================================================
    //  CORE IDENTIFIERS & METADATA
    // ============================================================
    EventTimestamp: {
        description: 'ISO-8601 formatted timestamp indicating when the event occurred',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:00.0000000Z']
    },
    CreatedAt: {
        description: 'Timestamp when the event or threat was created or ingested into the console',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:05.123Z']
    },
    EventType: {
        description: 'The specific type of Deep Visibility or system event (e.g., Process Creation, DNS, Network)',
        category: 'action',
        examples: ['Process Creation', 'DNS', 'Network', 'File Modification', 'Registry Key Creation']
    },
    ActivityType: {
        description: 'The numeric or enumerated activity identifier for SentinelOne management events',
        category: 'action',
        examples: ['43 (Mitigation Initiated)', '18 (Malicious Process Killed)']
    },
    TaskType: {
        description: 'Internal SentinelOne task type driving the telemetry',
        category: 'default',
        examples: ['Threat Detection', 'Deep Visibility']
    },
    StorylineId: {
        description: 'Unique identifier grouping related causal events together (The TrueContext Storyline)',
        category: 'default',
        examples: ['D38F2B1C-E89A-407B-8A52-AE547F187C11']
    },

    // ============================================================
    //  ENDPOINT & AGENT METADATA
    // ============================================================
    AgentId: {
        description: 'Unique global identifier for the SentinelOne agent installed on the endpoint',
        category: 'source',
        examples: ['123456789012345678']
    },
    ComputerName: {
        description: 'Hostname of the endpoint where the event occurred',
        category: 'source',
        examples: ['DESKTOP-ABC123', 'SRV-SQL-01']
    },
    EndpointName: {
        description: 'Alias for the hostname managed within the SentinelOne console',
        category: 'source',
        examples: ['DESKTOP-ABC123']
    },
    OsType: {
        description: 'Operating system type of the endpoint (e.g., Windows, macOS, Linux)',
        category: 'source',
        examples: ['Windows', 'macOS', 'Linux']
    },
    OsVersion: {
        description: 'Specific version or build of the operating system',
        category: 'source',
        examples: ['Windows 10, version 22H2', 'macOS 14.3.1']
    },
    AgentVersion: {
        description: 'Version string of the installed SentinelOne agent',
        category: 'default',
        examples: ['23.2.3.358']
    },
    Domain: {
        description: 'Active Directory domain or workgroup where the endpoint is joined',
        category: 'source',
        examples: ['CONTOSO.LOCAL', 'WORKGROUP']
    },
    SiteId: {
        description: 'Identifier for the Site the endpoint belongs to within the Management Console',
        category: 'default',
        examples: ['112233445566778899']
    },
    SiteName: {
        description: 'Display name of the Site the endpoint belongs to',
        category: 'default',
        examples: ['US West Coast - Execs', 'Default Site']
    },
    AccountId: {
        description: 'Identifier for the global Account the endpoint belongs to',
        category: 'default',
        examples: ['998877665544332211']
    },
    AccountName: {
        description: 'Display name of the global Account',
        category: 'default',
        examples: ['Contoso Corporation']
    },
    GroupId: {
        description: 'Identifier for the specific Group the endpoint is assigned to',
        category: 'default',
        examples: ['556677889900112233']
    },
    GroupName: {
        description: 'Display name of the specific Group the endpoint is assigned to',
        category: 'default',
        examples: ['Server Infrastructure', 'Workstations']
    },

    // ============================================================
    //  PROCESS ACTIVITY (Deep Visibility)
    // ============================================================
    ProcessName: {
        description: 'Name of the executable file associated with the target process',
        category: 'destination',
        examples: ['powershell.exe', 'cmd.exe']
    },
    ProcessImagePath: {
        description: 'Full file path to the executable image of the target process',
        category: 'destination',
        examples: ['C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe']
    },
    ProcessCmd: {
        description: 'Full command line arguments mapping to the executing process',
        category: 'action',
        examples: ['powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA...']
    },
    ProcessId: {
        description: 'Operating System Process ID (PID) of the executing process',
        category: 'destination',
        examples: ['8192']
    },
    ProcessStartTime: {
        description: 'Timestamp when the process initiated execution',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:00.0000000Z']
    },
    ProcessUserName: {
        description: 'Name of the user account under which the process executes',
        category: 'source',
        examples: ['jsmith', 'SYSTEM']
    },
    ProcessIntegrityLevel: {
        description: 'Windows integrity level under which the process is running',
        category: 'security',
        examples: ['High', 'System', 'Medium']
    },
    ProcessIsRoot: {
        description: 'Boolean indicating if the process is running with root/SYSTEM privileges',
        category: 'security',
        examples: ['True', 'False']
    },
    ProcessSessionId: {
        description: 'Windows Session ID mapped to the executing process',
        category: 'default',
        examples: ['1', '0']
    },
    ProcessSubsystem: {
        description: 'Executable subsystem of the process (e.g., Win32, POSIX)',
        category: 'default',
        examples: ['Win32', 'Console']
    },
    Publisher: {
        description: 'Digital signature publisher name of the executable',
        category: 'security',
        examples: ['Microsoft Corporation', 'Google LLC']
    },

    // ============================================================
    //  INITIATING PROCESS (PARENT)
    // ============================================================
    ParentProcessName: {
        description: 'Name of the immediate parent process that spawned the execution',
        category: 'source',
        examples: ['explorer.exe', 'cmd.exe']
    },
    ParentProcessId: {
        description: 'Process ID (PID) of the immediate parent process',
        category: 'source',
        examples: ['1024']
    },
    ParentProcessImagePath: {
        description: 'Full file path to the executable image of the parent process',
        category: 'source',
        examples: ['C:\\Windows\\explorer.exe']
    },
    ParentProcessStartTime: {
        description: 'Timestamp when the parent process was originally launched',
        category: 'timestamp',
        examples: ['2026-03-07T10:00:00.0000000Z']
    },

    // ============================================================
    //  FILE hashes & IDENTITY
    // ============================================================
    Sha1: {
        description: 'SHA-1 hash of the process or file payload',
        category: 'security',
        examples: ['da39a3ee5e6b4b0d3255bfef95601890afd80709']
    },
    Sha256: {
        description: 'SHA-256 hash of the process or file payload',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },
    Md5: {
        description: 'MD5 hash of the process or file payload',
        category: 'security',
        examples: ['d41d8cd98f00b204e9800998ecf8427e']
    },

    // ============================================================
    //  NETWORK ACTIVITY (Deep Visibility)
    // ============================================================
    SrcIp: {
        description: 'Local Source IPv4 or IPv6 address initiating or receiving the connection',
        category: 'source',
        examples: ['192.168.1.50']
    },
    SrcPort: {
        description: 'Local Source port mapped to the network socket',
        category: 'source',
        examples: ['54321']
    },
    DstIp: {
        description: 'Remote Destination IPv4 or IPv6 address',
        category: 'destination',
        examples: ['203.0.113.100']
    },
    DstPort: {
        description: 'Remote Destination port (e.g., 80, 443, 53)',
        category: 'destination',
        examples: ['443']
    },
    TransportProtocol: {
        description: 'Layer 4 Transport Protocol (e.g., TCP, UDP, ICMP)',
        category: 'protocol',
        examples: ['TCP', 'UDP']
    },
    NetDirection: {
        description: 'Network communication direction (Inbound vs Outbound)',
        category: 'traffic',
        examples: ['Outbound', 'Inbound']
    },

    // ============================================================
    //  DNS ACTIVITY
    // ============================================================
    DnsRequest: {
        description: 'Fully Qualified Domain Name (FQDN) queried in the DNS request',
        category: 'destination',
        examples: ['api.example.com', 'malicious.com']
    },
    DnsResponse: {
        description: 'Resolved IP addresses or records returned by the DNS server',
        category: 'traffic',
        examples: ['203.0.113.100']
    },
    IsLocalNet: {
        description: 'Boolean indicating if the destination IP is situated in an internal subnet',
        category: 'traffic',
        examples: ['True', 'False']
    },

    // ============================================================
    //  FILE & REGISTRY ACTIVITY
    // ============================================================
    FilePath: {
        description: 'Full file path of a file that was created, modified, or deleted',
        category: 'destination',
        examples: ['C:\\Users\\jsmith\\Downloads\\payload.exe']
    },
    OldFilePath: {
        description: 'Original file path before an explicit file rename event occurred',
        category: 'source',
        examples: ['C:\\Users\\jsmith\\Downloads\\old_name.tmp']
    },
    RegistryKeyPath: {
        description: 'Full hierarchy path to the Windows Registry Key being accessed or modified',
        category: 'destination',
        examples: ['HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run']
    },
    RegistryValueName: {
        description: 'Name of the specific Registry value within the targeted key',
        category: 'destination',
        examples: ['PersistenceKey']
    },
    RegistryValue: {
        description: 'Data written into the specific Registry Key / Value Name',
        category: 'action',
        examples: ['C:\\Windows\\Temp\\malware.exe']
    },
    IndicatorName: {
        description: 'Identified behavioral indicator mapped to the specific Registry or File action',
        category: 'security',
        examples: ['Persistence Detection', 'Evasion Technique']
    },

    // ============================================================
    //  THREATS & INCIDENTS (Management console alerts)
    // ============================================================
    ThreatId: {
        description: 'Unique global identifier for the detected Threat/Incident',
        category: 'security',
        examples: ['TID-12345678-ABCD-1234']
    },
    ThreatName: {
        description: 'Name classifying the detected threat or engine match (e.g., Malware.Generic)',
        category: 'security',
        examples: ['Malware.Generic', 'Ransomware', 'Behavioral Indicator']
    },
    Classification: {
        description: 'Classification assigned to the threat (e.g., Malware, Exploit, Adware)',
        category: 'security',
        examples: ['Malware', 'Exploit', 'PUP', 'Adware']
    },
    MitigationStatus: {
        description: 'Current real-time mitigation state (e.g., Mitigated, Pending, Failed)',
        category: 'security',
        examples: ['Mitigated', 'Pending', 'Failed', 'Suspicious']
    },
    ThreatMitigationStatus: {
        description: 'Detailed threat mitigation status mapping to remediation elements',
        category: 'security',
        examples: ['Quarantined', 'Killed and Quarantined']
    },
    AnalystVerdict: {
        description: 'Human-defined verdict assigned to the incident (True Positive, False Positive)',
        category: 'security',
        examples: ['True Positive', 'False Positive', 'Undefined']
    },
    ConfidenceLevel: {
        description: 'SentinelOne confidence level in the threat detection (Suspicious vs Malicious)',
        category: 'security',
        examples: ['Malicious', 'Suspicious']
    },
    InitiatedBy: {
        description: 'Which engine or logic tree initiated the threat detection (e.g., Agent Policy, Cloud Intelligence)',
        category: 'security',
        examples: ['Agent Policy', 'Cloud Intelligence', 'Behavioral']
    },

    // ============================================================
    //  CLOUD & URL ACTIVITY
    // ============================================================
    Url: {
        description: 'Target Uniform Resource Locator (URL) requested in web traffic events',
        category: 'destination',
        examples: ['http://malicious.example.com/payload.exe']
    },
    UserAgent: {
        description: 'HTTP Client User-Agent string used during the request',
        category: 'source',
        examples: ['Mozilla/5.0 (Windows NT 10.0; Win64; x64)']
    },
    TlsVersion: {
        description: 'Negotiated Transport Layer Security (TLS) version during secure connections',
        category: 'protocol',
        examples: ['TLS 1.2', 'TLS 1.3']
    },
    TlsCipher: {
        description: 'Negotiated cipher suite during the secure connection',
        category: 'security',
        examples: ['TLS_AES_256_GCM_SHA384']
    }
};
