const users = require('../models/users')
const todoTasks = require('../models/todoTasks')
async function getUsers(req, res) {
    const allUsers = await users.findAll()
    if (allUsers) res.status(200).json(allUsers)
    else res.status(404).json({message: "No users found"})
}

async function getUserById(req, res) {
    const user = await users.findByPk(req.params.id)
    if (user) res.status(200).json(user)
    else res.status(404).json({message: "No user found"})
}


//Delete user and all his todoTasks
async function deleteUserAndTodoTasks(req, res) {
    const user = await users.findByPk(req.params.id)
    if (user) {
        await todoTasks.destroy({
            where: {
                userId: req.params.id
            }
        })
        await users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({message: "User and his todoTasks deleted"})
    } else {
        res.status(404).json({message: "No user found"})
    }
}

async function updateUser(req, res) {
    const user = await users.findByPk(req.params.id)
    if (user) {
        await user.update(req.body)
        res.status(200).json({message: "User updated"})
    } else {
        res.status(404).json({message: "No user found"})
    }
}
module.exports = {
    getUsers,
    getUserById,
    deleteUserAndTodoTasks,
    updateUser
}
