import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
    <Component />
    <Navbar />
    <header className="header">
      <div className="banner">
                <p>New Arrivals ✨</p>
                <a href="/necklace" className="nav-link">Necklaces 💍</a>
                <p>Earrings 👂</p>
                <p>Bracelets 💫</p>
                <p>Mangalsutras</p>
                <a href="/About" className="nav-link">About Us 👤</a>
                <p>Track Order 📦</p>
                
            </div>
    </header>
  </>
  );
};

export default Header;
