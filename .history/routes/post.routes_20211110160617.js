const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', userController.getAllUsers);

module.exports = router;