import React, { memo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { heroSectionData } from "../constants";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

// Animation variants - defined outside to prevent recreation
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Common animation props
const commonTransition = {
  duration: 0.4, // Reduced from 0.8 for snappier animations
};

// Memoized Title component
const Title = memo(() => (
  <motion.h1
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    transition={{ ...commonTransition, delay: 0.1 }}
    className="text-center text-5xl sm:text-6xl md:text-[82px] inline-block max-w-5xl font-semibold pt-20 text-white"
  >
    Best In-Class
    <GradientText text="Wealth" />
    Advisors
  </motion.h1>
));

Title.displayName = "Title";

// Memoized GradientText component
const GradientText = memo(({ text }) => (
  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent [-webkit-background-clip:text] [background-clip:text] font-bold">
    {" "}
    {text}{" "}
  </span>
));

GradientText.propTypes = {
  text: PropTypes.string.isRequired,
};

GradientText.displayName = "GradientText";

// Memoized Tagline component
const Tagline = memo(() => (
  <motion.p
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    transition={{ ...commonTransition, delay: 0.2 }}
    className="mt-10 text-xl lg:text-2xl text-gray-400 text-center max-w-3xl mb-12 mx-auto"
  >
    {heroSectionData.tagLine}
  </motion.p>
));

Tagline.displayName = "Tagline";

// Memoized Content component
const Content = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={commonTransition}
    className="relative flex flex-col items-center mt-10 lg:mt-20"
  >
    <div className="max-w-7xl mx-auto px-6 pt-5">
      <Title />
      <Tagline />
    </div>
  </motion.div>
));

Content.displayName = "Content";

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
