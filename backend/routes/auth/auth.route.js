const {registerUser , loginUser , logoutUser , getUserProfile} = require('../../controllers/auth/User.controller');
const express = require('express');
const router = express.Router();
const  getAllUsers = require('../../controllers/getAllUser').getAllUsers;
const authMiddleware = require('../../middlewares/auth/Auth.middleware');
const authorizeRoles = require('../../middlewares/auth/roleMiddleware');

router.post('/register' , registerUser);
router.post('/login', loginUser);
router.post('/logout' , logoutUser);
router.get('/profile' , getUserProfile);
router.get('/all' , authMiddleware, authorizeRoles(['admin']), getAllUsers);

module.exports = router;

