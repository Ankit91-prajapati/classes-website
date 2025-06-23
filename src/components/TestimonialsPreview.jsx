import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    relation: "Student – JEE",
    feedback:
      "Great teachers and doubt-clearing support. I scored 99% because of their help.",
    rating: 5,
    photo: "/student1.png",
  },
  {
    name: "Mrs. Kavita Joshi",
    relation: "Parent of NEET Aspirant",
    feedback:
      "My daughter improved tremendously. Faculty gave constant guidance and motivation.",
    rating: 4,
    photo: "/student2.png",
  },
  {
    name: "Ananya Verma",
    relation: "Student – Class 10",
    feedback:
      "Study material, tests, and mentoring were excellent. Highly recommend.",
    rating: 5,
    photo: "/student2.png",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const { name, relation, feedback, rating, photo } = testimonials[index];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Testimonials</h1>
      <p className="text-gray-600 mb-10">What our students and parents say about us</p>

      <div className=" bg-blue-100 shadow-lg rounded-xl p-6">
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500 mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-indigo-700">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{relation}</p>

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
          ))}
        </div>

        <p className="text-gray-700 italic max-w-md mx-auto">"{feedback}"</p>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prev}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
          >
            ⬅ Prev
          </button>
          <button
            onClick={next}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
