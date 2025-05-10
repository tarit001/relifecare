const nodemailer = require('nodemailer');
const { 
    Verification_Email_Template, 
    Welcome_Email_Template,
    Resend_OTP_Email_Template,
    Forgot_Password_Email_Template,
    Resend_Forgot_Password_Email_Template,
    Password_Reset_Success_Email_Template
} = require('./EmailTemplate');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    }
});

const sendVerificationEmail = async (email, otp) => {
    try {
        const response = await transporter.sendMail({
            from: `"Relife Hospital" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: 'Verify Your Email (OTP)',
            text: 'Verify your Email',
            html: Verification_Email_Template.replace("{verificationCode}", otp)
        });
        console.log('Verification Email sent successfully', response);
    } catch (error) {
        console.log('Verification Email error', error);
    }
};

const sendWelcomeEmail = async (email, name, role) => {
    try {
        let dashboardUrl = '';

        // Set the appropriate dashboard URL based on role
        if (role === 'admin') {
            dashboardUrl = 'https://relifecare.vercel.app/admin-dashboard';
        } else if (role === 'doctor') {
            dashboardUrl = 'https://relifecare.vercel.app/doctor-dashboard';
        } else if (role === 'patient') {
            dashboardUrl = 'https://relifecare.vercel.app/patient-dashboard';
        } else {
            return console.log('Error: Role is missing or invalid');
        }

        // Get the current year
        const currentYear = new Date().getFullYear();

        // Replace placeholders in the email template
        const emailHtml = Welcome_Email_Template
            .replace("{name}", name)
            .replace("{dashboardUrl}", dashboardUrl)
            .replace("{year}", currentYear);  // Add current year to the template

        // Send the email
        const response = await transporter.sendMail({
            from: `"Relife Hospital" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: 'Welcome to Relife Hospital',
            text: 'Welcome Email',
            html: emailHtml
        });

        console.log('Welcome Email sent successfully', response);
    } catch (error) {
        console.log('Welcome Email error', error);
    }
};


const sendResendOtpEmail = async (email, otp) => {
    try {
        const response = await transporter.sendMail({
            from: `"Relife Hospital" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: 'Resend OTP - Verify Your Email',
            text: 'Resend OTP',
            html: Resend_OTP_Email_Template.replace("{otp}", otp)
        });
        console.log('Resend OTP Email sent successfully', response);
    } catch (error) {
        console.log('Resend OTP Email error', error);
    }
};

const sendForgotPasswordEmail = async (email, otp) => {
    try {
        const response = await transporter.sendMail({
            from: `"Relife Hospital" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: 'Your OTP for Password Reset',
            text: 'Forgot Password OTP',
            html: Forgot_Password_Email_Template.replace("{otp}", otp)
        });
        console.log('Forgot Password Email sent successfully', response);
    } catch (error) {
        console.log('Forgot Password Email error', error);
    }
};

const sendResendForgotPasswordEmail = async (email, resendCode) => {
    try {
        const response = await transporter.sendMail({
            from: `"Relife Hospital" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: 'Resend OTP - Reset Your Password',
            text: 'Resend OTP for Password Reset',
            html: Resend_Forgot_Password_Email_Template.replace("{{resendCode}", resendCode)
        });
        console.log('Resend Forgot Password Email sent successfully', response);
    } catch (error) {
        console.log('Resend Forgot Password Email error', error);
    }
};


const sendPasswordResetSuccessEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: `"Relife Hospital" <${process.env.SMTP_EMAIL}>`,
            to: email,
            subject: 'Your Password Has Been Successfully Reset',
            text: `Hello ${name}, your password has been successfully reset. You can now log in with your new password.`,
            html: Password_Reset_Success_Email_Template.replace("{name}", name),
        });
        console.log('Password Reset Success Email sent successfully', response);
    } catch (error) {
        console.log('Password Reset Success Email error', error);
    }
};



module.exports = {
    sendVerificationEmail,
    sendWelcomeEmail,
    sendResendOtpEmail,
    sendForgotPasswordEmail,
    sendResendForgotPasswordEmail,
    sendPasswordResetSuccessEmail
};
