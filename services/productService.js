import Product from "../model/Product.js";

const getAllProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    throw error;
  }
};

const getOneProduct = async (data) => {
  try {
    return await Product.find(data);
  } catch (error) {
    throw error;
  }
};

const createProduct = async (data) => {
  try {
    return await Product.create(data);
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (id, data) => {
  try {
    return await Product.findByIdAndUpdate(id, data);
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    return await Product.findOneAndDelete(id);
  } catch (error) {
    throw error;
  }
};

export default {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
