// logger.js
// Execute a console.log() containing the request path, method, and the requestTime property of the request object
// Import this into your server and set it up to run at the application level for all routes

const logger = (req, res, next) => {
  console.log(
    ` REQUEST || Method: ${req.method} | Path: ${req.path} | Time: ${req.requestTime}`
  );
  next();
};

module.exports = logger;
