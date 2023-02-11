//* Models import
const Products = require('./products.models');
const Categories = require('./categories.models');

//TODO: All relationships
const initModels = () => {
    Products.belongsTo( Categories );
    Categories.hasMany( Products );
};

module.exports = initModels;

