import React from "react";

const CoursesPreview = () => {
  const courses = [
    "IIT-JEE Foundation",
    "NEET Crash Course",
    "Class 10 CBSE",
    "Class 12 State Board"
  ];

  let slogans = [
    'Start Early ,Aim Higher -The IIT Dream Begin Here',
    'Where Future Doctor Begin Their Journey',
    'Strong Start for a Bright Future',
    'Your Launchpad to College and Career Success!'
  ]

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Courses We Offer</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {courses.map((course, index) => (
          <div key={index} className="p-6 border rounded-xl bg-blue-100 shadow hover:bg-blue-200 transition ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{course}</h3>
           
            <p className="text-gray-600 text-sm">{slogans[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesPreview;
