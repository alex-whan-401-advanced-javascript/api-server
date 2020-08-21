'use strict';

const express = require('express');
const router = express.Router();
const category = require('../lib/models/categories/categories-model'); // I think this is ok - an INSTANCE of a MODEL already at this point since we exported a new instance in the categories-model file

// Categories Routes

router.post('/categories', createCategory);
router.get('/categories', getCategories);
router.get('/categories/:id', getOneCategory);
router.put('/categories/:id', updateOneCategory);
router.delete('/categories/:id', deleteOneCategory);

async function createCategory(req, res, next) {
  let newCategory = await category.create(req.body);
  res.status(200).json(newCategory);
}

async function getCategories(req, res, next) {
  let categoriesToGet = await category.get();
  res.status(200).json(categoriesToGet);
}

async function getOneCategory(req, res, next) {
  let categoryToGet = await category.get(req.params.id);
  res.status(200).json(categoryToGet);
}

async function updateOneCategory(req, res, next) {
  let categoryToUpdate = await category.update(req.params.id, req.body);
  res.status(200).json(categoryToUpdate);
}

async function deleteOneCategory(req, res, next) {
  await category.delete(req.params.id);
  res.status(200).send(`You have deleted a category with ID ${req.params.id}`);
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
