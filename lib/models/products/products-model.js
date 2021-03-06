// For each, create both a schema and collection file
// i.e. categories.schema.js and categories.collection.js

// The schema file should define your data model as a Mongoose schema

'use strict';

const schema = require('./products-schema.js');
const DataModel = require('../mongo.js');

class Product extends DataModel {}

module.exports = new Product(schema);
