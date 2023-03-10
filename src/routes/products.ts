import { Router } from "express";
import { Product } from "src/models/product.js";

import {
  getAllProductsStatic,
  getAllProducts
} from "../controllers/products.js";

const router = Router();

router.route("/").get(getAllProducts);
router
  .route("/static")
  .get<{}, { products: Product[] }, {}>(getAllProductsStatic);

export { router as productsRouter };
