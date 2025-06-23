import React from "react";

const Hero = () => {
  return (
    <section className="h-screen  bg-gradient-to-r from-cyan-500 to-blue-700 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Classes Live</h1>
      <p className="text-xl max-w-2xl mb-6 text-white" >Empowering Students for IIT, NEET, Boards, and Beyond</p>
      <a href="/admissions" className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-200">
        Enroll Now
      </a>
    </section>
  );
};

export default Hero;