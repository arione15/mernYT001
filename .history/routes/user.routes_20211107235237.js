const router = require('express').Router();
router.post("/register", authController.signU)