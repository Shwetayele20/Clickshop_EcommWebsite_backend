const express = require('express');
const router = express.Router();
const {createOrder , updateOrder , getOrderById , deleteOrder} = require('../controllers/orderController');
const isAuthenticated = require('../middlewares/auth/Auth.middleware');

router.post('/addOrder' , isAuthenticated , createOrder);
router.put('/updateOrder' , isAuthenticated , updateOrder);
router.get('/getOrder/:id' , isAuthenticated , getOrderById );
router.delete('/deleteOrder/:cartId' , isAuthenticated , deleteOrder);

module.exports = router;
