import React, { useState } from "react";

const womenCategories = ["Clothes", "Accessories", ];

export default function Men() {
  const [activeTab, setActiveTab] = useState("Clothes");

  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-purple-600 text-center my-6">Mens's Category</h1>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-4 border-b border-gray-300 pb-3">
        {womenCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 text-lg font-medium transition rounded-t-md ${
              activeTab === category
                ? "bg-purple-600 text-white border-b-4 border-purple-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Clothes" && <Clothes />}
        {activeTab === "Accessories" && <Accessories />}
        {activeTab === "Makeup" && <Makeup />}
      </div>
    </div>
  );
}

/* Components for Each Tab */
const Clothes = () => (
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-purple-700">Clothes</h2>
    <p className="text-gray-600 mt-2">Discover the latest fashion trends in clothing.</p>

    {/* Images Section */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/men1.webp" // Replace with real image URL
          alt="Trendy Dress"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Trendy Dress</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/women 4.jpeg" // Replace with real image URL
          alt="Casual Wear"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Casual Wear</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/women 2.jpeg" // Replace with real image URL
          alt="Ethnic Outfit"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Ethnic Outfit</p>
      </div>
    </div>
{/* Images Section */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/women 5.jpeg" // Replace with real image URL
          alt="Trendy Dress"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Sports Outfits</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/women 1.jpeg" // Replace with real image URL
          alt="Casual Wear"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Short Skirts</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/Aliacut.webp" // Replace with real image URL
          alt="Ethnic Outfit"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">AliaCut Churidar</p>
      </div>
    </div>


 
  </div>
);
const Accessories = () => (
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-purple-700">Accessories</h2>
    <p className="text-gray-600 mt-2">Shop stylish handbags, jewelry, and more.</p>

    {/* Images Section */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/neckles1.webp" // Replace with real image URL
          alt="Trendy Dress"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Rose Gold Neckless</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/neckles2.webp" // Replace with real image URL
          alt="Casual Wear"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Simple Gold Neckless</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/neckles3.webp" // Replace with real image URL
          alt="Ethnic Outfit"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Diamond</p>
      </div>
    </div>
{/* Images Section */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/bangle1.webp" // Replace with real image URL
          alt="Trendy Dress"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Pair Bangles</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/bags1.webp" // Replace with real image URL
          alt="Casual Wear"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Hand Bags</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/ring1.webp" // Replace with real image URL
          alt="Ethnic Outfit"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Diamond Ring</p>
      </div>
    </div>


    {/* Images Section */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/anglets1.webp" // Replace with real image URL
          alt="Trendy Dress"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Anglets</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/hipchain.webp" // Replace with real image URL
          alt="Casual Wear"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">Hip Chain</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg shadow">
        <img
          src="src/Images/clips.webp" // Replace with real image URL
          alt="Ethnic Outfit"
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2 text-gray-700">HAir Clips</p>
      </div>
    </div>
  </div>
);