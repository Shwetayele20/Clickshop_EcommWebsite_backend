const express = require('express');const router = express.Router();
const isAuthenticated = require('../middlewares/auth/Auth.middleware');
const isAdmin = require('../middlewares/auth/roleMiddleware')
const { addProduct, 
        updateProduct,
        deleteProduct,
        getAllProducts, 
        getProductById
    } =require('../controllers/productController');
    
// User routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

// Admin routes
router.post('/admin-products', isAuthenticated, isAdmin, addProduct);
router.put('/admin-products/:id', isAuthenticated, isAdmin, updateProduct);
router.delete('/admin-products/:id', isAuthenticated, isAdmin, deleteProduct);

module.exports = router;