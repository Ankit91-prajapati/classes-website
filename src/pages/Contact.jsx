
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 ">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg">We're here to help. Fill out the form below to reach out to us!</p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Inquiry Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 bg-gradient-to-t from-cyan-400 to-sky-700" >
          <h2 className="text-2xl font-bold text-white mb-6">Inquiry Form</h2>
           <form className="space-y-5 " onSubmit={(e) => {
              e.preventDefault();
              // handle login logic here
            }}
          >
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
              <input type="tel" placeholder="1234567890" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea rows="4" placeholder="Your message..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="bg-gradient-to-r from-cyan-800 to-sky-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition duration-300">Send Message</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-10">

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Our Location</h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9023939728073!2d77.5946!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63bbf9a2fdd%3A0x0!2zMTnCsDA0JzM0LjAiTiA3N8KwMzUnMzkuNiJF!5e0!3m2!1sen!2sin!4v1616666666666"
                className="w-full h-64 border-none"
                allowFullScreen=""
                loading="lazy"
                title="Institute Location"
              ></iframe>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Follow Us</h2>
            <div className="flex space-x-6 justify-center md:justify-start text-indigo-600 text-3xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><FaYoutube /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;