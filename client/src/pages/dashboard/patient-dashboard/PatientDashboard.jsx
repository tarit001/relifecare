import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserInjured,
  FaFileMedical,
  FaHeartbeat,
  FaCalendarCheck,
  FaHome,
} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  const schedule = [
    { date: 'May 1, 2025', time: '10:00 AM', doctor: 'Dr. Smith' },
    { date: 'May 5, 2025', time: '2:00 PM', doctor: 'Dr. Jane' },
  ];

  const prescriptions = [
    { date: 'April 20, 2025', details: 'Paracetamol 500mg - 2 times a day' },
    { date: 'April 15, 2025', details: 'Cough Syrup - 3 times a day' },
  ];

  const healthStats = {
    bloodPressure: '120/80 mmHg',
    heartRate: '72 bpm',
    glucoseLevel: '95 mg/dL',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 p-6 shadow-lg bg-gradient-to-br from-blue-200 via-white to-gray-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 flex flex-col justify-between">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
            alt="Patient"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-center font-semibold text-lg">John Doe</h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">Patient ID: P123456</p>

          <div className="mt-8 space-y-4">
            <Link to="/patient/patient-home" className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-600 text-lg font-medium">
              <FaHome />
              Home
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 text-red-600 justify-left mt-8">
          <FiLogOut />
          <Link to="/" className="hover:text-blue-600 font-medium text-lg">Logout</Link>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="flex-1 p-8 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Schedule */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border dark:border-slate-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaUserInjured className="text-3xl" />
              <h2 className="text-xl font-semibold">Your Schedule</h2>
            </div>
            <ul className="text-sm space-y-3">
              {schedule.map((item, index) => (
                <li key={index} className="p-3 bg-blue-50 dark:bg-slate-700 rounded-xl">
                  <p><strong>Date:</strong> {item.date}</p>
                  <p><strong>Time:</strong> {item.time}</p>
                  <p><strong>Doctor:</strong> {item.doctor}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Prescriptions */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border dark:border-slate-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaFileMedical className="text-3xl" />
              <h2 className="text-xl font-semibold">Prescriptions</h2>
            </div>
            <ul className="text-sm space-y-3">
              {prescriptions.map((item, index) => (
                <li key={index} className="p-3 bg-blue-50 dark:bg-slate-700 rounded-xl">
                  <p><strong>Date:</strong> {item.date}</p>
                  <p>{item.details}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Health Stats */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border dark:border-slate-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaHeartbeat className="text-3xl" />
              <h2 className="text-xl font-semibold">Health Stats</h2>
            </div>
            <ul className="text-sm space-y-3 p-2 bg-blue-50 dark:bg-slate-700 rounded-xl">
              <li><strong>Blood Pressure:</strong> {healthStats.bloodPressure}</li>
              <li><strong>Heart Rate:</strong> {healthStats.heartRate}</li>
              <li><strong>Glucose Level:</strong> {healthStats.glucoseLevel}</li>
            </ul>
          </motion.div>

          {/* Appointment Reminder */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border dark:border-slate-700"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaCalendarCheck className="text-3xl" />
              <h2 className="text-xl font-semibold">Next Appointment</h2>
            </div>
            {schedule[0] ? (
              <div className="text-sm space-y-2 p-3 bg-blue-50 dark:bg-slate-700 rounded-xl">
                <p><strong>Date:</strong> {schedule[0].date}</p>
                <p><strong>Time:</strong> {schedule[0].time}</p>
                <p><strong>With:</strong> {schedule[0].doctor}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-400">No upcoming appointments.</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PatientDashboard;
