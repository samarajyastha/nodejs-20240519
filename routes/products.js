import express from "express";

import productController from "../controllers/productController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/one", productController.getOneProduct);

router.post("/", auth, productController.createProduct);

// router.put("/:id", productController.updateProduct);

// router.delete("/:id", productController.deleteProduct);

router
  .route("/:id")
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
