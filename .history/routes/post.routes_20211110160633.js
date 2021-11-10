const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', userController.getAllUsers);
router.post('/', userController.getAllUsers);
router.put('/', userController.getAllUsers);

module.exports = router;