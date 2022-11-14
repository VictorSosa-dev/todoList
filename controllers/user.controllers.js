const sequelize = require('../config/db.js')

async function getUsers(req, res) {
    const users = await sequelize.models.users.findAll();
    if (users) res.status(200).json(users)
    else res.status(404).json({message: "No users found"})
}

async function getUserById(req, res) {
    const user = await sequelize.models.users.findByPk(req.params.id);
    if (user) res.status(200).json(user)
    else res.status(404).json({message: "No user found"})
}

async function deleteUser(req, res) {
    const user = await sequelize.models.users.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.status(200).json({message: "User deleted"})
    } else {
        res.status(404).json({message: "No user found"})
    }
}

async function updateUser(req, res) {
    const user = await sequelize.models.users.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.status(200).json({message: "User updated"})
    } else {
        res.status(404).json({message: "No user found"})
    }
}
module.exports = {
    getUsers,
    getUserById,
    deleteUser,
    updateUser
}
