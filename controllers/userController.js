import userService from "../services/userService.js";

const registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);

    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  registerUser,
  loginUser,
};
