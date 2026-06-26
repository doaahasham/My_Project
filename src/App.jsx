import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "./header/navbar";
import Footer from "./footer/footer";

import Home from "./home/home";
import AboutUs from "./about_us/aboutus";
import ContactUs from "./contact_us/contactus";
import Mens from "./mens/mens";
import Kids from "./kids/kids";
import Womens from "./womens/women";
import Accessories from "./accessories/accessories";
import LatestProduct from "./latestproduct/LatestProducts";
import TopDeals from "./topdeals/topdeals";
import LogIn from "./login/Login";
import Kind from "./kindshopping/kind";
import Registration from "./login/registration";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/kid" element={<Kids />} />
        <Route path="/women" element={<Womens />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/latestproduct" element={<LatestProduct />} />
        <Route path="/topdeals" element={<TopDeals />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/kind" element={<Kind />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;