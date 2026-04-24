import React from "react";

const ActivityFeed = () => {
  const recentActivities = [
    "Your order #1234 has been shipped.",
    "New discount available.",
    "Profile updated successfully.",
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-3xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recent Activity</h2>
      </div>

      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-b pb-4 last:border-none"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-700">{activity}</p>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
