// import React from "react";
import { servicesData } from "../constants";
import { ServicesContainer } from "./ServiceSection";
import { heroSectionData } from "../constants";
import ProductSection from "./ProductSection";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Best In-Class
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent [-webkit-background-clip:text] [background-clip:text] font-bold">
          {" "}
          Wealth{" "}
        </span>
        Advisors
      </h1>
      <p className="mt-5 text-xl lg:text-2xl text-gray-600 text-center max-w-3xl mb-12">
        {heroSectionData.tagLine}
      </p>

      <ServicesContainer />
      <ProductSection />
    </div>
  );
};

export default HeroSection;
