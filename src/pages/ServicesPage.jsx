import React from "react";
import Navbar from "../components/navBar/Navbar";

const Services = () => {
  // Main ServicesPage component
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Hero Section */}
      <Navbar bgClass="darkblue" />
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-900/20 to-blue-900/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-100 via-emerald-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Our Services
            </h1>
            <p className="mt-8 text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transforming real estate aspirations into tangible success through
              <span className="text-emerald-400 font-semibold">
                {" "}
                expert-led strategies
              </span>{" "}
              and
              <span className="text-blue-400 font-semibold">
                {" "}
                comprehensive solutions
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Asset Management */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Icon/Visual */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-100 mb-4">
                    Asset Management
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                </div>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Maximize your real estate portfolio's value with our
                  comprehensive asset management solutions. From strategic
                  acquisition to optimization, we handle every detail.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Strategic Acquisition",
                      desc: "High-potential properties in Andhra Pradesh's dynamic market",
                    },
                    {
                      title: "Portfolio Optimization",
                      desc: "Continuous analysis for peak performance",
                    },
                    {
                      title: "Risk Mitigation",
                      desc: "Expert guidance to safeguard investments",
                    },
                    {
                      title: "Performance Monitoring",
                      desc: "Regular reports and transparent insights",
                    },
                    {
                      title: "Lifecycle Management",
                      desc: "From investment to divestment optimization",
                    },
                    {
                      title: "Diverse Asset Classes",
                      desc: "Residential, commercial, industrial, and land",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50"
                    >
                      <h4 className="font-bold text-slate-100 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-300">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-600/50">
                  <p className="text-slate-300 italic">
                    Let us handle the complexities while you enjoy the benefits
                    of a growing, high-performing asset base.
                  </p>
                </div>
              </div>
            </div>

            {/* Wealth Creation */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Icon/Visual */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-100 mb-4">
                    Wealth Creation
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Achieve financial independence with our bespoke wealth
                  creation strategies. Build a robust and sustainable financial
                  future through intelligent real estate investments.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Personalized Plans",
                      desc: "Strategies aligned with your unique goals and risk appetite",
                    },
                    {
                      title: "High-Growth Opportunities",
                      desc: "Emerging markets with significant appreciation potential",
                    },
                    {
                      title: "Long-Term Focus",
                      desc: "Sustainable investment practices for enduring wealth",
                    },
                    {
                      title: "Market Insights",
                      desc: "In-depth research to inform your decisions",
                    },
                    {
                      title: "Diversification",
                      desc: "Guidance on building a balanced portfolio",
                    },
                    {
                      title: "Ongoing Advisory",
                      desc: "Continuous support throughout your journey",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50"
                    >
                      <h4 className="font-bold text-slate-100 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-300">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-600/50">
                  <p className="text-slate-300 italic">
                    Empowering you with knowledge and opportunities to build
                    substantial wealth and secure your financial future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.05&#34;%3E%3Cpath d=&#34;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Grow Your Wealth?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our experts today to discuss your real estate
            investment goals and discover how Keerthi Realtors can help you
            achieve them.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <div className="flex items-center space-x-4 text-slate-300">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm">Trusted by 500+ investors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Keerthi Realtors
              </h3>
              <p className="text-slate-400">
                Building wealth through strategic real estate investments
              </p>
            </div>
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-400">
                &copy; 2025 Keerthi Realtors. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
