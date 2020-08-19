// lib/server.js which will serve as your server ‘module’ … will contain all of the logic for the server
// Must export an object with a start() method (it should not start on it’s own)

'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

// Global Middleware
app.use(express.json());

module.exports = {
  start: port => {
    const PORT = port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  },
};
