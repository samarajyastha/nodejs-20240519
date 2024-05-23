import bodyParser from "body-parser";
import express from "express";

import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(bodyParser.json());

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
