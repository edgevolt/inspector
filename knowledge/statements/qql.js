// Qualys Query Language (QQL) Knowledge Base

export const qqlKnowledge = {
    // Comparison Operators
    comparisonOperators: {
        '=': {
            type: 'operator',
            description: 'Equals',
            syntax: 'field = value',
            example: 'asset.severity = 5',
            details: 'Checks if the field value equals the specified value. Case-sensitive for strings.',
            docUrl: 'https://docs.qualys.com'
        },
        '!=': {
            type: 'operator',
            description: 'Not equals',
            syntax: 'field != value',
            example: 'detection.status != "Fixed"',
            details: 'Checks if the field value does not equal the specified value.',
            docUrl: 'https://docs.qualys.com'
        },
        '>': {
            type: 'operator',
            description: 'Greater than',
            syntax: 'field > value',
            example: 'vuln.cvss > 7.0',
            details: 'Checks if the field value is greater than the specified value. Works with numbers and dates.',
            docUrl: 'https://docs.qualys.com'
        },
        '<': {
            type: 'operator',
            description: 'Less than',
            syntax: 'field < value',
            example: 'asset.lastScanned < daysAgo(30)',
            details: 'Checks if the field value is less than the specified value. Works with numbers and dates.',
            docUrl: 'https://docs.qualys.com'
        },
        '>=': {
            type: 'operator',
            description: 'Greater than or equal',
            syntax: 'field >= value',
            example: 'vuln.severity >= 4',
            details: 'Checks if the field value is greater than or equal to the specified value.',
            docUrl: 'https://docs.qualys.com'
        },
        '<=': {
            type: 'operator',
            description: 'Less than or equal',
            syntax: 'field <= value',
            example: 'detection.port <= 1024',
            details: 'Checks if the field value is less than or equal to the specified value.',
            docUrl: 'https://docs.qualys.com'
        },
        '~': {
            type: 'operator',
            description: 'Regex match',
            syntax: 'field ~ "pattern"',
            example: 'asset.name ~ "web.*server"',
            details: 'Performs regular expression matching on string fields. Case-sensitive.',
            docUrl: 'https://docs.qualys.com'
        },
        '!~': {
            type: 'operator',
            description: 'Regex not match',
            syntax: 'field !~ "pattern"',
            example: 'asset.os !~ "Windows.*"',
            details: 'Checks if the field does not match the regular expression pattern.',
            docUrl: 'https://docs.qualys.com'
        },
        'is null': {
            type: 'operator',
            description: 'Null check',
            syntax: 'field is null',
            example: 'asset.owner is null',
            details: 'Checks if the field value is null or not set.',
            docUrl: 'https://docs.qualys.com'
        },
        'is not null': {
            type: 'operator',
            description: 'Not null check',
            syntax: 'field is not null',
            example: 'asset.tags is not null',
            details: 'Checks if the field has a value (is not null).',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Logical Operators
    logicalOperators: {
        'and': {
            type: 'operator',
            description: 'Logical AND',
            syntax: 'condition1 and condition2',
            example: 'vuln.severity = 5 and detection.status = "Active"',
            details: 'Both conditions must be true for the result to be true. Use to combine multiple filter criteria.',
            docUrl: 'https://docs.qualys.com'
        },
        'or': {
            type: 'operator',
            description: 'Logical OR',
            syntax: 'condition1 or condition2',
            example: 'asset.os ~ "Windows" or asset.os ~ "Linux"',
            details: 'At least one condition must be true for the result to be true.',
            docUrl: 'https://docs.qualys.com'
        },
        'not': {
            type: 'operator',
            description: 'Logical NOT',
            syntax: 'not condition',
            example: 'not (detection.status = "Fixed")',
            details: 'Negates the boolean result of a condition.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Special Operators
    specialOperators: {
        'in': {
            type: 'operator',
            description: 'Value in list',
            syntax: 'field in (value1, value2, ...)',
            example: 'vuln.severity in (4, 5)',
            details: 'Checks if the field value matches any value in the provided list.',
            docUrl: 'https://docs.qualys.com'
        },
        'not in': {
            type: 'operator',
            description: 'Value not in list',
            syntax: 'field not in (value1, value2, ...)',
            example: 'detection.status not in ("Fixed", "Ignored")',
            details: 'Checks if the field value does not match any value in the provided list.',
            docUrl: 'https://docs.qualys.com'
        },
        'contains': {
            type: 'operator',
            description: 'String contains',
            syntax: 'field contains "substring"',
            example: 'vuln.title contains "SQL Injection"',
            details: 'Checks if a string field contains the specified substring. Case-insensitive.',
            docUrl: 'https://docs.qualys.com'
        },
        'between': {
            type: 'operator',
            description: 'Range check',
            syntax: 'field between value1 and value2',
            example: 'vuln.cvss between 7.0 and 10.0',
            details: 'Checks if the field value falls within the specified range (inclusive).',
            docUrl: 'https://docs.qualys.com'
        },
        'like': {
            type: 'operator',
            description: 'Pattern matching',
            syntax: 'field like "pattern"',
            example: 'asset.name like "web%"',
            details: 'SQL-style pattern matching. Use % for wildcard, _ for single character.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // String Functions
    stringFunctions: {
        'upper': {
            type: 'function',
            description: 'Convert to uppercase',
            syntax: 'upper(string)',
            example: 'upper(asset.name) = "WEBSERVER"',
            details: 'Converts a string to uppercase for case-insensitive comparisons.',
            docUrl: 'https://docs.qualys.com'
        },
        'lower': {
            type: 'function',
            description: 'Convert to lowercase',
            syntax: 'lower(string)',
            example: 'lower(asset.os) contains "windows"',
            details: 'Converts a string to lowercase for case-insensitive comparisons.',
            docUrl: 'https://docs.qualys.com'
        },
        'trim': {
            type: 'function',
            description: 'Remove whitespace',
            syntax: 'trim(string)',
            example: 'trim(asset.name) = "WebServer"',
            details: 'Removes leading and trailing whitespace from a string.',
            docUrl: 'https://docs.qualys.com'
        },
        'ltrim': {
            type: 'function',
            description: 'Left trim',
            syntax: 'ltrim(string)',
            example: 'ltrim(asset.name)',
            details: 'Removes leading whitespace from a string.',
            docUrl: 'https://docs.qualys.com'
        },
        'rtrim': {
            type: 'function',
            description: 'Right trim',
            syntax: 'rtrim(string)',
            example: 'rtrim(asset.name)',
            details: 'Removes trailing whitespace from a string.',
            docUrl: 'https://docs.qualys.com'
        },
        'substring': {
            type: 'function',
            description: 'Extract substring',
            syntax: 'substring(string, start, length)',
            example: 'substring(asset.ip, 1, 3) = "192"',
            details: 'Extracts a portion of a string starting at the specified position.',
            docUrl: 'https://docs.qualys.com'
        },
        'concat': {
            type: 'function',
            description: 'Concatenate strings',
            syntax: 'concat(string1, string2, ...)',
            example: 'concat(asset.name, "-", asset.location)',
            details: 'Combines multiple strings into a single string.',
            docUrl: 'https://docs.qualys.com'
        },
        'replace': {
            type: 'function',
            description: 'Replace text',
            syntax: 'replace(string, find, replace)',
            example: 'replace(asset.name, "old", "new")',
            details: 'Replaces all occurrences of a substring with another string.',
            docUrl: 'https://docs.qualys.com'
        },
        'length': {
            type: 'function',
            description: 'String length',
            syntax: 'length(string)',
            example: 'length(asset.name) > 20',
            details: 'Returns the number of characters in a string.',
            docUrl: 'https://docs.qualys.com'
        },
        'indexOf': {
            type: 'function',
            description: 'Find position',
            syntax: 'indexOf(string, substring)',
            example: 'indexOf(asset.name, "web") > 0',
            details: 'Returns the position of the first occurrence of a substring (0-based).',
            docUrl: 'https://docs.qualys.com'
        },
        'startsWith': {
            type: 'function',
            description: 'Starts with check',
            syntax: 'startsWith(string, prefix)',
            example: 'startsWith(asset.name, "web")',
            details: 'Checks if a string starts with the specified prefix.',
            docUrl: 'https://docs.qualys.com'
        },
        'endsWith': {
            type: 'function',
            description: 'Ends with check',
            syntax: 'endsWith(string, suffix)',
            example: 'endsWith(asset.fqdn, ".com")',
            details: 'Checks if a string ends with the specified suffix.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Date/Time Functions
    dateTimeFunctions: {
        'now': {
            type: 'function',
            description: 'Current timestamp',
            syntax: 'now()',
            example: 'detection.lastFound > now() - 86400',
            details: 'Returns the current date and time as a Unix timestamp.',
            docUrl: 'https://docs.qualys.com'
        },
        'today': {
            type: 'function',
            description: 'Current date',
            syntax: 'today()',
            example: 'asset.lastScanned = today()',
            details: 'Returns the current date at midnight (00:00:00).',
            docUrl: 'https://docs.qualys.com'
        },
        'daysAgo': {
            type: 'function',
            description: 'Date N days ago',
            syntax: 'daysAgo(n)',
            example: 'detection.firstFound > daysAgo(30)',
            details: 'Returns a date that is N days in the past from today.',
            docUrl: 'https://docs.qualys.com'
        },
        'weeksAgo': {
            type: 'function',
            description: 'Date N weeks ago',
            syntax: 'weeksAgo(n)',
            example: 'asset.created > weeksAgo(4)',
            details: 'Returns a date that is N weeks in the past from today.',
            docUrl: 'https://docs.qualys.com'
        },
        'monthsAgo': {
            type: 'function',
            description: 'Date N months ago',
            syntax: 'monthsAgo(n)',
            example: 'vuln.published > monthsAgo(6)',
            details: 'Returns a date that is N months in the past from today.',
            docUrl: 'https://docs.qualys.com'
        },
        'yearsAgo': {
            type: 'function',
            description: 'Date N years ago',
            syntax: 'yearsAgo(n)',
            example: 'asset.created > yearsAgo(1)',
            details: 'Returns a date that is N years in the past from today.',
            docUrl: 'https://docs.qualys.com'
        },
        'dateAdd': {
            type: 'function',
            description: 'Add to date',
            syntax: 'dateAdd(date, days)',
            example: 'dateAdd(asset.created, 90)',
            details: 'Adds the specified number of days to a date.',
            docUrl: 'https://docs.qualys.com'
        },
        'dateDiff': {
            type: 'function',
            description: 'Date difference',
            syntax: 'dateDiff(date1, date2)',
            example: 'dateDiff(now(), detection.firstFound) > 30',
            details: 'Returns the difference in days between two dates.',
            docUrl: 'https://docs.qualys.com'
        },
        'dateFormat': {
            type: 'function',
            description: 'Format date',
            syntax: 'dateFormat(date, format)',
            example: 'dateFormat(asset.created, "YYYY-MM-DD")',
            details: 'Formats a date according to the specified format string.',
            docUrl: 'https://docs.qualys.com'
        },
        'dayOfWeek': {
            type: 'function',
            description: 'Day of week',
            syntax: 'dayOfWeek(date)',
            example: 'dayOfWeek(asset.lastScanned) = 1',
            details: 'Returns the day of the week (1=Sunday, 7=Saturday).',
            docUrl: 'https://docs.qualys.com'
        },
        'dayOfMonth': {
            type: 'function',
            description: 'Day of month',
            syntax: 'dayOfMonth(date)',
            example: 'dayOfMonth(asset.created) = 1',
            details: 'Returns the day of the month (1-31).',
            docUrl: 'https://docs.qualys.com'
        },
        'month': {
            type: 'function',
            description: 'Month number',
            syntax: 'month(date)',
            example: 'month(vuln.published) = 12',
            details: 'Returns the month number (1-12).',
            docUrl: 'https://docs.qualys.com'
        },
        'year': {
            type: 'function',
            description: 'Year number',
            syntax: 'year(date)',
            example: 'year(asset.created) = 2024',
            details: 'Returns the four-digit year.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Aggregation Functions
    aggregationFunctions: {
        'count': {
            type: 'function',
            description: 'Count records',
            syntax: 'count()',
            example: 'count() group by asset.os',
            details: 'Returns the number of records in the result set or group.',
            docUrl: 'https://docs.qualys.com'
        },
        'sum': {
            type: 'function',
            description: 'Sum values',
            syntax: 'sum(field)',
            example: 'sum(detection.severity)',
            details: 'Calculates the sum of numeric values in a field.',
            docUrl: 'https://docs.qualys.com'
        },
        'avg': {
            type: 'function',
            description: 'Average value',
            syntax: 'avg(field)',
            example: 'avg(vuln.cvss)',
            details: 'Calculates the average of numeric values in a field.',
            docUrl: 'https://docs.qualys.com'
        },
        'min': {
            type: 'function',
            description: 'Minimum value',
            syntax: 'min(field)',
            example: 'min(detection.firstFound)',
            details: 'Returns the minimum value in a field.',
            docUrl: 'https://docs.qualys.com'
        },
        'max': {
            type: 'function',
            description: 'Maximum value',
            syntax: 'max(field)',
            example: 'max(vuln.severity)',
            details: 'Returns the maximum value in a field.',
            docUrl: 'https://docs.qualys.com'
        },
        'distinct': {
            type: 'function',
            description: 'Distinct values',
            syntax: 'distinct(field)',
            example: 'distinct(asset.os)',
            details: 'Returns unique values from a field, removing duplicates.',
            docUrl: 'https://docs.qualys.com'
        },
        'groupBy': {
            type: 'function',
            description: 'Group results',
            syntax: 'group by field',
            example: 'count() group by asset.location',
            details: 'Groups results by the specified field for aggregation.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Type Conversion Functions
    conversionFunctions: {
        'toString': {
            type: 'function',
            description: 'Convert to string',
            syntax: 'toString(value)',
            example: 'toString(vuln.severity)',
            details: 'Converts a value to its string representation.',
            docUrl: 'https://docs.qualys.com'
        },
        'toInt': {
            type: 'function',
            description: 'Convert to integer',
            syntax: 'toInt(value)',
            example: 'toInt(asset.customField)',
            details: 'Converts a value to an integer number.',
            docUrl: 'https://docs.qualys.com'
        },
        'toFloat': {
            type: 'function',
            description: 'Convert to float',
            syntax: 'toFloat(value)',
            example: 'toFloat(vuln.cvss)',
            details: 'Converts a value to a floating-point number.',
            docUrl: 'https://docs.qualys.com'
        },
        'toDate': {
            type: 'function',
            description: 'Convert to date',
            syntax: 'toDate(string)',
            example: 'toDate("2024-01-01")',
            details: 'Converts a string to a date value.',
            docUrl: 'https://docs.qualys.com'
        },
        'toBool': {
            type: 'function',
            description: 'Convert to boolean',
            syntax: 'toBool(value)',
            example: 'toBool(asset.isActive)',
            details: 'Converts a value to a boolean (true/false).',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Network Functions
    networkFunctions: {
        'cidr': {
            type: 'function',
            description: 'CIDR notation',
            syntax: 'cidr(ip, prefix)',
            example: 'cidr(asset.ip, 24)',
            details: 'Converts an IP address to CIDR notation with the specified prefix length.',
            docUrl: 'https://docs.qualys.com'
        },
        'ipRange': {
            type: 'function',
            description: 'IP range check',
            syntax: 'ipRange(ip, start, end)',
            example: 'ipRange(asset.ip, "10.0.0.1", "10.0.0.255")',
            details: 'Checks if an IP address falls within the specified range.',
            docUrl: 'https://docs.qualys.com'
        },
        'netmask': {
            type: 'function',
            description: 'Network mask',
            syntax: 'netmask(ip, mask)',
            example: 'netmask(asset.ip, "255.255.255.0")',
            details: 'Applies a network mask to an IP address.',
            docUrl: 'https://docs.qualys.com'
        },
        'inSubnet': {
            type: 'function',
            description: 'Subnet membership',
            syntax: 'inSubnet(ip, subnet)',
            example: 'inSubnet(asset.ip, "192.168.1.0/24")',
            details: 'Checks if an IP address belongs to the specified subnet.',
            docUrl: 'https://docs.qualys.com'
        },
        'isPrivateIP': {
            type: 'function',
            description: 'Private IP check',
            syntax: 'isPrivateIP(ip)',
            example: 'isPrivateIP(asset.ip) = true',
            details: 'Checks if an IP address is in a private range (RFC 1918).',
            docUrl: 'https://docs.qualys.com'
        },
        'isPublicIP': {
            type: 'function',
            description: 'Public IP check',
            syntax: 'isPublicIP(ip)',
            example: 'isPublicIP(asset.ip) = true',
            details: 'Checks if an IP address is publicly routable.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Mathematical Functions
    mathFunctions: {
        'abs': {
            type: 'function',
            description: 'Absolute value',
            syntax: 'abs(number)',
            example: 'abs(dateDiff(now(), asset.created))',
            details: 'Returns the absolute value of a number.',
            docUrl: 'https://docs.qualys.com'
        },
        'round': {
            type: 'function',
            description: 'Round number',
            syntax: 'round(number, decimals)',
            example: 'round(vuln.cvss, 1)',
            details: 'Rounds a number to the specified number of decimal places.',
            docUrl: 'https://docs.qualys.com'
        },
        'ceil': {
            type: 'function',
            description: 'Ceiling',
            syntax: 'ceil(number)',
            example: 'ceil(vuln.cvss)',
            details: 'Rounds a number up to the nearest integer.',
            docUrl: 'https://docs.qualys.com'
        },
        'floor': {
            type: 'function',
            description: 'Floor',
            syntax: 'floor(number)',
            example: 'floor(vuln.cvss)',
            details: 'Rounds a number down to the nearest integer.',
            docUrl: 'https://docs.qualys.com'
        },
        'mod': {
            type: 'function',
            description: 'Modulo',
            syntax: 'mod(number, divisor)',
            example: 'mod(detection.port, 2) = 0',
            details: 'Returns the remainder after division.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Keywords
    keywords: {
        'select': {
            type: 'keyword',
            description: 'Select fields',
            details: 'Specifies which fields to return in the query results.',
            docUrl: 'https://docs.qualys.com'
        },
        'from': {
            type: 'keyword',
            description: 'Specify source',
            details: 'Specifies the data source or table to query.',
            docUrl: 'https://docs.qualys.com'
        },
        'where': {
            type: 'keyword',
            description: 'Filter condition',
            details: 'Filters results based on specified conditions.',
            docUrl: 'https://docs.qualys.com'
        },
        'order by': {
            type: 'keyword',
            description: 'Sort results',
            details: 'Sorts the results by one or more fields.',
            docUrl: 'https://docs.qualys.com'
        },
        'group by': {
            type: 'keyword',
            description: 'Group results',
            details: 'Groups results by one or more fields for aggregation.',
            docUrl: 'https://docs.qualys.com'
        },
        'having': {
            type: 'keyword',
            description: 'Filter groups',
            details: 'Filters grouped results based on aggregate conditions.',
            docUrl: 'https://docs.qualys.com'
        },
        'limit': {
            type: 'keyword',
            description: 'Limit results',
            details: 'Limits the number of results returned.',
            docUrl: 'https://docs.qualys.com'
        },
        'offset': {
            type: 'keyword',
            description: 'Skip results',
            details: 'Skips the specified number of results (for pagination).',
            docUrl: 'https://docs.qualys.com'
        },
        'asc': {
            type: 'keyword',
            description: 'Ascending order',
            details: 'Sorts in ascending order (A-Z, 0-9, oldest to newest).',
            docUrl: 'https://docs.qualys.com'
        },
        'desc': {
            type: 'keyword',
            description: 'Descending order',
            details: 'Sorts in descending order (Z-A, 9-0, newest to oldest).',
            docUrl: 'https://docs.qualys.com'
        },
        'as': {
            type: 'keyword',
            description: 'Alias',
            details: 'Creates an alias for a field or expression.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Asset/Host Fields
    assetFields: {
        'asset.id': {
            type: 'field',
            description: 'Asset ID',
            category: 'Asset',
            details: 'Unique identifier for the asset in Qualys.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.name': {
            type: 'field',
            description: 'Asset name',
            category: 'Asset',
            details: 'Hostname or name of the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.ip': {
            type: 'field',
            description: 'IP address',
            category: 'Asset',
            details: 'IPv4 address of the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.ipv6': {
            type: 'field',
            description: 'IPv6 address',
            category: 'Asset',
            details: 'IPv6 address of the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.fqdn': {
            type: 'field',
            description: 'Fully qualified domain name',
            category: 'Asset',
            details: 'Complete domain name of the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.netbios': {
            type: 'field',
            description: 'NetBIOS name',
            category: 'Asset',
            details: 'NetBIOS name of Windows assets.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.os': {
            type: 'field',
            description: 'Operating system',
            category: 'Asset',
            details: 'Operating system detected on the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.osVersion': {
            type: 'field',
            description: 'OS version',
            category: 'Asset',
            details: 'Version of the operating system.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.manufacturer': {
            type: 'field',
            description: 'Hardware manufacturer',
            category: 'Asset',
            details: 'Manufacturer of the hardware.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.model': {
            type: 'field',
            description: 'Hardware model',
            category: 'Asset',
            details: 'Model number or name of the hardware.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.location': {
            type: 'field',
            description: 'Physical location',
            category: 'Asset',
            details: 'Physical location or site of the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.tags': {
            type: 'field',
            description: 'Asset tags',
            category: 'Asset',
            details: 'Tags assigned to the asset for organization.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.businessUnit': {
            type: 'field',
            description: 'Business unit',
            category: 'Asset',
            details: 'Business unit or department that owns the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.owner': {
            type: 'field',
            description: 'Asset owner',
            category: 'Asset',
            details: 'Person or team responsible for the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.created': {
            type: 'field',
            description: 'Creation date',
            category: 'Asset',
            details: 'Date when the asset was first added to Qualys.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.modified': {
            type: 'field',
            description: 'Last modified',
            category: 'Asset',
            details: 'Date when the asset record was last updated.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.lastScanned': {
            type: 'field',
            description: 'Last scan date',
            category: 'Asset',
            details: 'Date of the most recent vulnerability scan.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.trackingMethod': {
            type: 'field',
            description: 'Tracking method',
            category: 'Asset',
            details: 'Method used to track the asset (IP, DNS, NetBIOS, etc.).',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.cloudProvider': {
            type: 'field',
            description: 'Cloud provider',
            category: 'Asset',
            details: 'Cloud provider (AWS, Azure, GCP) if applicable.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.cloudInstanceId': {
            type: 'field',
            description: 'Cloud instance ID',
            category: 'Asset',
            details: 'Instance ID from the cloud provider.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.cloudRegion': {
            type: 'field',
            description: 'Cloud region',
            category: 'Asset',
            details: 'Cloud region where the instance is deployed.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.ec2.instanceId': {
            type: 'field',
            description: 'AWS EC2 instance ID',
            category: 'Asset',
            details: 'Amazon EC2 instance identifier.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.ec2.instanceType': {
            type: 'field',
            description: 'AWS EC2 instance type',
            category: 'Asset',
            details: 'EC2 instance type (e.g., t2.micro, m5.large).',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.azure.vmId': {
            type: 'field',
            description: 'Azure VM ID',
            category: 'Asset',
            details: 'Microsoft Azure virtual machine identifier.',
            docUrl: 'https://docs.qualys.com'
        },
        'asset.gcp.instanceId': {
            type: 'field',
            description: 'GCP instance ID',
            category: 'Asset',
            details: 'Google Cloud Platform instance identifier.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Vulnerability Fields
    vulnFields: {
        'vuln.id': {
            type: 'field',
            description: 'Vulnerability ID (QID)',
            category: 'Vulnerability',
            details: 'Qualys ID number for the vulnerability.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.title': {
            type: 'field',
            description: 'Vulnerability title',
            category: 'Vulnerability',
            details: 'Title or name of the vulnerability.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.severity': {
            type: 'field',
            description: 'Severity level (1-5)',
            category: 'Vulnerability',
            details: 'Severity rating: 1=Info, 2=Low, 3=Medium, 4=High, 5=Critical.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.cvss': {
            type: 'field',
            description: 'CVSS score',
            category: 'Vulnerability',
            details: 'Common Vulnerability Scoring System score (0.0-10.0).',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.cvssV2': {
            type: 'field',
            description: 'CVSS v2 score',
            category: 'Vulnerability',
            details: 'CVSS version 2 score.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.cvssV3': {
            type: 'field',
            description: 'CVSS v3 score',
            category: 'Vulnerability',
            details: 'CVSS version 3 score.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.category': {
            type: 'field',
            description: 'Vulnerability category',
            category: 'Vulnerability',
            details: 'Category of the vulnerability (e.g., Web Application, OS).',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.type': {
            type: 'field',
            description: 'Vulnerability type',
            category: 'Vulnerability',
            details: 'Type of vulnerability (e.g., SQL Injection, XSS).',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.patchable': {
            type: 'field',
            description: 'Is patchable',
            category: 'Vulnerability',
            details: 'Whether a patch is available for this vulnerability.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.exploitability': {
            type: 'field',
            description: 'Exploitability level',
            category: 'Vulnerability',
            details: 'How easily the vulnerability can be exploited.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.published': {
            type: 'field',
            description: 'Published date',
            category: 'Vulnerability',
            details: 'Date when the vulnerability was first published.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.modified': {
            type: 'field',
            description: 'Modified date',
            category: 'Vulnerability',
            details: 'Date when the vulnerability information was last updated.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.vendor': {
            type: 'field',
            description: 'Vendor reference',
            category: 'Vulnerability',
            details: 'Vendor-specific reference or advisory ID.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.cve': {
            type: 'field',
            description: 'CVE ID',
            category: 'Vulnerability',
            details: 'Common Vulnerabilities and Exposures identifier.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.bugtraq': {
            type: 'field',
            description: 'Bugtraq ID',
            category: 'Vulnerability',
            details: 'SecurityFocus Bugtraq database ID.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.threat': {
            type: 'field',
            description: 'Threat description',
            category: 'Vulnerability',
            details: 'Description of the threat posed by this vulnerability.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.impact': {
            type: 'field',
            description: 'Impact description',
            category: 'Vulnerability',
            details: 'Description of the potential impact if exploited.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.solution': {
            type: 'field',
            description: 'Solution description',
            category: 'Vulnerability',
            details: 'Recommended solution or remediation steps.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.pci': {
            type: 'field',
            description: 'PCI DSS related',
            category: 'Vulnerability',
            details: 'Whether this vulnerability affects PCI DSS compliance.',
            docUrl: 'https://docs.qualys.com'
        },
        'vuln.compliance': {
            type: 'field',
            description: 'Compliance related',
            category: 'Vulnerability',
            details: 'Compliance frameworks affected by this vulnerability.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Detection Fields
    detectionFields: {
        'detection.qid': {
            type: 'field',
            description: 'Detection QID',
            category: 'Detection',
            details: 'Qualys ID of the detected vulnerability.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.status': {
            type: 'field',
            description: 'Detection status',
            category: 'Detection',
            details: 'Status: Active, Fixed, Re-Opened, New.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.type': {
            type: 'field',
            description: 'Detection type',
            category: 'Detection',
            details: 'Type of detection (Confirmed, Potential, Information).',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.severity': {
            type: 'field',
            description: 'Severity',
            category: 'Detection',
            details: 'Severity level of the detection (1-5).',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.firstFound': {
            type: 'field',
            description: 'First detected',
            category: 'Detection',
            details: 'Date when the vulnerability was first detected on this asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.lastFound': {
            type: 'field',
            description: 'Last detected',
            category: 'Detection',
            details: 'Date of the most recent detection.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.timesFound': {
            type: 'field',
            description: 'Times detected',
            category: 'Detection',
            details: 'Number of times this vulnerability has been detected.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.lastFixed': {
            type: 'field',
            description: 'Last fixed date',
            category: 'Detection',
            details: 'Date when the vulnerability was last marked as fixed.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.lastTest': {
            type: 'field',
            description: 'Last test date',
            category: 'Detection',
            details: 'Date of the last scan that tested for this vulnerability.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.port': {
            type: 'field',
            description: 'Port number',
            category: 'Detection',
            details: 'Network port where the vulnerability was detected.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.protocol': {
            type: 'field',
            description: 'Protocol',
            category: 'Detection',
            details: 'Network protocol (TCP, UDP, ICMP).',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.ssl': {
            type: 'field',
            description: 'SSL/TLS',
            category: 'Detection',
            details: 'Whether the detection is related to SSL/TLS.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.results': {
            type: 'field',
            description: 'Detection results',
            category: 'Detection',
            details: 'Detailed results from the vulnerability scan.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.isIgnored': {
            type: 'field',
            description: 'Is ignored',
            category: 'Detection',
            details: 'Whether this detection has been marked as ignored.',
            docUrl: 'https://docs.qualys.com'
        },
        'detection.isDisabled': {
            type: 'field',
            description: 'Is disabled',
            category: 'Detection',
            details: 'Whether this detection has been disabled.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Compliance Fields
    complianceFields: {
        'compliance.status': {
            type: 'field',
            description: 'Compliance status',
            category: 'Compliance',
            details: 'Status: Pass, Fail, Manual, Not Applicable.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.policy': {
            type: 'field',
            description: 'Policy name',
            category: 'Compliance',
            details: 'Name of the compliance policy.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.policyId': {
            type: 'field',
            description: 'Policy ID',
            category: 'Compliance',
            details: 'Unique identifier for the compliance policy.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.control': {
            type: 'field',
            description: 'Control ID',
            category: 'Compliance',
            details: 'Specific control identifier within the policy.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.controlName': {
            type: 'field',
            description: 'Control name',
            category: 'Compliance',
            details: 'Name or description of the control.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.type': {
            type: 'field',
            description: 'Compliance type',
            category: 'Compliance',
            details: 'Type of compliance check (Technical, Manual, Hybrid).',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.passed': {
            type: 'field',
            description: 'Passed checks',
            category: 'Compliance',
            details: 'Number of compliance checks that passed.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.failed': {
            type: 'field',
            description: 'Failed checks',
            category: 'Compliance',
            details: 'Number of compliance checks that failed.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.manual': {
            type: 'field',
            description: 'Manual checks',
            category: 'Compliance',
            details: 'Number of checks requiring manual verification.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.notApplicable': {
            type: 'field',
            description: 'N/A checks',
            category: 'Compliance',
            details: 'Number of checks that are not applicable.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.lastEvaluated': {
            type: 'field',
            description: 'Last evaluation',
            category: 'Compliance',
            details: 'Date of the last compliance evaluation.',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.framework': {
            type: 'field',
            description: 'Framework (PCI, HIPAA, etc.)',
            category: 'Compliance',
            details: 'Compliance framework (PCI DSS, HIPAA, SOC 2, etc.).',
            docUrl: 'https://docs.qualys.com'
        },
        'compliance.requirement': {
            type: 'field',
            description: 'Requirement ID',
            category: 'Compliance',
            details: 'Specific requirement within the framework.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Container Fields
    containerFields: {
        'container.id': {
            type: 'field',
            description: 'Container ID',
            category: 'Container',
            details: 'Unique identifier for the container.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.name': {
            type: 'field',
            description: 'Container name',
            category: 'Container',
            details: 'Name of the container.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.image': {
            type: 'field',
            description: 'Image name',
            category: 'Container',
            details: 'Name of the container image.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.imageId': {
            type: 'field',
            description: 'Image ID',
            category: 'Container',
            details: 'Unique identifier for the container image.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.registry': {
            type: 'field',
            description: 'Registry',
            category: 'Container',
            details: 'Container registry where the image is stored.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.tag': {
            type: 'field',
            description: 'Image tag',
            category: 'Container',
            details: 'Tag or version of the container image.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.created': {
            type: 'field',
            description: 'Creation date',
            category: 'Container',
            details: 'Date when the container was created.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.running': {
            type: 'field',
            description: 'Is running',
            category: 'Container',
            details: 'Whether the container is currently running.',
            docUrl: 'https://docs.qualys.com'
        },
        'container.host': {
            type: 'field',
            description: 'Host name',
            category: 'Container',
            details: 'Host system where the container is running.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Web Application Fields
    webappFields: {
        'webapp.id': {
            type: 'field',
            description: 'Web app ID',
            category: 'Web Application',
            details: 'Unique identifier for the web application.',
            docUrl: 'https://docs.qualys.com'
        },
        'webapp.name': {
            type: 'field',
            description: 'Web app name',
            category: 'Web Application',
            details: 'Name of the web application.',
            docUrl: 'https://docs.qualys.com'
        },
        'webapp.url': {
            type: 'field',
            description: 'Web app URL',
            category: 'Web Application',
            details: 'URL of the web application.',
            docUrl: 'https://docs.qualys.com'
        },
        'webapp.tags': {
            type: 'field',
            description: 'Tags',
            category: 'Web Application',
            details: 'Tags assigned to the web application.',
            docUrl: 'https://docs.qualys.com'
        },
        'webapp.owner': {
            type: 'field',
            description: 'Owner',
            category: 'Web Application',
            details: 'Owner of the web application.',
            docUrl: 'https://docs.qualys.com'
        },
        'webapp.lastScan': {
            type: 'field',
            description: 'Last scan date',
            category: 'Web Application',
            details: 'Date of the most recent web application scan.',
            docUrl: 'https://docs.qualys.com'
        },
        'webapp.vulnCount': {
            type: 'field',
            description: 'Vulnerability count',
            category: 'Web Application',
            details: 'Total number of vulnerabilities found.',
            docUrl: 'https://docs.qualys.com'
        },
        'webapp.severity': {
            type: 'field',
            description: 'Highest severity',
            category: 'Web Application',
            details: 'Highest severity level of detected vulnerabilities.',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Certificate Fields
    certFields: {
        'cert.subject': {
            type: 'field',
            description: 'Certificate subject',
            category: 'Certificate',
            details: 'Subject (owner) of the SSL/TLS certificate.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.issuer': {
            type: 'field',
            description: 'Certificate issuer',
            category: 'Certificate',
            details: 'Certificate authority that issued the certificate.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.serialNumber': {
            type: 'field',
            description: 'Serial number',
            category: 'Certificate',
            details: 'Unique serial number of the certificate.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.validFrom': {
            type: 'field',
            description: 'Valid from date',
            category: 'Certificate',
            details: 'Date when the certificate becomes valid.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.validTo': {
            type: 'field',
            description: 'Valid to date',
            category: 'Certificate',
            details: 'Expiration date of the certificate.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.expired': {
            type: 'field',
            description: 'Is expired',
            category: 'Certificate',
            details: 'Whether the certificate has expired.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.selfSigned': {
            type: 'field',
            description: 'Is self-signed',
            category: 'Certificate',
            details: 'Whether the certificate is self-signed.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.keySize': {
            type: 'field',
            description: 'Key size',
            category: 'Certificate',
            details: 'Size of the encryption key in bits.',
            docUrl: 'https://docs.qualys.com'
        },
        'cert.algorithm': {
            type: 'field',
            description: 'Algorithm',
            category: 'Certificate',
            details: 'Encryption algorithm used (RSA, ECC, etc.).',
            docUrl: 'https://docs.qualys.com'
        }
    },

    // Patch Fields
    patchFields: {
        'patch.id': {
            type: 'field',
            description: 'Patch ID',
            category: 'Patch',
            details: 'Unique identifier for the patch.',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.name': {
            type: 'field',
            description: 'Patch name',
            category: 'Patch',
            details: 'Name or title of the patch.',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.vendor': {
            type: 'field',
            description: 'Vendor',
            category: 'Patch',
            details: 'Vendor that released the patch.',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.product': {
            type: 'field',
            description: 'Product',
            category: 'Patch',
            details: 'Product or software that the patch applies to.',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.category': {
            type: 'field',
            description: 'Category',
            category: 'Patch',
            details: 'Category of the patch (Security, Feature, Bug Fix).',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.severity': {
            type: 'field',
            description: 'Severity',
            category: 'Patch',
            details: 'Severity level of the patch.',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.installed': {
            type: 'field',
            description: 'Is installed',
            category: 'Patch',
            details: 'Whether the patch is installed on the asset.',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.installDate': {
            type: 'field',
            description: 'Install date',
            category: 'Patch',
            details: 'Date when the patch was installed.',
            docUrl: 'https://docs.qualys.com'
        },
        'patch.superseded': {
            type: 'field',
            description: 'Is superseded',
            category: 'Patch',
            details: 'Whether this patch has been superseded by a newer one.',
            docUrl: 'https://docs.qualys.com'
        }
    }
};

// Helper function to get explanation for any token
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();

    // Check all knowledge base categories
    const allCategories = [
        qqlKnowledge.comparisonOperators,
        qqlKnowledge.logicalOperators,
        qqlKnowledge.specialOperators,
        qqlKnowledge.stringFunctions,
        qqlKnowledge.dateTimeFunctions,
        qqlKnowledge.aggregationFunctions,
        qqlKnowledge.conversionFunctions,
        qqlKnowledge.networkFunctions,
        qqlKnowledge.mathFunctions,
        qqlKnowledge.keywords,
        qqlKnowledge.assetFields,
        qqlKnowledge.vulnFields,
        qqlKnowledge.detectionFields,
        qqlKnowledge.complianceFields,
        qqlKnowledge.containerFields,
        qqlKnowledge.webappFields,
        qqlKnowledge.certFields,
        qqlKnowledge.patchFields
    ];

    for (const category of allCategories) {
        if (category[lowerToken]) {
            return category[lowerToken];
        }
        // Also check exact match for case-sensitive items
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
            details: `Field reference: ${token}. This may be a custom field or asset property.`
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized.'
    };
}
