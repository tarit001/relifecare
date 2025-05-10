const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { 
    sendVerificationEmail, 
    sendWelcomeEmail,
    sendResendOtpEmail
} = require('../utils/sendEmail');


exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      mobile,
      dob,
      gender,
      role,
      adminId,
      officialEmail,
      doctorId
    } = req.body;

    console.log('[REGISTER] Incoming:', req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.warn('[REGISTER] User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    const adminMasterIds = (process.env.REACT_APP_ADMIN_MASTER_ID || '').split(',');
    const adminMasterEmails = (process.env.REACT_APP_ADMIN_MASTER_EMAIL || '').split(',');
    const doctorMasterIds = (process.env.REACT_APP_DOCTOR_MASTER_ID || '').split(',');

    let officialId = null;
    let finalOfficialEmail = null;

    if (role === 'admin') {
      if (!adminMasterIds.includes(adminId)) {
        console.warn('[REGISTER] Invalid Admin ID:', adminId);
        return res.status(401).json({ message: 'Invalid Admin Master ID' });
      }
      if (!adminMasterEmails.includes(officialEmail)) {
        console.warn('[REGISTER] Invalid Admin Email:', officialEmail);
        return res.status(401).json({ message: 'Invalid Admin Master Email' });
      }
      if (!/^[a-zA-Z0-9._%+-]+@relifehospital\.com$/.test(officialEmail)) {
        console.warn('[REGISTER] Official Email domain mismatch:', officialEmail);
        return res.status(400).json({ message: 'Invalid domain for official email' });
      }

      const count = await User.countDocuments({ role: 'admin' });
      officialId = `ADMIN-${String(count + 1).padStart(4, '0')}`;
      finalOfficialEmail = officialEmail;
    }

    if (role === 'doctor') {
      if (!doctorMasterIds.includes(doctorId)) {
        console.warn('[REGISTER] Invalid Doctor ID:', doctorId);
        return res.status(401).json({ message: 'Invalid Doctor Master ID' });
      }

      const count = await User.countDocuments({ role: 'doctor' });
      officialId = `DOC-${String(count + 1).padStart(4, '0')}`;
      finalOfficialEmail = email;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobile,
      dob,
      gender,
      role,
      officialId,
      officialEmail: finalOfficialEmail
    });

    console.log('[REGISTER] New user created:', newUser._id);

    res.status(201).json({
      message: `${role} registered successfully`,
      user: {
        id: newUser._id,
        role: newUser.role,
        officialId: newUser.officialId,
        officialEmail: newUser.officialEmail
      }
    });
  } catch (err) {
    console.error('[REGISTER] Server error:', err);
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};



// LOGIN STEP 1: Validate email & password, then send OTP
exports.login = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email' });

        if (user.role !== role) {
            return res.status(400).json({ message: `Role mismatch. You are registered as ${user.role}.` });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = otp;
        user.otpExpires = Date.now() + 5 * 60 * 1000;
        await user.save();

        // Send OTP Email (updated)
        await sendVerificationEmail(user.email, otp);

        res.status(200).json({ message: 'OTP sent to your email. Please verify.' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};

// OTP VERIFY: Check OTP, return token if valid
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email' });

        if (!user.otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ message: 'OTP expired. Please login again.' });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        // Pass the role to the sendWelcomeEmail function
        await sendWelcomeEmail(user.email, user.firstName, user.role);  // Add role here

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                role: user.role,
                officialId: user.officialId,
                officialEmail: user.officialEmail
            }
        });
    } catch (err) {
        console.error('OTP verify error:', err);
        res.status(500).json({ message: 'OTP verification failed', error: err.message });
    }
};


// NEW: Resend OTP
exports.resendOtp = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email' });

        // Generate new OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.otp = otp;
        user.otpExpires = Date.now() + 5 * 60 * 1000;
        await user.save();

        // ✅ Use Resend OTP Email Template
        await sendResendOtpEmail(user.email, otp);

        res.status(200).json({ message: 'OTP resent successfully' });
    } catch (err) {
        console.error('Resend OTP error:', err);
        res.status(500).json({ message: 'Failed to resend OTP', error: err.message });
    }
};
