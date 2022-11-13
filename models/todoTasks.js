const { DataTypes } = require('sequelize')
const sequelize = require('../config/db.js')

module.exports = (sequelize) => {
    const TodoTask = sequelize.define('todoTasks', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
            // allowNull defaults to true
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
}