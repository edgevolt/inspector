// Terraform/HCL Knowledge Base - HashiCorp Configuration Language

export const terraformKnowledge = {
    // Block Types
    blocks: {
        'resource': {
            type: 'block',
            description: 'Define infrastructure resource',
            category: 'Resources',
            syntax: 'resource "type" "name" { ... }',
            details: 'Declares a resource to be created and managed. The type specifies the provider resource (e.g., aws_instance), and name is a local identifier.',
            example: 'resource "aws_instance" "web" {\n  ami = "ami-123456"\n  instance_type = "t2.micro"\n}',
            docUrl: 'https://www.terraform.io/language/resources/syntax'
        },
        'data': {
            type: 'block',
            description: 'Query existing infrastructure',
            category: 'Data Sources',
            syntax: 'data "type" "name" { ... }',
            details: 'Reads information from existing infrastructure or external sources without managing it.',
            example: 'data "aws_ami" "ubuntu" {\n  most_recent = true\n  owners = ["099720109477"]\n}',
            docUrl: 'https://www.terraform.io/language/data-sources'
        },
        'variable': {
            type: 'block',
            description: 'Declare input variable',
            category: 'Variables',
            syntax: 'variable "name" { ... }',
            details: 'Defines an input variable that can be set when running Terraform. Supports type constraints, defaults, and validation.',
            example: 'variable "instance_count" {\n  type = number\n  default = 1\n  description = "Number of instances"\n}',
            docUrl: 'https://www.terraform.io/language/values/variables'
        },
        'output': {
            type: 'block',
            description: 'Declare output value',
            category: 'Outputs',
            syntax: 'output "name" { ... }',
            details: 'Exports values from your configuration that can be queried or used by other configurations.',
            example: 'output "instance_ip" {\n  value = aws_instance.web.public_ip\n  description = "Public IP"\n}',
            docUrl: 'https://www.terraform.io/language/values/outputs'
        },
        'locals': {
            type: 'block',
            description: 'Define local values',
            category: 'Variables',
            syntax: 'locals { ... }',
            details: 'Defines local variables for reuse within the module. Useful for computed values and reducing repetition.',
            example: 'locals {\n  common_tags = {\n    Environment = "prod"\n    Project = "web"\n  }\n}',
            docUrl: 'https://www.terraform.io/language/values/locals'
        },
        'module': {
            type: 'block',
            description: 'Call a child module',
            category: 'Modules',
            syntax: 'module "name" { ... }',
            details: 'Calls a reusable module, either local or from a registry. Modules encapsulate resources and logic.',
            example: 'module "vpc" {\n  source = "./modules/vpc"\n  cidr_block = "10.0.0.0/16"\n}',
            docUrl: 'https://www.terraform.io/language/modules'
        },
        'provider': {
            type: 'block',
            description: 'Configure provider',
            category: 'Providers',
            syntax: 'provider "name" { ... }',
            details: 'Configures a provider (AWS, Azure, GCP, etc.) with authentication and settings.',
            example: 'provider "aws" {\n  region = "us-west-2"\n  profile = "default"\n}',
            docUrl: 'https://www.terraform.io/language/providers/configuration'
        },
        'terraform': {
            type: 'block',
            description: 'Terraform settings',
            category: 'Configuration',
            syntax: 'terraform { ... }',
            details: 'Configures Terraform behavior, required providers, backend, and version constraints.',
            example: 'terraform {\n  required_version = ">= 1.0"\n  required_providers {\n    aws = {\n      source = "hashicorp/aws"\n      version = "~> 4.0"\n    }\n  }\n}',
            docUrl: 'https://www.terraform.io/language/settings'
        },
        'provisioner': {
            type: 'block',
            description: 'Execute scripts on resources',
            category: 'Provisioners',
            syntax: 'provisioner "type" { ... }',
            details: 'Runs scripts or commands on resources during creation or destruction. Use sparingly.',
            example: 'provisioner "remote-exec" {\n  inline = [\n    "sudo apt-get update"\n  ]\n}',
            docUrl: 'https://www.terraform.io/language/resources/provisioners'
        },
        'backend': {
            type: 'block',
            description: 'Configure state backend',
            category: 'Configuration',
            syntax: 'backend "type" { ... }',
            details: 'Configures where Terraform state is stored (S3, Azure Storage, etc.).',
            example: 'backend "s3" {\n  bucket = "my-terraform-state"\n  key = "prod/terraform.tfstate"\n  region = "us-west-2"\n}',
            docUrl: 'https://www.terraform.io/language/settings/backends'
        }
    },

    // Meta-Arguments
    metaArguments: {
        'count': {
            type: 'meta-argument',
            description: 'Create multiple instances',
            category: 'Resource Meta-Arguments',
            syntax: 'count = number',
            details: 'Creates multiple instances of a resource. Access via count.index.',
            example: 'resource "aws_instance" "server" {\n  count = 3\n  ami = "ami-123"\n  tags = { Name = "server-${count.index}" }\n}',
            docUrl: 'https://www.terraform.io/language/meta-arguments/count'
        },
        'for_each': {
            type: 'meta-argument',
            description: 'Create instances from map/set',
            category: 'Resource Meta-Arguments',
            syntax: 'for_each = map or set',
            details: 'Creates multiple instances based on a map or set. Access via each.key and each.value.',
            example: 'resource "aws_instance" "server" {\n  for_each = toset(["web", "api"])\n  ami = "ami-123"\n  tags = { Name = each.key }\n}',
            docUrl: 'https://www.terraform.io/language/meta-arguments/for_each'
        },
        'depends_on': {
            type: 'meta-argument',
            description: 'Explicit dependencies',
            category: 'Resource Meta-Arguments',
            syntax: 'depends_on = [resources]',
            details: 'Explicitly declares dependencies between resources when implicit dependencies are insufficient.',
            example: 'resource "aws_instance" "app" {\n  depends_on = [aws_db_instance.database]\n}',
            docUrl: 'https://www.terraform.io/language/meta-arguments/depends_on'
        },
        'lifecycle': {
            type: 'meta-argument',
            description: 'Resource lifecycle customization',
            category: 'Resource Meta-Arguments',
            syntax: 'lifecycle { ... }',
            details: 'Customizes resource lifecycle behavior: create_before_destroy, prevent_destroy, ignore_changes.',
            example: 'lifecycle {\n  create_before_destroy = true\n  ignore_changes = [tags]\n}',
            docUrl: 'https://www.terraform.io/language/meta-arguments/lifecycle'
        },
        'provider': {
            type: 'meta-argument',
            description: 'Select provider configuration',
            category: 'Resource Meta-Arguments',
            syntax: 'provider = provider.alias',
            details: 'Selects a non-default provider configuration for a resource.',
            example: 'resource "aws_instance" "web" {\n  provider = aws.west\n}',
            docUrl: 'https://www.terraform.io/language/meta-arguments/resource-provider'
        }
    },

    // Built-in Functions
    functions: {
        'file': {
            type: 'function',
            description: 'Read file contents',
            category: 'File Functions',
            syntax: 'file(path)',
            details: 'Reads the contents of a file and returns it as a string.',
            example: 'user_data = file("${path.module}/init.sh")',
            docUrl: 'https://www.terraform.io/language/functions/file'
        },
        'templatefile': {
            type: 'function',
            description: 'Render template file',
            category: 'File Functions',
            syntax: 'templatefile(path, vars)',
            details: 'Reads a file and renders it as a template with variable substitution.',
            example: 'user_data = templatefile("init.tpl", { name = "web" })',
            docUrl: 'https://www.terraform.io/language/functions/templatefile'
        },
        'jsonencode': {
            type: 'function',
            description: 'Encode value as JSON',
            category: 'Encoding Functions',
            syntax: 'jsonencode(value)',
            details: 'Encodes a given value as a JSON string.',
            example: 'policy = jsonencode({ Version = "2012-10-17" })',
            docUrl: 'https://www.terraform.io/language/functions/jsonencode'
        },
        'jsondecode': {
            type: 'function',
            description: 'Decode JSON string',
            category: 'Encoding Functions',
            syntax: 'jsondecode(string)',
            details: 'Decodes a JSON string into a Terraform value.',
            example: 'data = jsondecode(file("config.json"))',
            docUrl: 'https://www.terraform.io/language/functions/jsondecode'
        },
        'yamlencode': {
            type: 'function',
            description: 'Encode value as YAML',
            category: 'Encoding Functions',
            syntax: 'yamlencode(value)',
            details: 'Encodes a given value as a YAML string.',
            example: 'config = yamlencode({ key = "value" })',
            docUrl: 'https://www.terraform.io/language/functions/yamlencode'
        },
        'yamldecode': {
            type: 'function',
            description: 'Decode YAML string',
            category: 'Encoding Functions',
            syntax: 'yamldecode(string)',
            details: 'Decodes a YAML string into a Terraform value.',
            example: 'data = yamldecode(file("config.yaml"))',
            docUrl: 'https://www.terraform.io/language/functions/yamldecode'
        },
        'lookup': {
            type: 'function',
            description: 'Retrieve map value',
            category: 'Collection Functions',
            syntax: 'lookup(map, key, default)',
            details: 'Retrieves a value from a map by key, with optional default.',
            example: 'instance_type = lookup(var.sizes, "web", "t2.micro")',
            docUrl: 'https://www.terraform.io/language/functions/lookup'
        },
        'merge': {
            type: 'function',
            description: 'Merge maps',
            category: 'Collection Functions',
            syntax: 'merge(maps...)',
            details: 'Merges multiple maps into a single map.',
            example: 'tags = merge(local.common_tags, { Name = "web" })',
            docUrl: 'https://www.terraform.io/language/functions/merge'
        },
        'concat': {
            type: 'function',
            description: 'Concatenate lists',
            category: 'Collection Functions',
            syntax: 'concat(lists...)',
            details: 'Combines multiple lists into a single list.',
            example: 'all_ips = concat(var.public_ips, var.private_ips)',
            docUrl: 'https://www.terraform.io/language/functions/concat'
        },
        'flatten': {
            type: 'function',
            description: 'Flatten nested lists',
            category: 'Collection Functions',
            syntax: 'flatten(list)',
            details: 'Flattens a list of lists into a single list.',
            example: 'all_items = flatten([["a", "b"], ["c", "d"]])',
            docUrl: 'https://www.terraform.io/language/functions/flatten'
        },
        'toset': {
            type: 'function',
            description: 'Convert to set',
            category: 'Type Conversion',
            syntax: 'toset(list)',
            details: 'Converts a list to a set, removing duplicates.',
            example: 'unique_azs = toset(["us-west-2a", "us-west-2a", "us-west-2b"])',
            docUrl: 'https://www.terraform.io/language/functions/toset'
        },
        'tolist': {
            type: 'function',
            description: 'Convert to list',
            category: 'Type Conversion',
            syntax: 'tolist(value)',
            details: 'Converts a set or tuple to a list.',
            example: 'az_list = tolist(var.availability_zones)',
            docUrl: 'https://www.terraform.io/language/functions/tolist'
        },
        'tomap': {
            type: 'function',
            description: 'Convert to map',
            category: 'Type Conversion',
            syntax: 'tomap(value)',
            details: 'Converts a value to a map.',
            example: 'tags_map = tomap({ Name = "web", Env = "prod" })',
            docUrl: 'https://www.terraform.io/language/functions/tomap'
        },
        'length': {
            type: 'function',
            description: 'Get length of collection',
            category: 'Collection Functions',
            syntax: 'length(value)',
            details: 'Returns the length of a list, map, or string.',
            example: 'instance_count = length(var.subnets)',
            docUrl: 'https://www.terraform.io/language/functions/length'
        },
        'join': {
            type: 'function',
            description: 'Join list into string',
            category: 'String Functions',
            syntax: 'join(separator, list)',
            details: 'Joins list elements into a string with a separator.',
            example: 'cidr_blocks = join(",", var.allowed_ips)',
            docUrl: 'https://www.terraform.io/language/functions/join'
        },
        'split': {
            type: 'function',
            description: 'Split string into list',
            category: 'String Functions',
            syntax: 'split(separator, string)',
            details: 'Splits a string into a list using a separator.',
            example: 'parts = split(",", "a,b,c")',
            docUrl: 'https://www.terraform.io/language/functions/split'
        },
        'format': {
            type: 'function',
            description: 'Format string',
            category: 'String Functions',
            syntax: 'format(spec, values...)',
            details: 'Formats a string using printf-style formatting.',
            example: 'name = format("server-%03d", count.index)',
            docUrl: 'https://www.terraform.io/language/functions/format'
        },
        'lower': {
            type: 'function',
            description: 'Convert to lowercase',
            category: 'String Functions',
            syntax: 'lower(string)',
            details: 'Converts a string to lowercase.',
            example: 'bucket_name = lower(var.project_name)',
            docUrl: 'https://www.terraform.io/language/functions/lower'
        },
        'upper': {
            type: 'function',
            description: 'Convert to uppercase',
            category: 'String Functions',
            syntax: 'upper(string)',
            details: 'Converts a string to uppercase.',
            example: 'env = upper(var.environment)',
            docUrl: 'https://www.terraform.io/language/functions/upper'
        },
        'replace': {
            type: 'function',
            description: 'Replace substring',
            category: 'String Functions',
            syntax: 'replace(string, search, replace)',
            details: 'Replaces occurrences of a substring in a string.',
            example: 'sanitized = replace(var.name, "_", "-")',
            docUrl: 'https://www.terraform.io/language/functions/replace'
        },
        'substr': {
            type: 'function',
            description: 'Extract substring',
            category: 'String Functions',
            syntax: 'substr(string, offset, length)',
            details: 'Extracts a substring from a string.',
            example: 'short_id = substr(var.resource_id, 0, 8)',
            docUrl: 'https://www.terraform.io/language/functions/substr'
        },
        'cidrsubnet': {
            type: 'function',
            description: 'Calculate subnet CIDR',
            category: 'IP Network Functions',
            syntax: 'cidrsubnet(prefix, newbits, netnum)',
            details: 'Calculates a subnet address within a given IP network.',
            example: 'subnet_cidr = cidrsubnet("10.0.0.0/16", 8, 1)',
            docUrl: 'https://www.terraform.io/language/functions/cidrsubnet'
        },
        'cidrhost': {
            type: 'function',
            description: 'Calculate host IP',
            category: 'IP Network Functions',
            syntax: 'cidrhost(prefix, hostnum)',
            details: 'Calculates a host IP address within a CIDR block.',
            example: 'gateway = cidrhost("10.0.1.0/24", 1)',
            docUrl: 'https://www.terraform.io/language/functions/cidrhost'
        },
        'timestamp': {
            type: 'function',
            description: 'Current timestamp',
            category: 'Date/Time Functions',
            syntax: 'timestamp()',
            details: 'Returns the current timestamp in RFC 3339 format.',
            example: 'created_at = timestamp()',
            docUrl: 'https://www.terraform.io/language/functions/timestamp'
        },
        'formatdate': {
            type: 'function',
            description: 'Format timestamp',
            category: 'Date/Time Functions',
            syntax: 'formatdate(spec, timestamp)',
            details: 'Formats a timestamp using a format specification.',
            example: 'date = formatdate("YYYY-MM-DD", timestamp())',
            docUrl: 'https://www.terraform.io/language/functions/formatdate'
        },
        'try': {
            type: 'function',
            description: 'Try expressions with fallback',
            category: 'Control Functions',
            syntax: 'try(expressions...)',
            details: 'Evaluates expressions in order, returning the first successful one.',
            example: 'value = try(var.optional_value, "default")',
            docUrl: 'https://www.terraform.io/language/functions/try'
        },
        'can': {
            type: 'function',
            description: 'Test if expression succeeds',
            category: 'Control Functions',
            syntax: 'can(expression)',
            details: 'Returns true if the expression can be evaluated without errors.',
            example: 'has_value = can(var.optional_map.key)',
            docUrl: 'https://www.terraform.io/language/functions/can'
        }
    },

    // Keywords
    keywords: {
        'true': {
            type: 'keyword',
            description: 'Boolean true value',
            category: 'Literals',
            details: 'Boolean literal representing true.',
            example: 'enabled = true',
            docUrl: 'https://www.terraform.io/language/expressions/types'
        },
        'false': {
            type: 'keyword',
            description: 'Boolean false value',
            category: 'Literals',
            details: 'Boolean literal representing false.',
            example: 'enabled = false',
            docUrl: 'https://www.terraform.io/language/expressions/types'
        },
        'null': {
            type: 'keyword',
            description: 'Null value',
            category: 'Literals',
            details: 'Represents the absence of a value.',
            example: 'optional_field = null',
            docUrl: 'https://www.terraform.io/language/expressions/types'
        },
        'var': {
            type: 'keyword',
            description: 'Variable reference',
            category: 'References',
            details: 'References an input variable.',
            example: 'instance_type = var.instance_type',
            docUrl: 'https://www.terraform.io/language/expressions/references'
        },
        'local': {
            type: 'keyword',
            description: 'Local value reference',
            category: 'References',
            details: 'References a local value.',
            example: 'tags = local.common_tags',
            docUrl: 'https://www.terraform.io/language/expressions/references'
        },
        'module': {
            type: 'keyword',
            description: 'Module output reference',
            category: 'References',
            details: 'References an output from a child module.',
            example: 'vpc_id = module.vpc.vpc_id',
            docUrl: 'https://www.terraform.io/language/expressions/references'
        },
        'each': {
            type: 'keyword',
            description: 'for_each iterator',
            category: 'Meta-Arguments',
            details: 'References the current item in a for_each loop.',
            example: 'name = each.key',
            docUrl: 'https://www.terraform.io/language/meta-arguments/for_each'
        },
        'count': {
            type: 'keyword',
            description: 'count iterator',
            category: 'Meta-Arguments',
            details: 'References the count meta-argument.',
            example: 'name = "server-${count.index}"',
            docUrl: 'https://www.terraform.io/language/meta-arguments/count'
        },
        'path': {
            type: 'keyword',
            description: 'Path references',
            category: 'References',
            details: 'References filesystem paths (path.module, path.root, path.cwd).',
            example: 'script = file("${path.module}/init.sh")',
            docUrl: 'https://www.terraform.io/language/expressions/references'
        },
        'terraform': {
            type: 'keyword',
            description: 'Terraform metadata',
            category: 'References',
            details: 'References Terraform metadata (terraform.workspace).',
            example: 'env = terraform.workspace',
            docUrl: 'https://www.terraform.io/language/expressions/references'
        }
    }
};

// Get explanation for a token
export function getExplanation(tokenValue, tokenType) {
    const normalized = tokenValue.trim().toLowerCase();

    // Check all knowledge categories
    const allKnowledge = {
        ...terraformKnowledge.blocks,
        ...terraformKnowledge.metaArguments,
        ...terraformKnowledge.functions,
        ...terraformKnowledge.keywords
    };

    // Try exact match
    if (allKnowledge[normalized]) {
        return allKnowledge[normalized];
    }

    // Provide type-specific explanations
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String literal',
            details: `String value: ${tokenValue}`,
            docUrl: 'https://www.terraform.io/language/expressions/strings'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: `Number: ${tokenValue}`,
            docUrl: 'https://www.terraform.io/language/expressions/types'
        };
    }

    if (tokenType === 'identifier') {
        return {
            type: 'identifier',
            description: 'Identifier or attribute',
            details: `Identifier: ${tokenValue}`,
            docUrl: 'https://www.terraform.io/language/syntax/configuration'
        };
    }

    // Default for unknown tokens
    return {
        type: 'unknown',
        description: 'Terraform syntax element',
        details: `Token: ${tokenValue}`,
        docUrl: 'https://www.terraform.io/language'
    };
}
