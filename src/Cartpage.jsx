// CartPage.js
import React, { useEffect, useState } from "react";
import "./Cartpage.css";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart initially
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  // Listen for cart updates
  useEffect(() => {
    const updateCart = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(items);
    };

    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  // Increase quantity
  const incrementQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Decrease quantity
  const decrementQty = (id) => {
    const updated = cartItems
      .map((item) => {
        if (item.id === id) {
          if (item.qty > 1) return { ...item, qty: item.qty - 1 };
          return null;
        }
        return item;
      })
      .filter(Boolean);

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Remove item
  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // ⭐ Proceed to Payment (navigate to Payments page)
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/payments", {
      state: {
        items: cartItems,
        total: totalPrice,
      },
    });
  };

  // ⭐ Single item payment (optional)
  const handlePayment = (item) => {
    navigate("/payments", { state: { items: [item], total: item.price * item.qty } });
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart">
        <h2>Your Shopping Cart 🛒</h2>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} className="cart-img" />

                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="brand">{item.brand}</p>
                  <p>Price: ₹{item.price}</p>

                  <div className="quantity">
                    <button onClick={() => decrementQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => incrementQty(item.id)}>+</button>
                  </div>

                  <p>Subtotal: ₹{(item.price * item.qty).toFixed(2)}</p>

                  <div className="btn-group">
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>

                    <button
                      className="payment-btn"
                      onClick={() => handlePayment(item)}
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
