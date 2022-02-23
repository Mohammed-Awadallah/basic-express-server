'use strict';

module.exports = ( req,res,next )=>{
  if(typeof req.query.name == 'string' ){
    next();
  }
  else {
    next( 'Its not a query' );
  }
};