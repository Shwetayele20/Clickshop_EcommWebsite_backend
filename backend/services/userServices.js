const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/user');

const registerUser = async( { username, email, password, phone_no , role }) =>{
    const existingUser = await User.findOne({ where: { email } });

    if(existingUser){
          throw new Error('User Already Exists') ;      
    }
    const hashedPassword = await bcrypt.hash(password, 10);;

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      phone_no,
      role: role || 'user'
    });

    return newUser;
} 

const loginUser = async({email , password})=>{
    const user = await User.findOne({where:{email }});
    if(!user){
        throw new Error('Invalid  user credentials')
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('Invalid Credentials')
    }

    const payload ={
        user:{
            id: user.userId,
            email:user.email ,
            role : user.role,
        }
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return {token };

}



module.exports={registerUser, loginUser}