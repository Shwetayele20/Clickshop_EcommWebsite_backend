// utils/response.js

exports.success = (res, message = "Success" ,  data,) => {
    return res.status(201).json({
        success: true,
        message,
        data
    });
};

exports.error = (res, message = "Server Error") => {
    return res.status(500).json({
        success: false,
        message,
    });
};
