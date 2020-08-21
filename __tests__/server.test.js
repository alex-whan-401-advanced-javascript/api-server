'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Server tests', () => {
  it('should respond with 500 on an error on a bad route', () => {
    return mockRequest.get('/bad').then(results => {
      expect(results.status).toBe(500);
    });
  });

  it('should respond with 404 on an error on a nonexistent route', () => {
    return mockRequest.get('/api/v1/notaroute').then(results => {
      expect(results.status).toBe(404);
    });
  });
});
