import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Doctor_Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/60 dark:bg-slate-700/60 backdrop-blur-lg shadow-lg rounded-full px-6 py-3 z-50 flex items-center justify-between w-[90%] max-w-6xl glass dark:glass-dark">
      <div className="flex items-center gap-2">
        <i className="fas fa-hospital text-blue-600 text-xl"></i>
        <span className="font-bold text-lg"> <Link to="/" className="hover:text-blue-600 transition font-medium">Relife Health</Link></span>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-blue-600 transition font-medium">Home</Link>
        <Link to="/login" className="hover:text-blue-600 transition font-medium">Login</Link>
        <Link to="/register" className="hover:text-blue-600 transition font-medium">Register</Link>
        <Link to="/contact" className="hover:text-blue-600 transition font-medium">Contact</Link>
        <Link to="/patient/patient-exploreus" className="hover:text-blue-600 transition font-medium">Appointment</Link>
        <Link to="/doctor-dashboard" className="hover:text-blue-600 transition font-medium">Doctor</Link>
        <Link to="/admin-dashboard" className="hover:text-blue-600 transition font-medium">Admin</Link>
        <Link to="/patient-dashboard" className="hover:text-blue-600 transition font-medium">Patient</Link>

        {/* <Link to="/patient-dashboard" className="hover:text-blue-600 transition font-medium">PatientDashboard</Link> */}


        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl transition duration-300 hover:text-yellow-400"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Doctor_Navbar;
