import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.cookies["token"];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
      if (error) {
        return res.status(403).send("Forbidden");
      }

      req.user = data;

      next();
    });
  } else {
    res.status(401).send("Unauthorized.");
  }
};

export default auth;
