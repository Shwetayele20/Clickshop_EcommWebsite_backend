const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/auth/Auth.middleware')
const authorizeRoles = require('../../middlewares/auth/roleMiddleware')

router.get('/admin',authMiddleware, authorizeRoles(['admin']) , (req, res )=>{
    res.send('Admin Dashboard');

});

router.get('/customer', authMiddleware ,authorizeRoles(['user', 'admin']) , (req, res)=>{
    res.send('User Dashboard')
})

module.exports= router;