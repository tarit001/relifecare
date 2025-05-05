const express = require('express');
const router = express.Router();
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');

// Verify admin role
router.get('/verify-role', verifyToken, verifyAdmin, (req, res) => {
  res.json({ message: 'Admin verified' });
});

// Example dashboard data endpoint
router.get('/dashboard-data', verifyToken, verifyAdmin, (req, res) => {
  res.json({
    pieData: [
      { name: 'Doctors', value: 25, color: '#34D399', label: 'Total Doctors', value: '025', desc: 'Active Today', bg: 'bg-green-500 dark:bg-green-300 dark:text-green-900', icon: 'doctor-icon' },
      { name: 'Nurses', value: 40, color: '#60A5FA', label: 'Total Nurses', value: '040', desc: 'All Departments', bg: 'bg-blue-500 dark:bg-blue-300 dark:text-blue-900', icon: 'nurse-icon' },
      { name: 'Staff', value: 65, color: '#FBBF24', label: 'Total Staff', value: '065', desc: 'Hospital-wide', bg: 'bg-yellow-400 dark:bg-yellow-200 dark:text-yellow-900', icon: 'staff-icon' },
    ],
    staffData: [
      { name: 'Dr. Alina Roy', role: 'Surgeon', shift: 'On Duty' },
      { name: 'Dr. Javed Khan', role: 'Pediatrician', shift: 'Evening' },
      { name: 'Rita Sen', role: 'Nurse', shift: 'Night' },
      { name: 'Amit Paul', role: 'Technician', shift: 'Morning' },
    ],
    nextOnDuty: {
      image: '/src/assets/doctors/doctor2.png',
      name: 'Dr. Javed Khan',
      role: 'Pediatrician',
      dob: '20 July 1985',
      gender: 'Male',
      experience: '12 Years',
      department: 'Child Care',
    },
  });
});

module.exports = router;
