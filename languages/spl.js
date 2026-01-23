// Splunk Search Processing Language (SPL) Knowledge Base

export const splKnowledge = {
    // Search Commands
    searchCommands: {
        'search': {
            type: 'command',
            description: 'Filter events from the index',
            syntax: 'search <search-expression>',
            example: 'search error OR failed',
            details: 'The fundamental search command. Filters events based on keywords, fields, and boolean expressions. Can be implicit at the start of a search.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Search'
        },
        'where': {
            type: 'command',
            description: 'Filter results using eval expressions',
            syntax: 'where <eval-expression>',
            example: 'where status_code >= 400',
            details: 'Filters search results using eval-style expressions. More flexible than search for complex conditions.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Where'
        },
        'eval': {
            type: 'command',
            description: 'Calculate and create new fields',
            syntax: 'eval <field>=<expression>',
            example: 'eval duration=end_time-start_time',
            details: 'Creates or modifies fields using expressions. Supports math, string, comparison, and conditional operations.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Eval'
        },
        'stats': {
            type: 'command',
            description: 'Calculate aggregate statistics',
            syntax: 'stats <stats-function> [by <field-list>]',
            example: 'stats count by host, status',
            details: 'Performs statistical aggregations like count, sum, avg. Results are grouped by specified fields.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'chart': {
            type: 'command',
            description: 'Create data visualizations',
            syntax: 'chart <stats-function> over <row-split> [by <column-split>]',
            example: 'chart count over host by status',
            details: 'Returns results in a format suitable for charting. Creates a table with one row field and optionally one column field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Chart'
        },
        'timechart': {
            type: 'command',
            description: 'Create time-series charts',
            syntax: 'timechart <stats-function> [by <field>]',
            example: 'timechart span=1h count by status',
            details: 'Statistical aggregation over time. Automatically bins results by time and is optimized for time-series visualization.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Timechart'
        },
        'table': {
            type: 'command',
            description: 'Display specified fields as a table',
            syntax: 'table <field-list>',
            example: 'table _time, host, source, message',
            details: 'Returns only the specified fields in table format. Removes all other fields from results.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Table'
        },
        'fields': {
            type: 'command',
            description: 'Include or exclude fields',
            syntax: 'fields [+|-] <field-list>',
            example: 'fields - _raw, _bkt',
            details: 'Includes (+) or excludes (-) specified fields from search results. Improves performance by reducing data.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Fields'
        },
        'rename': {
            type: 'command',
            description: 'Rename fields',
            syntax: 'rename <old-field> AS <new-field>',
            example: 'rename src_ip AS source_ip',
            details: 'Renames one or more fields. Useful for creating more readable field names or standardizing field names.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Rename'
        },
        'dedup': {
            type: 'command',
            description: 'Remove duplicate events',
            syntax: 'dedup <field-list> [keepevents=true|false]',
            example: 'dedup host, user',
            details: 'Removes duplicate events based on specified fields. Keeps the first occurrence by default.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Dedup'
        },
        'sort': {
            type: 'command',
            description: 'Sort search results',
            syntax: 'sort [+|-] <field-list>',
            example: 'sort -_time, +host',
            details: 'Sorts results by specified fields. Use + for ascending (default) or - for descending order.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Sort'
        },
        'head': {
            type: 'command',
            description: 'Return first N results',
            syntax: 'head [N]',
            example: 'head 100',
            details: 'Returns the first N results. Default is 10 if N is not specified.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Head'
        },
        'tail': {
            type: 'command',
            description: 'Return last N results',
            syntax: 'tail [N]',
            example: 'tail 50',
            details: 'Returns the last N results. Default is 10 if N is not specified.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Tail'
        },
        'top': {
            type: 'command',
            description: 'Find most common values',
            syntax: 'top [limit=N] <field-list>',
            example: 'top limit=20 user, action',
            details: 'Returns the most common values for specified fields with count and percentage.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Top'
        },
        'rare': {
            type: 'command',
            description: 'Find least common values',
            syntax: 'rare [limit=N] <field-list>',
            example: 'rare limit=10 error_code',
            details: 'Returns the least common values for specified fields with count and percentage.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Rare'
        },
        'transaction': {
            type: 'command',
            description: 'Group events into transactions',
            syntax: 'transaction <field-list> [maxspan=<time>]',
            example: 'transaction session_id maxspan=30m',
            details: 'Groups events that share common field values into transactions. Useful for tracking sessions or multi-step processes.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Transaction'
        },
        'rex': {
            type: 'command',
            description: 'Extract fields using regex',
            syntax: 'rex [field=<field>] "<regex>"',
            example: 'rex field=_raw "(?<ip>\\d+\\.\\d+\\.\\d+\\.\\d+)"',
            details: 'Extracts fields from events using regular expressions with named capture groups.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Rex'
        },
        'regex': {
            type: 'command',
            description: 'Filter events using regex',
            syntax: 'regex <field>=<regex>',
            example: 'regex _raw="error.*database"',
            details: 'Filters events based on regular expression matching. Similar to search but uses full regex syntax.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Regex'
        },
        'spath': {
            type: 'command',
            description: 'Extract fields from structured data',
            syntax: 'spath [input=<field>] [output=<field>] [path=<path>]',
            example: 'spath input=json_data path=user.name output=username',
            details: 'Extracts fields from XML or JSON data. Automatically detects format and extracts nested fields.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Spath'
        },
        'bucket': {
            type: 'command',
            description: 'Group values into buckets',
            syntax: 'bucket <field> [span=<value>]',
            example: 'bucket _time span=1h',
            details: 'Bins numeric or time values into discrete buckets for aggregation and visualization.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Bucket'
        },
        'bin': {
            type: 'command',
            description: 'Alias for bucket command',
            syntax: 'bin <field> [span=<value>]',
            example: 'bin response_time span=100',
            details: 'Alias for the bucket command. Bins values into discrete ranges.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Bin'
        },
        'makemv': {
            type: 'command',
            description: 'Convert field to multivalue',
            syntax: 'makemv [delim=<string>] <field>',
            example: 'makemv delim="," tags',
            details: 'Converts a single-value field into a multivalue field by splitting on a delimiter.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Makemv'
        },
        'mvexpand': {
            type: 'command',
            description: 'Expand multivalue fields',
            syntax: 'mvexpand <field>',
            example: 'mvexpand email_addresses',
            details: 'Creates a separate event for each value in a multivalue field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Mvexpand'
        },
        'join': {
            type: 'command',
            description: 'Join results with subsearch',
            syntax: 'join [type=inner|outer|left] <field-list> [subsearch]',
            example: 'join user_id [search index=users]',
            details: 'Combines results from main search with results from a subsearch based on common fields.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Join'
        },
        'append': {
            type: 'command',
            description: 'Append subsearch results',
            syntax: 'append [subsearch]',
            example: 'append [search index=archive]',
            details: 'Appends the results of a subsearch to the current results.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Append'
        },
        'appendcols': {
            type: 'command',
            description: 'Append columns from subsearch',
            syntax: 'appendcols [subsearch]',
            example: 'appendcols [stats count by host]',
            details: 'Appends fields from a subsearch as new columns to the current results.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Appendcols'
        },
        'lookup': {
            type: 'command',
            description: 'Enrich events with lookup data',
            syntax: 'lookup <lookup-table> <lookup-field> [OUTPUT <output-fields>]',
            example: 'lookup user_info user_id OUTPUT email, department',
            details: 'Enriches events by matching fields with a lookup table and adding additional fields.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Lookup'
        },
        'inputlookup': {
            type: 'command',
            description: 'Load lookup table as events',
            syntax: 'inputlookup <lookup-table>',
            example: 'inputlookup threat_intelligence.csv',
            details: 'Loads a lookup table as if it were indexed data. Useful for reference data searches.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Inputlookup'
        },
        'outputlookup': {
            type: 'command',
            description: 'Write results to lookup table',
            syntax: 'outputlookup <lookup-table>',
            example: 'outputlookup user_sessions.csv',
            details: 'Writes search results to a lookup table file for later use.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Outputlookup'
        },
        'eventstats': {
            type: 'command',
            description: 'Add statistics to events',
            syntax: 'eventstats <stats-function> [by <field-list>]',
            example: 'eventstats avg(response_time) as avg_response by host',
            details: 'Adds statistical aggregations as new fields to each event without reducing the number of events.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Eventstats'
        },
        'streamstats': {
            type: 'command',
            description: 'Calculate streaming statistics',
            syntax: 'streamstats <stats-function> [window=N]',
            example: 'streamstats count as event_number',
            details: 'Calculates cumulative or windowed statistics as events stream through the pipeline.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Streamstats'
        }
    },

    // Statistical Functions
    statsFunctions: {
        'count': {
            type: 'function',
            description: 'Count events or field values',
            syntax: 'count(<field>)',
            example: 'stats count by status',
            details: 'Returns the number of events. When used with a field, counts non-null values.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'sum': {
            type: 'function',
            description: 'Sum numeric values',
            syntax: 'sum(<field>)',
            example: 'stats sum(bytes) by host',
            details: 'Returns the sum of numeric values in the specified field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'avg': {
            type: 'function',
            description: 'Calculate average',
            syntax: 'avg(<field>)',
            example: 'stats avg(response_time) by endpoint',
            details: 'Returns the arithmetic mean of numeric values.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'min': {
            type: 'function',
            description: 'Find minimum value',
            syntax: 'min(<field>)',
            example: 'stats min(price) by category',
            details: 'Returns the minimum value in the specified field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'max': {
            type: 'function',
            description: 'Find maximum value',
            syntax: 'max(<field>)',
            example: 'stats max(cpu_usage) by server',
            details: 'Returns the maximum value in the specified field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'median': {
            type: 'function',
            description: 'Calculate median value',
            syntax: 'median(<field>)',
            example: 'stats median(latency)',
            details: 'Returns the middle value when values are sorted.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'mode': {
            type: 'function',
            description: 'Find most common value',
            syntax: 'mode(<field>)',
            example: 'stats mode(status_code)',
            details: 'Returns the most frequently occurring value.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'stdev': {
            type: 'function',
            description: 'Calculate standard deviation',
            syntax: 'stdev(<field>)',
            example: 'stats stdev(response_time)',
            details: 'Returns the sample standard deviation of numeric values.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'var': {
            type: 'function',
            description: 'Calculate variance',
            syntax: 'var(<field>)',
            example: 'stats var(sales)',
            details: 'Returns the sample variance of numeric values.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'dc': {
            type: 'function',
            description: 'Count distinct values',
            syntax: 'dc(<field>)',
            example: 'stats dc(user_id) as unique_users',
            details: 'Returns the count of distinct (unique) values in a field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'distinct_count': {
            type: 'function',
            description: 'Alias for dc()',
            syntax: 'distinct_count(<field>)',
            example: 'stats distinct_count(ip_address)',
            details: 'Alias for dc(). Returns count of unique values.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'values': {
            type: 'function',
            description: 'List unique values',
            syntax: 'values(<field>)',
            example: 'stats values(action) by user',
            details: 'Returns a multivalue field containing all unique values.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'list': {
            type: 'function',
            description: 'List all values',
            syntax: 'list(<field>)',
            example: 'stats list(error_message) by host',
            details: 'Returns a multivalue field containing all values (including duplicates).',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'earliest': {
            type: 'function',
            description: 'Find earliest time',
            syntax: 'earliest(<field>)',
            example: 'stats earliest(_time) as first_seen',
            details: 'Returns the chronologically earliest value.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'latest': {
            type: 'function',
            description: 'Find latest time',
            syntax: 'latest(<field>)',
            example: 'stats latest(_time) as last_seen',
            details: 'Returns the chronologically latest value.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'first': {
            type: 'function',
            description: 'Get first value',
            syntax: 'first(<field>)',
            example: 'stats first(status) by session_id',
            details: 'Returns the first value encountered in the search results.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'last': {
            type: 'function',
            description: 'Get last value',
            syntax: 'last(<field>)',
            example: 'stats last(status) by session_id',
            details: 'Returns the last value encountered in the search results.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'perc': {
            type: 'function',
            description: 'Calculate percentile',
            syntax: 'perc<N>(<field>)',
            example: 'stats perc95(response_time)',
            details: 'Returns the Nth percentile value. Common: perc50 (median), perc95, perc99.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'range': {
            type: 'function',
            description: 'Calculate range (max - min)',
            syntax: 'range(<field>)',
            example: 'stats range(temperature)',
            details: 'Returns the difference between maximum and minimum values.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        },
        'rate': {
            type: 'function',
            description: 'Calculate rate per second',
            syntax: 'rate(count)',
            example: 'stats rate(count) as events_per_sec',
            details: 'Calculates the rate of events per second.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/Stats'
        }
    },

    // Eval Functions
    evalFunctions: {
        // Math functions
        'abs': {
            type: 'function',
            description: 'Absolute value',
            syntax: 'abs(<num>)',
            example: 'eval diff=abs(value1-value2)',
            details: 'Returns the absolute value of a number.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'ceil': {
            type: 'function',
            description: 'Round up to integer',
            syntax: 'ceil(<num>)',
            example: 'eval rounded=ceil(3.2)',
            details: 'Rounds a number up to the nearest integer.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'floor': {
            type: 'function',
            description: 'Round down to integer',
            syntax: 'floor(<num>)',
            example: 'eval rounded=floor(3.8)',
            details: 'Rounds a number down to the nearest integer.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'round': {
            type: 'function',
            description: 'Round to nearest integer',
            syntax: 'round(<num>, [decimals])',
            example: 'eval rounded=round(3.14159, 2)',
            details: 'Rounds a number to the specified number of decimal places.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'sqrt': {
            type: 'function',
            description: 'Square root',
            syntax: 'sqrt(<num>)',
            example: 'eval result=sqrt(16)',
            details: 'Returns the square root of a number.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'pow': {
            type: 'function',
            description: 'Raise to power',
            syntax: 'pow(<num>, <exp>)',
            example: 'eval result=pow(2, 8)',
            details: 'Raises a number to the specified power.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'exp': {
            type: 'function',
            description: 'Exponential (e^x)',
            syntax: 'exp(<num>)',
            example: 'eval result=exp(2)',
            details: 'Returns e raised to the power of the number.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'log': {
            type: 'function',
            description: 'Logarithm base 10',
            syntax: 'log(<num>, [base])',
            example: 'eval result=log(100)',
            details: 'Returns the logarithm of a number. Default base is 10.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'ln': {
            type: 'function',
            description: 'Natural logarithm',
            syntax: 'ln(<num>)',
            example: 'eval result=ln(2.718)',
            details: 'Returns the natural logarithm (base e) of a number.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'pi': {
            type: 'function',
            description: 'Value of pi',
            syntax: 'pi()',
            example: 'eval circumference=2*pi()*radius',
            details: 'Returns the value of pi (3.141592653589793).',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },
        'random': {
            type: 'function',
            description: 'Random number',
            syntax: 'random()',
            example: 'eval rand=random()',
            details: 'Returns a pseudo-random integer.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MathematicalFunctions'
        },

        // String functions
        'len': {
            type: 'function',
            description: 'String length',
            syntax: 'len(<str>)',
            example: 'eval length=len(message)',
            details: 'Returns the character length of a string.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'lower': {
            type: 'function',
            description: 'Convert to lowercase',
            syntax: 'lower(<str>)',
            example: 'eval username=lower(UserName)',
            details: 'Converts a string to lowercase.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'upper': {
            type: 'function',
            description: 'Convert to uppercase',
            syntax: 'upper(<str>)',
            example: 'eval code=upper(status_code)',
            details: 'Converts a string to uppercase.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'ltrim': {
            type: 'function',
            description: 'Trim left whitespace',
            syntax: 'ltrim(<str>, [chars])',
            example: 'eval trimmed=ltrim(field)',
            details: 'Removes leading whitespace or specified characters.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'rtrim': {
            type: 'function',
            description: 'Trim right whitespace',
            syntax: 'rtrim(<str>, [chars])',
            example: 'eval trimmed=rtrim(field)',
            details: 'Removes trailing whitespace or specified characters.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'trim': {
            type: 'function',
            description: 'Trim whitespace',
            syntax: 'trim(<str>, [chars])',
            example: 'eval trimmed=trim(field)',
            details: 'Removes leading and trailing whitespace or specified characters.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'substr': {
            type: 'function',
            description: 'Extract substring',
            syntax: 'substr(<str>, <start>, [length])',
            example: 'eval code=substr(message, 1, 3)',
            details: 'Extracts a substring starting at the specified position.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'replace': {
            type: 'function',
            description: 'Replace text',
            syntax: 'replace(<str>, <regex>, <replacement>)',
            example: 'eval clean=replace(text, "\\s+", " ")',
            details: 'Replaces text matching a regular expression.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'split': {
            type: 'function',
            description: 'Split string into multivalue',
            syntax: 'split(<str>, <delim>)',
            example: 'eval tags=split(tag_list, ",")',
            details: 'Splits a string into a multivalue field using a delimiter.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/TextFunctions'
        },
        'tonumber': {
            type: 'function',
            description: 'Convert to number',
            syntax: 'tonumber(<str>, [base])',
            example: 'eval num=tonumber(string_value)',
            details: 'Converts a string to a number. Optionally specify base (2-36).',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ConversionFunctions'
        },
        'tostring': {
            type: 'function',
            description: 'Convert to string',
            syntax: 'tostring(<value>, [format])',
            example: 'eval str=tostring(number, "hex")',
            details: 'Converts a value to a string. Supports formatting options.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ConversionFunctions'
        },

        // Comparison and conditional
        'case': {
            type: 'function',
            description: 'Conditional evaluation',
            syntax: 'case(<condition1>, <value1>, <condition2>, <value2>, ...)',
            example: 'eval severity=case(code<300, "low", code<500, "medium", code>=500, "high")',
            details: 'Evaluates conditions in order and returns the value for the first true condition.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ConditionalFunctions'
        },
        'if': {
            type: 'function',
            description: 'If-then-else',
            syntax: 'if(<condition>, <true-value>, <false-value>)',
            example: 'eval status=if(code=200, "success", "failure")',
            details: 'Returns one value if condition is true, another if false.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ConditionalFunctions'
        },
        'like': {
            type: 'function',
            description: 'Pattern matching',
            syntax: 'like(<str>, <pattern>)',
            example: 'eval matches=like(url, "%/api/%")',
            details: 'SQL-style pattern matching. Use % for wildcard, _ for single character.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ComparisonAndConditionalFunctions'
        },
        'match': {
            type: 'function',
            description: 'Regex matching',
            syntax: 'match(<str>, <regex>)',
            example: 'eval is_ip=match(field, "^\\d+\\.\\d+\\.\\d+\\.\\d+$")',
            details: 'Returns true if the string matches the regular expression.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ComparisonAndConditionalFunctions'
        },
        'searchmatch': {
            type: 'function',
            description: 'Search expression matching',
            syntax: 'searchmatch(<search-expression>)',
            example: 'eval matches=searchmatch("error OR failed")',
            details: 'Returns true if the event matches the search expression.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ComparisonAndConditionalFunctions'
        },
        'cidrmatch': {
            type: 'function',
            description: 'CIDR subnet matching',
            syntax: 'cidrmatch(<cidr>, <ip>)',
            example: 'eval is_internal=cidrmatch("10.0.0.0/8", src_ip)',
            details: 'Returns true if the IP address is within the CIDR subnet.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/ComparisonAndConditionalFunctions'
        },

        // Date/Time functions
        'now': {
            type: 'function',
            description: 'Current time',
            syntax: 'now()',
            example: 'eval current_time=now()',
            details: 'Returns the current epoch time in seconds.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/DateAndTimeFunctions'
        },
        'time': {
            type: 'function',
            description: 'Parse time string',
            syntax: 'time()',
            example: 'eval event_time=time()',
            details: 'Returns the time value of the event.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/DateAndTimeFunctions'
        },
        'relative_time': {
            type: 'function',
            description: 'Calculate relative time',
            syntax: 'relative_time(<time>, <offset>)',
            example: 'eval yesterday=relative_time(now(), "-1d")',
            details: 'Returns a time relative to the specified time. Offset uses time modifiers like -1d, +2h.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/DateAndTimeFunctions'
        },
        'strftime': {
            type: 'function',
            description: 'Format time as string',
            syntax: 'strftime(<time>, <format>)',
            example: 'eval date=strftime(_time, "%Y-%m-%d")',
            details: 'Formats an epoch time as a string using strftime format codes.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/DateAndTimeFunctions'
        },
        'strptime': {
            type: 'function',
            description: 'Parse time string',
            syntax: 'strptime(<str>, <format>)',
            example: 'eval epoch=strptime(date_string, "%Y-%m-%d")',
            details: 'Parses a time string into epoch time using strptime format codes.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/DateAndTimeFunctions'
        },

        // Cryptographic functions
        'md5': {
            type: 'function',
            description: 'MD5 hash',
            syntax: 'md5(<str>)',
            example: 'eval hash=md5(password)',
            details: 'Returns the MD5 hash of a string.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/CryptographicFunctions'
        },
        'sha1': {
            type: 'function',
            description: 'SHA1 hash',
            syntax: 'sha1(<str>)',
            example: 'eval hash=sha1(data)',
            details: 'Returns the SHA1 hash of a string.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/CryptographicFunctions'
        },
        'sha256': {
            type: 'function',
            description: 'SHA256 hash',
            syntax: 'sha256(<str>)',
            example: 'eval hash=sha256(data)',
            details: 'Returns the SHA256 hash of a string.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/CryptographicFunctions'
        },
        'sha512': {
            type: 'function',
            description: 'SHA512 hash',
            syntax: 'sha512(<str>)',
            example: 'eval hash=sha512(data)',
            details: 'Returns the SHA512 hash of a string.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/CryptographicFunctions'
        },

        // Multivalue functions
        'mvcount': {
            type: 'function',
            description: 'Count multivalue elements',
            syntax: 'mvcount(<mv-field>)',
            example: 'eval num_tags=mvcount(tags)',
            details: 'Returns the number of values in a multivalue field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MultivalueFunctions'
        },
        'mvindex': {
            type: 'function',
            description: 'Get multivalue element',
            syntax: 'mvindex(<mv-field>, <index>)',
            example: 'eval first_tag=mvindex(tags, 0)',
            details: 'Returns the value at the specified index in a multivalue field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MultivalueFunctions'
        },
        'mvfilter': {
            type: 'function',
            description: 'Filter multivalue field',
            syntax: 'mvfilter(<condition>)',
            example: 'eval errors=mvfilter(match(messages, "error"))',
            details: 'Filters a multivalue field based on a condition.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MultivalueFunctions'
        },
        'mvjoin': {
            type: 'function',
            description: 'Join multivalue elements',
            syntax: 'mvjoin(<mv-field>, <delim>)',
            example: 'eval tag_list=mvjoin(tags, ", ")',
            details: 'Joins multivalue field elements into a single string with a delimiter.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MultivalueFunctions'
        },
        'mvsort': {
            type: 'function',
            description: 'Sort multivalue field',
            syntax: 'mvsort(<mv-field>)',
            example: 'eval sorted=mvsort(values)',
            details: 'Sorts the values in a multivalue field.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/MultivalueFunctions'
        },

        // Informational functions
        'isnull': {
            type: 'function',
            description: 'Check if null',
            syntax: 'isnull(<value>)',
            example: 'eval missing=isnull(field)',
            details: 'Returns true if the value is null.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/InformationalFunctions'
        },
        'isnotnull': {
            type: 'function',
            description: 'Check if not null',
            syntax: 'isnotnull(<value>)',
            example: 'eval has_value=isnotnull(field)',
            details: 'Returns true if the value is not null.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/InformationalFunctions'
        },
        'typeof': {
            type: 'function',
            description: 'Get value type',
            syntax: 'typeof(<value>)',
            example: 'eval type=typeof(field)',
            details: 'Returns the data type of a value (Number, String, Boolean, etc.).',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/SearchReference/InformationalFunctions'
        }
    },

    // Boolean Operators
    booleanOperators: {
        'AND': {
            type: 'operator',
            description: 'Logical AND',
            details: 'Both conditions must be true. Can also use lowercase "and".',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Search/Booleanoperators'
        },
        'OR': {
            type: 'operator',
            description: 'Logical OR',
            details: 'At least one condition must be true. Can also use lowercase "or".',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Search/Booleanoperators'
        },
        'NOT': {
            type: 'operator',
            description: 'Logical NOT',
            details: 'Negates a condition. Can also use lowercase "not".',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Search/Booleanoperators'
        },
        'XOR': {
            type: 'operator',
            description: 'Logical XOR',
            details: 'Exactly one condition must be true (exclusive or).',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Search/Booleanoperators'
        }
    },

    // Common Fields
    commonFields: {
        '_time': {
            type: 'field',
            description: 'Event timestamp',
            category: 'Time',
            details: 'The timestamp of the event in epoch time.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutdefaultfields'
        },
        '_raw': {
            type: 'field',
            description: 'Raw event data',
            category: 'Meta',
            details: 'The original raw text of the event.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutdefaultfields'
        },
        'host': {
            type: 'field',
            description: 'Event host',
            category: 'Meta',
            details: 'The host from which the event originated.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutdefaultfields'
        },
        'source': {
            type: 'field',
            description: 'Event source',
            category: 'Meta',
            details: 'The file or stream from which the event came.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutdefaultfields'
        },
        'sourcetype': {
            type: 'field',
            description: 'Event source type',
            category: 'Meta',
            details: 'The type of data source (e.g., access_combined, syslog).',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutdefaultfields'
        },
        'index': {
            type: 'field',
            description: 'Splunk index',
            category: 'Meta',
            details: 'The index where the event is stored.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutdefaultfields'
        },
        'splunk_server': {
            type: 'field',
            description: 'Splunk server name',
            category: 'Meta',
            details: 'The Splunk server that indexed the event.',
            docUrl: 'https://docs.splunk.com/Documentation/Splunk/latest/Data/Aboutdefaultfields'
        }
    }
};

// Helper function to get explanation for any token
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();
    const upperToken = token.toUpperCase();

    // Check all knowledge base categories
    const allCategories = [
        splKnowledge.searchCommands,
        splKnowledge.statsFunctions,
        splKnowledge.evalFunctions,
        splKnowledge.booleanOperators,
        splKnowledge.commonFields
    ];

    for (const category of allCategories) {
        // Try lowercase
        if (category[lowerToken]) {
            return category[lowerToken];
        }
        // Try uppercase (for operators)
        if (category[upperToken]) {
            return category[upperToken];
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
            details: `Field reference: ${token}. This may be an extracted field or event property.`
        };
    }

    if (tokenType === 'pipe') {
        return {
            type: 'operator',
            description: 'Pipe operator',
            details: 'Connects search commands in a pipeline. Results from the left command are passed to the right command.'
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized.'
    };
}
