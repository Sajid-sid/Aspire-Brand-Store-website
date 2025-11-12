import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Necklaces from "./Necklaces";
import ProductCard from "./ProductCard";
import Earrings from "./Earrings";
import Rings from "./Rings";
import About from "./About";
import Cartpage from "./Cartpage";
import ProductDetails from "./ProductDetails";
import Bracelets from "./Bracelets";
import Header from "./Header";
import Component from "./Component";
import Navbar from "./Navbar";
import PopUp from "./PopUp";

import Home from "./Home";
import HomeItems from "./HomeItems";


import "./App.css";

function App() {
  return (
    <>
    <Router>

      <Component/>
      <Navbar/>

      <Routes>

        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Necklaces" element={<Necklaces />} />
        <Route path="/Earrings" element={<Earrings />} />
        <Route path="/Rings" element={<Rings />} />
        <Route path="/About" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Bracelets" element={<Bracelets />} />
        <Route path="/Cartpage" element={<Cartpage />} />
        
          
          <Route path="/Home" element={<>
            <Home />
            <HomeItems/>
            </>} />

          <Route path="/" element={
            <>
            <HomeItems />
            
            </>
          } />




      </Routes>
    </Router>
    </>
  );
}
export default App;
