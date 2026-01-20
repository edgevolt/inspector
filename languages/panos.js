// PAN-OS Knowledge Base - Palo Alto Networks Firewall CLI

export const panosKnowledge = {
    // Show Commands
    showCommands: {
        'show system info': {
            type: 'command',
            description: 'Display system information',
            category: 'System Information',
            example: 'show system info',
            details: 'Shows system details including hostname, IP address, model, serial number, software version, and uptime.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show interface all': {
            type: 'command',
            description: 'Display all interface status',
            category: 'Networking',
            example: 'show interface all',
            details: 'Shows status of all physical and logical interfaces including link state, IP addresses, and statistics.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show interface management': {
            type: 'command',
            description: 'Display management interface details',
            category: 'Networking',
            example: 'show interface management',
            details: 'Shows management interface configuration and status.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show routing route': {
            type: 'command',
            description: 'Display routing table',
            category: 'Networking',
            example: 'show routing route',
            details: 'Shows the routing table with all routes, next hops, and metrics.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show arp all': {
            type: 'command',
            description: 'Display ARP table',
            category: 'Networking',
            example: 'show arp all',
            details: 'Shows the ARP cache with IP to MAC address mappings.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show session all': {
            type: 'command',
            description: 'Display all active sessions',
            category: 'Sessions',
            example: 'show session all',
            details: 'Shows all active sessions with source/destination IPs, ports, applications, and policies.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show session info': {
            type: 'command',
            description: 'Display session statistics',
            category: 'Sessions',
            example: 'show session info',
            details: 'Shows session table statistics including total sessions, max sessions, and session rate.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show counter global': {
            type: 'command',
            description: 'Display global counters',
            category: 'Statistics',
            example: 'show counter global filter packet-filter yes delta yes',
            details: 'Shows global packet counters for troubleshooting packet flow and drops.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show running security-policy': {
            type: 'command',
            description: 'Display active security policies',
            category: 'Security',
            example: 'show running security-policy',
            details: 'Shows currently active security policy rules.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show running nat-policy': {
            type: 'command',
            description: 'Display active NAT policies',
            category: 'Security',
            example: 'show running nat-policy',
            details: 'Shows currently active NAT policy rules.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show high-availability all': {
            type: 'command',
            description: 'Display HA status',
            category: 'High Availability',
            example: 'show high-availability all',
            details: 'Shows high availability configuration and status including peer state and sync status.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show log system': {
            type: 'command',
            description: 'Display system logs',
            category: 'Logging',
            example: 'show log system direction backward',
            details: 'Shows system event logs. Use filters to narrow results.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show log traffic': {
            type: 'command',
            description: 'Display traffic logs',
            category: 'Logging',
            example: 'show log traffic direction backward',
            details: 'Shows traffic logs with session details, applications, and actions.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show log threat': {
            type: 'command',
            description: 'Display threat logs',
            category: 'Logging',
            example: 'show log threat direction backward',
            details: 'Shows threat prevention logs including detected threats and actions taken.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show user ip-user-mapping all': {
            type: 'command',
            description: 'Display user-IP mappings',
            category: 'User-ID',
            example: 'show user ip-user-mapping all',
            details: 'Shows User-ID mappings of IP addresses to usernames.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show vpn flow': {
            type: 'command',
            description: 'Display VPN tunnel status',
            category: 'VPN',
            example: 'show vpn flow',
            details: 'Shows active VPN tunnels and their status.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show vpn ike-sa': {
            type: 'command',
            description: 'Display IKE security associations',
            category: 'VPN',
            example: 'show vpn ike-sa',
            details: 'Shows IKE phase 1 security associations for VPN tunnels.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'show vpn ipsec-sa': {
            type: 'command',
            description: 'Display IPSec security associations',
            category: 'VPN',
            example: 'show vpn ipsec-sa',
            details: 'Shows IPSec phase 2 security associations for VPN tunnels.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        }
    },

    // Test Commands
    testCommands: {
        'test routing fib-lookup': {
            type: 'command',
            description: 'Test route lookup',
            category: 'Networking',
            example: 'test routing fib-lookup ip 8.8.8.8 virtual-router default',
            details: 'Tests routing table lookup for a specific destination IP.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'test security-policy-match': {
            type: 'command',
            description: 'Test security policy match',
            category: 'Security',
            example: 'test security-policy-match from trust to untrust source 10.0.0.1 destination 8.8.8.8 protocol 6 destination-port 443',
            details: 'Tests which security policy would match for a given traffic flow.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'test nat-policy-match': {
            type: 'command',
            description: 'Test NAT policy match',
            category: 'Security',
            example: 'test nat-policy-match from trust to untrust source 10.0.0.1 destination 8.8.8.8 protocol 6 destination-port 443',
            details: 'Tests which NAT policy would match for a given traffic flow.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'ping host': {
            type: 'command',
            description: 'Ping a host',
            category: 'Networking',
            example: 'ping host 8.8.8.8',
            details: 'Sends ICMP echo requests to test connectivity.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'traceroute host': {
            type: 'command',
            description: 'Trace route to host',
            category: 'Networking',
            example: 'traceroute host 8.8.8.8',
            details: 'Shows the network path to a destination.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        }
    },

    // Debug Commands
    debugCommands: {
        'debug dataplane packet-diag': {
            type: 'command',
            description: 'Enable packet diagnostics',
            category: 'Troubleshooting',
            example: 'debug dataplane packet-diag set filter match source 10.0.0.1 destination 8.8.8.8',
            details: 'Enables detailed packet capture and analysis for troubleshooting.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'debug dataplane packet-diag show': {
            type: 'command',
            description: 'Show packet diagnostic results',
            category: 'Troubleshooting',
            example: 'debug dataplane packet-diag show',
            details: 'Displays results from packet diagnostics.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'debug dataplane packet-diag clear': {
            type: 'command',
            description: 'Clear packet diagnostics',
            category: 'Troubleshooting',
            example: 'debug dataplane packet-diag clear all',
            details: 'Clears packet diagnostic filters and results.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        }
    },

    // Configuration Commands
    configCommands: {
        'configure': {
            type: 'command',
            description: 'Enter configuration mode',
            category: 'Configuration',
            example: 'configure',
            details: 'Enters configuration mode to make changes to the running configuration.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'commit': {
            type: 'command',
            description: 'Commit configuration changes',
            category: 'Configuration',
            example: 'commit',
            details: 'Commits pending configuration changes to make them active.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'commit force': {
            type: 'command',
            description: 'Force commit configuration',
            category: 'Configuration',
            example: 'commit force',
            details: 'Forces a commit even if validation warnings exist.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'set': {
            type: 'command',
            description: 'Set configuration value',
            category: 'Configuration',
            example: 'set deviceconfig system hostname firewall01',
            details: 'Sets a configuration parameter. Used in configuration mode.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'delete': {
            type: 'command',
            description: 'Delete configuration',
            category: 'Configuration',
            example: 'delete rulebase security rules rule1',
            details: 'Deletes a configuration element. Used in configuration mode.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        }
    },

    // Operational Commands
    operationalCommands: {
        'request restart system': {
            type: 'command',
            description: 'Restart the system',
            category: 'System Management',
            example: 'request restart system',
            details: 'Reboots the firewall. Use with caution.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'request system private-data-reset': {
            type: 'command',
            description: 'Factory reset',
            category: 'System Management',
            example: 'request system private-data-reset',
            details: 'Resets the system to factory defaults. All configuration is lost.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'request high-availability sync-to-remote': {
            type: 'command',
            description: 'Sync config to HA peer',
            category: 'High Availability',
            example: 'request high-availability sync-to-remote running-config',
            details: 'Synchronizes configuration to the HA peer device.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'request license fetch': {
            type: 'command',
            description: 'Fetch licenses from server',
            category: 'Licensing',
            example: 'request license fetch',
            details: 'Retrieves licenses from the Palo Alto Networks licensing server.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'request content upgrade download': {
            type: 'command',
            description: 'Download content updates',
            category: 'Updates',
            example: 'request content upgrade download latest',
            details: 'Downloads the latest threat prevention content updates.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        },
        'request content upgrade install': {
            type: 'command',
            description: 'Install content updates',
            category: 'Updates',
            example: 'request content upgrade install version latest',
            details: 'Installs downloaded content updates.',
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        }
    }
};

// Tokenizer for PAN-OS commands
export function tokenize(command) {
    const tokens = [];
    const regex = /(\S+)/g;
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(command)) !== null) {
        // Add whitespace before this token if there is any
        if (match.index > lastIndex) {
            tokens.push({
                type: 'whitespace',
                value: command.substring(lastIndex, match.index)
            });
        }

        const token = match[1];
        let type = 'argument';

        // Determine token type based on content
        if (token.match(/^\d+\.\d+\.\d+\.\d+$/)) {
            // IP address
            type = 'ip-address';
        } else if (token.match(/^\d+$/)) {
            // Number
            type = 'number';
        } else if (['show', 'test', 'debug', 'configure', 'commit', 'set', 'delete', 'request', 'ping', 'traceroute'].includes(token.toLowerCase())) {
            // Main command verbs
            type = 'command';
        } else if (['from', 'to', 'source', 'destination', 'protocol', 'ip', 'virtual-router', 'filter', 'direction'].includes(token.toLowerCase())) {
            // Parameter keywords
            type = 'keyword';
        } else {
            // Everything else (subcommands, values, etc.)
            type = 'argument';
        }

        tokens.push({
            type: type,
            value: token
        });

        lastIndex = regex.lastIndex;
    }

    // Add any trailing whitespace
    if (lastIndex < command.length) {
        tokens.push({
            type: 'whitespace',
            value: command.substring(lastIndex)
        });
    }

    return tokens;
}

// Get explanation for a token
export function getExplanation(tokenValue, tokenType) {
    // Provide specific explanations based on token type
    if (tokenType === 'ip-address') {
        return {
            type: 'ip-address',
            description: 'IP Address',
            details: `IP address parameter: ${tokenValue}`,
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric Value',
            details: `Numeric parameter: ${tokenValue}`,
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        };
    }

    if (tokenType === 'keyword') {
        const keywordDescriptions = {
            'from': 'Source zone parameter',
            'to': 'Destination zone parameter',
            'source': 'Source IP address parameter',
            'destination': 'Destination IP address parameter',
            'protocol': 'IP protocol number parameter',
            'ip': 'IP address parameter',
            'virtual-router': 'Virtual router name parameter',
            'filter': 'Filter criteria parameter',
            'direction': 'Log direction parameter (forward/backward)'
        };

        return {
            type: 'keyword',
            description: keywordDescriptions[tokenValue.toLowerCase()] || 'Parameter keyword',
            details: keywordDescriptions[tokenValue.toLowerCase()] || `Command parameter: ${tokenValue}`,
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        };
    }

    // For command and argument types, try to find the full command
    // by looking up common command patterns
    const normalized = tokenValue.trim().toLowerCase();

    // Check all command categories
    const allCommands = {
        ...panosKnowledge.showCommands,
        ...panosKnowledge.testCommands,
        ...panosKnowledge.debugCommands,
        ...panosKnowledge.configCommands,
        ...panosKnowledge.operationalCommands
    };

    // Try exact match first
    if (allCommands[normalized]) {
        return allCommands[normalized];
    }

    // For single command words, provide generic description
    if (tokenType === 'command') {
        const commandDescriptions = {
            'show': 'Display information',
            'test': 'Test functionality',
            'debug': 'Enable debugging',
            'configure': 'Enter configuration mode',
            'commit': 'Commit configuration',
            'set': 'Set configuration value',
            'delete': 'Delete configuration',
            'request': 'Execute operational command',
            'ping': 'Test connectivity',
            'traceroute': 'Trace network path'
        };

        return {
            type: 'command',
            description: commandDescriptions[normalized] || 'PAN-OS command',
            details: `${commandDescriptions[normalized] || 'Command'}: ${tokenValue}`,
            docUrl: 'https://docs.paloaltonetworks.com/pan-os'
        };
    }

    // For arguments (subcommands, values, etc.)
    return {
        type: 'argument',
        description: 'Command argument',
        details: `Command parameter or subcommand: ${tokenValue}`,
        docUrl: 'https://docs.paloaltonetworks.com/pan-os'
    };
}
