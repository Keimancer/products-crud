//* Imports
const Categories = require('../models/categories.models');
const Products = require('../models/products.models');

//* GET all products
const findAllProducts = async () => {
    const data = await Products.findAll({
        attributes: {
            exclude: [ 'categoryId', 'createdAt', 'updatedAt' ]
        },
        include: {
            model: Categories,
            attributes: {
                exclude: [ 'createdAt', 'updatedAt' ]
            }
        }
    });
    return data;
};

//* GET product by ID
const findProductByID = async id => {
    const data = await Products.findOne({
        where: {
            id: id
        }
    });
    return data;
};

//* POST new product
const createNewProduct = async prodObj => {
    const newProduct = {
        title: prodObj.title,
        price: prodObj.price,
        currency: prodObj.currency,
        imageUrl: prodObj.imageUrl  //! Care with the names, should be the same as previously defined including camelCase. 
    };
    const data = await Products.create( newProduct );
    return data;
};

//* UPDATE product
const updateProduct = async ( id, prodObj ) => {
    const data = await Products.update( prodObj, {
        where: {
            id: id
        }
    } );
    return data[0]; //? We receive an array: [0] or [1] -> how many entries were modified.
};

//* DELETE product
const deleteProduct = async id => {
    const data = await Products.destroy({
        where:{
            id: id
        }
    });
    return data; //? 0 or 1 -> how many entries were deleted.
};

//* Exports
module.exports = {
    findAllProducts,
    findProductByID,
    createNewProduct,
    updateProduct,
    deleteProduct
};