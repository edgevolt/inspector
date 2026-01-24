// Cypher Knowledge Base - Neo4j Graph Query Language

export const cypherKnowledge = {
    // Core Clauses
    clauses: {
        'MATCH': {
            type: 'clause',
            description: 'Pattern matching for graph traversal',
            syntax: 'MATCH pattern [WHERE conditions]',
            example: 'MATCH (n:Person)-[:KNOWS]->(m:Person) WHERE n.age > 25',
            details: 'Matches patterns in the graph. The fundamental clause for querying. Can match nodes, relationships, and paths.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/match/'
        },
        'RETURN': {
            type: 'clause',
            description: 'Specify what to return from query',
            syntax: 'RETURN expressions [AS alias]',
            example: 'RETURN n.name AS name, count(*) AS total',
            details: 'Defines which data to return from the query. Can return nodes, relationships, properties, or computed values.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/return/'
        },
        'WHERE': {
            type: 'clause',
            description: 'Filter results with conditions',
            syntax: 'WHERE conditions',
            example: 'WHERE n.age > 18 AND n.city = "London"',
            details: 'Filters matched patterns based on conditions. Supports boolean logic, comparisons, and pattern predicates.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/where/'
        },
        'CREATE': {
            type: 'clause',
            description: 'Create nodes and relationships',
            syntax: 'CREATE pattern',
            example: 'CREATE (n:Person {name: "Alice", age: 30})',
            details: 'Creates new nodes and relationships in the graph. Always creates new elements, even if similar ones exist.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/create/'
        },
        'MERGE': {
            type: 'clause',
            description: 'Match or create pattern',
            syntax: 'MERGE pattern [ON CREATE SET ...] [ON MATCH SET ...]',
            example: 'MERGE (n:Person {email: "alice@example.com"}) ON CREATE SET n.created = timestamp()',
            details: 'Ensures a pattern exists. Creates it if not found, matches if exists. Useful for upsert operations.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/merge/'
        },
        'DELETE': {
            type: 'clause',
            description: 'Delete nodes and relationships',
            syntax: 'DELETE elements',
            example: 'MATCH (n:Person {name: "Bob"}) DELETE n',
            details: 'Deletes nodes and relationships. Use DETACH DELETE to delete a node and all its relationships.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/delete/'
        },
        'DETACH DELETE': {
            type: 'clause',
            description: 'Delete node and its relationships',
            syntax: 'DETACH DELETE node',
            example: 'MATCH (n:Person {name: "Bob"}) DETACH DELETE n',
            details: 'Deletes a node and all relationships connected to it. Prevents orphaned relationships.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/delete/'
        },
        'SET': {
            type: 'clause',
            description: 'Update properties and labels',
            syntax: 'SET property = value [, ...]',
            example: 'SET n.age = 31, n:Verified',
            details: 'Updates node/relationship properties or adds labels. Can set multiple properties at once.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/set/'
        },
        'REMOVE': {
            type: 'clause',
            description: 'Remove properties and labels',
            syntax: 'REMOVE property|label',
            example: 'REMOVE n.age, n:Temporary',
            details: 'Removes properties or labels from nodes/relationships. Does not delete the node itself.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/remove/'
        },
        'WITH': {
            type: 'clause',
            description: 'Chain query parts and pass results',
            syntax: 'WITH expressions [WHERE conditions] [ORDER BY ...] [LIMIT ...]',
            example: 'WITH n, count(*) AS degree WHERE degree > 5',
            details: 'Chains query parts together, allowing intermediate processing. Essential for complex queries.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/with/'
        },
        'UNWIND': {
            type: 'clause',
            description: 'Expand list into rows',
            syntax: 'UNWIND list AS element',
            example: 'UNWIND [1, 2, 3] AS x RETURN x',
            details: 'Transforms a list into individual rows. Useful for batch operations and list processing.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/unwind/'
        },
        'ORDER BY': {
            type: 'clause',
            description: 'Sort results',
            syntax: 'ORDER BY expression [ASC|DESC]',
            example: 'ORDER BY n.age DESC, n.name ASC',
            details: 'Sorts results by one or more expressions. Default is ascending order.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/order-by/'
        },
        'LIMIT': {
            type: 'clause',
            description: 'Limit number of results',
            syntax: 'LIMIT n',
            example: 'LIMIT 10',
            details: 'Limits the number of rows returned. Often used with ORDER BY for top-N queries.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/limit/'
        },
        'SKIP': {
            type: 'clause',
            description: 'Skip first n results',
            syntax: 'SKIP n',
            example: 'SKIP 20',
            details: 'Skips the first n rows. Used with LIMIT for pagination.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/skip/'
        },
        'UNION': {
            type: 'clause',
            description: 'Combine results from multiple queries',
            syntax: 'query1 UNION [ALL] query2',
            example: 'MATCH (n:Person) RETURN n.name UNION MATCH (c:Company) RETURN c.name',
            details: 'Combines results from multiple queries. UNION removes duplicates, UNION ALL keeps them.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/union/'
        },
        'CALL': {
            type: 'clause',
            description: 'Invoke procedures',
            syntax: 'CALL procedure.name(args) [YIELD fields]',
            example: 'CALL db.labels() YIELD label',
            details: 'Calls stored procedures. Use YIELD to specify which fields to return.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/clauses/call/'
        }
    },

    // Pattern Elements
    patterns: {
        '(n)': {
            type: 'pattern',
            description: 'Node pattern',
            syntax: '(variable[:Label] [{properties}])',
            example: '(person:Person {name: "Alice"})',
            details: 'Matches or creates a node. Can specify variable, label, and properties.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/syntax/patterns/#cypher-pattern-node'
        },
        '(n:Label)': {
            type: 'pattern',
            description: 'Node with label',
            syntax: '(variable:Label)',
            example: '(p:Person)',
            details: 'Matches nodes with specific label. Labels categorize nodes.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/syntax/patterns/#cypher-pattern-node'
        },
        '-[r]->': {
            type: 'pattern',
            description: 'Directed relationship',
            syntax: '-[variable[:TYPE] [{properties}]]->, <-[...]-',
            example: '-[r:KNOWS {since: 2020}]->',
            details: 'Matches directed relationship. Arrow indicates direction. Can specify type and properties.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/syntax/patterns/#cypher-pattern-relationship'
        },
        '-[r]-': {
            type: 'pattern',
            description: 'Undirected relationship',
            syntax: '-[variable[:TYPE]]-',
            example: '-[r:RELATED]-',
            details: 'Matches relationship in either direction. Use when direction doesn\'t matter.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/syntax/patterns/#cypher-pattern-relationship'
        },
        '-[r*1..3]->': {
            type: 'pattern',
            description: 'Variable-length path',
            syntax: '-[variable*min..max]->',
            example: '-[r:KNOWS*1..3]->',
            details: 'Matches paths with variable number of relationships. Useful for finding connections within n hops.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/syntax/patterns/#cypher-pattern-varlength'
        },
        'shortestPath': {
            type: 'function',
            description: 'Find shortest path between nodes',
            syntax: 'shortestPath(pattern)',
            example: 'shortestPath((a:Person)-[:KNOWS*]-(b:Person))',
            details: 'Finds the shortest path matching the pattern. Returns a single path.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-shortestpath'
        },
        'allShortestPaths': {
            type: 'function',
            description: 'Find all shortest paths',
            syntax: 'allShortestPaths(pattern)',
            example: 'allShortestPaths((a)-[:KNOWS*]-(b))',
            details: 'Finds all shortest paths matching the pattern. Returns collection of paths.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-allshortestpaths'
        }
    },

    // Aggregation Functions
    aggregations: {
        'count': {
            type: 'function',
            description: 'Count elements',
            syntax: 'count(expression)',
            example: 'count(*), count(n), count(DISTINCT n.name)',
            details: 'Counts non-null values. count(*) counts all rows. Use DISTINCT to count unique values.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/aggregating/#functions-count'
        },
        'collect': {
            type: 'function',
            description: 'Collect values into list',
            syntax: 'collect(expression)',
            example: 'collect(n.name), collect(DISTINCT n.age)',
            details: 'Aggregates values into a list. Use DISTINCT to collect unique values only.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/aggregating/#functions-collect'
        },
        'sum': {
            type: 'function',
            description: 'Sum numeric values',
            syntax: 'sum(expression)',
            example: 'sum(n.amount)',
            details: 'Calculates the sum of numeric values. Returns null if no values.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/aggregating/#functions-sum'
        },
        'avg': {
            type: 'function',
            description: 'Calculate average',
            syntax: 'avg(expression)',
            example: 'avg(n.age)',
            details: 'Calculates the average of numeric values.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/aggregating/#functions-avg'
        },
        'min': {
            type: 'function',
            description: 'Find minimum value',
            syntax: 'min(expression)',
            example: 'min(n.age)',
            details: 'Returns the minimum value.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/aggregating/#functions-min'
        },
        'max': {
            type: 'function',
            description: 'Find maximum value',
            syntax: 'max(expression)',
            example: 'max(n.age)',
            details: 'Returns the maximum value.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/aggregating/#functions-max'
        }
    },

    // Scalar Functions
    scalarFunctions: {
        'id': {
            type: 'function',
            description: 'Get internal node/relationship ID',
            syntax: 'id(element)',
            example: 'id(n)',
            details: 'Returns the internal ID. Note: IDs may be reused after deletion. Use application-level IDs for persistence.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id'
        },
        'type': {
            type: 'function',
            description: 'Get relationship type',
            syntax: 'type(relationship)',
            example: 'type(r)',
            details: 'Returns the type of a relationship as a string.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-type'
        },
        'labels': {
            type: 'function',
            description: 'Get node labels',
            syntax: 'labels(node)',
            example: 'labels(n)',
            details: 'Returns a list of labels for a node.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-labels'
        },
        'properties': {
            type: 'function',
            description: 'Get all properties as map',
            syntax: 'properties(element)',
            example: 'properties(n)',
            details: 'Returns all properties of a node or relationship as a map.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-properties'
        },
        'size': {
            type: 'function',
            description: 'Get size of list or string',
            syntax: 'size(list|string)',
            example: 'size(n.tags), size("hello")',
            details: 'Returns the number of elements in a list or characters in a string.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-size'
        },
        'length': {
            type: 'function',
            description: 'Get path length',
            syntax: 'length(path)',
            example: 'length(p)',
            details: 'Returns the number of relationships in a path.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-length'
        },
        'coalesce': {
            type: 'function',
            description: 'Return first non-null value',
            syntax: 'coalesce(expression1, expression2, ...)',
            example: 'coalesce(n.email, n.phone, "N/A")',
            details: 'Returns the first non-null value from the list of expressions.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-coalesce'
        },
        'timestamp': {
            type: 'function',
            description: 'Get current timestamp',
            syntax: 'timestamp()',
            example: 'timestamp()',
            details: 'Returns the current time in milliseconds since Unix epoch.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-timestamp'
        }
    },

    // List Functions
    listFunctions: {
        'head': {
            type: 'function',
            description: 'Get first element of list',
            syntax: 'head(list)',
            example: 'head(n.tags)',
            details: 'Returns the first element of a list. Returns null for empty list.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-head'
        },
        'tail': {
            type: 'function',
            description: 'Get all but first element',
            syntax: 'tail(list)',
            example: 'tail(n.tags)',
            details: 'Returns all elements except the first. Returns empty list if list has 0 or 1 elements.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-tail'
        },
        'last': {
            type: 'function',
            description: 'Get last element of list',
            syntax: 'last(list)',
            example: 'last(n.tags)',
            details: 'Returns the last element of a list.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-last'
        },
        'range': {
            type: 'function',
            description: 'Generate range of integers',
            syntax: 'range(start, end [, step])',
            example: 'range(0, 10, 2)',
            details: 'Generates a list of integers from start to end with optional step.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/list/#functions-range'
        }
    },

    // String Functions
    stringFunctions: {
        'toUpper': {
            type: 'function',
            description: 'Convert to uppercase',
            syntax: 'toUpper(string)',
            example: 'toUpper(n.name)',
            details: 'Converts a string to uppercase.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-toupper'
        },
        'toLower': {
            type: 'function',
            description: 'Convert to lowercase',
            syntax: 'toLower(string)',
            example: 'toLower(n.email)',
            details: 'Converts a string to lowercase.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tolower'
        },
        'trim': {
            type: 'function',
            description: 'Remove whitespace',
            syntax: 'trim(string)',
            example: 'trim(n.name)',
            details: 'Removes leading and trailing whitespace.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-trim'
        },
        'substring': {
            type: 'function',
            description: 'Extract substring',
            syntax: 'substring(string, start [, length])',
            example: 'substring(n.name, 0, 3)',
            details: 'Extracts a substring starting at the given position.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-substring'
        },
        'split': {
            type: 'function',
            description: 'Split string into list',
            syntax: 'split(string, delimiter)',
            example: 'split(n.tags, ",")',
            details: 'Splits a string into a list using the delimiter.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-split'
        }
    },

    // Path Functions
    pathFunctions: {
        'nodes': {
            type: 'function',
            description: 'Get all nodes in path',
            syntax: 'nodes(path)',
            example: 'nodes(p)',
            details: 'Returns a list of all nodes in a path.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-nodes'
        },
        'relationships': {
            type: 'function',
            description: 'Get all relationships in path',
            syntax: 'relationships(path)',
            example: 'relationships(p)',
            details: 'Returns a list of all relationships in a path.',
            docUrl: 'https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-relationships'
        }
    }
};

// Helper function to get explanation for Cypher tokens
export function getExplanation(token, tokenType) {
    const upperToken = token.toUpperCase();
    const lowerToken = token.toLowerCase();

    // Check clauses
    if (cypherKnowledge.clauses[upperToken]) {
        return cypherKnowledge.clauses[upperToken];
    }

    // Check patterns
    if (cypherKnowledge.patterns[token]) {
        return cypherKnowledge.patterns[token];
    }

    // Check aggregations
    if (cypherKnowledge.aggregations[lowerToken]) {
        return cypherKnowledge.aggregations[lowerToken];
    }

    // Check scalar functions
    if (cypherKnowledge.scalarFunctions[lowerToken]) {
        return cypherKnowledge.scalarFunctions[lowerToken];
    }

    // Check list functions
    if (cypherKnowledge.listFunctions[lowerToken]) {
        return cypherKnowledge.listFunctions[lowerToken];
    }

    // Check string functions
    if (cypherKnowledge.stringFunctions[lowerToken]) {
        return cypherKnowledge.stringFunctions[lowerToken];
    }

    // Check path functions
    if (cypherKnowledge.pathFunctions[lowerToken]) {
        return cypherKnowledge.pathFunctions[lowerToken];
    }

    // Default explanations
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String literal',
            details: 'A string value in Cypher, enclosed in single or double quotes.'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: 'A numeric literal value.'
        };
    }

    if (tokenType === 'variable') {
        return {
            type: 'variable',
            description: 'Variable name',
            details: 'A variable representing a node, relationship, or value in the query.'
        };
    }

    if (tokenType === 'label') {
        return {
            type: 'label',
            description: 'Node label',
            details: 'A label categorizing nodes in the graph.'
        };
    }

    if (tokenType === 'relationship-type') {
        return {
            type: 'relationship-type',
            description: 'Relationship type',
            details: 'The type of relationship connecting nodes.'
        };
    }

    if (tokenType === 'property') {
        return {
            type: 'property',
            description: 'Property name',
            details: 'A property key on a node or relationship.'
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized in Cypher syntax.'
    };
}
