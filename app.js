import bodyParser from "body-parser";
import express from "express";

import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";
import connectDB from "./database.js";
import logger from "./middlewares/logger.js";

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(logger);

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
