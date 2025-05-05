import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgotPassword from './pages/ForgotPassword';
import Explore from './pages/ExploreUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';

import AppointmentLogin from './pages/AppointmentLogin';

import PatientDashboard from './pages/dashboard/patient-dashboard/PatientDashboard';
import FindHospital from './pages/FindHospital';

import AdminDashboard from './pages/dashboard/admin-dashboard/AdminDashboard';
import DoctorDashboard from './pages/dashboard/doctor-dashboard/Doctor';
import Appointment from './pages/dashboard/doctor-dashboard/appointment';
import Doctor from './pages/dashboard/admin-dashboard/Doctor';
import Patient from './pages/dashboard/admin-dashboard/Patient';
import AddDoctorForm from './pages/dashboard/admin-dashboard/Adddoctor';
import AddPatient from './pages/dashboard/admin-dashboard/Addpatient';
import Appform from './pages/Appform';

// Components
import Loading from './components/Loading';


//patient after login 
import Patient_Home from './pages/dashboard/patient-dashboard/patient-page/patient_Home';
import Patient_AboutUsPage from './pages/dashboard/patient-dashboard/patient-page/patient_AboutUs';
import Patient_AppointmentLogin from './pages/dashboard/patient-dashboard/patient-page/patient_AppointmentLogin';
import Patient_Contact from './pages/dashboard/patient-dashboard/patient-page/patient_Contact';
import Patient_Explore from './pages/dashboard/patient-dashboard/patient-page/patient_ExploreUs';
import Patient_FindHospital from './pages/dashboard/patient-dashboard/patient-page/patient_FindHospital';
import Patient_ForgotPassword from './pages/dashboard/patient-dashboard/patient-page/patient_ForgotPassword';
import Patient_Services from './pages/dashboard/patient-dashboard/patient-page/patient_Services';


//Admin after login
import Admin_Home from './pages/dashboard/admin-dashboard/admin-page/admin_Home';
import Admin_AboutUsPage from './pages/dashboard/admin-dashboard/admin-page/admin_AboutUs';
import Admin_Contact from './pages/dashboard/admin-dashboard/admin-page/admin_Contact';
import Admin_FindDoctor from './pages/dashboard/admin-dashboard/admin-page/admin_ExploreUs';
import Admin_FindHospital from './pages/dashboard/admin-dashboard/admin-page/admin_FindHospital';
import Admin_ForgotPassword from './pages/dashboard/admin-dashboard/admin-page/admin_ForgotPassword';
import Admin_Services from './pages/dashboard/admin-dashboard/admin-page/admin_Services';
import Admin_AppointmentLogin from './pages/dashboard/admin-dashboard/admin-page/admin_AppointmentLogin';


//Doctor After Login

import Doctor_Home from './pages/dashboard/doctor-dashboard/doctor-page/doctor_Home';
import Doctor_AboutUsPage from './pages/dashboard/doctor-dashboard/doctor-page/doctor_AboutUs';
import Doctor_Contact from './pages/dashboard/doctor-dashboard/doctor-page/doctor_Contact';
import Doctor_FindHospital from './pages/dashboard/doctor-dashboard/doctor-page/doctor_FindHospital';
import Doctor_FindDoctor from './pages/dashboard/doctor-dashboard/doctor-page/doctor_ExploreUs';
import Doctor_ForgotPassword from './pages/dashboard/doctor-dashboard/doctor-page/doctor_ForgotPassword';
import Doctor_Services from './pages/dashboard/doctor-dashboard/doctor-page/doctor_Services';
import Doctor_AppointmentLogin from './pages/dashboard/doctor-dashboard/doctor-page/doctor_AppointmentLogin';



const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loading on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust delay as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />                 {/* 🏠 Home page */}
        <Route path="/login" element={<Login />} />           {/* 🔐 Login page */}
        <Route path="/register" element={<Registration />} /> {/* 📝 Register page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment-form" element={<Appform />} />

        <Route path="/appointmentlogin" element={<AppointmentLogin />} />
       
        <Route path="/findhospital" element={<FindHospital />} />
        

        {/* After login */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/adddoctor" element={<AddDoctorForm />} />
        <Route path="/addpatient" element={<AddPatient />} />
        

        <Route path="/patient" element={<Patient />} />


        {/* patient after login */}

        <Route path="/patient/patient-home" element={<Patient_Home />} />
        <Route path="/patient/patient-aboutus" element={<Patient_AboutUsPage />} />
        <Route path="/patient/patient-Appoint" element={<Patient_AppointmentLogin />} />
        <Route path="/patient/patient-Contact" element={<Patient_Contact/>} />
        <Route path="/patient/patient-exploreus" element={<Patient_Explore/>} />
        <Route path="/patient/patient-findhospital" element={<Patient_FindHospital/>} />
        <Route path="/patient/patient-forgotpassword" element={<Patient_ForgotPassword/>} />
        <Route path="/patient/patient-services" element={<Patient_Services/>} />



        {/*Admin after login */}

        <Route path="/admin/admin-home" element={<Admin_Home/>} />
        <Route path="/admin/admin-aboutus" element={<Admin_AboutUsPage/>} />
        <Route path="/admin/admin-Appoint" element={<Admin_AppointmentLogin/>} />
        <Route path="/admin/admin-Contact" element={<Admin_Contact/>} />
        <Route path="/admin/admin-exploreus" element={<Admin_FindDoctor/>} />
        <Route path="/admin/admin-findhospital" element={<Admin_FindHospital/>} />
        <Route path="/admin/admin-forgotpassword" element={<Admin_ForgotPassword/>} />
        <Route path="/admin/admin-services" element={<Admin_Services/>} />

        {/*Doctor after login */}


        <Route path="/doctor/doctor-home" element={<Doctor_Home/>} />
        <Route path="/doctor/doctor-aboutus" element={<Doctor_AboutUsPage/>} />
        <Route path="/doctor/doctor-Contact" element={<Doctor_Contact/>} />
        <Route path="/doctor/doctor-findhospital" element={<Doctor_FindHospital/>} />
        <Route path="/doctor/doctor-exploreus" element={<Doctor_FindDoctor/>} />
        <Route path="/doctor/doctor-forgotpassword" element={<Doctor_ForgotPassword/>} />
        <Route path="/doctor/doctor-services" element={<Doctor_Services/>} />
        <Route path="/doctor/doctor-Appoint" element={<Doctor_AppointmentLogin/>} />

      
    
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
