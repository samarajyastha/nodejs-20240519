import express from "express";

import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/", productController.getAllProducts);

// router.get("/:id", productController.getProductById);

router.post("/", productController.createProduct);

// router.put("/:id", productController.updateProduct);

// router.delete("/:id", productController.deleteProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
