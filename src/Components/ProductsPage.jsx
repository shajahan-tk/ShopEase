import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Women from "../Pages/Catogaries/Women";
import Men from "../Pages/Catogaries/Men";
import Kids from "../Pages/Catogaries/Kids";

const categories = [
  { id: 1, name: "Women", image: "src/Images/Women.jpeg",  },
  { id: 2, name: "Men", image: "src/Images/Men.jpeg",  },
  { id: 3, name: "Kids", image: "src/Images/kids.jpeg",  },
];



const products = [
  {
    id: 1,
    name: "Men's · XL · Cotton · Round Neck · Short Sleeve · Regular",
    price: "$49.99",
    image: "src/Images/Addidas.webp",
    sizes: {
      S: { label: "Small", price: "$39.99" },
      M: { label: "Medium", price: "$44.99" },
      L: { label: "Large", price: "$49.99" },
      XL: { label: "Extra Large", price: "$54.99" },
    },
  },
  {
    id: 2,
    name: "Men's · XS · Cotton · Round Neck · Short Sleeve · Regular",
    price: "$89.99",
    image: "src/Images/Puma.webp",
    sizes: {
      S: { label: "Small", price: "$39.99" },
      M: { label: "Medium", price: "$44.99" },
      L: { label: "Large", price: "$49.99" },
      XL: { label: "Extra Large", price: "$54.99" },
    },
  },
  {
    id: 3,
    name: "Shirt / Blouse · Women's · Polyester · Sleeveless",
    price: "$29.99",
    image: "src/Images/westerntops.webp",
    sizes: {
      S: { label: "Small", price: "$39.99" },
      M: { label: "Medium", price: "$44.99" },
      L: { label: "Large", price: "$49.99" },
      XL: { label: "Extra Large", price: "$54.99" },
    },
  },
  {
    id: 4,
    name: "Kurti/Kurta · Floral · XL · Cotton · Square Neck · Regular",
    price: "$59.99",
    image: "src/Images/churidhar.webp",
    sizes: {
      S: { label: "Small", price: "$39.99" },
      M: { label: "Medium", price: "$44.99" },
      L: { label: "Large", price: "$49.99" },
      XL: { label: "Extra Large", price: "$54.99" },
    },
  },
  {
    id: 5,
    name: "Black saree Embellished saree with border Has embellished ",
    price: "$39.99",
    image: "src/Images/Saree.webp",
    colors: ["Black", "White", "Gray", "Pink", "Red", "Violet"],
  },
  {
    id: 6,
    name: "Loose Fit · Regular · Black · Regular",
    price: "$24.99",
    image: "src/Images/pants.webp",
    sizes: {
      S: { label: "Small", price: "$39.99" },
      M: { label: "Medium", price: "$44.99" },
      L: { label: "Large", price: "$49.99" },
      XL: { label: "Extra Large", price: "$54.99" },
    },
  },
  {
    id: 7,
    name: "CB-COLEBROOK Men's Casual Button Down Shirts Long Sleeve Linen Shirt Fashion Textured Beach Summer Shirt",
    price: "$24.99",
    image: "src/Images/shirt.jpg",
    sizes: {
      S: { label: "Small", price: "$39.99" },
      M: { label: "Medium", price: "$44.99" },
      L: { label: "Large", price: "$49.99" },
      XL: { label: "Extra Large", price: "$54.99" },
    },
  },
  {
    id: 8,
    name: "Men's · XS · Polyester · Round Neck · Short Sleeve · Recycled Materials · Regular",
    price: "$24.99",
    image: "src/Images/arsenal.webp",
    sizes: {
      S: { label: "Small", price: "$39.99" },
      M: { label: "Medium", price: "$44.99" },
      L: { label: "Large", price: "$49.99" },
      XL: { label: "Extra Large", price: "$54.99" },
    },
  },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Women");
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
       {/* Categories Tabs */}
       <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold text-purple-600 text-center my-8"
      >
        Categories
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            className={`cursor-pointer relative w-72 h-72 rounded-lg shadow-lg overflow-hidden ${
              selectedCategory === category.name ? "border-4 border-purple-600" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {/* Category Image */}
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />

            {/* Black Overlay (Initially Visible) */}
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-black opacity-80"
            />

            {/* Category Name */}
            <p className="absolute bottom-4 left-0 right-0 text-center text-white text-xl font-semibold z-10">
              {category.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Render Selected Category Page Below */}
      <div className="mt-10">
        {selectedCategory === "Women" && <Women/>}
        {selectedCategory === "Men" && <Men />}
        {selectedCategory === "Kids" && <Kids />}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold text-purple-600 text-center my-8"
      >
        Our Products
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            {/* Zoom and Bounce Effect on Hover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-md"
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-md"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              />
            </motion.div>

            {/* Truncated Text */}
            <h2 className="text-lg font-semibold text-gray-800 mt-3 line-clamp-2">
              {product.name}
            </h2>
            <p className="text-gray-600">{product.price}</p>

            <button className="bg-purple-600 text-white px-4 py-2 rounded-md mt-3 hover:bg-purple-500 w-full">
              Add to Cart
            </button>

            {/* View Item Button */}
            <button
              onClick={() => handleViewDetails(product)}
              className="flex gap-3 border-2 font-semibold border-purple-400 text-purple-500 p-2 rounded-md mt-3 items-center justify-center w-full"
            >
              <FaEye className="text-purple-600 text-2xl cursor-pointer hover:text-purple-800" />
              View Item
            </button>

            <p className="text-gray-400 mt-2">
              Free Delivery <span className="line-through">40/-</span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div className="bg-white rounded-lg shadow-lg p-6 w-3/4 sm:w-1/2 lg:w-1/3 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>

              {/* Animated Zoom-in Image in Modal */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="overflow-hidden rounded-md"
              >
                <motion.img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-52 object-cover rounded-md"
                />
              </motion.div>

              {/* Full Name in Modal */}
              <h2 className="text-2xl font-bold text-gray-800 mt-4">
                {selectedProduct.name}
              </h2>
              <p className="text-lg text-gray-600">
                Price: {selectedProduct.price}
              </p>

              <button
                onClick={closeModal}
                className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-500"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
