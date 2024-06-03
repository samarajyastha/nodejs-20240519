import productService from "../services/productService.js";

const getCategories = async (req, res) => {
  try {
    const categories = await productService.getCategories();

    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts(req.params);

    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productService.getOneProduct(id);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
  } catch (error) {}
};

const createProduct = async (req, res) => {
  const userId = req.user.id;

  try {
    const product = await productService.createProduct(req.body, userId);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productService.updateProduct(id, req.body);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    await productService.deleteProduct(id);

    res.send(`Product deleted: ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
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
