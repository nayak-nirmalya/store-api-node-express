import Product from "../models/product.js";
import { Product as ProductType } from "src/models/product.js";

import { Request, Response } from "express";

const getAllProductsStatic = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.status(200).json({
    products
  });
};

const getAllProducts = async (
  req: Request<Partial<ProductType>>,
  res: Response<{ products: ProductType[]; nbHits: number }>
) => {
  const { featured, company, name, rating, price } = req.query;
  const queryObject: Partial<ProductType> = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (
    company === "ikea" ||
    company === "liddy" ||
    company === "caressa" ||
    company === "marcos"
  ) {
    queryObject.company = <"ikea" | "liddy" | "caressa" | "marcos">company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" } as unknown as string;
  }

  console.log(queryObject);

  const products = await Product.find(queryObject);
  res.status(200).json({
    products,
    nbHits: products.length
  });
};

export { getAllProductsStatic, getAllProducts };
