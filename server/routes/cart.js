import express from "express";
import { addToCart, getCartItems } from "../controllers/cartControllers.js";
const router = express.Router();

router.post("/carts", addToCart);
router.get("/carts", getCartItems);

export default router;
