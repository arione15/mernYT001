const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readPosts = (req, res) => {
    PostModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    }).sort({ createdAt: -1 });
};

module.exports.createPost = async(req, res) => {

};

module.exports.updatePost = (req, res) => {

};

module.exports.deletePost = (req, res) => {

};