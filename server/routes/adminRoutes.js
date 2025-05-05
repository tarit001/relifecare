const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/dashboard', protect, adminOnly, (req, res) => {
    res.json({ message: 'Welcome to the admin dashboard' });
});


const { verifyToken } = require('../middleware/authMiddleware');

router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'You accessed a protected route', user: req.user });
});


module.exports = router;
