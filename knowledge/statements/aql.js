// IBM QRadar Ariel Query Language (AQL) Knowledge Base

export const aqlKnowledge = {
    // SQL-Like Clauses
    clauses: {
        'SELECT': {
            type: 'keyword',
            description: 'Specify fields to return',
            syntax: 'SELECT <field-list>',
            example: 'SELECT sourceip, destinationip, qid',
            details: 'Specifies which fields to include in the query results. Use * for all fields.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'FROM': {
            type: 'keyword',
            description: 'Specify data source',
            syntax: 'FROM <source>',
            example: 'FROM events',
            details: 'Specifies the data source to query. Common sources: events, flows.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'WHERE': {
            type: 'keyword',
            description: 'Filter conditions',
            syntax: 'WHERE <condition>',
            example: 'WHERE sourceip IN (SELECT destinationip FROM events)',
            details: 'Filters results based on specified conditions. Supports complex boolean logic.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'GROUP BY': {
            type: 'keyword',
            description: 'Group results',
            syntax: 'GROUP BY <field-list>',
            example: 'GROUP BY sourceip, qid',
            details: 'Groups results by specified fields for aggregation.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'HAVING': {
            type: 'keyword',
            description: 'Filter grouped results',
            syntax: 'HAVING <condition>',
            example: 'HAVING COUNT(*) > 100',
            details: 'Filters results after grouping. Used with aggregate functions.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'ORDER BY': {
            type: 'keyword',
            description: 'Sort results',
            syntax: 'ORDER BY <field> [ASC|DESC]',
            example: 'ORDER BY starttime DESC',
            details: 'Sorts results by specified fields. Default is ascending.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LIMIT': {
            type: 'keyword',
            description: 'Limit number of results',
            syntax: 'LIMIT <number>',
            example: 'LIMIT 1000',
            details: 'Limits the number of results returned.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'START': {
            type: 'keyword',
            description: 'Start time for query',
            syntax: 'START <timestamp>',
            example: 'START 1640995200000',
            details: 'Specifies the start time for the query in epoch milliseconds.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'STOP': {
            type: 'keyword',
            description: 'Stop time for query',
            syntax: 'STOP <timestamp>',
            example: 'STOP 1641081600000',
            details: 'Specifies the stop time for the query in epoch milliseconds.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LAST': {
            type: 'keyword',
            description: 'Recent time window',
            syntax: 'LAST <number> <unit>',
            example: 'LAST 24 HOURS',
            details: 'Queries data from the last N time units (MINUTES, HOURS, DAYS).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Aggregation Functions
    aggregationFunctions: {
        'COUNT': {
            type: 'function',
            description: 'Count rows',
            syntax: 'COUNT(*) or COUNT(<field>)',
            example: 'SELECT COUNT(*) FROM events',
            details: 'Returns the number of rows. COUNT(*) counts all rows, COUNT(field) counts non-null values.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'SUM': {
            type: 'function',
            description: 'Sum numeric values',
            syntax: 'SUM(<field>)',
            example: 'SELECT SUM(sourcebytes) FROM flows',
            details: 'Returns the sum of numeric values in the specified field.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'AVG': {
            type: 'function',
            description: 'Calculate average',
            syntax: 'AVG(<field>)',
            example: 'SELECT AVG(magnitude) FROM events',
            details: 'Returns the arithmetic mean of numeric values.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'MIN': {
            type: 'function',
            description: 'Find minimum value',
            syntax: 'MIN(<field>)',
            example: 'SELECT MIN(starttime) FROM events',
            details: 'Returns the minimum value in the specified field.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'MAX': {
            type: 'function',
            description: 'Find maximum value',
            syntax: 'MAX(<field>)',
            example: 'SELECT MAX(severity) FROM events',
            details: 'Returns the maximum value in the specified field.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'STDDEV': {
            type: 'function',
            description: 'Standard deviation',
            syntax: 'STDDEV(<field>)',
            example: 'SELECT STDDEV(magnitude) FROM events',
            details: 'Returns the standard deviation of numeric values.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'VARIANCE': {
            type: 'function',
            description: 'Variance',
            syntax: 'VARIANCE(<field>)',
            example: 'SELECT VARIANCE(magnitude) FROM events',
            details: 'Returns the variance of numeric values.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'UNIQUECOUNT': {
            type: 'function',
            description: 'Count distinct values',
            syntax: 'UNIQUECOUNT(<field>)',
            example: 'SELECT UNIQUECOUNT(sourceip) FROM events',
            details: 'Returns the count of distinct (unique) values in a field.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'FIRST': {
            type: 'function',
            description: 'First value in group',
            syntax: 'FIRST(<field>)',
            example: 'SELECT FIRST(qidname) FROM events GROUP BY sourceip',
            details: 'Returns the first value encountered in a group.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LAST': {
            type: 'function',
            description: 'Last value in group',
            syntax: 'LAST(<field>)',
            example: 'SELECT LAST(qidname) FROM events GROUP BY sourceip',
            details: 'Returns the last value encountered in a group.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // String Functions
    stringFunctions: {
        'CONCAT': {
            type: 'function',
            description: 'Concatenate strings',
            syntax: 'CONCAT(<str1>, <str2>, ...)',
            example: 'SELECT CONCAT(sourceip, \':\', sourceport) FROM events',
            details: 'Combines multiple strings into one.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'SUBSTRING': {
            type: 'function',
            description: 'Extract substring',
            syntax: 'SUBSTRING(<string>, <start>, <length>)',
            example: 'SELECT SUBSTRING(username, 1, 5) FROM events',
            details: 'Extracts a portion of a string starting at the specified position.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LOWER': {
            type: 'function',
            description: 'Convert to lowercase',
            syntax: 'LOWER(<string>)',
            example: 'SELECT LOWER(username) FROM events',
            details: 'Converts a string to lowercase.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'UPPER': {
            type: 'function',
            description: 'Convert to uppercase',
            syntax: 'UPPER(<string>)',
            example: 'SELECT UPPER(categoryname) FROM events',
            details: 'Converts a string to uppercase.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'TRIM': {
            type: 'function',
            description: 'Remove whitespace',
            syntax: 'TRIM(<string>)',
            example: 'SELECT TRIM(username) FROM events',
            details: 'Removes leading and trailing whitespace.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LTRIM': {
            type: 'function',
            description: 'Left trim whitespace',
            syntax: 'LTRIM(<string>)',
            example: 'SELECT LTRIM(username) FROM events',
            details: 'Removes leading whitespace.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'RTRIM': {
            type: 'function',
            description: 'Right trim whitespace',
            syntax: 'RTRIM(<string>)',
            example: 'SELECT RTRIM(username) FROM events',
            details: 'Removes trailing whitespace.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LENGTH': {
            type: 'function',
            description: 'String length',
            syntax: 'LENGTH(<string>)',
            example: 'SELECT LENGTH(username) FROM events',
            details: 'Returns the number of characters in a string.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'REPLACE': {
            type: 'function',
            description: 'Replace text',
            syntax: 'REPLACE(<string>, <find>, <replace>)',
            example: 'SELECT REPLACE(username, \'@\', \'_\') FROM events',
            details: 'Replaces all occurrences of a substring with another string.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'INDEXOF': {
            type: 'function',
            description: 'Find substring position',
            syntax: 'INDEXOF(<string>, <substring>)',
            example: 'SELECT INDEXOF(username, \'@\') FROM events',
            details: 'Returns the position of the first occurrence of a substring.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'STARTSWITH': {
            type: 'function',
            description: 'Check if starts with',
            syntax: 'STARTSWITH(<string>, <prefix>)',
            example: 'WHERE STARTSWITH(username, \'admin\')',
            details: 'Returns true if the string starts with the specified prefix.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'ENDSWITH': {
            type: 'function',
            description: 'Check if ends with',
            syntax: 'ENDSWITH(<string>, <suffix>)',
            example: 'WHERE ENDSWITH(username, \'.com\')',
            details: 'Returns true if the string ends with the specified suffix.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'REGEXMATCH': {
            type: 'function',
            description: 'Regular expression match',
            syntax: 'REGEXMATCH(<string>, <pattern>)',
            example: 'WHERE REGEXMATCH(sourceip, \'^10\\.\')',
            details: 'Returns true if the string matches the regular expression pattern.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Date/Time Functions
    dateTimeFunctions: {
        'DATEFORMAT': {
            type: 'function',
            description: 'Format timestamp',
            syntax: 'DATEFORMAT(<timestamp>, <format>)',
            example: 'SELECT DATEFORMAT(starttime, \'YYYY-MM-dd HH:mm:ss\') FROM events',
            details: 'Formats a timestamp according to the specified format string.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'DATECREATE': {
            type: 'function',
            description: 'Create date from components',
            syntax: 'DATECREATE(<year>, <month>, <day>, <hour>, <minute>, <second>)',
            example: 'SELECT DATECREATE(2024, 1, 1, 0, 0, 0)',
            details: 'Creates a timestamp from individual date/time components.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'DATEEXTRACT': {
            type: 'function',
            description: 'Extract date component',
            syntax: 'DATEEXTRACT(<component>, <timestamp>)',
            example: 'SELECT DATEEXTRACT(\'HOUR\', starttime) FROM events',
            details: 'Extracts a specific component (YEAR, MONTH, DAY, HOUR, etc.) from a timestamp.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'DATEADD': {
            type: 'function',
            description: 'Add time interval',
            syntax: 'DATEADD(<timestamp>, <interval>, <unit>)',
            example: 'SELECT DATEADD(starttime, 1, \'HOURS\') FROM events',
            details: 'Adds a time interval to a timestamp. Units: SECONDS, MINUTES, HOURS, DAYS.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'DATEDIFF': {
            type: 'function',
            description: 'Calculate time difference',
            syntax: 'DATEDIFF(<timestamp1>, <timestamp2>, <unit>)',
            example: 'SELECT DATEDIFF(endtime, starttime, \'MINUTES\') FROM events',
            details: 'Calculates the difference between two timestamps in the specified unit.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'NOW': {
            type: 'function',
            description: 'Current timestamp',
            syntax: 'NOW()',
            example: 'WHERE starttime > NOW() - 3600000',
            details: 'Returns the current timestamp in epoch milliseconds.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'EPOCHTOMILLISECONDS': {
            type: 'function',
            description: 'Convert epoch to milliseconds',
            syntax: 'EPOCHTOMILLISECONDS(<epoch>)',
            example: 'SELECT EPOCHTOMILLISECONDS(devicetime) FROM events',
            details: 'Converts an epoch timestamp in seconds to milliseconds.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Network Functions
    networkFunctions: {
        'INCIDR': {
            type: 'function',
            description: 'Check if IP in CIDR range',
            syntax: 'INCIDR(<ip>, <cidr>)',
            example: 'WHERE INCIDR(sourceip, \'10.0.0.0/8\')',
            details: 'Returns true if the IP address is within the specified CIDR range.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'INSUBNET': {
            type: 'function',
            description: 'Check if IP in subnet',
            syntax: 'INSUBNET(<ip>, <subnet>, <mask>)',
            example: 'WHERE INSUBNET(sourceip, \'192.168.1.0\', \'255.255.255.0\')',
            details: 'Returns true if the IP address is within the specified subnet.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'IPADDRESS': {
            type: 'function',
            description: 'Convert string to IP',
            syntax: 'IPADDRESS(<string>)',
            example: 'SELECT IPADDRESS(\'192.168.1.1\')',
            details: 'Converts a string to an IP address for comparison.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LOGSOURCENAME': {
            type: 'function',
            description: 'Get log source name',
            syntax: 'LOGSOURCENAME(<logsourceid>)',
            example: 'SELECT LOGSOURCENAME(logsourceid) FROM events',
            details: 'Returns the name of the log source for the given ID.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LOGSOURCETYPENAME': {
            type: 'function',
            description: 'Get log source type name',
            syntax: 'LOGSOURCETYPENAME(<logsourceid>)',
            example: 'SELECT LOGSOURCETYPENAME(logsourceid) FROM events',
            details: 'Returns the type name of the log source.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'CATEGORYNAME': {
            type: 'function',
            description: 'Get category name',
            syntax: 'CATEGORYNAME(<category>)',
            example: 'SELECT CATEGORYNAME(category) FROM events',
            details: 'Returns the name of the event category.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'QIDNAME': {
            type: 'function',
            description: 'Get QID name',
            syntax: 'QIDNAME(<qid>)',
            example: 'SELECT QIDNAME(qid) FROM events',
            details: 'Returns the name of the QID (event identifier).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Conversion Functions
    conversionFunctions: {
        'TOSTRING': {
            type: 'function',
            description: 'Convert to string',
            syntax: 'TOSTRING(<value>)',
            example: 'SELECT TOSTRING(sourceport) FROM events',
            details: 'Converts a value to its string representation.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'TONUMBER': {
            type: 'function',
            description: 'Convert to number',
            syntax: 'TONUMBER(<string>)',
            example: 'SELECT TONUMBER(customfield) FROM events',
            details: 'Converts a string to a numeric value.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'TOBOOLEAN': {
            type: 'function',
            description: 'Convert to boolean',
            syntax: 'TOBOOLEAN(<value>)',
            example: 'SELECT TOBOOLEAN(customfield) FROM events',
            details: 'Converts a value to a boolean (true/false).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'CAST': {
            type: 'function',
            description: 'Type casting',
            syntax: 'CAST(<value> AS <type>)',
            example: 'SELECT CAST(sourceport AS VARCHAR) FROM events',
            details: 'Casts a value to a specified data type (INTEGER, VARCHAR, etc.).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Conditional Functions
    conditionalFunctions: {
        'CASE': {
            type: 'keyword',
            description: 'Conditional expression',
            syntax: 'CASE WHEN <condition> THEN <value> ... ELSE <value> END',
            example: 'SELECT CASE WHEN severity > 7 THEN \'High\' ELSE \'Low\' END FROM events',
            details: 'Evaluates conditions and returns corresponding values.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'COALESCE': {
            type: 'function',
            description: 'Return first non-null value',
            syntax: 'COALESCE(<value1>, <value2>, ...)',
            example: 'SELECT COALESCE(username, \'Unknown\') FROM events',
            details: 'Returns the first non-null value from the list.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'NULLIF': {
            type: 'function',
            description: 'Return null if equal',
            syntax: 'NULLIF(<value1>, <value2>)',
            example: 'SELECT NULLIF(username, \'\') FROM events',
            details: 'Returns null if the two values are equal, otherwise returns the first value.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'ISNULL': {
            type: 'function',
            description: 'Check for null',
            syntax: 'ISNULL(<value>)',
            example: 'WHERE ISNULL(username)',
            details: 'Returns true if the value is null.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Mathematical Functions
    mathFunctions: {
        'ABS': {
            type: 'function',
            description: 'Absolute value',
            syntax: 'ABS(<number>)',
            example: 'SELECT ABS(magnitude - 5) FROM events',
            details: 'Returns the absolute value of a number.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'CEIL': {
            type: 'function',
            description: 'Round up',
            syntax: 'CEIL(<number>)',
            example: 'SELECT CEIL(magnitude) FROM events',
            details: 'Rounds a number up to the nearest integer.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'FLOOR': {
            type: 'function',
            description: 'Round down',
            syntax: 'FLOOR(<number>)',
            example: 'SELECT FLOOR(magnitude) FROM events',
            details: 'Rounds a number down to the nearest integer.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'ROUND': {
            type: 'function',
            description: 'Round to nearest',
            syntax: 'ROUND(<number>, [decimals])',
            example: 'SELECT ROUND(magnitude, 2) FROM events',
            details: 'Rounds a number to the specified number of decimal places.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'POWER': {
            type: 'function',
            description: 'Raise to power',
            syntax: 'POWER(<base>, <exponent>)',
            example: 'SELECT POWER(2, 8)',
            details: 'Raises a number to the specified power.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'SQRT': {
            type: 'function',
            description: 'Square root',
            syntax: 'SQRT(<number>)',
            example: 'SELECT SQRT(magnitude) FROM events',
            details: 'Returns the square root of a number.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'MOD': {
            type: 'function',
            description: 'Modulo operation',
            syntax: 'MOD(<number>, <divisor>)',
            example: 'SELECT MOD(sourceport, 2) FROM events',
            details: 'Returns the remainder after division.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Operators
    operators: {
        'AND': {
            type: 'operator',
            description: 'Logical AND',
            details: 'Both conditions must be true.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'OR': {
            type: 'operator',
            description: 'Logical OR',
            details: 'At least one condition must be true.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'NOT': {
            type: 'operator',
            description: 'Logical NOT',
            details: 'Negates a condition.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'LIKE': {
            type: 'operator',
            description: 'Pattern matching',
            syntax: 'field LIKE \'pattern\'',
            example: 'WHERE username LIKE \'admin%\'',
            details: 'SQL-style pattern matching. Use % for wildcard, _ for single character.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'ILIKE': {
            type: 'operator',
            description: 'Case-insensitive pattern matching',
            syntax: 'field ILIKE \'pattern\'',
            example: 'WHERE username ILIKE \'admin%\'',
            details: 'Case-insensitive version of LIKE.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'MATCHES': {
            type: 'operator',
            description: 'Regular expression matching',
            syntax: 'field MATCHES \'regex\'',
            example: 'WHERE sourceip MATCHES \'^10\\.\'',
            details: 'Matches field against a regular expression pattern.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'IN': {
            type: 'operator',
            description: 'Value in set',
            syntax: 'field IN (value1, value2, ...)',
            example: 'WHERE severity IN (8, 9, 10)',
            details: 'Checks if the value is in the specified set.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'BETWEEN': {
            type: 'operator',
            description: 'Range check',
            syntax: 'field BETWEEN value1 AND value2',
            example: 'WHERE magnitude BETWEEN 5 AND 10',
            details: 'Checks if the value is within the specified range (inclusive).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'IS NULL': {
            type: 'operator',
            description: 'Null check',
            syntax: 'field IS NULL',
            example: 'WHERE username IS NULL',
            details: 'Checks if the field value is null.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'IS NOT NULL': {
            type: 'operator',
            description: 'Not null check',
            syntax: 'field IS NOT NULL',
            example: 'WHERE username IS NOT NULL',
            details: 'Checks if the field has a value (is not null).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    },

    // Common Event Fields
    eventFields: {
        'starttime': {
            type: 'field',
            description: 'Event start time',
            category: 'Time',
            details: 'Timestamp when the event started (epoch milliseconds).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'endtime': {
            type: 'field',
            description: 'Event end time',
            category: 'Time',
            details: 'Timestamp when the event ended (epoch milliseconds).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'devicetime': {
            type: 'field',
            description: 'Device timestamp',
            category: 'Time',
            details: 'Timestamp from the source device.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'sourceip': {
            type: 'field',
            description: 'Source IP address',
            category: 'Source',
            details: 'IP address of the event source.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'sourceport': {
            type: 'field',
            description: 'Source port',
            category: 'Source',
            details: 'Port number of the event source.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'sourcemac': {
            type: 'field',
            description: 'Source MAC address',
            category: 'Source',
            details: 'MAC address of the event source.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'sourcebytes': {
            type: 'field',
            description: 'Source bytes',
            category: 'Source',
            details: 'Number of bytes from the source.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'destinationip': {
            type: 'field',
            description: 'Destination IP address',
            category: 'Destination',
            details: 'IP address of the event destination.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'destinationport': {
            type: 'field',
            description: 'Destination port',
            category: 'Destination',
            details: 'Port number of the event destination.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'destinationmac': {
            type: 'field',
            description: 'Destination MAC address',
            category: 'Destination',
            details: 'MAC address of the event destination.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'destinationbytes': {
            type: 'field',
            description: 'Destination bytes',
            category: 'Destination',
            details: 'Number of bytes to the destination.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'username': {
            type: 'field',
            description: 'Username',
            category: 'Identity',
            details: 'Username associated with the event.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'userid': {
            type: 'field',
            description: 'User ID',
            category: 'Identity',
            details: 'User identifier associated with the event.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'protocol': {
            type: 'field',
            description: 'Protocol name',
            category: 'Network',
            details: 'Network protocol name (TCP, UDP, ICMP, etc.).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'protocolid': {
            type: 'field',
            description: 'Protocol ID',
            category: 'Network',
            details: 'Numeric protocol identifier.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'qid': {
            type: 'field',
            description: 'QID (Event ID)',
            category: 'Security',
            details: 'QRadar event identifier.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'qidname': {
            type: 'field',
            description: 'QID name',
            category: 'Security',
            details: 'Name of the QRadar event.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'category': {
            type: 'field',
            description: 'Event category ID',
            category: 'Security',
            details: 'Numeric category identifier.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'categoryname': {
            type: 'field',
            description: 'Event category name',
            category: 'Security',
            details: 'Name of the event category.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'severity': {
            type: 'field',
            description: 'Event severity',
            category: 'Security',
            details: 'Severity level (1-10, where 10 is most severe).',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'magnitude': {
            type: 'field',
            description: 'Event magnitude',
            category: 'Security',
            details: 'Calculated magnitude/relevance of the event.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'logsourceid': {
            type: 'field',
            description: 'Log source ID',
            category: 'Log',
            details: 'Identifier of the log source.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'logsourcename': {
            type: 'field',
            description: 'Log source name',
            category: 'Log',
            details: 'Name of the log source.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'eventid': {
            type: 'field',
            description: 'Event ID',
            category: 'Event',
            details: 'Unique identifier for the event.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        },
        'eventcount': {
            type: 'field',
            description: 'Event count',
            category: 'Event',
            details: 'Number of times this event occurred.',
            docUrl: 'https://www.ibm.com/docs/en/qradar-common'
        }
    }
};

// Helper function to get explanation for any token
export function getExplanation(token, tokenType) {
    const upperToken = token.toUpperCase();
    const lowerToken = token.toLowerCase();

    // Check all knowledge base categories
    const allCategories = [
        aqlKnowledge.clauses,
        aqlKnowledge.aggregationFunctions,
        aqlKnowledge.stringFunctions,
        aqlKnowledge.dateTimeFunctions,
        aqlKnowledge.networkFunctions,
        aqlKnowledge.conversionFunctions,
        aqlKnowledge.conditionalFunctions,
        aqlKnowledge.mathFunctions,
        aqlKnowledge.operators,
        aqlKnowledge.eventFields
    ];

    for (const category of allCategories) {
        // Try uppercase (for keywords)
        if (category[upperToken]) {
            return category[upperToken];
        }
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
            details: `Field reference: ${token}. This may be an event or flow field.`
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized.'
    };
}
