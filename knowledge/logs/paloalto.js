/**
 * Palo Alto Networks Log Field Knowledge Base (PAN-OS 11.x)
 * Comprehensive definitions for Palo Alto firewall log fields
 * Supports PAN-OS 11.x Traffic and Threat log formats
 * Categories: timestamp, device, source, destination, policy, protocol, traffic, security, application, session
 */

export default {
    // ===== Timestamp Fields =====
    receive_time: {
        description: 'Time the log was received at the management plane',
        category: 'timestamp',
        examples: ['2024/01/29 14:30:15', '2024/12/31 23:59:59']
    },
    generated_time: {
        description: 'Time the log was generated on the data plane',
        category: 'timestamp',
        examples: ['2024/01/29 14:30:14', '2024/12/31 23:59:58']
    },
    start_time: {
        description: 'Session start time',
        category: 'timestamp',
        examples: ['2024/01/29 14:25:00', '2024/12/31 23:50:00']
    },
    high_res_timestamp: {
        description: 'High resolution timestamp with microsecond precision',
        category: 'timestamp',
        examples: ['1706544615.123456', '1735689599.987654']
    },
    parent_start_time: {
        description: 'Start time of the parent session',
        category: 'timestamp',
        examples: ['2024/01/29 14:20:00', '2024/12/31 23:45:00']
    },

    // ===== Device Information =====
    serial_number: {
        description: 'Serial number of the firewall that generated the log',
        category: 'device',
        examples: ['007951000012345', '001234567890123']
    },
    device_name: {
        description: 'Hostname of the firewall device',
        category: 'device',
        examples: ['PA-5220-Primary', 'FW-DC1', 'Panorama-Managed-FW']
    },
    virtual_system: {
        description: 'Virtual system identifier (vsys1, vsys2, etc.)',
        category: 'device',
        examples: ['vsys1', 'vsys2', 'vsys10']
    },
    virtual_system_name: {
        description: 'Name of the virtual system',
        category: 'device',
        examples: ['Production', 'DMZ', 'Guest-Network']
    },
    device_group_hierarchy_1: {
        description: 'Top level of device group hierarchy (Panorama)',
        category: 'device',
        examples: ['All-Firewalls', 'Production-Group', 'Branch-Offices']
    },
    device_group_hierarchy_2: {
        description: 'Second level of device group hierarchy',
        category: 'device',
        examples: ['US-East', 'Europe', 'APAC']
    },
    device_group_hierarchy_3: {
        description: 'Third level of device group hierarchy',
        category: 'device',
        examples: ['New-York', 'London', 'Tokyo']
    },
    device_group_hierarchy_4: {
        description: 'Fourth level of device group hierarchy',
        category: 'device',
        examples: ['Building-A', 'Floor-3', 'Zone-1']
    },

    // ===== Log Classification =====
    type: {
        description: 'Type of log (TRAFFIC, THREAT, URL, WILDFIRE, etc.)',
        category: 'default',
        examples: ['TRAFFIC', 'THREAT', 'URL', 'WILDFIRE']
    },
    subtype: {
        description: 'Subtype providing more specific classification',
        category: 'default',
        examples: ['start', 'end', 'drop', 'deny', 'url', 'virus', 'spyware']
    },
    log_action: {
        description: 'Action taken on the log (alert, allow, deny, drop, reset)',
        category: 'default',
        examples: ['alert', 'allow', 'deny', 'drop', 'reset-both']
    },

    // ===== Source Information =====
    src_ip: {
        description: 'Original source IP address',
        category: 'source',
        examples: ['192.168.1.100', '10.0.0.50', '172.16.5.25']
    },
    src_port: {
        description: 'Source port number',
        category: 'source',
        examples: ['54321', '49152', '12345']
    },
    src_zone: {
        description: 'Source security zone',
        category: 'source',
        examples: ['trust', 'untrust', 'dmz', 'inside']
    },
    src_user: {
        description: 'Source username (from User-ID)',
        category: 'source',
        examples: ['domain\\john.doe', 'admin', 'guest']
    },
    src_country: {
        description: 'Source IP country (GeoIP)',
        category: 'source',
        examples: ['United States', 'China', 'Germany', 'Reserved']
    },
    src_mac_address: {
        description: 'Source MAC address',
        category: 'source',
        examples: ['00:11:22:33:44:55', 'aa:bb:cc:dd:ee:ff']
    },
    src_hostname: {
        description: 'Source device hostname',
        category: 'source',
        examples: ['DESKTOP-ABC123', 'laptop-user1', 'server01']
    },
    src_vm_uuid: {
        description: 'Source virtual machine UUID',
        category: 'source',
        examples: ['564d1b3e-1234-5678-9abc-def012345678']
    },
    src_device_category: {
        description: 'Category of source device (from IoT Security)',
        category: 'source',
        examples: ['Computer', 'Mobile', 'IoT', 'Medical']
    },
    src_device_profile: {
        description: 'Profile of source device',
        category: 'source',
        examples: ['Windows-Workstation', 'iPhone', 'IP-Camera']
    },
    src_device_model: {
        description: 'Model of source device',
        category: 'source',
        examples: ['Dell Latitude 5420', 'iPhone 13', 'Axis P1375']
    },
    src_device_vendor: {
        description: 'Vendor of source device',
        category: 'source',
        examples: ['Dell', 'Apple', 'Axis Communications']
    },
    src_device_os_family: {
        description: 'Operating system family of source device',
        category: 'source',
        examples: ['Windows', 'iOS', 'Linux', 'Android']
    },
    src_device_os_version: {
        description: 'Operating system version of source device',
        category: 'source',
        examples: ['Windows 10', 'iOS 15.2', 'Ubuntu 20.04']
    },
    src_external_dynamic_list: {
        description: 'External dynamic list matching source IP',
        category: 'source',
        examples: ['Tor-Exit-Nodes', 'Known-Malicious-IPs']
    },
    src_dynamic_address_group: {
        description: 'Dynamic address group containing source IP',
        category: 'source',
        examples: ['Registered-Users', 'Corporate-Devices']
    },

    // ===== Destination Information =====
    dst_ip: {
        description: 'Original destination IP address',
        category: 'destination',
        examples: ['8.8.8.8', '192.168.100.1', '203.0.113.50']
    },
    dst_port: {
        description: 'Destination port number',
        category: 'destination',
        examples: ['80', '443', '53', '3389']
    },
    dst_zone: {
        description: 'Destination security zone',
        category: 'destination',
        examples: ['untrust', 'dmz', 'trust', 'internet']
    },
    dst_user: {
        description: 'Destination username',
        category: 'destination',
        examples: ['domain\\webserver', 'admin', 'service-account']
    },
    dst_country: {
        description: 'Destination IP country (GeoIP)',
        category: 'destination',
        examples: ['United States', 'Japan', 'France', 'Reserved']
    },
    dst_mac_address: {
        description: 'Destination MAC address',
        category: 'destination',
        examples: ['00:50:56:ab:cd:ef', 'ff:ee:dd:cc:bb:aa']
    },
    dst_hostname: {
        description: 'Destination device hostname',
        category: 'destination',
        examples: ['webserver01', 'db-primary', 'mail.example.com']
    },
    dst_vm_uuid: {
        description: 'Destination virtual machine UUID',
        category: 'destination',
        examples: ['564d1b3e-9876-5432-1abc-def098765432']
    },
    dst_device_category: {
        description: 'Category of destination device',
        category: 'destination',
        examples: ['Server', 'Network', 'Storage']
    },
    dst_device_profile: {
        description: 'Profile of destination device',
        category: 'destination',
        examples: ['Linux-Server', 'Cisco-Router', 'NetApp-Storage']
    },
    dst_device_model: {
        description: 'Model of destination device',
        category: 'destination',
        examples: ['Dell PowerEdge R740', 'Cisco ASR 1001']
    },
    dst_device_vendor: {
        description: 'Vendor of destination device',
        category: 'destination',
        examples: ['Dell', 'Cisco', 'NetApp']
    },
    dst_device_os_family: {
        description: 'Operating system family of destination device',
        category: 'destination',
        examples: ['Linux', 'IOS', 'Windows Server']
    },
    dst_device_os_version: {
        description: 'Operating system version of destination device',
        category: 'destination',
        examples: ['CentOS 8', 'IOS XE 17.3', 'Windows Server 2019']
    },
    dst_external_dynamic_list: {
        description: 'External dynamic list matching destination IP',
        category: 'destination',
        examples: ['CDN-Providers', 'Cloud-Services']
    },
    dst_dynamic_address_group: {
        description: 'Dynamic address group containing destination IP',
        category: 'destination',
        examples: ['Web-Servers', 'Database-Servers']
    },

    // ===== NAT Information =====
    nat_src_ip: {
        description: 'Translated source IP address after NAT',
        category: 'traffic',
        examples: ['203.0.113.10', '198.51.100.5']
    },
    nat_dst_ip: {
        description: 'Translated destination IP address after NAT',
        category: 'traffic',
        examples: ['10.0.0.100', '192.168.1.50']
    },
    nat_src_port: {
        description: 'Translated source port after NAT',
        category: 'traffic',
        examples: ['60000', '55123']
    },
    nat_dst_port: {
        description: 'Translated destination port after NAT',
        category: 'traffic',
        examples: ['8080', '3306']
    },

    // ===== Interfaces and Zones =====
    inbound_interface: {
        description: 'Interface where traffic entered the firewall',
        category: 'default',
        examples: ['ethernet1/1', 'ae1', 'tunnel.1']
    },
    outbound_interface: {
        description: 'Interface where traffic exited the firewall',
        category: 'default',
        examples: ['ethernet1/2', 'ae2', 'tunnel.2']
    },

    // ===== Policy and Rules =====
    rule_name: {
        description: 'Name of the security policy rule that matched',
        category: 'policy',
        examples: ['Allow-Web-Traffic', 'Block-Malicious', 'VPN-Access']
    },
    rule_uuid: {
        description: 'Unique identifier for the security rule',
        category: 'policy',
        examples: ['a1b2c3d4-e5f6-7890-abcd-ef1234567890']
    },
    policy_id: {
        description: 'Numeric policy ID',
        category: 'policy',
        examples: ['1', '100', '5432']
    },
    action: {
        description: 'Action taken by the firewall (allow, deny, drop, reset)',
        category: 'policy',
        examples: ['allow', 'deny', 'drop', 'reset-both', 'reset-client']
    },
    action_source: {
        description: 'Source of the action decision',
        category: 'policy',
        examples: ['from-policy', 'from-session-timeout']
    },
    action_flags: {
        description: 'Flags indicating special actions or conditions',
        category: 'policy',
        examples: ['0x8000000000000000', '0x0']
    },

    // ===== Application Information =====
    application: {
        description: 'Application identified by App-ID',
        category: 'application',
        examples: ['web-browsing', 'ssl', 'dns', 'ssh', 'ms-rdp']
    },
    app_category: {
        description: 'Category of the application',
        category: 'application',
        examples: ['general-internet', 'business-systems', 'collaboration']
    },
    app_subcategory: {
        description: 'Subcategory of the application',
        category: 'application',
        examples: ['internet-utility', 'file-sharing', 'email']
    },
    app_technology: {
        description: 'Technology used by the application',
        category: 'application',
        examples: ['browser-based', 'client-server', 'peer-to-peer']
    },
    app_flap_count: {
        description: 'Number of times application changed during session',
        category: 'application',
        examples: ['0', '1', '5']
    },

    // ===== Protocol Information =====
    protocol: {
        description: 'IP protocol (tcp, udp, icmp, etc.)',
        category: 'protocol',
        examples: ['tcp', 'udp', 'icmp', 'esp', 'gre']
    },
    flags: {
        description: 'TCP flags or other protocol-specific flags',
        category: 'protocol',
        examples: ['0x2', '0x12', '0x10', '0x4']
    },

    // ===== Session Information =====
    session_id: {
        description: 'Unique session identifier',
        category: 'session',
        examples: ['12345', '67890', '1234567']
    },
    parent_session_id: {
        description: 'Parent session ID for related sessions',
        category: 'session',
        examples: ['12340', '67885']
    },
    session_end_reason: {
        description: 'Reason the session ended',
        category: 'session',
        examples: ['aged-out', 'tcp-fin', 'tcp-rst-from-client', 'policy-deny']
    },
    session_owner: {
        description: 'Owner of the session (firewall in HA pair)',
        category: 'session',
        examples: ['firewall1', 'firewall2']
    },
    elapsed_time: {
        description: 'Session duration in seconds',
        category: 'session',
        examples: ['120', '3600', '0']
    },
    repeat_count: {
        description: 'Number of sessions with same characteristics',
        category: 'session',
        examples: ['1', '5', '100']
    },

    // ===== Traffic Statistics =====
    bytes: {
        description: 'Total bytes transferred (sent + received)',
        category: 'traffic',
        examples: ['1024', '1048576', '5242880']
    },
    bytes_sent: {
        description: 'Bytes sent from source to destination',
        category: 'traffic',
        examples: ['512', '524288', '2621440']
    },
    bytes_received: {
        description: 'Bytes received from destination to source',
        category: 'traffic',
        examples: ['512', '524288', '2621440']
    },
    packets: {
        description: 'Total packets transferred (sent + received)',
        category: 'traffic',
        examples: ['10', '1000', '50000']
    },
    packets_sent: {
        description: 'Packets sent from source to destination',
        category: 'traffic',
        examples: ['5', '500', '25000']
    },
    packets_received: {
        description: 'Packets received from destination to source',
        category: 'traffic',
        examples: ['5', '500', '25000']
    },

    // ===== Threat Information =====
    threat_name: {
        description: 'Name of the detected threat',
        category: 'security',
        examples: ['Zeus Trojan', 'SQL Injection', 'Malicious URL', 'Ransomware.Generic']
    },
    threat_id: {
        description: 'Unique identifier for the threat signature',
        category: 'security',
        examples: ['30000', '52020', '86001']
    },
    threat_category: {
        description: 'Category of the threat',
        category: 'security',
        examples: ['malware', 'spyware', 'vulnerability', 'phishing']
    },
    category_of_threat: {
        description: 'Detailed category classification',
        category: 'security',
        examples: ['command-and-control', 'data-theft', 'denial-of-service']
    },
    severity: {
        description: 'Severity level of the threat',
        category: 'security',
        examples: ['critical', 'high', 'medium', 'low', 'informational']
    },
    direction: {
        description: 'Direction of the threat (client-to-server or server-to-client)',
        category: 'security',
        examples: ['client-to-server', 'server-to-client']
    },

    // ===== URL and Web Filtering =====
    url: {
        description: 'URL accessed or detected in traffic',
        category: 'default',
        examples: ['http://example.com/page', 'https://malicious.com/payload.exe']
    },
    category: {
        description: 'URL category from URL filtering database',
        category: 'default',
        examples: ['business-and-economy', 'malware', 'adult', 'social-networking']
    },
    url_category_list: {
        description: 'List of URL categories matched',
        category: 'default',
        examples: ['malware,phishing', 'social-networking']
    },
    referer: {
        description: 'HTTP referer header',
        category: 'default',
        examples: ['https://google.com', 'https://example.com/page1']
    },
    user_agent: {
        description: 'HTTP user agent string',
        category: 'default',
        examples: ['Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'curl/7.68.0']
    },
    http_method: {
        description: 'HTTP request method',
        category: 'default',
        examples: ['GET', 'POST', 'PUT', 'DELETE']
    },
    http_headers: {
        description: 'HTTP headers from the request',
        category: 'default',
        examples: ['Host: example.com', 'Content-Type: application/json']
    },
    http2_connection: {
        description: 'HTTP/2 connection identifier',
        category: 'default',
        examples: ['12345', '67890']
    },

    // ===== File and Content =====
    file_digest: {
        description: 'Hash of the file (SHA-256)',
        category: 'security',
        examples: ['a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890']
    },
    file_type: {
        description: 'Type of file detected',
        category: 'security',
        examples: ['PE', 'PDF', 'MS Office', 'ZIP', 'EXE']
    },
    content_type: {
        description: 'MIME content type',
        category: 'default',
        examples: ['application/pdf', 'text/html', 'application/octet-stream']
    },
    content_version: {
        description: 'Version of content/threat database',
        category: 'default',
        examples: ['8675-7890', '8700-8000']
    },

    // ===== Tunnel Information =====
    tunnel_id: {
        description: 'Tunnel identifier for VPN or GRE tunnels',
        category: 'default',
        examples: ['1234567890', '9876543210']
    },
    tunnel_type: {
        description: 'Type of tunnel',
        category: 'default',
        examples: ['IPSec', 'GRE', 'SSL-VPN', 'L2TP']
    },

    // ===== SD-WAN Fields =====
    sdwan_cluster: {
        description: 'SD-WAN cluster name',
        category: 'default',
        examples: ['Branch-Cluster', 'HQ-Cluster']
    },
    sdwan_device_type: {
        description: 'Type of SD-WAN device',
        category: 'default',
        examples: ['hub', 'branch']
    },
    sdwan_cluster_type: {
        description: 'Type of SD-WAN cluster',
        category: 'default',
        examples: ['standard', 'meshed']
    },
    sdwan_site: {
        description: 'SD-WAN site name',
        category: 'default',
        examples: ['New-York', 'London', 'Tokyo']
    },
    link_switches: {
        description: 'Number of SD-WAN link switches during session',
        category: 'default',
        examples: ['0', '1', '3']
    },

    // ===== Container and Kubernetes =====
    container_id: {
        description: 'Container identifier',
        category: 'default',
        examples: ['a1b2c3d4e5f6', '1234567890ab']
    },
    pod_namespace: {
        description: 'Kubernetes pod namespace',
        category: 'default',
        examples: ['default', 'production', 'kube-system']
    },
    pod_name: {
        description: 'Kubernetes pod name',
        category: 'default',
        examples: ['web-app-5d4c7f9b8-xyz12', 'database-0']
    },

    // ===== Additional Fields =====
    sequence_number: {
        description: 'Log sequence number for ordering',
        category: 'default',
        examples: ['123456', '789012']
    },
    xff_address: {
        description: 'X-Forwarded-For IP address from HTTP header',
        category: 'default',
        examples: ['192.168.1.100', '10.0.0.50']
    },
    dynamic_user_group_name: {
        description: 'Dynamic user group name',
        category: 'default',
        examples: ['Registered-Users', 'VPN-Users']
    },
    monitor_tag: {
        description: 'Monitor tag for correlation',
        category: 'default',
        examples: ['tag1', 'monitoring-group-a']
    },
    host_id: {
        description: 'Host identifier',
        category: 'default',
        examples: ['host-12345', 'server-67890']
    },
    pcap_id: {
        description: 'Packet capture ID for threat logs',
        category: 'security',
        examples: ['12345', '67890']
    },
    cloud: {
        description: 'Cloud service information',
        category: 'default',
        examples: ['AWS', 'Azure', 'GCP']
    },
    url_index: {
        description: 'Index for URL in threat log',
        category: 'default',
        examples: ['0', '1', '5']
    },
    sender: {
        description: 'Email sender address',
        category: 'default',
        examples: ['user@example.com', 'admin@company.com']
    },
    subject: {
        description: 'Email subject line',
        category: 'default',
        examples: ['Invoice #12345', 'Meeting Reminder']
    },
    recipient: {
        description: 'Email recipient address',
        category: 'default',
        examples: ['recipient@example.com', 'team@company.com']
    },
    report_id: {
        description: 'WildFire report ID',
        category: 'security',
        examples: ['12345', '67890']
    },
    sctp_association_id: {
        description: 'SCTP association identifier',
        category: 'protocol',
        examples: ['123456', '789012']
    },
    sctp_chunks: {
        description: 'Total SCTP chunks',
        category: 'protocol',
        examples: ['10', '100']
    },
    sctp_chunks_sent: {
        description: 'SCTP chunks sent',
        category: 'protocol',
        examples: ['5', '50']
    },
    sctp_chunks_received: {
        description: 'SCTP chunks received',
        category: 'protocol',
        examples: ['5', '50']
    },
    payload_protocol_id: {
        description: 'SCTP payload protocol identifier',
        category: 'protocol',
        examples: ['0', '46']
    },
    a_slice_service_type: {
        description: '5G network slice service type',
        category: 'default',
        examples: ['eMBB', 'URLLC', 'mMTC']
    },
    a_slice_differentiator: {
        description: '5G network slice differentiator',
        category: 'default',
        examples: ['1', '2', '10']
    }
};
