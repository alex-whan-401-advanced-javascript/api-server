'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('Route tests', () => {
  const productToTest = {
    name: 'The Baconator',
    display_name: 'The Baconator',
    category: 'kitchen',
    description: 'Bacon!',
  };

  it('should respond with 200 on a POST to /products', async () => {
    const results = await mockRequest
      .post('/api/v1/products')
      .send(productToTest);
    expect(results.status).toBe(200);
    expect(results.body.name).toBe('The Baconator');
  });

  it('should respond with 200 on a GET to /products', async () => {
    const results = await mockRequest.get('/api/v1/products');
    expect(results.status).toBe(200);
  });

  it('should respond with 200 on a GET to /products/:id', async () => {
    const results = await mockRequest
      .post('/api/v1/products')
      .send(productToTest);
    // let results = await testProduct();
    // let id = results.body._id;
    results.get(`/api/v1/products/:id`);
    expect(results.status).toBe(200);
    expect(results.body.name).toBe('The Baconator');
  });

  it.skip('should respond with 200 on a PUT to /products/:id', async () => {
    const results = await mockRequest
      .post('/api/v1/products')
      .send(productToTest);
    let id = results.body._id;
    results.update(`/api/v1/products/${id}`);
    expect(results.status).toBe(200);
    expect(results.body.name).toBe('The Baconator');
  });

  it.skip('should respond with 200 on a DELETE to /products/:id', async () => {
    const results = await mockRequest
      .post('/api/v1/products')
      .send(productToTest);
    results.delete(`/api/v1/products/:id`);
    expect(results.status).toBe(200);
    expect(results.body.name).toBe('The Baconator');
  });
});

const testCategory = async () => {
  let categoryToTest = {
    name: 'kitchen',
    display_name: 'kitchen',
    description: 'Stuff for the kitchen.',
  };
  return await mockRequest.post('/api/v1/products').send(categoryToTest);
};

const testProduct = async () => {
  let productToTest = {
    category: 'kitchen',
    name: 'The Baconator Ultra',
    display_name: 'The Baconator Ultra',
    description: 'Bacon!',
  };
  return await mockRequest.post('/api/v1/products').send(productToTest);
};
