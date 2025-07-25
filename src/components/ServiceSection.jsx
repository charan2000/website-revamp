import React from "react";
import { servicesData } from "../constants";

const ServicesContainer = () => (
  <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/10 to-blue-900/10"></div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-100 via-emerald-400 to-blue-400 bg-clip-text text-transparent leading-tight mb-8">
          {servicesData.title}
        </h2>
        <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
          {servicesData.description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {servicesData.services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description, index }) => (
  <div className="group relative">
    <div className={`absolute -inset-4 ${index % 2 === 0 ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20' : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="mb-8">
        <div className={`w-20 h-20 ${index % 2 === 0 ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' : 'bg-gradient-to-br from-blue-500 to-purple-600'} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-4xl lg:text-5xl font-black text-slate-100 mb-4">{title}</h3>
        <div className={`w-24 h-1 ${index % 2 === 0 ? 'bg-gradient-to-r from-emerald-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'} rounded-full`}></div>
      </div>
      <p className="text-lg text-slate-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

export { ServicesContainer, ServiceCard };
