import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  IoSearchOutline,
  IoNotifications,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../src/images/logo2.webp";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // 🔥 Load cart count whenever cart updates
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
      setCartCount(totalQty);
    };

    updateCartCount(); // initial load

    // Listen for cart updates triggered by CartPage / ProductDetails
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">

        {/* ===== Logo ===== */}
        <NavLink className="logo" to="/Home" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="logo" />
        </NavLink>

        {/* ===== Hamburger ===== */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>

        {/* ===== Nav Links ===== */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/Home" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/Necklaces" onClick={() => setMenuOpen(false)}>Necklaces</NavLink>
          <NavLink to="/Rings" onClick={() => setMenuOpen(false)}>Rings</NavLink>
          <NavLink to="/Bracelets" onClick={() => setMenuOpen(false)}>Bracelets</NavLink>
          <NavLink to="/Earrings" onClick={() => setMenuOpen(false)}>Earrings</NavLink>
          <NavLink to="/About" onClick={() => setMenuOpen(false)}>AboutUs</NavLink>
          <NavLink to="/Contact" onClick={() => setMenuOpen(false)}>ContactUs</NavLink>
          <NavLink to="/Trackingpage" onClick={() => setMenuOpen(false)}>TrackOrder</NavLink>
        </div>

        {/* ===== Search Bar ===== */}
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <IoSearchOutline className="search-icon" />
        </div>

        {/* ===== Right Icons ===== */}
        <div className="icon-group">

          <NavLink to="/Login" className="icon" onClick={() => setMenuOpen(false)}>
            <FaUser />
          </NavLink>

          {/* 🛒 Cart with Dynamic Count */}
          <NavLink to="/Cartpage" className="icon cart-icon" onClick={() => setMenuOpen(false)}>
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </NavLink>

          <NavLink to="/Notifications" className="icon" onClick={() => setMenuOpen(false)}>
            <IoNotifications />
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
