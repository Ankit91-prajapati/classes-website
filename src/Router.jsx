// File: src/App.jsx
import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Results from "./pages/Results";
import Faculty from "./pages/Faculty";
import StudentPortal from "./pages/StudentPortal";
import Schedule from "./pages/Schedule";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";



// Create router with JSX elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Courses />} />
      <Route path="admissions" element={<Admissions />} />
      <Route path="results" element={<Results />} />
      <Route path="faculty" element={<Faculty />} />
      <Route path="student-portal" element={<StudentPortal />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default  router;
