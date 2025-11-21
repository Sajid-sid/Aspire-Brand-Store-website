import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payments.css";

export default function Payments() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state?.items || [];
  const total = location.state?.total || 0;

  const [step, setStep] = useState("address");

  // Address State
  const [address, setAddress] = useState({
    fullname: "",
    mobile: "",
    altmobile: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.50502049111!2d78.47444447456369!3d17.38504460613538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975f1e12f7a7%3A0x431dfaf2c187abd8!2sCharminar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1708592350000"
  );

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // 📌 USE CURRENT LOCATION
  const fillCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setMapSrc(`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`);

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        const data = await response.json();

        const add = data.address;

        setAddress((prev) => ({
          ...prev,
          street: add.road || "",
          city: add.city || add.town || add.village || "",
          state: add.state || "",
          pincode: add.postcode || "",
        }));
      },
      () => {
        alert("Failed to fetch your location");
      }
    );
  };

  // SAVE ADDRESS
  const saveAddressAndNext = () => {
    if (!address.fullname) return alert("Enter your full name");
    if (!/^\d{10}$/.test(address.mobile))
      return alert("Mobile number must be exactly 10 digits");
    if (!address.street) return alert("Enter your street address");
    if (!address.city) return alert("Enter your city");
    if (!address.state) return alert("Enter your state");
    if (!address.pincode) return alert("Enter pincode");

    setStep("summary");
  };

  const [paymentMode, setPaymentMode] = useState("");

  if (items.length === 0) {
    return <h2>No items found for payment</h2>;
  }

  return (
    <div className="payment-page">
      <h2>Checkout</h2>

      {/* STEP 1: ADDRESS */}
      {step === "address" && (
        <div className="section">
          <h3>Shipping Address</h3>

          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="input-box"
            value={address.fullname}
            onChange={handleAddressChange}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number (10 digits)"
            className="input-box"
            value={address.mobile}
            onChange={handleAddressChange}
            maxLength={10}
            pattern="\d{10}"
          />

          <input
            type="text"
            name="altmobile"
            placeholder="Alternate Mobile Number (Optional)"
            className="input-box"
            value={address.altmobile}
            onChange={handleAddressChange}
          />

          <input
            type="text"
            name="street"
            placeholder="House No / Street"
            className="input-box"
            value={address.street}
            onChange={handleAddressChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            className="input-box"
            value={address.city}
            onChange={handleAddressChange}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            className="input-box"
            value={address.state}
            onChange={handleAddressChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            className="input-box"
            value={address.pincode}
            onChange={handleAddressChange}
          />

          <button className="location-btn" onClick={fillCurrentLocation}>
            📍 Use Current Location
          </button>

          <iframe className="map" src={mapSrc} allowFullScreen loading="lazy"></iframe>

          <button className="back-btn" onClick={() => navigate("/Cartpage")}>
            ⬅ Back to Cart
          </button>

          <button className="next-btn" onClick={saveAddressAndNext}>
            Continue to Summary
          </button>
        </div>
      )}

      {/* STEP 2: SUMMARY */}
      {step === "summary" && (
        <div className="section">
          <h3>Order Summary</h3>

          <div className="address-box">
            <h4>Deliver to:</h4>
            <p>{address.fullname}</p>
            <p>Mobile: {address.mobile}</p>
            {address.altmobile && <p>Alternate: {address.altmobile}</p>}
            <p>{address.street}, {address.city}</p>
            <p>{address.state} - {address.pincode}</p>
          </div>

          {/* FIXED ITEM LOOP HERE */}
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

          <h2 className="payment-total">Total: ₹{total}</h2>

          <button className="back-btn" onClick={() => setStep("address")}>
            ⬅ Back
          </button>

          <button className="next-btn" onClick={() => setStep("payment")}>
            Continue to Payment
          </button>
        </div>
      )}

      {/* STEP 3: PAYMENT */}
      {step === "payment" && (
        <div className="section">
          <h3>Select Payment Mode</h3>

          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              Debit / Credit Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="netbanking"
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              Net Banking
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={(e) => setPaymentMode(e.target.value)}
              />
              Cash on Delivery
            </label>
          </div>

          {paymentMode === "card" && (
            <div className="card-form">
              <input type="text" placeholder="Card Number" className="input-box" />
              <input type="text" placeholder="Card Holder Name" className="input-box" />
              <input type="text" placeholder="Expiry MM/YY" className="input-box" />
              <input type="text" placeholder="CVV" className="input-box" />
              <button className="pay-btn">Pay ₹{total}</button>
            </div>
          )}

          {paymentMode === "netbanking" && (
            <div className="card-form">
              <select className="input-box">
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis Bank</option>
                <option>Andhra Bank</option>
                 <option>Canera Bank</option>
              </select>

              <button className="pay-btn">Pay ₹{total}</button>
            </div>
          )}

          {paymentMode === "cod" && (
            <div className="card-form">
              <p>You will pay when your order arrives.</p>
              <button className="pay-btn">Confirm Order</button>
            </div>
          )}

          <button className="back-btn" onClick={() => setStep("summary")}>
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}
