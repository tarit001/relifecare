import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: new password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [timeLeft, setTimeLeft] = useState(120);
  const [otpExpired, setOtpExpired] = useState(false);

  // Timer Logic
  useEffect(() => {
    let timer;
    if (step === 2 && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && step === 2) {
      setOtpExpired(true);
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      if (!/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/.test(email)) {
        alert('Please enter a valid Gmail or Yahoo email address.');
        return;
      }
      alert(`📧 OTP has been sent to: ${email}`);
      setStep(2);
      setTimeLeft(120);
      setOtpExpired(false);
    } else if (step === 2) {
      if (otp.length !== 6) {
        alert('Please enter a valid 6-digit OTP.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (newPassword.length < 6) {
        alert('Password must be at least 6 characters.');
        return;
      }
      alert('✅ Password reset successful!');
      setEmail('');
      setOtp('');
      setNewPassword('');
      setStep(1);
      setTimeLeft(120);
      setOtpExpired(false);
    }
  };

  const handleResendOtp = () => {
    alert(`🔁 New OTP has been sent to: ${email}`);
    setOtp('');
    setTimeLeft(120);
    setOtpExpired(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <Navbar />
      <div className="flex justify-center items-center pt-32 pb-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-lg shadow-xl w-full max-w-lg glass dark:glass-dark"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            {step === 1 && 'Forgot Password'}
            {step === 2 && 'Enter OTP'}
            {step === 3 && 'Reset New Password'}
          </h2>

          {step === 1 && (
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email (gmail/yahoo)"
              className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent mb-4"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                name="otp"
                value={otp}
                placeholder="Enter 6-digit OTP"
                className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent mb-4"
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              {otpExpired ? (
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
              ) : (
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2">
                  ⏳ Time left: <span className="font-bold">{formatTime(timeLeft)}</span>
                </p>
              )}
            </>
          )}

          {step === 3 && (
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              placeholder="Enter new password"
              className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent mb-4"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          )}

          {(step === 1 || step === 2 || step === 3) && (
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition mt-4"
            >
              {step === 1 && 'Send OTP'}
              {step === 2 && 'Verify OTP'}
              {step === 3 && 'Reset Password'}
            </button>
          )}

          {step === 1 && (
            <p className="mt-4 text-center text-sm">
              Back to{' '}
              <a href="/login" className="text-blue-600 hover:underline">Login</a>
            </p>
          )}
        </form>
      </div>
      <Chatbot />
    </div>
  );
};

export default ForgotPassword;
