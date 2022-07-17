import {} from "dotenv/config"

export default {
    driver: process.env.QUEUE_DRIVER,
    drivers: {
        kafka: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: process.env.KAFKA_BROKERS.split(","),
        },
    },
}
