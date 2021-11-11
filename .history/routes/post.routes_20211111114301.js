const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.readPosts);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post:id', postController.deletePost);

module.exports = router;