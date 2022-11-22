const { DataTypes } = require('sequelize')
const sequelize = require('../config/db.js')

const todoTasks = sequelize.define('todoTasks', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        required: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
})

module.exports = todoTasks