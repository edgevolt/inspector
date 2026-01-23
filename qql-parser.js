// QQL (Qualys Query Language) Parser

export function parseQQL(query) {
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

        // Comments (-- or #)
        if ((char === '-' && i + 1 < query.length && query[i + 1] === '-') || char === '#') {
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
                str += query[i];
                i++;
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

        // Multi-character operators
        if (i + 1 < query.length) {
            const twoChar = query.substring(i, i + 2);
            if (['!=', '>=', '<=', '!~', '=='].includes(twoChar)) {
                tokens.push({
                    type: 'operator',
                    value: twoChar
                });
                i += 2;
                continue;
            }
        }

        // Check for multi-word operators/keywords
        const remaining = query.substring(i);

        // "is null" and "is not null"
        if (remaining.match(/^is\s+not\s+null/i)) {
            const match = remaining.match(/^(is\s+not\s+null)/i)[0];
            tokens.push({
                type: 'operator',
                value: match
            });
            i += match.length;
            continue;
        }
        if (remaining.match(/^is\s+null/i)) {
            const match = remaining.match(/^(is\s+null)/i)[0];
            tokens.push({
                type: 'operator',
                value: match
            });
            i += match.length;
            continue;
        }

        // "not in"
        if (remaining.match(/^not\s+in/i)) {
            const match = remaining.match(/^(not\s+in)/i)[0];
            tokens.push({
                type: 'operator',
                value: match
            });
            i += match.length;
            continue;
        }

        // "order by" and "group by"
        if (remaining.match(/^order\s+by/i)) {
            const match = remaining.match(/^(order\s+by)/i)[0];
            tokens.push({
                type: 'keyword',
                value: match
            });
            i += match.length;
            continue;
        }
        if (remaining.match(/^group\s+by/i)) {
            const match = remaining.match(/^(group\s+by)/i)[0];
            tokens.push({
                type: 'keyword',
                value: match
            });
            i += match.length;
            continue;
        }

        // Single-character operators
        if (['=', '>', '<', '~', '(', ')', ',', '.'].includes(char)) {
            tokens.push({
                type: 'operator',
                value: char
            });
            i++;
            continue;
        }

        // Numbers (including decimals)
        if (/\d/.test(char)) {
            let number = '';
            while (i < query.length && /[\d.]/.test(query[i])) {
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
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            while (i < query.length && /[a-zA-Z0-9_.]/.test(query[i])) {
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

            // Keywords
            const keywords = [
                'select', 'from', 'where', 'order', 'by', 'group', 'having',
                'limit', 'offset', 'asc', 'desc', 'as'
            ];

            // Logical operators
            const logicalOps = ['and', 'or', 'not'];

            // Special operators
            const specialOps = ['in', 'contains', 'between', 'like', 'is'];

            // Common function names
            const functions = [
                'upper', 'lower', 'trim', 'ltrim', 'rtrim', 'substring', 'concat',
                'replace', 'length', 'indexof', 'startswith', 'endswith',
                'now', 'today', 'daysago', 'weeksago', 'monthsago', 'yearsago',
                'dateadd', 'datediff', 'dateformat', 'dayofweek', 'dayofmonth',
                'month', 'year', 'count', 'sum', 'avg', 'min', 'max', 'distinct',
                'groupby', 'tostring', 'toint', 'tofloat', 'todate', 'tobool',
                'cidr', 'iprange', 'netmask', 'insubnet', 'isprivateip', 'ispublicip',
                'abs', 'round', 'ceil', 'floor', 'mod'
            ];

            if (keywords.includes(lower)) {
                type = 'keyword';
            } else if (logicalOps.includes(lower)) {
                type = 'operator';
            } else if (specialOps.includes(lower)) {
                type = 'operator';
            } else if (isFunction || functions.includes(lower)) {
                type = 'function';
            } else if (word.includes('.')) {
                // Field reference with dot notation
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
