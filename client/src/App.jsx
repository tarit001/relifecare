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
import FindHospital from './pages/FindHospital';
import Appform from './pages/Appform';
import Unauthorized from './pages/Unauthorized';

// Dashboards
import PatientDashboard from './pages/dashboard/patient-dashboard/PatientDashboard';
import AdminDashboard from './pages/dashboard/admin-dashboard/AdminDashboard';
import DoctorDashboard from './pages/dashboard/doctor-dashboard/Doctor';
import Appointment from './pages/dashboard/doctor-dashboard/appointment';
import Doctor from './pages/dashboard/admin-dashboard/Doctor';
import Patient from './pages/dashboard/admin-dashboard/Patient';
import AddDoctorForm from './pages/dashboard/admin-dashboard/Adddoctor';
import AddPatient from './pages/dashboard/admin-dashboard/Addpatient';

// Components
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';

// Patient pages
import Patient_Home from './pages/dashboard/patient-dashboard/patient-page/patient_Home';
import Patient_AboutUsPage from './pages/dashboard/patient-dashboard/patient-page/patient_AboutUs';
import Patient_AppointmentLogin from './pages/dashboard/patient-dashboard/patient-page/patient_AppointmentLogin';
import Patient_Contact from './pages/dashboard/patient-dashboard/patient-page/patient_Contact';
import Patient_Explore from './pages/dashboard/patient-dashboard/patient-page/patient_ExploreUs';
import Patient_FindHospital from './pages/dashboard/patient-dashboard/patient-page/patient_FindHospital';
import Patient_ForgotPassword from './pages/dashboard/patient-dashboard/patient-page/patient_ForgotPassword';
import Patient_Services from './pages/dashboard/patient-dashboard/patient-page/patient_Services';

// Admin pages
import Admin_Home from './pages/dashboard/admin-dashboard/admin-page/admin_Home';
import Admin_AboutUsPage from './pages/dashboard/admin-dashboard/admin-page/admin_AboutUs';
import Admin_Contact from './pages/dashboard/admin-dashboard/admin-page/admin_Contact';
import Admin_FindDoctor from './pages/dashboard/admin-dashboard/admin-page/admin_ExploreUs';
import Admin_FindHospital from './pages/dashboard/admin-dashboard/admin-page/admin_FindHospital';
import Admin_ForgotPassword from './pages/dashboard/admin-dashboard/admin-page/admin_ForgotPassword';
import Admin_Services from './pages/dashboard/admin-dashboard/admin-page/admin_Services';
import Admin_AppointmentLogin from './pages/dashboard/admin-dashboard/admin-page/admin_AppointmentLogin';

// Doctor pages
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
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment-form" element={<Appform />} />
        <Route path="/appointmentlogin" element={<AppointmentLogin />} />
        <Route path="/findhospital" element={<FindHospital />} />
        <Route path="/unauthorized" element={<Unauthorized />} />


        {/* Protected Routes */}

        {/* Admin Pages (after login) */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/admin-home" element={<Admin_Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/adddoctor" element={<AddDoctorForm />} />
          <Route path="/addpatient" element={<AddPatient />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/admin/aboutus" element={<Admin_AboutUsPage />} />
          <Route path="/admin/Appoint" element={<Admin_AppointmentLogin />} />
          <Route path="/admin/Contact" element={<Admin_Contact />} />
          <Route path="/admin/exploreus" element={<Admin_FindDoctor />} />
          <Route path="/admin/findhospital" element={<Admin_FindHospital />} />
          <Route path="/admin/forgotpassword" element={<Admin_ForgotPassword />} />
          <Route path="/admin/services" element={<Admin_Services />} />

        </Route>


        {/* Doctor Pages (after login) */}
        <Route element={<PrivateRoute allowedRoles={['doctor']} />}>
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor/doctor-home" element={<Doctor_Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor/aboutus" element={<Doctor_AboutUsPage />} />
          <Route path="/doctor/Contact" element={<Doctor_Contact />} />
          <Route path="/doctor/findhospital" element={<Doctor_FindHospital />} />
          <Route path="/doctor/exploreus" element={<Doctor_FindDoctor />} />
          <Route path="/doctor/forgotpassword" element={<Doctor_ForgotPassword />} />
          <Route path="/doctor/services" element={<Doctor_Services />} />
          <Route path="/doctor/appointment" element={<Doctor_AppointmentLogin />} />

        </Route>


       {/* Patient Pages (after login) */}
        <Route element={<PrivateRoute allowedRoles={['patient']} />}>
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/patient/patient-home" element={<Patient_Home />} />
          <Route path="/patient/aboutus" element={<Patient_AboutUsPage />} />
          <Route path="/patient/Appoint" element={<Patient_AppointmentLogin />} />
          <Route path="/patient/Contact" element={<Patient_Contact />} />
          <Route path="/patient/exploreus" element={<Patient_Explore />} />
          <Route path="/patient/findhospital" element={<Patient_FindHospital />} />
          <Route path="/patient/forgotpassword" element={<Patient_ForgotPassword />} />
          <Route path="/patient/services" element={<Patient_Services />} />

        </Route>
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
