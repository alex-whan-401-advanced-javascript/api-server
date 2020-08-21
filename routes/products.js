'use strict';

const express = require('express');
const router = express.Router();

// Product Routes
router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', postProducts);
router.put('/products/:id', putOneProduct);
router.delete('/products/:id', deleteOneProduct);

function getProducts(req, res, next) {
  let count = db.length;
  let results = db;
  res.status(200).json({ count, results });
}

function getOneProduct(req, res, next) {
  let id = req.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  res.status(200).json(record[0]);
}

function postProducts(req, res, next) {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.status(200).json(record);
}

function putOneProduct(req, res, next) {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  db = db.map(record => {
    record.id === parseInt(idToUpdate) ? updatedRecord : record;
  });
  res.status(200).json(updatedRecord);
}

function deleteOneProduct(req, res, next) {
  let id = req.params.id;
  db = db.filter(record => record.id !== parseInt(id));
  res.status(200).json({});
}

module.exports = router;
