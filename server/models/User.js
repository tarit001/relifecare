const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    mobile: { type: String },
    dob: { type: String },
    gender: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'doctor', 'patient'], default: 'patient' },
    officialId: { type: String },          // ADMIN-0001 or DOC-0001
    officialEmail: { type: String },       // from env
    otp: { type: String },              // NEW
    otpExpires: { type: Date },         // NEW
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        console.error('Error hashing password:', err);
        next(err);  // pass error to Mongoose
    }
});

module.exports = mongoose.model('User', userSchema);
