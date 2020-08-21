'use strict';

const { server } = require('../lib/server.js');
// const supergoose = require('@code-fellows/supergoose');
// const supertest = require('supertest');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('Server tests', () => {
  // it('should respond with 200 on a POST to /products', () => {
  //   let productToTest = {
  //     name: 'The Baconator Ultra',
  //     display_name: 'The Baconator Ultra',
  //     category: 'kitchen',
  //     description: 'Bacon!',
  //   };
  //   const results = mockRequest.post('/api/v1/products').send(productToTest);
  //   expect(results.status).toBe(200);
  // });
  // it('can post() a new category', () => {
  //   let obj = { name: 'apples', display_name: 'apples', description: 'FRUIT' };
  //   return mockRequest
  //     .post('/api/v1/categories')
  //     .send(obj)
  //     .then(data => {
  //       let record = data.body;
  //       Object.keys(obj).forEach(key => {
  //         expect(record[key]).toEqual(obj[key]);
  //       });
  //     });
  // });
  // const testCategory = async () => {
  //   let categoryToTest = {
  //     name: 'kitchen',
  //     display_name: 'kitchen',
  //     description: 'Appliances, tools, and amazing cookware for the kitchen.',
  //   };
  //   return await mockRequest.post('/api/v1/products').send(categoryToTest);
  // };
  // const testProduct = async () => {
  //   let productToTest = {
  //     category: 'kitchen',
  //     name: 'The Baconator Ultra',
  //     display_name: 'The Baconator Ultra',
  //     description:
  //       'Wake up to the smell of freshly-cooked bacon without burning your feet. Seriously necessary. Bacon!',
  //   };
  //   return await mockRequest.post('/api/v1/products').send(productToTest);
  // };
});
