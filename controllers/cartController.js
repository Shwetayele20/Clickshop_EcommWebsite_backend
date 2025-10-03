const Cart = require('../models/cartModel');

// Get cart by user ID
exports.getCartByUserId = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add item to cart
exports.addItemToCart = async (req, res) => {
    const { userId, prodId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({
                userId,
                items: [{ prodId, quantity }]
            });
        } else {
            const itemIndex = cart.items.findIndex(item => item.prodId.toString() === prodId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ prodId, quantity });
            }
        }
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Remove item from cart
exports.removeItemFromCart = async (req, res) => {
    const { userId, prodId } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        cart.items = cart.items.filter(item => item.prodId.toString() !== prodId);
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update item quantity in cart
exports.updateItemQuantity = async (req, res) => {
    const { userId, prodId, quantity } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        const item = cart.items.find(item => item.prodId.toString() === prodId);
        if (!item) return res.status(404).json({ message: 'Item not found in cart' });
        item.quantity = quantity;
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



// const Cart = require('../models/cart');

// const addToCart = async(req, res)=>{
//     try {
//         const addItem = await Cart.create(req.body)
//         res.status(200).json(addItem)
//     } catch (error) {
//         return res.status(500).json({
//             succss : false,
//             message : 'Server error',
//             error : error.message
//         })
//     }
// }

// const editCartItem = async(req , res)=>{
//     try {
//         const editItem = await Cart.update(req.body.item , {where :{cartId : req.params.cartId}})
//         res.status(201).json(editItem);

//         const editcartItem = await Cart.findByPk(req.params.cartId)
        

//     } catch (error) {
//        return res.status(500).json({
//             succss : false,
//             message : 'Server error',
//             error : error.message
//         }) 
//     }
// }

// const removeCartItem = async(req , res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// }
// module.exports={addToCart , removeCartItem , editCartItem}