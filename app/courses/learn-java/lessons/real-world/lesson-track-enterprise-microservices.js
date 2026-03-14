export const lessonTrackEnterpriseMicroservices = {
  id: "track-enterprise-microservices",
  title: "Track: Enterprise and Microservices with Spring Cloud",
  hasChallenge: false,
  article: `
## Track: Enterprise and Microservices with Spring Cloud

When companies grow, their single application often becomes a liability. One team can't deploy without breaking another. Features pile up in a codebase nobody fully understands. The database becomes a bottleneck for everything.

The answer — at scale — is **microservices**: breaking a large application into a network of small, independently deployable services, each responsible for a focused part of the system.

Spring Cloud is the framework that makes microservices practical on the JVM. This track teaches you to design, build, and operate them.

---

## What You Will Build

A sample project: **an order management system** decomposed into microservices:

- **product-service** — manages the product catalog
- **inventory-service** — tracks stock levels
- **order-service** — creates and manages orders, calls product and inventory services
- **notification-service** — sends email/SMS confirmations when orders are placed
- **api-gateway** — the single entry point that routes requests to the right service

Each service has its own Spring Boot app, its own database, and deploys independently.

---

## Key Concepts You Will Learn

### What Microservices Actually Are

A microservice is a service that:
- Does one thing well (single responsibility)
- Owns its own data (no shared databases)
- Communicates over the network (HTTP or messaging)
- Can be deployed independently of other services

The trade-off: you gain deployment flexibility and team independence at the cost of network complexity and operational overhead. This trade-off only pays off at a certain team and system size.

### Spring Cloud: The Core Components

Spring Cloud is a collection of tools that solve the hard problems in distributed systems.

**Service Discovery with Eureka**

How does order-service know where inventory-service is running? In a cloud environment, services move between machines. Service discovery solves this:

\`\`\`java
// Eureka server — the service registry
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}
\`\`\`

\`\`\`java
// In each microservice — register with Eureka
@SpringBootApplication
@EnableDiscoveryClient
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}
\`\`\`

\`\`\`yaml
# application.yml in order-service
spring:
  application:
    name: order-service
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
\`\`\`

**API Gateway with Spring Cloud Gateway**

\`\`\`java
@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("product-service", r -> r
                .path("/api/products/**")
                .filters(f -> f.stripPrefix(1))
                .uri("lb://product-service"))
            .route("order-service", r -> r
                .path("/api/orders/**")
                .filters(f -> f.stripPrefix(1))
                .uri("lb://order-service"))
            .build();
    }
}
\`\`\`

The \`lb://\` prefix tells the gateway to use load-balanced discovery — it asks Eureka for the actual address at runtime.

**Centralized Configuration with Spring Cloud Config**

Rather than keeping configuration files in each service, Config Server serves configuration from a single Git repository:

\`\`\`java
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
\`\`\`

\`\`\`yaml
# bootstrap.yml in any client service
spring:
  application:
    name: order-service
  config:
    import: configserver:http://localhost:8888
\`\`\`

### Synchronous vs. Asynchronous Communication

**Synchronous (HTTP/REST):** Service A calls Service B and waits for a response. Simple, but creates coupling — if B is slow, A is slow.

\`\`\`java
@Service
public class OrderService {

    private final RestClient restClient;

    public boolean checkInventory(Long productId, int quantity) {
        InventoryResponse response = restClient.get()
            .uri("http://inventory-service/api/inventory/{id}", productId)
            .retrieve()
            .body(InventoryResponse.class);
        return response != null && response.availableQuantity() >= quantity;
    }
}
\`\`\`

**Asynchronous (Messaging):** Service A publishes an event and continues. Service B processes it independently. More resilient, but harder to reason about.

\`\`\`java
// Publishing an event after order creation
@Service
public class OrderService {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public Order createOrder(CreateOrderRequest request) {
        Order order = saveOrder(request);
        OrderCreatedEvent event = new OrderCreatedEvent(order.getId(), order.getCustomerEmail());
        kafkaTemplate.send("order-events", objectMapper.writeValueAsString(event));
        return order;
    }
}

// notification-service listens and sends the email
@KafkaListener(topics = "order-events", groupId = "notification-group")
public void handleOrderCreated(String message) {
    OrderCreatedEvent event = objectMapper.readValue(message, OrderCreatedEvent.class);
    emailService.sendOrderConfirmation(event.customerEmail(), event.orderId());
}
\`\`\`

### Resilience Patterns
Distributed systems fail in new ways. Spring Cloud provides tools to handle this:

- **Circuit Breaker (Resilience4j)** — stops calling a failing service temporarily
- **Retry** — automatically retries transient failures
- **Fallback** — returns a default response when a service is unavailable
- **Timeout** — don't wait forever for a response

\`\`\`java
@CircuitBreaker(name = "inventoryService", fallbackMethod = "inventoryFallback")
@Retry(name = "inventoryService")
public InventoryResponse checkInventory(Long productId) {
    return restClient.get()
        .uri("http://inventory-service/api/inventory/{id}", productId)
        .retrieve()
        .body(InventoryResponse.class);
}

public InventoryResponse inventoryFallback(Long productId, Exception e) {
    log.warn("Inventory service unavailable, using fallback for product {}", productId);
    return new InventoryResponse(productId, 0, false);
}
\`\`\`

### Distributed Tracing
When a request flows through five services and fails, how do you find where it broke? Distributed tracing adds a trace ID to every request so you can follow it across services:

\`\`\`yaml
# Spring Boot automatically propagates trace IDs with Micrometer Tracing
management:
  tracing:
    sampling:
      probability: 1.0
  zipkin:
    tracing:
      endpoint: http://localhost:9411/api/v2/spans
\`\`\`

---

## Sample System Ideas

- **E-commerce platform** — catalog, cart, orders, payments, notifications
- **Healthcare portal** — patients, appointments, records, billing (separate services)
- **Banking system** — accounts, transfers, fraud detection, notifications
- **Ride-sharing backend** — users, drivers, trips, pricing, payments

---

## Where to Continue Learning

- **"Microservices Patterns" by Chris Richardson** — the best book on microservice design
- **spring.io/projects/spring-cloud** — official Spring Cloud documentation
- **"Building Microservices" by Sam Newman** — architecture and organization
- **Resilience4j docs** — resilience4j.readme.io
- **Netflix Tech Blog** — case studies from one of the companies that pioneered microservices

---

## What Comes Next

After this track:
- Learn **Kubernetes** for deploying and managing containerized microservices at scale
- Explore **service mesh** (Istio, Linkerd) for advanced traffic management
- Study **event sourcing and CQRS** for complex domain problems
- Dive into **Domain-Driven Design (DDD)** to learn how to draw service boundaries

This track is a senior-level skill set. Companies that run Spring Cloud microservices pay well for engineers who understand them deeply.
`,
};
