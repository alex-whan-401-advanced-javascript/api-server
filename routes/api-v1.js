'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../lib/models/categories/categories-model');
const products = require('../lib/models/products/products-model');

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
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model', handleGetAll);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handleUpdateOne);
router.delete('/api/v1/:model/:id', handleDeleteOne);

async function handlePost(req, res, next) {
  let newRecord = await req.model.create(req.body);
  res.status(200).json(newRecord);
}

async function handleGetAll(req, res, next) {
  let recordsToGet = await req.model.get();
  res.status(200).json(recordsToGet);
}

async function handleGetOne(req, res, next) {
  let recordToGet = await req.model.get(req.params.id);
  res.status(200).json(recordToGet);
}

async function handleUpdateOne(req, res, next) {
  let recordToUpdate = await req.model.update(req.params.id, req.body);
  res.status(200).json(recordToUpdate);
}

async function handleDeleteOne(req, res, next) {
  await req.model.delete(req.params.id);
  res.status(200).send(`You have deleted a category with ID ${req.params.id}`);
}

module.exports = router;
