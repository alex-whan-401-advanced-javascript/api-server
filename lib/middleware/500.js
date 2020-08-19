// 500.js
// Sends a 500/Server Error message as the response (does not call .next())
// Import this into your server and set it up to be “used” as the last route

'use strict';

const error500 = (req, res, next) => {
  console.log('ERROR: SERVER ERROR!');
  res.status(500);
  res.send('SOMETHING WENT WRONG.');
  res.end();
};

module.exports = error500;
