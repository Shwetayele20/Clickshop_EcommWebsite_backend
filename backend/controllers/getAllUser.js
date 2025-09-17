const User = require('../models/user');

//Get all users - admin only

exports.getAllUsers = async(req, res)=>{
    try {
        const users = await User.findAll({ attributes:{ exclude:['password']}});

        if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No users found',
      });
    }
        return res.status(200).json({
            success: true,
            message : 'User Fetched Data Successfully',
            users
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Server Error',
            error: error.message
        })

    }
}

