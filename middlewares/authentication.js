// authentication.js
const { response } = require('express')
const sequelize = require('../config/db.js')
const jwt = require('jsonwebtoken')
const secretkey = require('../config/secret.js')

const authenticate = (req, res, next) => {
  const { authorization } = req.headers
  jwt.verify(authorization, secretkey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' })
    }
    req.user = await sequelize.models.users.findOne({ where: { id: decoded.userId } })
    next()
  })
}

module.exports = authenticate
