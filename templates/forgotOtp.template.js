module.exports = {
    subject: (data) => `${data?.departmentName || ''} OTP Verification`,
    email: (data) => {
        return `
        <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f8f9fa; padding: 20px; color: #333;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
                        
                        <!-- Header -->
                        <h2 style="color: #4E6688; margin-top: 0; text-align: center;">OTP Verification 🔐</h2>
                        
                        <!-- Greeting -->
                        <p style="font-size: 15px;">Dear <strong>${data.first_name} ${data.middle_name || ''} ${data.last_name}</strong>,</p>
                        
                        <!-- Body -->
                        <p style="font-size: 15px; line-height: 1.6;">
                        We have received a request to recover your <strong>${data.type}</strong> for 
                        <strong>${data?.departmentName || ''} Form Filling</strong>.
                        </p>
                        
                        <!-- OTP Block -->
                        <div style="background: #f1f3f5; padding: 20px; border-radius: 6px; margin: 20px 0; text-align: center;">
                        <p style="margin: 0 0 8px 0; font-weight: bold; font-size: 15px;">Your One-Time Password (OTP)</p>
                        <p style="font-size: 24px; font-weight: bold; color: #2c3e50; letter-spacing: 6px; margin: 10px 0;">
                        ${data.otp}
                        </p>
                        <p style="margin: 0; font-size: 14px; color: #555;">Valid for <strong>10 minutes</strong></p>
                        </div>
                        
                        <!-- Next steps -->
                        <p style="font-size: 15px; line-height: 1.6;">
                        Please use this OTP to verify your identity and recover your <strong>${data.type}</strong>.  
                        If you did not request this, kindly ignore the email or contact our support team at  
                        <a href="mailto:${data?.emailFrom || ''}" style="color: #007bff; text-decoration: none;">${data?.emailFrom || ''}</a>.
                        </p>
                        
                        <!-- Closing -->
                        <p style="margin-top: 30px; font-size: 15px;">
                        Best regards,<br>
                        <strong>Team, ${data?.departmentName || ''}</strong>
                        </p>
                        
                </div>
        </div>`;
    },
};
