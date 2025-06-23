import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 text-gray-600 mt-12">
      <p>&copy; {new Date().getFullYear()} Classes Institute. All rights reserved.</p>
    </footer>
  );
};

export default Footer;