import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';

const Doctor_Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-100 to-white dark:from-slate-900 dark:to-slate-800 transition-all duration-300">
      <div className="relative flex flex-col items-center gap-4 animate-bounce">
        <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
          <FaHeartbeat className="text-3xl animate-pulse" />
        </div>
        <p className="text-base font-semibold text-blue-700 dark:text-white">Loading... Please wait</p>
      </div>
    </div>
  );
};

export default Doctor_Loading;
