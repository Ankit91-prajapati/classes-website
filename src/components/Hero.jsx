import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden w-full">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(/image1.png)`}}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r  opacity-80 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-1 text-white/95">Classes Live</h1>
        <p className="text-xl max-w-2xl mb-6 text-blue-500">
          Empowering Students for IIT, NEET, Boards, and Beyond
        </p>
        
        <Link to ="/admissions"  className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-200 transition"> Enroll Now</Link>
      </div>
    </section>
  );
};

export default Hero;
