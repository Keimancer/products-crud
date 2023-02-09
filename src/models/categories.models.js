//* Imports
const { DataTypes } = require('sequelize');
const db = require('../utils/database');

//* Models
const Categories = db.define( 'categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
} );

//* Exports
module.exports = Categories;