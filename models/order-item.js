const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const OrderItems = sequelize.define('orderItem', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: Sequelize.INTEGER
})

module.exports = OrderItems;