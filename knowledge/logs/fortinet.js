/**
 * FortiGate Log Field Knowledge Base
 * Comprehensive definitions for FortiGate firewall log fields
 * Categories: timestamp, source, destination, action, policy, protocol, traffic, security
 */

export default {
    // ===== Timestamp Fields =====
    date: {
        description: 'Date of the log event in YYYY-MM-DD format',
        category: 'timestamp',
        examples: ['2024-01-23', '2024-12-31']
    },
    time: {
        description: 'Time of the log event in HH:MM:SS format (24-hour)',
        category: 'timestamp',
        examples: ['14:30:15', '09:05:42']
    },
    eventtime: {
        description: 'Unix timestamp (seconds since epoch) of the event',
        category: 'timestamp',
        examples: ['1706024415', '1640995200']
    },

    // ===== Device Information =====
    devname: {
        description: 'Name of the FortiGate device that generated the log',
        category: 'default',
        examples: ['FG-01', 'Firewall-Main', 'FG-Branch']
    },
    devid: {
        description: 'Serial number or unique identifier of the FortiGate device',
        category: 'default',
        examples: ['FG100E4Q17001234', 'FGVM010000123456']
    },
    vd: {
        description: 'Virtual domain (VDOM) name where the event occurred',
        category: 'default',
        examples: ['root', 'vdom1', 'customer-vdom']
    },

    // ===== Log Classification =====
    logid: {
        description: 'Unique identifier for the log message type',
        category: 'default',
        examples: ['0000000013', '0419016384', '0101037127']
    },
    type: {
        description: 'Main category of the log (traffic, utm, event, etc.)',
        category: 'default',
        examples: ['traffic', 'utm', 'event', 'virus', 'ips']
    },
    subtype: {
        description: 'Subcategory providing more specific classification',
        category: 'default',
        examples: ['forward', 'local', 'virus', 'ips', 'vpn']
    },
    level: {
        description: 'Severity level of the log event',
        category: 'security',
        examples: ['notice', 'information', 'warning', 'alert', 'critical']
    },
    eventtype: {
        description: 'Specific type of event within the subtype',
        category: 'security',
        examples: ['infected', 'signature', 'anomaly', 'blocked']
    },

    // ===== Source Information =====
    srcip: {
        description: 'Source IP address of the connection or traffic',
        category: 'source',
        examples: ['192.168.1.100', '10.0.0.50', '203.0.113.100']
    },
    srcport: {
        description: 'Source TCP/UDP port number',
        category: 'source',
        examples: ['54321', '49152', '12345']
    },
    srcintf: {
        description: 'Source interface name on the FortiGate',
        category: 'source',
        examples: ['port1', 'wan1', 'internal']
    },
    srcintfrole: {
        description: 'Role assigned to the source interface',
        category: 'source',
        examples: ['lan', 'wan', 'dmz', 'undefined']
    },
    srccountry: {
        description: 'Country of origin for the source IP (GeoIP)',
        category: 'source',
        examples: ['United States', 'Reserved', 'China', 'Germany']
    },
    srcmac: {
        description: 'Source MAC address',
        category: 'source',
        examples: ['00:11:22:33:44:55', 'aa:bb:cc:dd:ee:ff']
    },

    // ===== Destination Information =====
    dstip: {
        description: 'Destination IP address of the connection or traffic',
        category: 'destination',
        examples: ['8.8.8.8', '192.168.100.1', '203.0.113.50']
    },
    dstport: {
        description: 'Destination TCP/UDP port number',
        category: 'destination',
        examples: ['53', '80', '443', '445']
    },
    dstintf: {
        description: 'Destination interface name on the FortiGate',
        category: 'destination',
        examples: ['port2', 'wan1', 'dmz']
    },
    dstintfrole: {
        description: 'Role assigned to the destination interface',
        category: 'destination',
        examples: ['wan', 'lan', 'dmz', 'undefined']
    },
    dstcountry: {
        description: 'Country of the destination IP (GeoIP)',
        category: 'destination',
        examples: ['United States', 'Reserved', 'Japan', 'France']
    },

    // ===== Action and Policy =====
    action: {
        description: 'Action taken by the firewall on the traffic',
        category: 'action',
        examples: ['accept', 'deny', 'dropped', 'blocked', 'tunnel-up']
    },
    policyid: {
        description: 'ID of the firewall policy that matched the traffic',
        category: 'policy',
        examples: ['1', '5', '100', '0']
    },
    policytype: {
        description: 'Type of policy that was applied',
        category: 'policy',
        examples: ['policy', 'consolidated', 'proxy-policy']
    },
    policyname: {
        description: 'Name of the firewall policy',
        category: 'policy',
        examples: ['Internet-Access', 'Block-Malicious', 'VPN-Policy']
    },

    // ===== Protocol and Service =====
    proto: {
        description: 'IP protocol number (6=TCP, 17=UDP, 1=ICMP)',
        category: 'protocol',
        examples: ['6', '17', '1', '47']
    },
    service: {
        description: 'Service name or port description',
        category: 'protocol',
        examples: ['DNS', 'HTTP', 'HTTPS', 'MS-DS', 'SSH']
    },

    // ===== Session Information =====
    sessionid: {
        description: 'Unique session identifier for the connection',
        category: 'traffic',
        examples: ['12345', '67890', '1234567890']
    },
    duration: {
        description: 'Duration of the session in seconds',
        category: 'traffic',
        examples: ['120', '300', '0']
    },

    // ===== Traffic Statistics =====
    sentbyte: {
        description: 'Number of bytes sent from source to destination',
        category: 'traffic',
        examples: ['256', '1024', '1048576']
    },
    rcvdbyte: {
        description: 'Number of bytes received from destination to source',
        category: 'traffic',
        examples: ['512', '2048', '2097152']
    },
    sentpkt: {
        description: 'Number of packets sent from source to destination',
        category: 'traffic',
        examples: ['4', '10', '1000']
    },
    rcvdpkt: {
        description: 'Number of packets received from destination to source',
        category: 'traffic',
        examples: ['4', '8', '950']
    },

    // ===== NAT Information =====
    trandisp: {
        description: 'Translation disposition (NAT type)',
        category: 'traffic',
        examples: ['snat', 'dnat', 'noop']
    },
    transip: {
        description: 'Translated IP address after NAT',
        category: 'traffic',
        examples: ['203.0.113.10', '198.51.100.5']
    },
    transport: {
        description: 'Translated port number after NAT',
        category: 'traffic',
        examples: ['54321', '60000']
    },

    // ===== UTM/Security Fields =====
    virus: {
        description: 'Name of the detected virus or malware',
        category: 'security',
        examples: ['EICAR_TEST_FILE', 'Trojan.Generic', 'Malware.Win32']
    },
    virusid: {
        description: 'Unique identifier for the virus signature',
        category: 'security',
        examples: ['2172', '12345']
    },
    attack: {
        description: 'Name of the detected attack or intrusion attempt',
        category: 'security',
        examples: ['SQL.Injection', 'XSS.Attack', 'Buffer.Overflow']
    },
    attackid: {
        description: 'Unique identifier for the IPS signature',
        category: 'security',
        examples: ['12345', '67890']
    },
    severity: {
        description: 'Severity level of the security event',
        category: 'security',
        examples: ['critical', 'high', 'medium', 'low', 'info']
    },
    direction: {
        description: 'Direction of the attack (incoming/outgoing)',
        category: 'security',
        examples: ['incoming', 'outgoing']
    },

    // ===== Web/URL Fields =====
    hostname: {
        description: 'Hostname or domain name accessed',
        category: 'default',
        examples: ['www.example.com', 'malicious.example.com', 'webapp.example.com']
    },
    url: {
        description: 'URL path or full URL accessed',
        category: 'default',
        examples: ['/index.html', '/malware.exe', '/login.php']
    },
    ref: {
        description: 'Reference URL for more information about the event',
        category: 'default',
        examples: ['http://www.fortinet.com/ve?vn=EICAR_TEST_FILE']
    },

    // ===== VPN Fields =====
    tunneltype: {
        description: 'Type of VPN tunnel',
        category: 'default',
        examples: ['ssl-tunnel', 'ipsec', 'pptp']
    },
    tunnelid: {
        description: 'Unique identifier for the VPN tunnel',
        category: 'default',
        examples: ['1234567890', '9876543210']
    },
    remip: {
        description: 'Remote IP address of the VPN client',
        category: 'source',
        examples: ['203.0.113.200', '198.51.100.100']
    },
    user: {
        description: 'Username associated with the event (VPN, auth, etc.)',
        category: 'default',
        examples: ['john.doe', 'admin', 'vpn-user']
    },
    group: {
        description: 'User group name',
        category: 'default',
        examples: ['VPN-Users', 'Administrators', 'Remote-Workers']
    },

    // ===== Application Control =====
    app: {
        description: 'Application name detected by application control',
        category: 'default',
        examples: ['Facebook', 'YouTube', 'Dropbox']
    },
    appcat: {
        description: 'Application category',
        category: 'default',
        examples: ['Social.Media', 'Cloud.Storage', 'P2P']
    },

    // ===== Additional Fields =====
    logdesc: {
        description: 'Human-readable description of the log event',
        category: 'default',
        examples: ['SSL VPN tunnel up', 'Traffic allowed', 'Virus detected']
    },
    msg: {
        description: 'Additional message or details about the event',
        category: 'default',
        examples: ['SSL tunnel established', 'Connection terminated', 'File blocked']
    },
    reason: {
        description: 'Reason for the action or event',
        category: 'default',
        examples: ['policy-deny', 'timeout', 'user-logout']
    },
    dtype: {
        description: 'Detection type for security events',
        category: 'security',
        examples: ['Virus', 'Botnet', 'Malware']
    }
};
