import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaShareAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Dynamic hospital list with correct image loading
const hospitals = [
  {
    name: 'ReLife Adlux Hospital',
    address: 'Cable Junction, Ernakulam District, National Highway 47, Karukutty, Cochin, Kerala - 683576',
    phone: '+91 484 7185000',
    directions: '#',
    website: '#',
    image: require('../admin-assets/hospital images/hospital.png'),
  },
  {
    name: 'ReLife BGS Hospitals, Mysore',
    address: 'ReLife BGS Hospital, Adichuchanagiri Road, Kuvempunagar, Mysore, Karnataka - 570023',
    phone: '+0821-2568888',
    directions: '#',
    website: '#',
    image: require('../admin-assets/hospital images/hospital1.png'),
  },
  {
    name: 'ReLife Cancer Centre Bhat',
    address: 'Block A. ReLife Hospitals,1a, Bhat Gidc Industrial Estate, Gandhinagar, Gujarat - 382428',
    phone: '079 66736673',
    directions: '#',
    website: '#',
    image: require('../admin-assets/hospital images/hospital11.png'),
  },
];

const Admin_FindHospital = () => {
  return (
    <div className="py-10 px-4 md:px-20 bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">All Hospitals ({hospitals.length})</h2>
      <div className="space-y-6">
        {hospitals.map((hospital, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:scale-[1.01] transition"
          >
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full md:w-60 h-40 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{hospital.name}</h3>
              <p className="text-sm flex items-center gap-2 mt-1">
                <FaMapMarkerAlt className="text-blue-600" /> {hospital.address}
              </p>
              <p className="text-sm flex items-center gap-2 mt-1">
                <FaPhoneAlt className="text-blue-600" /> {hospital.phone}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                <a href={hospital.directions} className="text-blue-600 hover:underline">
                  Get Hospital Directions
                </a>
                {hospital.website && (
                  <a
                    href={hospital.website}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 mt-4 md:mt-0">
              <button className="text-gray-500 hover:text-blue-600 text-xl">
                <FaShareAlt />
              </button>
              <div className="flex gap-2">
                <Link
                  to="/hospital-details"
                  className="border px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  Know More
                </Link>
                <Link
                  to="/appointment"
                  className="border px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin_FindHospital;
