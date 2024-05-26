import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();

    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const data = req.body;

    const product = await productService.getOneProduct(data);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
  } catch (error) {}
};

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);

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

    productService.deleteProduct(id);

    res.send(`Product deleted: ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
