import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaUserMd, FaUserNurse, FaHospitalSymbol } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
import Sidebar from "./Sidebar";

const pieData = [
  { name: "Doctors", value: 25, color: "#34D399" },
  { name: "Nurses", value: 40, color: "#60A5FA" },
  { name: "Staff", value: 65, color: "#FBBF24" },
];

const staffData = [
  { name: "Dr. Alina Roy", role: "Surgeon", shift: "On Duty" },
  { name: "Dr. Javed Khan", role: "Pediatrician", shift: "Evening" },
  { name: "Rita Sen", role: "Nurse", shift: "Night" },
  { name: "Amit Paul", role: "Technician", shift: "Morning" },
];

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-slate-100 via-white to-slate-200 dark:from-gray-900 dark:to-slate-800 text-slate-800 dark:text-slate-100">

      <Sidebar/>
      {/* Main Content */}
      <motion.div
        className="flex-1 p-6 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-sm"
          />
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <FaUserMd className="text-white text-2xl mb-2" />,
              label: "Total Doctors",
              value: "025",
              desc: "Active Today",
              bg: "bg-green-500 dark:bg-green-300 dark:text-green-900",
            },
            {
              icon: <FaUserNurse className="text-white text-2xl mb-2" />,
              label: "Total Nurses",
              value: "040",
              desc: "All Departments",
              bg: "bg-blue-500 dark:bg-blue-300 dark:text-blue-900",
            },
            {
              icon: <FaHospitalSymbol className="text-white text-2xl mb-2" />,
              label: "Total Staff",
              value: "065",
              desc: "Hospital-wide",
              bg: "bg-yellow-400 dark:bg-yellow-200 dark:text-yellow-900",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`${card.bg} p-4 rounded-2xl shadow-lg transition`}
            >
              {card.icon}
              <p className="text-sm">{card.label}</p>
              <h2 className="text-xl font-bold">{card.value}</h2>
              <p className="text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="bg-purple-100 dark:bg-purple-200 dark:text-purple-900 p-4 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-4">Staff Distribution - May 2025</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} innerRadius={40}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Today Staff Shift */}
          <div className="bg-pink-100 dark:bg-pink-200 dark:text-pink-900 p-4 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-4">Today Staff Shift</h3>
            <ul className="space-y-2">
              {staffData.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border border-pink-300 dark:border-pink-400 p-2 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs">{item.role}</p>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-800 font-medium">{item.shift}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Next on Duty Staff */}
          <div className="bg-indigo-100 dark:bg-indigo-200 dark:text-indigo-900 p-4 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-2">Next on Duty</h3>
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/doctors/doctor2.png"
                alt="staff"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h4 className="font-bold">Dr. Javed Khan</h4>
                <p className="text-xs">Pediatrician</p>
              </div>
            </div>
            <div className="text-xs mt-4 space-y-1">
              <p>D.O.B: 20 July 1985</p>
              <p>Gender: Male</p>
              <p>Experience: 12 Years</p>
              <p>Department: Child Care</p>
              <p>Last Shift: 29 Apr 2025</p>
              <p>Joining Date: 12 May 2012</p>
              <p className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-green-200 text-green-900 px-2 py-1 rounded-xl text-xs">Child Health</span>
                <span className="bg-blue-200 text-blue-900 px-2 py-1 rounded-xl text-xs">Immunization</span>
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="bg-white dark:bg-slate-100 text-blue-600 px-3 py-1 rounded-xl text-sm">Profile</button>
              <button className="bg-slate-200 dark:bg-slate-300 text-slate-800 px-3 py-1 rounded-xl text-sm flex items-center gap-1">
                <BsChatDots /> Chat
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
