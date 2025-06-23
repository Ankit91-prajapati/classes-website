import React from 'react';
import student1 from "/public/student1.png";
import student3 from "/public/student2.png";
import student2 from "/public/student3.png";
const toppers = [
  {
    name: 'Aarav Sharma',
    rank: 'AIR 12 – JEE Advanced 2024',
    photo: student1,
  },
  {
    name: 'Diya Patel',
    rank: 'AIR 24 – NEET 2024',
    photo: student2,
  },
  {
    name: 'Rohan Mehta',
    rank: 'State Rank 1 – Class 10 Board',
    photo: student3,
  },
];

const performanceStats = [
  { year: '2024', jee: 45, neet: 60 },
  { year: '2023', jee: 38, neet: 55 },
  { year: '2022', jee: 30, neet: 48 },
];

const stories = [
  {
    title: 'From Village to IIT',
    description:
      'Priya Kumari, a student from a remote village, cracked IIT JEE with AIR 102 thanks to our residential coaching program.',
  },
  {
    title: 'NEET Topper on National TV',
    description:
      'Our NEET topper was featured on national news for her journey and success story.',
  },
];

const ResultsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">Results & Achievements</h1>

      {/* Toppers Section */}
      <section>
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">🏆 Our Toppers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <div key={index} className="bg-blue-100 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300">
              <img
                src={topper.photo}
                alt={topper.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-2 border-indigo-500"
              />
              <h3 className="text-xl font-semibold text-indigo-700">{topper.name}</h3>
              <p className="text-gray-600 mt-1">{topper.rank}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Year-wise Performance Section */}
      <section className="bg-gray-50 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">📊 Year-wise Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-indigo-100 text-indigo-700">
              <tr>
                <th className="py-2 px-4 border">Year</th>
                <th className="py-2 px-4 border">JEE Selections</th>
                <th className="py-2 px-4 border">NEET Selections</th>
              </tr>
            </thead>
            <tbody>
              {performanceStats.map((stat, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-2 px-4 border font-medium">{stat.year}</td>
                  <td className="py-2 px-4 border">{stat.jee}</td>
                  <td className="py-2 px-4 border">{stat.neet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Success Stories Section */}
      <section>
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">🌟 Success Stories & Media Features</h2>
        <div className="space-y-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-indigo-100 border-l-4 border-indigo-600 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">{story.title}</h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;