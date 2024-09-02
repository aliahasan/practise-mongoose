import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  stock: {
    type: Number,
  },
});

const Product = mongoose.model("Products", productSchema);
export default Product;
