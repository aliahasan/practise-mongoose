import Cart from "../models/Carts.js";

export const addToCart = async (req, res) => {
  try {
    const { email, name, quantity, price, image, category } = req.body;

    // Check if the item already exists in the cart
    const existingItem = await Cart.findOne({ name });

    if (existingItem) {
      return res
        .status(400)
        .json({ message: "Item already exists in the cart" });
    }
    const cartItem = new Cart({
      name,
      email,
      quantity,
      price,
      image,
      category,
    });

    await cartItem.save();
    res.status(201).json({
      message: "Item added successfully",
      cartItem,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({});
    res.status(200).json({
      message: "Cart items",
      cartItems,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
