/**
 * applicable for satara process only
 */
module.exports = {
    subject: (data) => `${data?.departmentName || ''} Interview Call Letter`,
    email: (data) => {
        return `
                <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f8f9fa; padding: 20px; color: #333;">
                        <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
                                
                                <!-- Header -->
                                <h2 style="color: #4E6688; margin-top: 0; text-align: center;">
                                        Interview Call Letter
                                </h2>
                                
                                <!-- Greeting -->
                                <p style="font-size: 15px;">
                                        Dear <strong>${data?.ub_first_name || ''} ${data?.ub_middle_name || ''} ${data?.ub_last_name || ''}</strong>,
                                </p>
                                
                                <!-- Body -->
                                <p style="font-size: 15px; line-height: 1.6;">
                                        With reference to the written examination conducted by 
                                        <strong>${data.emailConfigs.departmentName}</strong>, we are pleased to inform you that you have been
                                        shortlisted for the <strong>Interview</strong>.
                                </p>

                                <p style="font-size: 15px; line-height: 1.6;">
                                  The interview details—such as date, time, and venue—are provided in the call letter. Please log in using your credentials on the official website to access and download your interview letter.
                                </p>


                                <a style="font-size: 15px; line-height: 1.6;" href="${data?.emailConfigs?.processUrl}">
                                  Download Interview Letter
                                </a>
                                
                                <!-- Support -->
                                <p style="font-size: 15px; line-height: 1.6;">
                                        For any queries, you may contact us at 
                                        <a href="mailto:${data.emailConfigs.emailFrom}" style="color: #007bff; text-decoration: none;">
                                                ${data.emailConfigs.emailFrom}
                                        </a>.
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
