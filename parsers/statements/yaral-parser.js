// Google Chronicle Yara-L Detection Language Parser

export function parseYaraL(query) {
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

        // Single-line comments (//)
        if (char === '/' && i + 1 < query.length && query[i + 1] === '/') {
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
            let comment = query[i] + query[i + 1];
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

        // Double-quoted strings
        if (char === '"') {
            let str = '"';
            i++;
            while (i < query.length && query[i] !== '"') {
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

        // Regex patterns (backticks)
        if (char === '`') {
            let regex = '`';
            i++;
            while (i < query.length && query[i] !== '`') {
                if (query[i] === '\\' && i + 1 < query.length) {
                    regex += query[i] + query[i + 1];
                    i += 2;
                } else {
                    regex += query[i];
                    i++;
                }
            }
            if (i < query.length) {
                regex += query[i];
                i++;
            }
            tokens.push({ type: 'string', value: regex });
            continue;
        }

        // Multi-character operators
        if (i + 1 < query.length) {
            const twoChar = query.substring(i, i + 2);
            if (['==', '!=', '<=', '>=', '=~'].includes(twoChar)) {
                tokens.push({ type: 'operator', value: twoChar });
                i += 2;
                continue;
            }
        }

        // Single-character operators and delimiters
        if (['=', '<', '>', '(', ')', '[', ']', '{', '}', ',', '.', ':', '+', '-', '*', '/', '%'].includes(char)) {
            tokens.push({ type: 'operator', value: char });
            i++;
            continue;
        }

        // Numbers
        if (/\d/.test(char) || (char === '-' && i + 1 < query.length && /\d/.test(query[i + 1]))) {
            let number = '';
            if (char === '-') {
                number += char;
                i++;
            }
            while (i < query.length && /[\d.]/.test(query[i])) {
                number += query[i];
                i++;
            }
            tokens.push({ type: 'number', value: number });
            continue;
        }

        // Event variables ($e, $e1, $e2, etc.) and outcome variables ($risk_score, etc.)
        if (char === '$') {
            let variable = '$';
            i++;
            while (i < query.length && /[a-zA-Z0-9_]/.test(query[i])) {
                variable += query[i];
                i++;
            }
            tokens.push({ type: 'variable', value: variable });
            continue;
        }

        // Event count operator (#e, #e1, etc.)
        if (char === '#') {
            let count = '#';
            i++;
            while (i < query.length && /[a-zA-Z0-9_]/.test(query[i])) {
                count += query[i];
                i++;
            }
            tokens.push({ type: 'operator', value: count });
            continue;
        }

        // Words (keywords, functions, fields, identifiers)
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            while (i < query.length && /[a-zA-Z0-9_]/.test(query[i])) {
                word += query[i];
                i++;
            }

            // Check for function call (followed by parenthesis)
            let nextNonSpace = i;
            while (nextNonSpace < query.length && /\s/.test(query[nextNonSpace])) {
                nextNonSpace++;
            }
            const isFunction = nextNonSpace < query.length && query[nextNonSpace] === '(';

            // Check for field reference (followed by dot)
            const isFieldStart = nextNonSpace < query.length && query[nextNonSpace] === '.';

            const lower = word.toLowerCase();
            let type = 'identifier';

            // Rule structure keywords
            const ruleKeywords = ['rule', 'meta', 'events', 'match', 'condition', 'outcome', 'options'];
            
            // Event types
            const eventTypes = [
                'PROCESS_LAUNCH', 'NETWORK_CONNECTION', 'FILE_CREATION', 'FILE_MODIFICATION',
                'FILE_DELETION', 'REGISTRY_MODIFICATION', 'USER_LOGIN', 'USER_LOGOUT',
                'NETWORK_DNS', 'NETWORK_HTTP', 'PROCESS_TERMINATION', 'USER_CREATION'
            ];

            // Logical operators
            const logicalOps = ['and', 'or', 'not'];

            // String operators
            const stringOps = ['contains', 'icontains', 'in'];

            // Function namespaces
            const functionNamespaces = ['strings', 'net', 're', 'arrays', 'timestamp', 'math', 'hash', 'file', 'json'];

            // Common UDM field prefixes
            const udmPrefixes = [
                'metadata', 'principal', 'target', 'network', 'security_result',
                'about', 'intermediary', 'observer', 'src', 'additional'
            ];

            if (ruleKeywords.includes(lower)) {
                type = 'keyword';
            } else if (eventTypes.includes(word)) {
                type = 'keyword';
            } else if (logicalOps.includes(lower)) {
                type = 'operator';
            } else if (stringOps.includes(lower)) {
                type = 'operator';
            } else if (isFunction || functionNamespaces.includes(lower)) {
                type = 'function';
            } else if (isFieldStart || udmPrefixes.includes(lower)) {
                type = 'field';
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
