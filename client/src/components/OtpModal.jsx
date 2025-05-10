import React, { useState, useEffect } from 'react';

const OTPModal = ({ isOpen, onClose, onVerify, onResend, email }) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setOtp('');
      setTimer(60);
      setIsResendDisabled(true);
    }
  }, [isOpen]);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(otp);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h3 className="text-lg font-bold mb-4">Enter OTP</h3>
        <p className="text-sm mb-4">OTP sent to <strong>{email}</strong></p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="p-3 w-full mb-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            placeholder="Enter 6-digit OTP"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition mb-3"
          >
            Verify OTP
          </button>
        </form>
        <button
          onClick={onResend}
          disabled={isResendDisabled}
          className={`w-full ${
            isResendDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          } text-white font-semibold py-2 rounded-lg transition`}
        >
          {isResendDisabled ? `Resend OTP in ${timer}s` : 'Resend OTP'}
        </button>
      </div>
    </div>
  );
};

export default OTPModal;
