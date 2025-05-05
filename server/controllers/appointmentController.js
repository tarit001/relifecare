const Appointment = require('../models/appointment');

exports.createAppointment = async (req, res) => {
  const appointment = await Appointment.create({
    ...req.body,
    user: req.user._id,
  });
  res.status(201).json(appointment);
};

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find({ user: req.user._id });
  res.json(appointments);
};
