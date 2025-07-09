import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react"; // Importing icons from lucide-react

// Assuming Navbar is a separate component you already have
// import Navbar from '../navBar/Navbar'; // Uncomment if you want to include Navbar directly here

function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-light text-n-8">
      {/* You might want to include your Navbar component here if this is a standalone page */}
      {/* <Navbar /> */}

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-extrabold text-center text-primary mb-12">
            Get in Touch
          </h1>

          <p className="text-xl text-center text-n-8 mb-12 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our
            services, need assistance, or want to discuss a potential
            investment, our team is ready to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Contact Information Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary/40 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Reach Us Directly
                </h2>

                {/* Mobile Numbers */}
                <div className="flex items-center mb-4">
                  <Phone className="text-accent mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-lg font-semibold text-n-8">Mobile:</p>
                    <a
                      href="tel:+917416644667"
                      className="text-secondary hover:underline"
                    >
                      7416644667
                    </a>
                    ,{" "}
                    <a
                      href="tel:+918555883289"
                      className="text-secondary hover:underline"
                    >
                      8555883289
                    </a>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-center mb-4">
                  <Mail className="text-accent mr-4 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-lg font-semibold text-n-8">Email:</p>
                    <a
                      href="mailto:keerthirealtors9@gmail.com"
                      className="text-secondary hover:underline"
                    >
                      keerthirealtors9@gmail.com
                    </a>
                    ,{" "}
                    <a
                      href="mailto:sivaramsproperties@gmail.com"
                      className="text-secondary hover:underline"
                    >
                      sivaramsproperties@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start mb-6">
                  <MapPin
                    className="text-accent mr-4 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="text-lg font-semibold text-n-8">Location:</p>
                    <p className="text-secondary">
                      Gurunanak Nagar, Vijayawada, Andhra Pradesh
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Gurunanak+Nagar,+Vijayawada,+Andhra+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Links - NEW SECTION */}
              <div className="mt-3 pt-4 border-t border-secondary/20">
                {" "}
                {/* Added border-top for separation */}
                <h3 className="text-xl font-bold text-primary mb-4">
                  Connect With Us On:
                </h3>
                <div className="space-y-4">
                  {/* YouTube Link */}
                  <div className="flex items-center">
                    <Youtube
                      className="text-accent mr-4 flex-shrink-0"
                      size={24}
                    />
                    <a
                      href="https://www.youtube.com/@SIVARAMSPROPERTIES"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-lg"
                    >
                      Sivarams Properties
                    </a>
                  </div>
                  {/* Facebook Link */}
                  <div className="flex items-center">
                    <Facebook
                      className="text-accent mr-4 flex-shrink-0"
                      size={24}
                    />
                    <a
                      href="https://www.facebook.com/sivaramsproperties"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-lg"
                    >
                      Sivarams Properties
                    </a>
                  </div>
                  {/* Instagram Link */}
                  <div className="flex items-center">
                    <Instagram
                      className="text-accent mr-4 flex-shrink-0"
                      size={24}
                    />
                    <a
                      href="https://www.instagram.com/keerthirealtors9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-lg"
                    >
                      Keerthi Realtors
                    </a>
                  </div>
                </div>
              </div>

              {/* Live Map Embed Section - Replaced placeholder image with iframe */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Find Us Here:
                </h3>
                <div
                  className="relative"
                  style={{
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.974955140516!2d80.6406983148154!3d16.51179898867341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2b0a2b0a1%3A0x123456789abcdef0!2sGurunanak+Nagar%2C+Vijayawada%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary/40">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-n-8 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-secondary/60 rounded-md focus:ring-primary focus:border-primary outline-none text-n-8 bg-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-n-8 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-secondary/60 rounded-md focus:ring-primary focus:border-primary outline-none text-n-8 bg-light"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium text-n-8 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 border border-secondary/60 rounded-md focus:ring-primary focus:border-primary outline-none text-n-8 bg-light"
                    placeholder="Inquiry about Asset Management"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-n-8 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full p-3 border border-secondary/60 rounded-md focus:ring-primary focus:border-primary outline-none text-n-8 bg-light"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary inline-block text-xl font-semibold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Reusing your existing footer structure */}
      <footer className="bg-primary text-light py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="container mx-auto text-center">
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-lg">
              &copy; 2025 Keerthi Realtors. All rights reserved.
            </p>
          </div>
          {/* <div className="space-x-6">
            <a href="#" className="text-light hover:underline text-lg">
              Privacy Policy
            </a>
            <a href="#" className="text-light hover:underline text-lg">
              Terms of Service
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
