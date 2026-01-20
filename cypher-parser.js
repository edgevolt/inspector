// Cypher Parser - Neo4j Graph Query Language

import { getExplanation } from './languages/cypher.js';

// Token types
const TokenType = {
    KEYWORD: 'keyword',
    FUNCTION: 'function',
    VARIABLE: 'variable',
    LABEL: 'label',
    RELATIONSHIP_TYPE: 'relationship-type',
    PROPERTY: 'property',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    OPERATOR: 'operator',
    PUNCTUATION: 'punctuation',
    WHITESPACE: 'whitespace',
    COMMENT: 'comment'
};

// Cypher Keywords
const KEYWORDS = new Set([
    'MATCH', 'RETURN', 'WHERE', 'CREATE', 'MERGE', 'DELETE', 'DETACH',
    'SET', 'REMOVE', 'WITH', 'UNWIND', 'ORDER', 'BY', 'LIMIT', 'SKIP',
    'ASC', 'DESC', 'UNION', 'ALL', 'CALL', 'YIELD', 'ON', 'OPTIONAL',
    'AND', 'OR', 'NOT', 'XOR', 'IN', 'IS', 'NULL', 'AS', 'DISTINCT',
    'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'FOREACH', 'LOAD', 'CSV',
    'FROM', 'USING', 'INDEX', 'SCAN', 'JOIN', 'PERIODIC', 'COMMIT'
]);

// Cypher Functions
const FUNCTIONS = new Set([
    'count', 'collect', 'sum', 'avg', 'min', 'max',
    'id', 'type', 'labels', 'properties', 'size', 'length', 'coalesce', 'timestamp',
    'head', 'tail', 'last', 'range',
    'toUpper', 'toLower', 'trim', 'substring', 'split', 'replace',
    'nodes', 'relationships', 'shortestPath', 'allShortestPaths',
    'exists', 'isEmpty', 'toString', 'toInteger', 'toFloat', 'toBoolean'
]);

/**
 * Tokenizes Cypher query
 */
export function tokenizeCypher(input) {
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

        // Comments (// or /* */)
        if (char === '/' && i + 1 < input.length && input[i + 1] === '/') {
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

        // Strings (single or double quotes)
        if (char === '"' || char === "'") {
            const quote = char;
            let str = quote;
            const start = i;
            i++;
            while (i < input.length && input[i] !== quote) {
                if (input[i] === '\\' && i + 1 < input.length) {
                    str += input[i] + input[i + 1];
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
        if ('(){}[]<>=!,:;.+-*/%|'.includes(char)) {
            let op = char;
            const start = i;
            i++;

            // Check for multi-char operators
            if (i < input.length) {
                const twoChar = op + input[i];
                if (['<=', '>=', '<>', '!=', '..', '->'].includes(twoChar)) {
                    op = twoChar;
                    i++;
                }
            }

            tokens.push({
                type: ['=', '<', '>', '!', '+', '-', '*', '/', '%', '|'].includes(op[0]) ? TokenType.OPERATOR : TokenType.PUNCTUATION,
                value: op,
                start,
                end: i
            });
            continue;
        }

        // Labels (after colon)
        if (char === ':' && i + 1 < input.length && /[a-zA-Z_]/.test(input[i + 1])) {
            let label = ':';
            const start = i;
            i++;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                label += input[i];
                i++;
            }
            tokens.push({
                type: TokenType.LABEL,
                value: label,
                start,
                end: i
            });
            continue;
        }

        // Colon alone
        if (char === ':') {
            tokens.push({
                type: TokenType.PUNCTUATION,
                value: ':',
                start: i,
                end: i + 1
            });
            i++;
            continue;
        }

        // Keywords, functions, variables
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            const start = i;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                word += input[i];
                i++;
            }

            let type = TokenType.VARIABLE;
            const upperWord = word.toUpperCase();
            const lowerWord = word.toLowerCase();

            if (KEYWORDS.has(upperWord)) {
                type = TokenType.KEYWORD;
            } else if (FUNCTIONS.has(lowerWord)) {
                type = TokenType.FUNCTION;
            } else if (lowerWord === 'true' || lowerWord === 'false' || lowerWord === 'null') {
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
export function parseCypher(input) {
    if (!input || input.trim() === '') {
        return [];
    }

    const tokens = tokenizeCypher(input);
    return enrichTokens(tokens);
}
