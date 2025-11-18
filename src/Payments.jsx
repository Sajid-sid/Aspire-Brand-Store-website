import React from "react";
import { useLocation } from "react-router-dom";
import "./Payments.css";

export default function Payments() {
  const location = useLocation();
  const items = location.state?.items || [];
  const total = location.state?.total || 0;

  if (items.length === 0) {
    return <h2>No items found for payment</h2>;
  }

  return (
    <div className="payment-page">
      <h2>Order Summary</h2>

      <div className="payment-items">
        {items.map((item, index) => (
          <div key={index} className="payment-card">
            <img src={item.img} alt={item.name} className="payment-img" />
            <div>
              <h3>{item.name}</h3>
              <p>Brand: {item.brand}</p>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.qty}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="payment-total">Total Amount: ₹{total}</h2>

      <button className="pay-btn">Pay Now</button>
    </div>
  );
}
