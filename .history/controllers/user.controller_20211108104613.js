const UserModel = require('../models/user.model');

module.exports.getAllUsers = async(req, res) => {
    const users = await Usermodelfind().select();
    res.status(200).json(users);
}