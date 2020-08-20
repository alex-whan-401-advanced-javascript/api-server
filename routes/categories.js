'use strict';

const express = require('express');
const router = express.Router();
const CategoryModel = require('../lib/models/categories/categories-model');
const category = new CategoryModel();

// Categories Routes

router.post('/categories', postCategories);

function postCategories(req, res, next) {
  let newCategory = category.create(req.body);
  res.status(200).json(newCategory);
}

router.get('/categories', getCategories);

function getCategories(req, res, next) {
  let categoriesToGet = category.read();
  res.status(200).json(categoriesToGet);
}

router.get('/categories/:id', getOneCategory);

function getOneCategory(req, res, next) {
  let categoryToGet = category.read(req.params.id);
  res.status(200).json(categoryToGet);
}

router.put('/categories/:id', putOneCategory);

function putOneCategory(req, res, next) {
  let categoryToPut = category.update(req.params.id, req.body);
  res.status(200).json(categoryToPut);
}

router.delete('/categories/:id', deleteOneCategory);

function deleteOneCategory(req, res, next) {
  category.delete(req.params.id);
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
