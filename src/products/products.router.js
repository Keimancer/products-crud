//* Imports
const productsServices = require('./products.services');
const router = require('express').Router();

//* GET all products route
router.get( '/products', productsServices.getAllProducts );

//* POST new product route
router.post( '/products', productsServices.postNewProduct );

//* GET product by ID route
router.get( '/products/:id', productsServices.getProductByID );

//TODO: UPDATE product route -> PATCH
router.patch( '/products/:id', productsServices.patchProduct );

//TODO: UPDATE product route -> PUT
router.put( '/products/:id', productsServices.putProduct );

//TODO: DELETE product route
router.delete( '/products/:id', productsServices.deleteProduct );

//* Exports
module.exports = router;