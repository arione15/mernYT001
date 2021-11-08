const router = require('express').Router();
router.post("/register", authController.signUp);
module.exports = router;