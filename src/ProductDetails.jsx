// ProductDetails.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";


import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [mainImage, setMainImage] = useState("");

  // ✅ Load product details from localStorage
  useEffect(() => {
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct") || "null");
    if (selectedProduct && String(selectedProduct.id) === String(id)) {
      setProduct(selectedProduct);
      setRating(selectedProduct.rating || 0);
      setMainImage(selectedProduct.images?.[0] || selectedProduct.img);
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // ✅ Add to Cart
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if product is already in the cart
    const existingItemIndex = existingCart.findIndex(
      (item) => String(item.id) === String(product.id)
    );

    if (existingItemIndex > -1) {
      // ✅ Update quantity
      existingCart[existingItemIndex].qty =
        (existingCart[existingItemIndex].qty || 1) + 1;
    } else {
      // ✅ Push new item with correct structure
      existingCart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        img: product.images?.[0] || product.img,
        price: product.price,
        qty: 1,
      });
    }

    // ✅ Save to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // ✅ Notify other components (CartPage)
    window.dispatchEvent(new Event("cartUpdated"));

    // ✅ User feedback
    alert(`${product.name} added to your cart! 🛒`);
  };

  // 🔗 Share Product
  const handleShare = async () => {
    const url = `${window.location.origin}/product/${product.id}`;
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: product.description || "",
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Product link copied to clipboard!");
    }
  };

  // ❤️ Like toggle
  const toggleLike = () => setLiked((prev) => !prev);

  // ⭐ User Rating
  const setUserRating = (r) => setRating(r);

  const imageList = product.images?.length ? product.images : [product.img];

  return (
    <div className="pd-page">
      
      <div className="pd-container">
        <button className="pd-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="pd-grid">
          {/* 🖼️ Left: Image gallery */}
          <div className="pd-media">
            <img src={mainImage} alt={product.name} className="pd-image" />

            <div className="pd-thumbnails">
              {imageList.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`thumb-${index}`}
                  className={`pd-thumb ${mainImage === imgSrc ? "active" : ""}`}
                  onClick={() => setMainImage(imgSrc)}
                />
              ))}
            </div>
          </div>

          {/* 🧾 Right: Product Info */}
          <div className="pd-info">
            <h1 className="pd-title">{product.name}</h1>
            <p className="pd-brand">{product.brand}</p>

            {/* 💰 Price Section */}
            <div className="pd-price-row">
              <div className="pd-price">
                <span className="pd-actual">₹{product.price}</span>
                {product.actualPrice && (
                  <span className="pd-discount">₹{product.actualPrice}</span>
                )}
              </div>

              <div className="pd-actions">
                <button
                  className={`pd-like ${liked ? "liked" : ""}`}
                  onClick={toggleLike}
                >
                  <FaHeart />
                </button>
                <button className="pd-share" onClick={handleShare}>
                  <FiShare2 />
                </button>
              </div>
            </div>

            {/* ⭐ Ratings */}
            <div className="pd-rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  className={`pd-star ${i <= rating ? "filled" : ""}`}
                  onClick={() => setUserRating(i)}
                />
              ))}
              <span className="pd-reviews">({product.reviews ?? 0} reviews)</span>
            </div>

            {/* 📝 Description */}
            <div className="pd-desc">
              <h3>Description</h3>
              <p>{product.description || "No description available."}</p>
            </div>

            {/* 🛍️ Buttons */}
            <div className="pd-footer">
              <button className="pd-addcart" onClick={handleAddToCart}>
                <FaShoppingCart /> Add to Cart
              </button>

              <button
                className="pd-buy"
                onClick={() => {
                  handleAddToCart();
                  navigate("/Payments");
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
