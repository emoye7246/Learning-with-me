export const lessonExecutorService = {
  id: "executor-service",
  title: "The ExecutorService and Thread Pools",
  hasChallenge: false,
  article: `
## The ExecutorService and Thread Pools

Creating a new \`Thread\` for every task is inefficient. Thread creation is expensive, and unconstrained thread creation can crash a JVM. **Thread pools** reuse threads — and \`ExecutorService\` is how you use them in Java.

---

## The Problem with Raw Threads

\`\`\`java
// Creating 1000 threads for 1000 tasks — expensive and dangerous
for (int i = 0; i < 1000; i++) {
    new Thread(() -> processTask()).start();
}
\`\`\`

A thread pool maintains a fixed set of reusable threads. Tasks are queued and assigned to the next available thread.

---

## Creating an ExecutorService

\`\`\`java
import java.util.concurrent.*;

// Fixed thread pool — always exactly N threads
ExecutorService executor = Executors.newFixedThreadPool(4);

// Single thread — sequential execution in one background thread
ExecutorService single = Executors.newSingleThreadExecutor();

// Cached thread pool — creates threads as needed, reuses idle ones
ExecutorService cached = Executors.newCachedThreadPool();

// Scheduled — for delayed or recurring tasks
ScheduledExecutorService scheduled = Executors.newScheduledThreadPool(2);
\`\`\`

---

## Submitting Runnable Tasks

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);

for (int i = 0; i < 10; i++) {
    final int taskId = i;
    executor.submit(() -> {
        System.out.println("Task " + taskId + " on " + Thread.currentThread().getName());
    });
}

executor.shutdown();  // don't forget this!
\`\`\`

---

## Submitting Callable Tasks

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);

Future<String> future = executor.submit(() -> {
    Thread.sleep(500);
    return "result";
});

String result = future.get();  // blocks until done
executor.shutdown();
\`\`\`

---

## Proper Shutdown

Always shut down the executor when you're done:

\`\`\`java
executor.shutdown();  // no new tasks; waits for running tasks to finish

// OR — wait up to 10 seconds, then force shutdown:
executor.shutdown();
if (!executor.awaitTermination(10, TimeUnit.SECONDS)) {
    executor.shutdownNow();  // interrupt running tasks
}
\`\`\`

---

## Invoking Multiple Tasks

\`\`\`java
List<Callable<Integer>> tasks = List.of(
    () -> compute(1),
    () -> compute(2),
    () -> compute(3)
);

// Run all, wait for all, get all results
List<Future<Integer>> futures = executor.invokeAll(tasks);
for (Future<Integer> f : futures) {
    System.out.println(f.get());
}

// Run all, return when the FIRST one finishes
Integer first = executor.invokeAny(tasks);
System.out.println("First result: " + first);
\`\`\`

---

## How Many Threads?

A rule of thumb:

- **CPU-bound tasks** (calculation, parsing): \`Runtime.getRuntime().availableProcessors()\` threads
- **I/O-bound tasks** (network, disk): more threads are beneficial since threads spend time waiting

\`\`\`java
int cpuCount = Runtime.getRuntime().availableProcessors();
ExecutorService executor = Executors.newFixedThreadPool(cpuCount);
\`\`\`

---

## Scheduled Tasks

\`\`\`java
ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

// Run once after 5 seconds
scheduler.schedule(() -> System.out.println("Delayed task"), 5, TimeUnit.SECONDS);

// Run every 10 seconds starting immediately
scheduler.scheduleAtFixedRate(() -> checkHealth(), 0, 10, TimeUnit.SECONDS);

// Shutdown gracefully
Runtime.getRuntime().addShutdownHook(new Thread(scheduler::shutdown));
\`\`\`

---

## What You Learned

- Thread pools reuse threads instead of creating new ones per task
- \`Executors.newFixedThreadPool(n)\` is the most common pool type
- \`executor.submit()\` accepts both \`Runnable\` and \`Callable\`
- Always call \`executor.shutdown()\` when done
- \`invokeAll()\` runs many tasks and waits for all; \`invokeAny()\` returns the first
- Match pool size to task type: CPU-bound → CPU count, I/O-bound → more threads

## What Comes Next

For more composable async code, use CompletableFuture.

Continue to: **10.7 Futures and CompletableFuture Basics**
`,
};
