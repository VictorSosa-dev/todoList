const { Sequelize } = require('sequelize');
const userModel = require('../models/users');
const todoTaskModel = require('../models/todoTasks');

const sequelize = new Sequelize(
    'todo',
    'root',
    '2940',
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 33061,
      logging: true
    }
)

const models = [userModel, todoTaskModel]

for (let model of models) {
    model(sequelize)
}

const { users, todoTasks } = sequelize.models
todoTasks.belongsTo(users)

module.exports = sequelize