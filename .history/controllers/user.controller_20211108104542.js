const UserModel = require('../models/user.model');

module.exports.getAllUsers = async(req, res) => {
    const users = await f
    res.status(200).json(users);
}