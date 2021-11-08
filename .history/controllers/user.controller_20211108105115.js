const UserModel = require('../models/user.model');
constObject

module.exports.getAllUsers = async(req, res) => {
    const users = await UserModel.find().select();
    res.status(200).json(users);
}