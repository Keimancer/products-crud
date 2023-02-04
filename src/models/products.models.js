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
        defaultValue: '',
        unique: true
    }
} );