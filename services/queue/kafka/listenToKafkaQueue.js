import { getNotification } from "../../../notifications/index.js"
import kafka from "./kafka.js"
import { notify } from "../../../use-cases/notify.js"

export const listenToKafkaQueue = async () => {
    const consumer = kafka.consumer({
        groupId: "notification-group",
    })

    await consumer.connect()
    await consumer.subscribe({
        topic: "notification-topic",
    })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const notificationData = JSON.parse(message.value)
            const notification = getNotification(
                notificationData.notificationCode
            )

            await notify(notification(notificationData))
        },
    })
}
