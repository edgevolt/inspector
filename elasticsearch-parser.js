// Elasticsearch Parser - Supports both Query DSL (JSON) and ES|QL

import { getExplanation } from './languages/elasticsearch.js';

// Token types
const TokenType = {
    ESQL_COMMAND: 'esql-command',
    QUERY_TYPE: 'query-type',
    AGGREGATION: 'aggregation',
    FIELD: 'field',
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    NULL: 'null',
    KEYWORD: 'keyword',
    OPERATOR: 'operator',
    PUNCTUATION: 'punctuation',
    WHITESPACE: 'whitespace',
    COMMENT: 'comment'
};

// ES|QL Commands
const ESQL_COMMANDS = new Set([
    'FROM', 'WHERE', 'STATS', 'SORT', 'LIMIT', 'KEEP', 'DROP',
    'EVAL', 'ENRICH', 'DISSECT', 'GROK', 'BY', 'ASC', 'DESC'
]);

// Query DSL query types
const QUERY_TYPES = new Set([
    'match', 'match_phrase', 'match_phrase_prefix', 'multi_match',
    'query_string', 'simple_query_string', 'term', 'terms', 'range',
    'exists', 'prefix', 'wildcard', 'regexp', 'fuzzy', 'ids',
    'bool', 'boosting', 'constant_score', 'dis_max', 'function_score',
    'more_like_this', 'geo_distance', 'geo_bounding_box', 'nested'
]);

// Aggregation types
const AGGREGATIONS = new Set([
    'avg', 'sum', 'min', 'max', 'stats', 'cardinality', 'percentiles',
    'value_count', 'terms', 'date_histogram', 'histogram', 'range',
    'date_range', 'filter', 'filters', 'nested'
]);

const KEYWORDS = new Set(['true', 'false', 'null', 'AND', 'OR', 'NOT']);

/**
 * Tokenizes Elasticsearch query (ES|QL or Query DSL)
 */
export function tokenizeElasticsearch(input) {
    const tokens = [];
    let i = 0;

    // Detect if this is ES|QL (starts with FROM/WHERE/STATS) or Query DSL (JSON)
    const trimmed = input.trim();
    const isESQL = /^(FROM|WHERE|STATS|SORT|LIMIT|KEEP|DROP|EVAL|ENRICH|DISSECT|GROK)\s/i.test(trimmed);

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

        // Strings
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

        // Operators and punctuation
        if ('{}[](),:=<>!|&*+-'.includes(char)) {
            let op = char;
            const start = i;
            i++;

            // Check for multi-char operators
            if (i < input.length) {
                const twoChar = op + input[i];
                if (['==', '!=', '<=', '>=', '&&', '||'].includes(twoChar)) {
                    op = twoChar;
                    i++;
                }
            }

            tokens.push({
                type: ['=', '<', '>', '!', '&', '|', '+', '-', '*'].includes(op[0]) ? TokenType.OPERATOR : TokenType.PUNCTUATION,
                value: op,
                start,
                end: i
            });
            continue;
        }

        // Keywords, commands, query types, fields
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            const start = i;
            while (i < input.length && /[a-zA-Z0-9_.]/.test(input[i])) {
                word += input[i];
                i++;
            }

            let type = TokenType.FIELD;
            const upperWord = word.toUpperCase();
            const lowerWord = word.toLowerCase();

            if (isESQL && ESQL_COMMANDS.has(upperWord)) {
                type = TokenType.ESQL_COMMAND;
            } else if (QUERY_TYPES.has(lowerWord)) {
                type = TokenType.QUERY_TYPE;
            } else if (AGGREGATIONS.has(lowerWord)) {
                type = TokenType.AGGREGATION;
            } else if (KEYWORDS.has(upperWord) || lowerWord === 'true' || lowerWord === 'false' || lowerWord === 'null') {
                type = lowerWord === 'null' ? TokenType.NULL : TokenType.BOOLEAN;
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
export function parseElasticsearch(input) {
    if (!input || input.trim() === '') {
        return [];
    }

    const tokens = tokenizeElasticsearch(input);
    return enrichTokens(tokens);
}
