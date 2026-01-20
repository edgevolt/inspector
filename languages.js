// Language Registry - Configuration for all supported query languages

export const languages = {
    kql: {
        id: 'kql',
        name: 'KQL',
        fullName: 'Kusto Query Language',
        category: 'Query Languages',
        description: 'Query language for Azure Data Explorer, Log Analytics, and Application Insights',
        placeholder: 'SecurityEvent | where TimeGenerated > ago(1h) | take 10',
        icon: '📊',
        module: './languages/kql.js',
        examples: [
            {
                title: 'Recent Security Events',
                query: 'SecurityEvent | where TimeGenerated > ago(1h) | take 10'
            },
            {
                title: 'Count by Computer',
                query: 'SecurityEvent | summarize count() by Computer | order by count_ desc'
            },
            {
                title: 'Filter and Project',
                query: 'Syslog | where Severity == "error" | project TimeGenerated, Computer, Message'
            },
            {
                title: 'Time-based Aggregation',
                query: 'Heartbeat | summarize count() by bin(TimeGenerated, 1h)'
            },
            {
                title: 'String Search',
                query: 'Event | where EventLog has "Application" and EventLevelName == "Error"'
            },
            {
                title: 'Top Results',
                query: 'PerformanceCounter | where CounterName == "% Processor Time" | top 20 by CounterValue desc'
            }
        ]
    },
    sql: {
        id: 'sql',
        name: 'SQL',
        fullName: 'Structured Query Language',
        category: 'Query Languages',
        description: 'Standard language for managing and querying relational databases',
        placeholder: 'SELECT name, email FROM users WHERE active = true LIMIT 10',
        icon: '🗄️',
        module: './languages/sql.js',
        examples: [
            {
                title: 'Basic SELECT Query',
                query: 'SELECT name, email FROM users WHERE active = true'
            },
            {
                title: 'Count and Group',
                query: 'SELECT country, COUNT(*) as total FROM users GROUP BY country ORDER BY total DESC'
            },
            {
                title: 'JOIN Tables',
                query: 'SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id'
            },
            {
                title: 'Aggregate Functions',
                query: 'SELECT AVG(price) as avg_price, MAX(price) as max_price FROM products'
            },
            {
                title: 'String Functions',
                query: 'SELECT UPPER(name), LOWER(email) FROM users WHERE name LIKE \'%John%\''
            },
            {
                title: 'Date and Limit',
                query: 'SELECT * FROM orders WHERE created_at > NOW() - INTERVAL \'7 days\' LIMIT 20'
            }
        ]
    },
    promql: {
        id: 'promql',
        name: 'PromQL',
        fullName: 'Prometheus Query Language',
        category: 'Query Languages',
        description: 'Query language for Prometheus monitoring and time series data',
        placeholder: 'rate(http_requests_total[5m])',
        icon: '📈',
        module: './languages/promql.js',
        examples: [
            {
                title: 'Request Rate',
                query: 'rate(http_requests_total[5m])'
            },
            {
                title: 'CPU Usage by Instance',
                query: 'avg(rate(cpu_usage_seconds_total[5m])) by (instance)'
            },
            {
                title: 'Top 5 Memory Consumers',
                query: 'topk(5, memory_usage_bytes)'
            },
            {
                title: 'P95 Latency',
                query: 'histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))'
            },
            {
                title: 'Error Rate',
                query: 'sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))'
            },
            {
                title: 'Disk Space Prediction',
                query: 'predict_linear(disk_free_bytes[1h], 3600 * 24)'
            }
        ]
    },
    powershell: {
        id: 'powershell',
        name: 'PowerShell',
        fullName: 'PowerShell',
        category: 'Scripting & Automation',
        description: 'Task automation and configuration management (85+ cmdlets supported)',
        placeholder: 'Get-Process | Where-Object {$_.CPU -gt 10} | Select-Object Name, CPU',
        icon: '⚡',
        module: './languages/powershell.js',
        examples: [
            {
                title: 'Discover Commands',
                query: 'Get-Command -Module Microsoft.PowerShell.Management'
            },
            {
                title: 'Filter Processes',
                query: 'Get-Process | Where-Object {$_.CPU -gt 10} | Sort-Object CPU -Descending'
            },
            {
                title: 'Test Network Connection',
                query: 'Test-Connection -ComputerName google.com -Count 4'
            },
            {
                title: 'Export to JSON',
                query: 'Get-Service | Select-Object Name, Status | ConvertTo-Json'
            },
            {
                title: 'Query Event Logs',
                query: 'Get-WinEvent -LogName Application -MaxEvents 10'
            },
            {
                title: 'Group and Count',
                query: 'Get-Process | Group-Object ProcessName | Sort-Object Count -Descending'
            },
            {
                title: 'Format as Table',
                query: 'Get-Process | Format-Table Name, CPU, Memory -AutoSize'
            },
            {
                title: 'File Search',
                query: 'Get-ChildItem -Path C:\\Users -Recurse -Filter *.txt'
            }
        ]
    },
    graphql: {
        id: 'graphql',
        name: 'GraphQL',
        fullName: 'GraphQL',
        category: 'Query Languages',
        description: 'API query language with strong typing and introspection',
        placeholder: 'query GetUser($id: ID!) { user(id: $id) { name email } }',
        icon: '🔷',
        module: './languages/graphql.js',
        examples: [
            {
                title: 'Basic Query',
                query: 'query GetUser($id: ID!) {\n  user(id: $id) {\n    name\n    email\n  }\n}'
            },
            {
                title: 'Mutation',
                query: 'mutation CreatePost($input: PostInput!) {\n  createPost(input: $input) {\n    id\n    title\n  }\n}'
            },
            {
                title: 'Fragment',
                query: 'fragment UserFields on User {\n  id\n  name\n  email\n}\n\nquery GetUsers {\n  users {\n    ...UserFields\n  }\n}'
            },
            {
                title: 'Inline Fragment',
                query: 'query Search($term: String!) {\n  search(term: $term) {\n    ... on User { name }\n    ... on Post { title }\n  }\n}'
            },
            {
                title: 'Directives',
                query: 'query GetUser($id: ID!, $withPosts: Boolean!) {\n  user(id: $id) {\n    name\n    posts @include(if: $withPosts) {\n      title\n    }\n  }\n}'
            },
            {
                title: 'Subscription',
                query: 'subscription OnPostCreated {\n  postCreated {\n    id\n    title\n    author { name }\n  }\n}'
            },
            {
                title: 'Introspection',
                query: 'query IntrospectSchema {\n  __schema {\n    types { name kind }\n  }\n}'
            },
            {
                title: 'Schema Definition',
                query: 'type User {\n  id: ID!\n  name: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  author: User!\n}'
            }
        ]
    },
    mongodb: {
        id: 'mongodb',
        name: 'MongoDB',
        fullName: 'MongoDB Query Language',
        category: 'Query Languages',
        description: 'NoSQL database queries and aggregation pipelines',
        placeholder: 'db.users.find({ age: { $gte: 18 } })',
        icon: '🍃',
        module: './languages/mongodb.js',
        examples: [
            {
                title: 'Find with Operators',
                query: 'db.users.find({ age: { $gte: 18, $lt: 65 }, status: "active" })'
            },
            {
                title: 'Aggregation Pipeline',
                query: 'db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },\n  { $sort: { total: -1 } },\n  { $limit: 10 }\n])'
            },
            {
                title: 'Update with Operators',
                query: 'db.users.updateOne(\n  { _id: ObjectId("...") },\n  { $set: { status: "active" }, $inc: { loginCount: 1 } }\n)'
            },
            {
                title: 'Array Operations',
                query: 'db.posts.find({ tags: { $all: ["mongodb", "database"] } })'
            },
            {
                title: 'Text Search',
                query: 'db.articles.find({ $text: { $search: "mongodb tutorial" } })'
            },
            {
                title: 'Lookup (Join)',
                query: 'db.orders.aggregate([\n  { $lookup: {\n      from: "customers",\n      localField: "customerId",\n      foreignField: "_id",\n      as: "customer"\n    }\n  }\n])'
            },
            {
                title: 'Group and Count',
                query: 'db.sales.aggregate([\n  { $group: { _id: "$product", count: { $sum: 1 }, total: { $sum: "$amount" } } }\n])'
            },
            {
                title: 'Insert Many',
                query: 'db.users.insertMany([\n  { name: "John", age: 30 },\n  { name: "Jane", age: 25 }\n])'
            }
        ]
    },
    elasticsearch: {
        id: 'elasticsearch',
        name: 'Elasticsearch',
        fullName: 'Elasticsearch Query DSL & ES|QL',
        category: 'Query Languages',
        description: 'Search and analytics engine queries (Query DSL + ES|QL)',
        placeholder: 'FROM logs-* | WHERE status == 200 | STATS avg(response_time) BY host',
        icon: '🔍',
        module: './languages/elasticsearch.js',
        examples: [
            {
                title: 'ES|QL - Basic Query',
                query: 'FROM logs-*\n| WHERE status == 200\n| KEEP timestamp, message, host\n| SORT timestamp DESC\n| LIMIT 100'
            },
            {
                title: 'ES|QL - Aggregation',
                query: 'FROM logs-*\n| STATS avg(response_time) AS avg_response, count() AS total BY status\n| SORT total DESC'
            },
            {
                title: 'Query DSL - Match Query',
                query: '{\n  "query": {\n    "match": {\n      "message": "error database connection"\n    }\n  }\n}'
            },
            {
                title: 'Query DSL - Bool Query',
                query: '{\n  "query": {\n    "bool": {\n      "must": [\n        { "match": { "status": "active" } }\n      ],\n      "filter": [\n        { "range": { "age": { "gte": 18 } } }\n      ]\n    }\n  }\n}'
            },
            {
                title: 'Query DSL - Aggregation',
                query: '{\n  "aggs": {\n    "status_counts": {\n      "terms": {\n        "field": "status.keyword",\n        "size": 10\n      }\n    }\n  }\n}'
            },
            {
                title: 'Query DSL - Date Histogram',
                query: '{\n  "aggs": {\n    "requests_over_time": {\n      "date_histogram": {\n        "field": "timestamp",\n        "calendar_interval": "1h"\n      }\n    }\n  }\n}'
            },
            {
                title: 'Query DSL - Geo Query',
                query: '{\n  "query": {\n    "geo_distance": {\n      "distance": "10km",\n      "location": {\n        "lat": 40.73,\n        "lon": -73.99\n      }\n    }\n  }\n}'
            },
            {
                title: 'ES|QL - Computed Fields',
                query: 'FROM sales-*\n| EVAL total_price = price * quantity\n| WHERE total_price > 1000\n| STATS sum(total_price) BY category'
            }
        ]
    },
    odata: {
        id: 'odata',
        name: 'OData',
        fullName: 'Open Data Protocol',
        category: 'Query Languages',
        description: 'REST API query protocol for web services',
        placeholder: '$filter=Price gt 20 and Category eq \'Electronics\'&$orderby=Price desc&$top=10',
        icon: '🌐',
        module: './languages/odata.js',
        examples: [
            {
                title: 'Filter and Sort',
                query: '$filter=Price gt 20 and Category eq \'Electronics\'&$orderby=Price desc&$top=10'
            },
            {
                title: 'Select Specific Fields',
                query: '$select=Name,Price,Category&$filter=InStock eq true'
            },
            {
                title: 'Expand Related Entities',
                query: '$expand=Orders($expand=OrderDetails)&$filter=Status eq \'Active\''
            },
            {
                title: 'String Functions',
                query: '$filter=contains(Name, \'phone\') and startswith(Category, \'Elec\')'
            },
            {
                title: 'Date Functions',
                query: '$filter=year(OrderDate) eq 2024 and month(OrderDate) ge 6'
            },
            {
                title: 'Collection Operators',
                query: '$filter=Orders/any(o: o/Total gt 100)'
            },
            {
                title: 'Aggregation',
                query: '$apply=groupby((Category),aggregate(Price with sum as Total))&$orderby=Total desc'
            },
            {
                title: 'Computed Properties',
                query: '$compute=Price mul Quantity as Total&$filter=Total gt 1000&$select=Name,Total'
            }
        ]
    },
    cql: {
        id: 'cql',
        name: 'CQL',
        fullName: 'Cassandra Query Language',
        category: 'Query Languages',
        description: 'Query language for Apache Cassandra NoSQL database',
        placeholder: 'SELECT * FROM users WHERE user_id = uuid() ALLOW FILTERING',
        icon: '🔗',
        module: './languages/cql.js',
        examples: [
            {
                title: 'Create Keyspace',
                query: 'CREATE KEYSPACE my_keyspace WITH replication = {\'class\': \'SimpleStrategy\', \'replication_factor\': 3}'
            },
            {
                title: 'Create Table with Collections',
                query: 'CREATE TABLE users (\n  user_id UUID PRIMARY KEY,\n  name TEXT,\n  emails LIST<TEXT>,\n  tags SET<TEXT>,\n  metadata MAP<TEXT, TEXT>\n)'
            },
            {
                title: 'Insert with TTL',
                query: 'INSERT INTO sessions (session_id, user_id, data) VALUES (uuid(), uuid(), \'session_data\') USING TTL 3600'
            },
            {
                title: 'Select with Token',
                query: 'SELECT * FROM users WHERE TOKEN(user_id) > TOKEN(uuid()) LIMIT 100'
            },
            {
                title: 'Update with Timestamp',
                query: 'UPDATE users USING TIMESTAMP 1234567890 SET email = \'new@example.com\' WHERE user_id = uuid()'
            },
            {
                title: 'Materialized View',
                query: 'CREATE MATERIALIZED VIEW users_by_email AS\n  SELECT * FROM users\n  WHERE email IS NOT NULL\n  PRIMARY KEY (email, user_id)'
            },
            {
                title: 'Batch Operations',
                query: 'BEGIN BATCH\n  INSERT INTO users (user_id, name) VALUES (uuid(), \'John\');\n  UPDATE users SET email = \'john@example.com\' WHERE user_id = uuid();\nAPPLY BATCH'
            },
            {
                title: 'Counter Table',
                query: 'UPDATE page_views SET views = views + 1 WHERE page_id = \'home\''
            }
        ]
    },
    cypher: {
        id: 'cypher',
        name: 'Cypher',
        fullName: 'Cypher Query Language',
        category: 'Query Languages',
        description: 'Graph query language for Neo4j database',
        placeholder: 'MATCH (n:Person)-[:KNOWS]->(m:Person) WHERE n.age > 25 RETURN n.name, m.name',
        icon: '🕸️',
        module: './languages/cypher.js',
        examples: [
            {
                title: 'Basic Pattern Match',
                query: 'MATCH (n:Person)-[:KNOWS]->(m:Person)\nWHERE n.age > 25\nRETURN n.name, m.name, n.age'
            },
            {
                title: 'Create Nodes and Relationships',
                query: 'CREATE (alice:Person {name: "Alice", age: 30})-[:KNOWS {since: 2020}]->(bob:Person {name: "Bob", age: 28})'
            },
            {
                title: 'Variable-Length Path',
                query: 'MATCH (a:Person {name: "Alice"})-[:KNOWS*1..3]-(friend)\nRETURN DISTINCT friend.name'
            },
            {
                title: 'Aggregation',
                query: 'MATCH (p:Person)-[:WORKS_AT]->(c:Company)\nRETURN c.name, count(p) AS employee_count, collect(p.name) AS employees\nORDER BY employee_count DESC'
            },
            {
                title: 'Shortest Path',
                query: 'MATCH path = shortestPath((a:Person {name: "Alice"})-[:KNOWS*]-(b:Person {name: "Bob"}))\nRETURN path, length(path)'
            },
            {
                title: 'Merge Pattern',
                query: 'MERGE (p:Person {email: "alice@example.com"})\nON CREATE SET p.created = timestamp(), p.name = "Alice"\nON MATCH SET p.updated = timestamp()'
            },
            {
                title: 'WITH Clause Pipeline',
                query: 'MATCH (p:Person)-[:KNOWS]->(friend)\nWITH p, count(friend) AS friendCount\nWHERE friendCount > 5\nRETURN p.name, friendCount\nORDER BY friendCount DESC'
            },
            {
                title: 'Delete with Detach',
                query: 'MATCH (p:Person {name: "Bob"})\nDETACH DELETE p'
            }
        ]
    },
    fortios: {
        id: 'fortios',
        name: 'FortiOS',
        fullName: 'FortiOS CLI',
        category: 'CLI & Shells',
        description: 'Command-line interface for FortiGate firewalls (FortiOS 7.4.x+)',
        placeholder: 'diagnose sys session list',
        icon: '🛡️',
        module: './languages/fortios.js',
        examples: [
            {
                title: 'List Active Sessions',
                query: 'diagnose sys session list'
            },
            {
                title: 'Check System Status',
                query: 'diagnose sys top-summary'
            },
            {
                title: 'Test Network Connectivity',
                query: 'execute ping 8.8.8.8'
            },
            {
                title: 'VPN Tunnel Status',
                query: 'diagnose vpn tunnel list'
            },
            {
                title: 'View ARP Table',
                query: 'diagnose ip arp list'
            },
            {
                title: 'HA Status Check',
                query: 'diagnose sys ha status'
            },
            {
                title: 'Backup Configuration',
                query: 'execute backup config tftp backup.conf 192.168.1.100'
            },
            {
                title: 'Firewall Policy Routes',
                query: 'diagnose firewall proute list'
            }
        ]
    },
    panos: {
        id: 'panos',
        name: 'PAN-OS',
        fullName: 'PAN-OS CLI',
        category: 'CLI & Shells',
        description: 'Command-line interface for Palo Alto Networks firewalls',
        placeholder: 'show system info',
        icon: '🔥',
        module: './languages/panos.js',
        examples: [
            {
                title: 'System Information',
                query: 'show system info'
            },
            {
                title: 'Active Sessions',
                query: 'show session all filter source 10.0.0.1'
            },
            {
                title: 'Security Policy Test',
                query: 'test security-policy-match from trust to untrust source 10.0.0.1 destination 8.8.8.8 protocol 6 destination-port 443'
            },
            {
                title: 'Routing Lookup',
                query: 'test routing fib-lookup ip 8.8.8.8 virtual-router default'
            },
            {
                title: 'VPN Status',
                query: 'show vpn flow'
            },
            {
                title: 'High Availability Status',
                query: 'show high-availability all'
            },
            {
                title: 'Traffic Logs',
                query: 'show log traffic direction backward'
            },
            {
                title: 'Interface Status',
                query: 'show interface all'
            }
        ]
    },
    bash: {
        id: 'bash',
        name: 'Bash',
        fullName: 'Bourne Again Shell',
        category: 'CLI & Shells',
        description: 'Unix shell and command language',
        placeholder: 'for file in *.txt; do echo $file; done',
        icon: '💻',
        module: './languages/bash.js',
        examples: [
            {
                title: 'For Loop',
                query: 'for file in *.txt; do echo "Processing $file"; done'
            },
            {
                title: 'If Statement',
                query: 'if [ -f /etc/passwd ]; then echo "File exists"; else echo "Not found"; fi'
            },
            {
                title: 'Pipeline',
                query: 'ps aux | grep nginx | awk \'{print $2}\''
            },
            {
                title: 'Variable Assignment',
                query: 'export PATH=$PATH:/usr/local/bin'
            },
            {
                title: 'Function Definition',
                query: 'function backup { tar -czf backup.tar.gz "$1"; }'
            },
            {
                title: 'Case Statement',
                query: 'case $1 in start) echo "Starting";; stop) echo "Stopping";; *) echo "Unknown";; esac'
            },
            {
                title: 'While Loop',
                query: 'while read line; do echo "$line"; done < file.txt'
            },
            {
                title: 'Command Substitution',
                query: 'current_date=$(date +%Y-%m-%d); echo "Today is $current_date"'
            }
        ]
    },
    terraform: {
        id: 'terraform',
        name: 'Terraform',
        fullName: 'Terraform/HCL',
        category: 'Scripting & Automation',
        description: 'Infrastructure as Code using HashiCorp Configuration Language',
        placeholder: 'resource "aws_instance" "web" { ami = "ami-123456" }',
        icon: '🏗️',
        module: './languages/terraform.js',
        examples: [
            {
                title: 'Resource Block',
                query: 'resource "aws_instance" "web" {\n  ami = "ami-0c55b159cbfafe1f0"\n  instance_type = "t2.micro"\n  tags = {\n    Name = "WebServer"\n  }\n}'
            },
            {
                title: 'Variable Declaration',
                query: 'variable "instance_count" {\n  type = number\n  default = 2\n  description = "Number of instances to create"\n}'
            },
            {
                title: 'Data Source',
                query: 'data "aws_ami" "ubuntu" {\n  most_recent = true\n  owners = ["099720109477"]\n  filter {\n    name = "name"\n    values = ["ubuntu/images/hvm-ssd/ubuntu-*"]\n  }\n}'
            },
            {
                title: 'Module Call',
                query: 'module "vpc" {\n  source = "terraform-aws-modules/vpc/aws"\n  version = "3.0.0"\n  cidr = "10.0.0.0/16"\n}'
            },
            {
                title: 'Output Value',
                query: 'output "instance_ip" {\n  value = aws_instance.web.public_ip\n  description = "Public IP of web server"\n}'
            },
            {
                title: 'Locals Block',
                query: 'locals {\n  common_tags = {\n    Environment = var.environment\n    Project = "MyApp"\n    ManagedBy = "Terraform"\n  }\n}'
            },
            {
                title: 'For Each',
                query: 'resource "aws_instance" "server" {\n  for_each = toset(["web", "api", "db"])\n  ami = "ami-123"\n  instance_type = "t2.micro"\n  tags = { Name = each.key }\n}'
            },
            {
                title: 'Provider Configuration',
                query: 'provider "aws" {\n  region = var.aws_region\n  profile = "default"\n}'
            }
        ]
    }
    // Future languages can be added here:
    // python: { ... }
};

// Get language by ID
export function getLanguage(langId) {
    return languages[langId] || languages.kql;
}

// Get all available languages
export function getAllLanguages() {
    return Object.values(languages);
}

// Get default language
export function getDefaultLanguage() {
    return languages.kql;
}
