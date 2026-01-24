// IBM QRadar Ariel Query Language (AQL) Parser

export function parseAQL(query) {
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

        // Single-line comments (--)
        if (char === '-' && i + 1 < query.length && query[i + 1] === '-') {
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

        // Multi-character operators
        if (i + 1 < query.length) {
            const twoChar = query.substring(i, i + 2);
            if (['!=', '<>', '>=', '<='].includes(twoChar)) {
                tokens.push({
                    type: 'operator',
                    value: twoChar
                });
                i += 2;
                continue;
            }
        }

        // Single-character operators and delimiters
        if (['=', '>', '<', '(', ')', ',', '*', '+', '-', '/', '%', '.'].includes(char)) {
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
            tokens.push({
                type: 'number',
                value: number
            });
            continue;
        }

        // Words (keywords, functions, fields, identifiers)
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            while (i < query.length && /[a-zA-Z0-9_]/.test(query[i])) {
                word += query[i];
                i++;
            }

            // Check for multi-word keywords
            const upper = word.toUpperCase();

            // Look ahead for multi-word keywords
            if (upper === 'GROUP' || upper === 'ORDER' || upper === 'IS') {
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
                    (upper === 'IS' && (nextUpper === 'NULL' || nextUpper === 'NOT'))) {

                    // Include whitespace and next word
                    while (i < nextWordEnd) {
                        word += query[i];
                        i++;
                    }

                    // For "IS NOT NULL", check for third word
                    if (upper === 'IS' && nextUpper === 'NOT') {
                        let thirdWordStart = i;
                        while (thirdWordStart < query.length && /\s/.test(query[thirdWordStart])) {
                            thirdWordStart++;
                        }

                        let thirdWord = '';
                        let thirdWordEnd = thirdWordStart;
                        while (thirdWordEnd < query.length && /[a-zA-Z]/.test(query[thirdWordEnd])) {
                            thirdWord += query[thirdWordEnd];
                            thirdWordEnd++;
                        }

                        if (thirdWord.toUpperCase() === 'NULL') {
                            while (i < thirdWordEnd) {
                                word += query[i];
                                i++;
                            }
                        }
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

            // SQL-like keywords
            const keywords = [
                'SELECT', 'FROM', 'WHERE', 'GROUP BY', 'HAVING', 'ORDER BY',
                'LIMIT', 'START', 'STOP', 'LAST', 'AS', 'ASC', 'DESC',
                'WHEN', 'THEN', 'ELSE', 'END', 'CASE'
            ];

            // Boolean operators
            const booleanOps = ['AND', 'OR', 'NOT'];

            // Pattern operators
            const patternOps = ['LIKE', 'ILIKE', 'MATCHES', 'IN', 'BETWEEN', 'IS NULL', 'IS NOT NULL'];

            // Aggregation functions
            const aggFunctions = [
                'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'STDDEV', 'VARIANCE',
                'UNIQUECOUNT', 'FIRST', 'LAST'
            ];

            // Other functions
            const otherFunctions = [
                'CONCAT', 'SUBSTRING', 'LOWER', 'UPPER', 'TRIM', 'LTRIM', 'RTRIM',
                'LENGTH', 'REPLACE', 'INDEXOF', 'STARTSWITH', 'ENDSWITH', 'REGEXMATCH',
                'DATEFORMAT', 'DATECREATE', 'DATEEXTRACT', 'DATEADD', 'DATEDIFF',
                'NOW', 'EPOCHTOMILLISECONDS',
                'INCIDR', 'INSUBNET', 'IPADDRESS', 'LOGSOURCENAME', 'LOGSOURCETYPENAME',
                'CATEGORYNAME', 'QIDNAME',
                'TOSTRING', 'TONUMBER', 'TOBOOLEAN', 'CAST',
                'COALESCE', 'NULLIF', 'ISNULL',
                'ABS', 'CEIL', 'FLOOR', 'ROUND', 'POWER', 'SQRT', 'MOD'
            ];

            // Common event fields
            const eventFields = [
                'starttime', 'endtime', 'devicetime',
                'sourceip', 'sourceport', 'sourcemac', 'sourcebytes',
                'destinationip', 'destinationport', 'destinationmac', 'destinationbytes',
                'username', 'userid', 'protocol', 'protocolid',
                'qid', 'qidname', 'category', 'categoryname', 'severity', 'magnitude',
                'logsourceid', 'logsourcename', 'eventid', 'eventcount'
            ];

            // Time units
            const timeUnits = ['MINUTES', 'HOURS', 'DAYS', 'WEEKS', 'MONTHS', 'YEARS'];

            if (keywords.includes(wordUpper)) {
                type = 'keyword';
            } else if (booleanOps.includes(wordUpper)) {
                type = 'operator';
            } else if (patternOps.includes(wordUpper)) {
                type = 'operator';
            } else if (isFunction || aggFunctions.includes(wordUpper) || otherFunctions.includes(wordUpper)) {
                type = 'function';
            } else if (eventFields.includes(word.toLowerCase())) {
                type = 'field';
            } else if (timeUnits.includes(wordUpper)) {
                type = 'keyword';
            } else if (wordUpper === 'EVENTS' || wordUpper === 'FLOWS') {
                type = 'keyword';
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
