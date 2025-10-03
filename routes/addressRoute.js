const express = require('express');
const router = express.Router();
const { addAddress , updateAddress , deleteAddress , getAddressById} = require('../controllers/addressController');
const isAuthenticated = require('../middlewares/auth/Auth.middleware');

router.post('/addAddress' , isAuthenticated , addAddress);
router.put('/updateAddress/:id' , isAuthenticated , updateAddress);
router.delete('/deleteAddress/:id' , isAuthenticated , deleteAddress);
router.get('/getAddress/:id' , isAuthenticated , getAddressById);

module.exports = router;