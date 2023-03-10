import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Must Have a Name!"]
  },
  price: {
    type: Number,
    required: [true, "Product Price Must Be Provided!"]
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} IS NOT SUPPORTED!"
    }
  }
});

export default mongoose.model("Product", ProductSchema);
