'use strict';
// The collection file should be a class that: - this is our MONGO MODEL CLASS - like in Notesy
// Imports the schema
class Model {
  constructor(schema) {
    // We pass in schema in the methods
    this.schema = schema;
  }

  get() {
    // read() performs a find() query in your schema
  }

  create(record) {
    // create() performs a save() query in your schema for a new record
  }

  update(_id, record) {
    // update() performs a findOneByIdAndUpdate() operation in your schema for an existing record
  }

  delete(_id) {
    // delete() performs a findOneByIdAndDelete() in your schema for a new record
  }
}

// Exports a class with CRUD methods, coded to work with your schema
module.exports = Model;
