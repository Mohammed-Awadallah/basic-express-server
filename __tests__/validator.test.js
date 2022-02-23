'use strict';

const server = require( '../src/server.js' );
const supertest = require ( 'supertest' );
const req = supertest ( server.app );
describe ( 'server',()=>{
  it( 'should get 200 status', async()=>{
    const res = await req.get( '/person?name=Mohammed' );
    expect( res.status ).toBe( 200 );
    expect( res.text ).toBe( '{"name":"Mohammed"}' );
  } );

  it( 'should get 404 status', async()=>{
    const res = await req.post( '/person' );
    expect( res.status ).toBe( 404 );
  } );
} );