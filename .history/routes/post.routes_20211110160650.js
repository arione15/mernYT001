const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.getAllUsers);
router.post('/', postController.getAllUsers);
router.put('/', postController.getAllUsers);

module.exports = router;