export const lessonRaceConditions = {
  id: "race-conditions",
  title: "Race Conditions and Why They Are Dangerous",
  hasChallenge: false,
  article: `
## Race Conditions and Why They Are Dangerous

A race condition occurs when the correctness of a program depends on the timing of thread scheduling. They are among the hardest bugs to find because they happen unpredictably.

---

## A Classic Race Condition

\`\`\`java
public class Counter {
    private int count = 0;

    public void increment() {
        count++;  // looks like one operation — it's not
    }

    public int getCount() { return count; }
}
\`\`\`

\`count++\` is actually three operations:
1. Read the value of \`count\`
2. Add 1
3. Write the result back

If two threads do this simultaneously:

\`\`\`
Thread A reads count: 0
Thread B reads count: 0
Thread A writes count: 1
Thread B writes count: 1  ← should be 2!
\`\`\`

The increment is lost. This is a **lost update** — a race condition.

---

## Demonstrating the Bug

\`\`\`java
public class RaceConditionDemo {
    static int count = 0;

    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> {
            for (int i = 0; i < 100_000; i++) {
                count++;
            }
        };

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Expected: 200000");
        System.out.println("Actual:   " + count);  // usually less than 200000
    }
}
\`\`\`

Run this multiple times. You'll get different wrong answers each time.

---

## Why This Is Dangerous

Race conditions:
- Produce wrong results **sometimes** — not always
- Are extremely hard to reproduce in testing
- May only appear under heavy load or on specific hardware
- Don't produce exceptions — they corrupt data silently

A banking system with a race condition might occasionally lose money. A medical system might record the wrong dose. These bugs are serious.

---

## Check-Then-Act Race Conditions

Another pattern:

\`\`\`java
// NOT thread-safe
if (!map.containsKey("key")) {
    map.put("key", computeValue());  // another thread may have added it between the check and the put
}
\`\`\`

The check and the action are not atomic — another thread can sneak in between them.

---

## Read-Modify-Write Race Conditions

\`\`\`java
// NOT thread-safe
long balance = account.getBalance();  // read
balance += deposit;                    // modify
account.setBalance(balance);           // write

// Another thread may have modified balance between read and write
\`\`\`

---

## How to Avoid Race Conditions

Java provides three main approaches:

1. **\`synchronized\`** — serialize access to shared state (next lesson)
2. **Atomic classes** — \`AtomicInteger\`, \`AtomicLong\` — hardware-level atomic operations
3. **Thread-safe data structures** — classes designed for concurrent use

Quick fix for the counter using \`AtomicInteger\`:

\`\`\`java
import java.util.concurrent.atomic.AtomicInteger;

public class Counter {
    private final AtomicInteger count = new AtomicInteger(0);

    public void increment() {
        count.incrementAndGet();  // atomic — no race condition
    }

    public int getCount() { return count.get(); }
}
\`\`\`

\`incrementAndGet()\` is guaranteed to be atomic on any hardware.

---

## The Visibility Problem

Even when you don't have a race condition on writes, one thread may not see another thread's changes due to CPU caching. The \`volatile\` keyword forces visibility:

\`\`\`java
private volatile boolean running = true;

// Thread 1
public void stop() { running = false; }

// Thread 2
while (running) { doWork(); }
// Without volatile, Thread 2 may never see running = false
\`\`\`

---

## What You Learned

- Race conditions occur when multiple threads access shared mutable state without coordination
- \`count++\` is not atomic — it's three separate operations
- Race conditions produce wrong results intermittently and silently
- Fix them with \`synchronized\`, atomic classes, or thread-safe collections
- \`volatile\` ensures visibility of changes across threads (not atomicity)

## What Comes Next

Now you'll use \`synchronized\` to protect shared state.

Continue to: **10.5 The synchronized Keyword**
`,
};
