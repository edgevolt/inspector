// MongoDB Parser and Tokenizer

import { getExplanation } from './languages/mongodb.js';

// Token types
const TokenType = {
    METHOD: 'method',
    OPERATOR: 'operator',
    FIELD: 'field',
    COLLECTION: 'collection',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    NULL: 'null',
    PUNCTUATION: 'punctuation',
    WHITESPACE: 'whitespace',
    COMMENT: 'comment',
    KEYWORD: 'keyword'
};

// MongoDB methods
const CRUD_METHODS = new Set([
    'insertOne', 'insertMany', 'find', 'findOne', 'countDocuments', 'distinct',
    'updateOne', 'updateMany', 'replaceOne', 'findOneAndUpdate',
    'deleteOne', 'deleteMany', 'findOneAndDelete', 'aggregate'
]);

const KEYWORDS = new Set(['db', 'new', 'Date', 'ObjectId', 'true', 'false', 'null']);

/**
 * Tokenizes a MongoDB query string
 */
export function tokenizeMongoDB(input) {
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
        if (char === '/' && i + 1 < input.length) {
            if (input[i + 1] === '/') {
                // Single-line comment
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
            } else if (input[i + 1] === '*') {
                // Multi-line comment
                let comment = '';
                const start = i;
                while (i < input.length) {
                    comment += input[i];
                    if (input[i] === '*' && input[i + 1] === '/') {
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
        }

        // Strings (single or double quotes)
        if (char === '"' || char === "'" || char === '`') {
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

        // Operators (start with $)
        if (char === '$') {
            let operator = '$';
            const start = i;
            i++;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                operator += input[i];
                i++;
            }
            tokens.push({
                type: TokenType.OPERATOR,
                value: operator,
                start,
                end: i
            });
            continue;
        }

        // Punctuation
        if ('{}[](),.;:'.includes(char)) {
            tokens.push({
                type: TokenType.PUNCTUATION,
                value: char,
                start: i,
                end: i + 1
            });
            i++;
            continue;
        }

        // Identifiers, methods, keywords, fields
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            const start = i;
            while (i < input.length && /[a-zA-Z0-9_]/.test(input[i])) {
                word += input[i];
                i++;
            }

            let type = TokenType.FIELD;

            if (CRUD_METHODS.has(word)) {
                type = TokenType.METHOD;
            } else if (KEYWORDS.has(word)) {
                type = TokenType.KEYWORD;
            } else if (word === 'true' || word === 'false') {
                type = TokenType.BOOLEAN;
            } else if (word === 'null') {
                type = TokenType.NULL;
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
export function parseMongoDB(input) {
    if (!input || input.trim() === '') {
        return [];
    }

    const tokens = tokenizeMongoDB(input);
    return enrichTokens(tokens);
}
