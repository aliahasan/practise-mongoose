import express from "express";
import mongoose from "mongoose";
const PORT = process.env.PORT || 5000;
import products from "./routes/products.js";
import carts from "./routes/cart.js";
import blogs from "./routes/blogs.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // replace with your frontend URL
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome");
});

mongoose
  .connect("mongodb://localhost:27017/productsDB")
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => console.log(err));

app.use("/", products);
app.use("/", carts);
app.use("/", blogs);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
