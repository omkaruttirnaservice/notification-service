module.exports = {
    subject: (data) => `परीक्षा सूचना: शैक्षणिक कागदपत्रांच्या झेरॉक्स प्रती अनिवार्य | प्राथमिक शिक्षक बँक, सातारा`,
    email: (data) => {
        return `
		<div style="font-family:Arial,Helvetica,sans-serif; max-width:640px; margin:0 auto; color:#222;">
		<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-radius:10px; overflow:hidden; background:#ffffff; border:1px solid #eee;">
			<tr>
				<td style="padding:14px 18px; background: linear-gradient(90deg, #4E6688 0%, #6B8AC6 100%); color:#fff; text-align:center;">
					<h2 style="margin:0; font-size:18px; font-weight:700;">परीक्षा सूचना</h2>
				</td>
			</tr>

			<tr>
				<td style="padding:16px 18px;">
					<p style="margin:6px 0; font-size:14px;"><strong>Dear, </strong> ${data?.first_name?.toUpperCase() || ''} ${data?.last_name?.toUpperCase() || ''}</p>

					<p style="margin:6px 0;">
						While appearing for the examination, it is mandatory to bring xerox copies of all the educational documents whose details were filled in the online application form for Prathamik Shikshak Bank, Satara.
					</p>

					<p style="margin:6px 0;">
						सर्व उमेदवारांना सूचित करण्यात येते कि परीक्षेला येताना प्राथमिक शिक्षक बँक, सातारा यांच्या ऑनलाइन अर्जामध्ये नमूद केलेल्या सर्व शैक्षणिक कागदपत्रांच्या झेरॉक्स प्रती सोबत आणणे अनिवार्य आहे.
					</p>
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
