import createToken from "../helpers/authHelper.js";
import authService from "../services/authService.js";
import productService from "../services/productService.js";

const loginPage = (req, res) => {
  res.render("login");
};

const homePage = async (req, res) => {
  const params = req.query;

  try {
    const products = await productService.getAllProducts(params);

    res.render("home", { products, user: "John" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const registerUser = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);

    const token = createToken(user);

    res.cookie("token", token, { httpOnly: true });

    res.redirect("home");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");

    res.redirect("login");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  logoutUser,
  registerUser,
  loginUser,
  loginPage,
  homePage,
};
