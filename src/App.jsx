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
import OffersPage from "./OffersPage";
import Notifications from "./Notifications";
import Tracking from "./TrackingPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>

        <Component />
        <Navbar />

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
          <Route path="/offers" element={<OffersPage />} />

          {/* Notifications Page */}
          <Route path="/Notifications" element={<Notifications />} />

          {/* Tracking Page */}
          <Route path="/Trackingpage" element={<Tracking />} />

          {/* Home Route */}
          <Route
            path="/Home"
            element={
              <>
                <Home />
                <HomeItems />
              </>
            }
          />

          {/* Default Route (Landing Page) */}
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
