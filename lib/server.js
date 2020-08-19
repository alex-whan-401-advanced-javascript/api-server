// lib/server.js which will serve as your server ‘module’ … will contain all of the logic for the server

'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const router = require('./routes.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');

// Global Middleware
app.use(express.json());
app.use(timestamp);
app.use(logger);
app.use(router);

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
