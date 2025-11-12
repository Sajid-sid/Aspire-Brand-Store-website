import React, { useEffect, useState } from "react";
import "./PopUp.css"; // popup styles

export default function PopUp() {
  const [showPopup, setShowPopup] = useState(false);

  // 🕒 Show popup automatically after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // 🧹 Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="popup-container">
      {/* ✅ Popup Message */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>🎉 Special Offer!</h3>
            <p>Get 70% OFF on your first purchase 💎</p>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
