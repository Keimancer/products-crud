//* Imports
const productsServices = require('./products.services');
const router = require('express').Router();

//* GET all products route
router.get( '/products', productsServices.getAllProducts );

//* GET product by ID route
router.get( '/products/:id', productsServices.getProductByID );

//* POST new product route
router.post( '/products', productsServices.postNewProduct );

//* Exports
module.exports = router;