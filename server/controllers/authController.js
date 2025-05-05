const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,  // raw password
            mobile,
            dob,
            gender,
            role
        } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        let officialId = null;
        let officialEmail = null;

        if (role === 'admin') {
            // Master admin credentials check
            if (req.body.adminId !== process.env.ADMIN_MASTER_ID) {
                return res.status(401).json({ message: 'Invalid Admin Master ID' });
            }
            if (req.body.officialEmail !== process.env.ADMIN_MASTER_EMAIL) {
                return res.status(401).json({ message: 'Invalid Admin Master Email' });
            }

            // Assign dynamic admin ID (e.g., ADMIN-0001, ADMIN-0002)
            const count = await User.countDocuments({ role: 'admin' });
            officialId = `ADMIN-${String(count + 1).padStart(4, '0')}`;
            officialEmail = process.env.ADMIN_MASTER_EMAIL;
        }

        if (role === 'doctor') {
            // Master doctor credentials check
            if (req.body.doctorId !== process.env.DOCTOR_MASTER_ID) {
                return res.status(401).json({ message: 'Invalid Doctor Master ID' });
            }

            // Assign dynamic doctor ID (e.g., DOC-0001, DOC-0002)
            const count = await User.countDocuments({ role: 'doctor' });
            officialId = `DOC-${String(count + 1).padStart(4, '0')}`;
            officialEmail = process.env.DOCTOR_MASTER_EMAIL;
        }

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,  // pass raw password; pre-save hook will hash
            mobile,
            dob,
            gender,
            role,
            officialId,
            officialEmail
        });

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
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Registration failed', error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email' });

        if (user.role !== role) {
            return res.status(400).json({ message: `Role mismatch. You are registered as ${user.role}.` });
        }

        const isMatch = await require('bcrypt').compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

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
        console.error('Login error:', err);
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};
