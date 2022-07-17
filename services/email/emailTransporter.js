import emailConfig from "../../config/email.config.js"
import nodemailer from "nodemailer"

const createEmailTransporter = () => {
    return nodemailer.createTransport({
        host: emailConfig.host,
        port: emailConfig.port,
        secure: emailConfig.port === 465 ? true : false,
        auth: {
            user: emailConfig.username,
            pass: emailConfig.password,
        },
    })
}

export default createEmailTransporter()
