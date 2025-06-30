import Navbar from "../navBar/Navbar";
import React, { memo } from "react";
import Content from "./Content";
import { assets } from "../../assets/assets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main HeroSection component
const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.headerBgImage})`,
        willChange: "transform", // Optimization for animations
      }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-black/1" aria-hidden="true" />
      <Content />
    </section>
  );
};

export default memo(HeroSection);
