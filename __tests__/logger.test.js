'use strict';

const logger = require( '../src/middleware/logger.js' );

describe( 'logger middleware', () => {
  let consoleSpy;
  const req = { method: 'get', path: 'test' };
  const res = {};
  const next = jest.fn();

  beforeEach( () => {
    consoleSpy = jest.spyOn( console, 'log' );
  } );

  afterEach( () => {
    consoleSpy.mockRestore();
  } );

  it( 'Testing logger', () => {
    
    logger( req, res, next );
    
    expect( consoleSpy ).toHaveBeenCalledWith( 'Method and Path info : ', 'get', 'test' );
    expect( next ).toHaveBeenCalledWith();// this means that there's no errors
  } );
} );