const router = require('express').Router();
constauthController = require('../controllers/auth.controller')
router.post("/register", authController.signUp);
module.exports = router;