const router = require('express').Router();
const authController = require('../controllers/auth.controller');

// routes pour auth
router.post("/register", authController.signUp);

// routes pour user(s)
router.get()
module.exports = router;