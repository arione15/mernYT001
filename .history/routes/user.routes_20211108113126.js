const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

// routes pour auth
router.post("/register", authController.signUp);

// routes pour user(s)
router.get('/', userController.getAllUsers);
router.get('/:id', userController.infogetAllUsers);



module.exports = router;