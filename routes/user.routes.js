const router = require('express').Router()
const permission = require('../middlewares/permission.js')
const { 
    getUsers,
    getUserById,
    deleteUser,
    updateUser
} = require('../controllers/user.controllers.js')

router.get('/', permission('admin'), getUsers)
router.get('/:id', permission('admin'), getUserById)
router.delete('/:id', permission('admin'), deleteUser)
router.patch('/:id', permission('admin'), updateUser)


module.exports = router