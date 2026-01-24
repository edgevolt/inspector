// MongoDB Knowledge Base - Explanations for MongoDB query language

export const mongodbKnowledge = {
    // CRUD Operations
    crudOperations: {
        // CREATE
        'insertOne': {
            type: 'method',
            description: 'Insert a single document',
            syntax: 'db.collection.insertOne(document, options)',
            example: 'db.users.insertOne({ name: "John", age: 30 })',
            details: 'Inserts a single document into a collection. Returns the inserted document\'s _id.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/'
        },
        'insertMany': {
            type: 'method',
            description: 'Insert multiple documents',
            syntax: 'db.collection.insertMany([documents], options)',
            example: 'db.users.insertMany([{ name: "John" }, { name: "Jane" }])',
            details: 'Inserts multiple documents into a collection in a single operation. More efficient than multiple insertOne calls.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/'
        },

        // READ
        'find': {
            type: 'method',
            description: 'Query documents from collection',
            syntax: 'db.collection.find(query, projection)',
            example: 'db.users.find({ age: { $gte: 18 } })',
            details: 'Returns a cursor to documents that match the query criteria. Use with operators for complex queries.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.find/'
        },
        'findOne': {
            type: 'method',
            description: 'Query a single document',
            syntax: 'db.collection.findOne(query, projection)',
            example: 'db.users.findOne({ email: "user@example.com" })',
            details: 'Returns the first document that matches the query. Returns null if no match found.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/'
        },
        'countDocuments': {
            type: 'method',
            description: 'Count documents matching query',
            syntax: 'db.collection.countDocuments(query, options)',
            example: 'db.users.countDocuments({ status: "active" })',
            details: 'Returns the count of documents that match the query. More accurate than deprecated count().',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.countDocuments/'
        },
        'distinct': {
            type: 'method',
            description: 'Find distinct values for a field',
            syntax: 'db.collection.distinct(field, query)',
            example: 'db.users.distinct("country")',
            details: 'Returns an array of distinct values for the specified field across matching documents.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.distinct/'
        },

        // UPDATE
        'updateOne': {
            type: 'method',
            description: 'Update a single document',
            syntax: 'db.collection.updateOne(filter, update, options)',
            example: 'db.users.updateOne({ _id: id }, { $set: { status: "active" } })',
            details: 'Updates the first document that matches the filter. Use update operators like $set, $inc, etc.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/'
        },
        'updateMany': {
            type: 'method',
            description: 'Update multiple documents',
            syntax: 'db.collection.updateMany(filter, update, options)',
            example: 'db.users.updateMany({ status: "inactive" }, { $set: { archived: true } })',
            details: 'Updates all documents that match the filter criteria.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/'
        },
        'replaceOne': {
            type: 'method',
            description: 'Replace a document entirely',
            syntax: 'db.collection.replaceOne(filter, replacement, options)',
            example: 'db.users.replaceOne({ _id: id }, { name: "New Name", age: 25 })',
            details: 'Replaces the entire document (except _id) with the replacement document.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.replaceOne/'
        },
        'findOneAndUpdate': {
            type: 'method',
            description: 'Find and update a document atomically',
            syntax: 'db.collection.findOneAndUpdate(filter, update, options)',
            example: 'db.users.findOneAndUpdate({ _id: id }, { $inc: { views: 1 } }, { returnDocument: "after" })',
            details: 'Atomically finds and updates a document. Can return the document before or after update.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndUpdate/'
        },

        // DELETE
        'deleteOne': {
            type: 'method',
            description: 'Delete a single document',
            syntax: 'db.collection.deleteOne(filter)',
            example: 'db.users.deleteOne({ _id: id })',
            details: 'Deletes the first document that matches the filter.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/'
        },
        'deleteMany': {
            type: 'method',
            description: 'Delete multiple documents',
            syntax: 'db.collection.deleteMany(filter)',
            example: 'db.users.deleteMany({ status: "inactive" })',
            details: 'Deletes all documents that match the filter criteria.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/'
        },
        'findOneAndDelete': {
            type: 'method',
            description: 'Find and delete a document atomically',
            syntax: 'db.collection.findOneAndDelete(filter, options)',
            example: 'db.users.findOneAndDelete({ _id: id })',
            details: 'Atomically finds and deletes a document, returning the deleted document.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.findOneAndDelete/'
        },

        // AGGREGATION
        'aggregate': {
            type: 'method',
            description: 'Process data with aggregation pipeline',
            syntax: 'db.collection.aggregate([stages], options)',
            example: 'db.orders.aggregate([{ $match: { status: "completed" } }, { $group: { _id: "$customerId", total: { $sum: "$amount" } } }])',
            details: 'Processes documents through a pipeline of stages for complex data transformations and analysis.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/'
        }
    },

    // Query Operators
    queryOperators: {
        // Comparison
        '$eq': {
            type: 'operator',
            description: 'Matches values equal to specified value',
            syntax: '{ field: { $eq: value } }',
            example: '{ age: { $eq: 25 } }',
            details: 'Matches documents where the field equals the specified value. Can be simplified to { field: value }.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/eq/'
        },
        '$ne': {
            type: 'operator',
            description: 'Matches values not equal to specified value',
            syntax: '{ field: { $ne: value } }',
            example: '{ status: { $ne: "inactive" } }',
            details: 'Matches documents where the field does not equal the specified value.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/ne/'
        },
        '$gt': {
            type: 'operator',
            description: 'Matches values greater than specified value',
            syntax: '{ field: { $gt: value } }',
            example: '{ age: { $gt: 18 } }',
            details: 'Matches documents where the field is greater than the specified value.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/gt/'
        },
        '$gte': {
            type: 'operator',
            description: 'Matches values greater than or equal to value',
            syntax: '{ field: { $gte: value } }',
            example: '{ age: { $gte: 18 } }',
            details: 'Matches documents where the field is greater than or equal to the specified value.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/gte/'
        },
        '$lt': {
            type: 'operator',
            description: 'Matches values less than specified value',
            syntax: '{ field: { $lt: value } }',
            example: '{ price: { $lt: 100 } }',
            details: 'Matches documents where the field is less than the specified value.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/lt/'
        },
        '$lte': {
            type: 'operator',
            description: 'Matches values less than or equal to value',
            syntax: '{ field: { $lte: value } }',
            example: '{ price: { $lte: 100 } }',
            details: 'Matches documents where the field is less than or equal to the specified value.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/lte/'
        },
        '$in': {
            type: 'operator',
            description: 'Matches any value in an array',
            syntax: '{ field: { $in: [values] } }',
            example: '{ status: { $in: ["active", "pending"] } }',
            details: 'Matches documents where the field value equals any value in the specified array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/in/'
        },
        '$nin': {
            type: 'operator',
            description: 'Matches none of the values in an array',
            syntax: '{ field: { $nin: [values] } }',
            example: '{ status: { $nin: ["inactive", "deleted"] } }',
            details: 'Matches documents where the field value does not equal any value in the specified array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/nin/'
        },

        // Logical
        '$and': {
            type: 'operator',
            description: 'Joins query clauses with logical AND',
            syntax: '{ $and: [{ expr1 }, { expr2 }] }',
            example: '{ $and: [{ age: { $gte: 18 } }, { status: "active" }] }',
            details: 'Returns documents that match all conditions in the array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/and/'
        },
        '$or': {
            type: 'operator',
            description: 'Joins query clauses with logical OR',
            syntax: '{ $or: [{ expr1 }, { expr2 }] }',
            example: '{ $or: [{ status: "active" }, { premium: true }] }',
            details: 'Returns documents that match at least one condition in the array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/or/'
        },
        '$not': {
            type: 'operator',
            description: 'Inverts the effect of a query expression',
            syntax: '{ field: { $not: { operator } } }',
            example: '{ age: { $not: { $gte: 18 } } }',
            details: 'Performs a logical NOT operation on the specified operator expression.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/not/'
        },
        '$nor': {
            type: 'operator',
            description: 'Joins query clauses with logical NOR',
            syntax: '{ $nor: [{ expr1 }, { expr2 }] }',
            example: '{ $nor: [{ status: "inactive" }, { deleted: true }] }',
            details: 'Returns documents that fail to match all conditions in the array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/nor/'
        },

        // Element
        '$exists': {
            type: 'operator',
            description: 'Matches documents with the specified field',
            syntax: '{ field: { $exists: boolean } }',
            example: '{ email: { $exists: true } }',
            details: 'Matches documents that have (or don\'t have) the specified field.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/exists/'
        },
        '$type': {
            type: 'operator',
            description: 'Matches documents with specified field type',
            syntax: '{ field: { $type: type } }',
            example: '{ age: { $type: "number" } }',
            details: 'Matches documents where the field is of the specified BSON type.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/type/'
        },

        // Evaluation
        '$regex': {
            type: 'operator',
            description: 'Matches documents with regex pattern',
            syntax: '{ field: { $regex: pattern, $options: options } }',
            example: '{ name: { $regex: "^John", $options: "i" } }',
            details: 'Provides regular expression capabilities for pattern matching. Use $options for case-insensitive matching.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/regex/'
        },
        '$text': {
            type: 'operator',
            description: 'Performs text search',
            syntax: '{ $text: { $search: string } }',
            example: '{ $text: { $search: "coffee shop" } }',
            details: 'Performs text search on fields with text index. Supports phrase search and negation.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/text/'
        },
        '$expr': {
            type: 'operator',
            description: 'Allows aggregation expressions in query',
            syntax: '{ $expr: { expression } }',
            example: '{ $expr: { $gt: ["$spent", "$budget"] } }',
            details: 'Allows use of aggregation expressions within the query language, enabling field-to-field comparisons.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/expr/'
        },
        '$mod': {
            type: 'operator',
            description: 'Performs modulo operation',
            syntax: '{ field: { $mod: [divisor, remainder] } }',
            example: '{ qty: { $mod: [4, 0] } }',
            details: 'Matches documents where field value modulo divisor equals the specified remainder.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/mod/'
        },

        // Array
        '$all': {
            type: 'operator',
            description: 'Matches arrays containing all elements',
            syntax: '{ field: { $all: [values] } }',
            example: '{ tags: { $all: ["mongodb", "database"] } }',
            details: 'Matches arrays that contain all specified elements, regardless of order.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/all/'
        },
        '$elemMatch': {
            type: 'operator',
            description: 'Matches documents with array element matching conditions',
            syntax: '{ field: { $elemMatch: { conditions } } }',
            example: '{ scores: { $elemMatch: { $gte: 80, $lt: 90 } } }',
            details: 'Matches documents that contain an array field with at least one element matching all specified criteria.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/'
        },
        '$size': {
            type: 'operator',
            description: 'Matches arrays with specified size',
            syntax: '{ field: { $size: number } }',
            example: '{ tags: { $size: 3 } }',
            details: 'Matches documents where the array field has exactly the specified number of elements.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/query/size/'
        }
    },

    // Update Operators
    updateOperators: {
        '$set': {
            type: 'operator',
            description: 'Sets the value of a field',
            syntax: '{ $set: { field: value } }',
            example: '{ $set: { status: "active", updatedAt: new Date() } }',
            details: 'Sets the value of a field. If field doesn\'t exist, $set creates it.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/set/'
        },
        '$unset': {
            type: 'operator',
            description: 'Removes a field from document',
            syntax: '{ $unset: { field: "" } }',
            example: '{ $unset: { tempField: "" } }',
            details: 'Removes the specified field from a document.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/unset/'
        },
        '$inc': {
            type: 'operator',
            description: 'Increments field value by amount',
            syntax: '{ $inc: { field: amount } }',
            example: '{ $inc: { views: 1, likes: 5 } }',
            details: 'Increments the value of a field by the specified amount. Use negative values to decrement.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/inc/'
        },
        '$mul': {
            type: 'operator',
            description: 'Multiplies field value by number',
            syntax: '{ $mul: { field: number } }',
            example: '{ $mul: { price: 1.1 } }',
            details: 'Multiplies the value of a field by the specified number.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/mul/'
        },
        '$rename': {
            type: 'operator',
            description: 'Renames a field',
            syntax: '{ $rename: { oldName: newName } }',
            example: '{ $rename: { "name": "fullName" } }',
            details: 'Renames a field. The new field name must differ from the existing field name.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/rename/'
        },
        '$min': {
            type: 'operator',
            description: 'Updates field if value is less than current',
            syntax: '{ $min: { field: value } }',
            example: '{ $min: { lowestPrice: 99.99 } }',
            details: 'Updates the field value only if the specified value is less than the current field value.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/min/'
        },
        '$max': {
            type: 'operator',
            description: 'Updates field if value is greater than current',
            syntax: '{ $max: { field: value } }',
            example: '{ $max: { highScore: 1000 } }',
            details: 'Updates the field value only if the specified value is greater than the current field value.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/max/'
        },
        '$push': {
            type: 'operator',
            description: 'Appends value to array',
            syntax: '{ $push: { field: value } }',
            example: '{ $push: { tags: "mongodb" } }',
            details: 'Appends a value to an array. If the field doesn\'t exist, creates it as an array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/push/'
        },
        '$pull': {
            type: 'operator',
            description: 'Removes values from array',
            syntax: '{ $pull: { field: value } }',
            example: '{ $pull: { tags: "deprecated" } }',
            details: 'Removes all instances of a value from an array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/pull/'
        },
        '$addToSet': {
            type: 'operator',
            description: 'Adds value to array if not present',
            syntax: '{ $addToSet: { field: value } }',
            example: '{ $addToSet: { tags: "unique" } }',
            details: 'Adds a value to an array only if it doesn\'t already exist (ensures uniqueness).',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/addToSet/'
        },
        '$pop': {
            type: 'operator',
            description: 'Removes first or last element from array',
            syntax: '{ $pop: { field: 1 } }',
            example: '{ $pop: { scores: -1 } }',
            details: 'Removes the first (-1) or last (1) element from an array.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/update/pop/'
        }
    },

    // Aggregation Pipeline Stages
    aggregationStages: {
        '$match': {
            type: 'stage',
            description: 'Filters documents',
            syntax: '{ $match: { conditions } }',
            example: '{ $match: { status: "active" } }',
            details: 'Filters documents to pass only those that match the specified conditions. Should be placed early in pipeline for performance.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/match/'
        },
        '$group': {
            type: 'stage',
            description: 'Groups documents by expression',
            syntax: '{ $group: { _id: expression, field: { accumulator } } }',
            example: '{ $group: { _id: "$category", total: { $sum: "$amount" } } }',
            details: 'Groups documents by a specified identifier expression and applies accumulator expressions.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/'
        },
        '$project': {
            type: 'stage',
            description: 'Reshapes documents',
            syntax: '{ $project: { field: 1, newField: expression } }',
            example: '{ $project: { name: 1, total: { $multiply: ["$price", "$qty"] } } }',
            details: 'Reshapes documents by including, excluding, or adding fields. Use 1 to include, 0 to exclude.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/project/'
        },
        '$sort': {
            type: 'stage',
            description: 'Sorts documents',
            syntax: '{ $sort: { field: 1 } }',
            example: '{ $sort: { createdAt: -1, name: 1 } }',
            details: 'Sorts documents by specified fields. Use 1 for ascending, -1 for descending.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/sort/'
        },
        '$limit': {
            type: 'stage',
            description: 'Limits number of documents',
            syntax: '{ $limit: number }',
            example: '{ $limit: 10 }',
            details: 'Limits the number of documents passed to the next stage.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/limit/'
        },
        '$skip': {
            type: 'stage',
            description: 'Skips number of documents',
            syntax: '{ $skip: number }',
            example: '{ $skip: 20 }',
            details: 'Skips the specified number of documents. Useful for pagination with $limit.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/skip/'
        },
        '$lookup': {
            type: 'stage',
            description: 'Performs left outer join',
            syntax: '{ $lookup: { from: collection, localField, foreignField, as } }',
            example: '{ $lookup: { from: "orders", localField: "_id", foreignField: "userId", as: "userOrders" } }',
            details: 'Performs a left outer join to another collection. Similar to SQL LEFT JOIN.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/'
        },
        '$unwind': {
            type: 'stage',
            description: 'Deconstructs array field',
            syntax: '{ $unwind: "$arrayField" }',
            example: '{ $unwind: "$tags" }',
            details: 'Deconstructs an array field, outputting one document for each array element.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/unwind/'
        },
        '$count': {
            type: 'stage',
            description: 'Counts documents',
            syntax: '{ $count: "fieldName" }',
            example: '{ $count: "totalDocuments" }',
            details: 'Returns a document with the count of documents at this stage in the pipeline.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/count/'
        },
        '$addFields': {
            type: 'stage',
            description: 'Adds new fields to documents',
            syntax: '{ $addFields: { newField: expression } }',
            example: '{ $addFields: { totalPrice: { $multiply: ["$price", "$qty"] } } }',
            details: 'Adds new fields to documents. Similar to $project but keeps all existing fields.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/addFields/'
        },
        '$replaceRoot': {
            type: 'stage',
            description: 'Replaces document root',
            syntax: '{ $replaceRoot: { newRoot: expression } }',
            example: '{ $replaceRoot: { newRoot: "$embeddedDoc" } }',
            details: 'Replaces the input document with the specified document.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/replaceRoot/'
        },
        '$facet': {
            type: 'stage',
            description: 'Processes multiple pipelines',
            syntax: '{ $facet: { pipeline1: [], pipeline2: [] } }',
            example: '{ $facet: { byCategory: [{ $group: { _id: "$category" } }], byPrice: [{ $bucket: { groupBy: "$price", boundaries: [0, 50, 100] } }] } }',
            details: 'Processes multiple aggregation pipelines within a single stage, returning results in separate fields.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/facet/'
        },
        '$bucket': {
            type: 'stage',
            description: 'Categorizes documents into buckets',
            syntax: '{ $bucket: { groupBy: expression, boundaries: [], default } }',
            example: '{ $bucket: { groupBy: "$age", boundaries: [0, 18, 65, 100] } }',
            details: 'Categorizes documents into groups (buckets) based on specified boundaries.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/bucket/'
        },
        '$sortByCount': {
            type: 'stage',
            description: 'Groups and counts, then sorts by count',
            syntax: '{ $sortByCount: expression }',
            example: '{ $sortByCount: "$category" }',
            details: 'Groups documents by expression, counts each group, and sorts by count in descending order.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/sortByCount/'
        },
        '$sample': {
            type: 'stage',
            description: 'Randomly selects documents',
            syntax: '{ $sample: { size: number } }',
            example: '{ $sample: { size: 10 } }',
            details: 'Randomly selects the specified number of documents from the input.',
            docUrl: 'https://www.mongodb.com/docs/manual/reference/operator/aggregation/sample/'
        }
    }
};

// Helper function to get explanation for MongoDB tokens
export function getExplanation(token, tokenType) {
    const lowerToken = token.toLowerCase();

    // Check CRUD operations
    if (mongodbKnowledge.crudOperations[lowerToken]) {
        return mongodbKnowledge.crudOperations[lowerToken];
    }

    // Check operators (with $ prefix)
    if (token.startsWith('$')) {
        const operator = mongodbKnowledge.queryOperators[lowerToken] ||
            mongodbKnowledge.updateOperators[lowerToken] ||
            mongodbKnowledge.aggregationStages[lowerToken];
        if (operator) return operator;
    }

    // Default explanations
    if (tokenType === 'string') {
        return {
            type: 'string',
            description: 'String value',
            details: 'A string literal value in MongoDB query.'
        };
    }

    if (tokenType === 'number') {
        return {
            type: 'number',
            description: 'Numeric value',
            details: 'A numeric literal value (integer or float).'
        };
    }

    if (tokenType === 'field') {
        return {
            type: 'field',
            description: 'Document field',
            details: 'A field name in a MongoDB document. Use dot notation for embedded fields (e.g., "address.city").'
        };
    }

    if (tokenType === 'collection') {
        return {
            type: 'collection',
            description: 'Collection name',
            details: 'The name of a MongoDB collection.'
        };
    }

    return {
        type: 'unknown',
        description: token,
        details: 'Token type not recognized in MongoDB syntax.'
    };
}
