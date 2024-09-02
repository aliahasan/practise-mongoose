import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
