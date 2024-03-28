import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./details/header/Header";
import Footer from "./details/footer/Footer";
import Home from "./pages/Home";
import FAQ from "./components/FAQ/FAQ";
import BuyChallenges from "./components/FAQ/FAQ";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/BuyChallenges" element={<BuyChallenges />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
