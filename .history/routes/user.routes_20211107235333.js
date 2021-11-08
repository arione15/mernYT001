const router = require('express').Router();
constauthController = require('../controllers/auth')
router.post("/register", authController.signUp);
module.exports = router;