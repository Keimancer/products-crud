//* Dependencies
const express = require('express');
require('dotenv').config();

//* Initial configurations
const productsRouter = require('./products/products.router');
const db = require('./utils/database');
const initModels = require('./models/initModels');
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

initModels();

//* API actions
app.get( '/', ( req, res ) => {
    res.json( {
        message: 'Server OK!',
    } );
} );

app.use( '/api/v1', productsRouter );

//* Listen.
app.listen( 9000, () => {
    console.log( 'Server started on http://localhost:9000' );
} );