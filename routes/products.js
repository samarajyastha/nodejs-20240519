import express from "express";

import productController from "../controllers/productController.js";
import auth from "../middlewares/auth.js";
import roles from "../middlewares/roles.js";

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/categories", productController.getCategories);

router.get("/:id", auth, productController.getOneProduct);

router.post("/", auth, productController.createProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", [auth, roles("ADMIN")], productController.deleteProduct);

// router
//   .route("/:id")
//   .put(productController.updateProduct)
//   .delete(productController.deleteProduct);

export default router;
