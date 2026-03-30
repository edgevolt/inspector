/**
 * Log Formats Registry
 * Central registry for all supported log formats
 * Similar to languages.js but for log parsers
 */
export const logFormats = {
    'microsoft-defender': {
        id: 'microsoft-defender',
        name: 'Microsoft Defender for Endpoint',
        emoji: '🛡️',
        description: 'Microsoft Defender for Endpoint logs (Advanced Hunting/Streaming API) — processes, network, files, and alerts (JSON)',
        category: 'endpoint',
        examples: [
            {
                title: 'DeviceProcessEvents (Process Creation)',
                log: '{"Timestamp":"2026-03-07T14:30:00Z","DeviceId":"12345678abcdef9012345678abcdef9012345678","DeviceName":"desktop-abc1234","ActionType":"ProcessCreated","FileName":"powershell.exe","FolderPath":"C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe","SHA1":"da39a3ee5e6b4b0d3255bfef95601890afd80709","SHA256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","MD5":"d41d8cd98f00b204e9800998ecf8427e","ProcessId":8192,"CommandLine":"powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA=","ProcessCreationTime":"2026-03-07T14:30:00Z","AccountDomain":"CONTOSO","AccountName":"jsmith","AccountSid":"S-1-5-21-3623811015-3361044348-30300820-1013","InitiatingProcessAccountDomain":"CONTOSO","InitiatingProcessAccountName":"jsmith","InitiatingProcessAccountSid":"S-1-5-21-3623811015-3361044348-30300820-1013","InitiatingProcessCommandLine":"cmd.exe /c start script.bat","InitiatingProcessCreationTime":"2026-03-07T14:28:00Z","InitiatingProcessFileName":"cmd.exe","InitiatingProcessFolderPath":"C:\\\\Windows\\\\System32\\\\cmd.exe","InitiatingProcessId":4096,"InitiatingProcessParentFileName":"explorer.exe","InitiatingProcessParentId":1024}'
            },
            {
                title: 'DeviceNetworkEvents (Connection Success)',
                log: '{"Timestamp":"2026-03-07T14:31:00Z","DeviceId":"12345678abcdef9012345678abcdef9012345678","DeviceName":"desktop-abc1234","ActionType":"ConnectionSuccess","RemoteIP":"203.0.113.100","RemotePort":443,"RemoteUrl":"api.example.com","LocalIP":"192.168.1.50","LocalPort":54321,"Protocol":"Tcp","LocalIPType":"Private","RemoteIPType":"Public","InitiatingProcessAccountDomain":"CONTOSO","InitiatingProcessAccountName":"jsmith","InitiatingProcessCommandLine":"\\"C:\\\\Program Files\\\\Mozilla Firefox\\\\firefox.exe\\"","InitiatingProcessFileName":"firefox.exe","InitiatingProcessFolderPath":"C:\\\\Program Files\\\\Mozilla Firefox\\\\firefox.exe","InitiatingProcessId":8192}'
            },
            {
                title: 'DeviceFileEvents (File Creation)',
                log: '{"Timestamp":"2026-03-07T14:32:00Z","DeviceId":"12345678abcdef9012345678abcdef9012345678","DeviceName":"desktop-abc1234","ActionType":"FileCreated","FileName":"malware.exe","FolderPath":"C:\\\\Users\\\\jsmith\\\\Downloads\\\\malware.exe","SHA1":"da39a3ee5e6b4b0d3255bfef95601890afd80709","SHA256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","MD5":"d41d8cd98f00b204e9800998ecf8427e","FileSize":1048576,"FileOriginUrl":"http://malicious.example.com/payload.exe","FileOriginIP":"198.51.100.44","InitiatingProcessAccountDomain":"CONTOSO","InitiatingProcessAccountName":"jsmith","InitiatingProcessCommandLine":"\\"C:\\\\Program Files\\\\Mozilla Firefox\\\\firefox.exe\\"","InitiatingProcessFileName":"firefox.exe","InitiatingProcessId":8192}'
            },
            {
                title: 'AlertEvents (Security Alert)',
                log: '{"Timestamp":"2026-03-07T14:35:00Z","AlertId":"da39a3ee5e6b4b0d3255bfef95601890afd80709-123456","Title":"Suspicious PowerShell command line","Severity":"High","Category":"Execution","DetectionSource":"Microsoft Defender for Endpoint","ProviderAlertId":"12345678-abcd-1234-abcd-12345678abcd","Description":"A suspicious PowerShell command line was executed by a user.","RecommendedActions":"Isolate the machine and review the executed command line.","AttackTechniques":["T1059.001"],"DeviceId":"12345678abcdef9012345678abcdef9012345678","DeviceName":"desktop-abc1234"}'
            }
        ]
    },
    'cortex-xdr': {
        id: 'cortex-xdr',
        name: 'Palo Alto Cortex XDR',
        emoji: '🧠',
        description: 'Palo Alto Cortex XDR endpoint and network logs (JSON / XQL Event Format)',
        category: 'endpoint',
        examples: [
            {
                title: 'Process Execution (PROCESS_START)',
                log: '{"event_timestamp":1706540000000,"insert_timestamp":"2026-03-07T14:30:15.123Z","event_id":"12345678-ABCD-9012-3456-7890ABCDEF12","event_type":"PROCESS","event_sub_type":"PROCESS_START","agent_id":"A1B2C3D4E5F67890A1B2C3D4E5F67890","agent_hostname":"DESKTOP-ABC123","agent_os_type":"Windows","agent_version":"8.2.0.1234","user_name":"jsmith","user_domain":"CONTOSO","actor_process_image_path":"C:\\\\Windows\\\\System32\\\\cmd.exe","actor_process_image_name":"cmd.exe","actor_process_command_line":"cmd.exe /c start script.bat","actor_process_os_pid":4096,"actor_process_signature_status":"SIGNED_VALID","actor_process_image_sha256":"d41d8cd98f00b204e9800998ecf8427e","action_process_image_path":"C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe","action_process_image_name":"powershell.exe","action_process_command_line":"powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA=","action_process_os_pid":8192,"action_process_signature_status":"SIGNED_VALID","action_process_image_sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}'
            },
            {
                title: 'Network Activity (NETWORK_CONNECTION)',
                log: '{"event_timestamp":1706540060000,"event_id":"A1B2C3D4-E89A-407B-8A52-AE547F187C22","event_type":"NETWORK","event_sub_type":"NETWORK_CONNECTION","agent_id":"A1B2C3D4E5F67890A1B2C3D4E5F67890","agent_hostname":"DESKTOP-ABC123","actor_process_image_name":"firefox.exe","actor_process_os_pid":5432,"action_local_ip":"192.168.1.50","action_local_port":54321,"action_remote_ip":"203.0.113.100","action_remote_port":443,"action_network_protocol":"TCP","action_country":"US","action_dst_host":"api.example.com"}'
            },
            {
                title: 'File Activity (FILE_CREATE)',
                log: '{"event_timestamp":1706540120000,"event_id":"F9E8D7C6-B5A4-407B-8A52-AE547F187C33","event_type":"FILE","event_sub_type":"FILE_CREATE","agent_id":"A1B2C3D4E5F67890A1B2C3D4E5F67890","agent_hostname":"DESKTOP-ABC123","actor_process_image_name":"chrome.exe","actor_process_os_pid":6789,"action_file_path":"C:\\\\Users\\\\jsmith\\\\Downloads\\\\payload.exe","action_file_name":"payload.exe","action_file_extension":"exe","action_file_sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","action_file_size":1048576}'
            },
            {
                title: 'Security Alert / Incident',
                log: '{"event_timestamp":1706540500000,"alert_id":"12345678-ABCD-1234","incident_id":"INC-1234","alert_name":"Suspicious PowerShell command execution","alert_description":"A PowerShell script was executed with an obfuscated base64 command line.","alert_category":"Execution","alert_severity":"High","alert_source":"XDR Agent","mitigation_status":"Blocked","resolution_status":"Under Investigation","module_id":"Behavioral Threat Protection (BTP)","agent_id":"A1B2C3D4E5F67890A1B2C3D4E5F67890","agent_hostname":"DESKTOP-ABC123","user_name":"jsmith","action_process_image_name":"powershell.exe","action_process_image_sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","xdr_url":"https://tenant.xdr.paloaltonetworks.com/app/investigate/incident/INC-1234"}'
            }
        ]
    },
    crowdstrike: {
        id: 'crowdstrike',
        name: 'CrowdStrike Falcon',
        emoji: '🦅',
        description: 'CrowdStrike Falcon logs (FDR / Streaming API) — processes, network, and detections (JSON)',
        category: 'endpoint',
        examples: [
            {
                title: 'Process Execution',
                log: '{"aid":"0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d","aip":"198.51.100.22","ComputerName":"DESKTOP-ABC123","EventName":"ProcessRollup2","timestamp":"1706540000000","UserName":"jsmith","ProcessId":"4096","ParentProcessId":"1024","ImageFileName":"\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\System32\\\\cmd.exe","CommandLine":"\\"C:\\\\Windows\\\\System32\\\\cmd.exe\\" /c echo hello","ParentImageFileName":"\\\\Device\\\\HarddiskVolume1\\\\Windows\\\\explorer.exe","ProcessStartTime":"1706540000000","IntegrityLevel":"8192","MD5String":"d41d8cd98f00b204e9800998ecf8427e","SHA256String":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","event_timestamp":"2026-03-07T14:30:00Z"}'
            },
            {
                title: 'Network Connection',
                log: '{"aid":"0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d","aip":"198.51.100.22","ComputerName":"DESKTOP-ABC123","EventName":"NetworkConnectIP4","timestamp":"1706540050000","UserName":"jsmith","ProcessId":"8192","ImageFileName":"\\\\Device\\\\HarddiskVolume1\\\\Program Files\\\\Mozilla Firefox\\\\firefox.exe","LocalAddressIP4":"192.168.1.50","LocalPort":"54321","RemoteAddressIP4":"203.0.113.100","RemotePort":"443","Protocol":"6","NetworkProtocol":"TCP","ConnectionDirection":"1","event_timestamp":"2026-03-07T14:30:50Z"}'
            },
            {
                title: 'DNS Request',
                log: '{"aid":"0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d","aip":"198.51.100.22","ComputerName":"DESKTOP-ABC123","EventName":"DnsRequest","timestamp":"1706540100000","UserName":"jsmith","ProcessId":"8192","DomainName":"malicious.example.com","DnsQueryType":"1","event_timestamp":"2026-03-07T14:31:00Z"}'
            },
            {
                title: 'Detection / Threat',
                log: '{"aid":"0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d","aip":"198.51.100.22","ComputerName":"DESKTOP-ABC123","EventName":"DetectionSummaryEvent","timestamp":"1706540200000","UserName":"jsmith","DetectName":"Suspicious PowerShell Download","DetectDescription":"A suspicious script download was initiated via PowerShell to an unknown domain.","Severity":"70","SeverityName":"High","Tactic":"Execution","Technique":"T1059.001","Objective":"Execution","PatternDispositionDescription":"Process Blocked","Action":"Block","event_timestamp":"2026-03-07T14:32:00Z"}'
            }
        ]
    },
    'entra-id': {
        id: 'entra-id',
        name: 'Microsoft Entra ID',
        emoji: '🔑',
        description: 'Microsoft Entra ID (Azure AD) sign-in, audit, provisioning, and risk detection logs (JSON)',
        category: 'identity',
        examples: [
            {
                title: 'Sign-In Success',
                log: '{"id":"66ea54eb-6301-4ee5-be62-ff5a759b0100","createdDateTime":"2026-03-07T14:30:00Z","userDisplayName":"Jane Smith","userPrincipalName":"jsmith@contoso.com","userId":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","appDisplayName":"Microsoft Teams","appId":"1fec8e78-bce4-4aaf-ab1b-5451cc387264","ipAddress":"203.0.113.42","clientAppUsed":"Browser","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/122.0","resourceDisplayName":"Microsoft Graph","resourceId":"00000003-0000-0000-c000-000000000000","status":{"errorCode":0,"failureReason":null,"additionalDetails":"MFA completed in Azure AD"},"conditionalAccessStatus":"success","isInteractive":true,"authenticationRequirement":"multiFactorAuthentication","authenticationProtocol":"oAuth2","tokenIssuerType":"AzureAD","riskLevelDuringSignIn":"none","riskState":"none","deviceDetail":{"deviceId":"b3c5a820-1234-abcd-ef56-7890abcdef01","displayName":"DESKTOP-ABC123","operatingSystem":"Windows 10","browser":"Edge 122.0","isCompliant":true,"isManaged":true,"trustType":"Hybrid Azure AD joined"},"location":{"city":"Seattle","state":"Washington","countryOrRegion":"US","geoCoordinates":{"latitude":47.6062,"longitude":-122.3321}},"appliedConditionalAccessPolicies":[{"displayName":"Require MFA for All Users","result":"success","enforcedGrantControls":["mfa"]},{"displayName":"Block Legacy Auth","result":"notApplied"}],"authenticationDetails":[{"authenticationMethod":"Password","succeeded":true,"authenticationStepResultDetail":"MFA completed in Azure AD"},{"authenticationMethod":"Microsoft Authenticator","succeeded":true,"authenticationStepResultDetail":"MFA completed"}],"correlationId":"d3087bfa-3456-7890-abcd-ef1234567890","userType":"Member"}'
            },
            {
                title: 'Sign-In Failure (MFA Block)',
                log: '{"id":"77fb65fc-7412-5ff6-cf73-006b860c1211","createdDateTime":"2026-03-07T15:10:33Z","userDisplayName":"Bob Johnson","userPrincipalName":"bjohnson@contoso.com","userId":"c2d3e4f5-a6b7-8901-cdef-234567890abc","appDisplayName":"Azure Portal","appId":"c44b4083-3bb0-49c1-b47d-974e53cbdf3c","ipAddress":"198.51.100.77","clientAppUsed":"Browser","resourceDisplayName":"Windows Azure Service Management API","status":{"errorCode":500121,"failureReason":"Authentication failed during strong authentication request.","additionalDetails":"MFA denied; user did not respond to push notification."},"conditionalAccessStatus":"failure","isInteractive":true,"authenticationRequirement":"multiFactorAuthentication","authenticationProtocol":"oAuth2","tokenIssuerType":"AzureAD","riskLevelDuringSignIn":"low","riskState":"atRisk","riskDetail":"none","riskEventTypes_v2":["unfamiliarFeatures"],"deviceDetail":{"operatingSystem":"MacOs","browser":"Chrome 122.0","isCompliant":false,"isManaged":false},"location":{"city":"London","state":"London","countryOrRegion":"GB","geoCoordinates":{"latitude":51.5074,"longitude":-0.1278}},"appliedConditionalAccessPolicies":[{"displayName":"Require MFA for All Users","result":"failure","enforcedGrantControls":["mfa"]}],"authenticationDetails":[{"authenticationMethod":"Password","succeeded":true},{"authenticationMethod":"PhoneAppNotification","succeeded":false,"authenticationStepResultDetail":"User did not respond"}],"correlationId":"e4198cfb-4567-8901-bcde-f23456789012","userType":"Member"}'
            },
            {
                title: 'Audit — Create User',
                log: '{"id":"88gc76gd-8523-6gg7-dg84-117c971d2322","activityDisplayName":"Add user","activityDateTime":"2026-03-07T12:00:00Z","category":"UserManagement","operationType":"Add","result":"success","resultReason":"","loggedByService":"Core Directory","correlationId":"f5209dfc-5678-9012-cdef-345678901234","initiatedBy":{"user":{"displayName":"Admin User","userPrincipalName":"admin@contoso.com","id":"d4e5f6a7-b8c9-0123-defa-456789012345","ipAddress":"10.0.0.50"}},"targetResources":[{"displayName":"New Employee","id":"e5f6a7b8-c9d0-1234-efab-567890123456","type":"User","userPrincipalName":"newemployee@contoso.com","modifiedProperties":[{"displayName":"AccountEnabled","oldValue":null,"newValue":"true"},{"displayName":"DisplayName","oldValue":null,"newValue":"New Employee"},{"displayName":"UserPrincipalName","oldValue":null,"newValue":"newemployee@contoso.com"}]}],"additionalDetails":[{"key":"UserAgent","value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"},{"key":"OperationId","value":"op-12345"}]}'
            },
            {
                title: 'Audit — Add Member to Group',
                log: '{"id":"99hd87he-9634-7hh8-eh95-228d082e3433","activityDisplayName":"Add member to group","activityDateTime":"2026-03-07T12:05:00Z","category":"GroupManagement","operationType":"Add","result":"success","resultReason":"","loggedByService":"Core Directory","correlationId":"a6310efd-6789-0123-defa-456789012345","initiatedBy":{"user":{"displayName":"Admin User","userPrincipalName":"admin@contoso.com","id":"d4e5f6a7-b8c9-0123-defa-456789012345","ipAddress":"10.0.0.50"}},"targetResources":[{"displayName":"Marketing Team","id":"f6a7b8c9-d0e1-2345-fabc-678901234567","type":"Group","modifiedProperties":[{"displayName":"Members","oldValue":null,"newValue":"newemployee@contoso.com"}]},{"displayName":"New Employee","id":"e5f6a7b8-c9d0-1234-efab-567890123456","type":"User","userPrincipalName":"newemployee@contoso.com"}]}'
            },
            {
                title: 'Provisioning Event',
                log: '{"id":"aahf98if-0745-8ii9-fi06-339e193f4544","activityDateTime":"2026-03-07T13:00:00Z","provisioningAction":"Create","provisioningStatusInfo":{"status":"success"},"sourceSystem":{"displayName":"Azure Active Directory","id":"src-sys-001"},"targetSystem":{"displayName":"Salesforce","id":"tgt-sys-001"},"sourceIdentity":{"displayName":"New Employee","id":"e5f6a7b8-c9d0-1234-efab-567890123456","type":"User"},"targetIdentity":{"displayName":"New Employee","id":"005xx000001Sv4h","type":"User"},"servicePrincipal":{"displayName":"Salesforce Provisioning","id":"sp-salesforce-001"},"jobId":"SalesforceProvisioning.abc123","cycleId":"cycle-789","changeId":"change-456","durationInMilliseconds":1234,"provisioningSteps":[{"name":"EntryImport","provisioningStepType":"import","status":"success","description":"Retrieved user from Azure AD"},{"name":"ObjectMatching","provisioningStepType":"matching","status":"success","description":"Matched user to target"},{"name":"EntryExport","provisioningStepType":"export","status":"success","description":"Created user in Salesforce"}],"modifiedProperties":[{"displayName":"email","oldValue":null,"newValue":"newemployee@contoso.com"},{"displayName":"displayName","oldValue":null,"newValue":"New Employee"}]}'
            },
            {
                title: 'Risk Detection (Impossible Travel)',
                log: '{"id":"bbig09jg-1856-9jj0-gj17-440f204g5655","riskEventType":"impossibleTravel","riskLevel":"high","riskState":"atRisk","riskDetail":"none","detectedDateTime":"2026-03-07T14:45:00Z","lastUpdatedDateTime":"2026-03-07T15:00:00Z","userDisplayName":"Bob Johnson","userPrincipalName":"bjohnson@contoso.com","userId":"c2d3e4f5-a6b7-8901-cdef-234567890abc","ipAddress":"198.51.100.77","location":{"city":"London","state":"London","countryOrRegion":"GB"},"detectionTimingType":"offline","activity":"signin","source":"Identity Protection","tokenIssuerType":"AzureAD","additionalInfo":[{"Key":"previousIPAddress","Value":"203.0.113.42"},{"Key":"previousLocation","Value":"Seattle, US"},{"Key":"timeBetweenEvents","Value":"45 minutes"}]}'
            }
        ]
    },
    barracuda: {
        id: 'barracuda',
        name: 'Barracuda CloudGen Firewall (8.x/9.x)',
        emoji: '🐟',
        description: 'Barracuda Networks CloudGen/NG Firewall logs (Firmware 8.x/9.x)',
        category: 'firewall',
        examples: [
            {
                title: 'Forwarding Firewall Allow',
                log: '<14>Jan 29 14:30:15 cuda-fw-01 box_Firewall_Activity: type=FWD|proto=TCP|srcIF=eth0|srcIP=192.168.1.100|srcPort=54321|dstIP=203.0.113.50|dstPort=443|dstIF=eth1|rule=Allow-Web|action=Allow|info=Connection accepted|srcMAC=00:11:22:33:44:55|dstMAC=AA:BB:CC:DD:EE:FF'
            },
            {
                title: 'Forwarding Firewall Block',
                log: '<14>Jan 29 14:35:00 cuda-fw-01 box_Firewall_Activity: type=FWD|proto=UDP|srcIF=eth1|srcIP=10.0.0.50|srcPort=12345|dstIP=8.8.8.8|dstPort=53|rule=Block-DNS|action=Block|info=Policy Violation|reason=Traffic Denied|count=1'
            },
            {
                title: 'Audit Log (Auth Success)',
                log: '<14>Jan 29 14:40:10 cuda-fw-01 box_Auth_Service: type=AUD|user=john.doe|srcIP=192.168.1.100|service=VPN|server=Local|info=Authentication successful|group=VPN-Users|station=192.168.1.100'
            },
            {
                title: 'Web Log (URL Filter)',
                log: '<134>Jan 29 14:45:33 cuda-fw-01 httpproxy[1234]: type=WEBLOG|action=Block|srcIP=192.168.5.10|user=jane.smith|url=http://malicious-site.com/loader.exe|urlcat=Malware|reason=URL Category Block|method=GET|size=0|duration=0|agent=Mozilla/5.0'
            },
            {
                title: 'System Event',
                log: '<14>Jan 29 15:00:00 cuda-fw-01 Control[556]: type=System|cat=Config|info=Configuration change activated|user=admin|srcIP=10.0.0.5|tool=GUI'
            }
        ]
    },
    checkpoint: {
        id: 'checkpoint',
        name: 'Check Point (R81.x)',
        emoji: '🔷',
        description: 'Check Point firewall logs (R81.x)',
        category: 'firewall',
        examples: [
            {
                title: 'Traffic Accept',
                log: 'time=1706544615; action=Accept; origin=CP-GW-01; src=192.168.1.100; s_port=54321; dst=8.8.8.8; service=53; proto=17; rule_name="Allow DNS"; rule=5; layer_name=Network; product="VPN-1 & FireWall-1"; service_id=domain-udp; src_user_name=john.doe; src_machine_name=DESKTOP-ABC123; dst_machine_name=dns.google; xlatesrc=203.0.113.10; xlatesport=54321; sent_bytes=256; received_bytes=512; sent_packets=4; received_packets=4; duration=2; conn_direction=Outgoing; version=R81.10'
            },
            {
                title: 'Traffic Drop',
                log: 'time=1706544722; action=Drop; origin=CP-GW-01; src=10.0.0.50; s_port=12345; dst=192.168.100.1; service=445; proto=6; rule_name="Block SMB"; rule=12; layer_name=Network; product="VPN-1 & FireWall-1"; service_id=microsoft-ds; src_location=Internal; dst_location=Internal; conn_direction=Internal; version=R81.10; tcp_flags=SYN'
            },
            {
                title: 'IPS Prevention',
                log: 'time=1706545010; action=Prevent; origin=CP-GW-01; src=203.0.113.100; s_port=54321; dst=192.168.1.10; service=80; proto=6; product=SmartDefense; threat_prevention_type=IPS; protection_name="SQL Injection"; protection_id=12345; severity=Critical; confidence_level=High; attack_info="SQL injection attempt detected in HTTP request"; rule_name="Strict IPS"; layer_name="Threat Prevention"; src_country=CN; dst_country=US; resource="http://webapp.example.com/login.php?id=1\' OR \'1\'=\'1"; methods=GET; user_agent="sqlmap/1.5"; cveid=CVE-2023-12345; version=R81.20'
            },
            {
                title: 'URL Filtering',
                log: 'time=1706545200; action=Drop; origin=CP-GW-01; src=192.168.1.105; s_port=49152; dst=203.0.113.50; service=80; proto=6; product=SmartDefense; threat_prevention_type="URL Filtering"; resource="http://malicious.example.com/payload.exe"; categories="Malware;Command and Control"; severity=High; rule_name="Block Malicious URLs"; layer_name="Threat Prevention"; src_user_name=jane.smith; src_machine_name=LAPTOP-XYZ789; methods=GET; user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64)"; version=R81.10'
            },
            {
                title: 'VPN Connection',
                log: 'time=1706545400; action=Accept; origin=CP-GW-01; src=203.0.113.200; dst=192.168.1.1; product="VPN-1 & FireWall-1"; vpn_feature_name="Remote Access"; peer_gateway=203.0.113.200; community=RemoteAccess; encryption_method=AES-256; ike_version=IKEv2; src_user_name=remote.user; message_info="VPN tunnel established successfully"; rule_name="VPN Access"; layer_name=Network; version=R81.10'
            },
            {
                title: 'Anti-Virus Detection',
                log: 'time=1706545600; action=Prevent; origin=CP-GW-01; src=192.168.1.110; s_port=54321; dst=203.0.113.75; service=443; proto=6; product=SmartDefense; threat_prevention_type="Anti-Virus"; malware_action=Prevent; malware_family=Ransomware; file_name=malware.exe; file_hash=d41d8cd98f00b204e9800998ecf8427e; severity=Critical; confidence_level=High; rule_name="Strict AV Protection"; layer_name="Threat Prevention"; src_user_name=victim.user; src_machine_name=WORKSTATION-001; resource="https://download.example.com/malware.exe"; methods=GET; version=R81.20'
            }
        ]
    },
    firepower: {
        id: 'firepower',
        name: 'Cisco Firepower (FTD 6.x/7.x)',
        emoji: '🛡️',
        description: 'Cisco Firepower Threat Defense syslog logs (FTD 6.x/7.x)',
        category: 'firewall',
        examples: [
            {
                title: 'Connection Allow',
                log: '<166>2024-01-29T14:30:15Z firewall01 SFIMS: %FTD-5-430003: Protocol: tcp, SrcIP: 192.168.1.100, DstIP: 203.0.113.50, SrcPort: 54321, DstPort: 443, IngressInterface: inside, EgressInterface: outside, IngressZone: Inside-Zone, EgressZone: Outside-Zone, ACPolicy: Corporate-ACP, AccessControlRuleName: Allow-Web, AccessControlRuleAction: Allow, Prefilter Policy: Default Prefilter Policy, User: ACME\\john.doe, Client: Chrome, ApplicationProtocol: HTTPS, WebApplication: Google, ConnectionDuration: 120, InitiatorPackets: 50, ResponderPackets: 45, InitiatorBytes: 5120, ResponderBytes: 102400, NAPPolicy: Balanced Security and Connectivity, DNSQuery: www.google.com, URLCategory: Search Engines, URLReputation: Well Known, ConnectionID: 34774, DeviceUUID: e8566508-eaa9-11e5-860f-de3e305d8269, FirstPacketSecond: 2024-01-29T14:28:15Z, SSLServerName: www.google.com, SSLVersion: TLSv1.3, SSLCipherSuite: TLS_AES_256_GCM_SHA384, SSLActualAction: Do not decrypt, SourceCountry: Reserved, DestinationCountry: United States'
            },
            {
                title: 'Connection Block',
                log: '<166>2024-01-29T14:35:22Z firewall01 SFIMS: %FTD-4-430003: Protocol: tcp, SrcIP: 10.0.0.50, DstIP: 198.51.100.75, SrcPort: 12345, DstPort: 80, IngressInterface: inside, EgressInterface: outside, IngressZone: Inside-Zone, EgressZone: Outside-Zone, ACPolicy: Corporate-ACP, AccessControlRuleName: Block-Malicious, AccessControlRuleAction: Block, AccessControlRuleReason: URL Block, Prefilter Policy: Default Prefilter Policy, User: ACME\\jane.smith, Client: Firefox, ApplicationProtocol: HTTP, ConnectionDuration: 0, InitiatorPackets: 1, ResponderPackets: 0, InitiatorBytes: 54, ResponderBytes: 0, NAPPolicy: Balanced Security and Connectivity, URL: http://malicious.example.com/payload.exe, URLCategory: Malware Sites, URLReputation: High Risk, EventPriority: High, ConnectionID: 34780, DeviceUUID: e8566508-eaa9-11e5-860f-de3e305d8269, FirstPacketSecond: 2024-01-29T14:35:22Z'
            },
            {
                title: 'Intrusion Event',
                log: 'Jan 29 14:40:10 192.168.0.7 SFIMS: %FTD-1-430001: Protocol: tcp, SrcIP: 203.0.113.100, DstIP: 10.1.1.10, SrcPort: 54321, DstPort: 80, IngressInterface: outside, EgressInterface: dmz, IngressZone: Outside-Zone, EgressZone: DMZ-Zone, ACPolicy: Corporate-ACP, AccessControlRuleName: IPS-Inspect, NAPPolicy: Maximum Detection, IntrusionPolicy: Maximum Detection, GID: 1, SID: 648, Revision: 18, Message: "INDICATOR-SHELLCODE x86 NOOP", Classification: Executable Code was Detected, Priority: 1, EventPriority: High, InlineResult: Blocked, Impact: 2, ConnectionID: 34785, DeviceUUID: e8566508-eaa9-11e5-860f-de3e305d8269, InstanceID: 3, FirstPacketSecond: 2024-01-29T14:40:10Z, User: No Authentication Required, SourceCountry: China, DestinationCountry: Reserved'
            },
            {
                title: 'File Malware Event',
                log: '<166>2024-01-29T14:45:33Z firewall01 SFIMS: %FTD-1-430005: Protocol: tcp, SrcIP: 192.168.1.110, DstIP: 203.0.113.75, SrcPort: 49200, DstPort: 80, IngressInterface: inside, EgressInterface: outside, ACPolicy: Corporate-ACP, AccessControlRuleName: Allow-Web, ApplicationProtocol: HTTP, WebApplication: Chrome, FileDirection: Download, FileType: EXE, FileName: update.exe, FileSize: 524288, FileSHA256: a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890, AMPDisposition: Malware, ThreatName: W32.GenericKD:Malware.26iy.1201, ThreatScore: 95, MalwareAction: Block, SperoDisposition: Malware, FileAction: Block Malware, User: ACME\\victim.user, ConnectionID: 34790, DeviceUUID: e8566508-eaa9-11e5-860f-de3e305d8269, FirstPacketSecond: 2024-01-29T14:45:30Z, URL: http://download.example.com/update.exe'
            },
            {
                title: 'Connection with SSL Details',
                log: '<166>2024-01-29T15:00:00Z firewall01 SFIMS: %FTD-5-430003: Protocol: tcp, SrcIP: 10.1.1.50, DstIP: 13.107.42.14, SrcPort: 60123, DstPort: 443, IngressInterface: inside, EgressInterface: outside, IngressZone: Inside-Zone, EgressZone: Outside-Zone, ACPolicy: Corporate-ACP, AccessControlRuleName: Decrypt-and-Inspect, AccessControlRuleAction: Allow, Prefilter Policy: Default Prefilter Policy, User: ACME\\admin, Client: Edge, ApplicationProtocol: HTTPS, WebApplication: Office 365, ConnectionDuration: 300, InitiatorPackets: 200, ResponderPackets: 180, InitiatorBytes: 51200, ResponderBytes: 2097152, NAPPolicy: Balanced Security and Connectivity, SSLPolicy: Decrypt-Inspect, SSLActualAction: Decrypt - Resign, SSLExpectedAction: Decrypt - Resign, SSLServerName: outlook.office365.com, SSLVersion: TLSv1.2, SSLCipherSuite: TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256, SSLFlowStatus: Success, SSLServerCertStatus: Valid, ConnectionID: 34800, DeviceUUID: e8566508-eaa9-11e5-860f-de3e305d8269, FirstPacketSecond: 2024-01-29T14:55:00Z, SourceCountry: Reserved, DestinationCountry: United States'
            }
        ]
    },
    fortinet: {
        id: 'fortinet',
        name: 'FortiGate (FortiOS 7.x)',
        emoji: '🔥',
        description: 'Fortinet FortiGate firewall logs (FortiOS 7.x)',
        category: 'firewall',
        examples: [
            {
                title: 'Traffic Allow',
                log: 'date=2024-01-23 time=14:30:15 devname="FG-01" devid="FG100E4Q17001234" logid="0000000013" type="traffic" subtype="forward" level="notice" vd="root" eventtime=1706024415 srcip=192.168.1.100 srcport=54321 srcintf="port1" srcintfrole="lan" dstip=8.8.8.8 dstport=53 dstintf="port2" dstintfrole="wan" sessionid=12345 proto=17 action="accept" policyid=1 policytype="policy" service="DNS" dstcountry="United States" srccountry="Reserved" trandisp="snat" transip=203.0.113.10 transport=54321 duration=120 sentbyte=256 rcvdbyte=512 sentpkt=4 rcvdpkt=4'
            },
            {
                title: 'Traffic Deny',
                log: 'date=2024-01-23 time=14:35:22 devname="FG-01" devid="FG100E4Q17001234" logid="0000000013" type="traffic" subtype="forward" level="warning" vd="root" eventtime=1706024722 srcip=10.0.0.50 srcport=12345 srcintf="port1" srcintfrole="lan" dstip=192.168.100.1 dstport=445 dstintf="port2" dstintfrole="wan" sessionid=12346 proto=6 action="deny" policyid=0 policytype="policy" service="MS-DS" dstcountry="Reserved" srccountry="Reserved" duration=0 sentbyte=0 rcvdbyte=0 sentpkt=1 rcvdpkt=0'
            },
            {
                title: 'UTM Virus Detection',
                log: 'date=2024-01-23 time=14:40:10 devname="FG-01" devid="FG100E4Q17001234" logid="0211008192" type="utm" subtype="virus" eventtype="infected" level="warning" vd="root" eventtime=1706025010 srcip=192.168.1.105 srcport=49152 srcintf="port1" srcintfrole="lan" dstip=203.0.113.50 dstport=80 dstintf="port2" dstintfrole="wan" sessionid=12347 proto=6 action="blocked" policyid=5 service="HTTP" hostname="malicious.example.com" url="/malware.exe" virus="EICAR_TEST_FILE" virusid=2172 dtype="Virus" ref="http://www.fortinet.com/ve?vn=EICAR_TEST_FILE"'
            },
            {
                title: 'IPS Detection',
                log: 'date=2024-01-23 time=14:45:33 devname="FG-01" devid="FG100E4Q17001234" logid="0419016384" type="utm" subtype="ips" eventtype="signature" level="alert" vd="root" eventtime=1706025333 severity="critical" srcip=203.0.113.100 srccountry="Reserved" dstip=192.168.1.10 dstcountry="Reserved" srcintf="port2" srcintfrole="wan" dstintf="port1" dstintfrole="lan" sessionid=12348 action="dropped" proto=6 service="HTTP" policyid=3 attack="SQL.Injection" srcport=54321 dstport=80 hostname="webapp.example.com" url="/login.php?id=1\' OR \'1\'=\'1" direction="incoming" attackid=12345 ref="http://www.fortinet.com/ids/VID12345"'
            },
            {
                title: 'VPN Connection',
                log: 'date=2024-01-23 time=15:00:00 devname="FG-01" devid="FG100E4Q17001234" logid="0101037127" type="event" subtype="vpn" level="information" vd="root" eventtime=1706026200 logdesc="SSL VPN tunnel up" action="tunnel-up" tunneltype="ssl-tunnel" tunnelid=1234567890 remip=203.0.113.200 user="john.doe" group="VPN-Users" dst_host="N/A" reason="N/A" msg="SSL tunnel established"'
            }
        ]
    },
    juniper: {
        id: 'juniper',
        name: 'Juniper SRX (Junos OS 12.x/15.x+)',
        emoji: '🌲',
        description: 'Juniper Networks SRX firewall structured syslog (Junos OS 12.x/15.x+)',
        category: 'firewall',
        examples: [
            {
                title: 'Session Create',
                log: '<14>1 2024-01-29T14:30:15.000+00:00 SRX-01 RT_FLOW - RT_FLOW_SESSION_CREATE [junos@2636.1.1.1.2.36 source-address="192.168.1.100" source-port="54321" destination-address="203.0.113.50" destination-port="443" connection-tag="0" service-name="junos-https" nat-source-address="198.51.100.10" nat-source-port="54321" nat-destination-address="203.0.113.50" nat-destination-port="443" nat-connection-tag="0" src-nat-rule-type="source rule" src-nat-rule-name="SNAT-Internet" dst-nat-rule-type="N/A" dst-nat-rule-name="N/A" protocol-id="6" policy-name="Allow-Internet" source-zone-name="trust" destination-zone-name="untrust" session-id-32="12345" username="john.doe" roles="Employees" source-interface-name="reth0.0" destination-interface-name="reth1.0" application="UNKNOWN" nested-application="UNKNOWN"]'
            },
            {
                title: 'Session Close',
                log: '<14>1 2024-01-29T14:35:00.000+00:00 SRX-01 RT_FLOW - RT_FLOW_SESSION_CLOSE [junos@2636.1.1.1.2.36 reason="TCP FIN" source-address="192.168.1.100" source-port="54321" destination-address="203.0.113.50" destination-port="443" connection-tag="0" service-name="junos-https" nat-source-address="198.51.100.10" nat-source-port="54321" nat-destination-address="203.0.113.50" nat-destination-port="443" nat-connection-tag="0" src-nat-rule-type="source rule" src-nat-rule-name="SNAT-Internet" dst-nat-rule-type="N/A" dst-nat-rule-name="N/A" protocol-id="6" policy-name="Allow-Internet" source-zone-name="trust" destination-zone-name="untrust" session-id-32="12345" packets-from-client="50" bytes-from-client="5120" packets-from-server="45" bytes-from-server="102400" elapsed-time="120" application="SSL" nested-application="UNKNOWN" username="john.doe" roles="Employees" routing-instance="default" destination-interface-name="reth1.0" encryption="Yes"]'
            },
            {
                title: 'Session Deny',
                log: '<14>1 2024-01-29T14:40:00.000+00:00 SRX-01 RT_FLOW - RT_FLOW_SESSION_DENY [junos@2636.1.1.1.2.36 source-address="10.0.0.50" source-port="12345" destination-address="198.51.100.75" destination-port="3389" connection-tag="0" service-name="junos-ms-rpc" protocol-id="6" policy-name="default-deny" source-zone-name="trust" destination-zone-name="untrust" session-id-32="12346" application="UNKNOWN" nested-application="UNKNOWN" username="N/A" roles="N/A" source-interface-name="ge-0/0/0.0" destination-interface-name="ge-0/0/1.0"]'
            },
            {
                title: 'UTM Web Filter Block',
                log: 'Jan 29 14:45:10 SRX-01 RT_UTM: WEBFILTER_URL_BLOCKED: WebFilter: ACTION="URL Blocked" 10.0.0.50(50227)->74.125.239.155(80) CATEGORY="Enhanced_Malware" REASON="BY_PRE_DEFINED" PROFILE="junos-wf-enhanced-default" URL=malicious-site.example.com OBJ=/payload.exe USERNAME=jane.smith ROLES=Employees'
            },
            {
                title: 'IDP Attack Event',
                log: 'Jan 29 14:50:30 SRX-01 RT_IDP: IDP_ATTACK_LOG_EVENT: IDP: at 1706540000, ANOMALY Attack log <93.157.158.93/13723->10.1.1.10/80> for TCP protocol and service HTTP application NONE by rule 1 of rulebase IPS in policy recommended. attack: repeat=2, action=drop, threat-severity=CRITICAL, name=HTTP:SQL:INJ-1'
            }
        ]
    },
    okta: {
        id: 'okta',
        name: 'Okta',
        emoji: '🔐',
        description: 'Okta System Log events — authentication, lifecycle, security, and admin operations (JSON)',
        category: 'identity',
        examples: [
            {
                title: 'User Sign-In Success',
                log: '{"uuid":"f3c7e5a2-1b4d-4f8e-9c6a-0d2e8f7b1a3c","published":"2026-03-07T14:30:00.000Z","eventType":"user.session.start","version":"0","severity":"INFO","displayMessage":"User login to Okta","actor":{"id":"00u1a2b3c4d5e6f7g8","type":"User","displayName":"Jane Smith","alternateId":"jsmith@contoso.com"},"outcome":{"result":"SUCCESS","reason":null},"target":[{"id":"00u1a2b3c4d5e6f7g8","type":"User","displayName":"Jane Smith","alternateId":"jsmith@contoso.com"}],"client":{"userAgent":{"rawUserAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0","os":"Windows 10","browser":"Chrome"},"zone":"Corporate Network","device":"Computer","ipAddress":"203.0.113.42","geographicalContext":{"city":"Seattle","state":"Washington","country":"United States","postalCode":"98101","geolocation":{"lat":47.6062,"lon":-122.3321}}},"authenticationContext":{"authenticationProvider":"OKTA_AUTHENTICATION_PROVIDER","credentialProvider":"OKTA_CREDENTIAL_PROVIDER","credentialType":"PASSWORD","externalSessionId":"trs8cVH0RuSnFPJxJnHQzg"},"securityContext":{"asNumber":8075,"asOrg":"Microsoft Corporation","isp":"Microsoft Corporation","domain":"microsoft.com","isProxy":false},"transaction":{"id":"WcKpz1uPQsqlROjhKvacFg","type":"WEB"},"debugContext":{"debugData":{"requestUri":"/api/v1/authn","dtHash":"a1b2c3d4e5f67890","behaviors":"{\\"New Geo-Location\\":\\"NEGATIVE\\",\\"New Device\\":\\"NEGATIVE\\",\\"New IP\\":\\"NEGATIVE\\"}","risk":"{\\"level\\":\\"LOW\\",\\"reasons\\":\\"Okta detected low risk\\"}"}},"request":{"ipChain":[{"ip":"203.0.113.42","geographicalContext":{"city":"Seattle","state":"Washington","country":"United States"},"version":"V4","source":null}]}}'
            },
            {
                title: 'User MFA Challenge',
                log: '{"uuid":"a4d8f6b3-2c5e-5a9f-0d7b-1e3f9a8c2b4d","published":"2026-03-07T14:31:00.000Z","eventType":"user.authentication.auth_via_mfa","version":"0","severity":"INFO","displayMessage":"Authentication of user via MFA","actor":{"id":"00u1a2b3c4d5e6f7g8","type":"User","displayName":"Jane Smith","alternateId":"jsmith@contoso.com"},"outcome":{"result":"SUCCESS","reason":null},"target":[{"id":"00u1a2b3c4d5e6f7g8","type":"User","displayName":"Jane Smith","alternateId":"jsmith@contoso.com"},{"id":"opf1a2b3c4d5e6f7g8","type":"AuthenticatorEnrollment","displayName":"Okta Verify","alternateId":"OKTA_VERIFY"}],"client":{"userAgent":{"rawUserAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0","os":"Windows 10","browser":"Chrome"},"zone":"Corporate Network","device":"Computer","ipAddress":"203.0.113.42","geographicalContext":{"city":"Seattle","state":"Washington","country":"United States","geolocation":{"lat":47.6062,"lon":-122.3321}}},"authenticationContext":{"authenticationProvider":"OKTA_AUTHENTICATION_PROVIDER","credentialProvider":"OKTA_CREDENTIAL_PROVIDER","credentialType":"OTP","externalSessionId":"trs8cVH0RuSnFPJxJnHQzg"},"transaction":{"id":"WcKpz1uPQsqlROjhKvacFg","type":"WEB"},"debugContext":{"debugData":{"factor":"OKTA_VERIFY_PUSH","factorIntent":"AUTHENTICATION","requestUri":"/api/v1/authn/factors/verify"}}}'
            },
            {
                title: 'User Lifecycle Create',
                log: '{"uuid":"b5e9a7c4-3d6f-6b0a-1e8c-2f4a0b9d3c5e","published":"2026-03-07T12:00:00.000Z","eventType":"user.lifecycle.create","version":"0","severity":"INFO","displayMessage":"Create okta user","actor":{"id":"00u9z8y7x6w5v4u3t2","type":"User","displayName":"Admin User","alternateId":"admin@contoso.com"},"outcome":{"result":"SUCCESS","reason":null},"target":[{"id":"00u2b3c4d5e6f7g8h9","type":"User","displayName":"New Employee","alternateId":"newemployee@contoso.com","detailEntry":{"firstName":"New","lastName":"Employee","email":"newemployee@contoso.com"}}],"client":{"userAgent":{"rawUserAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/122.0","os":"Windows 10","browser":"Edge"},"device":"Computer","ipAddress":"10.0.0.50","geographicalContext":{"city":"San Francisco","state":"California","country":"United States"}},"transaction":{"id":"Y5N3cW3DQH2LdCIBhBc6","type":"WEB"},"debugContext":{"debugData":{"changedAttributes":"firstName,lastName,email,login,mobilePhone","requestUri":"/api/v1/users"}}}'
            },
            {
                title: 'Application SSO',
                log: '{"uuid":"c6f0b8d5-4e7a-7c1b-2f9d-3a5b1c0e4d6f","published":"2026-03-07T14:45:00.000Z","eventType":"user.authentication.sso","version":"0","severity":"INFO","displayMessage":"User single sign on to app","actor":{"id":"00u1a2b3c4d5e6f7g8","type":"User","displayName":"Jane Smith","alternateId":"jsmith@contoso.com"},"outcome":{"result":"SUCCESS","reason":null},"target":[{"id":"0oa3c4d5e6f7g8h9i0","type":"AppInstance","displayName":"Salesforce","alternateId":"Salesforce"},{"id":"00u1a2b3c4d5e6f7g8","type":"AppUser","displayName":"Jane Smith","alternateId":"jsmith@contoso.com"}],"client":{"userAgent":{"rawUserAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X) Safari/17.3","os":"Mac OS X","browser":"Safari"},"device":"Computer","ipAddress":"203.0.113.42","geographicalContext":{"city":"Seattle","state":"Washington","country":"United States"}},"authenticationContext":{"externalSessionId":"trs8cVH0RuSnFPJxJnHQzg"},"transaction":{"id":"XkL9mN2OPqRsTuVwXyZa","type":"WEB"},"debugContext":{"debugData":{"signOnMode":"SAML_2_0","initiationType":"IDP_INITIATED","requestUri":"/app/salesforce/sso/saml"}}}'
            },
            {
                title: 'Group Membership Add',
                log: '{"uuid":"d7a1c9e6-5f8b-8d2c-3a0e-4b6c2d1f5e7a","published":"2026-03-07T12:05:00.000Z","eventType":"group.user_membership.add","version":"0","severity":"INFO","displayMessage":"Add user to group membership","actor":{"id":"00u9z8y7x6w5v4u3t2","type":"User","displayName":"Admin User","alternateId":"admin@contoso.com"},"outcome":{"result":"SUCCESS","reason":null},"target":[{"id":"00g4d5e6f7g8h9i0j1","type":"UserGroup","displayName":"Engineering Team","alternateId":"Engineering Team"},{"id":"00u2b3c4d5e6f7g8h9","type":"User","displayName":"New Employee","alternateId":"newemployee@contoso.com"}],"client":{"userAgent":{"rawUserAgent":"Mozilla/5.0 (Windows NT 10.0) Edge/122.0","os":"Windows 10","browser":"Edge"},"device":"Computer","ipAddress":"10.0.0.50"},"transaction":{"id":"Abc12DeFgHiJkLm34nO","type":"WEB"},"debugContext":{"debugData":{"requestUri":"/api/v1/groups/00g4d5.../users/00u2b3..."}}}'
            },
            {
                title: 'Suspicious Activity (Failed Login)',
                log: '{"uuid":"e8b2d0f7-6a9c-9e3d-4b1f-5c7d3e2a6f8b","published":"2026-03-07T15:15:00.000Z","eventType":"user.session.start","version":"0","severity":"WARN","displayMessage":"User login to Okta","actor":{"id":"00u5e6f7g8h9i0j1k2","type":"User","displayName":"Bob Johnson","alternateId":"bjohnson@contoso.com"},"outcome":{"result":"FAILURE","reason":"INVALID_CREDENTIALS"},"target":[{"id":"00u5e6f7g8h9i0j1k2","type":"User","displayName":"Bob Johnson","alternateId":"bjohnson@contoso.com"}],"client":{"userAgent":{"rawUserAgent":"python-requests/2.28.0","os":"Unknown","browser":"UNKNOWN"},"zone":null,"device":"Unknown","ipAddress":"198.51.100.77","geographicalContext":{"city":"Moscow","state":"Moscow","country":"Russia","geolocation":{"lat":55.7558,"lon":37.6173}}},"securityContext":{"asNumber":48642,"asOrg":"Hosting Provider LLC","isp":"Hosting Provider LLC","domain":"hostprov.ru","isProxy":true},"authenticationContext":{"credentialType":"PASSWORD"},"transaction":{"id":"ZzYyXxWwVvUuTtSsRr","type":"WEB"},"debugContext":{"debugData":{"requestUri":"/api/v1/authn","threatSuspected":"true","behaviors":"{\\"New Geo-Location\\":\\"POSITIVE\\",\\"New Device\\":\\"POSITIVE\\",\\"New IP\\":\\"POSITIVE\\"}","risk":"{\\"level\\":\\"HIGH\\",\\"reasons\\":\\"Anomalous device,Anomalous location,Anomalous IP\\"}"}}}'
            }
        ]
    },
    'ping-identity': {
        id: 'ping-identity',
        name: 'Ping Identity (PingOne)',
        emoji: '🏓',
        description: 'PingOne Platform audit activity logs — authentication, user lifecycle, MFA, and admin events (JSON)',
        category: 'identity',
        examples: [
            {
                title: 'Authentication Success',
                log: '{"id":"evt-a1b2c3d4-e5f6-7890-abcd-ef1234567890","recordedAt":"2026-03-07T14:30:00.000Z","createdAt":"2026-03-07T14:30:00.000Z","action":{"type":"AUTHENTICATION","description":"User Authentication"},"actors":[{"user":{"id":"usr-a1b2c3d4-e5f6-7890","name":"Jane Smith","type":"User","environment":{"id":"env-prod-001"},"population":{"id":"pop-default"}}},{"client":{"id":"app-web-portal-001","name":"Customer Portal","type":"CLIENT","environment":{"id":"env-prod-001"}}}],"resources":[{"user":{"id":"usr-a1b2c3d4-e5f6-7890","name":"Jane Smith","type":"User","population":{"id":"pop-default"}}},{"application":{"id":"app-web-portal-001","name":"Customer Portal","type":"OIDC"}}],"result":{"status":"SUCCESS","description":"Successful authentication"},"tags":["identityActivity","SUCCESS"],"correlationId":"corr-f1e2d3c4-b5a6-7890","session":{"id":"sess-a1b2c3d4-e5f6"},"environment":{"id":"env-prod-001"},"request":{"ipAddress":"203.0.113.42","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0"},"location":{"city":"Seattle","state":"Washington","country":"US","latitude":47.6062,"longitude":-122.3321},"authentication":{"authMethod":"PASSWORD","flowType":"LOGIN","protocol":"OPENID_CONNECT"}}'
            },
            {
                title: 'MFA Challenge',
                log: '{"id":"evt-b2c3d4e5-f6a7-8901-bcde-f23456789012","recordedAt":"2026-03-07T14:31:00.000Z","createdAt":"2026-03-07T14:31:00.000Z","action":{"type":"MFA.CHECK","description":"MFA Check"},"actors":[{"user":{"id":"usr-a1b2c3d4-e5f6-7890","name":"Jane Smith","type":"User"}}],"resources":[{"user":{"id":"usr-a1b2c3d4-e5f6-7890","name":"Jane Smith","type":"User"}}],"result":{"status":"SUCCESS","description":"MFA challenge passed"},"tags":["identityActivity","SUCCESS"],"correlationId":"corr-f1e2d3c4-b5a6-7890","session":{"id":"sess-a1b2c3d4-e5f6"},"environment":{"id":"env-prod-001"},"request":{"ipAddress":"203.0.113.42","userAgent":"Mozilla/5.0 (Windows NT 10.0) Chrome/122.0.0.0"},"mfa":{"factorType":"PUSH","status":"PASSED","device":{"id":"dev-push-001","type":"MOBILE"}}}'
            },
            {
                title: 'User Created',
                log: '{"id":"evt-c3d4e5f6-a7b8-9012-cdef-345678901234","recordedAt":"2026-03-07T12:00:00.000Z","createdAt":"2026-03-07T12:00:00.000Z","action":{"type":"USER.CREATED","description":"User Created"},"actors":[{"user":{"id":"usr-admin-001","name":"Admin User","type":"Administrator"}},{"client":{"id":"app-admin-console","name":"PingOne Admin Console","type":"PING_ONE_ADMIN_CONSOLE"}}],"resources":[{"user":{"id":"usr-new-emp-001","name":"New Employee","type":"User","population":{"id":"pop-default"},"environment":{"id":"env-prod-001"}}}],"result":{"status":"SUCCESS","description":"User created successfully"},"tags":["adminActivity","SUCCESS"],"correlationId":"corr-a2b3c4d5-e6f7-8901","environment":{"id":"env-prod-001"},"request":{"ipAddress":"10.0.0.50","userAgent":"Mozilla/5.0 (Windows NT 10.0) Edge/122.0"}}'
            },
            {
                title: 'Application SSO (SAML)',
                log: '{"id":"evt-d4e5f6a7-b8c9-0123-defa-456789012345","recordedAt":"2026-03-07T14:45:00.000Z","createdAt":"2026-03-07T14:45:00.000Z","action":{"type":"AUTHENTICATION","description":"User Authentication"},"actors":[{"user":{"id":"usr-a1b2c3d4-e5f6-7890","name":"Jane Smith","type":"User"}},{"client":{"id":"app-salesforce-001","name":"Salesforce","type":"CLIENT"}}],"resources":[{"user":{"id":"usr-a1b2c3d4-e5f6-7890","name":"Jane Smith","type":"User"}},{"application":{"id":"app-salesforce-001","name":"Salesforce","type":"SAML"}}],"result":{"status":"SUCCESS","description":"SSO authentication successful"},"tags":["identityActivity","SUCCESS"],"correlationId":"corr-b3c4d5e6-f7a8-9012","session":{"id":"sess-a1b2c3d4-e5f6"},"environment":{"id":"env-prod-001"},"authentication":{"authMethod":"PASSWORD","flowType":"LOGIN","protocol":"SAML"}}'
            },
            {
                title: 'Group Membership Add',
                log: '{"id":"evt-e5f6a7b8-c9d0-1234-efab-567890123456","recordedAt":"2026-03-07T12:05:00.000Z","createdAt":"2026-03-07T12:05:00.000Z","action":{"type":"GROUP_MEMBERSHIP.CREATED","description":"User added to group"},"actors":[{"user":{"id":"usr-admin-001","name":"Admin User","type":"Administrator"}}],"resources":[{"group":{"id":"grp-eng-001","name":"Engineering Team"}},{"user":{"id":"usr-new-emp-001","name":"New Employee","type":"User"}}],"result":{"status":"SUCCESS","description":"Group membership created"},"tags":["adminActivity","SUCCESS"],"correlationId":"corr-c4d5e6f7-a8b9-0123","environment":{"id":"env-prod-001"},"request":{"ipAddress":"10.0.0.50"}}'
            },
            {
                title: 'Risk Evaluation (High Risk)',
                log: '{"id":"evt-f6a7b8c9-d0e1-2345-fabc-678901234567","recordedAt":"2026-03-07T15:15:00.000Z","createdAt":"2026-03-07T15:15:00.000Z","action":{"type":"RISK_EVALUATION.CREATED","description":"Risk Evaluation Created"},"actors":[{"user":{"id":"usr-b2c3d4e5-f6a7-8901","name":"Bob Johnson","type":"User"}}],"resources":[{"user":{"id":"usr-b2c3d4e5-f6a7-8901","name":"Bob Johnson","type":"User"}}],"result":{"status":"SUCCESS","description":"Risk evaluation completed"},"tags":["identityActivity","SUCCESS"],"correlationId":"corr-d5e6f7a8-b9c0-1234","environment":{"id":"env-prod-001"},"request":{"ipAddress":"198.51.100.77","userAgent":"python-requests/2.28.0"},"location":{"city":"Moscow","state":"Moscow","country":"RU","latitude":55.7558,"longitude":37.6173},"risk":{"level":"HIGH","score":87,"predictors":"ANONYMOUS_NETWORK, IMPOSSIBLE_TRAVEL, NEW_DEVICE","policyId":"rpol-default-001","policyName":"Default Risk Policy","result":"DENY"}}'
            }
        ]
    },
    paloalto: {
        id: 'paloalto',
        name: 'Palo Alto (PAN-OS 11.x)',
        emoji: '🔶',
        description: 'Palo Alto Networks firewall logs (PAN-OS 11.x)',
        category: 'firewall',
        examples: [
            {
                title: 'Traffic Allow',
                log: ',2024/01/29 14:30:15,007951000012345,TRAFFIC,end,,2024/01/29 14:30:14,192.168.1.100,8.8.8.8,0.0.0.0,0.0.0.0,Allow-Internet,,,web-browsing,vsys1,trust,untrust,ethernet1/1,ethernet1/2,Log-Forwarding,,54321,1,54321,53,0,0,0x0,udp,allow,1024,512,512,10,2024/01/29 14:29:00,120,general-internet,,12345,0x8000000000000000,United States,United States,,5,5,aged-out,0,0,0,0,,PA-5220,from-policy,,,0,,0,,,,,,,,,,,00:11:22:33:44:55,00:50:56:ab:cd:ef,,,,,,,,,,,,,,,,,,,,,0,2024/01/29 14:30:15.123456,,,internet-utility,general-internet,browser-based'
            },
            {
                title: 'Traffic Deny',
                log: ',2024/01/29 14:35:22,007951000012345,TRAFFIC,drop,,2024/01/29 14:35:21,10.0.0.50,192.168.100.1,0.0.0.0,0.0.0.0,Block-Malicious,,,ms-rdp,vsys1,trust,untrust,ethernet1/1,ethernet1/2,Log-Forwarding,,12345,1,49152,3389,0,0,0x0,tcp,deny,0,0,0,1,2024/01/29 14:35:21,0,business-systems,,12346,0x0,Reserved,Reserved,,0,0,policy-deny,0,0,0,0,,PA-5220,from-policy,,,0,,0,,,,,,,,,,,aa:bb:cc:dd:ee:ff,ff:ee:dd:cc:bb:aa,,,,,,,,,,,,,,,,,,,,,0,2024/01/29 14:35:22.456789,,,remote-access,business-systems,client-server'
            },
            {
                title: 'Threat - Spyware',
                log: ',2024/01/29 14:40:10,007951000012345,THREAT,spyware,,2024/01/29 14:40:09,192.168.1.105,203.0.113.50,0.0.0.0,0.0.0.0,Security-Policy,domain\\user1,,web-browsing,vsys1,trust,untrust,ethernet1/1,ethernet1/2,Log-Forwarding,,12347,1,49152,80,0,0,0x0,tcp,alert,http://malicious.example.com/c2,Zeus Trojan C2 Traffic,spyware,critical,client-to-server,12348,0x8000000000000000,United States,Reserved,,any,0,1234567890abcdef,,,Mozilla/5.0 (Windows NT 10.0; Win64; x64),PE,192.168.1.105,,,,,0,0,0,0,,PA-5220,,,,GET,0,,0,0,,30000,command-and-control,8675-7890,,0,0,,malware,0,0x0,,Computer,Windows-Workstation,Dell Latitude 5420,Dell,Windows,Windows 10,DESKTOP-ABC123,00:11:22:33:44:55,Server,Linux-Server,Dell PowerEdge R740,Dell,Linux,CentOS 8,webserver01,00:50:56:ab:cd:ef,,,,,,,,,0,2024/01/29 14:40:10.789012,,'
            },
            {
                title: 'Threat - Virus',
                log: ',2024/01/29 14:45:33,007951000012345,THREAT,virus,,2024/01/29 14:45:32,192.168.1.110,203.0.113.75,0.0.0.0,0.0.0.0,Security-Policy,domain\\user2,,ssl,vsys1,trust,untrust,ethernet1/1,ethernet1/2,Log-Forwarding,,12349,1,54321,443,0,0,0x0,tcp,alert,https://download.example.com/file.exe,Ransomware.Generic,virus,high,client-to-server,12350,0x8000000000000000,United States,Reserved,,PE,0,a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890,,,Mozilla/5.0 (Windows NT 10.0; Win64; x64),PE,192.168.1.110,https://google.com,,,,,0,0,0,0,,PA-5220,,,,GET,0,,0,0,,52020,malware,8675-7890,,0,0,,malware,0,0x0,,Computer,Windows-Workstation,HP EliteBook 840,HP,Windows,Windows 11,LAPTOP-XYZ789,aa:bb:cc:dd:ee:ff,Server,Windows Server,Dell PowerEdge R640,Dell,Windows Server,Windows Server 2019,fileserver01,ff:ee:dd:cc:bb:aa,,,,,,,,,0,2024/01/29 14:45:33.234567,,'
            },
            {
                title: 'Threat - URL Filtering',
                log: ',2024/01/29 14:50:00,007951000012345,THREAT,url,,2024/01/29 14:49:59,192.168.1.115,203.0.113.100,0.0.0.0,0.0.0.0,Security-Policy,domain\\user3,,web-browsing,vsys1,trust,untrust,ethernet1/1,ethernet1/2,Log-Forwarding,,12351,1,49200,80,0,0,0x0,tcp,alert,http://phishing.example.com/login,Phishing URL,url,medium,client-to-server,12352,0x8000000000000000,United States,Reserved,,text/html,0,,,0,Mozilla/5.0 (Windows NT 10.0; Win64; x64),HTML,192.168.1.115,https://email.example.com,,,,,0,0,0,0,,PA-5220,,,,GET,0,,0,0,,86001,phishing,8675-7890,,0,0,,phishing,0,0x0,,Computer,Windows-Workstation,Lenovo ThinkPad X1,Lenovo,Windows,Windows 10,WORKSTATION-001,11:22:33:44:55:66,Server,Linux-Server,Apache Web Server,Apache,Linux,Ubuntu 20.04,phishing-site,66:55:44:33:22:11,,,,,,,,,0,2024/01/29 14:50:00.567890,,'
            },
            {
                title: 'Threat - Vulnerability',
                log: ',2024/01/29 14:55:15,007951000012345,THREAT,vulnerability,,2024/01/29 14:55:14,203.0.113.200,192.168.1.50,0.0.0.0,0.0.0.0,Security-Policy,,,web-browsing,vsys1,untrust,dmz,ethernet1/2,ethernet1/3,Log-Forwarding,,12353,1,12345,8080,0,0,0x0,tcp,alert,http://webapp.example.com/admin,SQL Injection Attempt,vulnerability,critical,client-to-server,12354,0x8000000000000000,Reserved,United States,,text/html,0,,,0,sqlmap/1.5,HTML,203.0.113.200,,,,,,,0,0,0,0,,PA-5220,,,,POST,0,,0,0,,40000,code-execution,8675-7890,,0,0,,sql-injection,0,0x0,,,,,,,,,,,Server,Linux-Server,Nginx Web Server,Nginx,Linux,Ubuntu 22.04,webapp01,77:88:99:aa:bb:cc,,,,,,,,,0,2024/01/29 14:55:15.890123,,'
            }
        ]
    },
    sentinelone: {
        id: 'sentinelone',
        name: 'SentinelOne (Singularity)',
        emoji: '🟣',
        description: 'SentinelOne Singularity EDR logs — Deep Visibility and Threat telemetry (JSON)',
        category: 'endpoint',
        examples: [
            {
                title: 'Process Creation (Deep Visibility)',
                log: '{"AgentId":"123456789012345678","ComputerName":"DESKTOP-ABC123","EndpointName":"DESKTOP-ABC123","SiteId":"112233445566778899","SiteName":"US West Coast - Execs","EventType":"Process Creation","EventTimestamp":"2026-03-07T14:30:00.000Z","ProcessName":"powershell.exe","ProcessImagePath":"C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe","ProcessCmd":"powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA=","ProcessId":"8192","ProcessUserName":"jsmith","ProcessIntegrityLevel":"Medium","ProcessIsRoot":false,"ParentProcessName":"cmd.exe","ParentProcessId":"1024","ParentProcessImagePath":"C:\\\\Windows\\\\System32\\\\cmd.exe","Sha1":"da39a3ee5e6b4b0d3255bfef95601890afd80709","Sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","StorylineId":"D38F2B1C-E89A-407B-8A52-AE547F187C11","OsType":"Windows","AgentVersion":"23.2.3.358"}'
            },
            {
                title: 'Network Activity (Deep Visibility)',
                log: '{"AgentId":"123456789012345678","ComputerName":"DESKTOP-ABC123","EndpointName":"DESKTOP-ABC123","EventType":"Network","EventTimestamp":"2026-03-07T14:31:00.000Z","ProcessName":"firefox.exe","ProcessId":"5432","SrcIp":"192.168.1.50","SrcPort":"54321","DstIp":"203.0.113.100","DstPort":"443","TransportProtocol":"TCP","NetDirection":"Outbound","Url":"http://api.example.com","StorylineId":"A1B2C3D4-E89A-407B-8A52-AE547F187C22"}'
            },
            {
                title: 'DNS Request (Deep Visibility)',
                log: '{"AgentId":"123456789012345678","ComputerName":"DESKTOP-ABC123","EndpointName":"DESKTOP-ABC123","EventType":"DNS","EventTimestamp":"2026-03-07T14:32:00.000Z","ProcessName":"chrome.exe","ProcessId":"6789","DnsRequest":"malicious.example.com","DnsResponse":"198.51.100.44","IsLocalNet":false,"StorylineId":"F9E8D7C6-B5A4-407B-8A52-AE547F187C33"}'
            },
            {
                title: 'Incident / Threat Detection',
                log: '{"AgentId":"123456789012345678","ComputerName":"DESKTOP-ABC123","EndpointName":"DESKTOP-ABC123","CreatedAt":"2026-03-07T14:35:00.123Z","ThreatId":"TID-12345678-ABCD-1234","ThreatName":"Malware.Generic","Classification":"Malware","MitigationStatus":"Pending","ThreatMitigationStatus":"Suspicious","AnalystVerdict":"Undefined","ConfidenceLevel":"Malicious","InitiatedBy":"Agent Policy","ProcessName":"malware.exe","Sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","StorylineId":"D38F2B1C-E89A-407B-8A52-AE547F187C11"}'
            }
        ]
    },
    sonicwall: {
        id: 'sonicwall',
        name: 'SonicWall (SonicOS 6.5/7.x)',
        emoji: '🔶',
        description: 'SonicWall firewall Enhanced Syslog format (SonicOS 6.5/7.x)',
        category: 'firewall',
        examples: [
            {
                title: 'Connection Opened',
                log: 'id=firewall sn=C0EAE4ABCDEF time="2024-01-29 14:30:15" fw=10.0.0.1 pri=6 c=1024 m=98 msg="Connection Opened" n=1 src=192.168.1.100:54321:X0 dst=203.0.113.50:443:X1 srcMac=a0:b1:c2:d3:e4:f5 dstMac=00:00:5E:00:53:00 proto=tcp/6 fw_action=allow rule="Allow-Internet" app=184 appName="General HTTPS" dpi=1 catid=6 Category="Network Access" sess=Allow dstname=www.google.com usr=john.doe geoSrc=US geoDst=US'
            },
            {
                title: 'Connection Closed',
                log: 'id=firewall sn=C0EAE4ABCDEF time="2024-01-29 14:35:00" fw=10.0.0.1 pri=6 c=1024 m=537 msg="Connection Closed" n=1 src=192.168.1.100:54321:X0 dst=203.0.113.50:443:X1 srcMac=a0:b1:c2:d3:e4:f5 dstMac=00:00:5E:00:53:00 proto=tcp/6 fw_action=NA rule="Allow-Internet" app=184 appName="General HTTPS" sent=5120 rcvd=102400 spkt=50 rpkt=45 cdur=120 catid=6 Category="Network Access" dstname=www.google.com usr=john.doe geoSrc=US geoDst=US'
            },
            {
                title: 'IPS Detection Alert',
                log: 'id=firewall sn=C0EAE4ABCDEF time="2024-01-29 14:40:10" fw=10.0.0.1 pri=1 c=32 m=1154 msg="IPS Detection Alert" n=1 src=93.157.158.93:13723:X1 dst=10.1.1.10:80:X0 srcMac=00:00:5E:00:53:00 dstMac=a0:b1:c2:d3:e4:f5 proto=tcp/6 fw_action=drop ipscat="WEB-ATTACKS" ipscatid=4 ipspri=1 ipssigname="WEB-ATTACKS SQL Injection Attempt" ipssigid=5001 ipsAction=prevent intrusionType="Intrusion Prevention" Category="Network Detection" catid=82 dpi=1 geoSrc=RU geoDst=US'
            },
            {
                title: 'Content Filter Block',
                log: 'id=firewall sn=C0EAE4ABCDEF time="2024-01-29 14:45:33" fw=10.0.0.1 pri=4 c=256 m=97 msg="Web site access denied" n=1 src=10.0.0.50:50227:X0 dst=198.51.100.75:80:X1 srcMac=b0:c1:d2:e3:f4:05 dstMac=00:00:5E:00:53:00 proto=tcp/6 op.action=blocked cfs.category=72 cfs.categoryName="Adult/Mature Content" cfs.profile="Strict-CFS" cfs.url=blocked-site.example.com fw_action=deny rule="CFS-Block" usr=jane.smith Category="Content Filter" catid=128 geoSrc=US geoDst=US'
            },
            {
                title: 'Port Scan Detected',
                log: 'id=firewall sn=C0EAE4ABCDEF time="2024-01-29 15:00:00" fw=10.0.0.1 pri=1 c=32 m=83 msg="Probable port scan detected" n=2 src=10.0.0.3:443:X1 dst=172.16.194.2:47379:X0 srcMac=00:00:5E:00:53:ff dstMac=00:00:5E:00:53:00 proto=tcp/6 fw_action=drop Category="Network Detection" catid=82 note="TCP scanned port list, 14551, 61968, 53577, 27976, 29050, 25330, 21761, 23903, 7412, 47379" geoSrc=US geoDst=US'
            }
        ]
    },
    sophos: {
        id: 'sophos',
        name: 'Sophos Intercept X / Central',
        emoji: '🛡️',
        description: 'Sophos Endpoint logs — Threats, Intercept X behavior, and Network activity (JSON)',
        category: 'endpoint',
        examples: [
            {
                title: 'Malware Detection (Alert / Threat)',
                log: '{"id":"12345678-ABCD-9012-3456-7890ABCDEF12","customer_id":"xyz123","severity":"high","created_at":"2026-03-07T14:30:15.123Z","when":1706540000000,"type":"Event::Endpoint::Threat::Detected","name":"Malware detected: Troj/Ransom-A","group":"MALWARE","description":"A malicious file was blocked from executing.","endpoint_id":"A1B2C3D4-E5F6-7890-A1B2-C3D4E5F67890","endpoint_type":"computer","host":"DESKTOP-ABC123","platform":"win","user":"jsmith","user_domain":"CONTOSO","source_info_ip":"192.168.1.50","threat":"Troj/Ransom-A","threatType":"malware","threat_source":"Sophos Intercept X","path":"C:\\\\Users\\\\jsmith\\\\Downloads\\\\malware.exe","sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","mitigation_action":"Cleaned"}'
            },
            {
                title: 'Network Activity (Live Discover)',
                log: '{"endpoint_id":"A1B2C3D4-E5F6-7890-A1B2-C3D4E5F67890","host":"DESKTOP-ABC123","event_type":"Network","when":1706540060000,"process_name":"firefox.exe","pid":5432,"local_ip":"192.168.1.50","local_port":54321,"remote_ip":"203.0.113.100","remote_port":443,"protocol":"TCP","direction":"outbound","url":"http://api.example.com","domain":"api.example.com","user":"jsmith","app_name":"Mozilla Firefox"}'
            },
            {
                title: 'Process Creation (Live Discover)',
                log: '{"endpoint_id":"A1B2C3D4-E5F6-7890-A1B2-C3D4E5F67890","host":"DESKTOP-ABC123","event_type":"Process","event_sub_type":"Creation","when":1706540120000,"process_name":"powershell.exe","process_path":"C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe","cmd_line":"powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA=","pid":8192,"sha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","parent_name":"cmd.exe","parent_pid":1024,"parent_cmd_line":"cmd.exe /c start script.bat","user":"jsmith"}'
            },
            {
                title: 'Incident / Web Control',
                log: '{"id":"F9E8D7C6-B5A4-407B-8A52-AE547F187C33","customer_id":"xyz123","severity":"medium","created_at":"2026-03-07T14:35:00.123Z","when":1706540500000,"type":"Event::Endpoint::WebControlViolation","name":"Web Control Violation","group":"WEB_CONTROL","description":"User bypassed the web filter warning.","endpoint_id":"A1B2C3D4-E5F6-7890-A1B2-C3D4E5F67890","host":"DESKTOP-ABC123","user":"jsmith","url":"http://malicious.example.com/payload.exe","web_property":"Malware","action":"Warned"}'
            }
        ]
    },
    symantec: {
        id: 'symantec',
        name: 'Broadcom / Symantec SEP',
        emoji: '🔵',
        description: 'Broadcom Symantec Endpoint Protection (SEP) logs — Risk, Firewall/Traffic, System, SONAR, and Application Control events (JSON)',
        category: 'endpoint',
        examples: [
            {
                title: 'Risk / Threat Detection',
                log: '{"Log_Type":"Risk","Event_Time":"2026-03-07T14:30:00Z","Event_ID":"1234567890ABCDEF","Severity":"Critical","Severity_Level":"5","Action":"Quarantined","Actual_Action":"Quarantined","Host_Name":"DESKTOP-ABC123","Local_Host_IP":"192.168.1.50","User_Name":"jsmith","User_Domain":"CONTOSO","Domain_Name":"Default","Group_Name":"My Company\\\\Workstations\\\\Laptops","Server_Name":"SEPM-SERVER-01","Risk_Name":"Trojan.Gen.SMH","Risk_Type":"Virus","File_Path":"C:\\\\Users\\\\jsmith\\\\Downloads\\\\payload.exe","File_Name":"payload.exe","SHA256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","Detection_Score":"98","Application_Name":"chrome.exe","Application_Path":"C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","OS_Name":"Windows 10","OS_Version":"10.0.19045"}'
            },
            {
                title: 'Firewall / Traffic Block',
                log: '{"Log_Type":"Traffic","Event_Time":"2026-03-07T14:31:00Z","Event_ID":"ABCDEF1234567890","Severity":"Info","Action":"Blocked","Host_Name":"DESKTOP-ABC123","Local_Host_IP":"192.168.1.50","Local_IP":"192.168.1.50","Local_Port":"54321","Remote_IP":"203.0.113.100","Remote_Port":"443","Protocol":"TCP","Direction":"Outbound","Remote_Host_Name":"malicious.example.com","Rule_Name":"Block all outgoing FTP to the Internet","User_Name":"jsmith","Application_Name":"powershell.exe","Application_Path":"C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe","OS_Name":"Windows 10"}'
            },
            {
                title: 'SONAR / Behavior Detection',
                log: '{"Event_Time":"2026-03-07T14:32:00Z","Event_ID":"FEDCBA0987654321","Event_Type":"Behavior","Severity":"Major","Action":"Blocked","Sub_Action":"Process Terminated","Host_Name":"SRV-SQL-01","Local_Host_IP":"10.0.0.5","User_Name":"SYSTEM","Domain_Name":"Finance_Domain","Category_Type":"SONAR","Category_Description":"System Infected: Trojan.Gen Activity","Application_Name":"wscript.exe","Application_Path":"C:\\\\Windows\\\\System32\\\\wscript.exe","Caller_Process_Name":"cmd.exe","Caller_Process_Path":"C:\\\\Windows\\\\System32\\\\cmd.exe","Detection_Score":"100","SHA256":"a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890"}'
            },
            {
                title: 'System Event',
                log: '{"Log_Type":"System","Event_Time":"2026-03-07T14:35:00Z","Event_ID":"SYS-001","Severity":"Info","Event_Desc":"Definitions updated successfully","Host_Name":"DESKTOP-ABC123","Computer_Name":"DESKTOP-ABC123","Local_Host_IP":"192.168.1.50","Server_Name":"SEPM-SERVER-01","Site_Name":"Primary_Site","Group_Name":"My Company\\\\Workstations","OS_Name":"Windows 10","OS_Version":"10.0.19045"}'
            }
        ]
    },
    trendmicro: {
        id: 'trendmicro',
        name: 'Trend Micro Vision One / Apex One',
        emoji: '🟥',
        description: 'Trend Micro Vision One / Apex One XDR logs — Endpoint activity and Threat telemetry (JSON)',
        category: 'endpoint',
        examples: [
            {
                title: 'Process Activity (PROCESS)',
                log: '{"uuid":"12345678-ABCD-9012-3456-7890ABCDEF12","logId":"L-123456789","eventTime":1706540000000,"eventTimeDT":"2026-03-07T14:30:00.0000000Z","logType":"PROCESS","eventSubId":"1","endpointHostName":"DESKTOP-ABC123","endpointIp":"192.168.1.50","osName":"Windows","endpointGuid":"A1B2C3D4-E5F6-7890-A1B2-C3D4E5F67890","logonUser":"jsmith","logonDomain":"CONTOSO","processName":"powershell.exe","processFilePath":"C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe","processCmd":"powershell.exe -ExecutionPolicy Bypass -encodedCommand IAA=","processId":"8192","processFileHashSha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","parentProcessName":"cmd.exe","parentProcessFilePath":"C:\\\\Windows\\\\System32\\\\cmd.exe","parentProcessCmd":"cmd.exe /c start script.bat","parentProcessId":"1024","productCode":"xdr"}'
            },
            {
                title: 'Network Activity (NETWORK)',
                log: '{"uuid":"F9E8D7C6-B5A4-407B-8A52-AE547F187C33","eventTime":1706540060000,"logType":"NETWORK","eventSubId":"5","endpointHostName":"DESKTOP-ABC123","endpointIp":"192.168.1.50","processName":"firefox.exe","processId":"5432","srcIp":"192.168.1.50","srcPort":"54321","dstIp":"203.0.113.100","dstPort":"443","protocol":"TCP","connectionDirection":"Outbound","requestUrl":"http://api.example.com","requestDomain":"api.example.com","logonUser":"jsmith","productCode":"xdr"}'
            },
            {
                title: 'File Activity (FILE)',
                log: '{"uuid":"A1B2C3D4-E89A-407B-8A52-AE547F187C22","eventTime":1706540120000,"logType":"FILE","eventSubId":"10","endpointHostName":"DESKTOP-ABC123","processName":"chrome.exe","objectFilePath":"C:\\\\Users\\\\jsmith\\\\Downloads\\\\payload.exe","objectFileName":"payload.exe","objectFileExtension":"exe","objectFileHashSha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","objectFileSize":1048576,"logonUser":"jsmith","productCode":"xdr"}'
            },
            {
                title: 'Security Alert / Malware Detection',
                log: '{"uuid":"ABCDEF12-3456-7890-ABCD-EF1234567890","eventTime":1706540500000,"logType":"THREAT","endpointHostName":"DESKTOP-ABC123","endpointIp":"192.168.1.50","threatName":"Ransom.Win32.WannaCry","threatType":"Malware","riskLevel":"Critical","action":"Block","actionResult":"Success","ruleId":"RULE-100456","processName":"malware.exe","objectFilePath":"C:\\\\Users\\\\jsmith\\\\Downloads\\\\malware.exe","objectFileHashSha256":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","logonUser":"jsmith","productCode":"sao"}'
            }
        ]
    },
    ubiquiti: {
        id: 'ubiquiti',
        name: 'Ubiquiti UniFi/EdgeRouter (UniFi OS)',
        emoji: '🔷',
        description: 'Ubiquiti UniFi (USG/UDM) and EdgeRouter logs (UniFi OS)',
        category: 'firewall',
        examples: [
            {
                title: 'Firewall Drop (WAN_LOCAL)',
                log: 'Nov 5 06:27:01 USG-Pro-4 kernel: [WAN_LOCAL-4000-D]IN=eth0 OUT= MAC=78:8a:20:43:58:67:00:01:5c:77:58:46:08:00 SRC=80.82.65.231 DST=173.172.1.5 LEN=40 TOS=0x08 PREC=0x20 TTL=237 ID=60913 PROTO=TCP SPT=42186 DPT=3735 WINDOW=1024 RES=0x00 SYN URGP=0 MARK=0x64800000'
            },
            {
                title: 'Firewall Accept (LAN_IN)',
                log: 'Feb 14 10:00:00 UDM-Pro kernel: [LAN_IN-2000-A]IN=br0 OUT=eth4 MAC=00:11:22:33:44:55:66:77:88:99:aa:bb:08:00 SRC=192.168.1.50 DST=8.8.8.8 LEN=60 TOS=0x00 PREC=0x00 TTL=64 ID=4567 DF PROTO=TCP SPT=54321 DPT=53 WINDOW=65535 RES=0x00 SYN URGP=0'
            },
            {
                title: 'EdgeRouter NAT Masquerade',
                log: 'Dec 23 18:21:55 ubnt kernel: [NAT-5010-MASQ] IN= OUT=eth0 SRC=192.168.2.10 DST=1.1.1.1 LEN=73 TOS=0x00 PREC=0x00 TTL=64 ID=14664 DF PROTO=UDP SPT=21167 DPT=53 LEN=53'
            },
            {
                title: 'UDM Default Drop',
                log: '<4>Feb 24 23:02:22 UDM kernel: [435774.326627] IN=br0 OUT=eth4 MAC=76:83:c2:d5:38:1e:10:a4:be:4b:d6:41:08:00 SRC=192.168.10.20 DST=116.196.80.120 LEN=32 TOS=0x00 PREC=0x00 TTL=63 ID=0 DF PROTO=UDP SPT=40622 DPT=10001 LEN=12'
            },
            {
                title: 'Connection Tracking',
                log: 'kernel: [LAN_LOCAL-default-A]IN=br0 OUT= MAC=ff:ff:ff:ff:ff:ff:00:11:22:33:44:55:08:00 SRC=10.0.0.1 DST=255.255.255.255 LEN=328 TOS=0x00 PREC=0x00 TTL=64 ID=0 DF PROTO=UDP SPT=67 DPT=68 LEN=308'
            }
        ]
    },
    watchguard: {
        id: 'watchguard',
        name: 'WatchGuard Firebox (Fireware OS 12.x)',
        emoji: '🔥',
        description: 'WatchGuard Firebox syslog format (Fireware OS 12.x)',
        category: 'firewall',
        examples: [
            {
                title: 'Traffic Allow (HTTPS)',
                log: '<14>2024-04-12T07:46:11Z Firebox-01 https-proxy[1234]: msg_id="2CFF-0000" action="allow" src_ip="200.200.200.2" dst_ip="52.113.194.132" proto="tcp" src_port="61263" dst_port="443" src_intf="Trusted" dst_intf="External" proxy_act="Default-HTTPS-Client" op="CONNECT" dstname="api.example.com" geo_src="BRA" geo_dst="USA" text="HTTPS Request"'
            },
            {
                title: 'Traffic Deny (Unhandled Packet)',
                log: '<14>2025-01-20T06:48:22Z Firebox-01 firewall[100]: msg_id="3000-0148" action="Deny" src_ip="192.168.22.189" dst_ip="23.222.17.170" proto="udp" src_port="59576" dst_port="443" src_intf="Trusted-Bridge" dst_intf="External" geo_dst="CAN" sent_bytes="1278" rcvd_bytes="0" msg="Unhandled Internal Packet-00"'
            },
            {
                title: 'HTTP Proxy Block (WebBlocker)',
                log: '<14>2024-01-29T14:30:00Z Firebox-01 http-proxy[1234]: msg_id="1A04-0002" action="deny" src_ip="10.0.1.50" dst_ip="198.51.100.20" proto="tcp" src_port="55667" dst_port="80" op="GET" arg="/malware.exe" dstname="bad-site.com" category="Malware" reputation="-1" msg="Request denied by WebBlocker"'
            },
            {
                title: 'IPS Threat Detected',
                log: '<11>2024-01-29T14:45:00Z Firebox-01 firewall[100]: msg_id="4000-0001" action="drop" src_ip="203.0.113.88" dst_ip="192.168.1.5" proto="tcp" src_port="44332" dst_port="80" threat_name="SQL Injection" threat_id="12345" threat_level="Critical" msg="IPS Signature Match"'
            },
            {
                title: 'Legacy Traffic Log (Allow)',
                log: '<14>Jan 29 15:00:00 Firebox-01 firewall: Allow 10.0.1.100 8.8.8.8 udp 54321 53 Trusted External'
            }
        ]
    }
};

/**
 * Get log format by ID
 * @param {string} id - Log format ID
 * @returns {object|null} Log format object or null if not found
 */
export function getLogFormat(id) {
    return logFormats[id] || null;
}

/**
 * Get all log formats as array
 * @returns {Array} Array of log format objects with id property
 */
export function getAllLogFormats() {
    return Object.entries(logFormats).map(([id, format]) => ({
        id,
        ...format
    }));
}

/**
 * Auto-detect log format from log text
 * @param {string} logText - Raw log text
 * @returns {string|null} Detected format ID or null
 */
export function autoDetectLogFormat(logText) {
    if (!logText || typeof logText !== 'string') {
        return null;
    }
    const text = logText.trim();

    // Microsoft Entra ID detection - JSON-based logs with Entra-specific fields
    if (text.startsWith('{') || text.startsWith('[')) {
        // Microsoft Defender for Endpoint detection
        if (text.includes('"DeviceId"') || text.includes('"InitiatingProcessCommandLine"') || text.includes('"ActionType"')) {
            if (text.includes('"Timestamp"') || text.includes('"TimeGenerated"')) {
                return 'microsoft-defender';
            }
        }
        // SentinelOne detection
        if (text.includes('"AgentId"') || text.includes('"StorylineId"') || text.includes('"SiteId"')) {
            if (text.includes('"EventType"') || text.includes('"ThreatName"') || text.includes('"AgentVersion"')) {
                return 'sentinelone';
            }
        }
        // Palo Alto Cortex XDR detection
        if (text.includes('"agent_id"') || text.includes('"actor_process_image_name"') || text.includes('"action_remote_ip"')) {
            if (text.includes('"event_type"') || text.includes('"alert_name"') || text.includes('"incident_id"')) {
                return 'cortex-xdr';
            }
        }
        // Sophos detection
        if (text.includes('"endpoint_id"') || text.includes('"customer_id"')) {
            if (text.includes('"threat"') || text.includes('"Event::Endpoint"') || text.includes('"process_name"')) {
                return 'sophos';
            }
        }
        // Symantec / Broadcom SEP detection — key on SEP-specific field names
        if (text.includes('"Host_Name"') || text.includes('"Risk_Name"') || text.includes('"Log_Type"')) {
            if (text.includes('"Local_Host_IP"') || text.includes('"Risk_Type"') || text.includes('"Event_ID"')) {
                return 'symantec';
            }
        }
        // Symantec fallback — SONAR / Application Control events
        if (text.includes('"Category_Type"') && text.includes('"Detection_Score"')) {
            return 'symantec';
        }
        if (text.includes('"Actual_Action"') && text.includes('"Severity_Level"')) {
            return 'symantec';
        }
        // Trend Micro detection
        if (text.includes('"endpointGuid"') || text.includes('"endpointHostName"') || text.includes('"logId"')) {
            if (text.includes('"logType"') || text.includes('"eventSubId"') || text.includes('"processFileHashSha256"')) {
                return 'trendmicro';
            }
        }
        // CrowdStrike Falcon detection — look for specific identifier combinations like aid/SensorId + EventName/event_simpleName
        if ((text.includes('"aid"') || text.includes('"SensorId"')) && 
            (text.includes('"EventName"') || text.includes('"event_simpleName"') || text.includes('"aip"') || text.includes('"ComputerName"'))) {
            return 'crowdstrike';
        }
        // Sign-In log detection
        if (text.includes('"userPrincipalName"') && text.includes('"appDisplayName"')) {
            return 'entra-id';
        }
        // Audit log detection
        if (text.includes('"activityDisplayName"') && text.includes('"targetResources"')) {
            return 'entra-id';
        }
        // Provisioning log detection
        if (text.includes('"provisioningAction"') || text.includes('"provisioningStatusInfo"')) {
            return 'entra-id';
        }
        // Risk Detection log detection
        if (text.includes('"riskEventType"') && text.includes('"riskLevel"')) {
            return 'entra-id';
        }
        // Generic Entra ID detection — look for common Entra ID fields
        if (text.includes('"conditionalAccessStatus"') || text.includes('"authenticationRequirement"')) {
            return 'entra-id';
        }
        // Okta System Log detection — look for Okta-specific field combination
        if (text.includes('"eventType"') && text.includes('"actor"') && text.includes('"outcome"')) {
            return 'okta';
        }
        // Okta fallback — check for Okta-specific event type patterns or debugContext
        if (text.includes('"debugContext"') && text.includes('"transaction"') && text.includes('"published"')) {
            return 'okta';
        }
        // Ping Identity (PingOne) detection — look for PingOne-specific field combination
        if (text.includes('"action"') && text.includes('"actors"') && text.includes('"resources"')) {
            return 'ping-identity';
        }
        // PingOne fallback — check for PingOne-specific fields
        if (text.includes('"recordedAt"') && text.includes('"result"') && text.includes('"tags"')) {
            return 'ping-identity';
        }
    }

    // FortiGate detection - looks for key=value pairs with specific FortiGate fields
    if (text.includes('devname=') && text.includes('logid=') &&
        (text.includes('type="traffic"') || text.includes('type="utm"') || text.includes('type="event"'))) {
        return 'fortinet';
    }

    // Check Point detection - looks for LEA format with Check Point-specific fields
    if ((text.includes('product=') || text.includes('origin=')) &&
        (text.includes('rule_name=') || text.includes('rule_uid=') || text.includes('action='))) {
        // Additional validation - Check Point logs typically have semicolon separators
        if (text.includes(';') && /\w+=/.test(text)) {
            return 'checkpoint';
        }
    }

    // Palo Alto detection - CSV format with specific field patterns
    if (text.startsWith(',') && text.includes('TRAFFIC') || text.includes('THREAT')) {
        const fields = text.split(',');
        if (fields.length > 20 && fields[3] && (fields[3] === 'TRAFFIC' || fields[3] === 'THREAT')) {
            return 'paloalto';
        }
    }

    // Cisco Firepower (FTD/NGIPS) detection - looks for %FTD- or %NGIPS- prefix,
    // or Firepower-specific comma-separated key:value patterns
    if (text.includes('%FTD-') || text.includes('%NGIPS-')) {
        return 'firepower';
    }
    // Fallback: detect Firepower-style "Key: Value, Key: Value" with Firepower-specific fields
    if (text.includes('SrcIP:') && text.includes('ACPolicy:') &&
        (text.includes('AccessControlRuleAction:') || text.includes('Protocol:'))) {
        return 'firepower';
    }
    // Juniper SRX (Junos OS) detection - looks for RT_FLOW, RT_UTM, RT_IDP tags
    // or [junos@...] structured data blocks
    if (text.includes('RT_FLOW') || text.includes('RT_UTM') || text.includes('RT_IDP') ||
        text.includes('RT_AAMW') || text.includes('RT_SCREEN')) {
        return 'juniper';
    }
    if (text.includes('[junos@')) {
        return 'juniper';
    }
    // Fallback: Juniper structured-data with Junos-specific field names
    if (text.includes('source-zone-name=') && text.includes('destination-zone-name=') &&
        text.includes('policy-name=')) {
        return 'juniper';
    }

    // SonicWall (SonicOS 6.5/7.x) detection - looks for id=firewall and sn= patterns
    if (text.includes('id=firewall') && text.includes('sn=')) {
        return 'sonicwall';
    }
    // Fallback: detect SonicWall-specific field combinations
    if (text.includes('fw_action=') && (text.includes('Category=') || text.includes('catid=')) &&
        (text.includes('src=') || text.includes('dst='))) {
        return 'sonicwall';
    }

    // Barracuda CloudGen Firewall detection
    if (text.includes('box_Firewall_Activity') || text.includes('box_Auth_Service')) {
        return 'barracuda';
    }
    // Fallback: detect Barracuda pipe-separated or key-value patterns
    if ((text.includes('type=FWD') || text.includes('type=AUD') || text.includes('type=WEBLOG')) &&
        (text.includes('|proto=') || text.includes('srcIF=') || text.includes('srcIP='))) {
        return 'barracuda';
    }

    // WatchGuard Firebox detection
    if (text.includes('msg_id="') || (text.includes('Firebox') && (text.includes('Allow ') || text.includes('Deny ')))) {
        return 'watchguard';
    }

    // Ubiquiti UniFi/EdgeRouter detection
    // Look for kernel: [RULE-PREFIX] pattern or specific iptables keys
    if (text.includes('kernel:') && (text.includes('IN=') && text.includes('OUT=') && text.includes('MAC=') && text.includes('SRC='))) {
        return 'ubiquiti';
    }
    if (text.match(/\[\w+-\w+-[ADR]\]/)) { // [WAN_LOCAL-4000-D] pattern
        return 'ubiquiti';
    }

    // Future: Add detection for other log formats
    // pfSense: <timestamp> <hostname> filterlog: <csv-fields>
    // Apache: <ip> - - [<timestamp>] "<method> <uri> <protocol>" <status> <size>
    // Nginx: <ip> - <user> [<timestamp>] "<request>" <status> <bytes> "<referrer>" "<user-agent>"

    return null;
}
