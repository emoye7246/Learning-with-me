export const lessonCapstoneDataPipeline = {
  id: "capstone-data-pipeline",
  title: "Capstone: Data Pipeline",
  hasChallenge: false,
  article: `
## Capstone: Data Pipeline

This is your capstone project for the Data Engineering track.

You will build a complete data pipeline — one that ingests real data from a source, transforms it, and produces meaningful output. This is the type of system that powers analytics dashboards, fraud detection systems, business intelligence platforms, and real-time monitoring tools.

Data engineering is one of the fastest-growing and highest-paid specializations in software. This project demonstrates that you can build the systems that make data useful.

---

## Project Brief

Design and implement a data pipeline that:
1. **Ingests** data from a real or realistic source
2. **Transforms** it — filters, enriches, aggregates, or restructures it
3. **Outputs** meaningful results — to a database, file, dashboard, or alert system

The pipeline should process a non-trivial volume of data (at least hundreds of records) and demonstrate real transformation logic — not just copying data from one place to another.

---

## Requirements

### Ingestion
- [ ] The pipeline ingests data from a **real source** — one of:
  - A public API (weather, financial, news, GitHub, etc.)
  - A Kafka topic (use a producer you write to simulate real events)
  - A CSV or JSON file with real-world data (downloaded, not invented)
  - A database table
- [ ] Ingestion is **repeatable** — the pipeline can be run multiple times without corrupting data
- [ ] The ingestion layer handles network errors or missing files **gracefully** — with meaningful error messages, not crashes

### Transformation
- [ ] The pipeline applies at least **2 distinct transformation steps**. Examples:
  - Filter records by a field value (e.g., status = "completed")
  - Enrich records by joining with another data source
  - Aggregate: group by a field and compute count, sum, min, max, or average
  - Parse and restructure: extract fields from a nested JSON structure
  - Detect anomalies: flag records that fall outside expected ranges
- [ ] Transformation logic is in its own class(es), separate from ingestion and output
- [ ] Edge cases are handled: null fields, unexpected values, malformed records

### Output
- [ ] Results are written to a **persistent output** — one of:
  - A database table (PostgreSQL, H2, SQLite)
  - A CSV or JSON report file
  - A printed summary report with real statistics (not just raw data)
- [ ] If run multiple times, the output is **idempotent** (doesn't duplicate data) or **versioned** (timestamped outputs)

### Testing
- [ ] There are **unit tests** for at least 2 transformation functions
- [ ] Tests cover edge cases: empty input, null fields, records that should be filtered out
- [ ] All tests pass with \`mvn test\`

### GitHub History
- [ ] At least **10 meaningful commits**
- [ ] Commit messages describe what was built or fixed
- [ ] Large data files are **not committed** (use \`.gitignore\`; document where to get the data in the README)

---

## Getting Started

### Option A: Kafka-Based Streaming Pipeline

Run Kafka locally with Docker Compose:

\`\`\`yaml
# docker-compose.yml
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on: [zookeeper]
    ports:
      - "9092:9092"
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
\`\`\`

Start with: \`docker compose up -d\`

Write a producer that simulates events, and a consumer that processes them.

### Option B: Batch Processing Pipeline with a Public API

\`\`\`java
public class WeatherIngester {

    private final HttpClient httpClient = HttpClient.newHttpClient();
    private static final String API_KEY = System.getenv("WEATHER_API_KEY");

    public List<WeatherReading> ingestCities(List<String> cities) {
        return cities.stream()
            .map(this::fetchWeather)
            .filter(Optional::isPresent)
            .map(Optional::get)
            .toList();
    }

    private Optional<WeatherReading> fetchWeather(String city) {
        try {
            String url = "https://api.openweathermap.org/data/2.5/weather?q="
                + URLEncoder.encode(city, StandardCharsets.UTF_8)
                + "&appid=" + API_KEY + "&units=metric";

            HttpRequest request = HttpRequest.newBuilder(URI.create(url)).build();
            HttpResponse<String> response = httpClient.send(request,
                HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                return Optional.of(parseWeatherResponse(response.body(), city));
            } else {
                System.err.printf("Failed to fetch weather for %s: %d%n", city, response.statusCode());
                return Optional.empty();
            }
        } catch (IOException | InterruptedException e) {
            System.err.printf("Error fetching weather for %s: %s%n", city, e.getMessage());
            return Optional.empty();
        }
    }
}
\`\`\`

### Transformation Example

\`\`\`java
public class WeatherTransformer {

    public List<WeatherReading> filterHotCities(List<WeatherReading> readings, double minTemp) {
        return readings.stream()
            .filter(r -> r.temperatureCelsius() >= minTemp)
            .toList();
    }

    public Map<String, DoubleSummaryStatistics> summarizeByCountry(List<WeatherReading> readings) {
        return readings.stream()
            .collect(Collectors.groupingBy(
                WeatherReading::country,
                Collectors.summarizingDouble(WeatherReading::temperatureCelsius)
            ));
    }

    public List<WeatherAlert> detectExtremes(List<WeatherReading> readings) {
        return readings.stream()
            .filter(r -> r.temperatureCelsius() > 38.0 || r.temperatureCelsius() < -20.0)
            .map(r -> new WeatherAlert(r.city(), r.temperatureCelsius(), determineType(r)))
            .toList();
    }
}
\`\`\`

### Output Example

\`\`\`java
public class ReportWriter {

    public void writeCsvReport(List<WeatherReading> readings, Path outputPath) throws IOException {
        try (BufferedWriter writer = Files.newBufferedWriter(outputPath)) {
            writer.write("city,country,temperature_c,humidity,description,timestamp");
            writer.newLine();
            for (WeatherReading r : readings) {
                writer.write(String.format("%s,%s,%.1f,%d,%s,%s",
                    r.city(), r.country(), r.temperatureCelsius(),
                    r.humidity(), r.description(), r.fetchedAt()));
                writer.newLine();
            }
        }
    }

    public void printSummary(Map<String, DoubleSummaryStatistics> byCountry) {
        System.out.println("=== Temperature Summary by Country ===");
        byCountry.entrySet().stream()
            .sorted(Map.Entry.<String, DoubleSummaryStatistics>comparingByValue(
                Comparator.comparingDouble(DoubleSummaryStatistics::getAverage)).reversed())
            .forEach(e -> System.out.printf("%-20s avg: %5.1f°C  min: %5.1f°C  max: %5.1f°C  cities: %d%n",
                e.getKey(),
                e.getValue().getAverage(),
                e.getValue().getMin(),
                e.getValue().getMax(),
                e.getValue().getCount()));
    }
}
\`\`\`

---

## Example Pipeline Ideas

**Weather dashboard** — ingest weather for 50+ cities from OpenWeatherMap API; aggregate by country; flag extreme temperatures; write daily report.

**GitHub activity tracker** — ingest commit data from the GitHub API for a list of repos; count commits per day; identify most active contributors; detect inactive repos.

**Stock price monitor** — ingest historical stock data from a free API (Alpha Vantage, Yahoo Finance); calculate moving averages; detect price crossings; generate alert report.

**News topic aggregator** — ingest headlines from a news API; count topics/keywords; track trending topics over multiple runs; write summary to database.

**E-commerce event simulator** — produce realistic order events to Kafka (random customers, products, amounts); consume and aggregate: total revenue by hour, top products, failed payment rate.

---

## Completion Checklist

- [ ] Pipeline runs end-to-end from a single \`main\` method or command
- [ ] Real data is ingested (from a live API or a real downloaded dataset)
- [ ] At least 2 transformation steps are applied
- [ ] Results are written to a persistent output (file or database)
- [ ] Re-running the pipeline doesn't corrupt the output
- [ ] Tests cover transformation logic with edge cases
- [ ] \`mvn test\` passes
- [ ] README explains: what the pipeline does, what data source it uses, how to run it, what the output looks like
- [ ] Data files are gitignored; README explains how to obtain them

---

## What You Learned

Completing this project means you can:

- Connect to external data sources and handle unreliable network calls
- Design transformation logic that is tested and separated from I/O
- Write idempotent pipelines that can be run repeatedly
- Think in terms of data flow: ingestion, transformation, output
- Work with real-world messy data — nulls, unexpected values, encoding issues

Data engineers who can build reliable pipelines from end to end are in high demand. This project is proof of that capability.
`,
};
