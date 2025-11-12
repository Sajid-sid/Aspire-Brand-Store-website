import React, { useState } from "react";
import ProductCard from "./ProductCard";


import "./Rings.css";

import Ring1 from "../src/images/Ring1.png";
import Ring2 from "../src/images/Ring2.jpg";
import Ring5 from "../src/images/Ring5.jpg"; 
import aspires1 from "../src/images/aspires1.png"; 



const products = [
  { id: 1, name: "Crystal Heart Necklace", brand: "Glow Gems", actualPrice: 1499, price: 149, save: "Save up to 90%",images: [Ring1, Ring2, Ring5,aspires1]},
  { id: 2, name: "Crystal Heart Necklace", brand: "Glow Gems", actualPrice: 1499, price: 149, save: "Save up to 90%",images: [Ring2, Ring5, Ring1,aspires1]},
    { id: 3, name: "Crystal Heart Necklace", brand: "Glow Gems", actualPrice: 1499, price: 149, save: "Save up to 90%",images: [Ring1, Ring2, Ring5,aspires1]},
     { id: 4, name: "Crystal Heart Necklace", brand: "Glow Gems", actualPrice: 1499, price: 149, save: "Save up to 90%",images: [Ring1, Ring2, Ring5,aspires1]},




];

function Necklaces() {
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

export default Necklaces;
