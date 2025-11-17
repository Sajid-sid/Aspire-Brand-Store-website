import React from "react";
import "./Payments.css"; // optional stylesheet

export default function Payments({ item }) {
  if (!item) {
    return (
      <div className="payment-page">
        <h2>No item selected for payment</h2>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2>Proceed to Payment</h2>

        <img src={item.img} alt={item.name} className="payment-img" />

        <h3>{item.name}</h3>
        <p className="brand">{item.brand}</p>

        <p className="price">Price: ₹{item.price}</p>
        <p className="qty">Quantity: {item.qty}</p>

        <h3 className="total">Total Amount: ₹{item.price * item.qty}</h3>

        <button className="pay-btn" onClick={() => handlePay(item)}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

// Dummy payment function (you can connect Razorpay later)
const handlePay = (item) => {
  alert(`Payment started for: ${item.name}`);
};
