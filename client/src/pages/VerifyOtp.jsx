import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(120);
  const [otpExpired, setOtpExpired] = useState(false);
  const email = localStorage.getItem('forgotEmail');

  // Timer logic
  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      setOtpExpired(true);
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        email,
        otp
      });

      console.log('✅ OTP verified:', response.data);
      alert('✅ OTP Verified!');
      window.location.href = '/reset-password';
    } catch (error) {
      console.error('❌ API error:', error);
      alert(error.response?.data?.message || 'Failed to verify OTP');
    }
  };

  const handleResendOtp = async () => {
    alert(`🔁 New OTP has been sent to: ${email}`);
    setOtp('');
    setTimeLeft(120);
    setOtpExpired(false);

    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      console.log('🔄 New OTP sent!');
    } catch (error) {
      console.error('❌ Resend error:', error);
      alert(error.response?.data?.message || 'Failed to resend OTP');
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
          <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>

          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent mb-4"
            required
          />

          {otpExpired && (
            <div className="flex flex-col items-center gap-2">
              <p className="text-red-500 text-sm text-center">OTP expired! 🔥</p>
              <button
                type="button"
                onClick={handleResendOtp}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition"
              >
                Resend OTP
              </button>
            </div>
          )}

          {!otpExpired && (
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2">
              ⏳ Time left: <span className="font-bold">{formatTime(timeLeft)}</span>
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition mt-4"
          >
            Verify OTP
          </button>
        </form>
      </div>
      <Chatbot />
    </div>
  );
};

export default VerifyOtp;
