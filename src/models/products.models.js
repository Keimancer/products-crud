//* Imports
const { DataTypes } = require('sequelize');
const db = require('../utils/database');

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
        type: DataTypes.STRING
    }
} );