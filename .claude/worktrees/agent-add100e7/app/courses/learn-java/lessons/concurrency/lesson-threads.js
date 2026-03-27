export const lessonThreads = {
  id: "threads",
  title: "Threads — creating and starting",
  hasChallenge: false,
  article: `
## Threads — creating and starting

A thread is a lightweight, independent unit of execution. Creating one in Java is straightforward — understanding when to use them takes more care.

---

## Creating a Thread with Runnable

The standard way is to pass a \`Runnable\` to the \`Thread\` constructor:

\`\`\`java
public class ThreadExample {
    public static void main(String[] args) {
        Runnable task = () -> {
            System.out.println("Running in: " + Thread.currentThread().getName());
        };

        Thread thread = new Thread(task);
        thread.setName("my-background-thread");
        thread.start();  // starts the thread — does NOT block main

        System.out.println("Main thread continues: " + Thread.currentThread().getName());
    }
}
\`\`\`

Output (order may vary):
\`\`\`
Main thread continues: main
Running in: my-background-thread
\`\`\`

The two lines can appear in either order — that's the nature of concurrency.

---

## start() vs run()

\`\`\`java
Thread thread = new Thread(() -> System.out.println("Hello"));

thread.start();  // ✓ launches a new thread
thread.run();    // ✗ runs on the CURRENT thread — no new thread created
\`\`\`

Always call \`start()\`.

---

## Extending Thread (Less Common)

\`\`\`java
public class CountingThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(getName() + ": " + i);
        }
    }
}

new CountingThread().start();
\`\`\`

Prefer implementing \`Runnable\` over extending \`Thread\` — it's more flexible and doesn't waste the inheritance slot.

---

## Waiting for a Thread to Finish: join()

\`\`\`java
Thread thread = new Thread(() -> {
    try { Thread.sleep(1000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    System.out.println("Done.");
});

thread.start();
thread.join();  // blocks until the thread finishes

System.out.println("Thread completed.");  // always prints after "Done."
\`\`\`

---

## Thread.sleep()

Pause the current thread:

\`\`\`java
try {
    Thread.sleep(2000);  // sleep 2 seconds
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();  // restore interrupt status
}
\`\`\`

Always catch \`InterruptedException\` and restore the interrupt flag with \`Thread.currentThread().interrupt()\`.

---

## Thread States

\`\`\`
NEW → RUNNABLE → BLOCKED/WAITING/TIMED_WAITING → TERMINATED
\`\`\`

- **NEW** — thread created but not started
- **RUNNABLE** — running or ready to run
- **BLOCKED** — waiting for a monitor lock
- **WAITING** — waiting for a \`notify()\` or \`join()\`
- **TIMED_WAITING** — waiting with a timeout (e.g., \`sleep()\`)
- **TERMINATED** — finished

\`\`\`java
System.out.println(thread.getState());  // NEW, RUNNABLE, etc.
\`\`\`

---

## Thread Information

\`\`\`java
Thread t = Thread.currentThread();
System.out.println(t.getName());      // "main"
System.out.println(t.getId());        // unique numeric ID
System.out.println(t.getPriority());  // 1-10, default 5
System.out.println(t.isDaemon());     // daemon threads don't prevent JVM exit
\`\`\`

---

## Daemon Threads

Daemon threads run in the background. The JVM exits when only daemon threads remain:

\`\`\`java
Thread bg = new Thread(() -> {
    while (true) {
        System.out.println("heartbeat");
        Thread.sleep(1000);
    }
});
bg.setDaemon(true);  // must be set before start()
bg.start();
\`\`\`

When \`main\` finishes, the JVM exits even though this thread is still running.

---

## What You Learned

- Create threads with \`new Thread(runnable)\` and call \`start()\`
- \`start()\` creates a new thread; \`run()\` does not
- Use \`join()\` to wait for a thread to complete
- \`Thread.sleep()\` pauses the current thread
- Daemon threads don't prevent JVM exit

## What Comes Next

Next, you'll learn the \`Runnable\` and \`Callable\` interfaces in detail.

Continue to: **10.3 Runnable and Callable**
`,
};
