'use strict';

const express = require('express');
const router = express.Router();

let db = [];

// Categories Routes
router.get('/categories', getCategories);

function getCategories(req, res, next) {
  let count = db.length;
  let results = db;
  res.status(200).json({ count, results });
}

router.get('/categories/:id', getOneCategory);

function getOneCategory(req, res, next) {
  let id = req.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  res.status(200).json(record[0]);
}

router.post('/categories', postCategories);

function postCategories(req, res, next) {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.status(200).json(record);
}

router.put('/categories/:id', putOneCategory);

function putOneCategory(req, res, next) {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  db = db.map(record => {
    record.id === parseInt(idToUpdate) ? updatedRecord : record;
  });
  res.status(200).json(updatedRecord);
}

router.delete('/categories/:id', deleteOneCategory);

function deleteOneCategory(req, res, next) {
  let id = req.params.id;
  db = db.filter(record => record.id !== parseInt(id));
  res.status(200).json({});
}

module.exports = router;

// As a reminder, here are our user stories each of which must be executed for both categories and products data models

// As a developer, I want to CREATE a new record in a database, using the POST method on a custom API

// As a developer, I want the API to return the record I create in JSON format

// As a developer, I want to GET list of all records in a database, using the GET method on a custom API

// As a developer, I want the API to return an object containing count, and a results[] array

// As a developer, I want to GET an existing in a database, using the GET method with an ID parameter on a custom API

// As a developer, I want the API to return an object containing the record from the database

// As a developer, I want to UPDATE an existing record in a database, using the PUT and PATCH methods with an ID parameter on a custom API
// As a developer, I want the API to return the record I updated in JSON format

// As a developer, I want to DELETE an existing record in a database, using the DELETE method with an ID parameter on a custom API

// As a developer, I want the API to return the record I updated in JSON format

// As a developer, I want Swagger documentation for this API so that I can make it easier for other developers to use and understand
