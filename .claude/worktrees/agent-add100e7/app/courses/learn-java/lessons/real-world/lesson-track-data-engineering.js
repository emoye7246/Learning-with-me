export const lessonTrackDataEngineering = {
  id: "track-data-engineering",
  title: "Track: Data Engineering with Apache Kafka and Spark",
  hasChallenge: false,
  article: `
## Track: Data Engineering with Apache Kafka and Spark

Every second, billions of events are happening across the internet: purchases, clicks, sensor readings, logins, messages. Someone has to collect, process, and make sense of all of it. That's the data engineer's job.

This track teaches you to build systems that handle data at scale — in real time and in batch — using two of the most important tools in modern data infrastructure: **Apache Kafka** and **Apache Spark**.

---

## What You Will Build

A sample project for this track: **an e-commerce event pipeline** that:
- Receives order events (order placed, payment confirmed, shipped, delivered) from a simulated producer
- Processes them in real time using Kafka Streams
- Aggregates daily order totals using Spark batch jobs
- Writes results to a database and a report file

This mirrors what real data teams build. It demonstrates event-driven architecture, stream processing, and batch analytics in one coherent system.

---

## Key Concepts You Will Learn

### Apache Kafka Basics

Kafka is a distributed event streaming platform. At its core:
- **Producers** publish events to named **topics**
- **Consumers** subscribe to topics and process events
- Kafka stores events durably — they can be replayed

\`\`\`java
// Producing an event
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

KafkaProducer<String, String> producer = new KafkaProducer<>(props);

OrderEvent event = new OrderEvent("order-123", "PLACED", 59.99, Instant.now());
String json = objectMapper.writeValueAsString(event);

producer.send(new ProducerRecord<>("order-events", event.orderId(), json));
producer.close();
\`\`\`

\`\`\`java
// Consuming events
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("group.id", "order-processor");
props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
props.put("auto.offset.reset", "earliest");

KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
consumer.subscribe(List.of("order-events"));

while (true) {
    ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
    for (ConsumerRecord<String, String> record : records) {
        OrderEvent event = objectMapper.readValue(record.value(), OrderEvent.class);
        processEvent(event);
    }
}
\`\`\`

### Kafka Streams
Kafka Streams is a library for building stream processing applications. It lets you transform, filter, and aggregate streams without a separate cluster:

\`\`\`java
StreamsBuilder builder = new StreamsBuilder();

KStream<String, String> orderStream = builder.stream("order-events");

// Count orders per status in real time
KTable<String, Long> orderCountByStatus = orderStream
    .mapValues(json -> parseOrderEvent(json))
    .filter((key, event) -> event != null)
    .groupBy((key, event) -> event.status())
    .count(Materialized.as("order-counts-store"));

orderCountByStatus.toStream()
    .mapValues(count -> count.toString())
    .to("order-status-counts");

KafkaStreams streams = new KafkaStreams(builder.build(), config);
streams.start();
\`\`\`

### Apache Spark Basics
Spark is a distributed computing framework for processing large datasets. It's used for batch jobs — processing everything from the past day, week, or month:

\`\`\`java
SparkSession spark = SparkSession.builder()
    .appName("DailyOrderAggregator")
    .master("local[*]")
    .getOrCreate();

// Load order events from files or a database
Dataset<Row> orders = spark.read()
    .json("data/orders/*.json");

// Aggregate: total revenue per product category per day
Dataset<Row> dailySummary = orders
    .filter(col("status").equalTo("DELIVERED"))
    .groupBy(col("category"), col("date").substr(0, 10).alias("day"))
    .agg(
        count("*").alias("order_count"),
        sum("amount").alias("total_revenue"),
        avg("amount").alias("avg_order_value")
    )
    .orderBy(col("day").desc(), col("total_revenue").desc());

dailySummary.show();
dailySummary.write().parquet("output/daily-summary");

spark.stop();
\`\`\`

### Pipelines and Architecture
A data pipeline has three stages:

**Ingestion** — collecting raw data from sources (databases, APIs, event streams, files)

**Transformation** — cleaning, enriching, aggregating, and joining the data

**Output** — writing results to databases, data warehouses, dashboards, or downstream systems

Your code will implement all three stages.

### Key Data Concepts
- **Partitioning** — how Kafka splits data across brokers; how Spark splits data across workers
- **Offsets** — Kafka's way of tracking where a consumer has read up to
- **Fault tolerance** — what happens when a Kafka broker goes down; how Spark recovers from task failures
- **Serialization** — Avro, Protobuf, and JSON for encoding events efficiently

---

## Sample Pipeline Ideas

- **Web analytics pipeline** — process clickstream data, count page views, identify popular pages
- **Stock price monitor** — consume real-time price feeds, calculate moving averages, trigger alerts
- **Social media aggregator** — ingest posts from a simulated feed, count hashtag mentions, trend detection
- **IoT sensor pipeline** — process temperature/humidity readings, detect anomalies, alert on thresholds
- **Log analysis pipeline** — ingest application logs, count error rates, identify slow endpoints

---

## Tools You Will Use

| Tool | Purpose |
|------|---------|
| Apache Kafka | Event streaming platform |
| Apache Kafka Streams | Stream processing library |
| Apache Spark | Distributed batch processing |
| Apache Zookeeper / KRaft | Kafka cluster coordination |
| Docker Compose | Run Kafka locally for development |
| Apache Avro / Jackson | Event serialization |
| PostgreSQL | Output storage |

---

## Where to Continue Learning

- **kafka.apache.org/documentation** — comprehensive Kafka docs
- **"Kafka: The Definitive Guide"** by Gwen Shapira et al. — the authoritative book
- **spark.apache.org/docs** — official Spark documentation
- **Confluent Developer** (developer.confluent.io) — free Kafka courses and tutorials
- **"Learning Spark" by Jules Damji** — modern Spark for data engineers

---

## What Comes Next

After completing this track:
- Explore **Apache Flink** for more advanced stream processing
- Learn **dbt** for SQL-based data transformation
- Study **Apache Airflow** for pipeline orchestration and scheduling
- Look into **cloud data warehouses**: BigQuery, Snowflake, Redshift

Data engineering is one of the highest-demand fields in software right now. The skills you build in this track translate directly to real roles at companies of every size.
`,
};
