module.exports = {
    subject: () => 'Payment Successful',
    email: (data) => `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #28a745;">Payment Receipt</h2>
      <p>Your payment was successfully processed.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Amount</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.amount}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Transaction ID</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.transactionId}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px; border: 1px solid #ddd;"><strong>Date</strong></td>
          <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleDateString()}</td>
        </tr>
      </table>
      <br>
      <p>Thank you for your business!</p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #666;">Regards,<br>${data.departmentName || 'Uttirna Team'}</p>
    </div>
  `,
};
