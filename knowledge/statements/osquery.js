// OSQuery Knowledge Base
// OSQuery is a SQL-powered operating system instrumentation framework

export const osqueryKnowledge = {
    // SQL Keywords
    sqlKeywords: {
        'SELECT': { type: 'keyword', description: 'Select columns', docUrl: 'https://osquery.readthedocs.io' },
        'FROM': { type: 'keyword', description: 'Specify table', docUrl: 'https://osquery.readthedocs.io' },
        'WHERE': { type: 'keyword', description: 'Filter rows', docUrl: 'https://osquery.readthedocs.io' },
        'JOIN': { type: 'keyword', description: 'Join tables', docUrl: 'https://osquery.readthedocs.io' },
        'LEFT JOIN': { type: 'keyword', description: 'Left outer join', docUrl: 'https://osquery.readthedocs.io' },
        'INNER JOIN': { type: 'keyword', description: 'Inner join', docUrl: 'https://osquery.readthedocs.io' },
        'GROUP BY': { type: 'keyword', description: 'Group results', docUrl: 'https://osquery.readthedocs.io' },
        'ORDER BY': { type: 'keyword', description: 'Sort results', docUrl: 'https://osquery.readthedocs.io' },
        'LIMIT': { type: 'keyword', description: 'Limit results', docUrl: 'https://osquery.readthedocs.io' },
        'DISTINCT': { type: 'keyword', description: 'Unique values', docUrl: 'https://osquery.readthedocs.io' }
    },

    // System Tables - Organized by category
    systemTables: {
        // Process & Execution
        'processes': { type: 'table', category: 'Process', description: 'Running processes (PID, name, path, cmdline, parent)', docUrl: 'https://osquery.io/schema/5.5.1#processes' },
        'process_open_sockets': { type: 'table', category: 'Process', description: 'Process network connections', docUrl: 'https://osquery.io/schema/5.5.1#process_open_sockets' },
        'process_envs': { type: 'table', category: 'Process', description: 'Process environment variables', docUrl: 'https://osquery.io/schema/5.5.1#process_envs' },
        'process_memory_map': { type: 'table', category: 'Process', description: 'Process memory mappings', docUrl: 'https://osquery.io/schema/5.5.1#process_memory_map' },
        'process_open_files': { type: 'table', category: 'Process', description: 'Files opened by processes', docUrl: 'https://osquery.io/schema/5.5.1#process_open_files' },
        'listening_ports': { type: 'table', category: 'Process', description: 'Listening network ports', docUrl: 'https://osquery.io/schema/5.5.1#listening_ports' },
        'shell_history': { type: 'table', category: 'Process', description: 'Shell command history', docUrl: 'https://osquery.io/schema/5.5.1#shell_history' },
        'docker_containers': { type: 'table', category: 'Process', description: 'Docker containers', docUrl: 'https://osquery.io/schema/5.5.1#docker_containers' },

        // File System
        'file': { type: 'table', category: 'File', description: 'File metadata (path, size, mtime, permissions)', docUrl: 'https://osquery.io/schema/5.5.1#file' },
        'hash': { type: 'table', category: 'File', description: 'File hashes (MD5, SHA1, SHA256)', docUrl: 'https://osquery.io/schema/5.5.1#hash' },
        'users': { type: 'table', category: 'File', description: 'User accounts', docUrl: 'https://osquery.io/schema/5.5.1#users' },
        'groups': { type: 'table', category: 'File', description: 'User groups', docUrl: 'https://osquery.io/schema/5.5.1#groups' },
        'authorized_keys': { type: 'table', category: 'File', description: 'SSH authorized keys', docUrl: 'https://osquery.io/schema/5.5.1#authorized_keys' },
        'shadow': { type: 'table', category: 'File', description: 'Shadow password file', docUrl: 'https://osquery.io/schema/5.5.1#shadow' },
        'yara': { type: 'table', category: 'File', description: 'YARA file scanning', docUrl: 'https://osquery.io/schema/5.5.1#yara' },
        'mounts': { type: 'table', category: 'File', description: 'Mounted filesystems', docUrl: 'https://osquery.io/schema/5.5.1#mounts' },

        // Network
        'interface_addresses': { type: 'table', category: 'Network', description: 'Network interfaces and IPs', docUrl: 'https://osquery.io/schema/5.5.1#interface_addresses' },
        'interface_details': { type: 'table', category: 'Network', description: 'Network interface details', docUrl: 'https://osquery.io/schema/5.5.1#interface_details' },
        'routes': { type: 'table', category: 'Network', description: 'Routing table', docUrl: 'https://osquery.io/schema/5.5.1#routes' },
        'arp_cache': { type: 'table', category: 'Network', description: 'ARP cache', docUrl: 'https://osquery.io/schema/5.5.1#arp_cache' },
        'dns_resolvers': { type: 'table', category: 'Network', description: 'DNS configuration', docUrl: 'https://osquery.io/schema/5.5.1#dns_resolvers' },
        'etc_hosts': { type: 'table', category: 'Network', description: '/etc/hosts entries', docUrl: 'https://osquery.io/schema/5.5.1#etc_hosts' },
        'iptables': { type: 'table', category: 'Network', description: 'Firewall rules (Linux)', docUrl: 'https://osquery.io/schema/5.5.1#iptables' },
        'curl': { type: 'table', category: 'Network', description: 'HTTP requests via curl', docUrl: 'https://osquery.io/schema/5.5.1#curl' },

        // System Info
        'system_info': { type: 'table', category: 'System', description: 'System information (hostname, UUID, CPU, memory)', docUrl: 'https://osquery.io/schema/5.5.1#system_info' },
        'os_version': { type: 'table', category: 'System', description: 'OS version details', docUrl: 'https://osquery.io/schema/5.5.1#os_version' },
        'uptime': { type: 'table', category: 'System', description: 'System uptime', docUrl: 'https://osquery.io/schema/5.5.1#uptime' },
        'kernel_info': { type: 'table', category: 'System', description: 'Kernel information', docUrl: 'https://osquery.io/schema/5.5.1#kernel_info' },
        'kernel_modules': { type: 'table', category: 'System', description: 'Loaded kernel modules', docUrl: 'https://osquery.io/schema/5.5.1#kernel_modules' },
        'platform_info': { type: 'table', category: 'System', description: 'Platform details', docUrl: 'https://osquery.io/schema/5.5.1#platform_info' },
        'cpu_info': { type: 'table', category: 'System', description: 'CPU information', docUrl: 'https://osquery.io/schema/5.5.1#cpu_info' },
        'memory_info': { type: 'table', category: 'System', description: 'Memory information', docUrl: 'https://osquery.io/schema/5.5.1#memory_info' },

        // Security
        'logged_in_users': { type: 'table', category: 'Security', description: 'Currently logged in users', docUrl: 'https://osquery.io/schema/5.5.1#logged_in_users' },
        'last': { type: 'table', category: 'Security', description: 'Last user logins', docUrl: 'https://osquery.io/schema/5.5.1#last' },
        'sudoers': { type: 'table', category: 'Security', description: 'Sudoers configuration', docUrl: 'https://osquery.io/schema/5.5.1#sudoers' },
        'certificates': { type: 'table', category: 'Security', description: 'System certificates', docUrl: 'https://osquery.io/schema/5.5.1#certificates' },
        'bitlocker_info': { type: 'table', category: 'Security', description: 'BitLocker status (Windows)', docUrl: 'https://osquery.io/schema/5.5.1#bitlocker_info' },
        'filevault_status': { type: 'table', category: 'Security', description: 'FileVault status (macOS)', docUrl: 'https://osquery.io/schema/5.5.1#filevault_status' },
        'selinux': { type: 'table', category: 'Security', description: 'SELinux status', docUrl: 'https://osquery.io/schema/5.5.1#selinux' },

        // Applications
        'programs': { type: 'table', category: 'Applications', description: 'Installed programs (Windows)', docUrl: 'https://osquery.io/schema/5.5.1#programs' },
        'apps': { type: 'table', category: 'Applications', description: 'Installed applications (macOS)', docUrl: 'https://osquery.io/schema/5.5.1#apps' },
        'deb_packages': { type: 'table', category: 'Applications', description: 'Debian packages', docUrl: 'https://osquery.io/schema/5.5.1#deb_packages' },
        'rpm_packages': { type: 'table', category: 'Applications', description: 'RPM packages', docUrl: 'https://osquery.io/schema/5.5.1#rpm_packages' },
        'npm_packages': { type: 'table', category: 'Applications', description: 'NPM packages', docUrl: 'https://osquery.io/schema/5.5.1#npm_packages' },
        'python_packages': { type: 'table', category: 'Applications', description: 'Python packages', docUrl: 'https://osquery.io/schema/5.5.1#python_packages' },
        'chrome_extensions': { type: 'table', category: 'Applications', description: 'Chrome extensions', docUrl: 'https://osquery.io/schema/5.5.1#chrome_extensions' },
        'firefox_addons': { type: 'table', category: 'Applications', description: 'Firefox add-ons', docUrl: 'https://osquery.io/schema/5.5.1#firefox_addons' },

        // Startup & Services
        'startup_items': { type: 'table', category: 'Startup', description: 'Startup items', docUrl: 'https://osquery.io/schema/5.5.1#startup_items' },
        'services': { type: 'table', category: 'Startup', description: 'System services (Windows)', docUrl: 'https://osquery.io/schema/5.5.1#services' },
        'systemd_units': { type: 'table', category: 'Startup', description: 'Systemd units (Linux)', docUrl: 'https://osquery.io/schema/5.5.1#systemd_units' },
        'launchd': { type: 'table', category: 'Startup', description: 'LaunchDaemons (macOS)', docUrl: 'https://osquery.io/schema/5.5.1#launchd' },
        'crontab': { type: 'table', category: 'Startup', description: 'Cron jobs', docUrl: 'https://osquery.io/schema/5.5.1#crontab' },
        'scheduled_tasks': { type: 'table', category: 'Startup', description: 'Scheduled tasks (Windows)', docUrl: 'https://osquery.io/schema/5.5.1#scheduled_tasks' },

        // Hardware
        'disk_info': { type: 'table', category: 'Hardware', description: 'Disk information', docUrl: 'https://osquery.io/schema/5.5.1#disk_info' },
        'smart_drive_info': { type: 'table', category: 'Hardware', description: 'SMART disk data', docUrl: 'https://osquery.io/schema/5.5.1#smart_drive_info' },
        'usb_devices': { type: 'table', category: 'Hardware', description: 'USB devices', docUrl: 'https://osquery.io/schema/5.5.1#usb_devices' },
        'pci_devices': { type: 'table', category: 'Hardware', description: 'PCI devices', docUrl: 'https://osquery.io/schema/5.5.1#pci_devices' },
        'battery': { type: 'table', category: 'Hardware', description: 'Battery information', docUrl: 'https://osquery.io/schema/5.5.1#battery' },

        // Logs & Events
        'syslog': { type: 'table', category: 'Logs', description: 'Syslog entries', docUrl: 'https://osquery.io/schema/5.5.1#syslog' },
        'windows_eventlog': { type: 'table', category: 'Logs', description: 'Windows Event Log', docUrl: 'https://osquery.io/schema/5.5.1#windows_eventlog' },
        'osquery_info': { type: 'table', category: 'Logs', description: 'OSQuery daemon info', docUrl: 'https://osquery.io/schema/5.5.1#osquery_info' },

        // Registry (Windows)
        'registry': { type: 'table', category: 'Registry', description: 'Windows Registry', docUrl: 'https://osquery.io/schema/5.5.1#registry' },

        // Cloud
        'ec2_instance_metadata': { type: 'table', category: 'Cloud', description: 'EC2 instance metadata', docUrl: 'https://osquery.io/schema/5.5.1#ec2_instance_metadata' },
        'azure_instance_metadata': { type: 'table', category: 'Cloud', description: 'Azure instance metadata', docUrl: 'https://osquery.io/schema/5.5.1#azure_instance_metadata' }
    },

    // Functions
    functions: {
        'COUNT': { type: 'function', description: 'Count rows', syntax: 'COUNT(*) or COUNT(column)', docUrl: 'https://osquery.readthedocs.io' },
        'SUM': { type: 'function', description: 'Sum values', syntax: 'SUM(column)', docUrl: 'https://osquery.readthedocs.io' },
        'AVG': { type: 'function', description: 'Average value', syntax: 'AVG(column)', docUrl: 'https://osquery.readthedocs.io' },
        'MIN': { type: 'function', description: 'Minimum value', syntax: 'MIN(column)', docUrl: 'https://osquery.readthedocs.io' },
        'MAX': { type: 'function', description: 'Maximum value', syntax: 'MAX(column)', docUrl: 'https://osquery.readthedocs.io' },
        'UPPER': { type: 'function', description: 'Convert to uppercase', syntax: 'UPPER(string)', docUrl: 'https://osquery.readthedocs.io' },
        'LOWER': { type: 'function', description: 'Convert to lowercase', syntax: 'LOWER(string)', docUrl: 'https://osquery.readthedocs.io' },
        'LENGTH': { type: 'function', description: 'String length', syntax: 'LENGTH(string)', docUrl: 'https://osquery.readthedocs.io' },
        'SUBSTR': { type: 'function', description: 'Extract substring', syntax: 'SUBSTR(string, start, length)', docUrl: 'https://osquery.readthedocs.io' }
    },

    // Operators
    operators: {
        'AND': { type: 'operator', description: 'Logical AND' },
        'OR': { type: 'operator', description: 'Logical OR' },
        'NOT': { type: 'operator', description: 'Logical NOT' },
        'LIKE': { type: 'operator', description: 'Pattern matching', example: "name LIKE '%chrome%'" },
        'IN': { type: 'operator', description: 'Value in set', example: 'port IN (80, 443, 8080)' },
        'BETWEEN': { type: 'operator', description: 'Range check', example: 'pid BETWEEN 1000 AND 2000' }
    },

    // Common Table Fields - Detailed field explanations
    tableFields: {
        // Process fields
        'pid': { type: 'field', description: 'Process ID', details: 'Unique identifier for the process' },
        'name': { type: 'field', description: 'Process name', details: 'Name of the process executable' },
        'path': { type: 'field', description: 'Process path', details: 'Full path to the process executable' },
        'cmdline': { type: 'field', description: 'Command line', details: 'Full command line used to start the process' },
        'parent': { type: 'field', description: 'Parent PID', details: 'Process ID of the parent process' },
        'uid': { type: 'field', description: 'User ID', details: 'User ID that owns the process' },
        'gid': { type: 'field', description: 'Group ID', details: 'Group ID that owns the process' },
        'state': { type: 'field', description: 'Process state', details: 'Current state of the process (running, sleeping, etc.)' },

        // Network fields
        'remote_address': { type: 'field', description: 'Remote IP address', details: 'IP address of the remote endpoint' },
        'remote_port': { type: 'field', description: 'Remote port', details: 'Port number of the remote endpoint' },
        'local_address': { type: 'field', description: 'Local IP address', details: 'IP address of the local endpoint' },
        'local_port': { type: 'field', description: 'Local port', details: 'Port number of the local endpoint' },
        'protocol': { type: 'field', description: 'Network protocol', details: 'Protocol number (6=TCP, 17=UDP)' },
        'family': { type: 'field', description: 'Address family', details: 'Address family (2=IPv4, 10=IPv6)' },
        'port': { type: 'field', description: 'Port number', details: 'Network port number' },
        'address': { type: 'field', description: 'IP address', details: 'Network IP address' },
        'interface': { type: 'field', description: 'Network interface', details: 'Name of the network interface' },
        'mask': { type: 'field', description: 'Network mask', details: 'Subnet mask for the network' },
        'destination': { type: 'field', description: 'Destination address', details: 'Destination IP address for route' },
        'gateway': { type: 'field', description: 'Gateway address', details: 'Gateway IP address for route' },
        'mac': { type: 'field', description: 'MAC address', details: 'Hardware MAC address' },

        // User fields
        'username': { type: 'field', description: 'Username', details: 'User account name' },
        'shell': { type: 'field', description: 'Login shell', details: 'Default shell for the user' },
        'directory': { type: 'field', description: 'Home directory', details: 'User home directory path' },
        'description': { type: 'field', description: 'User description', details: 'Description or full name of the user' },

        // File fields
        'size': { type: 'field', description: 'File size', details: 'Size of the file in bytes' },
        'mtime': { type: 'field', description: 'Modified time', details: 'Last modification timestamp' },
        'atime': { type: 'field', description: 'Access time', details: 'Last access timestamp' },
        'ctime': { type: 'field', description: 'Change time', details: 'Last status change timestamp' },
        'mode': { type: 'field', description: 'File mode', details: 'File permissions and type' },
        'type': { type: 'field', description: 'File type', details: 'Type of file (regular, directory, symlink, etc.)' },
        'inode': { type: 'field', description: 'Inode number', details: 'Filesystem inode number' },
        'md5': { type: 'field', description: 'MD5 hash', details: 'MD5 hash of the file contents' },
        'sha1': { type: 'field', description: 'SHA1 hash', details: 'SHA1 hash of the file contents' },
        'sha256': { type: 'field', description: 'SHA256 hash', details: 'SHA256 hash of the file contents' },

        // System fields
        'hostname': { type: 'field', description: 'System hostname', details: 'Name of the host system' },
        'cpu_brand': { type: 'field', description: 'CPU brand', details: 'CPU manufacturer and model' },
        'physical_memory': { type: 'field', description: 'Physical memory', details: 'Total physical RAM in bytes' },
        'hardware_vendor': { type: 'field', description: 'Hardware vendor', details: 'System hardware manufacturer' },
        'hardware_model': { type: 'field', description: 'Hardware model', details: 'System hardware model' },
        'version': { type: 'field', description: 'Version', details: 'Software or OS version' },
        'build': { type: 'field', description: 'Build number', details: 'Software or OS build number' },

        // Service fields
        'display_name': { type: 'field', description: 'Display name', details: 'Human-readable service name' },
        'status': { type: 'field', description: 'Service status', details: 'Current status (running, stopped, etc.)' },
        'start_type': { type: 'field', description: 'Start type', details: 'Service startup type (auto, manual, disabled)' },

        // Package fields
        'arch': { type: 'field', description: 'Architecture', details: 'Package architecture (amd64, i386, etc.)' },
        'source': { type: 'field', description: 'Package source', details: 'Source of the package' },

        // Docker fields
        'id': { type: 'field', description: 'Container ID', details: 'Unique container identifier' },
        'image': { type: 'field', description: 'Container image', details: 'Docker image name' },
        'command': { type: 'field', description: 'Container command', details: 'Command running in the container' },

        // Certificate fields
        'common_name': { type: 'field', description: 'Common name', details: 'Certificate common name (CN)' },
        'not_valid_after': { type: 'field', description: 'Expiration date', details: 'Certificate expiration timestamp' },
        'not_valid_before': { type: 'field', description: 'Valid from date', details: 'Certificate valid from timestamp' },
        'issuer': { type: 'field', description: 'Certificate issuer', details: 'Certificate authority that issued the certificate' },

        // Time fields
        'time': { type: 'field', description: 'Timestamp', details: 'Unix timestamp' },
        'tty': { type: 'field', description: 'Terminal', details: 'Terminal device name' },
        'host': { type: 'field', description: 'Host', details: 'Hostname or IP address' },

        // Generic fields
        'key': { type: 'field', description: 'Key', details: 'Key name or identifier' },
        'value': { type: 'field', description: 'Value', details: 'Associated value' },
        'data': { type: 'field', description: 'Data', details: 'Data content' }
    }
};


export function getExplanation(token, tokenType) {
    const upper = token.toUpperCase();
    const lower = token.toLowerCase();

    // Check all categories
    const categories = [
        osqueryKnowledge.sqlKeywords,
        osqueryKnowledge.systemTables,
        osqueryKnowledge.functions,
        osqueryKnowledge.operators
    ];

    for (const category of categories) {
        if (category[upper]) return category[upper];
        if (category[lower]) return category[lower];
        if (category[token]) return category[token];
    }

    // Handle field references (including dot notation like pos.remote_address)
    if (tokenType === 'identifier' || tokenType === 'field' || token.includes('.')) {
        // Extract the field name from dot notation (e.g., "pos.remote_address" -> "remote_address")
        const parts = token.split('.');
        const fieldName = parts[parts.length - 1];

        // Check if we have a definition for this field
        if (osqueryKnowledge.tableFields[fieldName]) {
            const fieldInfo = osqueryKnowledge.tableFields[fieldName];
            return {
                type: 'field',
                description: fieldInfo.description,
                details: fieldInfo.details,
                docUrl: 'https://osquery.io/schema/5.5.1'
            };
        }

        // If it's a table alias with field (e.g., "p.pid"), provide generic explanation
        if (parts.length > 1) {
            return {
                type: 'field',
                description: `Field reference: ${fieldName}`,
                details: `Column '${fieldName}' from table alias '${parts[0]}'`,
                docUrl: 'https://osquery.io/schema/5.5.1'
            };
        }
    }

    if (tokenType === 'string') {
        return { type: 'string', description: 'String literal value' };
    }
    if (tokenType === 'number') {
        return { type: 'number', description: 'Numeric value' };
    }

    return { type: 'unknown', description: token };
}
