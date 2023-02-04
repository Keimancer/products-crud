//* Declaring DB and helpers
const productDB = [
    {
        id: 1,
        title: 'Nintendo 3DS XL Red',
        price: 500000,
        currency: 'COP',
        image_url: 'https://m.media-amazon.com/images/I/81x4i1a1ZtL.jpg'
    },
    {
        id: 2,
        title: 'PlayStation 5',
        price: 3200000,
        currency: 'COP',
        image_url: 'https://http2.mlstatic.com/D_NQ_NP_2X_841787-MLA44484414455_012021-V.webp'
    }
];

let baseID = 3;

//* GET all products
const findAllProducts = async () => {
    return await productDB;
};

//* GET product by ID
const findProductByID = async id => {
    const data = await productDB.find( product => product.id === id );
    return data;
};

//* POST new product
const createNewProduct = async prodObj => {
    const newProduct = {
        id: baseID++,
        title: prodObj.title,
        price: prodObj.price,
        currency: prodObj.currency,
        image_url: prodObj.image_url
    };
    await productDB.push( newProduct );
    return newProduct;
};

//* Exports
module.exports = {
    findAllProducts,
    findProductByID,
    createNewProduct
};