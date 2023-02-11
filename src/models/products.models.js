//* Imports
const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Categories = require('./categories.models');

//* Models
const Products = db.define( 'products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    currency: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categories,
            key: 'id'
        }
    }
} );

//* Exports
module.exports = Products;