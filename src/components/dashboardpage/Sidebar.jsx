import { authClient } from "@/lib/auth-client";
import React from "react";

const Sidebar = () => {
  const menu = [
    "Dashboard",
    "Orders",
    "Wishlist",
    "Messages",
    "Settings",
    "Logout",
  ];

  const handleSignOut = () => {
    authClient.signOut();
  };
  return (
    <aside className="bg-white rounded-3xl shadow-md p-6 h-fit lg:col-span-1">
      <h2 className="font-bold text-lg mb-6">Menu</h2>

      <nav className="space-y-3">
        {menu.map((item, index) => (
          <button
            key={index}
            onClick={item === "Logout" ? handleSignOut : undefined}
            className={`w-full text-left px-4 py-3 rounded-xl transition font-medium ${
              item === "Logout"
                ? "text-red-500 hover:bg-red-50"
                : "hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
