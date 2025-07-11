import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Youtube,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/navBar/Navbar";

// Assuming Navbar is a separate component you already have
// import Navbar from '../navBar/Navbar'; // Uncomment if you want to include Navbar directly here

function ContactUs() {
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
              Get in Touch
            </h1>
            <p className="mt-8 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have a question about our
              <span className="text-emerald-400 font-semibold"> services</span>,
              need assistance, or want to discuss a
              <span className="text-blue-400 font-semibold">
                {" "}
                potential investment
              </span>
              , our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Information Section */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-100 mb-4">
                    Reach Us Directly
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  {/* Mobile Numbers */}
                  <div className="flex items-center p-4 bg-slate-700/50 rounded-xl border border-slate-600/50">
                    <Phone
                      className="text-emerald-400 mr-4 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="text-lg font-semibold text-slate-100 mb-1">
                        Mobile:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="tel:+917416644667"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          7416644667
                        </a>
                        <span className="text-slate-400">,</span>
                        <a
                          href="tel:+918555883289"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          8555883289
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="flex items-center p-4 bg-slate-700/50 rounded-xl border border-slate-600/50">
                    <Mail
                      className="text-emerald-400 mr-4 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <p className="text-lg font-semibold text-slate-100 mb-1">
                        Email:
                      </p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="mailto:keerthirealtors9@gmail.com"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          keerthirealtors9@gmail.com
                        </a>
                        <a
                          href="mailto:sivaramsproperties@gmail.com"
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          sivaramsproperties@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start p-4 bg-slate-700/50 rounded-xl border border-slate-600/50">
                    <MapPin
                      className="text-emerald-400 mr-4 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <p className="text-lg font-semibold text-slate-100 mb-1">
                        Location:
                      </p>
                      <p className="text-slate-300 mb-2">
                        Gurunanak Nagar, Vijayawada, Andhra Pradesh
                      </p>
                      <a
                        href="https://www.google.com/maps/search/Gurunanak+Nagar,+Vijayawada,+Andhra+Pradesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                      >
                        View on Map →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-6 border-t border-slate-600/50 mb-8">
                  <h3 className="text-2xl font-bold text-slate-100 mb-6">
                    Connect With Us On:
                  </h3>
                  <div className="space-y-4">
                    {/* YouTube Link */}
                    <div className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <Youtube
                        className="text-red-400 mr-4 flex-shrink-0"
                        size={24}
                      />
                      <a
                        href="https://www.youtube.com/@SIVARAMSPROPERTIES"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        Sivarams Properties
                      </a>
                    </div>
                    {/* Facebook Link */}
                    <div className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <Facebook
                        className="text-blue-400 mr-4 flex-shrink-0"
                        size={24}
                      />
                      <a
                        href="https://www.facebook.com/sivaramsproperties"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        Sivarams Properties
                      </a>
                    </div>
                    {/* Instagram Link */}
                    <div className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                      <Instagram
                        className="text-pink-400 mr-4 flex-shrink-0"
                        size={24}
                      />
                      <a
                        href="https://www.instagram.com/keerthirealtors9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition-colors duration-200"
                      >
                        Keerthi Realtors
                      </a>
                    </div>
                  </div>
                </div>

                {/* Live Map Embed Section */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    Find Us Here:
                  </h3>
                  <div
                    className="relative overflow-hidden rounded-xl shadow-lg"
                    style={{
                      paddingBottom: "56.25%",
                      height: 0,
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.974955140516!2d80.6406983148154!3d16.51179898867341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2b0a2b0a1%3A0x123456789abcdef0!2sGurunanak+Nagar%2C+Vijayawada%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-100 mb-4">
                    Send Us a Message
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-slate-100 mb-3"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-100 placeholder-slate-400 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-slate-100 mb-3"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-100 placeholder-slate-400 transition-all duration-200"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-lg font-semibold text-slate-100 mb-3"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-100 placeholder-slate-400 transition-all duration-200"
                      placeholder="Inquiry about Asset Management"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-semibold text-slate-100 mb-3"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-100 placeholder-slate-400 transition-all duration-200 resize-none"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-emerald-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%23ffffff&#34; fill-opacity=&#34;0.05&#34;%3E%3Cpath d=&#34;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Financial Future
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to start your real estate investment journey? Our team is here
            to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+917416644667"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <div className="flex items-center space-x-4 text-slate-300">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm">Available 24/7</span>
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
}

export default ContactUs;
