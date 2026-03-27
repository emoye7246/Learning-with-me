export const lessonThreadSafeCollectionsCs = {
  id: "thread-safe-collections-cs",
  title: "Thread-Safe Collections",
  hasChallenge: false,
  article: `
## Thread-Safe Collections

Standard .NET collections like \`List<T>\`, \`Dictionary<TKey, TValue>\`, and \`Queue<T>\` are not designed for concurrent access. If multiple threads read and write them simultaneously without external synchronization, you'll get corrupted data, lost updates, or exceptions. The \`System.Collections.Concurrent\` namespace provides purpose-built thread-safe alternatives.

## Why Regular Collections Are Not Thread-Safe

A \`Dictionary<K, V>\`, for example, maintains internal state about bucket positions, counts, and resize thresholds. If two threads write simultaneously, that internal state becomes inconsistent — resulting in incorrect reads, lost entries, or exceptions like \`InvalidOperationException: collection was modified\`.

\`\`\`csharp
var dict = new Dictionary<string, int>();

// UNSAFE: two threads adding to the same dictionary
Parallel.For(0, 1000, i =>
{
    dict[$"key{i}"] = i; // may throw or corrupt data
});
\`\`\`

You could wrap every access in a \`lock\`, but the concurrent collections handle this for you — more efficiently, using lock-free techniques where possible.

## ConcurrentDictionary\<TKey, TValue\>

The most commonly used concurrent collection. It's a thread-safe hash map with some powerful helpers.

\`\`\`csharp
var counts = new ConcurrentDictionary<string, int>();

// Thread-safe add or update
Parallel.ForEach(words, word =>
{
    counts.AddOrUpdate(
        key: word,
        addValue: 1,
        updateValueFactory: (key, existing) => existing + 1
    );
});

Console.WriteLine($"'hello' appeared {counts["hello"]} times");
\`\`\`

Key methods:
- \`TryAdd(key, value)\` — adds if the key doesn't exist; returns false otherwise
- \`TryGetValue(key, out value)\` — thread-safe lookup
- \`AddOrUpdate(key, addValue, updateFactory)\` — atomically adds or modifies
- \`GetOrAdd(key, valueFactory)\` — returns existing value or adds and returns new one

\`\`\`csharp
// GetOrAdd: useful for lazy initialization patterns
var cache = new ConcurrentDictionary<int, string>();
string value = cache.GetOrAdd(userId, id => FetchUserName(id));
\`\`\`

## ConcurrentQueue\<T\>

A thread-safe FIFO queue. Multiple producers can enqueue and multiple consumers can dequeue without external locking.

\`\`\`csharp
var queue = new ConcurrentQueue<string>();

// Producer threads
Task.Run(() => queue.Enqueue("item-a"));
Task.Run(() => queue.Enqueue("item-b"));

// Consumer thread
if (queue.TryDequeue(out string? item))
{
    Console.WriteLine($"Processing: {item}");
}
\`\`\`

\`TryDequeue\` returns \`false\` if the queue is empty — no exceptions for empty dequeue. Use \`Count\` or \`IsEmpty\` to check before attempting.

## ConcurrentBag\<T\>

An unordered collection optimized for scenarios where the same thread both produces and consumes items. Each thread has its own local pool, reducing contention.

\`\`\`csharp
var results = new ConcurrentBag<string>();

await Parallel.ForEachAsync(urls, async (url, ct) =>
{
    string content = await _httpClient.GetStringAsync(url, ct);
    results.Add(content); // safe from any thread
});

Console.WriteLine($"Collected {results.Count} responses");
\`\`\`

\`ConcurrentBag<T>\` is ideal for collect-from-many-threads patterns (like fan-out with \`Task.WhenAll\`) where you don't care about order.

## When to Use Interlocked

For simple numeric counters shared across threads, \`System.Threading.Interlocked\` provides atomic operations with no locking overhead at all:

\`\`\`csharp
int successCount = 0;
int errorCount = 0;

await Parallel.ForEachAsync(items, async (item, ct) =>
{
    try
    {
        await ProcessAsync(item, ct);
        Interlocked.Increment(ref successCount);
    }
    catch
    {
        Interlocked.Increment(ref errorCount);
    }
});

Console.WriteLine($"Success: {successCount}, Errors: {errorCount}");
\`\`\`

\`Interlocked\` operations:
- \`Increment(ref int)\` — atomic \`++\`
- \`Decrement(ref int)\` — atomic \`--\`
- \`Add(ref int, int)\` — atomic addition
- \`Exchange(ref T, T)\` — atomic swap
- \`CompareExchange(ref T, T, T)\` — conditional atomic swap

## Choosing the Right Tool

| Scenario | Use |
|----------|-----|
| Thread-safe key-value store | \`ConcurrentDictionary<K, V>\` |
| Producer/consumer queue | \`ConcurrentQueue<T>\` |
| Collect results from parallel work | \`ConcurrentBag<T>\` |
| Atomic counter or flag | \`Interlocked\` |
| Complex multi-step coordination | \`lock\` or \`SemaphoreSlim\` |

## Key Takeaways

- Standard collections are not thread-safe — concurrent writes corrupt internal state
- \`ConcurrentDictionary\` is the most versatile concurrent collection; use \`AddOrUpdate\` and \`GetOrAdd\` for atomic operations
- \`ConcurrentQueue\` is a thread-safe FIFO queue; always use \`TryDequeue\` not \`Dequeue\`
- \`ConcurrentBag\` is ideal for collecting results from parallel tasks where order doesn't matter
- \`Interlocked\` provides the most efficient atomic operations for simple numeric updates
- Prefer these types over manually locking a standard collection — they're designed for the job
`,
};
