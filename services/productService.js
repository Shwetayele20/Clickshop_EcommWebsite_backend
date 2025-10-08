const Product = require("../models/products");

const addProduct = async (productData , userId) => {
  const product = await Product.create(productData , userId);
  return product;
};

const getAllProducts = async (productData) => {
  const product = await Product.findAll(productData);
  return product;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);

  if (!product) {
    throw new Error("Product Not Found");
  }

  return product;
};

const updateProduct = async (id, productData) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error("Product not updated");
  }

  await product.update(productData);
  return product;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error("Product Not found");
  }
  await product.destroy(id);
  return product;
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
