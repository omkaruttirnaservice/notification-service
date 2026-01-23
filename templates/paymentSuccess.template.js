module.exports = {
    subject: (data) => `${data?.departmentName || ''} Payment Successful`,
    email: (data) => {
        return `<div style="font-family: Arial, Helvetica, sans-serif; background-color: #f8f9fa; padding: 20px; color: #333;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
                        
                        <!-- Header -->
                        <h2 style="color: #4E6688; margin-top: 0; text-align: center;">Payment Successful ✅</h2>
                        
                        <!-- Greeting -->
                        <p style="font-size: 15px;">Dear <strong>${data?.ub_first_name} ${data?.ub_middle_name || ''} ${data?.ub_last_name}</strong>,</p>
                        
                        <!-- Body -->
                        <p style="font-size: 15px; line-height: 1.6;">
                        We are pleased to inform you that your payment has been successfully processed for the  
                        <strong>${data.emailConfigs.departmentName} Form Filling</strong>.
                        </p>
                        
                        <!-- Payment Details -->
                        <div style="background: #f1f3f5; padding: 20px; border-radius: 6px; margin: 20px 0;">
                        <p style="margin: 0 0 12px 0; font-weight: bold; font-size: 15px;">Transaction Details:</p>
                        <p style="margin: 6px 0;"><strong>Payment Amount:</strong> ₹${data?.pay_amount}</p>
                        <p style="margin: 6px 0;"><strong>Post Name:</strong> ${data?.ca_post_name}</p>
                        <p style="margin: 6px 0;"><strong>User ID:</strong> ${data?.r_id}</p>
                        <p style="margin: 6px 0;"><strong>Application No:</strong> ${data?.f_id}</p>
                        <p style="margin: 6px 0;"><strong>Payment Date:</strong> ${data?.pay_done_date} (${data?.pay_done_time})</p>
                        <p style="margin: 6px 0;"><strong>Transaction ID:</strong> ${data?.pay_merch_txn_id}</p>
                        </div>
                        
                        <!-- Next Steps -->
                        <p style="font-size: 15px; line-height: 1.6;">
                        Please log in to your account to download the application form.
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
