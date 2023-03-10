import "dotenv/config";

import express from "express";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

// console.log(process.env.MONGO_URI);

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
    // connect DB
    app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

start();
