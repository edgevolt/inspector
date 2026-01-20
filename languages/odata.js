// OData Knowledge Base - Open Data Protocol query options and operators

export const odataKnowledge = {
    // Query Options
    queryOptions: {
        '$filter': {
            type: 'query-option',
            description: 'Filter results based on conditions',
            syntax: '$filter=expression',
            example: '$filter=Price gt 20 and Category eq \'Electronics\'',
            details: 'Filters the collection to only include items matching the boolean expression. Supports comparison, logical, and function operators.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptionfilter'
        },
        '$select': {
            type: 'query-option',
            description: 'Choose specific properties to return',
            syntax: '$select=Property1,Property2',
            example: '$select=Name,Price,Category',
            details: 'Specifies which properties to include in the response. Reduces payload size and improves performance.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptionselect'
        },
        '$expand': {
            type: 'query-option',
            description: 'Include related entities inline',
            syntax: '$expand=NavigationProperty',
            example: '$expand=Orders,Orders($expand=OrderDetails)',
            details: 'Expands related entities inline instead of requiring separate requests. Supports nested expansion.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptionexpand'
        },
        '$orderby': {
            type: 'query-option',
            description: 'Sort results by properties',
            syntax: '$orderby=Property [asc|desc]',
            example: '$orderby=Price desc,Name asc',
            details: 'Sorts the collection by one or more properties. Default is ascending. Supports multiple sort keys.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptionorderby'
        },
        '$top': {
            type: 'query-option',
            description: 'Limit number of results',
            syntax: '$top=n',
            example: '$top=10',
            details: 'Returns only the first n items from the collection. Used for pagination.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptiontop'
        },
        '$skip': {
            type: 'query-option',
            description: 'Skip first n results',
            syntax: '$skip=n',
            example: '$skip=20',
            details: 'Skips the first n items in the collection. Used with $top for pagination.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptionskip'
        },
        '$count': {
            type: 'query-option',
            description: 'Include total count of items',
            syntax: '$count=true',
            example: '$count=true',
            details: 'Includes the total count of items in the response, regardless of $top and $skip.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptioncount'
        },
        '$search': {
            type: 'query-option',
            description: 'Full-text search across entity',
            syntax: '$search=search-expression',
            example: '$search="blue OR green"',
            details: 'Performs full-text search across searchable properties. Supports AND, OR, NOT operators.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptionsearch'
        },
        '$format': {
            type: 'query-option',
            description: 'Specify response format',
            syntax: '$format=json|xml|atom',
            example: '$format=json',
            details: 'Specifies the media type of the response. Common values: json, application/json, xml.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptionformat'
        },
        '$apply': {
            type: 'query-option',
            description: 'Apply data aggregation transformations',
            syntax: '$apply=transformation',
            example: '$apply=groupby((Category),aggregate(Price with sum as Total))',
            details: 'Applies transformations like groupby, filter, aggregate for data aggregation. Part of OData aggregation extension.',
            docUrl: 'https://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/odata-data-aggregation-ext-v4.0.html'
        },
        '$compute': {
            type: 'query-option',
            description: 'Define computed properties',
            syntax: '$compute=expression as alias',
            example: '$compute=Price mul Quantity as Total',
            details: 'Defines computed properties that can be used in $select, $filter, or $orderby.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_SystemQueryOptioncompute'
        },
        '$index': {
            type: 'query-option',
            description: 'Reference items by position',
            syntax: '$index=n',
            example: '$index=5',
            details: 'References an item at a specific position in the collection.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_AddressingEntitieswithinaCollection'
        }
    },

    // Comparison Operators
    comparisonOperators: {
        'eq': {
            type: 'operator',
            description: 'Equal to',
            syntax: 'property eq value',
            example: 'Price eq 100',
            details: 'Tests if two values are equal. Works with all primitive types.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_EqualityandInequalityOperators'
        },
        'ne': {
            type: 'operator',
            description: 'Not equal to',
            syntax: 'property ne value',
            example: 'Category ne \'Books\'',
            details: 'Tests if two values are not equal.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_EqualityandInequalityOperators'
        },
        'gt': {
            type: 'operator',
            description: 'Greater than',
            syntax: 'property gt value',
            example: 'Price gt 20',
            details: 'Tests if left value is greater than right value. Works with numbers, dates, and strings.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ComparisonOperators'
        },
        'ge': {
            type: 'operator',
            description: 'Greater than or equal to',
            syntax: 'property ge value',
            example: 'Rating ge 4.5',
            details: 'Tests if left value is greater than or equal to right value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ComparisonOperators'
        },
        'lt': {
            type: 'operator',
            description: 'Less than',
            syntax: 'property lt value',
            example: 'Stock lt 10',
            details: 'Tests if left value is less than right value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ComparisonOperators'
        },
        'le': {
            type: 'operator',
            description: 'Less than or equal to',
            syntax: 'property le value',
            example: 'Price le 50',
            details: 'Tests if left value is less than or equal to right value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ComparisonOperators'
        }
    },

    // Logical Operators
    logicalOperators: {
        'and': {
            type: 'operator',
            description: 'Logical AND',
            syntax: 'expression and expression',
            example: 'Price gt 20 and Category eq \'Electronics\'',
            details: 'Returns true if both expressions are true.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LogicalOperators'
        },
        'or': {
            type: 'operator',
            description: 'Logical OR',
            syntax: 'expression or expression',
            example: 'Category eq \'Books\' or Category eq \'Music\'',
            details: 'Returns true if either expression is true.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LogicalOperators'
        },
        'not': {
            type: 'operator',
            description: 'Logical NOT',
            syntax: 'not expression',
            example: 'not (Price gt 100)',
            details: 'Negates the boolean value of the expression.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LogicalOperators'
        }
    },

    // Arithmetic Operators
    arithmeticOperators: {
        'add': {
            type: 'operator',
            description: 'Addition',
            syntax: 'value add value',
            example: 'Price add Tax',
            details: 'Adds two numeric values.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ArithmeticOperators'
        },
        'sub': {
            type: 'operator',
            description: 'Subtraction',
            syntax: 'value sub value',
            example: 'Price sub Discount',
            details: 'Subtracts the right value from the left value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ArithmeticOperators'
        },
        'mul': {
            type: 'operator',
            description: 'Multiplication',
            syntax: 'value mul value',
            example: 'Price mul Quantity',
            details: 'Multiplies two numeric values.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ArithmeticOperators'
        },
        'div': {
            type: 'operator',
            description: 'Division',
            syntax: 'value div value',
            example: 'Total div Count',
            details: 'Divides the left value by the right value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ArithmeticOperators'
        },
        'mod': {
            type: 'operator',
            description: 'Modulo',
            syntax: 'value mod value',
            example: 'Quantity mod 10',
            details: 'Returns the remainder of dividing the left value by the right value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_ArithmeticOperators'
        }
    },

    // String Functions
    stringFunctions: {
        'contains': {
            type: 'function',
            description: 'Check if string contains substring',
            syntax: 'contains(property, \'substring\')',
            example: 'contains(Name, \'phone\')',
            details: 'Returns true if the first string contains the second string. Case-sensitive.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_contains'
        },
        'startswith': {
            type: 'function',
            description: 'Check if string starts with substring',
            syntax: 'startswith(property, \'prefix\')',
            example: 'startswith(Name, \'Pro\')',
            details: 'Returns true if the string starts with the specified prefix.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_startswith'
        },
        'endswith': {
            type: 'function',
            description: 'Check if string ends with substring',
            syntax: 'endswith(property, \'suffix\')',
            example: 'endswith(Name, \'Pro\')',
            details: 'Returns true if the string ends with the specified suffix.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_endswith'
        },
        'length': {
            type: 'function',
            description: 'Get string length',
            syntax: 'length(property)',
            example: 'length(Description) gt 100',
            details: 'Returns the number of characters in the string.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_length'
        },
        'indexof': {
            type: 'function',
            description: 'Find position of substring',
            syntax: 'indexof(property, \'substring\')',
            example: 'indexof(Name, \'phone\') gt 0',
            details: 'Returns the zero-based position of the first occurrence of the substring, or -1 if not found.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_indexof'
        },
        'substring': {
            type: 'function',
            description: 'Extract substring',
            syntax: 'substring(property, start [, length])',
            example: 'substring(Name, 0, 3) eq \'Pro\'',
            details: 'Returns a substring starting at the specified position with optional length.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_substring'
        },
        'tolower': {
            type: 'function',
            description: 'Convert to lowercase',
            syntax: 'tolower(property)',
            example: 'tolower(Category) eq \'electronics\'',
            details: 'Converts the string to lowercase.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_tolower'
        },
        'toupper': {
            type: 'function',
            description: 'Convert to uppercase',
            syntax: 'toupper(property)',
            example: 'toupper(Code) eq \'ABC123\'',
            details: 'Converts the string to uppercase.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_toupper'
        },
        'trim': {
            type: 'function',
            description: 'Remove leading/trailing whitespace',
            syntax: 'trim(property)',
            example: 'trim(Name) eq \'Product\'',
            details: 'Removes leading and trailing whitespace from the string.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_trim'
        },
        'concat': {
            type: 'function',
            description: 'Concatenate strings',
            syntax: 'concat(string1, string2)',
            example: 'concat(FirstName, LastName) eq \'JohnDoe\'',
            details: 'Concatenates two strings together.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_concat'
        }
    },

    // Date/Time Functions
    dateFunctions: {
        'year': {
            type: 'function',
            description: 'Extract year from date',
            syntax: 'year(property)',
            example: 'year(BirthDate) eq 1990',
            details: 'Returns the year component of a date value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_year'
        },
        'month': {
            type: 'function',
            description: 'Extract month from date',
            syntax: 'month(property)',
            example: 'month(OrderDate) eq 12',
            details: 'Returns the month component (1-12) of a date value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_month'
        },
        'day': {
            type: 'function',
            description: 'Extract day from date',
            syntax: 'day(property)',
            example: 'day(OrderDate) eq 15',
            details: 'Returns the day component (1-31) of a date value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_day'
        },
        'hour': {
            type: 'function',
            description: 'Extract hour from datetime',
            syntax: 'hour(property)',
            example: 'hour(CreatedAt) ge 9',
            details: 'Returns the hour component (0-23) of a datetime value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_hour'
        },
        'minute': {
            type: 'function',
            description: 'Extract minute from datetime',
            syntax: 'minute(property)',
            example: 'minute(CreatedAt) lt 30',
            details: 'Returns the minute component (0-59) of a datetime value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_minute'
        },
        'second': {
            type: 'function',
            description: 'Extract second from datetime',
            syntax: 'second(property)',
            example: 'second(Timestamp) eq 0',
            details: 'Returns the second component (0-59) of a datetime value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_second'
        },
        'now': {
            type: 'function',
            description: 'Get current datetime',
            syntax: 'now()',
            example: 'CreatedAt lt now()',
            details: 'Returns the current date and time.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_now'
        },
        'date': {
            type: 'function',
            description: 'Extract date portion',
            syntax: 'date(property)',
            example: 'date(OrderDate) eq 2024-01-15',
            details: 'Returns the date portion of a datetime value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_date'
        },
        'time': {
            type: 'function',
            description: 'Extract time portion',
            syntax: 'time(property)',
            example: 'time(CreatedAt) gt 09:00:00',
            details: 'Returns the time portion of a datetime value.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_time'
        }
    },

    // Collection Operators
    collectionOperators: {
        'any': {
            type: 'operator',
            description: 'Check if any collection item matches',
            syntax: 'collection/any(variable: condition)',
            example: 'Orders/any(o: o/Total gt 100)',
            details: 'Returns true if any item in the collection satisfies the condition.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LambdaOperators'
        },
        'all': {
            type: 'operator',
            description: 'Check if all collection items match',
            syntax: 'collection/all(variable: condition)',
            example: 'Orders/all(o: o/Status eq \'Shipped\')',
            details: 'Returns true if all items in the collection satisfy the condition.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_LambdaOperators'
        }
    },

    // Type Functions
    typeFunctions: {
        'cast': {
            type: 'function',
            description: 'Cast to specified type',
            syntax: 'cast(expression, \'TypeName\')',
            example: 'cast(Price, \'Edm.Decimal\')',
            details: 'Casts the expression to the specified type.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_cast'
        },
        'isof': {
            type: 'function',
            description: 'Check if value is of type',
            syntax: 'isof(expression, \'TypeName\')',
            example: 'isof(Product, \'Model.ElectronicProduct\')',
            details: 'Returns true if the expression is of the specified type.',
            docUrl: 'https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#sec_isof'
        }
    }
};

// Helper function to get explanation for OData tokens
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();

    // Check query options
    if (token.startsWith('$')) {
        const option = odataKnowledge.queryOptions[lowerToken];
        if (option) return option;
    }

    // Check operators
    if (odataKnowledge.comparisonOperators[lowerToken]) {
        return odataKnowledge.comparisonOperators[lowerToken];
    }

    if (odataKnowledge.logicalOperators[lowerToken]) {
        return odataKnowledge.logicalOperators[lowerToken];
    }

    if (odataKnowledge.arithmeticOperators[lowerToken]) {
        return odataKnowledge.arithmeticOperators[lowerToken];
    }

    if (odataKnowledge.collectionOperators[lowerToken]) {
        return odataKnowledge.collectionOperators[lowerToken];
    }

    // Check functions
    if (odataKnowledge.stringFunctions[lowerToken]) {
        return odataKnowledge.stringFunctions[lowerToken];
    }

    if (odataKnowledge.dateFunctions[lowerToken]) {
        return odataKnowledge.dateFunctions[lowerToken];
    }

    if (odataKnowledge.typeFunctions[lowerToken]) {
        return odataKnowledge.typeFunctions[lowerToken];
    }

    // Default explanations
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String literal',
            details: 'A string value in OData query, enclosed in single quotes.'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: 'A numeric literal value.'
        };
    }

    if (tokenType === 'property') {
        return {
            type: 'property',
            description: 'Entity property',
            details: 'A property name of the entity. Use forward slash for navigation properties (e.g., Order/Customer/Name).'
        };
    }

    if (tokenType === 'boolean') {
        return {
            type: 'boolean',
            description: 'Boolean value',
            details: 'A true or false value.'
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized in OData syntax.'
    };
}
