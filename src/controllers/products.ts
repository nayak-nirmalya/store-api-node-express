import Product from "../models/product.js";

import { Request, Response } from "express";

const getAllProductsStatic = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.status(200).json({
    products
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find(req.query);
  res.status(200).json({
    products,
    nbHits: products.length
  });
};

export { getAllProductsStatic, getAllProducts };
