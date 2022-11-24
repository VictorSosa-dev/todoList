const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/db.js')
const todoTasks = require('./todoTasks.js')

const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.TEXT, allowNull: false },
  type: { type: DataTypes.STRING},
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
}, {
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync()
      user.password = bcrypt.hashSync(user.password, salt)
    }
  }
});

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

User.hasMany(todoTasks, { foreignKey: 'userId' })
todoTasks.belongsTo(User, { foreignKey: 'userId' })

module.exports = User;