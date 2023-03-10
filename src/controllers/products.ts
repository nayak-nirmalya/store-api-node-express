import Product from "../models/product.js";

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({
    products
  });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({
    products,
    nbHits: products.length
  });
};

export { getAllProductsStatic, getAllProducts };
