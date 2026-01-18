module.exports = {
    subject: () => 'Payment Pending Reminder',
    email: (data) => `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #ffc107;">Action Required: Complete Your Payment</h2>
      <p>We noticed you have a pending payment of <strong>${data.amount}</strong>.</p>
      <p>To avoid any disruption to your service, please complete the payment at your earliest convenience.</p>
      <p style="text-align: center; margin: 20px 0;">
        <a href="${data.processUrl}" style="background-color: #ffc107; color: #333; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Pay Now</a>
      </p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #666;">Regards,<br>${data.departmentName || 'Uttirna Team'}</p>
    </div>
  `,
};
