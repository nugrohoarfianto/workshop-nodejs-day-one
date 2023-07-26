const { DataTypes } = require('sequelize')
const sequelize = require('../config')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
module.exports = User;