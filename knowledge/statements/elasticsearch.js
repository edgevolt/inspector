// Elasticsearch Knowledge Base - Query DSL and ES|QL

export const elasticsearchKnowledge = {
    // ES|QL Commands (New SQL-like syntax)
    esqlCommands: {
        'FROM': {
            type: 'command',
            description: 'Specify source index or data stream',
            syntax: 'FROM index_name',
            example: 'FROM logs-*',
            details: 'The FROM command specifies the data source for the query. Supports wildcards and comma-separated indices.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-from.html'
        },
        'WHERE': {
            type: 'command',
            description: 'Filter rows based on conditions',
            syntax: 'WHERE condition',
            example: 'WHERE status == 200',
            details: 'Filters rows using boolean expressions. Supports comparison operators, logical operators, and functions.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-where.html'
        },
        'STATS': {
            type: 'command',
            description: 'Calculate aggregate statistics',
            syntax: 'STATS aggregation BY grouping_field',
            example: 'STATS avg(response_time) BY status',
            details: 'Performs aggregations like COUNT, AVG, SUM, MIN, MAX. Use BY clause for grouping.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-stats.html'
        },
        'SORT': {
            type: 'command',
            description: 'Sort results by fields',
            syntax: 'SORT field [ASC|DESC]',
            example: 'SORT timestamp DESC',
            details: 'Sorts results by one or more fields. Default is ascending order.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-sort.html'
        },
        'LIMIT': {
            type: 'command',
            description: 'Limit number of results',
            syntax: 'LIMIT count',
            example: 'LIMIT 100',
            details: 'Limits the number of rows returned. Default limit is 1000.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-limit.html'
        },
        'KEEP': {
            type: 'command',
            description: 'Keep only specified fields',
            syntax: 'KEEP field1, field2',
            example: 'KEEP timestamp, message, status',
            details: 'Keeps only the specified fields in the result set, similar to SELECT in SQL.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-keep.html'
        },
        'DROP': {
            type: 'command',
            description: 'Remove specified fields',
            syntax: 'DROP field1, field2',
            example: 'DROP _id, _index',
            details: 'Removes specified fields from the result set.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-drop.html'
        },
        'EVAL': {
            type: 'command',
            description: 'Create computed fields',
            syntax: 'EVAL new_field = expression',
            example: 'EVAL duration_ms = duration * 1000',
            details: 'Creates new fields using expressions and functions. Supports arithmetic, string, and date operations.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-eval.html'
        },
        'ENRICH': {
            type: 'command',
            description: 'Enrich data with lookup tables',
            syntax: 'ENRICH policy ON field',
            example: 'ENRICH geo_data ON ip_address',
            details: 'Enriches data by looking up values in enrich policies. Useful for adding contextual information.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-enrich.html'
        },
        'DISSECT': {
            type: 'command',
            description: 'Parse structured text',
            syntax: 'DISSECT field pattern',
            example: 'DISSECT message "%{timestamp} %{level} %{message}"',
            details: 'Extracts structured data from text using patterns, similar to grok but faster.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-dissect.html'
        },
        'GROK': {
            type: 'command',
            description: 'Parse unstructured text',
            syntax: 'GROK field pattern',
            example: 'GROK message "%{IP:client} %{WORD:method}"',
            details: 'Extracts structured data from unstructured text using grok patterns.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/esql-grok.html'
        }
    },

    // Query DSL - Match Queries
    matchQueries: {
        'match': {
            type: 'query',
            description: 'Full-text search on a field',
            syntax: '{ "match": { "field": "query text" } }',
            example: '{ "match": { "message": "error database" } }',
            details: 'Standard full-text query. Analyzes the query text and searches for matching terms. Supports fuzziness and operators.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html'
        },
        'match_phrase': {
            type: 'query',
            description: 'Match exact phrase in order',
            syntax: '{ "match_phrase": { "field": "exact phrase" } }',
            example: '{ "match_phrase": { "message": "connection timeout" } }',
            details: 'Matches documents containing the exact phrase in the specified order. Terms must appear adjacent.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query-phrase.html'
        },
        'match_phrase_prefix': {
            type: 'query',
            description: 'Match phrase with prefix on last term',
            syntax: '{ "match_phrase_prefix": { "field": "phrase pre" } }',
            example: '{ "match_phrase_prefix": { "title": "quick bro" } }',
            details: 'Like match_phrase but allows prefix matching on the last term. Useful for autocomplete.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query-phrase-prefix.html'
        },
        'multi_match': {
            type: 'query',
            description: 'Search across multiple fields',
            syntax: '{ "multi_match": { "query": "text", "fields": ["field1", "field2"] } }',
            example: '{ "multi_match": { "query": "elasticsearch", "fields": ["title^2", "content"] } }',
            details: 'Searches multiple fields with optional boosting. Use ^N to boost field importance.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html'
        },
        'query_string': {
            type: 'query',
            description: 'Advanced query with operators',
            syntax: '{ "query_string": { "query": "field:value AND other:value" } }',
            example: '{ "query_string": { "query": "status:active AND (title:elasticsearch OR title:kibana)" } }',
            details: 'Supports Lucene query syntax with AND, OR, NOT, wildcards, and field-specific searches.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html'
        },
        'simple_query_string': {
            type: 'query',
            description: 'Simplified query string syntax',
            syntax: '{ "simple_query_string": { "query": "+active -deleted" } }',
            example: '{ "simple_query_string": { "query": "+elasticsearch +tutorial", "fields": ["title", "content"] } }',
            details: 'Simpler than query_string, more forgiving of syntax errors. Supports +, -, |, *, and phrase queries.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html'
        }
    },

    // Query DSL - Term Queries
    termQueries: {
        'term': {
            type: 'query',
            description: 'Exact term match (not analyzed)',
            syntax: '{ "term": { "field": { "value": "exact_value" } } }',
            example: '{ "term": { "status.keyword": "active" } }',
            details: 'Finds documents with exact term. Use for keyword fields, not analyzed text. Case-sensitive.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-term-query.html'
        },
        'terms': {
            type: 'query',
            description: 'Match any of multiple exact terms',
            syntax: '{ "terms": { "field": ["value1", "value2"] } }',
            example: '{ "terms": { "status": ["active", "pending"] } }',
            details: 'Matches documents where field contains any of the specified terms.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-terms-query.html'
        },
        'range': {
            type: 'query',
            description: 'Match values in a range',
            syntax: '{ "range": { "field": { "gte": min, "lte": max } } }',
            example: '{ "range": { "age": { "gte": 18, "lt": 65 } } }',
            details: 'Matches documents with field values in range. Operators: gt, gte, lt, lte. Works with numbers, dates, strings.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-range-query.html'
        },
        'exists': {
            type: 'query',
            description: 'Check if field exists',
            syntax: '{ "exists": { "field": "field_name" } }',
            example: '{ "exists": { "field": "email" } }',
            details: 'Matches documents where the specified field has any non-null value.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-exists-query.html'
        },
        'prefix': {
            type: 'query',
            description: 'Match terms starting with prefix',
            syntax: '{ "prefix": { "field": { "value": "prefix" } } }',
            example: '{ "prefix": { "user.keyword": "john" } }',
            details: 'Finds documents where field starts with specified prefix. Case-sensitive on keyword fields.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-prefix-query.html'
        },
        'wildcard': {
            type: 'query',
            description: 'Match with wildcards (* and ?)',
            syntax: '{ "wildcard": { "field": { "value": "pattern*" } } }',
            example: '{ "wildcard": { "user.keyword": "john*" } }',
            details: 'Supports * (any characters) and ? (single character) wildcards. Can be slow on large datasets.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-wildcard-query.html'
        },
        'regexp': {
            type: 'query',
            description: 'Match with regular expressions',
            syntax: '{ "regexp": { "field": { "value": "pattern" } } }',
            example: '{ "regexp": { "user.keyword": "john.*son" } }',
            details: 'Matches documents using Lucene regular expression syntax. More powerful but slower than wildcard.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html'
        },
        'fuzzy': {
            type: 'query',
            description: 'Match with typo tolerance',
            syntax: '{ "fuzzy": { "field": { "value": "term", "fuzziness": "AUTO" } } }',
            example: '{ "fuzzy": { "user": { "value": "elasticsearch", "fuzziness": 2 } } }',
            details: 'Finds terms similar to search term using Levenshtein distance. Useful for handling typos.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-fuzzy-query.html'
        },
        'ids': {
            type: 'query',
            description: 'Match documents by IDs',
            syntax: '{ "ids": { "values": ["id1", "id2"] } }',
            example: '{ "ids": { "values": ["1", "2", "3"] } }',
            details: 'Matches documents by their _id field. Efficient for retrieving specific documents.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-ids-query.html'
        }
    },

    // Query DSL - Compound Queries
    compoundQueries: {
        'bool': {
            type: 'query',
            description: 'Combine queries with boolean logic',
            syntax: '{ "bool": { "must": [], "should": [], "must_not": [], "filter": [] } }',
            example: '{ "bool": { "must": [{ "match": { "title": "search" } }], "filter": [{ "term": { "status": "published" } }] } }',
            details: 'Combines multiple queries. must (AND), should (OR), must_not (NOT), filter (AND without scoring).',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html'
        },
        'boosting': {
            type: 'query',
            description: 'Boost or demote documents',
            syntax: '{ "boosting": { "positive": {}, "negative": {}, "negative_boost": 0.5 } }',
            example: '{ "boosting": { "positive": { "term": { "status": "active" } }, "negative": { "term": { "category": "spam" } }, "negative_boost": 0.2 } }',
            details: 'Decreases relevance score of documents matching negative query.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-boosting-query.html'
        },
        'constant_score': {
            type: 'query',
            description: 'Wrap query with constant score',
            syntax: '{ "constant_score": { "filter": {}, "boost": 1.2 } }',
            example: '{ "constant_score": { "filter": { "term": { "status": "active" } } } }',
            details: 'Wraps a filter query and assigns a constant relevance score. Useful when you don\'t need scoring.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-constant-score-query.html'
        },
        'dis_max': {
            type: 'query',
            description: 'Return best matching subquery score',
            syntax: '{ "dis_max": { "queries": [], "tie_breaker": 0.7 } }',
            example: '{ "dis_max": { "queries": [{ "match": { "title": "search" } }, { "match": { "body": "search" } }] } }',
            details: 'Returns documents matching any subquery, using the highest score. tie_breaker adds other scores.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-dis-max-query.html'
        },
        'function_score': {
            type: 'query',
            description: 'Modify scores with functions',
            syntax: '{ "function_score": { "query": {}, "functions": [] } }',
            example: '{ "function_score": { "query": { "match_all": {} }, "functions": [{ "field_value_factor": { "field": "popularity" } }] } }',
            details: 'Modifies document scores using functions like field_value_factor, decay, random, or script.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html'
        }
    },

    // Aggregations - Metrics
    metricsAggregations: {
        'avg': {
            type: 'aggregation',
            description: 'Calculate average value',
            syntax: '{ "avg": { "field": "field_name" } }',
            example: '{ "avg_price": { "avg": { "field": "price" } } }',
            details: 'Computes the average of numeric field values.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-avg-aggregation.html'
        },
        'sum': {
            type: 'aggregation',
            description: 'Calculate sum of values',
            syntax: '{ "sum": { "field": "field_name" } }',
            example: '{ "total_sales": { "sum": { "field": "amount" } } }',
            details: 'Sums numeric field values across all documents.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-sum-aggregation.html'
        },
        'min': {
            type: 'aggregation',
            description: 'Find minimum value',
            syntax: '{ "min": { "field": "field_name" } }',
            example: '{ "min_price": { "min": { "field": "price" } } }',
            details: 'Finds the minimum value of a numeric field.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-min-aggregation.html'
        },
        'max': {
            type: 'aggregation',
            description: 'Find maximum value',
            syntax: '{ "max": { "field": "field_name" } }',
            example: '{ "max_price": { "max": { "field": "price" } } }',
            details: 'Finds the maximum value of a numeric field.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-max-aggregation.html'
        },
        'stats': {
            type: 'aggregation',
            description: 'Calculate multiple statistics',
            syntax: '{ "stats": { "field": "field_name" } }',
            example: '{ "price_stats": { "stats": { "field": "price" } } }',
            details: 'Returns count, min, max, avg, and sum in a single aggregation.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-stats-aggregation.html'
        },
        'cardinality': {
            type: 'aggregation',
            description: 'Count unique values (approximate)',
            syntax: '{ "cardinality": { "field": "field_name" } }',
            example: '{ "unique_users": { "cardinality": { "field": "user_id" } } }',
            details: 'Counts approximate number of unique values. Uses HyperLogLog++ algorithm for efficiency.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-cardinality-aggregation.html'
        },
        'percentiles': {
            type: 'aggregation',
            description: 'Calculate percentile values',
            syntax: '{ "percentiles": { "field": "field_name", "percents": [25, 50, 75, 95, 99] } }',
            example: '{ "load_time_percentiles": { "percentiles": { "field": "load_time" } } }',
            details: 'Calculates percentile values for a numeric field. Useful for latency analysis.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-percentile-aggregation.html'
        },
        'value_count': {
            type: 'aggregation',
            description: 'Count non-null values',
            syntax: '{ "value_count": { "field": "field_name" } }',
            example: '{ "email_count": { "value_count": { "field": "email" } } }',
            details: 'Counts the number of values (non-null) for a field.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-valuecount-aggregation.html'
        }
    },

    // Aggregations - Bucket
    bucketAggregations: {
        'terms': {
            type: 'aggregation',
            description: 'Group by field values',
            syntax: '{ "terms": { "field": "field_name", "size": 10 } }',
            example: '{ "popular_tags": { "terms": { "field": "tags.keyword", "size": 20 } } }',
            details: 'Creates buckets for each unique field value. Most common aggregation for grouping.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html'
        },
        'date_histogram': {
            type: 'aggregation',
            description: 'Group by date intervals',
            syntax: '{ "date_histogram": { "field": "date_field", "calendar_interval": "1d" } }',
            example: '{ "sales_over_time": { "date_histogram": { "field": "timestamp", "calendar_interval": "1M" } } }',
            details: 'Creates time-based buckets. Intervals: 1m, 1h, 1d, 1w, 1M, 1y. Essential for time series.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-datehistogram-aggregation.html'
        },
        'histogram': {
            type: 'aggregation',
            description: 'Group by numeric intervals',
            syntax: '{ "histogram": { "field": "field_name", "interval": 10 } }',
            example: '{ "price_distribution": { "histogram": { "field": "price", "interval": 50 } } }',
            details: 'Creates buckets for numeric ranges with fixed interval.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-histogram-aggregation.html'
        },
        'range': {
            type: 'aggregation',
            description: 'Group by custom ranges',
            syntax: '{ "range": { "field": "field_name", "ranges": [{ "from": 0, "to": 100 }] } }',
            example: '{ "price_ranges": { "range": { "field": "price", "ranges": [{ "to": 50 }, { "from": 50, "to": 100 }, { "from": 100 }] } } }',
            details: 'Creates buckets for custom numeric ranges. Flexible for categorization.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-range-aggregation.html'
        },
        'date_range': {
            type: 'aggregation',
            description: 'Group by custom date ranges',
            syntax: '{ "date_range": { "field": "date_field", "ranges": [{ "from": "now-1M", "to": "now" }] } }',
            example: '{ "time_periods": { "date_range": { "field": "timestamp", "ranges": [{ "from": "now-7d" }, { "from": "now-30d", "to": "now-7d" }] } } }',
            details: 'Creates buckets for custom date ranges. Supports date math expressions.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-daterange-aggregation.html'
        },
        'filter': {
            type: 'aggregation',
            description: 'Single bucket for filtered documents',
            syntax: '{ "filter": { "term": { "field": "value" } } }',
            example: '{ "active_users": { "filter": { "term": { "status": "active" } } } }',
            details: 'Creates a single bucket containing documents matching the filter.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-filter-aggregation.html'
        },
        'filters': {
            type: 'aggregation',
            description: 'Multiple named filter buckets',
            syntax: '{ "filters": { "filters": { "name1": {}, "name2": {} } } }',
            example: '{ "status_buckets": { "filters": { "filters": { "active": { "term": { "status": "active" } }, "inactive": { "term": { "status": "inactive" } } } } } }',
            details: 'Creates multiple named buckets, each with its own filter.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-filters-aggregation.html'
        },
        'nested': {
            type: 'aggregation',
            description: 'Aggregate on nested documents',
            syntax: '{ "nested": { "path": "nested_field" } }',
            example: '{ "comments_agg": { "nested": { "path": "comments" } } }',
            details: 'Allows aggregating on nested object fields. Required for nested document types.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-nested-aggregation.html'
        }
    },

    // Special Queries
    specializedQueries: {
        'more_like_this': {
            type: 'query',
            description: 'Find similar documents',
            syntax: '{ "more_like_this": { "fields": ["field"], "like": "text or doc id" } }',
            example: '{ "more_like_this": { "fields": ["title", "content"], "like": "elasticsearch tutorial", "min_term_freq": 1 } }',
            details: 'Finds documents similar to provided text or documents. Useful for recommendations.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html'
        },
        'geo_distance': {
            type: 'query',
            description: 'Filter by distance from point',
            syntax: '{ "geo_distance": { "distance": "10km", "location": { "lat": 40, "lon": -70 } } }',
            example: '{ "geo_distance": { "distance": "5km", "pin.location": { "lat": 40.73, "lon": -73.99 } } }',
            details: 'Matches documents within specified distance from a geo point.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-geo-distance-query.html'
        },
        'geo_bounding_box': {
            type: 'query',
            description: 'Filter by geographic bounding box',
            syntax: '{ "geo_bounding_box": { "location": { "top_left": {}, "bottom_right": {} } } }',
            example: '{ "geo_bounding_box": { "pin.location": { "top_left": { "lat": 40.73, "lon": -74.1 }, "bottom_right": { "lat": 40.01, "lon": -71.12 } } } }',
            details: 'Matches documents with geo points within a bounding box.',
            docUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-geo-bounding-box-query.html'
        }
    }
};

// Helper function to get explanation for Elasticsearch tokens
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();

    // Check ES|QL commands
    if (elasticsearchKnowledge.esqlCommands[token.toUpperCase()]) {
        return elasticsearchKnowledge.esqlCommands[token.toUpperCase()];
    }

    // Check query types
    if (elasticsearchKnowledge.matchQueries[lowerToken]) {
        return elasticsearchKnowledge.matchQueries[lowerToken];
    }

    if (elasticsearchKnowledge.termQueries[lowerToken]) {
        return elasticsearchKnowledge.termQueries[lowerToken];
    }

    if (elasticsearchKnowledge.compoundQueries[lowerToken]) {
        return elasticsearchKnowledge.compoundQueries[lowerToken];
    }

    // Check aggregations
    if (elasticsearchKnowledge.metricsAggregations[lowerToken]) {
        return elasticsearchKnowledge.metricsAggregations[lowerToken];
    }

    if (elasticsearchKnowledge.bucketAggregations[lowerToken]) {
        return elasticsearchKnowledge.bucketAggregations[lowerToken];
    }

    // Check specialized queries
    if (elasticsearchKnowledge.specializedQueries[lowerToken]) {
        return elasticsearchKnowledge.specializedQueries[lowerToken];
    }

    // Default explanations
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String value',
            details: 'A string literal in Elasticsearch query.'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: 'A numeric literal value.'
        };
    }

    if (tokenType === 'field') {
        return {
            type: 'field',
            description: 'Document field',
            details: 'A field name in an Elasticsearch document. Use dot notation for nested fields.'
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
        details: 'Token type not recognized in Elasticsearch syntax.'
    };
}
