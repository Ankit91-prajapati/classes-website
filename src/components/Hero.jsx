import React from "react";
import image1 from "/image1.png"
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image1})`}}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r  opacity-80 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-1 text-white">Classes Live</h1>
        <p className="text-xl max-w-2xl mb-6 text-blue-500">
          Empowering Students for IIT, NEET, Boards, and Beyond
        </p>
        <a
          href="/admissions"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-200 transition"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
