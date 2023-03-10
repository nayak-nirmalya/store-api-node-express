import "dotenv/config";

import express from "express";
import "express-async-errors";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/connect.js";
import { productsRouter } from "./routes/products.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Hello!</h1> <a href='/api/v1/products'>Products</a>");
});

app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
