import React from "react";

const Achievements = () => {
  const stats = [
    { title: "5000+", subtitle: "Students Trained" },
    { title: "92%", subtitle: "Average Board Results" },
    { title: "150+", subtitle: "Top Ranks in JEE/NEET" }
  ];

  return (
    <section className="bg-cyan-300 py-16 text-center rounded-2xl m-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-10">Our Achievements</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {stats.map((stat, index) => (             
          <div key={index} className="text-indigo-700 ">
            <p className="text-4xl font-extrabold">{stat.title}</p>
            <p className="text-gray-700">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
