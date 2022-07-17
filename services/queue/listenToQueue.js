import { listenToKafkaQueue } from "./kafka/listenToKafkaQueue.js"
import queueConfig from "../../config/queue.config.js"

export const listenToQueue = async () => {
    switch (queueConfig.driver) {
        case 'kafka':
            await listenToKafkaQueue()
            break;

        default:
            throw new Error("Queue driver is not supported.")
    }
}