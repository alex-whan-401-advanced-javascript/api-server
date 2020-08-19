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
// app.use(timestamp());
// app.use(logger());

// Must export an object with a start() method (it should not start on it’s own)
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
