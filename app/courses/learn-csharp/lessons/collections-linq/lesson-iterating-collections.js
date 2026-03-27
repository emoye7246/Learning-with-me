export const lessonIteratingCollections = {
  id: "iterating-collections-cs",
  title: "Iterating Collections",
  hasChallenge: false,
  article: `
## Iterating Collections

Knowing how to traverse a collection is fundamental to working with data in C#. There are several ways to iterate collections, each with different trade-offs around simplicity, access to indices, and flexibility.

### foreach — The Most Common Approach

\`foreach\` is the cleanest way to iterate any collection that implements \`IEnumerable<T>\`. It works on arrays, lists, dictionaries, sets, queues, stacks, and any other standard collection:

\`\`\`csharp
List<string> names = new List<string> { "Alice", "Bob", "Carol" };

foreach (string name in names)
{
    Console.WriteLine(name);
}
\`\`\`

\`foreach\` reads clearly and prevents index-out-of-bounds errors. The one limitation: you cannot modify the collection (add or remove items) while iterating — doing so throws an \`InvalidOperationException\`.

### for Loop — When You Need the Index

Use a classic \`for\` loop when you need the current index, need to iterate backwards, or want to skip elements:

\`\`\`csharp
List<string> items = new List<string> { "alpha", "beta", "gamma", "delta" };

// Forward with index
for (int i = 0; i < items.Count; i++)
{
    Console.WriteLine($"[{i}] {items[i]}");
}

// Backwards
for (int i = items.Count - 1; i >= 0; i--)
{
    Console.WriteLine(items[i]);
}

// Every other item
for (int i = 0; i < items.Count; i += 2)
{
    Console.WriteLine(items[i]);
}
\`\`\`

A \`for\` loop also allows safe removal when iterating in reverse (removing forward shifts indices and causes items to be skipped):

\`\`\`csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };

// Safe: iterate backwards when removing
for (int i = numbers.Count - 1; i >= 0; i--)
{
    if (numbers[i] % 2 == 0)
        numbers.RemoveAt(i);
}
// {1, 3, 5}
\`\`\`

### while with Enumerator — Manual Control

Every enumerable collection exposes a \`GetEnumerator()\` method that returns an \`IEnumerator<T>\`. \`foreach\` uses this under the hood, but you can use it manually for fine-grained control:

\`\`\`csharp
List<int> data = new List<int> { 10, 20, 30, 40, 50 };
IEnumerator<int> enumerator = data.GetEnumerator();

while (enumerator.MoveNext())
{
    Console.WriteLine(enumerator.Current);
}

enumerator.Dispose(); // Always dispose when done
\`\`\`

This is rarely needed in practice but is useful when you want to advance two iterators in parallel or resume iteration after pausing.

### yield return — Custom Iterators

The \`yield return\` keyword lets you write a method that produces values one at a time, on demand. Methods using \`yield\` are called **iterator methods** and they return \`IEnumerable<T>\`.

\`\`\`csharp
IEnumerable<int> EvenNumbers(int max)
{
    for (int i = 0; i <= max; i += 2)
    {
        yield return i; // Pauses here, resumes on next iteration
    }
}

foreach (int n in EvenNumbers(10))
{
    Console.Write(n + " "); // 0 2 4 6 8 10
}
\`\`\`

The key insight: **execution is deferred**. The body of the method doesn't run until the caller requests the first value. Each call to \`MoveNext()\` resumes execution from where the last \`yield return\` left off.

**Practical example — infinite sequence:**

\`\`\`csharp
IEnumerable<int> FibonacciSequence()
{
    int a = 0, b = 1;
    while (true)
    {
        yield return a;
        (a, b) = (b, a + b);
    }
}

// Take the first 10 Fibonacci numbers
foreach (int n in FibonacciSequence().Take(10))
{
    Console.Write(n + " "); // 0 1 1 2 3 5 8 13 21 34
}
\`\`\`

You can also use \`yield break\` to stop iteration early:

\`\`\`csharp
IEnumerable<string> ReadLines(string[] lines)
{
    foreach (string line in lines)
    {
        if (line == "STOP") yield break; // Stop iteration here
        yield return line;
    }
}
\`\`\`

### Choosing the Right Iteration Approach

| Situation | Recommended Approach |
|---|---|
| Simple traversal, no index needed | \`foreach\` |
| Need the current index | \`for\` loop |
| Removing items during traversal | \`for\` loop (backwards) |
| Custom, lazy sequence generation | \`yield return\` |
| Two iterators in parallel | Manual enumerator |

### Summary

- \`foreach\` is the clearest way to iterate any \`IEnumerable<T>\` — prefer it by default
- Use \`for\` when you need the index or need to modify the collection during iteration (iterate backwards for removal)
- \`IEnumerator<T>\` lets you control iteration manually — useful for advanced scenarios
- \`yield return\` creates lazy, on-demand sequences without building an entire collection in memory first
`,
};
