import React from "react";
import { servicesData } from "../constants/services";
import { heroSectionData } from "../constants";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Best In-Class
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent [-webkit-background-clip:text] [background-clip:text] font-bold">
          {" "} Wealth {" "}
        </span>
        Advisors
      </h1>
      <p className="mt-5 text-xl lg:text-2xl text-gray-600 text-center max-w-3xl mb-12">
        {heroSectionData.tagLine}
      </p>

      <div className="mt-10 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{servicesData.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="backdrop-blur-sm bg-white/70 p-8 rounded-xl shadow-lg border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
        {title}
      </h3>
      <div className="h-[2px] w-12 bg-orange-500 mb-6"></div>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HeroSection;
