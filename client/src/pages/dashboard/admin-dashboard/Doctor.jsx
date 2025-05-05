import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import Sidebar from "./Sidebar";

const doctors = [
  {
    id: '#D12334',
    name: 'Dr. Sarah Ingram',
    number: '+1403-273-8767',
    department: 'Emergency',
    timing: '11:30 - 2:30',
    specialty: 'Gynecologist',
    status: 'Active',
  },
  {
    id: '#D12321',
    name: 'Dr. Lisa Smith',
    number: '+1503-273-4323',
    department: 'Surgery',
    timing: '11:30 - 2:30',
    specialty: 'Cardiologist',
    status: 'Active',
  },
  {
    id: '#D2365',
    name: 'Dr. Jay Sharma',
    number: '+1503-273-8767',
    department: 'Emergency',
    timing: '11:30 - 2:30',
    specialty: 'Orthopedic',
    status: 'Active',
  },
  {
    id: '#D2389',
    name: 'Dr. Sanjay Gupta',
    number: '+1210-273-2342',
    department: 'Emergency',
    timing: '11:30 - 2:30',
    specialty: 'Pediatrician',
    status: 'Inactive',
  },
];

const DoctorList = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar */}
      <Sidebar/>


      {/* Main Content */}
      <motion.div
        className="flex-1 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Doctors List</h1>
          <Link to="/adddoctor" className="hover:text-blue-600 font-medium text-lg"><button className="px-4 py-2 rounded-full bg-indigo-600 text-white shadow hover:bg-indigo-700 transition">+Add new Doctor</button></Link>
        </div>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Doctor ID</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Doctor Name</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Number</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Department</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Visit Timing</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Speciality</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Status</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{doc.id}</td>
                  <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{doc.name}</td>
                  <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{doc.number}</td>
                  <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{doc.department}</td>
                  <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{doc.timing}</td>
                  <td className="p-4 text-sm text-gray-700 dark:text-gray-200">{doc.specialty}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        doc.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-200'
                      }`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-4 space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          Showing 1 to 10 of 57 entries
        </div>
      </motion.div>
    </div>
  );
};

export default DoctorList;
