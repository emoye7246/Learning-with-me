export const lessonRunnableCallable = {
  id: "runnable-callable",
  title: "Runnable and Callable",
  hasChallenge: false,
  article: `
## Runnable and Callable

Java has two functional interfaces for representing tasks that run on a thread. Understanding the difference is essential for working with \`ExecutorService\`.

---

## Runnable

\`Runnable\` represents a task that runs and returns nothing:

\`\`\`java
@FunctionalInterface
public interface Runnable {
    void run();
}
\`\`\`

\`\`\`java
Runnable task = () -> System.out.println("Task running");
new Thread(task).start();
\`\`\`

Because it returns \`void\`, you can't get a result or propagate a checked exception.

---

## Callable\<V\>

\`Callable\` represents a task that returns a result and can throw a checked exception:

\`\`\`java
@FunctionalInterface
public interface Callable<V> {
    V call() throws Exception;
}
\`\`\`

\`\`\`java
Callable<Integer> task = () -> {
    Thread.sleep(500);
    return 42;
};
\`\`\`

\`Callable\` is used with \`ExecutorService\`, not directly with \`Thread\`.

---

## Runnable vs Callable

| | Runnable | Callable\<V\> |
|---|---|---|
| Returns a value | No | Yes |
| Throws checked exception | No | Yes |
| Used with | Thread, ExecutorService | ExecutorService |
| Return type | \`void\` | \`V\` |

---

## Using Callable with ExecutorService

\`\`\`java
import java.util.concurrent.*;

ExecutorService executor = Executors.newSingleThreadExecutor();

Callable<String> task = () -> {
    Thread.sleep(1000);
    return "Result from background thread";
};

Future<String> future = executor.submit(task);

// Do other work here...
System.out.println("Task submitted, continuing...");

// Block and get the result
String result = future.get();
System.out.println("Got: " + result);

executor.shutdown();
\`\`\`

---

## Future\<V\>

\`Future\` represents the result of an asynchronous task:

\`\`\`java
Future<Integer> future = executor.submit(() -> expensiveCalculation());

// Check if done without blocking
if (future.isDone()) {
    Integer result = future.get();
}

// Block with a timeout
Integer result = future.get(5, TimeUnit.SECONDS);  // throws TimeoutException if too slow

// Cancel the task
future.cancel(true);  // true = interrupt if running
\`\`\`

---

## Handling Exceptions from Callable

\`\`\`java
Future<Integer> future = executor.submit(() -> {
    throw new IOException("Something failed");
});

try {
    Integer result = future.get();
} catch (ExecutionException e) {
    Throwable cause = e.getCause();  // the original IOException
    System.err.println("Task failed: " + cause.getMessage());
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
}
\`\`\`

Exceptions from \`Callable\` are wrapped in \`ExecutionException\` when you call \`future.get()\`.

---

## Submitting Multiple Callables

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);

List<Callable<String>> tasks = List.of(
    () -> fetchUrl("https://api.example.com/users"),
    () -> fetchUrl("https://api.example.com/orders"),
    () -> fetchUrl("https://api.example.com/products")
);

List<Future<String>> futures = executor.invokeAll(tasks);

for (Future<String> f : futures) {
    System.out.println(f.get());
}

executor.shutdown();
\`\`\`

\`invokeAll()\` waits for all tasks to complete.

---

## What You Learned

- \`Runnable\` — fire-and-forget, returns nothing, no checked exceptions
- \`Callable<V>\` — returns a result, can throw checked exceptions
- \`Future<V>\` — the result placeholder for an async \`Callable\` task
- Call \`future.get()\` to block and retrieve the result
- Exceptions from \`Callable\` are wrapped in \`ExecutionException\`
- \`invokeAll()\` runs a list of Callables and returns their Futures

## What Comes Next

Now you'll understand one of the most dangerous concurrency bugs: race conditions.

Continue to: **10.4 Race Conditions and Why They Are Dangerous**
`,
};
