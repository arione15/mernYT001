const router = require('express').Router();
const authController = require('../controllers/auth.controller');

// toutes
router.post("/register", authController.signUp);


module.exports = router;