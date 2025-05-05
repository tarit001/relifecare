import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./Sidebar";


const AddPatient = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    number: "",
    firstVisit: "",
    doctor: "",
    condition: "",
    visits: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the form data
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar/>
      {/* Add Patient Form */}
      <div className="flex-1 p-8">
        <div className="p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-6">Add Patient</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  id="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstVisit" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  First Visit Date
                </label>
                <input
                  type="date"
                  name="firstVisit"
                  id="firstVisit"
                  value={formData.firstVisit}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Doctor
                </label>
                <input
                  type="text"
                  name="doctor"
                  id="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Condition
                </label>
                <input
                  type="text"
                  name="condition"
                  id="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="visits" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Number of Visits
                </label>
                <input
                  type="number"
                  name="visits"
                  id="visits"
                  value={formData.visits}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="reset"
                className="py-2 px-4 bg-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Reset
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
