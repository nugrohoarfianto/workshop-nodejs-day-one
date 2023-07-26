const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'mydatabase2.db'
})

module.exports = sequelize