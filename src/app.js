//* Dependencies
const express = require('express');

//* Initial configs
const productsRouter = require('./products/products.router');
const db = require('./utils/database');
const app = express();
app.use( express.json() );

//* Authentication and syncing
db.authenticate()
    .then( () =>{
        console.log( 'Database authenticated successfully.' );
    } )
    .catch( err => {
        console.log( err );
    } );

db.sync()
    .then( () => {
        console.log( 'Database synced successfully.' );
    } )
    .catch( err => {
        console.log( err );
    } );

//* API actions
app.get( '/', ( req, res ) => {
    res.json( {
        message: 'Server OK!',
        password: process.env.MY_PASSWORD
    } );
} );

app.use( '/api/v1', productsRouter );

//* Listen.
app.listen( 9000, () => {
    console.log( 'Server started on http://localhost:9000' );
} );