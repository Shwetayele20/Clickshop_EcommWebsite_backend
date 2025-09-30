const userService = require("../../services/userServices");

// Register User
exports.registerUser = async (req, res) => {
  try {
    const newUser = await userService.registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server register Error",
      error: error.message,
    });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { token} = await userService.loginUser(req.body);

    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });

    return res
      .status(200)
      .json({
        success: true,
        message: "Login Successful",
        token,
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Logout User
exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
