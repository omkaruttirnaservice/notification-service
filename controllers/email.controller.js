const { SendMailClient } = require('zeptomail');
const config = require('../config');
const templates = {
    REGISTRATION_EMAIL_V1: require('../templates/registration.template'),
    HALLTICKET_EMAIL_V1: require('../templates/hallTicket.template'),
    SUMMARY_EMAIL_V1: require('../templates/summary.template'),
    FORGOT_OTP_EMAIL_V1: require('../templates/forgotOtp.template'),

    verifyEmailOtp: require('../templates/verifyOtp.template'),
    paymentSuccess: require('../templates/paymentSuccess.template'),
    paymentPending: require('../templates/paymentPending.template'),
};

class EmailController {
    constructor() {
        this.client = new SendMailClient({
            url: config.zeptomail.url,
            token: config.zeptomail.token,
        });
    }

    /**
     * Process a single email message
     * @param {Object} message - The message object from RabbitMQ
     */
    async processMessage(message) {
        const { templateId, email, payload } = message;
        console.log({ ...payload }, '=message');

        // console.log('emailConfigs', emailConfigs);

        if (!templates[templateId]) {
            throw new Error(`Unknown templateId: ${templateId}`);
        }

        const template = templates[templateId];
        const subject = template.subject({ ...payload });
        const htmlBody = template.email({ ...payload });

        const fromAddress = payload?.emailConfigs?.emailFrom || config.zeptomail.senderEmail;
        const fromName = payload?.emailConfigs?.departmentName || config.zeptomail.senderName;

        return this.sendEmail({
            to: [{ email_address: { address: email } }],
            from: {
                address: fromAddress,
                name: fromName,
            },
            subject: subject,
            htmlbody: htmlBody,
        });
    }

    /**
     * Send email using ZeptoMail
     * @param {Object} emailData
     */
    async sendEmail(emailData) {
        try {
            const response = await this.client.sendMail(emailData);
            console.log(`Email sent successfully to ${emailData.to[0].email_address.address}`);
            return response;
        } catch (error) {
            console.error('ZeptoMail Error:', error.error.details);
            throw error;
        }
    }
}

module.exports = new EmailController();
