import appConfig from "../../config/app.config.js"
import emailConfig from "../../config/email.config.js"
import emailTranporter from "./emailTransporter.js"

export const sendEmail = async ({ to, subject, text }) => {
    console.log(`Sending email to ${to}`)

    emailTranporter.sendMail({
        from: `${appConfig.name} <${emailConfig.from}>`,
        to: to,
        subject: subject,
        text: text,
    })
}
