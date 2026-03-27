export const lessonRaceConditionsCs = {
  id: "race-conditions-cs",
  title: "Race Conditions and Why They Are Dangerous",
  hasChallenge: false,
  article: `
## Race Conditions and Why They Are Dangerous

When multiple threads access shared data at the same time, things can go wrong in ways that are hard to reproduce and even harder to debug. This class of bug is called a race condition — and it's one of the most insidious problems in concurrent programming.

## What Is a Race Condition?

A race condition occurs when the correctness of a program depends on the relative timing of multiple threads. The "race" is between those threads — whichever one happens to run first changes the outcome.

The dangerous part: race conditions often don't crash your program. They produce wrong results silently, and they may only appear under specific load conditions or on specific hardware.

## Shared Mutable State

The root cause of almost every race condition is **shared mutable state** — data that multiple threads can both read and write simultaneously.

Consider a simple counter:

\`\`\`csharp
int counter = 0;

void Increment()
{
    counter++; // looks atomic, but it's NOT
}
\`\`\`

The \`counter++\` expression actually compiles into three steps:
1. Read the current value of \`counter\`
2. Add 1 to it
3. Write the new value back

Between any of these steps, another thread can jump in and read or write the same memory.

## A Concrete Example

\`\`\`csharp
int counter = 0;

var tasks = Enumerable.Range(0, 10)
    .Select(_ => Task.Run(() =>
    {
        for (int i = 0; i < 1000; i++)
        {
            counter++; // UNSAFE: race condition here
        }
    }))
    .ToArray();

await Task.WhenAll(tasks);

Console.WriteLine($"Final count: {counter}");
// Expected: 10,000
// Actual: something like 7,823 — different every run
\`\`\`

If you run this, you'll rarely (if ever) get 10,000. Two threads reading \`counter = 500\` simultaneously will both write \`501\`, effectively losing one increment. This is a classic lost update.

## Non-Deterministic Bugs

This non-determinism is what makes race conditions so dangerous:

- They may not appear in development (low concurrency), only in production (high load)
- They're nearly impossible to reproduce on demand
- Stack traces won't point to the real problem — they'll show symptoms, not causes
- Tests may pass 999 times and fail once, with no obvious explanation

## The lock Keyword

C# provides the \`lock\` keyword to ensure only one thread can execute a critical section at a time. When a thread enters a \`lock\` block, all other threads trying to enter the same lock must wait.

\`\`\`csharp
int counter = 0;
object lockObject = new object();

var tasks = Enumerable.Range(0, 10)
    .Select(_ => Task.Run(() =>
    {
        for (int i = 0; i < 1000; i++)
        {
            lock (lockObject)
            {
                counter++; // only one thread here at a time
            }
        }
    }))
    .ToArray();

await Task.WhenAll(tasks);

Console.WriteLine($"Final count: {counter}");
// Now reliably prints: 10,000
\`\`\`

The \`lock\` statement uses a \`Monitor\` internally. The object you pass (here \`lockObject\`) is used as a synchronization token — any \`object\` instance works, but it must be the same reference across all threads protecting the same data.

## Common lock Pitfalls

**Locking on \`this\`** — can cause external code to accidentally take your lock:
\`\`\`csharp
// Avoid
lock (this) { ... }

// Prefer a private dedicated object
private readonly object _lock = new object();
lock (_lock) { ... }
\`\`\`

**Holding locks too long** — locks block other threads. Keep critical sections short, and never do I/O inside a lock.

**Nested locks / deadlocks** — if Thread A holds Lock 1 and waits for Lock 2, while Thread B holds Lock 2 and waits for Lock 1, both threads wait forever. This is a deadlock.

## Beyond lock

For simple numeric operations, \`Interlocked\` provides atomic operations without the overhead of a full lock:

\`\`\`csharp
int counter = 0;
Interlocked.Increment(ref counter); // atomic — no lock needed
\`\`\`

For more complex concurrent scenarios, .NET provides thread-safe collection types like \`ConcurrentDictionary\` (covered in a later lesson).

## Key Takeaways

- Race conditions arise when multiple threads access shared mutable state without coordination
- They produce non-deterministic, hard-to-reproduce bugs
- \`counter++\` is not atomic — it's three operations and can be interleaved
- The \`lock\` keyword ensures mutual exclusion around a critical section
- Use a private \`object\` as your lock token; keep locks short; watch for deadlocks
- \`Interlocked\` provides lightweight atomic operations for simple numeric updates
`,
};
