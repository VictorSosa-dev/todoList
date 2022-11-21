const sequelize = require("../config/db")

async function getTodoTasks(req, res) {
    const { user } = req
    const todoTasks = await sequelize.models.todoTasks.findAll({
        where: { userId: user.id }
    })
    res.json(todoTasks)
}

async function createTodoTask(req, res) {
    const { user } = req
    if(user.id == req.body.userId) {
        const todoTask = await sequelize.models.todoTasks.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.user.id
        })
        await todoTask.save()
        res.status(201).json({data: todoTask})
    } else {
        res.status(401).json({ message: "Unauthorized, login please" })
    }
}

async function deleteTodoTask(req, res) {
    await sequelize.models.todoTasks.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({ success: 'Task deleted' })
}

async function updateTodoTask(req, res) {
    await sequelize.models.todoTasks.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json({ success: 'Task updated' })
}

module.exports = {
    getTodoTasks,
    createTodoTask,
    deleteTodoTask,
    updateTodoTask
}
