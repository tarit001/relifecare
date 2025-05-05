import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaStethoscope, FaHospitalAlt, FaCalendarCheck } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";


const FloatingActionButtons = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      const toggleVisibility = () => {
        setShow(window.scrollY > 400);
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    } else {
      setShow(true);
    }
  }, [isHomePage]);

  return (
    <div className={`fixed top-1/3 left-4 z-50 transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="flex flex-col items-start gap-4">

        {/* Book Appointment */}
        <Link
          to="/appointmentlogin"
          className="group flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-500 hover:scale-105"
        >
          <FaCalendarCheck className="text-xl mr-2" />
          <span className="font-semibold hidden group-hover:inline transition duration-300">
            Book Appointment
          </span>
        </Link>

        {/* Find Hospital */}
        <Link
          to="/findhospital"
          className="group flex items-center bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-500 hover:scale-105"
        >
          <FaHospitalAlt className="text-xl mr-2" />
          <span className="font-semibold hidden group-hover:inline transition duration-300">
            Find Hospital
          </span>
        </Link>

        {/* Explore Us */}
        <Link
          to="/explore"
          className="group flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-500 hover:scale-105"
        >
          <MdHealthAndSafety className="text-xl mr-2" />
          <span className="font-semibold hidden group-hover:inline transition duration-300">
            Explore Us
          </span>
        </Link>

        {/* Doctors */}
        <Link
          to="/doctors"
          className="group flex items-center bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-500 hover:scale-105"
        >
          <FaStethoscope className="text-xl mr-2" />
          <span className="font-semibold hidden group-hover:inline transition duration-300">
            Doctors
          </span>
        </Link>

        {/* Search */}
        <Link
          to="/search"
          className="group flex items-center bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-500 hover:scale-105"
        >
          <FaSearch className="text-xl mr-2" />
          <span className="font-semibold hidden group-hover:inline transition duration-300">
            Search
          </span>
        </Link>

      </div>
    </div>
  );
};

export default FloatingActionButtons;
