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
        return res.status(400).send("ID unknown : " + req.params.id);

    try {
        const result = await UserModel.findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    bio: req.body.bio
                }
            }, { new: true, upsert: true, setDefaultsOnInsert: true }, // upsert - if true and no records match the query, insert update as a new record
            // (err, docs) => {
            //     if (!err)
            //         return res.send(docs);
            //     if (err)
            //         return res.status(500).send({ message: err });

            // }
        );
        return res.send(result);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports.deleteUser = async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);

    try {
        await UserModel.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Successfully deleted." });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports.follow = async(req, res) => {
    if (!ObjectID.isValid(req.params.id) ||
        !ObjectID.isValid(req.body.idToFollow)
    )
        return res.status(400).send("ID unknown : " + req.params.id);

    try {
        // add to the follower list
        const result1 = await UserModel.findByIdAndUpdate(
            req.params.id, { $addToSet: { following: req.body.idToFollow } }, { new: true, upsert: true },
            (err, docs) => {
                if (!err) res.status(201).json(docs);
                else return res.status(400).json(err);
            }
        );
        return res.send(result1);

        // add to following list
        await UserModel.findByIdAndUpdate(
            req.body.idToFollow, { $addToSet: { followers: req.params.id } }, { new: true, upsert: true },
            (err, docs) => {
                // if (!err) res.status(201).json(docs);
                if (err) return res.status(400).json(err);
            }
        );
        return res.send(result2);

    } catch (err) {
        return res.status(500).json({ message: err });
    }
};