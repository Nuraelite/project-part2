import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './details/header/Header';
import Footer from './details/footer/Footer';
import Home from './pages/Home';
import FAQ from './components/FAQ/FAQ';
import ContactUs from './pages/ContactUs';
import BuyChallenges from './pages/BuyChallenges';  
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/buy-challenges" element={<BuyChallenges />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
