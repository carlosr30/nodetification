import { Kafka } from "kafkajs"
import queueConfig from "../../../config/queue.config.js"

export default new Kafka({
    clientId: queueConfig.drivers.kafka.clientId,
    brokers: queueConfig.drivers.kafka.brokers,
})
