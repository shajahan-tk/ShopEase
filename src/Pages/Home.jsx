import React from "react";
import HeroSection from "../Components/HeroSection";
import ProductCard from "../Components/ProductCard";
import { FaShippingFast, FaLock, FaUndo, FaHeadset } from "react-icons/fa"; 

const Home = () => {
  const products = [
    { id: 1, name: "Product 1", price: 25, image: "../../public/Images/Card1.jpeg" },
    { id: 2, name: "Product 2", price: 30, image: "../../public/Images/Card2.jpg" },
    { id: 3, name: "Product 3", price: 20, image: "../../public/Images/Card5.jpeg" },
  ];

  return (
    <div>
      <HeroSection />
      <div className="container align-middle items-center mx-auto py-12 px-4">
        {/* Featured Products */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Quote Section with an Image */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="relative w-full">
            <img 
              src="../../public/Images/Sample2.png" 
              alt="Best Quote" 
              className="w-full h-130 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* 4 Small Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 shadow-md rounded-lg border border-gray-200">
            <FaShippingFast className="text-4xl text-gray-700 mb-2" />
            <h3 className="text-lg font-semibold">Fast & Free Delivery</h3>
            <p className="text-sm text-gray-500">Free delivery on all orders</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 shadow-md rounded-lg border border-gray-200">
            <FaLock className="text-4xl text-gray-700 mb-2" />
            <h3 className="text-lg font-semibold">Secure Payment</h3>
            <p className="text-sm text-gray-500">100% secure payment</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 shadow-md rounded-lg border border-gray-200">
            <FaUndo className="text-4xl text-gray-700 mb-2" />
            <h3 className="text-lg font-semibold">Money Back Guarantee</h3>
            <p className="text-sm text-gray-500">Easy returns & refunds</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-6 shadow-md rounded-lg border border-gray-200">
            <FaHeadset className="text-4xl text-gray-700 mb-2" />
            <h3 className="text-lg font-semibold">Online Support</h3>
            <p className="text-sm text-gray-500">24/7 customer support</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;
