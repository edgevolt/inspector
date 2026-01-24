// Terraform/HCL Parser

export function parseTerraform(code) {
    const tokens = [];
    let i = 0;

    while (i < code.length) {
        const char = code[i];

        // Whitespace
        if (/\s/.test(char)) {
            let whitespace = '';
            while (i < code.length && /\s/.test(code[i])) {
                whitespace += code[i];
                i++;
            }
            tokens.push({
                type: 'whitespace',
                value: whitespace
            });
            continue;
        }

        // Comments (# or //)
        if (char === '#' || (char === '/' && i + 1 < code.length && code[i + 1] === '/')) {
            let comment = '';
            if (char === '/') {
                comment += '//';
                i += 2;
            } else {
                comment += '#';
                i++;
            }
            while (i < code.length && code[i] !== '\n') {
                comment += code[i];
                i++;
            }
            tokens.push({
                type: 'comment',
                value: comment
            });
            continue;
        }

        // Multi-line comments /* */
        if (char === '/' && i + 1 < code.length && code[i + 1] === '*') {
            let comment = '/*';
            i += 2;
            while (i < code.length - 1) {
                if (code[i] === '*' && code[i + 1] === '/') {
                    comment += '*/';
                    i += 2;
                    break;
                }
                comment += code[i];
                i++;
            }
            tokens.push({
                type: 'comment',
                value: comment
            });
            continue;
        }

        // Strings (double-quoted)
        if (char === '"') {
            let str = '"';
            i++;
            while (i < code.length && code[i] !== '"') {
                if (code[i] === '\\' && i + 1 < code.length) {
                    str += code[i] + code[i + 1];
                    i += 2;
                } else if (code[i] === '$' && i + 1 < code.length && code[i + 1] === '{') {
                    // String interpolation
                    str += code[i];
                    i++;
                } else {
                    str += code[i];
                    i++;
                }
            }
            if (i < code.length) {
                str += code[i];
                i++;
            }
            tokens.push({
                type: 'string',
                value: str
            });
            continue;
        }

        // Heredoc strings
        if (char === '<' && i + 1 < code.length && code[i + 1] === '<') {
            let heredoc = '<<';
            i += 2;
            // Read delimiter
            let delimiter = '';
            while (i < code.length && /[A-Z_]/.test(code[i])) {
                delimiter += code[i];
                heredoc += code[i];
                i++;
            }
            // Read until delimiter
            while (i < code.length) {
                if (code.substring(i, i + delimiter.length) === delimiter) {
                    heredoc += delimiter;
                    i += delimiter.length;
                    break;
                }
                heredoc += code[i];
                i++;
            }
            tokens.push({
                type: 'string',
                value: heredoc
            });
            continue;
        }

        // Numbers
        if (/\d/.test(char)) {
            let number = '';
            while (i < code.length && /[\d.]/.test(code[i])) {
                number += code[i];
                i++;
            }
            tokens.push({
                type: 'number',
                value: number
            });
            continue;
        }

        // Operators and punctuation
        if (['=', '{', '}', '[', ']', '(', ')', ',', '.', ':', '?', '!', '+', '-', '*', '/', '%', '<', '>', '&', '|'].includes(char)) {
            // Check for multi-character operators
            if (i + 1 < code.length) {
                const twoChar = code.substring(i, i + 2);
                if (['==', '!=', '<=', '>=', '&&', '||', '=>', '...'].includes(twoChar)) {
                    tokens.push({
                        type: 'operator',
                        value: twoChar
                    });
                    i += 2;
                    continue;
                }
            }

            tokens.push({
                type: 'operator',
                value: char
            });
            i++;
            continue;
        }

        // Identifiers and keywords
        if (/[a-zA-Z_]/.test(char)) {
            let word = '';
            while (i < code.length && /[a-zA-Z0-9_-]/.test(code[i])) {
                word += code[i];
                i++;
            }

            // Determine if it's a keyword or identifier
            const lower = word.toLowerCase();
            let type = 'identifier';

            const blocks = ['resource', 'data', 'variable', 'output', 'locals', 'module', 'provider', 'terraform', 'provisioner', 'backend'];
            const metaArgs = ['count', 'for_each', 'depends_on', 'lifecycle', 'provider'];
            const keywords = ['true', 'false', 'null', 'var', 'local', 'each', 'path'];
            const builtinFunctions = [
                'file', 'templatefile', 'jsonencode', 'jsondecode', 'yamlencode', 'yamldecode',
                'lookup', 'merge', 'concat', 'flatten', 'toset', 'tolist', 'tomap', 'length',
                'join', 'split', 'format', 'lower', 'upper', 'replace', 'substr',
                'cidrsubnet', 'cidrhost', 'timestamp', 'formatdate', 'try', 'can'
            ];

            if (blocks.includes(lower)) {
                type = 'block';
            } else if (metaArgs.includes(lower)) {
                type = 'meta-argument';
            } else if (keywords.includes(lower)) {
                type = 'keyword';
            } else if (builtinFunctions.includes(lower)) {
                type = 'function';
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
