import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import Navbar from "./Components/Navbar";
import ProductsPage from "./Components/ProductsPage";
import Women from "./Pages/Catogaries/Women";
import Men from "./Pages/Catogaries/Men";
import Kids from "./Pages/Catogaries/Kids";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products" element={<ProductsPage />} />

            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
