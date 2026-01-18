module.exports = {
    subject: (data) => `${data?.departmentName || ''} Registration Successful`,
    email: (data) => {
        return `
                <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f8f9fa; padding: 20px; color: #333;">
                        <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
                                
                                <!-- Header -->
                                <h2 style="color: #4E6688; margin-top: 0; text-align: center;">Registration Successful 🎉</h2>
                                
                                <!-- Greeting -->
                                <p style="font-size: 15px;">Dear <strong>${data?.first_name} ${data?.middle_name || ''} ${data?.last_name}</strong>,</p>
                                
                                <!-- Body -->
                                <p style="font-size: 15px; line-height: 1.6;">
                                We are pleased to inform you that your registration for 
                                <strong>${data.emailConfigs.departmentName}</strong> has been successfully completed.
                                </p>
                                
                                <!-- Credentials -->
                                <div style="background: #f1f3f5; padding: 15px; border-radius: 6px; margin: 20px 0;">
                                <p style="margin: 0 0 8px 0; font-weight: bold;">Your login credentials:</p>
                                <p style="margin: 4px 0;">Username: <strong>${data.username}</strong></p>
                                <p style="margin: 4px 0;">Password: <strong>${data.password}</strong></p>
                                </div>
                                
                                <!-- Next steps -->
                                <p style="font-size: 15px; line-height: 1.6;">
                                You can now log in and proceed with your application.
                                If you have any questions or need assistance, please reach out to our support team at 
                                <a href="mailto:${data.emailConfigs.emailFrom}" style="color: #007bff; text-decoration: none;">${data.emailConfigs.emailFrom}</a>.
                                </p>
                                
                                <!-- Closing -->
                                <p style="margin-top: 30px; font-size: 15px;">
                                Best regards,<br>
                                <strong>Team, ${data.emailConfigs.departmentName}</strong>
                                </p>
                                
                        </div>
                </div>`;
    },
};
