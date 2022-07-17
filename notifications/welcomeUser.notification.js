export const welcomeUserNotification = ({
    mobileNumber,
    email,
    firstName,
    lastName,
}) => {
    let channels = []
    if (email) channels.push("email")

    return Object.freeze({
        channels: channels,
        data: {
            email: {
                to: email,
                subject: `Welcome ${firstName} ${lastName}`,
                text: `Thank you for signing up.`,
            },
        },
    })
}
