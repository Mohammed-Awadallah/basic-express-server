'use strict';

module.exports = ( req, res, next ) => {
  console.log( 'Method and Path info : ', req.method, req.path );
  next();
};