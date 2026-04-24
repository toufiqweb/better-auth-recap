import React from "react";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A beautiful homepage design that works perfectly for public users and
          gives a strong first impression.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Fast Performance",
            desc: "Optimized UI with Tailwind CSS and responsive design.",
          },
          {
            title: "Modern Design",
            desc: "Clean layout and smooth user experience.",
          },
          {
            title: "Mobile Friendly",
            desc: "Looks perfect on desktop, tablet, and mobile.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
          >
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
