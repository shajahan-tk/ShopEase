import React, { useState, useEffect } from "react";
import image1 from "../../public/Images/home.jpeg";
import image2 from "../../public/Images/main1.jpg"; // Adjust the path as needed
import image3 from "../../public/Images/main2.jpg"; // Adjust the path as needed
import image4 from "../../public/Images/main3.jpg"; // Adjust the path
  const images = [image1, image2, image3,image4
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);  
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        transition: "background-image 1s ease-in-out", // Smooth transition
      }}
    >
      <div>
        <h1 className="font-semibold">Welcome to ShopEase</h1>
      </div>
    </section>
  );
};

export default HeroSection;