//* Imports
const Categories = require('../models/categories.models');

//* Bulk Create

try {
    Categories.bulkCreate([
        {
            name: 'Consoles'
        },
        {
            name: 'Home Appliances'
        },
        {
            name: 'Clothing'
        },
        {
            name: 'Tools'
        },
        {
            name: 'Toys'
        },
        {
            name: 'Accessories'
        },
        {
            name: 'Stationery'
        },
        {
            name: 'Cleaning'
        },
        {
            name: 'Pets'
        },
        {
            name: 'Carpentry'
        }
    ]);
    console.log( 'Categories created successfully.' );
} catch ( error ) {
    console.log({ message: 'Error: Seeders category.', error });
};