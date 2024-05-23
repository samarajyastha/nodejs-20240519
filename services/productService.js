let products = [];

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};

const createProduct = (data) => {
  const newProduct = {
    id: products.length + 1,
    name: data.name,
    price: data.price,
  };

  products.push(newProduct);

  return newProduct;
};

const updateProduct = (id, data) => {
  const product = products.find((product) => product.id === parseInt(id));

  product.name = data.name;
  product.price = data.price;

  return product;
};

const deleteProduct = (id) => {
  products = products.filter((product) => product.id != parseInt(id));
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
