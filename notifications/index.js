import { welcomeUserNotification } from "./welcomeUser.notification.js"

export const getNotification = (notificationCode) => {
    switch (notificationCode) {
        case 'WELCOME_USER':
            return welcomeUserNotification;

        default:
            throw new Error('Notification does not exist')
    }
}