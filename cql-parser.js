// Cassandra CQL Parser

import { getExplanation } from './languages/cql.js';

// Token types
const TokenType = {
    KEYWORD: 'keyword',
    STATEMENT: 'statement',
    DATA_TYPE: 'data-type',
    FUNCTION: 'function',
    IDENTIFIER: 'identifier',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    OPERATOR: 'operator',
    PUNCTUATION: 'punctuation',
    WHITESPACE: 'whitespace',
    COMMENT: 'comment'
};

// CQL Keywords
const KEYWORDS = new Set([
    'CREATE', 'ALTER', 'DROP', 'TRUNCATE', 'SELECT', 'INSERT', 'UPDATE', 'DELETE',
    'BATCH', 'BEGIN', 'APPLY', 'FROM', 'WHERE', 'SET', 'VALUES', 'USING', 'WITH',
    'AND', 'OR', 'NOT', 'IN', 'ORDER', 'BY', 'LIMIT', 'ASC', 'DESC',
    'IF', 'EXISTS', 'ALLOW', 'FILTERING', 'KEYSPACE', 'TABLE', 'INDEX', 'TYPE',
    'MATERIALIZED', 'VIEW', 'AS', 'PRIMARY', 'KEY', 'CLUSTERING', 'COMPACT',
    'STORAGE', 'TTL', 'TIMESTAMP', 'TOKEN', 'FROZEN', 'COUNTER', 'PER', 'PARTITION',
    'GROUP', 'ADD', 'RENAME', 'REPLICATION', 'IS', 'NULL'
]);

// Data Types
const DATA_TYPES = new Set([
    'TEXT', 'VARCHAR', 'ASCII', 'INT', 'BIGINT', 'SMALLINT', 'TINYINT',
    'VARINT', 'FLOAT', 'DOUBLE', 'DECIMAL', 'BOOLEAN', 'UUID', 'TIMEUUID',
    'TIMESTAMP', 'DATE', 'TIME', 'DURATION', 'INET', 'BLOB',
    'SET', 'LIST', 'MAP', 'TUPLE', 'COUNTER'
]);

// Functions
const FUNCTIONS = new Set([
    'uuid', 'now', 'toDate', 'toTimestamp', 'toUnixTimestamp',
    'COUNT', 'MAX', 'MIN', 'SUM', 'AVG', 'dateOf', 'unixTimestampOf'
]);

/**
 * Tokenizes CQL query
 */
export function tokenizeCQL(input) {
    const tokens = [];
    let i = 0;

    while (i < input.length) {
        const char = input[i];

        // Whitespace
        if (/\s/.test(char)) {
            let whitespace = '';
            const start = i;
            while (i < input.length && /\s/.test(input[i])) {
                whitespace += input[i];
                i++;
            }
            tokens.push({
                type: TokenType.WHITESPACE,
                value: whitespace,
                start,
                end: i
            });
            continue;
        }

        // Comments (-- or /* */)
        if (char === '-' && i + 1 < input.length && input[i + 1] === '-') {
            let comment = '';
            const start = i;
            while (i < input.length && input[i] !== '\n') {
                comment += input[i];
                i++;
            }
            tokens.push({
                type: TokenType.COMMENT,
                value: comment,
                start,
                end: i
            });
            continue;
        }

        if (char === '/' && i + 1 < input.length && input[i + 1] === '*') {
            let comment = '';
            const start = i;
            while (i < input.length) {
                comment += input[i];
                if (input[i] === '*' && i + 1 < input.length && input[i + 1] === '/') {
                    comment += input[i + 1];
                    i += 2;
                    break;
                }
                i++;
            }
            tokens.push({
                type: TokenType.COMMENT,
                value: comment,
                start,
                end: i
            });
            continue;
        }

        // Strings (single quotes)
        if (char === "'") {
            let str = "'";
            const start = i;
            i++;
            while (i < input.length && input[i] !== "'") {
                if (input[i] === "'" && i + 1 < input.length && input[i + 1] === "'") {
                    // Escaped single quote
                    str += "''";
                    i += 2;
                } else {
                    str += input[i];
                    i++;
                }
            }
            if (i < input.length) {
                str += input[i];
                i++;
            }
            tokens.push({
                type: TokenType.STRING,
                value: str,
                start,
                end: i
            });
            continue;
        }

        // Numbers
        if (/\d/.test(char) || (char === '-' && i + 1 < input.length && /\d/.test(input[i + 1]))) {
            let num = '';
            const start = i;
            if (char === '-') {
                num += char;
                i++;
            }
            while (i < input.length && /[\d.]/.test(input[i])) {
                num += input[i];
                i++;
            }
            // Check for exponent
            if (i < input.length && (input[i] === 'e' || input[i] === 'E')) {
                num += input[i];
                i++;
                if (i < input.length && (input[i] === '+' || input[i] === '-')) {
                    num += input[i];
                    i++;
                }
                while (i < input.length && /\d/.test(input[i])) {
                    num += input[i];
                    i++;
                }
            }
            tokens.push({
                type: TokenType.NUMBER,
                value: num,
                start,
                end: i
            });
            continue;
        }

        // Operators and punctuation
        if ('(){}[]<>=!,;:+-*/%'.includes(char)) {
            let op = char;
            const start = i;
            i++;

            // Check for multi-char operators
            if (i < input.length) {
                const twoChar = op + input[i];
                if (['<=', '>=', '!=', '<>'].includes(twoChar)) {
                    op = twoChar;
                    i++;
                }
            }

            tokens.push({
                type: ['=', '<', '>', '!', '+', '-', '*', '/', '%'].includes(op[0]) ? TokenType.OPERATOR : TokenType.PUNCTUATION,
                value: op,
                start,
                end: i
            });
            continue;
        }

        // Keywords, data types, functions, identifiers
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            const start = i;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                word += input[i];
                i++;
            }

            let type = TokenType.IDENTIFIER;
            const upperWord = word.toUpperCase();
            const lowerWord = word.toLowerCase();

            if (KEYWORDS.has(upperWord)) {
                type = TokenType.KEYWORD;
            } else if (DATA_TYPES.has(upperWord)) {
                type = TokenType.DATA_TYPE;
            } else if (FUNCTIONS.has(lowerWord)) {
                type = TokenType.FUNCTION;
            } else if (lowerWord === 'true' || lowerWord === 'false') {
                type = TokenType.BOOLEAN;
            }

            tokens.push({
                type,
                value: word,
                start,
                end: i
            });
            continue;
        }

        // Unknown character, skip
        i++;
    }

    return tokens;
}

/**
 * Enriches tokens with explanation data
 */
export function enrichTokens(tokens) {
    return tokens.map(token => {
        if (token.type === TokenType.WHITESPACE || token.type === TokenType.COMMENT) {
            return token;
        }

        const explanation = getExplanation(token.value, token.type);
        return {
            ...token,
            explanation
        };
    });
}

/**
 * Main parse function
 */
export function parseCQL(input) {
    if (!input || input.trim() === '') {
        return [];
    }

    const tokens = tokenizeCQL(input);
    return enrichTokens(tokens);
}
