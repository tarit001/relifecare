import React from 'react';
import { FaHeartbeat, FaStethoscope, FaFlask, FaShieldAlt, FaPills, FaAmbulance } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 animate__animated animate__fadeIn animate__delay-1s">
          Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark hover:scale-105 transform transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s">
            <FaAmbulance className="text-blue-600 text-4xl mb-4 animate__animated animate__bounceIn animate__delay-3s" />
            <h2 className="text-xl font-semibold mb-2">24/7 Emergency Care</h2>
            <p className="text-sm">Round-the-clock emergency services with quick response and expert doctors.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark hover:scale-105 transform transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s">
            <FaStethoscope className="text-blue-600 text-4xl mb-4 animate__animated animate__bounceIn animate__delay-4s" />
            <h2 className="text-xl font-semibold mb-2">Online Appointments</h2>
            <p className="text-sm">Book appointments online with your preferred doctor anytime, anywhere.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark hover:scale-105 transform transition-all duration-300 animate__animated animate__fadeIn animate__delay-5s">
            <FaFlask className="text-blue-600 text-4xl mb-4 animate__animated animate__bounceIn animate__delay-6s" />
            <h2 className="text-xl font-semibold mb-2">Diagnostic Lab</h2>
            <p className="text-sm">Access to high-quality medical tests and diagnostics for accurate health checks.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark hover:scale-105 transform transition-all duration-300 animate__animated animate__fadeIn animate__delay-7s">
            <FaHeartbeat className="text-blue-600 text-4xl mb-4 animate__animated animate__bounceIn animate__delay-8s" />
            <h2 className="text-xl font-semibold mb-2">Specialist Consultations</h2>
            <p className="text-sm">Experienced specialists available for every department including cardio, ortho, neuro and more.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark hover:scale-105 transform transition-all duration-300 animate__animated animate__fadeIn animate__delay-9s">
            <FaShieldAlt className="text-blue-600 text-4xl mb-4 animate__animated animate__bounceIn animate__delay-10s" />
            <h2 className="text-xl font-semibold mb-2">Health Check Packages</h2>
            <p className="text-sm">Affordable health check-up packages tailored for all age groups.</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark hover:scale-105 transform transition-all duration-300 animate__animated animate__fadeIn animate__delay-11s">
            <FaPills className="text-blue-600 text-4xl mb-4 animate__animated animate__bounceIn animate__delay-12s" />
            <h2 className="text-xl font-semibold mb-2">Pharmacy</h2>
            <p className="text-sm">Well-stocked pharmacy with doorstep delivery of medicines.</p>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
