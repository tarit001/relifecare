const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/AppointmentController');
const { protect } = require('../middleware/AuthMiddleware');
const router = express.Router();

router.post('/', protect, createAppointment);
router.get('/', protect, getAppointments);

module.exports = router;
