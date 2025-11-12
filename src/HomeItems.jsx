
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
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
import "./HomeItems.css";


const Necklace = [
    {
        name: "Green Emerald Rose Gold Necklace",
        actualPrice: "1999",
        price: "150",
        image: Rednecklace
    },
    {
        name: "Blue Square Pendant Necklace",
        actualPrice: "1200",
        price: "199",
        image: Bluenecklace
    },
    {
        name: "Oval Emerald Pendant Necklace",
        actualPrice: "1990",
        price: "199",
        image: Necklaces
    },
    {
        name: "Black rectangle Pendant Necklace",
        actualPrice: "1200",
        price: "165",
        image: Rednecklace
    },
    {
        name: "Multi Butterfly Layer Necklace",
        actualPrice: "1190",
        price: "201",
        image: Ear1
    },
    {
        name: "Multi Butterfly Layer Necklace",
        actualPrice: "1190",
        price: "201",
        image: Neck1
    },
    {
        name: "Good Stylish Earings",
        actualPrice: "1290",
        price: "165",
        image: Ear1
    },
    {
        name: "Leopard Face Earring and Necklace",
        actualPrice: "1290",
        price: "189",
        image: Neck2
    },
    {
        name: "Face Earring and Necklace",
        actualPrice: "890",
        price: "201",
        image: Neck3
    },
    {
        name: " Necklace with Elegent style",
        actualPrice: "990",
        price: "201",
        image: Neck4
    },
    {
        name: "Elegent round pendent Necklace",
        actualPrice: "1990",
        price: "201",
        image: Neck5
    },
    {
        name: "Earrings with simple style",
        actualPrice: "1089",
        price: "190",
        image: Ear2
    },

];
const Addcart = () => {
    const [likedItems, setLikedItems] = useState([]);


    const toggleLike = (index) => {
        if (likedItems.includes(index)) {
            setLikedItems(likedItems.filter((i) => i !== index));
        } else {
            setLikedItems([...likedItems, index]);
        }
    // };
    // const onClick = (item) => {
    //    alert(${ item.name } added to cart items);


    };

    return (
        <>
            <ul className="product-list">
                {Necklace.map((item, index) => (
                    <li key={index} className="product-item">
                        <div
                            className="heart"
                            onClick={() => toggleLike(index)}
                        >
                            {likedItems.includes(index) ? (
                                <FaHeart className="heart filled" />
                            ) : (
                                <FaRegHeart className="heart outlined" />
                            )}
                        </div>

                        <img src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <div className="butt">
                            <button
                                type="button"
                                className="add"
                                onClick={() => onClick(item)} // ✅ Corrected.
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="price-section">
                            <span className="actual-price">₹{item.actualPrice}</span>
                            <span className="discount-price">₹{item.price}</span>
                        </div>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default Addcart;