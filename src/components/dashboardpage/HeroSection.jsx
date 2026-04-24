import React from "react";

const HeroSection = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">User Dashboard</h1>

        <div className="flex items-center gap-4">
          <button className="relative">
            <span className="text-2xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
              3
            </span>
          </button>

          <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
              U
            </div>
            <div>
              <p className="font-semibold text-sm">Welcome Back</p>
              <p className="text-xs text-gray-500">User Account</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
