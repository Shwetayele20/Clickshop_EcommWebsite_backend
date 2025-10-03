const express = require('express');
const router = express.Router();
const isAuthenticatedUser = require('../../middlewares/auth/Auth.middleware')
const isAdmin = require('../../middlewares/auth/roleMiddleware')

router.get('/admin',isAuthenticatedUser, isAdmin(['admin']) , (req, res )=>{
    res.send('Admin Dashboard');
});

router.get('/customer', isAuthenticatedUser ,isAdmin(['user', 'admin']) , (req, res)=>{
    res.send('User Dashboard')
})

module.exports= router;