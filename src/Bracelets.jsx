import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FaHeart } from "react-icons/fa";

import "./Bracelets.css";

/* Make sure these relative paths match your project structure.
   If this file is in src/components, use "../images/..." or "../../images/..." as needed. */
import Bracelets1 from "../src/images/Bracelets1.jpg";
import Bracelets2 from "../src/images/Bracelets2.jpg";
import Bracelets3 from "../src/images/Bracelets3.jpg";
import Bracelets4 from "../src/images/Bracelets4.jpg";
import Bracelets5 from "../src/images/Bracelets5.jpg";
import Bracelets6 from "../src/images/Bracelets6.jpg";
import aspires1 from "../src/images/aspires1.png";




const products = [
  { id: 1, name: "Crystal Heart Necklace", brand: "Glow Gems", actualPrice: 1499, price: 149, save: "Save up to 90%", img: Bracelets1, rating: 5, reviews: 98 },
  { id: 2, name: "Golden Aura Necklace", brand: "Golden Aura", actualPrice: 399, price: 199, save: "Save up to 90%", img: Bracelets2, rating: 4, reviews: 125 },
  { id: 3, name: "Elegant Diamond Pendant", brand: "Sparkle Studio", actualPrice: 499, price: 299, save: "Save up to 85%", img: Bracelets3, rating: 4.8, reviews: 152 },
  { id: 4, name: "Elegant Diamond Pendant", brand: "Sparkle Studio", actualPrice: 499, price: 299, save: "Save up to 85%", img: Bracelets4, rating: 4.8, reviews: 152 },
  { id: 5, name: "Elegant Diamond Pendant", brand: "Sparkle Studio", actualPrice: 499, price: 299, save: "Save up to 85%", img: Bracelets5, rating: 4.8, reviews: 152 },
  { id: 6, name: "Elegant Diamond Pendant", brand: "Sparkle Studio", actualPrice: 499, price: 299, save: "Save up to 85%", img: Bracelets6, rating: 4.8, reviews: 152 },

];

function Bracelets() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bracelets-page">

      <h2>Export Quality Crystal Necklaces — Direct From the Factory To YOU 💎</h2>

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

export default Bracelets;
