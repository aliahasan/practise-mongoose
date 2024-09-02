/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../api/api";

const ProductCard = ({ product }) => {
  const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      alert("Product added to cart!");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleAddToCart = () => {
    const item = {
      email: "nabin@gmail.com",
      name: product.name,
      price: product.price,
      quantity: 1,
      category: product.category,
      image: product.imageUrl,
    };
    mutation.mutate(item); 
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        src={product?.imageUrl}
        alt={product.name} // Use `product.name` for the alt attribute
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.category}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {mutation.isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
