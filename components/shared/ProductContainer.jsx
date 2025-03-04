import React from "react";
import ProductCard from "./ProductCard";

const ProductContainer = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-[50px] justify-start items-start w-full">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
