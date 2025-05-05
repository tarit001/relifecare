import React from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import Sidebar from "./Sidebar";

const PatientList = () => {
  const patients = [
    { id: '#Pat9878', name: 'Ashley Fanning', number: '+1403-273-8767', firstVisit: '10-Jan-2021', doctor: 'Dr. Sarah Ingram', condition: 'Arm Injury', visits: 12 },
    { id: '#Pat9877', name: 'Samuels Wade', number: '+1503-273-4323', firstVisit: '12-Jan-2021', doctor: 'Dr. Lisa Smith', condition: 'Malaria', visits: 5 },
    { id: '#Pat9876', name: 'Glenn Philips', number: '+1503-273-8767', firstVisit: '22-Dec-2020', doctor: 'Dr. Jay Sharma', condition: 'Head injury', visits: 2 },
    { id: '#Pat9875', name: 'Tori Williams', number: '+1210-273-2342', firstVisit: '15-Jan-2021', doctor: 'Dr. Sanjay Gupta', condition: 'Viral Fever', visits: 11 },
    { id: '#Pat9874', name: 'Maddy Right', number: '+1403-273-8767', firstVisit: '08-Feb-2021', doctor: 'Dr. Ankita Seth', condition: 'Leg Injury', visits: 32 },
    { id: '#Pat9873', name: 'Emily Mcallister', number: '+1210-273-2342', firstVisit: '08-Feb-2021', doctor: 'Dr. Andrews', condition: 'Arm Injury', visits: 1 },
    { id: '#Pat9872', name: 'Alison Taylor', number: '+1503-273-4323', firstVisit: '08-Feb-2021', doctor: 'Dr. Mia Smith', condition: 'Head Injury', visits: 17 },
    { id: '#Pat9871', name: 'Carmella White', number: '+1403-273-8767', firstVisit: '08-Feb-2021', doctor: 'Dr. Katie White', condition: 'Malaria', visits: 9 },
  ];

  return (
    <div className="flex h-screen dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar/>
      {/* Patient List */}
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Patients List</h2>
          <div className="flex items-center">
          <Link to="/addpatient" className="hover:text-blue-600 font-medium text-lg"><button className="text-white bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700">+ Add New Patient</button></Link>
          </div>
        </div>
        <div className="overflow-x-auto bg-white shadow rounded-lg dark:bg-gray-700">
          <table className="w-full table-auto">
            <thead className="bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-white">
              <tr>
                <th className="py-3 px-4 text-left">Patient ID</th>
                <th className="py-3 px-4 text-left">Patient Name</th>
                <th className="py-3 px-4 text-left">Number</th>
                <th className="py-3 px-4 text-left">First Visit</th>
                <th className="py-3 px-4 text-left">Doctor</th>
                <th className="py-3 px-4 text-left">Condition</th>
                <th className="py-3 px-4 text-left">No Of Visits</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{patient.id}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{patient.name}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{patient.number}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{patient.firstVisit}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{patient.doctor}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{patient.condition}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{patient.visits}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button className="text-yellow-500 hover:text-yellow-600">
                      <FaPen />
                    </button>
                    <button className="text-red-500 hover:text-red-600">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">Showing 1 to 10 of 57 entries</p>
          <div className="flex space-x-2">
            <button className="text-gray-600 py-2 px-4 border rounded-md dark:text-gray-300">Previous</button>
            <button className="text-gray-600 py-2 px-4 border rounded-md dark:text-gray-300">1</button>
            <button className="text-gray-600 py-2 px-4 border rounded-md dark:text-gray-300">2</button>
            <button className="text-gray-600 py-2 px-4 border rounded-md dark:text-gray-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
