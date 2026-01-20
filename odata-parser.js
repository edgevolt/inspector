// OData Parser - URL query string parser

import { getExplanation } from './languages/odata.js';

// Token types
const TokenType = {
    QUERY_OPTION: 'query-option',
    OPERATOR: 'operator',
    FUNCTION: 'function',
    PROPERTY: 'property',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    KEYWORD: 'keyword',
    PUNCTUATION: 'punctuation',
    WHITESPACE: 'whitespace'
};

// OData query options
const QUERY_OPTIONS = new Set([
    '$filter', '$select', '$expand', '$orderby', '$top', '$skip',
    '$count', '$search', '$format', '$apply', '$compute', '$index'
]);

// OData operators
const OPERATORS = new Set([
    'eq', 'ne', 'gt', 'ge', 'lt', 'le',
    'and', 'or', 'not',
    'add', 'sub', 'mul', 'div', 'mod',
    'any', 'all'
]);

// OData functions
const FUNCTIONS = new Set([
    'contains', 'startswith', 'endswith', 'length', 'indexof', 'substring',
    'tolower', 'toupper', 'trim', 'concat',
    'year', 'month', 'day', 'hour', 'minute', 'second', 'now', 'date', 'time',
    'cast', 'isof'
]);

const KEYWORDS = new Set(['true', 'false', 'null', 'asc', 'desc']);

/**
 * Tokenizes OData query string
 */
export function tokenizeOData(input) {
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

        // Strings (single quotes in OData)
        if (char === "'") {
            let str = "'";
            const start = i;
            i++;
            while (i < input.length && input[i] !== "'") {
                if (input[i] === "'" && input[i + 1] === "'") {
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

        // Punctuation
        if ('(),:=/&?'.includes(char)) {
            tokens.push({
                type: TokenType.PUNCTUATION,
                value: char,
                start: i,
                end: i + 1
            });
            i++;
            continue;
        }

        // Query options, operators, functions, properties, keywords
        if (/[a-zA-Z$_]/.test(char)) {
            let word = '';
            const start = i;

            // Handle $ prefix for query options
            if (char === '$') {
                word += char;
                i++;
            }

            while (i < input.length && /[a-zA-Z0-9_/]/.test(input[i])) {
                word += input[i];
                i++;
            }

            let type = TokenType.PROPERTY;
            const lowerWord = word.toLowerCase();

            if (QUERY_OPTIONS.has(lowerWord)) {
                type = TokenType.QUERY_OPTION;
            } else if (OPERATORS.has(lowerWord)) {
                type = TokenType.OPERATOR;
            } else if (FUNCTIONS.has(lowerWord)) {
                type = TokenType.FUNCTION;
            } else if (KEYWORDS.has(lowerWord)) {
                type = lowerWord === 'true' || lowerWord === 'false' ? TokenType.BOOLEAN : TokenType.KEYWORD;
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
        if (token.type === TokenType.WHITESPACE) {
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
export function parseOData(input) {
    if (!input || input.trim() === '') {
        return [];
    }

    const tokens = tokenizeOData(input);
    return enrichTokens(tokens);
}
