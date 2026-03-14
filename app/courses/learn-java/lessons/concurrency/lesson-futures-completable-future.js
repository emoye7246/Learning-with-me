export const lessonFuturesCompletableFuture = {
  id: "futures-completable-future",
  title: "Futures and CompletableFuture Basics",
  hasChallenge: false,
  article: `
## Futures and CompletableFuture Basics

\`Future\` is limited — you can only block and wait. \`CompletableFuture\` (Java 8+) adds the ability to chain, combine, and compose asynchronous operations without blocking.

---

## The Problem with Future

\`\`\`java
Future<String> future = executor.submit(() -> fetchData());

// You can only do two things:
String result = future.get();         // block until done
boolean done  = future.isDone();      // poll

// You CANNOT:
// - chain operations ("when done, transform the result")
// - combine futures ("when both futures are done, combine")
// - handle errors without try-catch on get()
\`\`\`

---

## CompletableFuture Basics

\`\`\`java
import java.util.concurrent.CompletableFuture;

// Run async (returns void)
CompletableFuture.runAsync(() -> System.out.println("Running!"));

// Supply async (returns a value)
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    return "Hello from async";
});

// Block and get
String result = future.get();
\`\`\`

By default, \`CompletableFuture\` uses the common ForkJoinPool. You can supply your own executor:

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);
CompletableFuture.supplyAsync(() -> fetchData(), executor);
\`\`\`

---

## Chaining with thenApply

Transform the result when it arrives (like \`map\` on a stream):

\`\`\`java
CompletableFuture<Integer> future = CompletableFuture
    .supplyAsync(() -> "42")        // String
    .thenApply(Integer::parseInt)   // Integer
    .thenApply(n -> n * 2);         // Integer

System.out.println(future.get());  // 84
\`\`\`

---

## thenAccept — Consume the Result

\`\`\`java
CompletableFuture.supplyAsync(() -> loadUser("alice"))
    .thenAccept(user -> System.out.println("Loaded: " + user.name()));
    // returns CompletableFuture<Void>
\`\`\`

---

## thenCompose — Chain Dependent Futures

When the next step is also async:

\`\`\`java
CompletableFuture<Order> future = CompletableFuture
    .supplyAsync(() -> findUser("alice"))      // async: get User
    .thenCompose(user -> loadOrders(user));     // async: get their Orders
\`\`\`

Use \`thenApply\` when the next step is synchronous.
Use \`thenCompose\` when the next step is also async.

---

## Combining Two Futures

\`\`\`java
CompletableFuture<String> userFuture  = CompletableFuture.supplyAsync(() -> fetchUser());
CompletableFuture<String> orderFuture = CompletableFuture.supplyAsync(() -> fetchOrders());

// When both complete, combine their results
CompletableFuture<String> combined = userFuture.thenCombine(
    orderFuture,
    (user, orders) -> "User: " + user + ", Orders: " + orders
);

System.out.println(combined.get());
\`\`\`

---

## Running Many Futures in Parallel

\`\`\`java
List<CompletableFuture<String>> futures = urls.stream()
    .map(url -> CompletableFuture.supplyAsync(() -> fetch(url)))
    .toList();

// Wait for all to complete
CompletableFuture<Void> all = CompletableFuture.allOf(
    futures.toArray(new CompletableFuture[0])
);
all.get();  // blocks until all are done

List<String> results = futures.stream()
    .map(CompletableFuture::join)
    .toList();
\`\`\`

---

## Error Handling

\`\`\`java
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> riskyOperation())
    .exceptionally(ex -> {
        System.err.println("Failed: " + ex.getMessage());
        return "default value";  // fallback
    });
\`\`\`

Or handle both success and failure:

\`\`\`java
.handle((result, ex) -> {
    if (ex != null) return "error";
    return result.toUpperCase();
});
\`\`\`

---

## What You Learned

- \`CompletableFuture.supplyAsync()\` starts an async computation that returns a value
- \`thenApply\` transforms the result synchronously; \`thenCompose\` chains another async step
- \`thenCombine\` merges two independent futures
- \`allOf\` waits for multiple futures to complete
- \`exceptionally\` provides a fallback on failure

## What Comes Next

Data structures designed for safe concurrent access.

Continue to: **10.8 Thread-Safe Collections from java.util.concurrent**
`,
};
