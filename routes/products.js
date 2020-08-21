'use strict';

const express = require('express');
const router = express.Router();
const product = require('../lib/models/products/products-model');

// Product Routes
router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.put('/products/:id', updateOneProduct);
router.delete('/products/:id', deleteOneProduct);

async function createProduct(req, res, next) {
  let newProduct = await product.create(req.body);
  res.status(200).json(newProduct);
}

async function getProducts(req, res, next) {
  let productsToGet = await product.get();
  res.status(200).json(productsToGet);
}

async function getOneProduct(req, res, next) {
  let productToGet = await product.get(req.params.id);
  res.status(200).json(productToGet);
}

async function updateOneProduct(req, res, next) {
  let productToUpdate = await product.update(req.params.id, req.body);
  res.status(200).json(productToUpdate);
}

async function deleteOneProduct(req, res, next) {
  await product.delete(req.params.id);
  res.status.send(`You have deleted a product with ID ${req.params.id}`);
}

module.exports = router;
