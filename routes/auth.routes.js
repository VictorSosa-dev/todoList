const router = require('express').Router()
const { signUp, logIn } = require('../controllers/auth.controllers.js')

router.post('/signUp', signUp)
router.post('/login', logIn)

module.exports = router