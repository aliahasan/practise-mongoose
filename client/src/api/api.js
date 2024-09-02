import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export const addToCart = async (product) => {
  try {
    const response = await axiosInstance.post("/carts", product);
    return response.data;
  } catch (error) {
    let errorMessage =
      "An error occurred while adding the product to the cart.";

    if (error.response && error.response.status === 400) {
      errorMessage = "Product is already in the cart.";
    }

    throw new Error(errorMessage);
  }
};
