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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
