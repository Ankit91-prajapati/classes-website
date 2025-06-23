import React from 'react';

const courses = [
  {
    title: 'IIT-JEE Foundation (Class 9-10)',
    syllabus: 'Mathematics, Physics, Chemistry basics + Olympiad prep',
    duration: '1 Year',
    mode: 'Offline & Online',
    fees: '₹45,000/year',
  },
  {
    title: 'NEET Preparation (Class 11-12)',
    syllabus: 'Biology, Physics, Chemistry with NCERT focus',
    duration: '2 Years',
    mode: 'Offline & Online',
    fees: '₹85,000/year',
  },
  {
    title: 'Board Booster (Class 10)',
    syllabus: 'All major board subjects (CBSE/ICSE/State)',
    duration: '6 Months',
    mode: 'Offline only',
    fees: '₹25,000',
  },
  {
    title: 'Crash Course – NEET / JEE',
    syllabus: 'Revision + Test Series + Doubt Sessions',
    duration: '3 Months',
    mode: 'Online only',
    fees: '₹15,000',
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-center text-indigo-700">Our Courses & Programs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-md bg-gradient-to-r from-cyan-100 to-blue-200">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{course.title}</h2>
            <p className="text-gray-700"><span className="font-medium">Syllabus:</span> {course.syllabus}</p>
            <p className="text-gray-700"><span className="font-medium">Duration:</span> {course.duration}</p>
            <p className="text-gray-700"><span className="font-medium">Mode:</span> {course.mode}</p>
            <p className="text-gray-700 mb-4"><span className="font-medium">Fees:</span> {course.fees}</p>
            <button className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Apply / Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
