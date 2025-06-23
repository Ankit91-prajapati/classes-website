import React from "react";

const facultyData = [
  {
    name: "Dr. A. Sharma",
    subject: "Physics (IIT-JEE / NEET)",
    qualification: "Ph.D. in Physics, IIT Delhi",
    experience: "12+ years",
    specialization: "Electrodynamics, Mechanics",
    photo: "/prof1.png",
  },
  {
    name: "Ms. N. Verma",
    subject: "Chemistry (NEET)",
    qualification: "M.Sc. in Chemistry, DU",
    experience: "9+ years",
    specialization: "Organic Chemistry, Physical Chemistry",
    photo: "/prof2.png",
  },
  {  
    name: "Mr. R. Gupta",
    subject: "Mathematics (IIT-JEE)",
    qualification: "B.Tech, NIT Trichy",
    experience: "10+ years",
    specialization: "Calculus, Algebra",
    photo: "/prof3.png",
  },
  {
    name: "Mrs. K. Singh",
    subject: "Biology (Class 11-12)",
    qualification: "M.Sc. in Biology, BHU",
    experience: "7+ years",
    specialization: "Genetics, Botany",
    photo: "/prof1.png",
  },
  {
    name: "Mr. A. Patel",
    subject: "Science & Math (Class 10)",
    qualification: "B.Sc. B.Ed, Lucknow University",
    experience: "5+ years",
    specialization: "Class 9–10 CBSE",
    photo:"/prof3.png",
  },
];

const FacultyCard = ({ faculty }) => (
  <div className="bg-gray-200 shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center transition hover:shadow-xl">
    <img
      src={faculty.photo}
      alt={faculty.name}
      className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 mb-4"
    />
    <h2 className="text-xl font-bold text-indigo-700">{faculty.name}</h2>
    <p className="text-sm text-gray-600">{faculty.subject}</p>
    <p className="text-sm text-gray-700">{faculty.qualification}</p>
    <p className="text-sm text-gray-600 italic">{faculty.specialization}</p>
    <p className="text-sm text-gray-500 mt-1">Experience: {faculty.experience}</p>
    <button className="mt-3 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition">
      Request Demo Class
    </button>
  </div>
);

const Faculty = () => (
  <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">Our Faculty</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {facultyData.map((faculty, index) => (
          <FacultyCard key={index} faculty={faculty} />
        ))}
      </div>
    </div>
  </div>
);

export default Faculty;

