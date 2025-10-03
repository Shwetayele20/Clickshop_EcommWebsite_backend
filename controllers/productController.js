const productService = require('../services/productService');
const response = require('../utils/response');

//admin only
exports.addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body)
        response.success(res ,'Added Successfully', product);

    } catch (error) {
        response.error(res , error.message);
  };
}

//admin & user both
exports.getAllProducts = async (req, res) => {
    try {
        const product = await productService.getAllProducts();
        response.success(res ,'All Product', product);

    } catch (error) {
        response.error(res , error.message); 
    }
};

//admin & user both
exports.getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        response.success(res ,'Product', product);

    } catch (error) {
        response.error(res , error.message);
    }
};

//admin only
exports.updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        response.success(res ,'updated Successfully', product);

    } catch (error) { 
        response.error(res , error.message);
    }
};

//admin only
exports.deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct( req.params.id );
        response.success(res ,'Delete Successfully', product);

    } catch (error) {
        response.error(res , error.message);
    }
}

exports.uploadimage = async(req, res)=>{
    try {
    
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'server error',
            
            error : error.message
        })
    }
}
