import React from 'react'
import { useState, useEffect } from 'react';
import Marque from './assets/marque.png';
import Bannerimage from './assets/Luxury2.png';
import Bannerimage1 from './assets/Luxury1.png';
import Bannerimage2 from './assets/Luxury3.png';
import Banner1 from './assets/Aspire1.webp';
import Banner2 from './assets/aspire2.webp';
import Banner3 from './assets/aspire3.webp';
//import Cartsection from "./Cartsection";
import './Home.css';
import Component from './Component';
import PopUp from './PopUp';

import Navbar from './Navbar';


export const Home = () => {
    const sandeepsliders = [
        { Image: Bannerimage }, { Image: Bannerimage1 }, { Image: Bannerimage2 }
    ]
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sandeepsliders.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [sandeepsliders.length])
    return (
        <>
            <div className='secondImage'>
                {/* <Component/> */}
                <PopUp />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        <img src={sandeepsliders[current].Image} alt="slider" />
                    </li>
                </ul>

            </div>




            <div className='quote'>
                <p>“Where Shine Meets Savings ------</p>
                <p>Fresh from Our Factory to Your Collection at Manufacturing cost.”</p>
            </div>

            <div>
                <p className='text'>✨ Factory Price Only ✨</p>
            </div>

            <div className="image-container">
                <img src={Banner1} alt="Product 1" />
                <img src={Banner2} alt="Product 2" />
                <img src={Banner3} alt="Product 3" />
            </div>

            <div className="marquee-container">
                <marquee behavior="scroll" direction="left" scrollamount="9" className="marquee-text">
                    Limited Stock Available – Order Now!  &nbsp;  &nbsp;
                    ✨ Flat 80% Discount ✨
                </marquee>

                <marquee behavior="scroll" direction="left" scrollamount="7.5" className="marquee-gif">
                    <img src={Marque} alt="GIF" />
                </marquee>
            </div>

        </>
    );
}
export default Home;