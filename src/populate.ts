import "dotenv/config";

import connectDB from "./db/connect.js";
import Product from "./models/product.js";

import jsonProducts from "./products.json" assert { type: "json" };

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.create(jsonProducts);

    console.log("SUCCESS!");
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

start();
