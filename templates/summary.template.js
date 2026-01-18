module.exports = {
    subject: (data) => `${data?.emailConfigs?.departmentName} Daily Summary`,
    email: (data) => {
        const dateStr = new Date().toLocaleDateString('en-IN');
        const timeStr = new Date().toLocaleTimeString();
        return `
     <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f4f6fa; padding: 20px; color: #333;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px; margin: 0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 18px rgba(46,60,90,0.08);">
        <tr>
          <td style="padding:20px 24px; background: linear-gradient(90deg, #4E6688 0%, #6B8AC6 100%); color:#fff; text-align:center;">
            <h1 style="margin:0; font-size:20px; font-weight:700;">${data.emailConfigs.departmentName} Summary</h1>
            <p style="margin:6px 0 0 0; font-size:13px; opacity:0.95;">Quick overview of registrations & applications</p>
          </td>
        </tr>

        <tr>
          <td style="padding:18px 22px; text-align:center;">
            <p style="font-size:13px; color:#667085; margin:0 0 18px 0;">
              <strong style="color:#0F172A;">Date:</strong> ${dateStr} &nbsp;•&nbsp;
              <strong style="color:#0F172A;">Time:</strong> ${timeStr}
            </p>

            <!-- 2x2 KPI grid -->
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
              <!-- Row 1 -->
              <tr>
                <td width="50%" style="padding:8px;">
                  <table role="presentation" cellpadding="16" cellspacing="0" width="100%" style="background:#f8fafc; border-radius:10px; text-align:center; height:120px;">
                    <tr>
                      <td style="vertical-align:middle;">
                        <div style="font-size:13px; color:#94a3b8; margin-bottom:6px;">Total Registrations</div>
                        <div style="font-size:28px; font-weight:700; color:#0f172a;">${data.total_registrations ?? 0}</div>
                      </td>
                    </tr>
                  </table>
                </td>

                <td width="50%" style="padding:8px;">
                  <table role="presentation" cellpadding="16" cellspacing="0" width="100%" style="background:#f8fafc; border-radius:10px; text-align:center; height:120px;">
                    <tr>
                      <td style="vertical-align:middle;">
                        <div style="font-size:13px; color:#94a3b8; margin-bottom:6px;">Total Applications</div>
                        <div style="font-size:28px; font-weight:700; color:#0f172a;">${data.application_status?.application_count ?? 0}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Row 2 -->
              <tr>
                <td width="50%" style="padding:8px;">
                  <table role="presentation" cellpadding="16" cellspacing="0" width="100%" style="background:#f8fafc; border-radius:10px; text-align:center; height:120px;">
                    <tr>
                      <td style="vertical-align:middle;">
                        <div style="font-size:13px; color:#94a3b8; margin-bottom:6px;">Preview Done</div>
                        <div style="font-size:28px; font-weight:700; color:#0f172a;">${data.application_status?.preview_done_count ?? 0}</div>
                      </td>
                    </tr>
                  </table>
                </td>

                <td width="50%" style="padding:8px;">
                  <table role="presentation" cellpadding="16" cellspacing="0" width="100%" style="background:#f8fafc; border-radius:10px; text-align:center; height:120px;">
                    <tr>
                      <td style="vertical-align:middle;">
                        <div style="font-size:13px; color:#94a3b8; margin-bottom:6px;">Total Payment</div>
                        <div style="font-size:28px; font-weight:700; color:#0f172a;">${data.application_status?.payment_done_count ?? 0}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <tr>
          <td style="padding:12px 18px; background:#f8fafc; text-align:center; font-size:12px; color:#94a3b8;">
            ${data?.site_name ? `${data.site_name} • ${data.site_url ? `<a href="${data.site_url}" style="color:#6b8ac6; text-decoration:none;">${data.site_url}</a>` : ''}` : ''}
          </td>
        </tr>
      </table>

      <!-- Closing -->
      <p style="margin-top: 30px; font-size: 15px;">
      Best regards,<br>
      <strong>Team, ${data.emailConfigs.departmentName}</strong>
      </p>
    </div>

    `;
    },
};
