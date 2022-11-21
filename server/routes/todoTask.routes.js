const router = require('express').Router();
const permission = require('../middlewares/permission.js');

const { 
    getTodoTasks, 
    createTodoTask,
    deleteTodoTask,
    updateTodoTask
} = require('../controllers/todoTask.controllers.js.js');

router.get('/', permission('client','admin'), getTodoTasks);
router.post('/', permission('client','admin'), createTodoTask);
router.delete('/:id', permission('client','admin'), deleteTodoTask);
router.patch('/:id', permission('client','admin'), updateTodoTask);

module.exports = router;