module.exports = {
    subject: (data) => `${data.emailConfigs?.departmentName} Hallticket Live`,
    email: (data) => {
        return `
		<div style="font-family:Arial,Helvetica,sans-serif; max-width:640px; margin:0 auto; color:#222;">
		<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-radius:10px; overflow:hidden; background:#ffffff; border:1px solid #eee;">
			<tr>
				<td style="padding:14px 18px; background: linear-gradient(90deg, #4E6688 0%, #6B8AC6 100%); color:#fff; text-align:center;">
					<h2 style="margin:0; font-size:18px; font-weight:700;">Hall Ticket / प्रवेश पत्र</h2>
				</td>
			</tr>

			<tr>
				<td style="padding:16px 18px;">
					<p style="margin:6px 0; font-size:14px;"><strong>Dear, </strong> ${data?.first_name?.toUpperCase() || ''} ${data?.last_name?.toUpperCase() || ''}</p>

					<p>We are pleased to inform you that hallticket for proficiency test of
					<strong>${data?.emailConfigs?.departmentName}</strong> are live please login and download your exam hallticket.</p>

					<div style="margin:12px auto;">
						<a href="${data?.emailConfigs?.processBaseUrl}" target="_blank" rel="noopener noreferrer"
							style="display:inline-block; padding:9px 14px; border-radius:8px; text-decoration:none; background:#0070f3; color:#fff; font-weight:600;">
							Download Hall Ticket
						</a>
					</div>
				</td>
			</tr>

			<tr>
			<td style="padding:10px 18px; background:#f8fafc; text-align:center; font-size:12px; color:#94a3b8;">
				This is an automated message — कृपया या ईमेलला थेट उत्तर देऊ नका.
			</td>
			</tr>
		</table>
		</div>
    `;
    },
};
