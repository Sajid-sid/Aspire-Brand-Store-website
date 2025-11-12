import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IoSearchOutline,
  IoNotifications,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../src/images/logo2.webp"; // ✅ Make sure this path is correct
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        {/* ===== Logo ===== */}
        <NavLink className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="logo" />
        </NavLink>

        {/* ===== Hamburger (Visible on Mobile) ===== */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>

        {/* ===== Navigation Links ===== */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <NavLink to="/Home" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/Necklaces" onClick={() => setMenuOpen(false)}>
            Necakales
          </NavLink>
          <NavLink to="/Rings" onClick={() => setMenuOpen(false)}>
            Rings
          </NavLink>
          <NavLink to="/Bracelets" onClick={() => setMenuOpen(false)}>
            Bracelets
          </NavLink>
          <NavLink to="/Earrings" onClick={() => setMenuOpen(false)}>
            Earrings
          </NavLink>
          <NavLink to="/About" onClick={() => setMenuOpen(false)}>
            AboutUs
          </NavLink>
          <NavLink to="/Contact" onClick={() => setMenuOpen(false)}>
            ContactUs
          </NavLink>
          <NavLink to="/TrackOrder" onClick={() => setMenuOpen(false)}>
            TrackOrder
          </NavLink>
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
          <NavLink to="/Cartpage" className="icon" onClick={() => setMenuOpen(false)}>
            <FaShoppingCart />
          </NavLink>
          <NavLink to="#" className="icon" onClick={() => setMenuOpen(false)}>
            <IoNotifications />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
