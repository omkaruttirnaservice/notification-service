module.exports = {
    subject: () => 'Reset Password OTP',
    email: (data) => `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #d9534f;">Password Reset Request</h2>
      <p>You have requested to reset your password.</p>
      <p>Please use the following OTP to proceed:</p>
      <div style="background: #fdf2f2; padding: 15px; border-radius: 5px; text-align: center;">
        <strong style="font-size: 1.5em; color: #d9534f; letter-spacing: 2px;">${data.otp}</strong>
      </div>
      <p>This OTP is valid for 10 minutes. If you did not request this, please ignore this email.</p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #666;">Regards,<br>${data.departmentName || 'Uttirna Team'}</p>
    </div>
  `,
};
