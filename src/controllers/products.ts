import Product from "../models/product.js";
import product, { Product as ProductType } from "src/models/product.js";

import { query, Request, Response } from "express";

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
  const { featured, company, name, rating, price, sort, fields } = req.query;
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

  let result = Product.find(queryObject);

  // sorting
  if (sort) {
    const sortList = (sort as string).split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // fields
  if (fields) {
    const fieldsList = (fields as string).split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  const products = await result;

  res.status(200).json({
    products,
    nbHits: products.length
  });
};

export { getAllProductsStatic, getAllProducts };
