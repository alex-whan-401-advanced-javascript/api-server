// For each, create both a schema and collection file
// i.e. categories.schema.js and categories.collection.js

// The schema file should define your data model as a Mongoose schema
'use strict';

const mongoose = require('mongoose');

const category = mongoose.Schema({});

module.exports = mongoose.model('category', category);

// const food = mongoose.Schema({
//   name: { type: String, required: true },
//   calories: { type: Number, required: true },
//   type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTIEN'] },
// });

// module.exports = mongoose.model('food', food);

// // Take a look in the mongo CLI ... what is the created collection actually called???
