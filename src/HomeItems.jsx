import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./HomeItems.css";

import Rednecklace from './assets/rednecklace.webp';
import Bluenecklace from './assets/bluenecklace.webp';
import Necklaces from './assets/rectnecklace.webp';
import Neck1 from './assets/neck1.webp';
import Neck2 from './assets/neck2.webp';
import Neck3 from './assets/neck3.webp';
import Neck4 from './assets/neck4.webp';
import Neck5 from './assets/neck5.webp';
import Ear1 from './assets/ear1.webp';
import Ear2 from './assets/ear2.webp';

const Necklace = [
    {
        id: 1, name: "Green Emerald Rose Gold Necklace",
        actualPrice: 1999,
        price: 150,
        image: Rednecklace
    },
    {
        id: 2, name: "Blue Square Pendant Necklace",
        actualPrice: 1200,
        price: 199,
        image: Bluenecklace
    },
    {
        id: 3, name: "Oval Emerald Pendant Necklace",
        actualPrice: 1990,
        price: 199,
        image: Necklaces
    },
    {
        id: 4, name: "Black rectangle Pendant Necklace",
        actualPrice: 1200,
        price: 165,
        image: Rednecklace
    },
    {
        id: 5, name: "Multi Butterfly Layer Necklace",
        actualPrice: 1190,
        price: 201,
        image: Ear1
    },
    {
        id: 6, name: "Multi Butterfly Layer Necklace",
        actualPrice: 1190,
        price: 201,
        image: Neck1
    },
    {
        id: 7, name: "Good Stylish Earings",
        actualPrice: 1290,
        price: 165, image: Ear1
    },
    {
        id: 8, name: "Leopard Face Earring and Necklace",
        actualPrice: 1290,
        price: 189, image: Neck2
    },
    {
        id: 9, name: "Face Earring and Necklace",
        actualPrice: 890,
        price: 201,
        image: Neck3
    },
    {
        id: 10, name: "Necklace with Elegent style",
        actualPrice: 990,
        price: 201,
        image: Neck4
    },
    {
        id: 11, name: "Elegent round pendent Necklace",
        actualPrice: 1990,
        price: 201,
        image: Neck5
    },
    {
        id: 12, name: "Earrings with simple style",
        actualPrice: 1089,
        price: 190,
        image: Ear2
    }
];

const Addcart = () => {
    const [likedItems, setLikedItems] = useState([]);

    // Popup states
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    // ❤️ Like popup
    const toggleLike = (id, name) => {
        if (likedItems.includes(id)) {
            setLikedItems(likedItems.filter((i) => i !== id));
            setPopupMessage("You Unliked This ❤️");
        } else {
            setLikedItems([...likedItems, id]);
            setPopupMessage("You Liked This ❤️");
        }

        setShowPopup(true);

        // Auto close popup in 2 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 1000);
    };

    // 🛒 Add to cart
    const addToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
        const existing = cart.find((p) => p.id === item.id);

        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                img: item.image,
                qty: 1
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));

        alert(`${item.name} added to cart`);
    };

    return (
        <>
            <ul className="product-list">
                {Necklace.map((item) => (
                    <li key={item.id} className="product-item">

                        {/* Heart Like Button */}
                        <div className="heart" onClick={() => toggleLike(item.id, item.name)}>
                            {likedItems.includes(item.id)
                                ? <FaHeart className="heart filled" />
                                : <FaRegHeart className="heart outlined" />}
                        </div>

                        <img src={item.image} alt={item.name} />

                        <h4>{item.name}</h4>

                        <button className="add" onClick={() => addToCart(item)}>
                            Add to Cart
                        </button>

                        <div className="price-section">
                            <span className="actual-price">₹{item.actualPrice}</span>
                            <span className="discount-price">₹{item.price}</span>
                        </div>

                    </li>
                ))}
            </ul>

            {/* ⭐ Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <p>{popupMessage}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Addcart;
