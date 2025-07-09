import React from "react";
import { servicesData } from "../constants";

const ServicesContainer = () => (
  <div className="mt-8 px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">{servicesData.title}</h2>
      <p className="text-light max-w-2xl mx-auto">{servicesData.description}</p>
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
);

const ServiceCard = ({ title, description }) => (
  <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-lg border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-white-900">{title}</h3>
    <div className="h-[2px] w-16 bg-orange-500 mb-6"></div>
    <p className="text-white-700 leading-relaxed">{description}</p>
  </div>
);

export { ServicesContainer, ServiceCard };
