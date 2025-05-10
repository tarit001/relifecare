const User = require('../models/User');
const { sendForgotPasswordEmail, 
sendResendForgotPasswordEmail, 
sendPasswordResetSuccessEmail } = require('../utils/sendEmail');  // Importing the email functions

// In-memory OTP store: { email: { otp, expireTime } }
let otpStore = {};

// Generate and send OTP
async function generateAndSendOtp(email, purpose) {
  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = { otp, expireTime: Date.now() + 2 * 60 * 1000 };  // 2 mins expiry
  console.log(`🔐 OTP for ${email}: ${otp} (valid for 2 minutes)`);

  // Sending the OTP email
  if (purpose === 'resend') {
    await sendResendForgotPasswordEmail(email, otp);
  } else {
    await sendForgotPasswordEmail(email, otp);  // For initial request
  }
}

// Send OTP for forgot password
exports.forgotPassword = async (req, res) => {
  try {
    console.log('📨 Forgot password request body:', req.body);
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    await generateAndSendOtp(email, 'initial');  // Sending initial OTP
    res.json({ message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('❌ Error in forgotPassword:', error);
    res.status(500).json({ message: 'Server error while sending OTP' });
  }
};

// Verify OTP
exports.verifyOtp = (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log(`🧐 Verifying OTP for ${email}: ${otp}`);

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    if (!otpStore[email]) {
      console.log(`❌ No OTP found for ${email}`);
      return res.status(400).json({ message: 'No OTP found. Please request a new OTP.' });
    }

    const storedOtpData = otpStore[email];
    console.log(`📦 Stored OTP for ${email}:`, storedOtpData);

    if (Date.now() > storedOtpData.expireTime) {
      console.log(`❌ OTP expired for ${email}`);
      delete otpStore[email];
      return res.status(400).json({ message: 'OTP expired. Please request a new OTP.' });
    }

    if (otp.toString() !== storedOtpData.otp.toString()) {
      console.log(`❌ Invalid OTP. Entered: ${otp}, Expected: ${storedOtpData.otp}`);
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    console.log(`✅ OTP verified successfully for ${email}`);
    delete otpStore[email];
    return res.json({ message: 'OTP verified successfully' });

  } catch (error) {
    console.error('❌ Server error in verifyOtp:', error);
    return res.status(500).json({ message: 'Server error while verifying OTP' });
  }
};

// Resend OTP
exports.resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    await generateAndSendOtp(email, 'resend');  // Resending OTP
    res.json({ message: 'New OTP sent successfully!' });
  } catch (error) {
    console.error('❌ Error in resendOtp:', error);
    res.status(500).json({ message: 'Server error while resending OTP' });
  }
};


// Reset password
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    console.log('Request body:', req.body);

    if (!email || !newPassword) {
      return res.status(400).json({ message: 'Email and new password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`❌ User not found for email: ${email}`);
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the password
    user.password = newPassword;
    console.log('Updated password:', user.password);
    await user.save();

    // Send reset success email using user's first name
    try {
      await sendPasswordResetSuccessEmail(user.email, user.firstName);
      console.log('Reset success email sent successfully');
    } catch (emailError) {
      console.error('Error sending reset success email:', emailError);
    }

    console.log(`🔄 Password reset successful for ${email}`);
    res.json({ message: 'Password reset successful' });

  } catch (error) {
    console.error('❌ Error in resetPassword:', error);
    res.status(500).json({ message: 'Server error while resetting password' });
  }
};
