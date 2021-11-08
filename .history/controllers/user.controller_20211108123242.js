const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async(req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(`ID ${req.params.id} is unknown!`);
    }
    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log(`ID unknown : ${err}`);
    }).select('-password')
};6188e0025ba8b1025d539778