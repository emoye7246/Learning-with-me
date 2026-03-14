export const lessonSynchronizedKeyword = {
  id: "synchronized-keyword",
  title: "The synchronized Keyword",
  hasChallenge: false,
  article: `
## The synchronized Keyword

\`synchronized\` is Java's built-in mechanism for preventing race conditions. It ensures that only one thread executes a block of code at a time.

---

## Synchronized Methods

\`\`\`java
public class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;  // only one thread can execute this at a time
    }

    public synchronized int getCount() {
        return count;
    }
}
\`\`\`

When one thread is inside a \`synchronized\` method, all other threads that try to call any \`synchronized\` method on the **same object** must wait.

---

## How It Works: Monitors

Every Java object has an invisible **monitor** (also called a lock). When a thread enters a \`synchronized\` method:
1. It acquires the monitor
2. Executes the method
3. Releases the monitor

Other threads block (wait) until the monitor is available.

\`\`\`
Thread A: acquires lock → executes increment() → releases lock
Thread B: waits ............................................→ acquires lock → executes
\`\`\`

No more lost updates.

---

## Synchronized Blocks

Synchronize only the part that needs protection, not the whole method:

\`\`\`java
public class BankAccount {
    private double balance;
    private final Object lock = new Object();

    public void deposit(double amount) {
        // Non-critical work can run concurrently
        validateAmount(amount);

        synchronized (lock) {
            // Only this part is serialized
            balance += amount;
        }
    }
}
\`\`\`

Smaller synchronized blocks mean less waiting — better throughput.

---

## Synchronized on this

\`\`\`java
public void increment() {
    synchronized (this) {
        count++;
    }
}
\`\`\`

\`synchronized (this)\` is equivalent to a \`synchronized\` method. \`synchronized\` methods use the object (\`this\`) as the lock.

---

## Static Synchronized Methods

For static methods, the lock is the **class object**, not an instance:

\`\`\`java
public class IdGenerator {
    private static int nextId = 0;

    public static synchronized int generateId() {
        return nextId++;
    }
}
\`\`\`

---

## The Deadlock Danger

If two threads each hold a lock that the other needs, they wait forever:

\`\`\`java
// Thread A holds lockA, wants lockB
// Thread B holds lockB, wants lockA → DEADLOCK

synchronized (lockA) {
    synchronized (lockB) {  // Thread A waits for B
        // ...
    }
}

// Thread B:
synchronized (lockB) {
    synchronized (lockA) {  // Thread B waits for A
        // ...
    }
}
\`\`\`

**Prevention:** always acquire multiple locks in the same order across all threads.

---

## When synchronized Is Too Coarse

\`\`\`java
// BAD — synchronizes on a shared object
synchronized (SomeClass.class) {
    // All threads blocked for all operations
}
\`\`\`

If you're synchronizing on a shared class or a public object, all threads in the JVM compete for the same lock. Use a private lock object instead.

---

## Limitations of synchronized

- **Not reentrant in a useful way across threads** — but it is reentrant within the same thread (a thread won't deadlock calling its own synchronized methods)
- **No timeout** — a thread waits indefinitely for the lock
- **No way to interrupt a waiting thread**

For more control, use \`ReentrantLock\` from \`java.util.concurrent.locks\`.

---

## What You Learned

- \`synchronized\` methods and blocks use the object's monitor as a lock
- Only one thread at a time can execute synchronized code on the same lock
- Use synchronized blocks to minimize the critical section
- Static synchronized methods use the class object as the lock
- Deadlocks occur when threads acquire locks in different orders — always use a consistent order

## What Comes Next

Instead of managing threads manually, use ExecutorService.

Continue to: **10.6 The ExecutorService and Thread Pools**
`,
};
