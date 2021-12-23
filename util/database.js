const Sequelize = require('Sequelize');

const sequelize = new Sequelize('nodeshop', 'root', 'qwe123', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;