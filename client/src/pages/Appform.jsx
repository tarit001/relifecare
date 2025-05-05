import React from "react";
import { motion } from "framer-motion";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";

const Appform = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-gray-200 via-white to-gray-300 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Patient Appointment</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fill out the details to book an appointment
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email ID</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Aadhaar Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Gender</label>
              <select className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Blood Group</label>
              <select className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600">
                <option value="">Select</option>
                <option>A+</option>
                <option>B+</option>
                <option>AB+</option>
                <option>O+</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
                <option>O-</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Doctor Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Specialization </label>
            <textarea
              rows="3"
              className="w-full px-4 py-2 border rounded-xl bg-white dark:bg-slate-700 dark:border-slate-600"
              placeholder="e.g., Cardiologist, Orthopedic, ENT..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg transition-all"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Appform;
