import Product from "../model/Product.js";

const getCategories = async () => {
  try {
    return await Product.distinct("category");
  } catch (error) {
    throw error;
  }
};

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

const getOneProduct = async (id) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw error;
    s;
  }
};

const createProduct = async (data, userId) => {
  try {
    return await Product.create({
      ...data,
      createdBy: userId,
    });
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
    const product = await Product.findById(id);

    if (!product) throw new Error("Product not found.");

    return await Product.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

export default {
  getCategories,
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
