// OSQuery Parser

export function parseOSQuery(query) {
    const tokens = [];
    let i = 0;

    while (i < query.length) {
        const char = query[i];

        // Whitespace
        if (/\s/.test(char)) {
            let whitespace = '';
            while (i < query.length && /\s/.test(query[i])) {
                whitespace += query[i];
                i++;
            }
            tokens.push({ type: 'whitespace', value: whitespace });
            continue;
        }

        // Single-line comments (--)
        if (char === '-' && i + 1 < query.length && query[i + 1] === '-') {
            let comment = '';
            while (i < query.length && query[i] !== '\n') {
                comment += query[i];
                i++;
            }
            tokens.push({ type: 'comment', value: comment });
            continue;
        }

        // Multi-line comments (/* */)
        if (char === '/' && i + 1 < query.length && query[i + 1] === '*') {
            let comment = char + query[i + 1];
            i += 2;
            while (i < query.length - 1) {
                comment += query[i];
                if (query[i] === '*' && query[i + 1] === '/') {
                    comment += query[i + 1];
                    i += 2;
                    break;
                }
                i++;
            }
            tokens.push({ type: 'comment', value: comment });
            continue;
        }

        // Single-quoted strings
        if (char === "'") {
            let str = "'";
            i++;
            while (i < query.length && query[i] !== "'") {
                if (query[i] === '\\' && i + 1 < query.length) {
                    str += query[i] + query[i + 1];
                    i += 2;
                } else {
                    str += query[i];
                    i++;
                }
            }
            if (i < query.length) {
                str += query[i];
                i++;
            }
            tokens.push({ type: 'string', value: str });
            continue;
        }

        // Multi-character operators
        if (i + 1 < query.length) {
            const twoChar = query.substring(i, i + 2);
            if (['!=', '<>', '<=', '>='].includes(twoChar)) {
                tokens.push({ type: 'operator', value: twoChar });
                i += 2;
                continue;
            }
        }

        // Single-character operators and delimiters
        if (['=', '<', '>', '(', ')', ',', '*', '+', '-', '/', '%', '.', ';'].includes(char)) {
            tokens.push({ type: 'operator', value: char });
            i++;
            continue;
        }

        // Numbers
        if (/\d/.test(char)) {
            let number = '';
            while (i < query.length && /[\d.]/.test(query[i])) {
                number += query[i];
                i++;
            }
            tokens.push({ type: 'number', value: number });
            continue;
        }

        // Words (keywords, table names, functions, fields)
        if (/[a-zA-Z_.]/.test(char)) {
            let word = '';
            while (i < query.length && /[a-zA-Z0-9_.]/.test(query[i])) {
                word += query[i];
                i++;
            }

            // Check for multi-word keywords
            const upper = word.toUpperCase();
            if (upper === 'GROUP' || upper === 'ORDER' || upper === 'LEFT' || upper === 'INNER') {
                let nextWordStart = i;
                while (nextWordStart < query.length && /\s/.test(query[nextWordStart])) {
                    nextWordStart++;
                }
                let nextWord = '';
                let nextWordEnd = nextWordStart;
                while (nextWordEnd < query.length && /[a-zA-Z]/.test(query[nextWordEnd])) {
                    nextWord += query[nextWordEnd];
                    nextWordEnd++;
                }
                const nextUpper = nextWord.toUpperCase();
                if ((upper === 'GROUP' && nextUpper === 'BY') ||
                    (upper === 'ORDER' && nextUpper === 'BY') ||
                    (upper === 'LEFT' && nextUpper === 'JOIN') ||
                    (upper === 'INNER' && nextUpper === 'JOIN')) {
                    while (i < nextWordEnd) {
                        word += query[i];
                        i++;
                    }
                }
            }

            // Check if followed by parenthesis (function call)
            let nextNonSpace = i;
            while (nextNonSpace < query.length && /\s/.test(query[nextNonSpace])) {
                nextNonSpace++;
            }
            const isFunction = nextNonSpace < query.length && query[nextNonSpace] === '(';

            // Determine token type
            const wordUpper = word.toUpperCase();
            let type = 'identifier';

            const keywords = [
                'SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'INNER JOIN', 'CROSS JOIN',
                'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'OFFSET', 'UNION', 'DISTINCT', 'AS', 'ON'
            ];

            const operators = ['AND', 'OR', 'NOT', 'LIKE', 'IN', 'BETWEEN', 'IS', 'NULL'];

            const functions = [
                'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'GROUP_CONCAT',
                'UPPER', 'LOWER', 'LENGTH', 'SUBSTR', 'TRIM', 'LTRIM', 'RTRIM', 'REPLACE'
            ];

            const tables = [
                'processes', 'process_open_sockets', 'process_envs', 'listening_ports',
                'file', 'hash', 'users', 'groups', 'authorized_keys', 'shadow',
                'interface_addresses', 'routes', 'arp_cache', 'dns_resolvers', 'iptables',
                'system_info', 'os_version', 'uptime', 'kernel_info', 'cpu_info', 'memory_info',
                'logged_in_users', 'last', 'sudoers', 'certificates',
                'programs', 'apps', 'deb_packages', 'rpm_packages', 'npm_packages',
                'startup_items', 'services', 'systemd_units', 'crontab',
                'disk_info', 'usb_devices', 'pci_devices', 'battery',
                'syslog', 'windows_eventlog', 'registry', 'docker_containers'
            ];

            if (keywords.includes(wordUpper)) {
                type = 'keyword';
            } else if (operators.includes(wordUpper)) {
                type = 'operator';
            } else if (isFunction || functions.includes(wordUpper)) {
                type = 'function';
            } else if (tables.includes(word.toLowerCase())) {
                type = 'table';
            } else {
                type = 'identifier';
            }

            tokens.push({ type: type, value: word });
            continue;
        }

        // Anything else
        tokens.push({ type: 'unknown', value: char });
        i++;
    }

    return tokens;
}
