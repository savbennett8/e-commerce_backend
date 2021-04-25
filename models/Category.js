const { STATUS_CODES } = require('node:http');
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { truncate } = require('./Product.js');

class Category extends Model { }

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_name: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;