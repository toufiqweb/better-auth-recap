import React from "react";

const Banner = () => {
  return (
    <section className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-indigo-200 mb-3">
            Welcome to Our Platform
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build Better Experiences for Everyone
          </h1>
          <p className="text-lg text-indigo-100 mb-8">
            Create modern web experiences with clean UI, responsive layouts, and
            a powerful public-facing homepage.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl w-full max-w-md">
            <div className="bg-white rounded-2xl p-6 text-gray-800 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 h-4 rounded-full w-3/4"></div>
                <div className="bg-gray-100 h-4 rounded-full w-full"></div>
                <div className="bg-gray-100 h-4 rounded-full w-5/6"></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-indigo-100 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500">Users</p>
                  <h4 className="text-2xl font-bold">12K+</h4>
                </div>
                <div className="bg-purple-100 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500">Projects</p>
                  <h4 className="text-2xl font-bold">450+</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
