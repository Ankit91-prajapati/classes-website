
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color , setColor] = useState("white")

  const navItems = [
    ["Home" , '/'],
    ["About", "/about"],
    ["Courses", "/courses"],
    ["Admissions", "/admissions"],
    ["Results", "/results"],
    ["Faculty", "/faculty"],
    ["Schedule", "/schedule"],
    ["Gallery", "/gallery"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
    ["Testimonials", '/testimonials'],
    ['StudentPortal' ,"/student-portal"]
  ];

  return (
    <nav className=" shadow sticky top-0 z-50  " >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center h-20">
        <Link to="/" className="text-xl font-extrabold text-indigo-700">
          Classes Live
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(([label, path]) => (
            
            <Link key={path} to={path} className={`text-gray-600 hover:text-red-600 `}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-indigo-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 md:hidden transition-all">
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium hover:text-blue-300"
            >
              {label}
            </Link>
          ))}
          <button onClick={() => setIsOpen(false)} className="mt-4 text-sm text-white hover:underline">
            Close Menu
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
