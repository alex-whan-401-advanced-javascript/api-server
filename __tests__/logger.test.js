'use strict';

const logger = require('../lib/middleware/logger.js');

describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // this spies on the next method

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore(); // Puts console back
  });

  it('properly logs some output in the console', () => {
    logger(req, res, next);
    // Need to ensure it was called WITHOUT arguments
    expect(next).toHaveBeenCalledWith();
  });
});
