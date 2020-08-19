// 404.js
// Sends a 404/Not-Found message as the response (does not call .next())
// Import this into your server and set it up to be “used” after your other routes

'use strict';

const error404 = (req, res, next) => {
  console.log('ERROR: UNKNOWN ROUTE!');
  res.status(404);
  res.send('THIS ROUTE DOES NOT EXIST.');
  res.end();
};

module.exports = error404;
