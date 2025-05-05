const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
    password: { type: String, required: true },
    adminId: { type: String },
    officialEmail: { type: String },
    doctorId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
