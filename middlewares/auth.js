const TOKEN = "123456";

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization && authorization === `Bearer ${TOKEN}`) {
    next();
  } else {
    res.status(401).send("Unauthorized.");
  }
};

export default auth;
