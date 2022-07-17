import kafka from "./services/queue/kafka/kafka.js"

const producer = kafka.producer()

await producer.connect()
await producer.send({
    topic: 'notification-topic',
    messages: [
        {
            value: JSON.stringify({
                notificationCode: 'WELCOME_USER',
                firstName: 'Carlos',
                lastName: 'Resultay',
                email: 'resultaycarlos@gmail.com',
                mobileNumber: '+639453057020'
            })
        }
    ]
})

await producer.disconnect()