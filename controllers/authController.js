import createToken from "../helpers/authHelper.js";
import authService from "../services/authService.js";
import productService from "../services/productService.js";
import verifyPassword from "../utils/passwordVerification.js";

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
    const { email, name, password, confirmPassword } = req.body;

    if (!email || !name || !password)
      return res.status(422).send("Required params are missing.");

    verifyPassword(password, confirmPassword);

    const user = await authService.registerUser(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Reset password
// Create token and store in db with the id of that user (email)
// Create url for resetting password that includes the token
// Check if the token and email matches 
// allow resetting password

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
