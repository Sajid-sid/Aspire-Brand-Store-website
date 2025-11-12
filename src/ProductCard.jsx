import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userRating, setUserRating] = useState(product.rating || 0);
  const navigate = useNavigate();

  // ❤️ Toggle Like
  const toggleLike = () => {
    setLiked(!liked);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  // 🔗 Share Product
  const handleShare = () => {
    const url = `${window.location.origin}/product/${product.id}`;
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: "Check out this product!",
        url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Product link copied to clipboard!");
    }
  };

  // ⭐ Clickable Star Rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`star ${i <= rating ? "filled" : ""}`}
          onClick={() => setUserRating(i)}
        />
      );
    }
    return stars;
  };

  // 🛒 Add to Cart
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItem = existingCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.qty = (existingItem.qty || 1) + 1;
    } else {
      existingCart.push({
        id: product.id,
        name: product.name,
        brand: product.brand || "",
        img: product.images?.[0] || product.img || "",
        price: Number(product.price) || 0,
        qty: 1,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // 👇 FIXED: Dispatch the event INSIDE the function
    window.dispatchEvent(new Event("cartUpdated"));

    alert(`${product.name} added to your cart! 🛒`);
  };

  // 👀 Navigate to Product Details
  const viewProduct = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/product/${product.id}`);
  };

  // ✅ Pick first image as cover
  const mainImage =
    product.images && product.images.length > 0 ? product.images[0] : product.img;

  return (
    <div className="product-card">
      <div
        className="image-container"
        onClick={viewProduct}
        style={{ cursor: "pointer" }}
      >
        <img src={mainImage} alt={product.name} className="product-image" />

        {/* ❤️ Like Button */}
        <FaHeart
          className={`heart-icon ${liked ? "liked" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleLike();
          }}
        />

        {/* 🔗 Share Button */}
        <button
          className="share-button"
          onClick={(e) => {
            e.stopPropagation();
            handleShare();
          }}
        >
          <FiShare2 className="share-icon" />
        </button>

        {/* ❤️ Popup message */}
        {showPopup && (
          <div className="popup-message">
            {liked ? "Liked this ❤️" : "You unliked this 💔"}
          </div>
        )}
      </div>

      <h3 onClick={viewProduct}>{product.name}</h3>
      <p className="brand">{product.brand}</p>

      {/* ⭐ Rating */}
      <div className="rating-section">
        {renderStars(userRating)} <span>({product.reviews} reviews)</span>
      </div>

      {/* 💰 Prices */}
      <p className="price">
        <span className="actual">₹{product.actualPrice}</span>{" "}
        <span className="discount">₹{product.price}</span>
      </p>
      <p className="save">{product.save}</p>

      <button onClick={handleAddToCart} className="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
