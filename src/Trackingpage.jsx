
import React from "react";
import "./Trackingpage.css";
import truckGif from "./images/Truck.gif";

const TrackingPage = () => {
    const orderId = "986657382";

    return (
        <div className="tracking-container">

            {/* PAGE TITLE */}
            <h1 className="tracking-title">Order Tracking</h1>

            {/* MOVING TRUCK */}
            <div className="truck-section">
                <img src={truckGif} alt="moving truck" className="truck-gif" />
            </div>

            {/* ORDER DETAILS */}
            <div className="order-info">
                <h3>Order ID: #{orderId}</h3>
                <p> Status: <span className="status active">Active</span> </p>
                <p>Estimated Delivery: <strong>25 Nov 2025</strong></p>
            </div>

            {/* MAP SECTION */}

            <div className="map-box">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.096609824811!2d78.4770754750791!3d17.443239383942746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cfa64620af%3A0x77e498cab170fc7a!2sAspire%20Tekhub%20Solutions%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1732017431103!5m2!1sen!2sin"
                    width="500"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map-img"
                ></iframe>

                <p className="map-text">
                    Current Location: <strong>Aspire Tekhub Solutions Pvt Ltd</strong>
                </p>
            </div>



            {/* TIMELINE SECTION */}
            <div className="timeline">
                <div className="step completed">Order Placed</div>
                <div className="step completed">Packed</div>
                <div className="step completed">Shipped</div>
                <div className="step current">Out for Delivery</div>
                <div className="step pending">Delivered</div>
            </div>

        </div>
    );
};

export default TrackingPage;
