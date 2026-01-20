// Cassandra CQL Knowledge Base - Cassandra Query Language

export const cqlKnowledge = {
    // DDL Statements
    ddlStatements: {
        'CREATE KEYSPACE': {
            type: 'statement',
            description: 'Create a new keyspace (database)',
            syntax: 'CREATE KEYSPACE [IF NOT EXISTS] keyspace_name WITH replication = {...}',
            example: 'CREATE KEYSPACE my_keyspace WITH replication = {\'class\': \'SimpleStrategy\', \'replication_factor\': 3}',
            details: 'Creates a keyspace with specified replication strategy. SimpleStrategy for single datacenter, NetworkTopologyStrategy for multiple datacenters.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#create-keyspace'
        },
        'CREATE TABLE': {
            type: 'statement',
            description: 'Create a new table',
            syntax: 'CREATE TABLE [IF NOT EXISTS] table_name (column_definitions, PRIMARY KEY (...))',
            example: 'CREATE TABLE users (user_id UUID PRIMARY KEY, name TEXT, email TEXT, created_at TIMESTAMP)',
            details: 'Creates a table with columns and primary key. Primary key consists of partition key and optional clustering columns.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#create-table'
        },
        'CREATE INDEX': {
            type: 'statement',
            description: 'Create a secondary index',
            syntax: 'CREATE INDEX [IF NOT EXISTS] index_name ON table_name (column_name)',
            example: 'CREATE INDEX ON users (email)',
            details: 'Creates a secondary index on a column. Useful for querying by non-primary key columns, but use sparingly.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#create-index'
        },
        'CREATE TYPE': {
            type: 'statement',
            description: 'Create a user-defined type',
            syntax: 'CREATE TYPE [IF NOT EXISTS] type_name (field_name field_type, ...)',
            example: 'CREATE TYPE address (street TEXT, city TEXT, zip_code TEXT)',
            details: 'Creates a custom type that can be used as a column type. Useful for grouping related fields.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#create-type'
        },
        'CREATE MATERIALIZED VIEW': {
            type: 'statement',
            description: 'Create a materialized view',
            syntax: 'CREATE MATERIALIZED VIEW view_name AS SELECT ... FROM table WHERE ... PRIMARY KEY (...)',
            example: 'CREATE MATERIALIZED VIEW users_by_email AS SELECT * FROM users WHERE email IS NOT NULL PRIMARY KEY (email, user_id)',
            details: 'Creates a materialized view with different primary key for alternative query patterns. Automatically maintained by Cassandra.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#create-materialized-view'
        },
        'ALTER TABLE': {
            type: 'statement',
            description: 'Modify table structure',
            syntax: 'ALTER TABLE table_name ADD|DROP|RENAME column_name',
            example: 'ALTER TABLE users ADD phone TEXT',
            details: 'Modifies table structure. Can add columns, drop columns, or rename columns. Cannot modify primary key.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#alter-table'
        },
        'DROP TABLE': {
            type: 'statement',
            description: 'Delete a table',
            syntax: 'DROP TABLE [IF EXISTS] table_name',
            example: 'DROP TABLE users',
            details: 'Permanently deletes a table and all its data. Use with caution.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#drop-table'
        },
        'TRUNCATE': {
            type: 'statement',
            description: 'Remove all data from table',
            syntax: 'TRUNCATE [TABLE] table_name',
            example: 'TRUNCATE users',
            details: 'Removes all data from a table but keeps the table structure. Faster than DELETE but irreversible.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#truncate'
        }
    },

    // DML Statements
    dmlStatements: {
        'SELECT': {
            type: 'statement',
            description: 'Query data from table',
            syntax: 'SELECT columns FROM table WHERE conditions [LIMIT n] [ALLOW FILTERING]',
            example: 'SELECT * FROM users WHERE user_id = 123e4567-e89b-12d3-a456-426614174000',
            details: 'Retrieves data from table. WHERE clause must include partition key. Use ALLOW FILTERING cautiously as it can be slow.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#select'
        },
        'INSERT': {
            type: 'statement',
            description: 'Insert data into table',
            syntax: 'INSERT INTO table (columns) VALUES (values) [USING TTL seconds]',
            example: 'INSERT INTO users (user_id, name, email) VALUES (uuid(), \'John\', \'john@example.com\') USING TTL 86400',
            details: 'Inserts a new row. Can specify TTL (time to live) for automatic expiration. Upserts if row exists.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#insert'
        },
        'UPDATE': {
            type: 'statement',
            description: 'Update existing data',
            syntax: 'UPDATE table [USING TTL seconds] SET column = value WHERE conditions',
            example: 'UPDATE users USING TTL 3600 SET email = \'newemail@example.com\' WHERE user_id = uuid()',
            details: 'Updates columns in a row. Requires WHERE clause with full primary key. Can set TTL for updated columns.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#update'
        },
        'DELETE': {
            type: 'statement',
            description: 'Delete data from table',
            syntax: 'DELETE [columns] FROM table [USING TIMESTAMP timestamp] WHERE conditions',
            example: 'DELETE FROM users WHERE user_id = uuid()',
            details: 'Deletes rows or specific columns. Requires WHERE clause with full primary key. Creates tombstones.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#delete'
        },
        'BATCH': {
            type: 'statement',
            description: 'Execute multiple statements atomically',
            syntax: 'BEGIN BATCH [USING TIMESTAMP timestamp] statements... APPLY BATCH',
            example: 'BEGIN BATCH\n  INSERT INTO users (user_id, name) VALUES (uuid(), \'John\');\n  UPDATE users SET email = \'john@example.com\' WHERE user_id = uuid();\nAPPLY BATCH',
            details: 'Executes multiple statements atomically. Use for same partition key only. Logged batches ensure atomicity.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#batch'
        }
    },

    // CQL-Specific Features
    cqlFeatures: {
        'USING TTL': {
            type: 'clause',
            description: 'Set time-to-live for data',
            syntax: 'USING TTL seconds',
            example: 'INSERT INTO sessions (session_id, data) VALUES (uuid(), \'data\') USING TTL 3600',
            details: 'Sets automatic expiration time in seconds. Data is automatically deleted after TTL expires. 0 means no expiration.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#ttl'
        },
        'USING TIMESTAMP': {
            type: 'clause',
            description: 'Set write timestamp',
            syntax: 'USING TIMESTAMP timestamp',
            example: 'UPDATE users USING TIMESTAMP 1234567890 SET name = \'John\' WHERE user_id = uuid()',
            details: 'Sets the write timestamp in microseconds. Used for conflict resolution. Higher timestamp wins.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#timestamp'
        },
        'IF EXISTS': {
            type: 'clause',
            description: 'Conditional delete/update',
            syntax: 'DELETE/UPDATE ... WHERE ... IF EXISTS',
            example: 'DELETE FROM users WHERE user_id = uuid() IF EXISTS',
            details: 'Only executes if the row exists. Provides lightweight transaction semantics.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#conditional-updates'
        },
        'IF NOT EXISTS': {
            type: 'clause',
            description: 'Conditional insert',
            syntax: 'INSERT ... IF NOT EXISTS',
            example: 'INSERT INTO users (user_id, name) VALUES (uuid(), \'John\') IF NOT EXISTS',
            details: 'Only inserts if the row doesn\'t exist. Prevents overwrites. Uses Paxos consensus.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#conditional-updates'
        },
        'ALLOW FILTERING': {
            type: 'clause',
            description: 'Allow non-indexed queries',
            syntax: 'SELECT ... WHERE ... ALLOW FILTERING',
            example: 'SELECT * FROM users WHERE age > 18 ALLOW FILTERING',
            details: 'Allows queries without partition key or secondary index. Can be slow on large datasets. Use with caution.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#allow-filtering'
        },
        'TOKEN': {
            type: 'function',
            description: 'Get partition token value',
            syntax: 'TOKEN(partition_key_columns)',
            example: 'SELECT * FROM users WHERE TOKEN(user_id) > TOKEN(uuid())',
            details: 'Returns the token value for a partition key. Useful for range queries across partitions.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#token'
        },
        'FROZEN': {
            type: 'modifier',
            description: 'Freeze collection or UDT',
            syntax: 'column_name FROZEN<collection_type>',
            example: 'addresses FROZEN<LIST<address>>',
            details: 'Treats collection or UDT as a single value. Required for nested collections. Cannot update individual elements.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#frozen'
        },
        'COUNTER': {
            type: 'type',
            description: 'Counter column type',
            syntax: 'column_name COUNTER',
            example: 'page_views COUNTER',
            details: 'Special column type for counters. Supports increment/decrement operations. Cannot be part of primary key.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#counters'
        },
        'PER PARTITION LIMIT': {
            type: 'clause',
            description: 'Limit results per partition',
            syntax: 'SELECT ... PER PARTITION LIMIT n',
            example: 'SELECT * FROM events WHERE user_id = uuid() PER PARTITION LIMIT 10',
            details: 'Limits the number of rows returned per partition. Useful for top-N queries per partition.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#per-partition-limit'
        },
        'GROUP BY': {
            type: 'clause',
            description: 'Group results (Cassandra 4.0+)',
            syntax: 'SELECT ... GROUP BY columns',
            example: 'SELECT user_id, COUNT(*) FROM events GROUP BY user_id',
            details: 'Groups results by specified columns. Available in Cassandra 4.0+. Limited to partition key and clustering columns.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/dml.html#grouping-results'
        }
    },

    // Data Types
    dataTypes: {
        'UUID': {
            type: 'data-type',
            description: 'Universally unique identifier',
            details: 'Type 4 UUID. Use uuid() function to generate. Good for distributed primary keys.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#uuid'
        },
        'TIMEUUID': {
            type: 'data-type',
            description: 'Time-based UUID',
            details: 'Type 1 UUID with timestamp. Use now() to generate. Sortable by time. Good for time-series data.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#timeuuid'
        },
        'TEXT': {
            type: 'data-type',
            description: 'UTF-8 string',
            details: 'Variable-length UTF-8 encoded string. Alias for VARCHAR.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#text'
        },
        'INT': {
            type: 'data-type',
            description: '32-bit signed integer',
            details: 'Signed 32-bit integer. Range: -2^31 to 2^31-1.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#int'
        },
        'BIGINT': {
            type: 'data-type',
            description: '64-bit signed integer',
            details: 'Signed 64-bit integer. Range: -2^63 to 2^63-1.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#bigint'
        },
        'TIMESTAMP': {
            type: 'data-type',
            description: 'Date and time',
            details: 'Date and time with millisecond precision. Stored as 64-bit integer (milliseconds since epoch).',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#timestamp'
        },
        'BOOLEAN': {
            type: 'data-type',
            description: 'True or false value',
            details: 'Boolean value: true or false.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#boolean'
        },
        'SET': {
            type: 'collection',
            description: 'Unordered collection of unique values',
            syntax: 'SET<type>',
            example: 'tags SET<TEXT>',
            details: 'Unordered set of unique values. Use for small collections. Cannot contain duplicates.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#sets'
        },
        'LIST': {
            type: 'collection',
            description: 'Ordered collection of values',
            syntax: 'LIST<type>',
            example: 'emails LIST<TEXT>',
            details: 'Ordered list of values. Allows duplicates. Use for small, ordered collections.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#lists'
        },
        'MAP': {
            type: 'collection',
            description: 'Key-value pairs',
            syntax: 'MAP<key_type, value_type>',
            example: 'attributes MAP<TEXT, TEXT>',
            details: 'Collection of key-value pairs. Keys must be unique. Use for small dictionaries.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#maps'
        },
        'TUPLE': {
            type: 'collection',
            description: 'Fixed-length ordered values',
            syntax: 'TUPLE<type1, type2, ...>',
            example: 'location TUPLE<FLOAT, FLOAT>',
            details: 'Fixed-length collection of typed values. Useful for grouping related values.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/types.html#tuples'
        }
    },

    // Functions
    functions: {
        'uuid': {
            type: 'function',
            description: 'Generate random UUID',
            syntax: 'uuid()',
            example: 'INSERT INTO users (user_id, name) VALUES (uuid(), \'John\')',
            details: 'Generates a random Type 4 UUID. Use for unique identifiers.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#uuid'
        },
        'now': {
            type: 'function',
            description: 'Generate time-based UUID',
            syntax: 'now()',
            example: 'INSERT INTO events (event_id, data) VALUES (now(), \'event data\')',
            details: 'Generates a Type 1 (time-based) UUID. Includes timestamp component.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#timeuuid-functions'
        },
        'toDate': {
            type: 'function',
            description: 'Convert timeuuid to date',
            syntax: 'toDate(timeuuid_column)',
            example: 'SELECT toDate(event_id) FROM events',
            details: 'Extracts the date from a timeuuid value.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#todate'
        },
        'toTimestamp': {
            type: 'function',
            description: 'Convert timeuuid to timestamp',
            syntax: 'toTimestamp(timeuuid_column)',
            example: 'SELECT toTimestamp(event_id) FROM events',
            details: 'Extracts the timestamp from a timeuuid value.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#totimestamp'
        },
        'COUNT': {
            type: 'function',
            description: 'Count rows',
            syntax: 'COUNT(*) or COUNT(column)',
            example: 'SELECT COUNT(*) FROM users',
            details: 'Counts the number of rows. Use with caution on large tables.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#count'
        },
        'MAX': {
            type: 'function',
            description: 'Find maximum value',
            syntax: 'MAX(column)',
            example: 'SELECT MAX(age) FROM users',
            details: 'Returns the maximum value of a column.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#max'
        },
        'MIN': {
            type: 'function',
            description: 'Find minimum value',
            syntax: 'MIN(column)',
            example: 'SELECT MIN(age) FROM users',
            details: 'Returns the minimum value of a column.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/functions.html#min'
        }
    },

    // Keywords
    keywords: {
        'PRIMARY KEY': {
            type: 'keyword',
            description: 'Define primary key',
            details: 'Defines the primary key. First part is partition key, rest are clustering columns. Determines data distribution and sort order.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#primary-key'
        },
        'CLUSTERING ORDER BY': {
            type: 'keyword',
            description: 'Define clustering column sort order',
            syntax: 'WITH CLUSTERING ORDER BY (column ASC|DESC)',
            example: 'WITH CLUSTERING ORDER BY (created_at DESC)',
            details: 'Specifies the sort order for clustering columns. Default is ASC.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#clustering-order'
        },
        'COMPACT STORAGE': {
            type: 'keyword',
            description: 'Legacy compact storage format',
            details: 'Legacy storage format from Cassandra 1.x. Deprecated. Do not use for new tables.',
            docUrl: 'https://cassandra.apache.org/doc/latest/cassandra/cql/ddl.html#compact-tables'
        }
    }
};

// Helper function to get explanation for CQL tokens
export function getExplanation(token, tokenType) {
    const upperToken = token.toUpperCase();
    const lowerToken = token.toLowerCase();

    // Check DDL statements
    if (cqlKnowledge.ddlStatements[upperToken]) {
        return cqlKnowledge.ddlStatements[upperToken];
    }

    // Check DML statements
    if (cqlKnowledge.dmlStatements[upperToken]) {
        return cqlKnowledge.dmlStatements[upperToken];
    }

    // Check CQL features
    if (cqlKnowledge.cqlFeatures[upperToken]) {
        return cqlKnowledge.cqlFeatures[upperToken];
    }

    // Check data types
    if (cqlKnowledge.dataTypes[upperToken]) {
        return cqlKnowledge.dataTypes[upperToken];
    }

    // Check functions
    if (cqlKnowledge.functions[lowerToken]) {
        return cqlKnowledge.functions[lowerToken];
    }

    // Check keywords
    if (cqlKnowledge.keywords[upperToken]) {
        return cqlKnowledge.keywords[upperToken];
    }

    // Default explanations
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String literal',
            details: 'A string value in CQL, enclosed in single quotes.'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: 'A numeric literal value.'
        };
    }

    if (tokenType === 'identifier') {
        return {
            type: 'identifier',
            description: 'Table, column, or keyspace name',
            details: 'An identifier for a keyspace, table, column, or other database object.'
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
        details: 'Token type not recognized in CQL syntax.'
    };
}
