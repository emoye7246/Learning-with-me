export const lessonListAndLinkedlist = {
  id: "list-and-linkedlist-cs",
  title: "List<T> and LinkedList<T>",
  hasChallenge: false,
  article: `
## List<T> and LinkedList<T>

\`List<T>\` is the workhorse of .NET collections. If you need a resizable, ordered collection and you are not sure which type to use, \`List<T>\` is almost always the right default. \`LinkedList<T>\` is a more specialized alternative that shines in specific situations.

### Getting Started with List<T>

Creating a list is straightforward:

\`\`\`csharp
List<string> fruits = new List<string>();
// Or with C# 9+ target-typed new:
List<string> fruits = new();

// Initialize with values
List<string> colors = new List<string> { "red", "green", "blue" };
\`\`\`

### Core List<T> Operations

**Adding items:**

\`\`\`csharp
fruits.Add("apple");         // Add to end
fruits.AddRange(new[] { "banana", "cherry" }); // Add multiple
fruits.Insert(0, "avocado"); // Insert at index
\`\`\`

**Removing items:**

\`\`\`csharp
fruits.Remove("banana");     // Remove by value (first occurrence)
fruits.RemoveAt(0);          // Remove by index
fruits.RemoveAll(f => f.StartsWith("a")); // Remove by predicate
fruits.Clear();              // Remove all items
\`\`\`

**Searching:**

\`\`\`csharp
bool hasApple = fruits.Contains("apple");   // True/False
int index = fruits.IndexOf("cherry");       // -1 if not found
string found = fruits.Find(f => f.Length > 5); // First match or null
List<string> longFruits = fruits.FindAll(f => f.Length > 5); // All matches
\`\`\`

**Sorting:**

\`\`\`csharp
fruits.Sort(); // Alphabetical by default
fruits.Sort((a, b) => a.Length.CompareTo(b.Length)); // Custom comparer
fruits.Reverse(); // Reverse in-place
\`\`\`

**Index access and count:**

\`\`\`csharp
string first = fruits[0];
string last = fruits[fruits.Count - 1];
int total = fruits.Count; // Not .Length like arrays
\`\`\`

### Capacity vs Count

\`List<T>\` internally uses an array that doubles in size whenever it runs out of room. \`Count\` is the number of items currently in the list. \`Capacity\` is how much space the internal array currently has:

\`\`\`csharp
List<int> numbers = new List<int>(100); // Pre-allocate capacity for 100 items
Console.WriteLine(numbers.Count);      // 0 — nothing added yet
Console.WriteLine(numbers.Capacity);   // 100 — memory pre-reserved
\`\`\`

If you know you'll be adding a large number of items, pre-setting the capacity avoids repeated reallocation and improves performance.

### Converting Between List and Array

\`\`\`csharp
string[] arr = fruits.ToArray();              // List to array
List<string> backToList = arr.ToList();       // Array to List (needs using System.Linq)
\`\`\`

### LinkedList<T> — When You Need It

\`LinkedList<T>\` is a doubly linked list. Unlike \`List<T>\`, it does not use a contiguous array internally. Instead, each element (called a \`LinkedListNode<T>\`) holds a reference to the previous and next nodes.

This makes \`LinkedList<T>\` excel at **insertion and removal at any position** — O(1) once you have a reference to the node — whereas \`List<T>\` requires shifting all subsequent elements (O(n)).

\`\`\`csharp
LinkedList<string> tasks = new LinkedList<string>();

tasks.AddLast("Write tests");
tasks.AddLast("Deploy app");
tasks.AddFirst("Fix bug");  // Inserts at the beginning

LinkedListNode<string> node = tasks.Find("Write tests");
tasks.AddBefore(node, "Code review"); // Insert before a specific node
tasks.Remove(node); // O(1) removal with a node reference
\`\`\`

### When to Choose LinkedList<T> Over List<T>

| Scenario | Winner |
|---|---|
| Random access by index | \`List<T>\` — O(1) |
| Insert/remove at middle frequently | \`LinkedList<T>\` — O(1) with node |
| Searching by value | \`List<T>\` — better cache locality |
| Implementing queues, deques | \`LinkedList<T>\` or dedicated types |

In practice, \`List<T>\` is the right choice for the vast majority of use cases. Reach for \`LinkedList<T>\` only when profiling shows that mid-list insertions are a bottleneck.

### Summary

- \`List<T>\` is dynamic, index-accessible, and has rich built-in methods for adding, removing, sorting, and searching
- Use \`Count\` (not \`Length\`) to get the number of items
- Pre-set \`Capacity\` if you know the approximate size ahead of time
- \`LinkedList<T>\` is optimized for frequent insertions and deletions at arbitrary positions using node references
`,
};
