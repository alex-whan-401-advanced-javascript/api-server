'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../lib/models/categories/categories-model');
const products = require('../lib/models/products/products-model');
const { model } = require('../lib/models/products/products-schema');

function getModel(req, res, next) {
  let model = req.params.model;

  // Best way to get the right model into the params is to use the switch statement

  switch (model) {
    case 'categories':
      req.model = categories;
      next();
      return;
    case 'products':
      req.model = products;
      next();
      return;
    default:
      next('INVALID MODEL.');
      return;
  }
}

// Tells all routes to listen for any route using a variation on ':model' in its path. Runs the getModel Middleware when triggered and sends the correct model on the request.
router.param('model', getModel);

// Combined route definitions
router.get('/api/v1/:model', handleGetAll);
router.get('/api/v1/:model', handleGetOne);
router.get('/api/v1/:model/:id', handlePost);

function handleGetAll(req, res, next) {
  req.model
    .get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model
    .get(id)
    .then(record => res.json(record))
    .catch(next);
}

function handlePost(req, res, next) {
  req.model
    .post(req.body)
    .then(results => res.json(results))
    .catch(next);
}

module.exports = router;

// Create a new generic “api” router module

// In this part of the refactor, we’ll be dynamically loading the model specified in the routes, dynamically, and using that in our route handlers for all CRUD operations. This is done in place of requiring the data model as a normal dependency in our route module.

// Name it something generic like lib/routes/api.js or lib/routes/api-v1.js

// Model this after one of your other working routes

// Setup express params middleware at the top level, to run a function on the “model” parameter

// In this middleware, dynamically require() the data model specified by the model parameter:

// Identify a valid model in the route param

// Finds the module in the file system

// Requires and instantiates it

// Makes that model available to the handler functions so that they can still call, for example, `request.model.create()

// Change your route definitions to recognize dynamic models, and engage this new middleware

// i.e. router.get('/api/v1/:model', handleGetAll)

// In your route handlers, use the model your params middleware (above) identified and loaded

// Ideally, these will be on the request object, so you can simply call the methods like:

// request.model.create( request.body ) instead of categories.create( request.body )
