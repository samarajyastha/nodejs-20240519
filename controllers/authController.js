import authService from "../services/authService.js";
import productService from "../services/productService.js";
import jwt from "jsonwebtoken";

const loginPage = (req, res) => {
  res.render("login");
};

const homePage = async (req, res) => {
  try {
    const products = await productService.getAllProducts();

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

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      }
    );

    res.cookie("token", token, { httpOnly: true });

    res.redirect("home");

    // res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  registerUser,
  loginUser,
  loginPage,
  homePage,
};
