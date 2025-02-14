import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Work from "../pages/work";
import Header from "./header";
import Skills from "../pages/skills";
import  Contact  from "../pages/Contact";
import Resume from "../pages/resume";
import Certificate from "../pages/Certificate";
import { Home } from "../pages/Home";
import Footer from "./Footer";




const Rout = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-full px-20 py-5">
        <Routes>
       
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default Rout;
