import "dotenv/config";

import express from "express";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/connect.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Hello!</h1> <a href='/api/v1/products'>Products</a>");
});

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
