// Bash Parser

export function parseBash(command) {
    const tokens = [];
    let i = 0;

    while (i < command.length) {
        const char = command[i];

        // Whitespace
        if (/\s/.test(char)) {
            let whitespace = '';
            while (i < command.length && /\s/.test(command[i])) {
                whitespace += command[i];
                i++;
            }
            tokens.push({
                type: 'whitespace',
                value: whitespace
            });
            continue;
        }

        // Comments
        if (char === '#') {
            let comment = '';
            while (i < command.length && command[i] !== '\n') {
                comment += command[i];
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
            while (i < command.length && command[i] !== '"') {
                if (command[i] === '\\' && i + 1 < command.length) {
                    str += command[i] + command[i + 1];
                    i += 2;
                } else {
                    str += command[i];
                    i++;
                }
            }
            if (i < command.length) {
                str += command[i];
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
            while (i < command.length && command[i] !== "'") {
                str += command[i];
                i++;
            }
            if (i < command.length) {
                str += command[i];
                i++;
            }
            tokens.push({
                type: 'string',
                value: str
            });
            continue;
        }

        // Variables
        if (char === '$') {
            let variable = '$';
            i++;

            // Handle ${var} syntax
            if (i < command.length && command[i] === '{') {
                variable += '{';
                i++;
                while (i < command.length && command[i] !== '}') {
                    variable += command[i];
                    i++;
                }
                if (i < command.length) {
                    variable += command[i];
                    i++;
                }
            }
            // Handle $(command) syntax
            else if (i < command.length && command[i] === '(') {
                variable += '(';
                i++;
                let depth = 1;
                while (i < command.length && depth > 0) {
                    if (command[i] === '(') depth++;
                    if (command[i] === ')') depth--;
                    variable += command[i];
                    i++;
                }
            }
            // Handle $var syntax
            else {
                while (i < command.length && /[a-zA-Z0-9_]/.test(command[i])) {
                    variable += command[i];
                    i++;
                }
            }

            tokens.push({
                type: 'variable',
                value: variable
            });
            continue;
        }

        // Multi-character operators
        if (i + 1 < command.length) {
            const twoChar = command.substring(i, i + 2);
            if (['&&', '||', '>>', '<<', '2>', '2&'].includes(twoChar)) {
                tokens.push({
                    type: 'operator',
                    value: twoChar
                });
                i += 2;
                continue;
            }
        }

        // Single-character operators and special characters
        if (['|', '>', '<', ';', '&', '(', ')', '[', ']', '{', '}', '!', '='].includes(char)) {
            tokens.push({
                type: 'operator',
                value: char
            });
            i++;
            continue;
        }

        // Options (flags starting with -)
        if (char === '-' && i + 1 < command.length && /[a-zA-Z]/.test(command[i + 1])) {
            let option = '-';
            i++;
            while (i < command.length && /[a-zA-Z0-9]/.test(command[i])) {
                option += command[i];
                i++;
            }
            tokens.push({
                type: 'option',
                value: option
            });
            continue;
        }

        // Numbers
        if (/\d/.test(char)) {
            let number = '';
            while (i < command.length && /\d/.test(command[i])) {
                number += command[i];
                i++;
            }
            tokens.push({
                type: 'number',
                value: number
            });
            continue;
        }

        // Words (commands, keywords, identifiers)
        if (/[a-zA-Z_/.]/.test(char)) {
            let word = '';
            while (i < command.length && /[a-zA-Z0-9_/.:-]/.test(command[i])) {
                word += command[i];
                i++;
            }

            // Determine if it's a keyword, builtin, or command
            const lower = word.toLowerCase();
            let type = 'identifier';

            const keywords = ['if', 'then', 'else', 'elif', 'fi', 'for', 'while', 'until', 'do', 'done', 'case', 'esac', 'in', 'function'];
            const builtins = ['echo', 'cd', 'pwd', 'export', 'read', 'source', 'alias', 'unalias', 'exit', 'return', 'set', 'unset', 'shift', 'test', 'printf'];

            if (keywords.includes(lower)) {
                type = 'keyword';
            } else if (builtins.includes(lower)) {
                type = 'builtin';
            } else {
                type = 'command';
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
