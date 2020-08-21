const { server } = require('../lib/server.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('API/CRUD tests', () => {
  const productToTest = {
    name: 'The Baconator',
    display_name: 'The Baconator',
    category: 'kitchen',
    description: 'Bacon!',
  };

  it('can post() a new product', () => {
    return mockRequest
      .post('/api/v1/products')
      .send(productToTest)
      .then(data => {
        let record = data.body;
        Object.keys(productToTest).forEach(key => {
          expect(record[key]).toEqual(productToTest[key]);
        });
      });
  });

  it('can get() a product', () => {
    return mockRequest
      .post('/api/v1/products')
      .send(productToTest)
      .then(data => {
        return mockRequest.get('/api/v1/products').then(record => {
          Object.keys(productToTest).forEach(key => {
            expect(record.body[0][key]).toEqual(productToTest[key]);
          });
        });
      });
  });

  it('can update() a product', () => {
    return mockRequest
      .post('/api/v1/products')
      .send(productToTest)
      .then(data => {
        return mockRequest
          .put(`/api/v1/products/${data.body._id}`)
          .send({ name: 'The Baconator Ultra' })
          .then(record => {
            expect(record.body.name).toBe('The Baconator Ultra');
          });
      });
  });

  it.skip('can delete() a product', () => {
    return mockRequest
      .post('/api/v1/products')
      .send(productToTest)
      .then(data => {
        return mockRequest
          .delete(`/api/v1/products/${data.body._id}`)
          .then(record => {
            expect(record.body.name).toBe(undefined);
          });
      });
  });
});
