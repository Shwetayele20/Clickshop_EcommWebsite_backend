const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register User
exports.registerUser = async (req, res) => {
  const { username, email, password, phone_no } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      phone_no,
      role: req.body.role || 'user'
    });

    
    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: newUser,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server register Error',
      error: error.message,
    });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Credentials ! Try again',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Password! Try again',
      });
    }

    const payload = {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

    return res.status(200).json({ success: true, message: 'Login Successful', token });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Logout User
exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.status(200).json({
      success: true,
      message: 'Logout Successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};
