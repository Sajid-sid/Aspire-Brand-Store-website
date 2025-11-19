import React, { useState, useEffect } from 'react';
import Marque from './assets/marque.png';
import Bannerimage from './assets/Luxury2.png';
import Bannerimage1 from './assets/Luxury1.png';
import Bannerimage2 from './assets/Luxury3.png';
import Banner1 from './assets/Aspire1.webp';
import Banner2 from './assets/aspire2.webp';
import Banner3 from './assets/aspire3.webp';
import MobileImage from './images/Mobileview.png';
import MobileImage1 from './images/Mobileview1.png';
import MobileImage2 from './images/Mobileview2.png';
import './Home.css';
import PopUp from './PopUp';
import Navbar from './Navbar';
import WhatsappButton from './WhatsappButton';

 
export const Home = () => {
  // Desktop slider images
  const desktopImages = [
    { Image: Bannerimage },
    { Image: Bannerimage1 },
    { Image: Bannerimage2 },
  ];

  // Mobile slider images (same image 3 times)
  const mobileImages = [
    { Image: MobileImage },
    { Image: MobileImage1 },
    { Image: MobileImage2 },
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const images = isMobile ? mobileImages : desktopImages;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const activeImages = isMobile ? mobileImages : desktopImages;

  return (
    <>
      <div className="secondImage">
        <PopUp />
        <ul>
          <li style={{ listStyle: 'none' }}>
            <img
              src={activeImages[current].Image}
              alt="slider"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                transition: '0.6s ease-in-out',
              }}
            />
          </li>
        </ul>
      </div>

      <div className="quote">
        <p>“Where Shine Meets Savings ------</p>
        <p>Fresh from Our Factory to Your Collection at Manufacturing cost.”</p>
      </div>

      <div>
        <p className="text">✨ Factory Price Only ✨</p>
      </div>

      <div className="image-container">
        <img src={Banner1} alt="Product 1" />
        <img src={Banner2} alt="Product 2" />
        <img src={Banner3} alt="Product 3" />
      </div>
               
              <WhatsappButton />

      <div className="marquee-container">
        <marquee behavior="scroll" direction="left" scrollamount="9" className="marquee-text">
          Limited Stock Available – Order Now! &nbsp; &nbsp; ✨ Flat 80% Discount ✨
        </marquee>

        <marquee behavior="scroll" direction="left" scrollamount="7.5" className="marquee-gif">
          <img src={Marque} alt="GIF" />
        </marquee>
      </div>
    </>
  );
};

export default Home;
