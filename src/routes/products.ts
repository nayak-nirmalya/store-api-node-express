import { Router } from "express";
import { Product } from "src/models/product.js";

import {
  getAllProductsStatic,
  getAllProducts
} from "../controllers/products.js";

const router = Router();

router
  .route("/")
  .get<{}, { products: Product[]; nbHits: number }, {}, Partial<Product>>(
    getAllProducts
  );
router
  .route("/static")
  .get<{}, { products: Product[] }, {}>(getAllProductsStatic);

export { router as productsRouter };
