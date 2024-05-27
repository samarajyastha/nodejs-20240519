import bodyParser from "body-parser";
import express from "express";
import url from "url";
import path from "path";

import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import connectDB from "./database.js";
import logger from "./middlewares/logger.js";
import cookieParser from "cookie-parser";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger);
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
