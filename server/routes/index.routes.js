const router = require('express').Router()
const todoTask = require('./todoTask.routes.js')
const auth = require('./auth.routes.js')
const autheticate = require('../middlewares/authentication.js')
const user = require('./user.routes.js')


router.get('/', (req, res) => {
    res.send('<h1> Welcome toDoList  </h1>')
})

router.use('/auth', auth)
router.use('/todo', autheticate, todoTask)
router.use('/user', autheticate, user)

module.exports = router