// GraphQL Knowledge Base - Explanations for GraphQL operations, directives, and schema

export const graphqlKnowledge = {
    // GraphQL Operations
    operations: {
        'query': {
            type: 'operation',
            description: 'Read-only fetch operation',
            syntax: 'query [OperationName]($var: Type) { field }',
            example: 'query GetUser($id: ID!) { user(id: $id) { name } }',
            details: 'Queries are used to fetch data from the GraphQL API. They are read-only and can be named for better debugging and logging.',
            docUrl: 'https://graphql.org/learn/queries/'
        },
        'mutation': {
            type: 'operation',
            description: 'Write operation to modify server data',
            syntax: 'mutation [OperationName]($var: Type) { field }',
            example: 'mutation CreateUser($input: UserInput!) { createUser(input: $input) { id } }',
            details: 'Mutations are used to create, update, or delete data. They execute sequentially to prevent race conditions.',
            docUrl: 'https://graphql.org/learn/queries/#mutations'
        },
        'subscription': {
            type: 'operation',
            description: 'Real-time data updates via WebSocket',
            syntax: 'subscription [OperationName] { field }',
            example: 'subscription OnPostCreated { postCreated { id title } }',
            details: 'Subscriptions enable real-time updates by maintaining a persistent connection to the server. Typically implemented over WebSocket.',
            docUrl: 'https://graphql.org/blog/subscriptions-in-graphql-and-relay/'
        }
    },

    // GraphQL Directives
    directives: {
        '@include': {
            type: 'directive',
            description: 'Conditionally include field if argument is true',
            syntax: '@include(if: Boolean)',
            example: 'field @include(if: $includeField)',
            details: 'The @include directive allows you to conditionally include fields in the query based on a boolean variable or value.',
            docUrl: 'https://graphql.org/learn/queries/#directives'
        },
        '@skip': {
            type: 'directive',
            description: 'Conditionally skip field if argument is true',
            syntax: '@skip(if: Boolean)',
            example: 'field @skip(if: $skipField)',
            details: 'The @skip directive is the opposite of @include - it skips the field if the condition is true.',
            docUrl: 'https://graphql.org/learn/queries/#directives'
        },
        '@deprecated': {
            type: 'directive',
            description: 'Mark field or enum value as deprecated',
            syntax: '@deprecated(reason: String)',
            example: '@deprecated(reason: "Use newField instead")',
            details: 'Used in schema definitions to mark fields as deprecated. Helps with API evolution by signaling which fields should not be used.',
            docUrl: 'https://graphql.org/learn/best-practices/#versioning'
        },
        '@specifiedBy': {
            type: 'directive',
            description: 'Provide URL for custom scalar specification',
            syntax: '@specifiedBy(url: String)',
            example: 'scalar DateTime @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")',
            details: 'Used on custom scalar definitions to link to their specification, helping developers understand the expected format.',
            docUrl: 'https://github.com/graphql/graphql-spec/pull/649'
        },
        '@defer': {
            type: 'directive',
            description: 'Defer field execution for incremental delivery',
            syntax: '@defer(if: Boolean, label: String)',
            example: 'posts @defer { title }',
            details: 'Experimental directive that allows deferring the execution of a field, enabling incremental delivery of query results.',
            docUrl: 'https://github.com/graphql/graphql-spec/blob/main/rfcs/DeferStream.md'
        },
        '@stream': {
            type: 'directive',
            description: 'Stream list results incrementally',
            syntax: '@stream(if: Boolean, label: String, initialCount: Int)',
            example: 'posts @stream(initialCount: 5) { title }',
            details: 'Experimental directive for streaming list results incrementally rather than waiting for the entire list.',
            docUrl: 'https://github.com/graphql/graphql-spec/blob/main/rfcs/DeferStream.md'
        },
        '@client': {
            type: 'directive',
            description: 'Client-side only field (Apollo Client)',
            syntax: '@client',
            example: 'isSelected @client',
            details: 'Apollo Client directive that marks a field as client-side only, not sent to the server. Used for local state management.',
            docUrl: 'https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/'
        },
        '@export': {
            type: 'directive',
            description: 'Export field value to variable (Apollo Client)',
            syntax: '@export(as: String)',
            example: 'id @export(as: "userId")',
            details: 'Apollo Client directive that exports a field value to a variable for use in subsequent queries.',
            docUrl: 'https://www.apollographql.com/docs/react/data/directives/'
        }
    },

    // Schema Definition Language Keywords
    sdlKeywords: {
        'type': {
            type: 'keyword',
            description: 'Define an object type',
            syntax: 'type TypeName { field: Type }',
            example: 'type User { id: ID! name: String! }',
            details: 'Defines a GraphQL object type with named fields. Object types are the most common type in GraphQL schemas.',
            docUrl: 'https://graphql.org/learn/schema/#object-types-and-fields'
        },
        'interface': {
            type: 'keyword',
            description: 'Define an interface that types can implement',
            syntax: 'interface InterfaceName { field: Type }',
            example: 'interface Node { id: ID! }',
            details: 'Interfaces define a set of fields that implementing types must include. Useful for polymorphic queries.',
            docUrl: 'https://graphql.org/learn/schema/#interfaces'
        },
        'union': {
            type: 'keyword',
            description: 'Define a union of multiple types',
            syntax: 'union UnionName = Type1 | Type2',
            example: 'union SearchResult = User | Post | Comment',
            details: 'Unions represent a value that could be one of several types. Use inline fragments to query specific type fields.',
            docUrl: 'https://graphql.org/learn/schema/#union-types'
        },
        'enum': {
            type: 'keyword',
            description: 'Define an enumeration type',
            syntax: 'enum EnumName { VALUE1 VALUE2 }',
            example: 'enum Role { ADMIN USER GUEST }',
            details: 'Enums define a set of allowed values. Useful for fields with a fixed set of options.',
            docUrl: 'https://graphql.org/learn/schema/#enumeration-types'
        },
        'input': {
            type: 'keyword',
            description: 'Define an input object type',
            syntax: 'input InputName { field: Type }',
            example: 'input CreateUserInput { name: String! email: String! }',
            details: 'Input types are used for complex arguments in mutations and queries. They cannot contain fields with object types.',
            docUrl: 'https://graphql.org/learn/schema/#input-types'
        },
        'scalar': {
            type: 'keyword',
            description: 'Define a custom scalar type',
            syntax: 'scalar ScalarName',
            example: 'scalar DateTime',
            details: 'Scalars represent primitive leaf values. GraphQL has built-in scalars (Int, Float, String, Boolean, ID) and supports custom scalars.',
            docUrl: 'https://graphql.org/learn/schema/#scalar-types'
        },
        'schema': {
            type: 'keyword',
            description: 'Define the schema root types',
            syntax: 'schema { query: Query mutation: Mutation }',
            example: 'schema { query: Query mutation: Mutation subscription: Subscription }',
            details: 'The schema keyword explicitly defines the root operation types. Often optional as GraphQL uses Query, Mutation, and Subscription by convention.',
            docUrl: 'https://graphql.org/learn/schema/#the-query-and-mutation-types'
        },
        'extend': {
            type: 'keyword',
            description: 'Extend an existing type',
            syntax: 'extend type TypeName { newField: Type }',
            example: 'extend type User { posts: [Post!]! }',
            details: 'Allows adding fields to existing types. Useful for modular schema design and federation.',
            docUrl: 'https://graphql.org/learn/schema/#extending-types'
        },
        'implements': {
            type: 'keyword',
            description: 'Implement an interface',
            syntax: 'type TypeName implements Interface',
            example: 'type User implements Node { id: ID! name: String! }',
            details: 'Indicates that a type implements an interface and must include all interface fields.',
            docUrl: 'https://graphql.org/learn/schema/#interfaces'
        },
        'directive': {
            type: 'keyword',
            description: 'Define a custom directive',
            syntax: 'directive @name(arg: Type) on LOCATION',
            example: 'directive @auth(requires: Role) on FIELD_DEFINITION',
            details: 'Allows defining custom directives for schema or query annotations. Directives can modify execution behavior.',
            docUrl: 'https://graphql.org/learn/queries/#directives'
        },
        'fragment': {
            type: 'keyword',
            description: 'Define a reusable fragment',
            syntax: 'fragment FragmentName on Type { fields }',
            example: 'fragment UserFields on User { id name email }',
            details: 'Fragments allow reusing common field selections across multiple queries. Helps keep queries DRY.',
            docUrl: 'https://graphql.org/learn/queries/#fragments'
        },
        'on': {
            type: 'keyword',
            description: 'Specify type condition for fragments',
            syntax: 'on TypeName',
            example: 'fragment UserFields on User { name }',
            details: 'Used in fragments and inline fragments to specify which type the fields apply to.',
            docUrl: 'https://graphql.org/learn/queries/#fragments'
        }
    },

    // Built-in Scalar Types
    scalars: {
        'Int': {
            type: 'scalar',
            description: 'Signed 32-bit integer',
            details: 'A signed 32-bit integer value. Range: -2,147,483,648 to 2,147,483,647.',
            docUrl: 'https://graphql.org/learn/schema/#scalar-types'
        },
        'Float': {
            type: 'scalar',
            description: 'Signed double-precision floating-point',
            details: 'A signed double-precision floating-point value as specified by IEEE 754.',
            docUrl: 'https://graphql.org/learn/schema/#scalar-types'
        },
        'String': {
            type: 'scalar',
            description: 'UTF-8 character sequence',
            details: 'A UTF-8 character sequence. GraphQL strings are always valid UTF-8.',
            docUrl: 'https://graphql.org/learn/schema/#scalar-types'
        },
        'Boolean': {
            type: 'scalar',
            description: 'True or false value',
            details: 'A boolean value, either true or false.',
            docUrl: 'https://graphql.org/learn/schema/#scalar-types'
        },
        'ID': {
            type: 'scalar',
            description: 'Unique identifier',
            details: 'The ID scalar type represents a unique identifier, serialized as a String. Often used for object identification and caching.',
            docUrl: 'https://graphql.org/learn/schema/#scalar-types'
        }
    },

    // Introspection Fields
    introspection: {
        '__schema': {
            type: 'introspection',
            description: 'Query the schema structure',
            syntax: '__schema { types { name } }',
            example: 'query { __schema { queryType { name } } }',
            details: 'The __schema field provides access to the entire schema structure, including types, directives, and root operation types.',
            docUrl: 'https://graphql.org/learn/introspection/'
        },
        '__type': {
            type: 'introspection',
            description: 'Query information about a specific type',
            syntax: '__type(name: String!) { name kind }',
            example: 'query { __type(name: "User") { name fields { name } } }',
            details: 'The __type field allows querying metadata about a specific type by name.',
            docUrl: 'https://graphql.org/learn/introspection/'
        },
        '__typename': {
            type: 'introspection',
            description: 'Get the type name of an object',
            syntax: '__typename',
            example: '{ user { __typename name } }',
            details: 'The __typename field returns the name of the object type. Useful for determining which type was returned in union or interface queries.',
            docUrl: 'https://graphql.org/learn/introspection/'
        }
    },

    // Field Modifiers
    modifiers: {
        '!': {
            type: 'modifier',
            description: 'Non-null modifier',
            details: 'Indicates that a field or argument cannot be null. The server guarantees this field will always have a value.',
            example: 'name: String!'
        },
        '[]': {
            type: 'modifier',
            description: 'List modifier',
            details: 'Indicates that a field returns a list (array) of values. Can be combined with non-null modifiers.',
            example: 'posts: [Post]'
        }
    },

    // Special Operators
    operators: {
        '...': {
            type: 'operator',
            description: 'Fragment spread operator',
            details: 'Used to spread (include) a named fragment or inline fragment in a query.',
            example: '...UserFields or ... on User { name }'
        },
        '$': {
            type: 'operator',
            description: 'Variable prefix',
            details: 'Variables are prefixed with $ and must be declared in the operation definition.',
            example: 'query GetUser($id: ID!) { user(id: $id) { name } }'
        },
        ':': {
            type: 'operator',
            description: 'Type annotation or field alias',
            details: 'Used for type annotations in variable definitions or to create field aliases.',
            example: 'userName: name or $id: ID!'
        }
    }
};

// Helper function to get explanation for any GraphQL token
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();

    // Check operations
    if (graphqlKnowledge.operations[lowerToken]) {
        return graphqlKnowledge.operations[lowerToken];
    }

    // Check directives (with @ prefix)
    if (token.startsWith('@')) {
        const directive = graphqlKnowledge.directives[lowerToken];
        if (directive) return directive;
    }

    // Check SDL keywords
    if (graphqlKnowledge.sdlKeywords[lowerToken]) {
        return graphqlKnowledge.sdlKeywords[lowerToken];
    }

    // Check scalars
    if (graphqlKnowledge.scalars[token]) {
        return graphqlKnowledge.scalars[token];
    }

    // Check introspection
    if (token.startsWith('__')) {
        const introspection = graphqlKnowledge.introspection[lowerToken];
        if (introspection) return introspection;
    }

    // Check modifiers
    if (graphqlKnowledge.modifiers[token]) {
        return graphqlKnowledge.modifiers[token];
    }

    // Check operators
    if (graphqlKnowledge.operators[token]) {
        return graphqlKnowledge.operators[token];
    }

    // Default explanations
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String literal value',
            details: 'A string value in GraphQL, enclosed in double quotes.'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: 'An integer or floating-point number value.'
        };
    }

    if (tokenType === 'variable') {
        return {
            type: 'variable',
            description: 'GraphQL variable',
            details: 'Variables are prefixed with $ and must be declared in the operation definition with their type.'
        };
    }

    if (tokenType === 'field') {
        return {
            type: 'field',
            description: 'Field selection',
            details: 'A field being queried from the GraphQL schema. Fields can have arguments and return scalar or object types.'
        };
    }

    if (tokenType === 'argument') {
        return {
            type: 'argument',
            description: 'Field argument',
            details: 'Arguments allow you to pass values to fields to filter, sort, or modify their behavior.'
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized in GraphQL syntax.'
    };
}
