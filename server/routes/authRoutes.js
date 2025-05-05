const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getProfile,
} = require('../controllers/authController');

const { authenticateToken, requireAdmin } = require('../middleware/authMiddleware');

// Registration
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Get profile (protected)
router.get('/profile', authenticateToken, getProfile);

// Admin-only route (protected and working)
router.get('/admin-only', authenticateToken, requireAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin-only area!' });
});

module.exports = router;
