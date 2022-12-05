const router = require('express').Router()
const permission = require('../middlewares/permission.js')

const { 
    getTodoTasks, 
    createTodoTask,
    deleteTodoTask,
    updateTodoTask
} = require('../controllers/todoTask.controllers.js')

router.get('/', permission('client','admin'), getTodoTasks)
router.post('/', permission('client','admin'), createTodoTask)
router.delete('/:id', permission('client','admin'), deleteTodoTask)
router.patch('/:id', permission('client','admin'), updateTodoTask)

/*
router.get('/', getTodoTasks)
router.post('/', createTodoTask)
router.delete('/:id', deleteTodoTask)
router.patch('/:id', updateTodoTask)
*/

module.exports = router