//* Function import
const productsControllers = require('./products.controllers');

//* GET all products controller
const getAllProducts = ( req, res ) => {
    productsControllers.findAllProducts()
        .then( data => {
            res.status( 200 ).json( data );
        } )
        .catch( error => {
            res.status( 400 ).json( error );
        } )
}

//* GET product by ID
const getProductByID = ( req, res ) => {
    const id = Number( req.params.id );

    productsControllers.findProductByID( id )
        .then( data => {
            if( data ){
                res.status( 200 ).json( data );
            } else {
                res.status( 404 ).json({
                    message: 'Dats not a product mah boi uwu',
                    error_img: 'https://http.dog/404.jpg'
                });
            }
        })
        .catch( error => {
            res.status( 400 ).json( error );
        });
};

//* POST new product
const postNewProduct = ( req, res ) => {
    const productObj = req.body;

    productsControllers.createNewProduct( productObj )
        .then( data => {
            res.status( 201 ).json( data );
        })
        .catch( error => {
            res.status( 400 ).json( error );
        });
};

//* Exports
module.exports = {
    getAllProducts,
    getProductByID,
    postNewProduct
};