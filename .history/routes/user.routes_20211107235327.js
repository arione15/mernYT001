const router = require('express').Router();
constauthController = require('../')
router.post("/register", authController.signUp);
module.exports = router;