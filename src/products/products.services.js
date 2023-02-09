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
                    message: 'Product not found.',
                    error_img: 'https://http.dog/404.jpg'
                });
            };
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

//* UPDATE product -> PATCH
const patchProduct = ( req, res ) => {
    const id = req.params.id;
    const productObj = req.body;
    productsControllers.updateProduct( id, productObj )
        .then( data => {
            if( data ){
                res.status( 200 ).json({ message: `Product with id: ${ id } updated successfully.` });
            } else {
                res.status( 404 ).json({
                        message: 'Product not found.',
                        error_img: 'https://http.dog/404.jpg'
                });
            };
        })
        .catch( error => {
            res.status( 400 ).json( error );
        });
};

//* UPDATE product -> PUT
const putProduct = ( req, res ) => {
    const id = req.params.id;
    const productObj = req.body;
    if( !productObj.title || !productObj.price || !productObj.currency || !productObj.imageUrl ){
        return res.status( 400 ).json({
            message: 'Missing data.',
            error_img: 'https://http.dog/400.jpg',
            fields: {
                title: 'String',
                price: 5000.3,
                currency: 'USD',
                imageUrl: 'https://http.dog/400.jpg'
            }
        });
    };
    productsControllers.updateProduct( id, productObj )
        .then( data => {
            if( data ){
                res.status( 200 ).json({ message: `Product with id: ${ id } updated successfully.` });
            } else {
                res.status( 404 ).json({
                        message: 'Product not found.',
                        error_img: 'https://http.dog/404.jpg'
                });
            };
        })
        .catch( error => {
            res.status( 400 ).json( error );
        });
}

//* DELETE product
const deleteProduct = ( req, res ) => {
    const id = req.params.id;
    productsControllers.deleteProduct( id )
        .then( data => {
            if( data ){
                res.status( 204 ).json();
            } else {
                res.status( 404 ).json({
                        message: 'Product not found.',
                        error_img: 'https://http.dog/404.jpg'
                });
            }
        } )
        .catch( error => {
            res.status( 400 ).json( error );
        } );
};

//* Exports
module.exports = {
    getAllProducts,
    getProductByID,
    postNewProduct,
    patchProduct,
    putProduct,
    deleteProduct
};