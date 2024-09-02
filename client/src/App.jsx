import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "./api/api";
import ProductCard from "./components/ProductCard";
import BlogForm from "./components/BlogForm";

const App = () => {
  const {
    data: products = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
    <div>
      <h1 className="text-center text-5xl py-10">This is products</h1>
    </div>
    <div className="grid md:grid-cols-3 gap-10 container mx-auto">
      {products &&
        products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
    </div>
    <BlogForm></BlogForm>
    </>
  );
};

export default App;
