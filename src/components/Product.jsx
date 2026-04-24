import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image Placeholder */}
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <span className="text-gray-500 text-lg">{product?.name}</span>
      </div>

      {/* Card Content */}
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full mb-3">
          {product?.category}
        </span>

        <h2 className="text-2xl font-bold text-gray-800">{product?.name}</h2>

        <p className="text-gray-500 mt-1">
          Brand: <span className="font-medium">{product?.brand}</span>
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-bold text-green-600">${product?.price}</p>

          <p className="text-yellow-500 font-semibold">⭐ {product?.rating}</p>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Stock Available: {product?.stock}
        </p>

        {/* Button */}
        <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
