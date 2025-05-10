import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import OTPModal from '../components/OtpModal';
import doctorImage from '../assets/doctor.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: '',
  });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password || !credentials.role) {
      alert('Please fill in all fields including role.');
      return;
    }

    try {
      const response = await api.post('/api/auth/login', credentials);

      if (response.status === 200) {
        const { email } = credentials;
        setCurrentEmail(email);
        setShowOtpModal(true); // Open OTP popup after login step 1
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      alert(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  const verifyOtp = async (otp) => {
    try {
      const res = await api.post('/api/auth/verify-otp', { email: currentEmail, otp });
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', user.role);
        alert(`🎉 Login successful as ${user.role}`);
        setShowOtpModal(false);
        // Navigate to dashboard
        switch (user.role) {
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'doctor':
            navigate('/doctor-dashboard');
            break;
          case 'patient':
            navigate('/patient-dashboard');
            break;
          default:
            alert('Unknown role. Please contact support.');
            localStorage.clear();
            navigate('/login');
        }
      }
    } catch (error) {
      console.error('❌ OTP verification error:', error);
      alert(error.response?.data?.message || 'Invalid OTP. Please try again.');
    }
  };

  const resendOtp = async () => {
    try {
      await api.post('/api/auth/resend-otp', { email: currentEmail });
      alert('✅ OTP resent successfully!');
    } catch (error) {
      console.error('❌ Resend OTP error:', error);
      alert(error.response?.data?.message || 'Failed to resend OTP.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center pt-32 pb-20 px-4 gap-10">
        <div className="hidden md:block w-full max-w-md animate-float">
          <img src={doctorImage} alt="Doctor" className="w-full h-auto object-contain" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-lg shadow-xl w-full max-w-lg glass dark:glass-dark"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={credentials.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4 p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={credentials.password}
            required
          />
          <div className="relative">
            <select
              name="role"
              className="p-3 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-slate-800/60 text-gray-800 dark:text-gray-100 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              onChange={handleChange}
              value={credentials.role}
              required
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
            <ChevronDownIcon className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="p-3 text-sm text-right mb-4">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Login
          </button>

          <p className="mt-4 text-center text-sm">
            Don’t have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">Register</a>
          </p>
        </form>
      </div>

      <Chatbot />

      {/* OTP Modal */}
      <OTPModal
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        onVerify={verifyOtp}
        onResend={resendOtp}
        email={currentEmail}
      />
    </div>
  );
};

export default Login;
