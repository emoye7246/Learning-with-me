export const lessonWhyCollections = {
  id: "why-collections-cs",
  title: "Why Collections? The Limits of Arrays",
  hasChallenge: false,
  article: `
## Why Collections? The Limits of Arrays

Arrays are often the first data structure developers learn, and for good reason — they are simple, fast, and built directly into the language. But as your programs grow, you will quickly run into a fundamental limitation: **arrays have a fixed size**.

### The Fixed-Size Problem

When you declare an array in C#, you must specify its size upfront — and that size never changes:

\`\`\`csharp
string[] names = new string[5];
names[0] = "Alice";
names[1] = "Bob";
// What happens when you need a 6th name? You're stuck.
\`\`\`

In real applications, you rarely know ahead of time how many items you'll need. A shopping cart can have any number of products. A chat application receives an unknown number of messages. A CSV file could have a hundred rows or a million. Trying to manage a fixed-size array in these situations leads to awkward workarounds: pre-allocating too much memory, manually resizing arrays, or tracking a "count" variable alongside the array itself.

### What Are Collections?

The .NET framework provides a rich set of **collection types** — classes that manage groups of objects dynamically. Unlike arrays, collections can grow and shrink as needed, and most provide useful operations out of the box like searching, sorting, filtering, and more.

Collections live in the \`System.Collections.Generic\` namespace, which you'll want to import at the top of your files:

\`\`\`csharp
using System.Collections.Generic;
\`\`\`

### An Overview of What's Available

.NET gives you many specialized collection types, each optimized for different scenarios:

| Collection | Description |
|---|---|
| \`List<T>\` | Dynamic array, the most commonly used collection |
| \`LinkedList<T>\` | Doubly linked list, fast insertion at any position |
| \`Dictionary<TKey, TValue>\` | Key-value store, fast lookup by key |
| \`HashSet<T>\` | Unordered set of unique values |
| \`SortedSet<T>\` | Ordered set of unique values |
| \`Queue<T>\` | First-in, first-out (FIFO) ordering |
| \`Stack<T>\` | Last-in, first-out (LIFO) ordering |

The \`<T>\` notation means these are **generic** collections — the \`T\` is a placeholder for the type you want to store. A \`List<string>\` holds strings, a \`List<int>\` holds integers, and a \`List<Customer>\` holds \`Customer\` objects. The compiler enforces this, so you can't accidentally put the wrong type in.

### Why Generics Matter Here

Before generic collections existed in .NET, developers used non-generic collections like \`ArrayList\` that stored everything as \`object\`. This worked but had two major problems:

- **No type safety** — anything could go into an \`ArrayList\`, so bugs were only caught at runtime
- **Boxing overhead** — value types like \`int\` had to be wrapped into objects (boxed) when stored, which hurt performance

Generic collections solve both problems. The compiler knows exactly what type is inside, catching type mismatches at compile time and eliminating the need for boxing.

### Arrays vs Collections — When to Use Each

Arrays still have their place. If you know the size at compile time and performance is critical (e.g., image pixel data, fixed-size buffers), arrays are the right choice. But for most application-level programming:

- Use \`List<T>\` where you'd use an array but the size might change
- Use \`Dictionary<TKey, TValue>\` when you need fast lookups by a key
- Use \`HashSet<T>\` when you need to track unique items
- Use \`Queue<T>\` or \`Stack<T>\` when order of processing matters

### Summary

- Arrays have a fixed size, which makes them inflexible for most real-world scenarios
- .NET's generic collections are dynamic, type-safe, and come with powerful built-in operations
- The \`System.Collections.Generic\` namespace is where you'll find them
- Each collection type has specific strengths — the rest of this module covers each one in depth
`,
};
