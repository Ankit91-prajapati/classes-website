import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;