// authentication.js
const { response } = require('express')
const users = require('../models/users.js')
const jwt = require('jsonwebtoken')
const secretkey = require('../config/secret.js')

const authenticate = (req, res, next) => { 
  const { authorization } = req.headers
  jwt.verify(authorization, secretkey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message:{
        msgBody: "Unauthorized",
        msgError: err
      }})
    }
    req.user = await users.findOne({ where: { id: decoded.user.id } })
    next()
  })
}

module.exports = authenticate