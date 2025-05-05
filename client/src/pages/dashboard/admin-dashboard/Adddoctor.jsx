import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaLock,
  FaPhone,
  FaEnvelope,
  FaTransgender,
  FaHospitalAlt,
  FaClock,
  FaStethoscope,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCamera,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./Sidebar";

const AddDoctorForm = () => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    specialization: "",
    department: "",
    visitTiming: "",
    dob: "",
    address: "",
    status: "Active",
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      setSuccessMessage("Doctor added successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        specialization: "",
        department: "",
        visitTiming: "",
        dob: "",
        address: "",
        status: "Active",
      });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.password) errors.password = "Password is required";
    if (!data.dob) errors.dob = "Date of birth is required";
    return errors;
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar/>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-4xl mx-auto mt-6"
      >
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">Add Doctor</h2>
        {successMessage && (
          <div className="bg-blue-500 text-white p-3 mb-4 rounded-md">{successMessage}</div>
        )}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Name *</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaUserMd className="text-blue-600 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className={`w-full outline-none bg-transparent ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } text-gray-800 dark:text-white dark:border-gray-600`}
              />
            </div>
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Email *</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaEnvelope className="text-blue-600 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full outline-none bg-transparent ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } text-gray-800 dark:text-white dark:border-gray-600`}
              />
            </div>
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Password *</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaLock className="text-blue-600 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`w-full outline-none bg-transparent ${
                  formErrors.password ? "border-red-500" : "border-gray-300"
                } text-gray-800 dark:text-white dark:border-gray-600`}
              />
            </div>
            {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Phone</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaPhone className="text-blue-600 mr-2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full outline-none bg-transparent border-gray-300 text-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 bg-transparent text-gray-800 dark:text-white dark:border-gray-600"
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Specialization */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Specialization</label>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 bg-transparent text-gray-800 dark:text-white dark:border-gray-600"
            >
              <option>Select</option>
              <option>Gynecologist</option>
              <option>Cardiologist</option>
              <option>Orthopedic</option>
              <option>Pediatrician</option>
            </select>
          </div>

          {/* Department */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 bg-transparent text-gray-800 dark:text-white dark:border-gray-600"
            >
              <option>Select</option>
              <option>Emergency</option>
              <option>Surgery</option>
            </select>
          </div>

          {/* Visit Timing */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Visit Timing</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaClock className="text-blue-600 mr-2" />
              <input
                type="text"
                name="visitTiming"
                value={formData.visitTiming}
                onChange={handleInputChange}
                placeholder="e.g., 11:30 - 2:30"
                className="w-full outline-none bg-transparent border-gray-300 text-gray-800 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Date of Birth *</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaCalendarAlt className="text-blue-600 mr-2" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className={`w-full outline-none bg-transparent ${
                  formErrors.dob ? "border-red-500" : "border-gray-300"
                } text-gray-800 dark:text-white dark:border-gray-600`}
              />
            </div>
            {formErrors.dob && <p className="text-red-500 text-sm">{formErrors.dob}</p>}
          </div>

          {/* Address */}
          <div className="relative col-span-1 md:col-span-2">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Address</label>
            <div className="flex items-start border rounded-md px-3 py-2">
              <FaMapMarkerAlt className="text-blue-600 mr-2 mt-1" />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                rows={2}
                className="w-full outline-none resize-none bg-transparent border-gray-300 text-gray-800 dark:text-white dark:border-gray-600"
              ></textarea>
            </div>
          </div>

          {/* Status */}
          <div className="relative">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Status *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 bg-transparent text-gray-800 dark:text-white dark:border-gray-600"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Photo Upload */}
          <div className="relative col-span-1 md:col-span-2">
            <label className="font-semibold text-gray-800 dark:text-gray-100">Photo</label>
            <div className="border-dashed border-2 border-gray-300 rounded-md flex flex-col items-center justify-center p-6 text-center">
              <FaCamera className="text-xl text-gray-500 mb-2" />
              <input
                type="file"
                onChange={handlePhotoUpload}
                className="hidden"
                id="upload"
              />
              <label
                htmlFor="upload"
                className="text-sm text-blue-600 cursor-pointer"
              >
                Drag and drop a file here or click
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 col-span-1 md:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddDoctorForm;
