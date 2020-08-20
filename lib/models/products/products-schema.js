// For each, create both a schema and collection file
// i.e. categories.schema.js and categories.collection.js

// The schema file should define your data model as a Mongoose schema

'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  id: { type: Number, required: true },
  category: { type: String, required: true }, // could be "enumerated" with enum array options of categories?
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('product', product);
