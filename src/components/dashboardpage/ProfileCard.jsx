import React from "react";

const ProfileCard = ({user}) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 text-center">
      <div className="w-24 h-24 mx-auto rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl font-bold mb-4">
        U
      </div>

      <h2 className="text-xl font-bold">{user?.name}</h2>
      <p className="text-gray-500 text-sm mb-6">Premium User</p>

      <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
