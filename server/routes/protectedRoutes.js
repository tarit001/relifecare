// /routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');

// Admin-only route
router.get('/admin-dashboard', verifyToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    res.json({ message: 'Welcome to Admin Dashboard', user: req.user });
});

// Doctor-only route
router.get('/doctor-dashboard', verifyToken, (req, res) => {
    if (req.user.role !== 'doctor') {
        return res.status(403).json({ message: 'Access denied: Doctors only' });
    }
    res.json({ message: 'Welcome to Doctor Dashboard', user: req.user });
});

// Patient-only route
router.get('/patient-dashboard', verifyToken, (req, res) => {
    if (req.user.role !== 'patient') {
        return res.status(403).json({ message: 'Access denied: Patients only' });
    }
    res.json({ message: 'Welcome to Patient Dashboard', user: req.user });
});

module.exports = router;
