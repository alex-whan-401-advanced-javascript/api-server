// Create an express server, using 2 files
// index.js at the root of your repository, which will act as the “entry point” to your server.

'use strict';

// should require lib/server.js
const server = require('./lib/server.js');
// should require dotenv, reading PORT from your .env file
require('dotenv').config();

// It should call the .start() method from the server with the PORT set in your environment
server.start(process.env.PORT);
