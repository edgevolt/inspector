// GraphQL Parser and Tokenizer

import { getExplanation } from './languages/graphql.js';

// Token types
const TokenType = {
    OPERATION: 'operation',
    DIRECTIVE: 'directive',
    KEYWORD: 'keyword',
    SCALAR: 'scalar',
    FIELD: 'field',
    VARIABLE: 'variable',
    ARGUMENT: 'argument',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    PUNCTUATION: 'punctuation',
    WHITESPACE: 'whitespace',
    COMMENT: 'comment',
    SPREAD: 'spread',
    TYPE_MODIFIER: 'type-modifier'
};

// GraphQL keywords
const OPERATIONS = new Set(['query', 'mutation', 'subscription']);
const SDL_KEYWORDS = new Set([
    'type', 'interface', 'union', 'enum', 'input', 'scalar',
    'schema', 'extend', 'implements', 'directive', 'fragment', 'on'
]);
const SCALARS = new Set(['Int', 'Float', 'String', 'Boolean', 'ID']);
const BOOLEAN_VALUES = new Set(['true', 'false', 'null']);

/**
 * Tokenizes a GraphQL query/schema string
 */
export function tokenizeGraphQL(input) {
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

        // Comments
        if (char === '#') {
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

        // Strings
        if (char === '"') {
            let str = '"';
            const start = i;
            i++;

            // Handle block strings (""")
            if (input[i] === '"' && input[i + 1] === '"') {
                str += '""';
                i += 2;
                while (i < input.length) {
                    if (input[i] === '"' && input[i + 1] === '"' && input[i + 2] === '"') {
                        str += '"""';
                        i += 3;
                        break;
                    }
                    str += input[i];
                    i++;
                }
            } else {
                // Regular string
                while (i < input.length && input[i] !== '"') {
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

        // Spread operator (...)
        if (char === '.' && input[i + 1] === '.' && input[i + 2] === '.') {
            tokens.push({
                type: TokenType.SPREAD,
                value: '...',
                start: i,
                end: i + 3
            });
            i += 3;
            continue;
        }

        // Variables (start with $)
        if (char === '$') {
            let variable = '$';
            const start = i;
            i++;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                variable += input[i];
                i++;
            }
            tokens.push({
                type: TokenType.VARIABLE,
                value: variable,
                start,
                end: i
            });
            continue;
        }

        // Directives (start with @)
        if (char === '@') {
            let directive = '@';
            const start = i;
            i++;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                directive += input[i];
                i++;
            }
            tokens.push({
                type: TokenType.DIRECTIVE,
                value: directive,
                start,
                end: i
            });
            continue;
        }

        // Type modifiers and punctuation
        if ('![]{}():,=|&'.includes(char)) {
            let type = TokenType.PUNCTUATION;
            if (char === '!' || char === '[' || char === ']') {
                type = TokenType.TYPE_MODIFIER;
            }
            tokens.push({
                type,
                value: char,
                start: i,
                end: i + 1
            });
            i++;
            continue;
        }

        // Keywords, operations, scalars, fields
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            const start = i;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                word += input[i];
                i++;
            }

            let type = TokenType.FIELD;
            const lowerWord = word.toLowerCase();

            if (OPERATIONS.has(lowerWord)) {
                type = TokenType.OPERATION;
            } else if (SDL_KEYWORDS.has(lowerWord)) {
                type = TokenType.KEYWORD;
            } else if (SCALARS.has(word)) {
                type = TokenType.SCALAR;
            } else if (BOOLEAN_VALUES.has(lowerWord)) {
                type = TokenType.BOOLEAN;
            } else if (word.startsWith('__')) {
                type = TokenType.FIELD; // Introspection fields
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
export function parseGraphQL(input) {
    if (!input || input.trim() === '') {
        return [];
    }

    const tokens = tokenizeGraphQL(input);
    return enrichTokens(tokens);
}
