import React, { useState } from "react";
import LogoAspire from "./images/logo.png";
import "./Login.css";

export default function Login() {
  // State variables to hold input values
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error states
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePhone = (value) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
    let formatted = digitsOnly;
    if (digitsOnly.length > 5) {
      formatted = digitsOnly.slice(0, 5) + "-" + digitsOnly.slice(5);
    }

    setPhone(formatted);

    if (digitsOnly.length !== 10) {
      setPhoneError("Please correct phone number");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (value) => {
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePasswords = (pass, confirm) => {
    if (!pass || !confirm) {
      setPasswordError("Password fields cannot be empty");
    } else if (pass.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else if (pass !== confirm) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleSave = () => {
    validatePasswords(password, confirmPassword);

    if (
      phoneError ||
      emailError ||
      passwordError ||
      !fullName ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields correctly before saving.");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Phone Number:", "+91 " + phone);
    console.log("Email:", email);
    console.log("Password:", "********"); // Hide in logs
    alert("Profile saved successfully!");
  };

  return (
    <>
      <div className="profile-container">
        <div className="profile-card">
          {/* Logo and Heading */}
          <div className="logo-section">
            <img src={LogoAspire} alt="Logo" className="logo" />
            <h3 className="brand-name">Aspire Brand Store</h3>
          </div>

          {/* Profile Fields */}
          <div className="form-section">
            {/* Full Name */}
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>Phone Number:</label>
              <div className="phone-input">
                <span className="country-code">+91</span>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => validatePhone(e.target.value)}
                />
              </div>
              {phoneError && <p className="error-text">{phoneError}</p>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
              />
              {emailError && <p className="error-text">{emailError}</p>}
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePasswords(e.target.value, confirmPassword);
                }}
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validatePasswords(password, e.target.value);
                }}
              />
              {passwordError && <p className="error-text">{passwordError}</p>}
            </div>

            {/* Save Button */}
           
          </div>
           <button onClick={handleSave} className="save-btn">
              Save Profile
            </button>
        </div>
        
      </div>
    </>
  );
};