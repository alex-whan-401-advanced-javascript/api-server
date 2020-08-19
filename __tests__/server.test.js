'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Server tests', () => {
  it('should respond with 500 on an error', () => {
    return mockRequest
      .get('/badroute')
      .then(results => {
        expect(results.status).toBe(500);
      })
      .catch(console.error);
  });
});
