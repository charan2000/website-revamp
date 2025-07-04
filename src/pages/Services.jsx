import React from "react";
import Navbar from "../components/navBar/Navbar";

const Services = () => {
  // Main ServicesPage component
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* Navigation Bar */}
      <Navbar bgClass="bg-blue-800" />
      {/* Main Content Area */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12">
            Our Comprehensive Services
          </h1>

          {/* Services Overview Section */}
          <section className="mb-16">
            <p className="text-xl text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              At Keerthi Realtors, we are dedicated to transforming your real
              estate aspirations into tangible success. Our expert-led services
              are designed to provide strategic guidance and comprehensive
              solutions, ensuring your investments grow into lasting wealth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Asset Management Card */}
              <div className="bg-white border border-gray-200 shadow-lg p-8 rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                <img
                  src="https://placehold.co/600x300/007bff/ffffff?text=Asset+Management"
                  alt="Asset Management"
                  className="w-full h-auto rounded-lg mb-6 shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x300/cccccc/333333?text=Image+Error";
                  }}
                />
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Asset Management
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Asset Management service is tailored to maximize the value
                  and returns of your real estate portfolio. We provide
                  end-to-end solutions, from strategic acquisition to proactive
                  management and optimization.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mb-6">
                  <li>
                    <span className="font-semibold">
                      Strategic Acquisition:
                    </span>{" "}
                    Identifying high-potential properties and optimal investment
                    timings in Andhra Pradesh's dynamic market.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Portfolio Optimization:
                    </span>{" "}
                    Continuous analysis and adjustments to ensure your assets
                    are performing at their peak.
                  </li>
                  <li>
                    <span className="font-semibold">Risk Mitigation:</span>{" "}
                    Expert guidance to minimize potential risks and safeguard
                    your investments.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Performance Monitoring:
                    </span>{" "}
                    Regular reports and transparent insights into your
                    portfolio's growth and profitability.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Property Lifecycle Management:
                    </span>{" "}
                    From initial investment to potential divestment, we manage
                    every stage for optimal returns.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Diverse Asset Classes:
                    </span>{" "}
                    Specializing in residential, commercial, industrial, and
                    land investments.
                  </li>
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Let us handle the complexities of real estate management,
                  allowing you to enjoy the benefits of a growing,
                  high-performing asset base.
                </p>
              </div>

              {/* Wealth Creation Card */}
              <div className="bg-white border border-gray-200 shadow-lg p-8 rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                <img
                  src="https://placehold.co/600x300/28a745/ffffff?text=Wealth+Creation"
                  alt="Wealth Creation"
                  className="w-full h-auto rounded-lg mb-6 shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x300/cccccc/333333?text=Image+Error";
                  }}
                />
                <h2 className="text-4xl font-bold text-blue-600 mb-6">
                  Wealth Creation
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Achieve your financial independence with our bespoke Wealth
                  Creation strategies. We help you build a robust and
                  sustainable financial future through intelligent real estate
                  investments.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mb-6">
                  <li>
                    <span className="font-semibold">
                      Personalized Investment Plans:
                    </span>{" "}
                    Crafting strategies aligned with your unique financial goals
                    and risk appetite.
                  </li>
                  <li>
                    <span className="font-semibold">
                      High-Growth Opportunities:
                    </span>{" "}
                    Identifying emerging markets and properties with significant
                    appreciation potential.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Long-Term Growth Focus:
                    </span>{" "}
                    Emphasizing sustainable investment practices for enduring
                    wealth.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Market Insights & Analysis:
                    </span>{" "}
                    Providing in-depth research to inform your investment
                    decisions.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Diversification Strategies:
                    </span>{" "}
                    Guidance on building a balanced real estate portfolio.
                  </li>
                  <li>
                    <span className="font-semibold">Ongoing Advisory:</span>{" "}
                    Continuous support and expert advice throughout your
                    investment journey.
                  </li>
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our goal is to empower you with the knowledge and
                  opportunities to build substantial wealth and secure your
                  financial future through strategic real estate investments.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-blue-100 p-10 rounded-xl shadow-md mt-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">
              Ready to Grow Your Wealth?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Connect with our experts today to discuss your real estate
              investment goals and discover how Keerthi Realtors can help you
              achieve them.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto text-center md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg">
              &copy; 2025 Keerthi Realtors. All rights reserved.
            </p>
          </div>
          <div className="space-x-6">
            <a
              href="#"
              className="text-blue-200 hover:text-white text-lg transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-blue-200 hover:text-white text-lg transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
