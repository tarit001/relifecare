const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Health check
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running.....✅ 🚀' });
});

// Mount routes

app.use('/api/protected', require('./routes/protectedRoutes'));
app.use('/api/auth', require('./routes/authRoutes')); // handles login, register, etc.
app.use('/api/forgot', require('./routes/forgotPasswordRoutes')); // now OTP has separate namespace

// Error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
