const Blog = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Blog & News</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Exam Tips for NEET", date: "May 5, 2025" },
          { title: "JEE Advanced Strategies", date: "April 28, 2025" }
        ].map((post, i) => (
          <div key={i} className="border rounded-lg p-6 shadow hover:shadow-slate-500  bg-blue-300">
            <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-600 mt-2">Quick tips and strategies for competitive exam success.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
