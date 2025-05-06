// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 p-6 shadow-lg bg-gradient-to-br from-blue-200 via-white to-gray-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 flex flex-col justify-between">
      <div>
        <img
          src="https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg"
          alt="Admin"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-center mt-4 font-semibold text-lg">Admin Alok Das</h2>
        <p className="text-center text-xs text-gray-600 dark:text-gray-300">Hospital Administrator</p>
        <nav className="mt-6 space-y-4 text-sm font-medium">
                  <Link to="/admin/admin-home" className="hover:text-blue-600 font-medium text-lg flex items-center gap-2">
                      <FaHome /> Home
                    </Link>
          <p><Link to="/admin-dashboard" className="hover:text-blue-600 font-medium text-lg">Dashboard</Link></p>
          <p><Link to="/admin/doctor" className="hover:text-blue-600 font-medium text-lg">Doctor</Link></p>
          <p><Link to="/admin/patient" className="hover:text-blue-600 font-medium text-lg">Patient</Link></p>
        </nav>
      </div>
      <div className="flex items-center gap-2 text-red-600 justify-left mt-10">
        <FiLogOut />
        <Link to="/" className="hover:text-blue-600 font-medium text-lg">Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
