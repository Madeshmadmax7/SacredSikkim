import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import  Explore from "./pages/Explore";
import  ExploreDetail from "./pages/ExploreDetail";
import './App.css';
import Images from "./pages/Images";
import About from "./pages/About";
import Footer from "./components/Footer";
import CulturalCalendar from "./pages/CulturalCalendar";
import OverallMap from "./pages/OverallMap";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:placeId" element={<ExploreDetail />} />
        <Route path="/images" element={<Images />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<CulturalCalendar />} />
        <Route path="/map" element={<OverallMap />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
