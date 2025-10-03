const Address = require('../models/address');

const addAddress = async (addressData , userId)=>{
    const address = await Address.create({...addressData , userId});
    return address;
}

const updateAddress = async(addressData , userId)=>{
    const address = await Address.update(addressData , {where:{userId}});
    return address;
}

const getAddressById = async(userId) =>{
    const address = await Address.findOne({where:{user : userId}});
    if(!address){
        throw new Error('Address not found  for this user')
    }
    return address;
}

const deleteAddress = async(addrId , userId)=>{
    const address = await Address.destroy({where : {id : addrId , userId}});
    return address;
}
    
module.exports ={addAddress , updateAddress, getAddressById , deleteAddress}
