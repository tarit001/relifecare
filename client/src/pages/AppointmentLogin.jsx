import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';

const Appointment = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token'); // Assume token stored on login

  useEffect(() => {
    if (!isLoggedIn) {
      const timeout = setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds

      return () => clearTimeout(timeout);
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
        {!isLoggedIn ? (
          <>
            <h1 className="text-3xl font-bold mb-4">Login Required</h1>
            <p className="text-lg mb-6">Please login to book an appointment.</p>
            <div className="animate-bounce text-blue-600 text-3xl">
              <i className="fas fa-sign-in-alt"></i>
            </div>
          </>
        ) : (
          <h1 className="text-3xl font-bold mb-4">Appointment Booking Coming Soon</h1>
        )}
      </div>
      

      <Chatbot />
    </div>
  );
};

export default Appointment;
