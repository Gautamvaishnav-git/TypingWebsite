import "./App.css";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <NavBar mainBG={"gray"}/>
      <Routes>
        <Route path="/services" element={<Services mainBG={"gray"}/>} />
        <Route path="/" element={<HeroSection mainBG={"gray"}/>} />
        <Route path="/about" element={<About mainBG={"gray"}/>} />
        <Route path="/login" element={<Login mainBG={"gray"}/>} />
        <Route path="/contact" element={<Contact mainBG={"gray"}/>} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
