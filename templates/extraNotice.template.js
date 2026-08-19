module.exports = {
    subject: (data) => `परीक्षा सूचना: वैध उमेदवारांची यादी संकेतस्थळावर प्रसिद्ध | Pune District Central Co-Operative Bank Ltd.",`,
    email: (data) => {
        return `
 <div style="font-family:Arial,Helvetica,sans-serif; max-width:640px; margin:0 auto; color:#222;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
        style="border-radius:10px; overflow:hidden; background:#ffffff; border:1px solid #eee;">

        <tr>
          <td style="padding:14px 18px; background:linear-gradient(90deg, #4E6688 0%, #6B8AC6 100%); color:#fff; text-align:center;">
            <h2 style="margin:0; font-size:18px; font-weight:700;">परीक्षा सूचना</h2>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 18px;">

            <p style="margin:6px 0; font-size:14px;">
              <strong>Dear, </strong>
             ${data.first_name.toUpperCase() || ""}
             ${data.last_name?.toUpperCase() || ""}
            </p>

            <p style="margin:10px 0;">
              The <strong>Valid Candidate List</strong> for the Peon Recruitment – 2026 of
              <strong>Pune District Central Co-Operative Bank Ltd.</strong>
              has been published on the official website. Candidates are requested to visit www.punedccbank.com to check the Valid Candidate List.
            </p>

            <p style="margin:10px 0;">
              पुणे जिल्हा मध्यवर्ती सहकारी बँक लि. यांच्या शिपाई पदाच्या भरती – २०२६ साठी पात्र उमेदवारांची यादी अधिकृत संकेतस्थळावर प्रकाशित करण्यात आली आहे. उमेदवारांनी पात्र उमेदवारांची यादी पाहण्यासाठी www.punedccbank.com या अधिकृत संकेतस्थळाला भेट द्यावी.
            </p>

            <p style="margin:14px 0; text-align:center;">
              <strong>कृपया अधिकृत संकेतस्थळास भेट देऊन यादी तपासा.</strong>
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
