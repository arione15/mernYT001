const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.readPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updategetAllUsers);

module.exports = router;