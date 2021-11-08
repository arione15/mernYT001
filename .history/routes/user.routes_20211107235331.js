const router = require('express').Router();
constauthController = require('../controllers')
router.post("/register", authController.signUp);
module.exports = router;