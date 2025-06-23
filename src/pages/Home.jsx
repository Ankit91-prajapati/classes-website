import React from "react";
import Hero from "../components/Hero";
import CoursesPreview from "../components/CoursesPreview";
import Achievements from "../components/Achievements";
import TestimonialsPreview from "../components/TestimonialsPreview";

const Home = () => {
  return (
    <main className="bg-slate-100">
      <Hero />
      <CoursesPreview/>
      <Achievements />
      <TestimonialsPreview />
    </main>
  );
};

export default Home;
