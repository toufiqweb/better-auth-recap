import React from "react";

const StatsSection = () => {
  const stats = [
    { title: "Total Orders", value: "124", icon: "📦" },
    { title: "Wishlist", value: "18", icon: "❤️" },
    { title: "Messages", value: "12", icon: "💬" },
    { title: "Rewards", value: "1,250", icon: "⭐" },
  ];
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-500 text-sm">{item.title}</h3>
            <span className="text-2xl">{item.icon}</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800">{item.value}</h2>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
