import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const DoctorSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Remove JWT token (or any auth data) from storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Navigate back to main home page
      navigate('/');
    }
  };

  return (
    <div className="w-64 p-4 shadow-lg flex flex-col justify-between h-screen bg-gradient-to-r from-blue-200 via-slate-300 to-gray-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600">
      {/* Top Content */}
      <div>
        <img
          src="https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg"
          alt="Dr. Marttin Deo"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-center mt-4 font-semibold text-lg">Dr. Marttin Deo</h2>
        <p className="text-center text-xs text-gray-600 dark:text-gray-300">
          MBBS, FCPS - MD (Medicine), MCPS
        </p>
        <nav className="mt-6 space-y-4 text-sm font-medium">
          <Link to="/doctor/doctor-home" className="hover:text-blue-600 font-medium text-lg flex items-center gap-2">
            <FaHome /> Home
          </Link>
          <p><Link to="/doctor-dashboard" className="hover:text-blue-600 font-medium text-lg">
            Dashboard
          </Link></p> 
          <p><Link to="/appointment" className="hover:text-blue-600 font-medium text-lg">
            Appointment
          </Link></p> 
        </nav>
      </div>

      {/* Logout Button at Bottom */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:text-blue-600 font-medium text-lg"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default DoctorSidebar;
