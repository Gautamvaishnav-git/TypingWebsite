import "./App.css";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";
import React, { useState } from 'react'
import Footer from "./components/Footer";


function App() {
  const [mode, setmode] = useState("white")
  const toggleMode = (e)=>{
  if(e.target.checked){
    setmode("gray")
  }else{
    setmode("white")
  }
  }
  return (
    <BrowserRouter>
      <NavBar mainBG={mode} toggleMode= {toggleMode}/>
      <Routes>
        <Route path="/services" element={<Services mainBG={mode}/>} />
        <Route path="/" element={<HeroSection mainBG={mode}/>} />
        <Route path="/about" element={<About mainBG={mode}/>} />
        <Route path="/login" element={<Login mainBG={mode}/>} />
        <Route path="/contact" element={<Contact mainBG={mode}/>} />
      </Routes>
      <Footer mainBG={mode}/>
    </BrowserRouter>
  );
}

export default App;
