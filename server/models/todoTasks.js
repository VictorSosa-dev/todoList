const { DataTypes } = require('sequelize')
const sequelize = require('../config/db.js')

const todoTasks = sequelize.define('todoTasks', {
    task: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    completed: {
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