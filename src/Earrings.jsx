import React, { useState } from "react";
import ProductCard from "./ProductCard";

import { FaHeart } from "react-icons/fa";



import "./Earrings.css";
import ball from "../src/images/gold chain.jpg";
import goldchain1 from "../src/images/gold chain1.jpg";
import goldchain2 from "../src/images/goldchain2.jpg";
import goldchain3 from "../src/images/goldchain3.jpg";
import goldchain4 from "../src/images/goldchain4.jpg";
import goldchain5 from "../src/images/goldchain5.jpg";
import goldchain7 from "../src/images/goldchain7.jpg";
import aspires2 from "../src/images/aspires2.png";



const products = [
  {
    id: 1,
    name: "Crystal Heart Necklace",
    brand: "Glow Gems",
    actualPrice: 1499,
    price: 149,
    save: "Save up to 90%",
    rating: 5,
    reviews: 98,
    images: [ball, goldchain1, goldchain2,aspires2], // 👈 multiple images here
  },
  {
    id: 2,
    name: "Golden Aura Necklace",
    brand: "Golden Aura",
    actualPrice: 399,
    price: 199,
    save: "Save up to 90%",
    rating: 4,
    reviews: 125,
    images: [goldchain1, goldchain3, goldchain5,aspires2], // 👈 multiple
  },
  {
    id: 3,
    name: "Elegant Diamond Pendant",
    brand: "Sparkle Studio",
    actualPrice: 499,
    price: 299,
    save: "Save up to 85%",
    rating: 4.8,
    reviews: 152,
    images: [goldchain2, goldchain4, aspires2],
  },
  {
    id: 4,
    name: "Royal Ruby Necklace",
    brand: "Jewel Craft",
    actualPrice: 899,
    price: 499,
    save: "Save up to 80%",
    rating: 4.5,
    reviews: 112,
    images: [goldchain3, goldchain7, aspires2],
  },
];


function Earrings() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="necklaces-page">
    
      <h2>Export Quality Crystal Necklaces — Direct From the Factory To YOU
💎</h2>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} onAdd={() => addToCart(item)} />
        ))}
      </div>

      {/* ✅ BHIM UPI Section */}
      <div className="upi-section">
        <h3>💰 Secure Payments via BHIM UPI</h3>
        <p>Pay easily using any UPI app like PhonePe, Google Pay, or Paytm.</p>

        <div className="upi-logos">
                    <img src="/src/images/payments accepted.PNG" alt="BHIM UPI" />

         
        </div>

        <p className="upi-id">Our UPI ID: <strong>glowgems@upi</strong></p>
      </div>
    </div>
    
  );
}

export default Earrings;
