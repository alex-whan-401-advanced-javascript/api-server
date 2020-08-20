// For each, create both a schema and collection file
// i.e. categories.schema.js and categories.collection.js

// The schema file should define your data model as a Mongoose schema
'use strict';

const schema = require('./categories-schema.js');
const Model = require('../mongo.js');

class Category extends Model {
  constructor() {
    super(schema);
  }
}

// new INSTANCE of this Category
module.exports = new Category();
