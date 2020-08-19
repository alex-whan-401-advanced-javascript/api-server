// lib/server.js which will serve as your server ‘module’ … will contain all of the logic for the server

'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');

// Global Middleware
app.use(express.json());
app.use(timestamp);
app.use(logger);

// Placeholder Database array
let db = [];

// Routes
// PRODUCTS
app.get('/products', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.status(200).json({ count, results });
});

app.get('/products/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  res.status(200).json(record[0]);
});

app.post('/products', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.status(200).json(record);
});

app.put('/products/:id', (req, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  db = db.map(record => {
    record.id === parseInt(idToUpdate) ? updatedRecord : record;
  });
  res.status(200).json(updatedRecord);
});

app.delete('/products/:id', (req, res, next) => {
  let id = req.params.id;
  db = db.filter(record => record.id !== parseInt(id));
  res.status(200).json({});
});

// CATEGORIES
app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.status(200).json({ count, results });
});

app.get('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  res.status(200).json(record[0]);
});

app.post('/categories', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.status(200).json(record);
});

app.put('/categories/:id', (req, res, next) => {
  let idToUpdate = req.params.id;
  let { name, id } = req.body;
  let updatedRecord = { name, id };
  db = db.map(record => {
    record.id === parseInt(idToUpdate) ? updatedRecord : record;
  });
  res.status(200).json(updatedRecord);
});

app.delete('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  db = db.filter(record => record.id !== parseInt(id));
  res.status(200).json({});
});

// ERRORS
app.use('*', error404);
app.use(error500);

// Must export an object with a start() method (it should not start on its own)
module.exports = {
  start: port => {
    const PORT = port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  },
};
