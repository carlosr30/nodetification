# Nodetification

## Requirements

- Node.js v14.18.1
- NPM v6.14.15
- Apache Kafka

## Apache Kafka Setup

### MacOS Monterey

```
brew install kafka
zookeeper-server-start /opt/homebrew/etc/zookeeper/zoo.cfg
kafka-server-start /opt/homebrew/etc/kafka/server.properties
```

## Project Setup

```
cp .env.sample .env
npm run start
```

## Usage

To create a sample notification

```
npm run test-notif
```