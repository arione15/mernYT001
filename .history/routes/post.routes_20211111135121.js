const router = require('express').Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.readPosts);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

// comments
router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edcomment-post/:id', postController.commentPost);


module.exports = router;