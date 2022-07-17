import { sendEmail } from "../services/email/sendEmail.js"

export const notify = async (notification) => {
    for (let channel of notification.channels) {
        switch (channel) {
            case "email":
                await sendEmail(notification.data.email)
                break

            default:
                throw new Error("Channel does not exist")
        }
    }
}
