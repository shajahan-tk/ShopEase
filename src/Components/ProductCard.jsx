import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105  ">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-150 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
