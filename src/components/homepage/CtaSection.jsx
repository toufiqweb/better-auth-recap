import React from "react";

const CtaSection = () => {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Build Your Next Project?
        </h2>
        <p className="text-indigo-100 mb-8 text-lg">
          Start creating stunning web experiences with Next.js and Tailwind CSS
          today.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
