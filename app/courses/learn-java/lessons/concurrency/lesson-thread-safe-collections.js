export const lessonThreadSafeCollections = {
  id: "thread-safe-collections",
  title: "Thread-Safe Collections from java.util.concurrent",
  hasChallenge: false,
  article: `
## Thread-Safe Collections from java.util.concurrent

Standard Java collections (\`ArrayList\`, \`HashMap\`, etc.) are **not thread-safe**. Using them from multiple threads without synchronization causes race conditions. Java's \`java.util.concurrent\` package provides thread-safe alternatives.

---

## The Problem with Standard Collections

\`\`\`java
List<String> list = new ArrayList<>();

// Two threads adding simultaneously → ConcurrentModificationException
// or silent data corruption
new Thread(() -> list.add("A")).start();
new Thread(() -> list.add("B")).start();
\`\`\`

---

## ConcurrentHashMap

The thread-safe alternative to \`HashMap\`:

\`\`\`java
import java.util.concurrent.ConcurrentHashMap;

ConcurrentHashMap<String, Integer> wordCount = new ConcurrentHashMap<>();

// Thread-safe operations
wordCount.put("hello", 1);
wordCount.merge("hello", 1, Integer::sum);  // atomic increment

// Atomic check-then-act
wordCount.putIfAbsent("world", 0);
wordCount.computeIfAbsent("java", key -> 0);

// Read
int count = wordCount.getOrDefault("hello", 0);
\`\`\`

Reads are non-blocking. Writes use fine-grained locking (segment-level, not whole-map).

---

## CopyOnWriteArrayList

Best when reads are far more frequent than writes:

\`\`\`java
import java.util.concurrent.CopyOnWriteArrayList;

List<String> eventListeners = new CopyOnWriteArrayList<>();

// Thread A reads (no locking)
for (String listener : eventListeners) {
    notify(listener);
}

// Thread B adds (creates a new internal copy)
eventListeners.add("new-listener");
\`\`\`

Every write creates a new copy of the backing array — expensive for frequent writes, safe for many readers.

---

## BlockingQueue

A queue designed for the producer-consumer pattern:

\`\`\`java
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

BlockingQueue<String> queue = new LinkedBlockingQueue<>(100);

// Producer — blocks if queue is full
queue.put("task");

// Consumer — blocks if queue is empty
String task = queue.take();

// Non-blocking alternatives
queue.offer("task");           // returns false if full
String t = queue.poll();       // returns null if empty
String t2 = queue.poll(1, TimeUnit.SECONDS); // waits up to 1s
\`\`\`

---

## ArrayDeque vs ArrayBlockingQueue

\`\`\`java
// Bounded queue — throws when full
BlockingQueue<String> bounded = new ArrayBlockingQueue<>(50);

// Unbounded queue — can grow to Integer.MAX_VALUE
BlockingQueue<String> unbounded = new LinkedBlockingQueue<>();

// Priority-based ordering
BlockingQueue<Task> priority = new PriorityBlockingQueue<>();
\`\`\`

---

## ConcurrentLinkedQueue

Non-blocking queue — useful when you don't need to wait:

\`\`\`java
import java.util.concurrent.ConcurrentLinkedQueue;

ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<>();
queue.offer("item");
String item = queue.poll();  // null if empty — never blocks
\`\`\`

---

## Atomic Variables

For single variables that need atomic operations:

\`\`\`java
import java.util.concurrent.atomic.*;

AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();       // atomic ++
counter.addAndGet(5);            // atomic += 5
counter.compareAndSet(5, 10);    // atomic CAS

AtomicLong    id      = new AtomicLong(0);
AtomicBoolean running = new AtomicBoolean(true);
AtomicReference<String> ref = new AtomicReference<>("initial");
\`\`\`

---

## Choosing the Right Collection

| Need | Use |
|---|---|
| Thread-safe key-value store | \`ConcurrentHashMap\` |
| Read-heavy list with rare writes | \`CopyOnWriteArrayList\` |
| Producer-consumer queue | \`LinkedBlockingQueue\` |
| Non-blocking queue | \`ConcurrentLinkedQueue\` |
| Atomic counter/flag | \`AtomicInteger\` / \`AtomicBoolean\` |

---

## What NOT to Use

Avoid the legacy \`synchronized\` wrappers — they lock the entire collection on every operation:

\`\`\`java
// Don't use these — they exist for backward compatibility
List<String> list = Collections.synchronizedList(new ArrayList<>());
Map<String, Integer> map = Collections.synchronizedMap(new HashMap<>());
\`\`\`

Use the concurrent collections above instead.

---

## What You Learned

- Standard Java collections are not thread-safe
- \`ConcurrentHashMap\` — thread-safe map with fine-grained locking
- \`CopyOnWriteArrayList\` — best for read-heavy, write-rare lists
- \`BlockingQueue\` — the core data structure for producer-consumer patterns
- Atomic variables provide lock-free atomic operations for single values
- Avoid \`Collections.synchronizedList/Map\` — use concurrent collections instead

## What Comes Next

Apply your concurrency knowledge in a real project.

Continue to: **Mini Project: Parallel File Processor using ExecutorService**
`,
};
