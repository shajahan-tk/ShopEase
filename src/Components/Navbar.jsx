import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "../Pages/Home";
import AddProduct from "./AddProduct";
import ProductsPage from "./ProductsPage";
import ContactPage from "./ContactsPAge";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-purple-600">ShopEase</h1>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-600 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Tab Bar */}
          <div className="hidden md:flex space-x-4">
            {["Home", "Products", "contact", "about", "AddProduct"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-lg font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-purple-600 text-purple-600"
                    : "text-gray-500 hover:text-purple-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Login/Signup (Hidden in Mobile) */}
          <div className="hidden md:flex space-x-4">
            <button className="hover:text-purple-600">Login</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            {["Home", "Products", "contact", "about", "AddProduct"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 text-lg font-medium text-gray-700 hover:bg-purple-100"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
            <div className="flex flex-col space-y-2 p-4">
              <button className="hover:text-purple-600">Login</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Active Tab Content */}
      <div className="container mx-auto p-4">
        {activeTab === "Home" && <Home />}
        {activeTab === "Products" && <ProductsPage />}
        {activeTab === "AddProduct" && <AddProduct />}
        {activeTab === "contact" && <ContactPage />}
      </div>
    </div>
  );
};

export default Navbar;
