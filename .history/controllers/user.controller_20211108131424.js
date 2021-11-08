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
};

module.exports.updateUser = async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)
    try {
        await UserModel.findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    bio: req.body.bio
                }
            }, { new: true, upsert: true, setDefaultsOnInsert: true }, // upsert - if true and no records match the query, insert update as a new record
            (err, docs) => {
                if (!err) {

                    res.send(docs);
                    return;
                }
                if (err) res.status(500).send({ message: err });
            }
        )
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};