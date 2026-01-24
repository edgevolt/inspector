// Google Chronicle Yara-L Detection Language Knowledge Base

export const yaralKnowledge = {
    // Rule Structure Keywords
    ruleStructure: {
        'rule': {
            type: 'keyword',
            description: 'Rule declaration',
            syntax: 'rule <rule_name> { ... }',
            example: 'rule suspicious_powershell { ... }',
            details: 'Declares a new Yara-L detection rule with a unique name.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'meta': {
            type: 'keyword',
            description: 'Metadata section',
            syntax: 'meta: <key> = <value>',
            example: 'meta:\n  author = "Security Team"\n  severity = "High"',
            details: 'Contains rule metadata like author, description, severity, and MITRE ATT&CK mappings.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'events': {
            type: 'keyword',
            description: 'Event matching section',
            syntax: 'events: <event_declarations>',
            example: 'events:\n  $e.metadata.event_type = "PROCESS_LAUNCH"',
            details: 'Defines the events to match against using UDM fields and conditions.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'match': {
            type: 'keyword',
            description: 'Multi-event correlation',
            syntax: 'match: <correlation_logic>',
            example: 'match:\n  $e1.principal.hostname = $e2.principal.hostname',
            details: 'Correlates multiple events based on common field values.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'condition': {
            type: 'keyword',
            description: 'Logic conditions',
            syntax: 'condition: <boolean_expression>',
            example: 'condition:\n  $e and #e > 5',
            details: 'Specifies the boolean logic that must be satisfied for the rule to trigger.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'outcome': {
            type: 'keyword',
            description: 'Alert definition',
            syntax: 'outcome: <outcome_fields>',
            example: 'outcome:\n  $risk_score = 85\n  $severity = "High"',
            details: 'Defines the alert properties when the rule matches.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'options': {
            type: 'keyword',
            description: 'Rule options',
            syntax: 'options: <option_settings>',
            example: 'options:\n  max_matches = 1000',
            details: 'Configures rule execution options and limits.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        }
    },

    // Event Types
    eventTypes: {
        'PROCESS_LAUNCH': {
            type: 'keyword',
            description: 'Process execution event',
            example: '$e.metadata.event_type = "PROCESS_LAUNCH"',
            details: 'Events related to process creation and execution.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        },
        'NETWORK_CONNECTION': {
            type: 'keyword',
            description: 'Network connection event',
            example: '$e.metadata.event_type = "NETWORK_CONNECTION"',
            details: 'Events related to network connections.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        },
        'FILE_CREATION': {
            type: 'keyword',
            description: 'File creation event',
            example: '$e.metadata.event_type = "FILE_CREATION"',
            details: 'Events related to file creation.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        },
        'FILE_MODIFICATION': {
            type: 'keyword',
            description: 'File modification event',
            example: '$e.metadata.event_type = "FILE_MODIFICATION"',
            details: 'Events related to file modifications.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        },
        'FILE_DELETION': {
            type: 'keyword',
            description: 'File deletion event',
            example: '$e.metadata.event_type = "FILE_DELETION"',
            details: 'Events related to file deletion.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        },
        'REGISTRY_MODIFICATION': {
            type: 'keyword',
            description: 'Registry modification event',
            example: '$e.metadata.event_type = "REGISTRY_MODIFICATION"',
            details: 'Events related to Windows registry changes.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        },
        'USER_LOGIN': {
            type: 'keyword',
            description: 'User login event',
            example: '$e.metadata.event_type = "USER_LOGIN"',
            details: 'Events related to user authentication.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        },
        'USER_LOGOUT': {
            type: 'keyword',
            description: 'User logout event',
            example: '$e.metadata.event_type = "USER_LOGOUT"',
            details: 'Events related to user logout.',
            docUrl: 'https://cloud.google.com/chronicle/docs/reference/udm-field-list'
        }
    },

    // Comparison Operators
    comparisonOperators: {
        '=': {
            type: 'operator',
            description: 'Equality',
            details: 'Checks if two values are equal.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        '!=': {
            type: 'operator',
            description: 'Inequality',
            details: 'Checks if two values are not equal.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        '<': {
            type: 'operator',
            description: 'Less than',
            details: 'Checks if left value is less than right value.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        '>': {
            type: 'operator',
            description: 'Greater than',
            details: 'Checks if left value is greater than right value.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        '<=': {
            type: 'operator',
            description: 'Less than or equal',
            details: 'Checks if left value is less than or equal to right value.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        '>=': {
            type: 'operator',
            description: 'Greater than or equal',
            details: 'Checks if left value is greater than or equal to right value.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        '=~': {
            type: 'operator',
            description: 'Regex match',
            syntax: 'field =~ /pattern/',
            example: '$e.principal.hostname =~ /^web-/',
            details: 'Matches field against a regular expression pattern.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        }
    },

    // Logical Operators
    logicalOperators: {
        'and': {
            type: 'operator',
            description: 'Logical AND',
            details: 'Both conditions must be true.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'or': {
            type: 'operator',
            description: 'Logical OR',
            details: 'At least one condition must be true.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'not': {
            type: 'operator',
            description: 'Logical NOT',
            details: 'Negates a condition.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        }
    },

    // String Operators
    stringOperators: {
        'contains': {
            type: 'operator',
            description: 'String contains (case-sensitive)',
            syntax: 'field contains "substring"',
            example: '$e.principal.process.command_line contains "powershell"',
            details: 'Checks if a string contains a substring (case-sensitive).',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'icontains': {
            type: 'operator',
            description: 'String contains (case-insensitive)',
            syntax: 'field icontains "substring"',
            example: '$e.principal.process.command_line icontains "POWERSHELL"',
            details: 'Checks if a string contains a substring (case-insensitive).',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        },
        'in': {
            type: 'operator',
            description: 'Set membership',
            syntax: 'value in [list]',
            example: '$e.target.port in [80, 443, 8080]',
            details: 'Checks if a value is in a list.',
            docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-syntax'
        }
    }
};

// String Functions (continued in next section due to size)
yaralKnowledge.stringFunctions = {
    'strings.concat': {
        type: 'function',
        description: 'Concatenate strings',
        syntax: 'strings.concat(str1, str2, ...)',
        example: 'strings.concat($e.principal.hostname, "-", $e.principal.user.userid)',
        details: 'Combines multiple strings into one.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.to_lower': {
        type: 'function',
        description: 'Convert to lowercase',
        syntax: 'strings.to_lower(string)',
        example: 'strings.to_lower($e.principal.hostname)',
        details: 'Converts a string to lowercase.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.to_upper': {
        type: 'function',
        description: 'Convert to uppercase',
        syntax: 'strings.to_upper(string)',
        example: 'strings.to_upper($e.principal.user.userid)',
        details: 'Converts a string to uppercase.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.contains': {
        type: 'function',
        description: 'Check substring',
        syntax: 'strings.contains(string, substring)',
        example: 'strings.contains($e.principal.process.command_line, "invoke-expression")',
        details: 'Returns true if string contains substring (case-sensitive).',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.icontains': {
        type: 'function',
        description: 'Case-insensitive contains',
        syntax: 'strings.icontains(string, substring)',
        example: 'strings.icontains($e.principal.hostname, "ADMIN")',
        details: 'Returns true if string contains substring (case-insensitive).',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.starts_with': {
        type: 'function',
        description: 'Check prefix',
        syntax: 'strings.starts_with(string, prefix)',
        example: 'strings.starts_with($e.principal.hostname, "web-")',
        details: 'Returns true if string starts with prefix.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.ends_with': {
        type: 'function',
        description: 'Check suffix',
        syntax: 'strings.ends_with(string, suffix)',
        example: 'strings.ends_with($e.target.file.full_path, ".exe")',
        details: 'Returns true if string ends with suffix.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.substr': {
        type: 'function',
        description: 'Extract substring',
        syntax: 'strings.substr(string, start, length)',
        example: 'strings.substr($e.principal.hostname, 0, 5)',
        details: 'Extracts a substring from the specified position.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.replace': {
        type: 'function',
        description: 'Replace substring',
        syntax: 'strings.replace(string, old, new)',
        example: 'strings.replace($e.principal.hostname, "-", "_")',
        details: 'Replaces all occurrences of a substring.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.split': {
        type: 'function',
        description: 'Split string',
        syntax: 'strings.split(string, delimiter)',
        example: 'strings.split($e.principal.process.command_line, " ")',
        details: 'Splits a string into an array using a delimiter.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.join': {
        type: 'function',
        description: 'Join array to string',
        syntax: 'strings.join(array, delimiter)',
        example: 'strings.join($e.principal.process.command_line_args, " ")',
        details: 'Joins array elements into a string with a delimiter.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.trim': {
        type: 'function',
        description: 'Remove whitespace',
        syntax: 'strings.trim(string)',
        example: 'strings.trim($e.principal.user.userid)',
        details: 'Removes leading and trailing whitespace.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.length': {
        type: 'function',
        description: 'String length',
        syntax: 'strings.length(string)',
        example: 'strings.length($e.principal.process.command_line) > 1000',
        details: 'Returns the number of characters in a string.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'strings.coalesce': {
        type: 'function',
        description: 'First non-null value',
        syntax: 'strings.coalesce(value1, value2, ...)',
        example: 'strings.coalesce($e.principal.user.userid, "unknown")',
        details: 'Returns the first non-null value from the list.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    }
};

// Regular Expression Functions
yaralKnowledge.regexFunctions = {
    're.regex': {
        type: 'function',
        description: 'Regex matching',
        syntax: 're.regex(string, pattern)',
        example: 're.regex($e.principal.hostname, `^web-\\d+$`)',
        details: 'Returns true if string matches the regex pattern.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    're.iregex': {
        type: 'function',
        description: 'Case-insensitive regex',
        syntax: 're.iregex(string, pattern)',
        example: 're.iregex($e.principal.process.file.full_path, `.*powershell.*`)',
        details: 'Case-insensitive regex matching.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    're.capture': {
        type: 'function',
        description: 'Capture groups',
        syntax: 're.capture(string, pattern)',
        example: 're.capture($e.principal.hostname, `^(\\w+)-`)',
        details: 'Extracts captured groups from regex match.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    're.replace': {
        type: 'function',
        description: 'Regex replace',
        syntax: 're.replace(string, pattern, replacement)',
        example: 're.replace($e.principal.hostname, `\\d+`, "X")',
        details: 'Replaces matches of a regex pattern.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    }
};

// Network Functions
yaralKnowledge.networkFunctions = {
    'net.ip_in_range_cidr': {
        type: 'function',
        description: 'CIDR range check',
        syntax: 'net.ip_in_range_cidr(ip, cidr)',
        example: 'net.ip_in_range_cidr($e.principal.ip, "10.0.0.0/8")',
        details: 'Returns true if IP is within the CIDR range.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'net.is_internal_ip': {
        type: 'function',
        description: 'Check if internal IP',
        syntax: 'net.is_internal_ip(ip)',
        example: 'net.is_internal_ip($e.principal.ip)',
        details: 'Returns true if IP is in private/internal ranges.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    },
    'net.is_external_ip': {
        type: 'function',
        description: 'Check if external IP',
        syntax: 'net.is_external_ip(ip)',
        example: 'net.is_external_ip($e.target.ip)',
        details: 'Returns true if IP is external/public.',
        docUrl: 'https://cloud.google.com/chronicle/docs/detection/yara-l-2-0-functions'
    }
};

// Export helper function
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();
    
    const allCategories = [
        yaralKnowledge.ruleStructure,
        yaralKnowledge.eventTypes,
        yaralKnowledge.comparisonOperators,
        yaralKnowledge.logicalOperators,
        yaralKnowledge.stringOperators,
        yaralKnowledge.stringFunctions,
        yaralKnowledge.regexFunctions,
        yaralKnowledge.networkFunctions
    ];
    
    for (const category of allCategories) {
        if (category[lowerToken]) return category[lowerToken];
        if (category[token]) return category[token];
    }
    
    if (tokenType === 'string') {
        return { type: 'string', description: 'String literal', details: 'A text value enclosed in quotes.' };
    }
    if (tokenType === 'number') {
        return { type: 'number', description: 'Numeric value', details: 'A numeric literal.' };
    }
    if (tokenType === 'field') {
        return { type: 'field', description: 'UDM field reference', details: `Field: ${token}` };
    }
    if (tokenType === 'variable') {
        return { type: 'variable', description: 'Event variable', details: `Event variable: ${token}` };
    }
    
    return { type: 'unknown', description: token, details: 'Token type not recognized.' };
}
