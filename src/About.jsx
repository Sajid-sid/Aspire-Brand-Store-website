import React from 'react';
import './About.css'; // make sure you link this CSS

const About = () => {
  return (
    <div className="Mainfooter">
      <div className="about-section">
        <h3>ABOUT US</h3>

        <p>Our Story ---
          Aspire Brand Store was founded with one simple goal — to make <br />
          quality, innovation, and trust the foundation of your shopping experience. <br />
          Powered by Aspire Tekhub Solutions, a leading digital and product <br />
          development company based in Hyderabad, we bring you a modern retail <br />
          platform that blends technology,reliability, and everyday convenience. <br />
          What started as a vision to bridge the gap between brands and buyers <br />
          has now evolved into a trusted online store offering handpicked products <br />
          across tech, lifestyle, home essentials, and more.</p>

        <p> <h4>Our Mission </h4>
          To provide customers with authentic, affordable, and value-driven products <br />
          backed by smooth service and secure shopping. <br />
          We’re dedicated to building long-term trust — not just one-time transactions.</p>

        <p><h4>Our Vision</h4></p>
        <p>To be recognized as one of India’s most reliable and customer-centric <br />
          e-commerce brands,known for integrity, innovation, and satisfaction in every<br />purchase.</p>

        <h4>Our Promise</h4>
        <ul>
          <li>✅ 100% Genuine & Verified Products</li>
          <li>🚚 Fast & Reliable Delivery</li>
          <li>🔒 Secure Payments</li>
          <li>🤝 Friendly Customer Support</li>
          <li>🎁 Exclusive Deals & Offers</li>
        </ul>
        <p>
          At Aspire Brand Store, we ensure every product tells a story of trust,
          performance, <br />and value.
        </p>

        <h4>Powered by Aspire Tekhub Solutions</h4>
        <p>Behind Aspire Brand Store stands Aspire Tekhub Solutions, a company driven by <br />
          innovation and digital excellence.With expertise in technology and product <br />
          development,Aspire Tekhub powers the platform that makes your shopping smooth, <br />
          smart, and satisfying.</p>

        <p>Experience the Difference <br />
          At Aspire Brand Store, shopping isn’t just about what you buy — it’s about how you <br />
           feel while buying.Discover a world of reliable products, transparent service, and a <br />
           brand that truly cares about its customers.Shop Smart. Shop Confident. Shop Aspire.</p>
      </div>

      {/* Middle Section - Fast Navigate Menu */}
      <div className="nav-section">
        <p className="footer-title">🔎FAST NAVIGATE MENU</p>
        <div className="Items">
          <p>New Arrivals ✨</p>
          <p>Necklaces 💍</p>
          <p>Earrings 👂</p>
          <p>Bracelets 💫</p>
          <p>Mangalsutras</p>
          <p>About Us 👤</p>
          <p>Contact Us 📞</p>
          <p>Request Returns 🚚</p>
          <p>Track Order 📦</p>
        </div>
      </div>

      {/* Right Section - Information */}
      <div className="info-section">
        <p className="footer-title">📗 INFORMATION</p>
        <div className="ourservices">
          <p>Blogs</p>
          <p>FAQ's</p>
          <p>Track Order</p>
          <p>Return Request</p>
          <p>Shipping Details</p>
          <p>Reviews</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div >
  );
};

export default About;