import Product from "../model/Product.js";

const getAllProducts = async (data) => {
  const limit = data?.limit ?? 10;
  const page = data?.page ?? 1;
  const offset = (page - 1) * limit;
  const sort = data?.sort ? JSON.parse(data.sort) : {};
  const filters = data?.filters ? JSON.parse(data.filters) : {};

  try {
    return await Product.find(filters).sort(sort).limit(limit).skip(offset);
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
