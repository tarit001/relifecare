import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // go back to the previous page
  };

  const handleGoHome = () => {
    navigate('/'); // go to home page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">🚫 Unauthorized Access</h1>
      <p className="mb-8 text-center max-w-md">
        You do not have permission to access this page. Please check your account role or contact support if you think this is a mistake.
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleGoBack}
          className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded"
        >
          Go Back
        </button>
        <button
          onClick={handleGoHome}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
