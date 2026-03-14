export const lessonWhatIsConcurrency = {
  id: "what-is-concurrency",
  title: "What Is Concurrency and Why Java Needs It",
  hasChallenge: false,
  article: `
## What Is Concurrency and Why Java Needs It

Every program you've written so far runs sequentially — one instruction after another, in a single thread of execution. This works fine for small programs. Real applications need more.

---

## The Sequential Problem

Imagine a web server that handles one request at a time:

\`\`\`
Request 1 arrives → process → respond (200ms)
Request 2 arrives → wait for Request 1 → process → respond (400ms total wait)
Request 3 arrives → wait for 1 and 2 → process → respond (600ms total wait)
\`\`\`

Every user waits for all previous users to finish. A server that can handle 100 requests per second becomes a bottleneck that serves 1 at a time.

---

## What Concurrency Means

**Concurrency** means managing multiple tasks that overlap in time. Concurrency is about *dealing* with multiple things at once (even on a single CPU).

**Parallelism** means multiple tasks literally executing simultaneously on multiple CPU cores.

Java gives you both: concurrent programs that the JVM may run in parallel on multicore hardware.

---

## Where Java Uses Concurrency

- **Web servers** — Each HTTP request runs in its own thread
- **UI applications** — Keep the UI responsive while loading data
- **File processing** — Process multiple files simultaneously
- **Scheduled tasks** — Run jobs in the background
- **Database connection pools** — Multiple threads share database connections

---

## The Core Abstraction: Threads

A **thread** is an independent path of execution within a program. Every Java program starts with one thread — the **main thread**. You can create additional threads to do work concurrently.

\`\`\`
JVM
├── Thread: main         ← your main() runs here
├── Thread: background   ← you create this
└── Thread: GC           ← JVM's garbage collector
\`\`\`

---

## The Challenges of Concurrency

Concurrency introduces problems that don't exist in sequential code:

**Race conditions** — Two threads modify shared data simultaneously, producing unpredictable results.

**Deadlocks** — Two threads each hold a lock the other needs, and both wait forever.

**Visibility issues** — One thread's changes to shared data aren't visible to another thread due to CPU caching.

These are the hard problems of concurrent programming. Java provides tools to avoid them — this course teaches you to use those tools.

---

## The Promise of This Course

You don't need a computer science degree to write safe concurrent Java. The standard library provides high-level tools (\`ExecutorService\`, \`CompletableFuture\`, concurrent collections) that handle the hard parts for you.

The goal: write programs that do more than one thing at a time, safely and readably.

---

## What You Learned

- Sequential programs handle one task at a time — this becomes a bottleneck
- Concurrency lets programs manage multiple overlapping tasks
- Java programs start with one main thread; you can create more
- Concurrency introduces race conditions, deadlocks, and visibility issues
- Java's standard library provides safe, high-level tools for concurrent programming

## What Comes Next

Let's create and start threads.

Continue to: **10.2 Threads — creating and starting**
`,
};
