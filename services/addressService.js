const Address = require('../models/address');

const addAddress = async (addressData, userId) => {
    const address = await Address.create({
    ...addressData,
    userId: userId
 });
    if(!address){
        throw new Error('Address not added')
    }
    return address;
};

const updateAddress = async(addressData , userId)=>{
    const address = await Address.update(addressData , {where:{userId}});

    
    if(!address){
        throw new Error('Address not updated')
    }

    return address;
}

const getAddressById = async(userId) =>{
    const address = await Address.findOne({ where: { userId } });

    if(!address){
        throw new Error('Address not found  for this user')
    }
    return address;
}

const deleteAddress = async(addrId , userId)=>{
   const address = await Address.destroy({ where : { addrId, userId } });
    return address;
}
    
module.exports ={addAddress , updateAddress, getAddressById , deleteAddress}
