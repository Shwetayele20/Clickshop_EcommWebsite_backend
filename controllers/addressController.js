const addressService = require('../services/addressService');
const response = require('../utils/response');


const addAddress = async(req , res) =>{
     try {
        const userId = req.user.userId;
        const addressData = req.body;

        console.log('Address Data' , addressData);
        console.log("user id" , userId);

        const address = await addressService.addAddress(addressData , userId);
        response.success(res , "Address added successfully" , address)
        
     } catch (error) {
        
        response.error(res , error.message)
     }
}

const updateAddress = async(req , res)=>{
    try {
        const userId = req.user.userId;
        const addressData = req.body;
        const address = await addressService.updateAddress(addressData , userId);
        response.success(res , "Address updated successfully" , address)
        
    } catch (error) {
        response.error(res , error.message)
    }
}

const deleteAddress = async(req, res)=>{
    try {
        const userId = req.user.userId;
        const addrId = req.params.id;
        const address = await addressService.deleteAddress(addrId, userId) ;
        response.success(res , 'Address Deleted Successfully' , address)
    } catch (error) {
        response.error(res , error.message)
    }
}

const getAddressById = async(req , res)=>{
    try {
        const userId = req.user.userId;
        const addrId = req.params.id;
        const address = await addressService.getAddressById(addrId, userId);
        response.success(res , "Address fetched successfully" , address)
    } catch (error) {
        response.error(res , error.message)
    }
}

module.exports ={ addAddress, updateAddress , deleteAddress, getAddressById}
