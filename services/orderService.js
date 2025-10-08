const Order = require("../models/order");

const createOrder = async(orderData , userId) =>{
    const order = await Order.create({
        ...orderData,
        userId: userId
    });
    if(!order){
        throw new Error('Order not created')
    }

    return order;
}

const updateOrder = async(orderData , userId) =>{
    const order = await Order.update(orderData , {where:{userId}});

    if(!order){
        throw new Error('Order not updated');
    }

    return order;   
}

const getOrderById = async(userId) =>{
    const order = await Order.findOne({where:{userId}});
    if(!order){
        throw new Error('Order not found for this user')
    }
    return order;
}

const deleteOrder = async(cartId , userId)=>{
    const order = await Order.destroy({where :{id : cartId , userId}});
    return order;
}

module.exports ={ createOrder , updateOrder, getOrderById , deleteOrder}