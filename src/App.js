import "./App.css";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
