import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import axios from '../api';

const ResetPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // ✅ Silent redirect if user tries to access this route directly
  useEffect(() => {
    if (!state?.email) {
      navigate('/forgot-password');
    }
  }, [state, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const res = await axios.post('/forgot/reset-password', {
        email: state.email,
        newPassword: password,
      });
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <Navbar />
      <div className="flex justify-center items-center pt-32 pb-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-lg shadow-xl w-full max-w-lg glass dark:glass-dark"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Reset New Password</h2>
          <input
            type="password"
            value={password}
            placeholder="New Password"
            className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent mb-4"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm New Password"
            className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent mb-4"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition mt-4"
          >
            Reset Password
          </button>
        </form>
      </div>
      <Chatbot />
    </div>
  );
};

export default ResetPassword;
