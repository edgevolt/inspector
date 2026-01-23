// Elastic Event Query Language (EQL) Parser

export function parseEQL(query) {
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
            tokens.push({
                type: 'whitespace',
                value: whitespace
            });
            continue;
        }

        // Single-line comments (//)
        if (char === '/' && i + 1 < query.length && query[i + 1] === '/') {
            let comment = '';
            while (i < query.length && query[i] !== '\n') {
                comment += query[i];
                i++;
            }
            tokens.push({
                type: 'comment',
                value: comment
            });
            continue;
        }

        // Multi-line comments (/* */)
        if (char === '/' && i + 1 < query.length && query[i + 1] === '*') {
            let comment = '';
            comment += query[i] + query[i + 1];
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
            tokens.push({
                type: 'comment',
                value: comment
            });
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
            tokens.push({
                type: 'string',
                value: str
            });
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
            tokens.push({
                type: 'string',
                value: str
            });
            continue;
        }

        // Pipe operator
        if (char === '|') {
            tokens.push({
                type: 'pipe',
                value: '|'
            });
            i++;
            continue;
        }

        // Multi-character operators
        if (i + 1 < query.length) {
            const twoChar = query.substring(i, i + 2);
            if (['==', '!=', '<=', '>=', 'like~', 'regex~'].includes(twoChar)) {
                tokens.push({
                    type: 'operator',
                    value: twoChar
                });
                i += 2;
                continue;
            }
        }

        // Single-character operators and delimiters
        if (['=', '>', '<', '(', ')', '[', ']', ',', '*', '+', '-', '/', '%', '.', ':', '?'].includes(char)) {
            tokens.push({
                type: 'operator',
                value: char
            });
            i++;
            continue;
        }

        // Numbers (including decimals)
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
            // Check for time units (e.g., 5m, 1h, 30s)
            if (i < query.length && /[smhd]/.test(query[i])) {
                number += query[i];
                i++;
            }
            tokens.push({
                type: 'number',
                value: number
            });
            continue;
        }

        // Words (keywords, functions, fields, identifiers)
        if (/[a-zA-Z_@]/.test(char)) {
            let word = '';
            while (i < query.length && /[a-zA-Z0-9_@.]/.test(query[i])) {
                word += query[i];
                i++;
            }

            // Check if followed by parenthesis (function call)
            let nextNonSpace = i;
            while (nextNonSpace < query.length && /\s/.test(query[nextNonSpace])) {
                nextNonSpace++;
            }
            const isFunction = nextNonSpace < query.length && query[nextNonSpace] === '(';

            // Determine token type
            const lower = word.toLowerCase();
            let type = 'identifier';

            // Query type keywords
            const queryKeywords = [
                'any', 'sequence', 'sample', 'where', 'by', 'with', 'until', 'maxspan', 'of'
            ];

            // Event categories
            const eventCategories = [
                'process', 'file', 'network', 'registry', 'dns', 'authentication'
            ];

            // Logical operators
            const logicalOps = ['and', 'or', 'not'];

            // String operators
            const stringOps = ['like', 'regex'];

            // Functions
            const functions = [
                'concat', 'endsWith', 'indexOf', 'length', 'startsWith', 'string',
                'stringContains', 'substring', 'toLowerCase', 'toUpperCase',
                'add', 'divide', 'modulo', 'multiply', 'subtract',
                'abs', 'ceil', 'floor', 'round',
                'arrayContains', 'arrayCount', 'arraySearch',
                'number', 'boolean', 'if', 'coalesce',
                'cidrMatch', 'now'
            ];

            // Pipe commands
            const pipeCommands = ['head', 'tail', 'count', 'unique', 'sort', 'filter'];

            // Common ECS fields (check for dot notation)
            const ecsFieldPrefixes = [
                '@timestamp', 'event', 'process', 'file', 'network', 'source', 'destination',
                'user', 'host', 'registry', 'dns'
            ];

            if (queryKeywords.includes(lower)) {
                type = 'keyword';
            } else if (eventCategories.includes(lower)) {
                type = 'keyword';
            } else if (logicalOps.includes(lower)) {
                type = 'operator';
            } else if (stringOps.includes(lower)) {
                type = 'operator';
            } else if (isFunction || functions.includes(lower)) {
                type = 'function';
            } else if (pipeCommands.includes(lower)) {
                type = 'pipe';
            } else if (word.includes('.') || word.startsWith('@')) {
                // Field reference with dot notation or @timestamp
                type = 'field';
            } else if (ecsFieldPrefixes.some(prefix => word.toLowerCase().startsWith(prefix))) {
                type = 'field';
            } else {
                type = 'identifier';
            }

            tokens.push({
                type: type,
                value: word
            });
            continue;
        }

        // Anything else
        tokens.push({
            type: 'unknown',
            value: char
        });
        i++;
    }

    return tokens;
}
