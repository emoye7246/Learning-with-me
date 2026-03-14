export const lessonMiniProjectProducerConsumer = {
  id: "mini-project-producer-consumer",
  title: "Mini Project: Producer-Consumer Simulation with Thread-Safe Queue",
  hasChallenge: false,
  article: `
## Mini Project: Producer-Consumer Simulation with Thread-Safe Queue

The **producer-consumer** pattern is one of the most fundamental concurrent design patterns. Producers generate work; consumers process it. A thread-safe queue connects them.

---

## The Pattern

\`\`\`
Producer 1 ──┐
Producer 2 ──┼──► [BlockingQueue] ──► Consumer 1
Producer 3 ──┘                    └──► Consumer 2
\`\`\`

The queue decouples producers from consumers. Producers don't wait for consumers; consumers don't wait for producers (unless the queue is empty or full).

---

## What You'll Build

Simulate an order processing system:
- 3 **producers** generate customer orders at random intervals
- 2 **consumers** process orders from the queue
- A **poison pill** signals consumers to stop

---

## Expected Output

\`\`\`
[Producer-1] Generated: Order{id=1, item='Widget', quantity=3}
[Producer-2] Generated: Order{id=2, item='Gadget', quantity=1}
[Consumer-1] Processing: Order{id=1, item='Widget', quantity=3}
[Producer-3] Generated: Order{id=3, item='Doohickey', quantity=7}
[Consumer-2] Processing: Order{id=2, item='Gadget', quantity=1}
...
[Consumer-1] Shutting down.
[Consumer-2] Shutting down.
Processed 20 orders in 3.2s
\`\`\`

---

## Step 1: The Order Record

\`\`\`java
import java.util.concurrent.atomic.AtomicInteger;

public record Order(int id, String item, int quantity) {
    private static final AtomicInteger nextId = new AtomicInteger(1);

    public static Order generate() {
        String[] items = {"Widget", "Gadget", "Doohickey", "Sprocket", "Cog"};
        String item = items[(int)(Math.random() * items.length)];
        int quantity = (int)(Math.random() * 10) + 1;
        return new Order(nextId.getAndIncrement(), item, quantity);
    }

    // Sentinel value — signals consumers to stop
    public static final Order POISON_PILL = new Order(-1, "STOP", 0);
}
\`\`\`

---

## Step 2: The Producer

\`\`\`java
import java.util.concurrent.BlockingQueue;

public class OrderProducer implements Runnable {
    private final String name;
    private final BlockingQueue<Order> queue;
    private final int ordersToGenerate;

    public OrderProducer(String name, BlockingQueue<Order> queue, int count) {
        this.name = name;
        this.queue = queue;
        this.ordersToGenerate = count;
    }

    @Override
    public void run() {
        try {
            for (int i = 0; i < ordersToGenerate; i++) {
                Order order = Order.generate();
                queue.put(order);  // blocks if queue is full
                System.out.println("[" + name + "] Generated: " + order);
                Thread.sleep((long)(Math.random() * 200));
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
\`\`\`

---

## Step 3: The Consumer

\`\`\`java
import java.util.concurrent.BlockingQueue;

public class OrderConsumer implements Runnable {
    private final String name;
    private final BlockingQueue<Order> queue;

    public OrderConsumer(String name, BlockingQueue<Order> queue) {
        this.name = name;
        this.queue = queue;
    }

    @Override
    public void run() {
        try {
            while (true) {
                Order order = queue.take();  // blocks until an order is available

                if (order == Order.POISON_PILL) {
                    queue.put(Order.POISON_PILL);  // pass the pill to other consumers
                    System.out.println("[" + name + "] Shutting down.");
                    break;
                }

                System.out.println("[" + name + "] Processing: " + order);
                Thread.sleep((long)(Math.random() * 300));  // simulate work
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
\`\`\`

---

## Step 4: Orchestrate It

\`\`\`java
import java.util.concurrent.*;

public class OrderSystem {
    public static void main(String[] args) throws InterruptedException {
        int PRODUCER_COUNT = 3;
        int CONSUMER_COUNT = 2;
        int ORDERS_PER_PRODUCER = 7;

        BlockingQueue<Order> queue = new LinkedBlockingQueue<>(50);

        ExecutorService producers = Executors.newFixedThreadPool(PRODUCER_COUNT);
        ExecutorService consumers = Executors.newFixedThreadPool(CONSUMER_COUNT);

        long start = System.currentTimeMillis();

        // Start consumers
        for (int i = 1; i <= CONSUMER_COUNT; i++) {
            consumers.submit(new OrderConsumer("Consumer-" + i, queue));
        }

        // Start producers
        for (int i = 1; i <= PRODUCER_COUNT; i++) {
            producers.submit(new OrderProducer("Producer-" + i, queue, ORDERS_PER_PRODUCER));
        }

        // Wait for all producers to finish
        producers.shutdown();
        producers.awaitTermination(30, TimeUnit.SECONDS);

        // Signal consumers to stop
        queue.put(Order.POISON_PILL);

        // Wait for consumers to finish
        consumers.shutdown();
        consumers.awaitTermination(30, TimeUnit.SECONDS);

        long elapsed = System.currentTimeMillis() - start;
        int total = PRODUCER_COUNT * ORDERS_PER_PRODUCER;
        System.out.printf("Processed %d orders in %.1fs%n", total, elapsed / 1000.0);
    }
}
\`\`\`

---

## What You Practiced

- Implementing the producer-consumer pattern with \`BlockingQueue\`
- Using the poison pill pattern to cleanly stop consumers
- Coordinating multiple producers and consumers with \`ExecutorService\`
- Thread-safe communication without explicit synchronization

This completes Course 10 — Concurrency Basics.
`,
};
