import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Showcases from './pages/Showcases';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter and Routes
import './styles.css'; // Import the CSS file
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/showcases" element={<Showcases />} />
        </Routes>
      </div>
    </Router>
          <Footer />
          </div>
  );
}

export default App;
