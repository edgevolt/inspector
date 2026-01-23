// Elastic Event Query Language (EQL) Knowledge Base

export const eqlKnowledge = {
    // Query Type Keywords
    queryTypes: {
        'any': {
            type: 'keyword',
            description: 'Match any event category',
            syntax: 'any where <condition>',
            example: 'any where process.name == "cmd.exe"',
            details: 'Matches events of any category that satisfy the condition.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'sequence': {
            type: 'keyword',
            description: 'Match ordered sequence of events',
            syntax: 'sequence [by <field>] [with maxspan=<time>]',
            example: 'sequence by user.name [process where ...] [file where ...]',
            details: 'Matches an ordered sequence of events. Use "by" to correlate events and "maxspan" to limit time window.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-sequences.html'
        },
        'sample': {
            type: 'keyword',
            description: 'Random sampling of events',
            syntax: 'sample [by <field>]',
            example: 'sample by host.name [any where ...]',
            details: 'Returns a random sample of events, optionally grouped by a field.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'where': {
            type: 'keyword',
            description: 'Filter condition',
            syntax: 'where <condition>',
            example: 'process where process.name == "powershell.exe"',
            details: 'Specifies the filtering condition for events.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'by': {
            type: 'keyword',
            description: 'Join/group by field',
            syntax: 'by <field>',
            example: 'sequence by user.name',
            details: 'Joins sequence events or groups results by the specified field.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-sequences.html'
        },
        'with': {
            type: 'keyword',
            description: 'Sequence constraints',
            syntax: 'with maxspan=<time>',
            example: 'sequence with maxspan=5m',
            details: 'Specifies constraints for sequence queries, such as maximum time span.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-sequences.html'
        },
        'until': {
            type: 'keyword',
            description: 'Sequence termination',
            syntax: 'until [<event>]',
            example: 'sequence [...] [...] until [process where event.action == "end"]',
            details: 'Specifies a terminating event for a sequence.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-sequences.html'
        },
        'maxspan': {
            type: 'keyword',
            description: 'Maximum time span',
            syntax: 'maxspan=<time>',
            example: 'maxspan=5m',
            details: 'Maximum time between first and last event in a sequence.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-sequences.html'
        }
    },

    // Event Categories
    eventCategories: {
        'process': {
            type: 'keyword',
            description: 'Process events',
            example: 'process where process.name == "cmd.exe"',
            details: 'Events related to process creation, execution, and termination.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-process.html'
        },
        'file': {
            type: 'keyword',
            description: 'File events',
            example: 'file where file.extension == "exe"',
            details: 'Events related to file creation, modification, deletion, and access.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-file.html'
        },
        'network': {
            type: 'keyword',
            description: 'Network events',
            example: 'network where destination.port == 443',
            details: 'Events related to network connections and traffic.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-network.html'
        },
        'registry': {
            type: 'keyword',
            description: 'Registry events',
            example: 'registry where registry.key like "HKLM\\\\Software\\\\%"',
            details: 'Events related to Windows registry modifications.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-registry.html'
        },
        'dns': {
            type: 'keyword',
            description: 'DNS events',
            example: 'dns where dns.question.name like "*.evil.com"',
            details: 'Events related to DNS queries and responses.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-dns.html'
        },
        'authentication': {
            type: 'keyword',
            description: 'Authentication events',
            example: 'authentication where event.outcome == "failure"',
            details: 'Events related to user authentication and login attempts.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-authentication.html'
        }
    },

    // Logical Operators
    logicalOperators: {
        'and': {
            type: 'operator',
            description: 'Logical AND',
            details: 'Both conditions must be true.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'or': {
            type: 'operator',
            description: 'Logical OR',
            details: 'At least one condition must be true.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'not': {
            type: 'operator',
            description: 'Logical NOT',
            details: 'Negates a condition.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        }
    },

    // String Functions
    stringFunctions: {
        'concat': {
            type: 'function',
            description: 'Concatenate strings',
            syntax: 'concat(str1, str2, ...)',
            example: 'concat(user.name, "@", user.domain)',
            details: 'Combines multiple strings into one.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'endsWith': {
            type: 'function',
            description: 'Check if string ends with suffix',
            syntax: 'endsWith(string, suffix)',
            example: 'endsWith(file.name, ".exe")',
            details: 'Returns true if the string ends with the specified suffix.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'indexOf': {
            type: 'function',
            description: 'Find substring position',
            syntax: 'indexOf(string, substring, [start])',
            example: 'indexOf(process.command_line, "powershell")',
            details: 'Returns the position of the first occurrence of a substring.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'length': {
            type: 'function',
            description: 'String length',
            syntax: 'length(string)',
            example: 'length(process.command_line) > 1000',
            details: 'Returns the number of characters in a string.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'startsWith': {
            type: 'function',
            description: 'Check if string starts with prefix',
            syntax: 'startsWith(string, prefix)',
            example: 'startsWith(process.name, "cmd")',
            details: 'Returns true if the string starts with the specified prefix.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'string': {
            type: 'function',
            description: 'Convert to string',
            syntax: 'string(value)',
            example: 'string(process.pid)',
            details: 'Converts a value to its string representation.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'stringContains': {
            type: 'function',
            description: 'Check if string contains substring',
            syntax: 'stringContains(string, substring)',
            example: 'stringContains(process.command_line, "invoke-expression")',
            details: 'Returns true if the string contains the substring.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'substring': {
            type: 'function',
            description: 'Extract substring',
            syntax: 'substring(string, start, [end])',
            example: 'substring(file.name, 0, 5)',
            details: 'Extracts a portion of a string.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'toLowerCase': {
            type: 'function',
            description: 'Convert to lowercase',
            syntax: 'toLowerCase(string)',
            example: 'toLowerCase(user.name) == "admin"',
            details: 'Converts a string to lowercase.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'toUpperCase': {
            type: 'function',
            description: 'Convert to uppercase',
            syntax: 'toUpperCase(string)',
            example: 'toUpperCase(process.name)',
            details: 'Converts a string to uppercase.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        }
    },

    // Math Functions
    mathFunctions: {
        'add': {
            type: 'function',
            description: 'Addition',
            syntax: 'add(num1, num2)',
            example: 'add(source.bytes, destination.bytes)',
            details: 'Adds two numbers.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'divide': {
            type: 'function',
            description: 'Division',
            syntax: 'divide(num1, num2)',
            example: 'divide(file.size, 1024)',
            details: 'Divides the first number by the second.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'modulo': {
            type: 'function',
            description: 'Modulo operation',
            syntax: 'modulo(num1, num2)',
            example: 'modulo(process.pid, 2) == 0',
            details: 'Returns the remainder after division.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'multiply': {
            type: 'function',
            description: 'Multiplication',
            syntax: 'multiply(num1, num2)',
            example: 'multiply(file.size, 8)',
            details: 'Multiplies two numbers.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'subtract': {
            type: 'function',
            description: 'Subtraction',
            syntax: 'subtract(num1, num2)',
            example: 'subtract(destination.bytes, source.bytes)',
            details: 'Subtracts the second number from the first.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'abs': {
            type: 'function',
            description: 'Absolute value',
            syntax: 'abs(number)',
            example: 'abs(subtract(a, b))',
            details: 'Returns the absolute value of a number.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'ceil': {
            type: 'function',
            description: 'Round up',
            syntax: 'ceil(number)',
            example: 'ceil(divide(file.size, 1024))',
            details: 'Rounds a number up to the nearest integer.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'floor': {
            type: 'function',
            description: 'Round down',
            syntax: 'floor(number)',
            example: 'floor(divide(file.size, 1024))',
            details: 'Rounds a number down to the nearest integer.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'round': {
            type: 'function',
            description: 'Round to nearest',
            syntax: 'round(number, [decimals])',
            example: 'round(divide(file.size, 1024), 2)',
            details: 'Rounds a number to the specified number of decimal places.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        }
    },

    // Array Functions
    arrayFunctions: {
        'arrayContains': {
            type: 'function',
            description: 'Check if array contains value',
            syntax: 'arrayContains(array, value)',
            example: 'arrayContains(process.args, "--exec")',
            details: 'Returns true if the array contains the specified value.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'arrayCount': {
            type: 'function',
            description: 'Count array elements',
            syntax: 'arrayCount(array)',
            example: 'arrayCount(process.args) > 5',
            details: 'Returns the number of elements in an array.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'arraySearch': {
            type: 'function',
            description: 'Search array with condition',
            syntax: 'arraySearch(array, var, condition)',
            example: 'arraySearch(process.args, arg, startsWith(arg, "-"))',
            details: 'Searches an array for elements matching a condition.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        }
    },

    // Type Conversion Functions
    conversionFunctions: {
        'number': {
            type: 'function',
            description: 'Convert to number',
            syntax: 'number(value, [default])',
            example: 'number(process.exit_code, 0)',
            details: 'Converts a value to a number. Returns default if conversion fails.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'boolean': {
            type: 'function',
            description: 'Convert to boolean',
            syntax: 'boolean(value)',
            example: 'boolean(process.interactive)',
            details: 'Converts a value to a boolean.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        }
    },

    // Conditional Functions
    conditionalFunctions: {
        'if': {
            type: 'function',
            description: 'Conditional expression',
            syntax: 'if(condition, true_value, false_value)',
            example: 'if(process.pid > 1000, "high", "low")',
            details: 'Returns one value if condition is true, another if false.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        },
        'coalesce': {
            type: 'function',
            description: 'Return first non-null value',
            syntax: 'coalesce(value1, value2, ...)',
            example: 'coalesce(user.name, user.id, "unknown")',
            details: 'Returns the first non-null value from the list.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        }
    },

    // Network Functions
    networkFunctions: {
        'cidrMatch': {
            type: 'function',
            description: 'Check if IP matches CIDR',
            syntax: 'cidrMatch(ip, cidr1, cidr2, ...)',
            example: 'cidrMatch(source.ip, "10.0.0.0/8", "192.168.0.0/16")',
            details: 'Returns true if the IP address matches any of the CIDR ranges.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        }
    },

    // Time Functions
    timeFunctions: {
        'now': {
            type: 'function',
            description: 'Current timestamp',
            syntax: 'now()',
            example: 'now()',
            details: 'Returns the current timestamp.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-functions.html'
        }
    },

    // Pipe Commands
    pipeCommands: {
        'head': {
            type: 'pipe',
            description: 'Limit results',
            syntax: '| head <count>',
            example: '| head 10',
            details: 'Returns the first N results.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-pipes.html'
        },
        'tail': {
            type: 'pipe',
            description: 'Get last N results',
            syntax: '| tail <count>',
            example: '| tail 10',
            details: 'Returns the last N results.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-pipes.html'
        },
        'count': {
            type: 'pipe',
            description: 'Count events',
            syntax: '| count',
            example: '| count',
            details: 'Returns the count of matching events.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-pipes.html'
        },
        'unique': {
            type: 'pipe',
            description: 'Get unique values',
            syntax: '| unique <field>',
            example: '| unique process.name',
            details: 'Returns unique values for the specified field.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-pipes.html'
        },
        'sort': {
            type: 'pipe',
            description: 'Sort results',
            syntax: '| sort <field> [asc|desc]',
            example: '| sort @timestamp desc',
            details: 'Sorts results by the specified field.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-pipes.html'
        },
        'filter': {
            type: 'pipe',
            description: 'Additional filtering',
            syntax: '| filter <condition>',
            example: '| filter process.pid > 1000',
            details: 'Applies additional filtering to the results.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-pipes.html'
        }
    },

    // String Operators
    stringOperators: {
        'like': {
            type: 'operator',
            description: 'Pattern matching (case-sensitive)',
            syntax: 'field like "pattern"',
            example: 'file.name like "*.exe"',
            details: 'Matches strings using wildcards (* for any characters, ? for single character).',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'like~': {
            type: 'operator',
            description: 'Pattern matching (case-insensitive)',
            syntax: 'field like~ "pattern"',
            example: 'process.name like~ "CMD.*"',
            details: 'Case-insensitive version of like operator.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'regex': {
            type: 'operator',
            description: 'Regular expression matching (case-sensitive)',
            syntax: 'field regex "pattern"',
            example: 'process.command_line regex ".*powershell.*"',
            details: 'Matches strings using regular expressions.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        },
        'regex~': {
            type: 'operator',
            description: 'Regular expression matching (case-insensitive)',
            syntax: 'field regex~ "pattern"',
            example: 'file.extension regex~ "exe|dll"',
            details: 'Case-insensitive version of regex operator.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/eql-syntax.html'
        }
    },

    // Common Event Fields
    commonFields: {
        '@timestamp': {
            type: 'field',
            description: 'Event timestamp',
            category: 'Event',
            details: 'The timestamp when the event occurred.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-base.html'
        },
        'event.category': {
            type: 'field',
            description: 'Event category',
            category: 'Event',
            details: 'High-level event category (process, file, network, etc.).',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-event.html'
        },
        'event.action': {
            type: 'field',
            description: 'Event action',
            category: 'Event',
            details: 'Specific action taken (creation, deletion, execution, etc.).',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-event.html'
        },
        'event.outcome': {
            type: 'field',
            description: 'Event outcome',
            category: 'Event',
            details: 'Outcome of the event (success, failure, unknown).',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-event.html'
        },
        'process.name': {
            type: 'field',
            description: 'Process name',
            category: 'Process',
            details: 'Name of the process executable.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-process.html'
        },
        'process.pid': {
            type: 'field',
            description: 'Process ID',
            category: 'Process',
            details: 'Process identifier.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-process.html'
        },
        'process.parent.name': {
            type: 'field',
            description: 'Parent process name',
            category: 'Process',
            details: 'Name of the parent process.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-process.html'
        },
        'process.command_line': {
            type: 'field',
            description: 'Process command line',
            category: 'Process',
            details: 'Full command line used to start the process.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-process.html'
        },
        'process.executable': {
            type: 'field',
            description: 'Process executable path',
            category: 'Process',
            details: 'Full path to the process executable.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-process.html'
        },
        'file.name': {
            type: 'field',
            description: 'File name',
            category: 'File',
            details: 'Name of the file.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-file.html'
        },
        'file.path': {
            type: 'field',
            description: 'File path',
            category: 'File',
            details: 'Full path to the file.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-file.html'
        },
        'file.extension': {
            type: 'field',
            description: 'File extension',
            category: 'File',
            details: 'File extension without the leading dot.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-file.html'
        },
        'source.ip': {
            type: 'field',
            description: 'Source IP address',
            category: 'Network',
            details: 'Source IP address.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-source.html'
        },
        'source.port': {
            type: 'field',
            description: 'Source port',
            category: 'Network',
            details: 'Source port number.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-source.html'
        },
        'destination.ip': {
            type: 'field',
            description: 'Destination IP address',
            category: 'Network',
            details: 'Destination IP address.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-destination.html'
        },
        'destination.port': {
            type: 'field',
            description: 'Destination port',
            category: 'Network',
            details: 'Destination port number.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-destination.html'
        },
        'user.name': {
            type: 'field',
            description: 'Username',
            category: 'User',
            details: 'Username associated with the event.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-user.html'
        },
        'user.domain': {
            type: 'field',
            description: 'User domain',
            category: 'User',
            details: 'Domain of the user.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-user.html'
        },
        'host.name': {
            type: 'field',
            description: 'Hostname',
            category: 'Host',
            details: 'Name of the host.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-host.html'
        },
        'host.os.name': {
            type: 'field',
            description: 'Operating system name',
            category: 'Host',
            details: 'Name of the operating system.',
            docUrl: 'https://www.elastic.co/guide/en/ecs/current/ecs-host.html'
        }
    }
};

// Helper function to get explanation for any token
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();

    // Check all knowledge base categories
    const allCategories = [
        eqlKnowledge.queryTypes,
        eqlKnowledge.eventCategories,
        eqlKnowledge.logicalOperators,
        eqlKnowledge.stringFunctions,
        eqlKnowledge.mathFunctions,
        eqlKnowledge.arrayFunctions,
        eqlKnowledge.conversionFunctions,
        eqlKnowledge.conditionalFunctions,
        eqlKnowledge.networkFunctions,
        eqlKnowledge.timeFunctions,
        eqlKnowledge.pipeCommands,
        eqlKnowledge.stringOperators,
        eqlKnowledge.commonFields
    ];

    for (const category of allCategories) {
        // Try lowercase
        if (category[lowerToken]) {
            return category[lowerToken];
        }
        // Try exact match
        if (category[token]) {
            return category[token];
        }
    }

    // Default explanations for unknown tokens
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String literal value',
            details: 'A text value enclosed in quotes.'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: 'A numeric literal used in calculations or comparisons.'
        };
    }

    if (tokenType === 'field') {
        return {
            type: 'field',
            description: 'Field reference',
            details: `Field reference: ${token}. This may be an ECS field or custom field.`
        };
    }

    if (tokenType === 'pipe') {
        return {
            type: 'pipe',
            description: 'Pipe operator',
            details: 'Connects query with pipe commands for post-processing.'
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized.'
    };
}
