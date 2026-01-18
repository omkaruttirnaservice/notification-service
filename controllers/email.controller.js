const { SendMailClient } = require('zeptomail');
const config = require('../config');
const templates = {
    registration: require('../templates/registration.template'),
    hallTicket: require('../templates/hallTicket.template'),
    summary: require('../templates/summary.template'),
    forgotUsernameOtp: require('../templates/forgotOtp.template'),
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
        const { type, email, payload, emailConfigs } = message;
        console.log({ payload, emailConfigs }, '=message');

        console.log('emailConfigs', emailConfigs);

        if (!templates[type]) {
            throw new Error(`Unknown email type: ${type}`);
        }

        const template = templates[type];
        const subject = template.subject({ ...payload, ...emailConfigs });
        const htmlBody = template.email({ ...payload, ...emailConfigs });

        const fromAddress = emailConfigs?.emailFrom || config.zeptomail.senderEmail;
        const fromName = emailConfigs?.departmentName || config.zeptomail.senderName;

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
