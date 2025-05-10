

export const Verification_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            color: #333;
            line-height: 1.8;
        }
        .verification-code {
            display: block;
            margin: 20px 0;
            font-size: 22px;
            color: #007BFF;
            background: #e3f2fd;
            border: 1px dashed #007BFF;
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            font-weight: bold;
            letter-spacing: 2px;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Verify Your Email</div>
        <div class="content">
            <p>Hello,</p>
            <p>Thank you for signing up! Please confirm your email address by entering the code below:</p>
            <span class="verification-code">{verificationCode}</span>
            <p>If you did not create an account, no further action is required. If you have any questions, feel free to contact our support team.</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Relife Hospital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;



export const Welcome_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Relife Hospital</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            line-height: 1.8;
        }
        .welcome-message {
            font-size: 18px;
            margin: 20px 0;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Welcome to Relife Hospital!</div>
        <div class="content">
            <p class="welcome-message">Hello {name},</p>
            <p>We’re thrilled to have you join us! Your registration was successful, and we’re committed to providing you with the best experience possible.</p>
            <p>Here’s how you can get started:</p>
            <ul>
                <li>Explore our features and customize your experience.</li>
                <li>Stay informed by checking out our blog for the latest updates and tips.</li>
                <li>Reach out to our support team if you have any questions or need assistance.</li>
            </ul>
            <p>To get started, please click the link below based on your role:</p>
            
            <div style="text-align: center; padding: 20px 0;">
                <a href="{dashboardUrl}" style="color:#007BFF; text-decoration:none; font-size: 16px; font-weight: bold;">
                    Access your Dashboard
                </a>
            </div>

            <p>If you need any help, don’t hesitate to contact us. We’re here to support you every step of the way.</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Relife Hospital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;



export const Resend_OTP_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resend OTP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            color: #333;
            line-height: 1.8;
        }
        .otp-code {
            display: block;
            margin: 20px 0;
            font-size: 22px;
            color: #007BFF;
            background: #e3f2fd;
            border: 1px dashed #007BFF;
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            font-weight: bold;
            letter-spacing: 2px;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Resend OTP</div>
        <div class="content">
            <p>Hello,</p>
            <p>We noticed that you requested a new OTP. Please find the new code below:</p>
            <span class="otp-code">{otp}</span>
            <p>If you did not request this, please ignore this email. If you continue to have trouble, feel free to reach out to our support team.</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Relife Hospital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;


export const Forgot_Password_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            color: #333;
            line-height: 1.8;
        }
        .reset-link {
            display: block;
            margin: 20px 0;
            font-size: 16px;
            color: #ffffff;
            background-color: #007BFF;
            text-align: center;
            padding: 12px 0;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Reset Your Password</div>
        <div class="content">
            <p>Hello,</p>
            <p>We received a request to reset your password. Please click the link below to reset your password:</p>
            <span class="verification-code">{otp}</span>
            <p>If you did not request this change, you can safely ignore this email. If you have any questions, please feel free to contact us.</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Relife Hospital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const Resend_Forgot_Password_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resend Password Reset</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            color: #333;
            line-height: 1.8;
        }
        .reset-link {
            display: block;
            margin: 20px 0;
            font-size: 16px;
            color: #ffffff;
            background-color: #007BFF;
            text-align: center;
            padding: 12px 0;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Resend Password Reset</div>
        <div class="content">
            <p>Hello,</p>
            <p>We received a request to reset your password. You can use the link below to reset your password:</p>

            <span class="verification-code">{resendCode}</span>

            <p>If you did not request this change, you can safely ignore this email. If you have any questions, please feel free to contact us.</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Relife Hospital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const Password_Reset_Success_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            border: 1px solid #ddd;
        }
        .header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 26px;
            font-weight: bold;
        }
        .content {
            padding: 25px;
            color: #333;
            line-height: 1.8;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 15px;
            text-align: center;
            color: #777;
            font-size: 12px;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Password Reset Successful</div>
        <div class="content">
            <p>Hello {name},</p>
            <p>We're happy to inform you that your password has been successfully reset. You can now log in to your account using your new password.</p>
            <p>If you did not initiate this reset, please contact our support team immediately to secure your account.</p>
            <p>If you have any questions or need assistance, don't hesitate to reach out to us. We're here to help!</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Relife Hospital. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;


