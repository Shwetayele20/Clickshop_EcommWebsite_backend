const jwt = require('jsonwebtoken');
require('dotenv').config();

const isAuthenticatedUser = async (req, res, next) => {
  // Get token from header
  const authHeader = req.header('Authorization') || req.header ('authorization');
  const token = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : null;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No token, authorization denied',
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);
    req.user = decoded; // attach payload
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token is not valid',
      error: error.message,
    });
  }
};

module.exports = isAuthenticatedUser;
