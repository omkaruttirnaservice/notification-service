module.exports = {
    subject: () => 'Verify Your Email Address',
    email: (data) => `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #28a745;">Email Verification</h2>
      <p>Please verify your email address to complete your registration.</p>
      <div style="background: #e9f7ef; padding: 15px; border-radius: 5px; text-align: center;">
        <strong style="font-size: 1.5em; color: #28a745; letter-spacing: 2px;">${data.otp}</strong>
      </div>
      <p>If you did not request this, please ignore this email.</p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #666;">Regards,<br>${data.departmentName || 'Uttirna Team'}</p>
    </div>
  `,
};
