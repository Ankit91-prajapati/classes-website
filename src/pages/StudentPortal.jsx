import React, { useState } from "react";
const StudentPortal = () => {
  const [view, setView] = useState("login");

  const renderForm = () => {
    switch (view) {
      case "login":
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle login logic here
            }}
          >
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-700 to-sky-600 text-white py-2 rounded-lg hover:text-cyan-300 transition"
            >
              Login
            </button>
            <p className="text-sm text-center mt-3">
              <button
                onClick={() => setView("forgot")}
                className="text-indigo-600 hover:underline"
              >
                Forgot password?
              </button>
            </p>
          </form>
        );

      case "register":
        return (
          <form className="space-y-4 " onSubmit={(e) => {
              e.preventDefault();
              // handle login logic here
            }}
          >
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-purple-600 text-white py-2 rounded-lg hover:text-cyan-300 transition"
            >
              Register
            </button>
          </form>
        );

      case "forgot":
        return (
         <form className="space-y-4 " onSubmit={(e) => {
              e.preventDefault();
              // handle login logic here
            }}
          >
            <div>
              <label className="block text-gray-700">
                Enter your registered email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r  from-sky-950 to-sky-400 text-white py-2 rounded-lg hover:text-cyan-300 transition"
            >
              Reset Password
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-cyan-400 to-sky-700 flex items-center justify-center p-4 bg-cover">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <div className="flex justify-center mb-6 space-x-3">
          <button
            onClick={() => setView("login")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              view === "login"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-indigo-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setView("register")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              view === "register"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-indigo-700"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setView("forgot")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              view === "forgot"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-indigo-700"
            }`}
          >
            Forgot
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
          {view === "login" && "Student Login"}
          {view === "register" && "Register New Student"}
          {view === "forgot" && "Reset Your Password"}
        </h2>

        {renderForm()}
      </div>
    </div>
  );
};

export default StudentPortal;
