/**
 * Log Formats Registry
 * Central registry for all supported log formats
 * Similar to languages.js but for log parsers
 */

export const logFormats = {
    fortinet: {
        id: 'fortinet',
        name: 'FortiGate',
        emoji: '🔥',
        description: 'Fortinet FortiGate firewall logs',
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
    }
};

/**
 * Get all log format IDs
 * @returns {string[]} Array of log format IDs
 */
export function getLogFormatIds() {
    return Object.keys(logFormats);
}

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

    // FortiGate detection - looks for key=value pairs with specific FortiGate fields
    if (text.includes('devname=') && text.includes('logid=') &&
        (text.includes('type="traffic"') || text.includes('type="utm"') || text.includes('type="event"'))) {
        return 'fortinet';
    }

    // Future: Add detection for other log formats
    // Palo Alto: <timestamp> <serial> <log-type>,<subtype>,...
    // Cisco ASA: %ASA-<severity>-<message-id>: <message>
    // pfSense: <timestamp> <hostname> filterlog: <csv-fields>
    // Apache: <ip> - - [<timestamp>] "<method> <uri> <protocol>" <status> <size>
    // Nginx: <ip> - <user> [<timestamp>] "<request>" <status> <bytes> "<referrer>" "<user-agent>"

    return null;
}
