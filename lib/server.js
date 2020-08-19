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

// Routes
// PRODUCTS
app.post('/products', (req, res) => {
  console.log('PRODUCTS FOUND: ', req.body);
  res.status(200).send('OK!');
});

app.get('/products', (req, res) => {
  let output = {
    product: req.params.product || 'unknown',
  };
  res.status(200).json(output);
});

app.get('/products/:id', (req, res) => {
  console.log('PRODUCT FOUND: ', req.body.id);
  res.status(200).send('OK!');
});

app.put('/products/:id', (req, res) => {
  console.log('PRODUCT UPDATED: ', req.body.id);
  res.status(200).send('OK!');
});

app.delete('/products/:id', (req, res) => {
  console.log('PRODUCT DELETED: ', req.body.id);
});

// CATEGORIES
app.post('/categories', (req, res) => {
  console.log('CATEGORY ADDED: ', req.body);
  res.status(200).send('OK!');
});

app.get('/categories', (req, res) => {
  let output = {
    product: req.params.category || 'unknown',
  };
  res.status(200).json(output);
});

app.get('/categories/:id', (req, res) => {
  console.log('PRODUCT: ', req.body.id);
  res.status(200).send('OK!');
});

app.put('/categories/:id', (req, res) => {
  console.log('CATEGORY UPDATED: ', req.body.id);
  res.status(200).send('OK!');
});

app.delete('/categories/:id', (req, res) => {
  console.log('CATEGORY DELETED: ', req.body.id);
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

// Create routes within your server.js for both “categories” and “products”
// The “data” for these routes will be contained within the router itself, as an in-memory object or array of objects (your choice)
// Define CRUD routes to handle requests for both categories and products that will use this in-memory “database”
// app.post('/products', (req, res) => {}) … uses the object in the body of the request to create a new “record”
// app.get('/products', (req, res) => {})
// app.get('/products/:id', (req, res) => {})
// app.put('/products/:id', (req, res) => {}) … uses the object in the body to replace the record with the :id specified
// app.delete('/products/:id', (req, res) => {}) … deletes the record with the :id specified
// … and repeat for categories
