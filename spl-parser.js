// Splunk Search Processing Language (SPL) Parser

export function parseSPL(query) {
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

        // Comments (backtick)
        if (char === '`') {
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

        // Single-quoted strings (field names or strings)
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

        // Subsearch brackets
        if (char === '[') {
            tokens.push({
                type: 'subsearch',
                value: '['
            });
            i++;
            continue;
        }

        if (char === ']') {
            tokens.push({
                type: 'subsearch',
                value: ']'
            });
            i++;
            continue;
        }

        // Pipe operator (command separator)
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
            if (['!=', '>=', '<=', '=='].includes(twoChar)) {
                tokens.push({
                    type: 'operator',
                    value: twoChar
                });
                i += 2;
                continue;
            }
        }

        // Single-character operators
        if (['=', '>', '<', '(', ')', ',', '*', '+', '-', '/', '%'].includes(char)) {
            tokens.push({
                type: 'operator',
                value: char
            });
            i++;
            continue;
        }

        // Numbers (including decimals and scientific notation)
        if (/\d/.test(char) || (char === '-' && i + 1 < query.length && /\d/.test(query[i + 1]))) {
            let number = '';
            if (char === '-') {
                number += char;
                i++;
            }
            while (i < query.length && /[\d.eE+-]/.test(query[i])) {
                number += query[i];
                i++;
            }
            tokens.push({
                type: 'number',
                value: number
            });
            continue;
        }

        // Words (commands, functions, fields, keywords, operators)
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
            const upper = word.toUpperCase();
            let type = 'identifier';

            // Search commands (after pipe or at start)
            const searchCommands = [
                'search', 'where', 'eval', 'stats', 'chart', 'timechart', 'table', 'fields',
                'rename', 'dedup', 'sort', 'head', 'tail', 'top', 'rare', 'transaction',
                'rex', 'regex', 'spath', 'bucket', 'bin', 'makemv', 'mvexpand',
                'join', 'append', 'appendcols', 'lookup', 'inputlookup', 'outputlookup',
                'eventstats', 'streamstats', 'convert', 'fillnull', 'replace', 'return'
            ];

            // Boolean operators
            const booleanOps = ['and', 'or', 'not', 'xor', 'AND', 'OR', 'NOT', 'XOR'];

            // Keywords
            const keywords = ['by', 'as', 'over', 'in', 'from', 'to', 'span', 'limit'];

            // Statistical functions
            const statsFunctions = [
                'count', 'sum', 'avg', 'min', 'max', 'median', 'mode', 'stdev', 'var',
                'dc', 'distinct_count', 'values', 'list', 'earliest', 'latest',
                'first', 'last', 'perc', 'range', 'rate'
            ];

            // Eval functions
            const evalFunctions = [
                'abs', 'ceil', 'floor', 'round', 'sqrt', 'pow', 'exp', 'log', 'ln', 'pi', 'random',
                'len', 'lower', 'upper', 'ltrim', 'rtrim', 'trim', 'substr', 'replace', 'split',
                'tonumber', 'tostring', 'case', 'if', 'like', 'match', 'searchmatch', 'cidrmatch',
                'now', 'time', 'relative_time', 'strftime', 'strptime',
                'md5', 'sha1', 'sha256', 'sha512',
                'mvcount', 'mvindex', 'mvfilter', 'mvjoin', 'mvsort',
                'isnull', 'isnotnull', 'typeof', 'coalesce', 'null', 'nullif', 'validate'
            ];

            // Common fields
            const commonFields = [
                '_time', '_raw', 'host', 'source', 'sourcetype', 'index', 'splunk_server',
                '_indextime', 'linecount', 'punct', 'tag'
            ];

            if (searchCommands.includes(lower)) {
                type = 'command';
            } else if (booleanOps.includes(word)) {
                type = 'operator';
            } else if (keywords.includes(lower)) {
                type = 'keyword';
            } else if (isFunction || statsFunctions.includes(lower) || evalFunctions.includes(lower)) {
                type = 'function';
            } else if (commonFields.includes(word)) {
                type = 'field';
            } else if (word.includes('.') || word.startsWith('_')) {
                // Field reference (with dot notation or underscore prefix)
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
