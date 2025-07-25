import Navbar from "../navBar/Navbar";
import React, { memo } from "react";
import Content from "./Content";
import { assets } from "../../assets/assets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main HeroSection component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/20 to-blue-900/20"></div>
      
      <Navbar bgClass="darkblue" />
      <Content />
    </section>
  );
};

export default memo(HeroSection);
