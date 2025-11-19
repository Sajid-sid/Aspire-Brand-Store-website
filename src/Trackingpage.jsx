
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
                <img
                    src="https://via.placeholder.com/500x250"
                    alt="map"
                    className="map-img"
                />
                <p className="map-text">
                    Current Location: <strong>Hyderabad Distribution Center</strong>
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
