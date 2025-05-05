import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaUserInjured, FaCalendarCheck, FaClock } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
import DoctorSidebar from "./doctor_sidebar";

const pieData = [
  { name: "New Patients", value: 400, color: "#93C5FD" },
  { name: "Old Patients", value: 300, color: "#FDE68A" },
  { name: "Total Patients", value: 700, color: "#1E3A8A" },
];

const appointmentData = [
  { name: "M.J. Mical", type: "Health Checkup", time: "On Going" },
  { name: "Sanath Deo", type: "Health Checkup", time: "12:30 PM" },
  { name: "Loeaera Phanj", type: "Report", time: "01:00 PM" },
  { name: "Komola Haris", type: "Common Cold", time: "01:30 PM" },
];

const DoctorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 via-slate-100 to-blue-100 dark:from-gray-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      {/* sidebar */}
      
      <DoctorSidebar/>

      {/* Main Content */}
      <motion.div
        className="flex-1 p-6 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
          />
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[{
            icon: <FaUserInjured className="text-blue-300 text-2xl mb-2" />,
            label: "Total Patients",
            value: "2000+",
            desc: "Till Today",
            bgClass: "bg-blue-100 dark:bg-blue-800"
          }, {
            icon: <FaClock className="text-blue-600 text-2xl mb-2" />,
            label: "Today Patient",
            value: "068",
            desc: "21 Dec 2021",
            bgClass: "bg-green-100 dark:bg-green-800"
          }, {
            icon: <FaCalendarCheck className="text-blue-600 text-2xl mb-2" />,
            label: "Today Appointments",
            value: "085",
            desc: "21 Dec 2021",
            bgClass: "bg-yellow-100 dark:bg-yellow-800"
          }].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-2xl shadow ${card.bgClass}`}
            >
              {card.icon}
              <p className="text-gray-600 dark:text-gray-300">{card.label}</p>
              <h2 className="text-xl font-bold">{card.value}</h2>
              <p className="text-sm text-gray-400 dark:text-gray-500">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Patients Summary December 2021</h3>
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

          {/* Today Appointments */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Today Appointment</h3>
            <ul className="space-y-2">
              {appointmentData.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border p-2 rounded-lg dark:border-slate-600">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.type}</p>
                  </div>
                  <p className="text-sm text-blue-600 font-medium">{item.time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Next Patient Details */}
          <div className="bg-blue-100 dark:bg-slate-800 p-4 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">Next Patient Details</h3>
            <div className="flex items-center gap-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1a3y4eIzMQUWGbfAlQY3g3jxGMbbe0daaZcKV8sftQ&s&ec=72940544"
                alt="patient"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h4 className="font-bold">Sanath Deo</h4>
                <p className="text-xs text-gray-500">Health Checkup</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 space-y-1">
              <p>D.O.B: 15 January 1989</p>
              <p>Sex: Male</p>
              <p>Weight: 59 Kg</p>
              <p>Last Appointment: 15 Dec 2021</p>
              <p>Height: 172 cm</p>
              <p>Reg. Date: 10 Dec 2021</p>
              <p className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-xl">Asthma</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-xl">Hypertension</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-xl">Fever</span>
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-xl text-sm">
                Document
              </button>
              <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-xl text-sm flex items-center gap-1">
                <BsChatDots /> Chat
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DoctorDashboard;
