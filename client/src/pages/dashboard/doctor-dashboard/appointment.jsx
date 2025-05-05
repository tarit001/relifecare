import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  CalendarHeart,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import DoctorSidebar from "./doctor_sidebar";

const initialAppointments = [
  {
    id: 1,
    name: "M.J. Mical",
    reason: "Health Checkup",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sanath Deo",
    reason: "Common Cold",
    time: "12:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    name: "Komola Haris",
    reason: "Eye Checkup",
    time: "02:30 PM",
    status: "Pending",
  },
];

export default function Appointment() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState("");

  const handleAction = (id, action) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: action } : appt
      )
    );
  };

  const filteredAppointments = appointments.filter((appt) =>
    appt.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      
    {/* sidebar */}
    <DoctorSidebar/>

      {/* Main Content */}
      <motion.div
        className="flex-1 flex flex-col items-center pt-24 pb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full max-w-4xl bg-white/80 dark:bg-slate-800/80 p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <CalendarHeart className="text-blue-600" />
              <h2 className="text-2xl font-bold">Today's Appointments</h2>
            </div>

            {/* Search Input */}
            <div className="flex items-center bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 rounded-xl px-3 py-1">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none px-2 text-sm text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
              />
            </div>
          </div>

          <ul className="space-y-4">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appt) => (
                <motion.li
                  key={appt.id}
                  className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-slate-900/70 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="mb-4 md:mb-0">
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">
                      {appt.name}
                    </h4>
                    <p className="text-sm text-gray-500">{appt.reason}</p>
                    <p className="text-xs text-blue-600">{appt.time}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    {appt.status === "Pending" ? (
                      <>
                        <button
                          onClick={() => handleAction(appt.id, "Approved")}
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-xl text-sm flex items-center gap-1"
                        >
                          <CheckCircle className="w-4 h-4" /> Approve
                        </button>
                        <button
                          onClick={() => handleAction(appt.id, "Rejected")}
                          className="bg-red-100 text-red-700 px-3 py-1 rounded-xl text-sm flex items-center gap-1"
                        >
                          <XCircle className="w-4 h-4" /> Reject
                        </button>
                      </>
                    ) : (
                      <motion.span
                        key={appt.status}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-sm px-3 py-1 rounded-xl ${
                          appt.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {appt.status}
                      </motion.span>
                    )}
                  </div>
                </motion.li>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No appointments found.
              </p>
            )}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
