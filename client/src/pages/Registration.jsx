import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const Registration = () => {
  const [selectedRole, setSelectedRole] = useState('patient');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    adminId: '',
    officialEmail: '',
    doctorId: ''
  });

  // Fetch environment variables, add fallback values if needed
const adminMasterIds = (process.env.REACT_APP_ADMIN_MASTER_ID || '').split(',').map(id => id.trim()).filter(Boolean);
const adminMasterEmails = (process.env.REACT_APP_ADMIN_MASTER_EMAIL || '').split(',').map(email => email.trim()).filter(Boolean);
const doctorMasterIds = (process.env.REACT_APP_DOCTOR_MASTER_ID || '').split(',').map(id => id.trim()).filter(Boolean);

  // Debug log the variables
console.log("📦 Raw ENV Admin IDs:", process.env.REACT_APP_ADMIN_MASTER_ID);
console.log("📦 Raw ENV Admin Emails:", process.env.REACT_APP_ADMIN_MASTER_EMAIL);
console.log("📦 Raw ENV Doctor IDs:", process.env.REACT_APP_DOCTOR_MASTER_ID);


  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      alert("Mobile number must be 10 digits.");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/.test(form.email)) {
      alert("Email must be a valid Gmail or Yahoo address.");
      return;
    }

    // Admin validations
    if (selectedRole === "admin") {
      if (!form.adminId || !form.officialEmail) {
        alert("Please complete Admin fields.");
        return;
      }
      if (!adminMasterIds.includes(form.adminId)) {
        alert("❌ Admin ID not found in list: " + form.adminId);
        return;
      }
      if (!adminMasterEmails.includes(form.officialEmail)) {
        alert("❌ Invalid Official Email.");
        return;
      }
      if (!/^[a-zA-Z0-9._%+-]+@relifehospital\.com$/.test(form.officialEmail)) {
        alert("Official Email must be from relifehospital.com");
        return;
      }
    }

    // Doctor validation
    if (selectedRole === "doctor") {
      if (!form.doctorId || !doctorMasterIds.includes(form.doctorId)) {
        alert("Invalid or missing Doctor ID.");
        return;
      }
    }

    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      mobile: form.mobile,
      dob: form.dob,
      gender: form.gender,
      role: selectedRole,
      password: form.password,
    };

    if (selectedRole === "admin") {
      payload.adminId = form.adminId;
      payload.officialEmail = form.officialEmail;
    }
    if (selectedRole === "doctor") {
      payload.doctorId = form.doctorId;
    }

    try {
      const response = await api.post('/api/auth/register', payload);
      if (response.status === 201) {
        alert(`🎉 Registration successful as ${selectedRole}! Please login.`);
        window.location.href = '/login';
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Registration failed.');
    }
  };

  // Debug logs
  useEffect(() => {
    console.log("🧾 Form Values:", form);
    console.log("👮 Admin IDs:", adminMasterIds);
    console.log("📧 Admin Emails:", adminMasterEmails);
    console.log("🩺 Doctor IDs:", doctorMasterIds);
  }, [form]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <Navbar />
      <div className="flex justify-center items-center pt-20 pb-20 px-4">
        <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-lg shadow-xl w-full max-w-lg glass dark:glass-dark">
          <h2 className="text-2xl font-bold text-center mb-4">Register as</h2>

          {/* Role selection buttons */}
          <div className="flex justify-center mb-6">
            {['patient', 'doctor', 'admin'].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 mx-2 rounded-lg ${selectedRole === role ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} transition`}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email (gmail/yahoo)"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent col-span-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              maxLength="10"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="dob"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />

            <div className="relative col-span-2">
              <select
                name="gender"
                className="p-3 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-slate-800/60 text-gray-800 dark:text-gray-100 appearance-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <ChevronDownIcon className="w-5 h-5 absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>

            {/* Admin-specific fields */}
            {selectedRole === "admin" && (
              <>
                <input
                  type="text"
                  name="adminId"
                  placeholder="Admin ID"
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="officialEmail"
                  placeholder="Official Mail (relifehospital)"
                  className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {/* Doctor-specific fields */}
            {selectedRole === "doctor" && (
              <input
                type="text"
                name="doctorId"
                placeholder="Doctor ID"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-6 p-3 rounded-lg bg-blue-600 text-white text-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Register
          </button>
        </form>
      </div>
      <Chatbot />
    </div>
  );
};

export default Registration;
