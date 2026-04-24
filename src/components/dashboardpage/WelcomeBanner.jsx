import React from "react";

const WelcomeBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-3">Welcome Back 👋</h2>
      <p className="text-indigo-100 max-w-2xl">
        Manage your account and track your latest activity.
      </p>

      <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
        Explore Dashboard
      </button>
    </section>
  );
};

export default WelcomeBanner;
