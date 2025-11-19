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
import Component from "./Component";
import Navbar from "./Navbar";
import Home from "./Home";
import HomeItems from "./HomeItems";
import OffersPage from "./Offerspage";
import Notifications from "./Notifications";
import Tracking from "./Trackingpage";
import Payments from "./Payments";   // Added from your merge

import "./App.css";

function App() {
  return (
    <>
      <Router>

        <Component />
        <Navbar />

        <Routes>

          {/* Main Routes */}
          <Route path="/ProductCard" element={<ProductCard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Necklaces" element={<Necklaces />} />
          <Route path="/Earrings" element={<Earrings />} />
          <Route path="/Rings" element={<Rings />} />
          <Route path="/About" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Bracelets" element={<Bracelets />} />
          <Route path="/Cartpage" element={<Cartpage />} />

          {/* Offers */}
          <Route path="/offers" element={<OffersPage />} />

          {/* Notifications */}
          <Route path="/Notifications" element={<Notifications />} />

          {/* Tracking */}
         
          <Route path="/TrackOrder" element={<Tracking />} /> {/* optional alias */}

          {/* Payments */}
          <Route path="/Payments" element={<Payments />} />

          {/* Home Page */}
          <Route
            path="/Home"
            element={
              <>
                <Home />
                <HomeItems />
              </>
            }
          />

          {/* Default Landing Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <HomeItems />
              </>
            }
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
