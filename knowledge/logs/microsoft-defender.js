/**
 * Microsoft Defender for Endpoint (MDE) / Microsoft 365 Defender Log Field Knowledge Base
 * Comprehensive definitions for Advanced Hunting, SIEM, and Streaming API logs
 * Covers schemas such as DeviceProcessEvents, DeviceNetworkEvents, DeviceFileEvents, AlertEvents, DeviceLogonEvents, and IdentityLogonEvents.
 */

export default {
    // ============================================================
    //  CORE IDENTIFIERS & METADATA
    // ============================================================
    TimeGenerated: {
        description: 'Timestamp indicating the precise time the event occurred (typically UTC)',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:00.0000000Z']
    },
    Timestamp: {
        description: 'Timestamp indicating the precise time the event occurred (Advanced Hunting schema format)',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:00Z']
    },
    ReportId: {
        description: 'Unique identifier for the specific event/report within MDE',
        category: 'default',
        examples: ['4563-8820-9912-3498']
    },
    TenantId: {
        description: 'Azure AD / Entra ID tenant ID associated with the environment',
        category: 'default',
        examples: ['00000000-0000-0000-0000-000000000000']
    },
    AppId: {
        description: 'Application ID, commonly used when an event involves a registered enterprise application',
        category: 'default',
        examples: ['1fec8e78-bce4-4aaf-ab1b-5451cc387264']
    },
    TableName: {
        description: 'Name of the Advanced Hunting table the event originates from (e.g., DeviceProcessEvents)',
        category: 'action',
        examples: ['DeviceProcessEvents', 'DeviceNetworkEvents', 'AlertEvents']
    },

    // ============================================================
    //  DEVICE IDENTIFIERS & SYSTEM INFO
    // ============================================================
    DeviceId: {
        description: 'Unique identifier for the device (endpoint) within Microsoft Defender for Endpoint',
        category: 'source',
        examples: ['12345678abcdef9012345678abcdef9012345678']
    },
    DeviceName: {
        description: 'Fully Qualified Domain Name (FQDN) or short name of the endpoint',
        category: 'source',
        examples: ['desktop-abc1234', 'srv-sql-01.contoso.local']
    },
    MachineGroup: {
        description: 'Name of the machine group the device belongs to within the Defender portal',
        category: 'source',
        examples: ['Servers', 'Executive Laptops', 'Unassigned']
    },
    PublicIP: {
        description: 'The public-facing IP address of the device (as seen by Microsoft services)',
        category: 'source',
        examples: ['203.0.113.42']
    },
    OSPlatform: {
        description: 'Operating system platform of the endpoint (e.g., Windows 11, macOS, Linux)',
        category: 'source',
        examples: ['Windows 10', 'Windows 11', 'macOS', 'Ubuntu']
    },
    OSBuild: {
        description: 'Build number of the operating system',
        category: 'source',
        examples: ['19045', '22621']
    },
    OSArchitecture: {
        description: 'Processor architecture of the endpoint',
        category: 'source',
        examples: ['x64', 'x86', 'ARM64']
    },
    ClientVersion: {
        description: 'Version of the Microsoft Defender for Endpoint sensor running on the device',
        category: 'default',
        examples: ['10.8250.23122.1']
    },

    // ============================================================
    //  INITIATING PROCESS (SOURCE PROCESS)
    // ============================================================
    InitiatingProcessId: {
        description: 'Operating system Process ID (PID) of the process that initiated the action',
        category: 'source',
        examples: ['4096']
    },
    InitiatingProcessFileName: {
        description: 'Name of the executable file of the initiating process',
        category: 'source',
        examples: ['cmd.exe', 'powershell.exe', 'explorer.exe']
    },
    InitiatingProcessFolderPath: {
        description: 'Full folder path containing the initiating process executable',
        category: 'source',
        examples: ['C:\\Windows\\System32\\cmd.exe']
    },
    InitiatingProcessCommandLine: {
        description: 'Full command line string used to launch the initiating process (including arguments)',
        category: 'action',
        examples: ['cmd.exe /c start script.bat', '"C:\\Program Files\\app.exe" --silent']
    },
    InitiatingProcessCreationTime: {
        description: 'Timestamp when the initiating process was created',
        category: 'timestamp',
        examples: ['2026-03-07T14:28:00Z']
    },
    InitiatingProcessParentId: {
        description: 'Process ID (PID) of the parent of the initiating process',
        category: 'source',
        examples: ['1024']
    },
    InitiatingProcessParentFileName: {
        description: 'File name of the parent of the initiating process',
        category: 'source',
        examples: ['explorer.exe']
    },
    InitiatingProcessMD5: {
        description: 'MD5 hash of the initiating process executable',
        category: 'security',
        examples: ['d41d8cd98f00b204e9800998ecf8427e']
    },
    InitiatingProcessSHA1: {
        description: 'SHA-1 hash of the initiating process executable',
        category: 'security',
        examples: ['da39a3ee5e6b4b0d3255bfef95601890afd80709']
    },
    InitiatingProcessSHA256: {
        description: 'SHA-256 hash of the initiating process executable',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },
    InitiatingProcessFileSize: {
        description: 'File size of the initiating process executable (in bytes)',
        category: 'default',
        examples: ['1048576']
    },
    InitiatingProcessAccountName: {
        description: 'User account name that launched the initiating process',
        category: 'source',
        examples: ['jsmith', 'SYSTEM']
    },
    InitiatingProcessAccountDomain: {
        description: 'Domain of the user account that launched the initiating process',
        category: 'source',
        examples: ['CONTOSO', 'NT AUTHORITY']
    },
    InitiatingProcessAccountSid: {
        description: 'Security Identifier (SID) of the user account running the initiating process',
        category: 'source',
        examples: ['S-1-5-18']
    },
    InitiatingProcessSignerType: {
        description: 'Type of signature applied to the initiating process (e.g., Microsoft, Third-party, None)',
        category: 'security',
        examples: ['Microsoft', 'Third-party', 'Unsigned']
    },
    InitiatingProcessSignatureStatus: {
        description: 'Status of the signature check (e.g., Valid, Invalid)',
        category: 'security',
        examples: ['Valid', 'InvalidSignature']
    },

    // ============================================================
    //  TARGET PROCESS (PROCESS CREATION)
    // ============================================================
    ProcessId: {
        description: 'Operating system Process ID (PID) of the newly created (target) process',
        category: 'destination',
        examples: ['8192']
    },
    FileName: {
        description: 'File name of the target resource (process executable, accessed file, etc.)',
        category: 'destination',
        examples: ['malware.exe', 'document.docx']
    },
    FolderPath: {
        description: 'Full folder path of the target file or process executable',
        category: 'destination',
        examples: ['C:\\Users\\jsmith\\Downloads\\malware.exe']
    },
    CommandLine: {
        description: 'Full command line string used to launch the target process',
        category: 'action',
        examples: ['powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA...']
    },
    ProcessCreationTime: {
        description: 'Timestamp when the target process was created',
        category: 'timestamp',
        examples: ['2026-03-07T14:30:00Z']
    },
    MD5: {
        description: 'MD5 hash of the target file or process',
        category: 'security',
        examples: ['d41d8cd98f00b204e9800998ecf8427e']
    },
    SHA1: {
        description: 'SHA-1 hash of the target file or process',
        category: 'security',
        examples: ['da39a3ee5e6b4b0d3255bfef95601890afd80709']
    },
    SHA256: {
        description: 'SHA-256 hash of the target file or process',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },
    FileSize: {
        description: 'Size of the target file (in bytes)',
        category: 'default',
        examples: ['16384']
    },
    AccountName: {
        description: 'User account name running the target process or performing the action',
        category: 'destination',
        examples: ['jsmith']
    },
    AccountDomain: {
        description: 'Domain of the user account running the target process',
        category: 'destination',
        examples: ['CONTOSO']
    },
    AccountSid: {
        description: 'Security Identifier (SID) of the user account',
        category: 'destination',
        examples: ['S-1-5-21-3623811015-3361044348-30300820-1013']
    },

    // ============================================================
    //  FILE ACTIVITY
    // ============================================================
    TargetFileName: {
        description: 'Name of the file targeted in a modification/rename event',
        category: 'destination',
        examples: ['renamed_file.txt']
    },
    TargetFolderPath: {
        description: 'Full folder path of the file targeted in a modification/rename event',
        category: 'destination',
        examples: ['C:\\Temp\\renamed_file.txt']
    },
    PreviousFileName: {
        description: 'Original name of the file before it was renamed',
        category: 'source',
        examples: ['original_file.txt']
    },
    PreviousFolderPath: {
        description: 'Original folder path of the file before it was renamed',
        category: 'source',
        examples: ['C:\\Temp\\original_file.txt']
    },
    FileOriginUrl: {
        description: 'URL from which the file was downloaded (if tracked by Mark of the Web)',
        category: 'traffic',
        examples: ['http://malicious.example.com/payload.exe']
    },
    FileOriginIP: {
        description: 'IP address from which the file was downloaded',
        category: 'traffic',
        examples: ['198.51.100.44']
    },

    // ============================================================
    //  NETWORK ACTIVITY
    // ============================================================
    LocalIP: {
        description: 'Local IPv4 or IPv6 address involved in the network connection',
        category: 'source',
        examples: ['192.168.1.50']
    },
    LocalPort: {
        description: 'Local network port used for the connection',
        category: 'source',
        examples: ['54321']
    },
    RemoteIP: {
        description: 'Remote destination IPv4 or IPv6 address',
        category: 'destination',
        examples: ['203.0.113.100']
    },
    RemotePort: {
        description: 'Remote destination network port',
        category: 'destination',
        examples: ['443', '80']
    },
    RemoteUrl: {
        description: 'Remote URL or domain name associated with the network connection',
        category: 'destination',
        examples: ['api.example.com']
    },
    Protocol: {
        description: 'Network protocol (e.g., Tcp, Udp, Icmp)',
        category: 'protocol',
        examples: ['Tcp', 'Udp']
    },
    RemoteIPType: {
        description: 'Categorization of the remote IP (e.g., Public, Private)',
        category: 'traffic',
        examples: ['Public', 'Private']
    },
    ActionType: {
        description: 'The specific type of event (e.g., ConnectionSuccess, ProcessCreated, FileCreated)',
        category: 'action',
        examples: ['ConnectionSuccess', 'ConnectionFailed', 'ProcessCreated', 'FileCreated', 'RegistryValueSet']
    },

    // ============================================================
    //  REGISTRY ACTIVITY
    // ============================================================
    RegistryKey: {
        description: 'Full path of the Windows Registry key being modified',
        category: 'destination',
        examples: ['HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run']
    },
    RegistryValueName: {
        description: 'Name of the specific Windows Registry value within the key',
        category: 'destination',
        examples: ['PersistenceKey']
    },
    RegistryValueData: {
        description: 'Data written to the Windows Registry value',
        category: 'action',
        examples: ['C:\\Windows\\Temp\\malware.exe']
    },
    PreviousRegistryValueName: {
        description: 'Original name of the Registry value before modification',
        category: 'source',
        examples: ['OldKey']
    },
    PreviousRegistryValueData: {
        description: 'Original data in the Registry value before modification',
        category: 'source',
        examples: ['C:\\Windows\\System32\\svchost.exe']
    },

    // ============================================================
    //  LOGON ACTIVITY & IDENTITY (DeviceLogonEvents & IdentityLogonEvents)
    // ============================================================
    LogonType: {
        description: 'Type of logon session (e.g., Interactive, Network, Unlock, RemoteInteractive)',
        category: 'action',
        examples: ['Interactive', 'Network', 'RemoteInteractive', 'Unlock']
    },
    LogonId: {
        description: 'Unique identifier for the specific logon session',
        category: 'default',
        examples: ['0x1a2b3c']
    },
    RemoteDeviceName: {
        description: 'Name of the remote device initiating a network logon',
        category: 'source',
        examples: ['LAPTOP-ADMIN01']
    },
    IsLocalAdmin: {
        description: 'Boolean indicating if the logged-on user has local administrative privileges',
        category: 'security',
        examples: ['true', 'false']
    },
    TargetAccountUpn: {
        description: 'User Principal Name (UPN) of the account being logged into (Identity schema)',
        category: 'destination',
        examples: ['jsmith@contoso.com']
    },
    TargetAccountDisplayName: {
        description: 'Display name of the user account being logged into',
        category: 'destination',
        examples: ['Jane Smith']
    },
    ISP: {
        description: 'Internet Service Provider of the IP address initiating the logon',
        category: 'source',
        examples: ['Microsoft Corporation', 'Comcast']
    },
    City: {
        description: 'City associated with the IP address initiating the logon',
        category: 'source',
        examples: ['Seattle', 'London']
    },
    Country: {
        description: 'Country associated with the IP address initiating the logon',
        category: 'source',
        examples: ['US', 'GB']
    },

    // ============================================================
    //  ALERTS & DETECTIONS (AlertEvents / AlertInfo)
    // ============================================================
    AlertId: {
        description: 'Unique identifier for a security alert generated by Microsoft Defender',
        category: 'security',
        examples: ['da39a3ee5e6b4b0d3255bfef95601890afd80709-123456']
    },
    Title: {
        description: 'Title or name of the generated security alert',
        category: 'security',
        examples: ['Suspicious PowerShell command line', 'Credential dumping tool execution detected']
    },
    Severity: {
        description: 'Severity level of the security alert (Low, Medium, High, Informational)',
        category: 'security',
        examples: ['Low', 'Medium', 'High', 'Informational']
    },
    Category: {
        description: 'Category or stage of the attack lifecycle for the alert',
        category: 'security',
        examples: ['Execution', 'CredentialAccess', 'LateralMovement']
    },
    DetectionSource: {
        description: 'The specific Microsoft product or detection engine that generated the alert',
        category: 'security',
        examples: ['Microsoft Defender for Endpoint', 'Microsoft Defender for Identity', 'Antivirus']
    },
    ProviderAlertId: {
        description: 'Alert ID as provided by the specific detection engine/source',
        category: 'security',
        examples: ['12345678-abcd-1234-abcd-12345678abcd']
    },
    Description: {
        description: 'Detailed description explaining the alert context and malicious behavior',
        category: 'security',
        examples: ['A suspicious PowerShell command line was executed by...'] // Truncated example
    },
    RecommendedActions: {
        description: 'Actions recommended by Microsoft to remediate the alert',
        category: 'security',
        examples: ['Isolate the machine and review the executed command line.']
    },
    AttackTechniques: {
        description: 'MITRE ATT&CK techniques associated with the alert (JSON array)',
        category: 'security',
        examples: ['["T1059.001", "T1003.001"]']
    },

    // ============================================================
    //  IMAGE LOAD ACTIVITY (DeviceImageLoadEvents)
    // ============================================================
    InitiatingProcessImageFileName: {
        description: 'File name of the image (module/DLL) loaded by a process',
        category: 'destination',
        examples: ['ntdll.dll', 'kernel32.dll']
    },
    SharedModuleMD5: {
        description: 'MD5 hash of the loaded module/DLL',
        category: 'security',
        examples: ['d41d8cd98f00b204e9800998ecf8427e']
    },
    SharedModuleSHA1: {
        description: 'SHA-1 hash of the loaded module/DLL',
        category: 'security',
        examples: ['da39a3ee5e6b4b0d3255bfef95601890afd80709']
    },
    SharedModuleSHA256: {
        description: 'SHA-256 hash of the loaded module/DLL',
        category: 'security',
        examples: ['e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855']
    },

    // ============================================================
    //  EMAIL & COLLABORATION (EmailEvents)
    // ============================================================
    SenderFromAddress: {
        description: 'Email address of the sender as it appears in the From header',
        category: 'source',
        examples: ['attacker@malicious.example.com']
    },
    SenderDisplayName: {
        description: 'Display name of the sender',
        category: 'source',
        examples: ['CEO Executive', 'IT Helpdesk']
    },
    RecipientEmailAddress: {
        description: 'Email address of the intended recipient',
        category: 'destination',
        examples: ['jsmith@contoso.com']
    },
    Subject: {
        description: 'Subject line of the email message',
        category: 'action',
        examples: ['URGENT: Password Reset Required']
    },
    DeliveryAction: {
        description: 'Action taken on the email (e.g., Delivered, Junked, Blocked)',
        category: 'action',
        examples: ['Delivered', 'Junked', 'Blocked']
    },
    NetworkMessageId: {
        description: 'Unique message ID assigned to the email in transport',
        category: 'default',
        examples: ['a1b2c3d4-e5f6-7890-abcd-ef1234567890']
    },
    AttachmentCount: {
        description: 'Number of attachments included in the email message',
        category: 'traffic',
        examples: ['0', '1', '3']
    },
    UrlCount: {
        description: 'Number of URLs found within the email body',
        category: 'traffic',
        examples: ['2', '5']
    },

    // ============================================================
    //  MISCELLANEOUS / ADVANCED HUNTING
    // ============================================================
    AdditionalFields: {
        description: 'JSON object containing extra data fields not mapped cleanly into schema columns',
        category: 'default',
        examples: ['{"MacAddress": "00:11:22:33:44:55"}']
    },
    CloudAppActivity: {
        description: 'Advanced Cloud App Security monitoring fields',
        category: 'action',
        examples: ['Upload', 'Download']
    }
};
