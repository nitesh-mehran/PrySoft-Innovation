import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home";
import Service from "./components/Pages/Service/Service";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Layout/Footer";
import Blog from "./components/Pages/Blog";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsAndConditions from "./components/Pages/TermsAndConditions";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
