const OrderService = require('../services/orderService');
const response = require('../utils/response');

const createOrder = async(req , res) =>{
    try {
        const userId = req.user.userId;
        const orderData = req.body;
        const order = await OrderService.createOrder(orderData, userId);
        response.success(res , 'Order created successfully' , order);

    } catch (error) {
         response.error(res , error.message)
    }
}

const updateOrder = async(req , res) =>{
    try {
        const userId = req.user.userId;
        const orderData = req.body;
        const order = await OrderService.updateOrder(orderData, userId);
        response.success(res , 'Order updated successfully' , order)
    } catch (error) {
        response.error(res , error.message)
    }
}

const getOrderById = async(req , res) =>{
    try {
        const userId = req.user.userId;
        const order = await OrderService.getOrderById(userId);
        response.success(res , 'Order fetched successfully' , order);
    } catch (error) {
        response.error(res , error.message)
    }
}

const deleteOrder = async(req , res) =>{
    try {
        const userId = req.user.userId;
        const cartId = req.params.cartId;
        const order = await OrderService.deleteOrder(cartId, userId);
        response.success(res , 'Order deleted successfully' , order)
    } catch (error) {
        response.error(res , error.message)
    }
}

module.exports ={createOrder , updateOrder , getOrderById , deleteOrder}