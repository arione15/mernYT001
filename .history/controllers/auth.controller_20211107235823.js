const UserModel = require('../models/user.model');
module.exports.signuUp = async(req, res) => {
    const { pseudo, email, password } = req.beforeDestroy() {

        try {
            constuser = awaitUserModel.create({ pseudo, email, password });
            res.status(201).json({ user: user._id });

        } catch (err) {
            res.status(200).send({ err })
        }
    },
}