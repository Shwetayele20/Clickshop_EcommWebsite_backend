const {registerUser , loginUser , logoutUser , getUserProfile} = require('../../controllers/auth/User.controller');
const express = require('express');
const router = express.Router();

router.post('/register' , registerUser);
router.post('/login', loginUser);
router.post('/logout' , logoutUser);

module.exports = router;
