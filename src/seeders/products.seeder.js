//* Imports
const Products = require('../models/products.models');

//* Bulk Create
try {
    Products.bulkCreate([
        {
            title: 'Nintendo 3DS XL',
            price: 550000,
            currency: 'COP',
            imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_855392-MLA32731593151_112019-O.jpg',
            categoryId: 1
        },
        {
            title: 'PlayStation 5',
            price: 3200000,
            currency: 'COP',
            imageUrl: 'https://www.semana.com/resizer/Wo63uWUWfUFDv89NwRGSVv7mLAU=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/GT7KPYGNEVAMNIU42II7Z7JWDQ.jpg',
            categoryId: 1
        },
        {
            title: 'Sweater for men KOAJ',
            price: 120000,
            currency: 'COP',
            imageUrl: 'https://www.bazzarbog.com/105373-large_default/sweater-navideno-estrella-del-oriente.jpg',
            categoryId: 3
        },
        {
            title: 'Hammer Black&Decker',
            price: 50000,
            currency: 'COP',
            imageUrl: 'http://mobileimages.lowes.com/productimages/06b48d3b-f329-46cd-8dd4-3fef971bee2b/04938592.jpg',
            categoryId: 4
        },
        {
            title: 'Bleach Límpido 1L',
            price: 40000,
            currency: 'COP',
            imageUrl: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/361029/7702137636864_2.png?v=637865199726700000https://www.bazzarbog.com/105373-large_default/sweater-navideno-estrella-del-oriente.jpg',
            categoryId: 8
        }
    ]);
    console.log( 'Products created successfully.' );
} catch ( error ) {
    console.log({ message: 'Error: Products category.', error });
};