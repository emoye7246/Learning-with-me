export const lessonHashsetSortedset = {
  id: "hashset-sortedset",
  title: "HashSet<T> and SortedSet<T>",
  hasChallenge: false,
  article: `
## HashSet<T> and SortedSet<T>

A **set** is a collection that contains only unique elements. If you try to add a duplicate, the set simply ignores it. This uniqueness guarantee makes sets ideal for tracking membership, eliminating duplicates, and performing mathematical set operations like union and intersection.

### HashSet<T> — Fast Unordered Uniqueness

\`HashSet<T>\` uses a hash table internally, giving it O(1) average-time operations for adding, removing, and checking membership. It does not maintain any particular order.

\`\`\`csharp
HashSet<string> tags = new HashSet<string>();

tags.Add("csharp");     // Returns true — added successfully
tags.Add("dotnet");     // Returns true
tags.Add("csharp");     // Returns false — duplicate ignored

Console.WriteLine(tags.Count); // 2, not 3

// Initialize with a collection (duplicates automatically removed)
HashSet<int> numbers = new HashSet<int> { 1, 2, 3, 2, 1 };
Console.WriteLine(numbers.Count); // 3
\`\`\`

**Checking membership — the primary use case:**

\`\`\`csharp
bool hasTag = tags.Contains("csharp"); // O(1) — much faster than List<T>.Contains (O(n))
\`\`\`

This is a key advantage. If you have a large collection and need to frequently ask "is this item in the collection?", a \`HashSet<T>\` is dramatically faster than a \`List<T>\`.

**Removing items:**

\`\`\`csharp
tags.Remove("dotnet");    // Returns true if found and removed
tags.Clear();             // Remove all
\`\`\`

### Set Operations

\`HashSet<T>\` supports mathematical set operations, which is where sets truly shine:

\`\`\`csharp
HashSet<int> setA = new HashSet<int> { 1, 2, 3, 4, 5 };
HashSet<int> setB = new HashSet<int> { 3, 4, 5, 6, 7 };

// Union — all elements from both sets
setA.UnionWith(setB);
// setA is now: {1, 2, 3, 4, 5, 6, 7}

// Reset for next examples
setA = new HashSet<int> { 1, 2, 3, 4, 5 };

// Intersection — only elements in both sets
setA.IntersectWith(setB);
// setA is now: {3, 4, 5}

// Reset
setA = new HashSet<int> { 1, 2, 3, 4, 5 };

// Difference — elements in A but not in B
setA.ExceptWith(setB);
// setA is now: {1, 2}

// Symmetric difference — elements in either but not both
setA = new HashSet<int> { 1, 2, 3, 4, 5 };
setA.SymmetricExceptWith(setB);
// setA is now: {1, 2, 6, 7}
\`\`\`

**Non-destructive checks:**

\`\`\`csharp
bool isSubset = setA.IsSubsetOf(setB);
bool isSuperset = setA.IsSupersetOf(setB);
bool overlaps = setA.Overlaps(setB); // Any common elements?
bool sameContent = setA.SetEquals(setB); // Same elements regardless of order?
\`\`\`

### Practical Example: Removing Duplicates

\`\`\`csharp
List<string> rawEmails = new List<string>
{
    "alice@example.com",
    "bob@example.com",
    "alice@example.com",  // duplicate
    "carol@example.com",
    "bob@example.com"     // duplicate
};

// One line to remove all duplicates
HashSet<string> uniqueEmails = new HashSet<string>(rawEmails);
// {alice@example.com, bob@example.com, carol@example.com}
\`\`\`

### SortedSet<T> — Ordered Uniqueness

\`SortedSet<T>\` is like \`HashSet<T>\` but keeps its elements sorted at all times. It uses a red-black tree internally, giving O(log n) operations — slower than \`HashSet<T>\` but with the benefit of ordering.

\`\`\`csharp
SortedSet<int> scores = new SortedSet<int> { 42, 17, 99, 5, 55 };

foreach (int score in scores)
    Console.Write(score + " "); // 5 17 42 55 99 — always sorted

int min = scores.Min; // 5
int max = scores.Max; // 99

// Get elements in a range
SortedSet<int> midRange = scores.GetViewBetween(20, 60);
// {42, 55}
\`\`\`

### Choosing Between HashSet<T> and SortedSet<T>

| Need | Use |
|---|---|
| Fast membership checks, order doesn't matter | \`HashSet<T>\` |
| Unique elements that must stay sorted | \`SortedSet<T>\` |
| Range queries (min, max, between) | \`SortedSet<T>\` |
| Removing duplicates from a list | \`HashSet<T>\` |

### Summary

- Sets store only unique elements — duplicates are silently ignored
- \`HashSet<T>\` offers O(1) average-time add, remove, and \`Contains\` — ideal for fast membership testing
- Set operations (\`UnionWith\`, \`IntersectWith\`, \`ExceptWith\`) enable powerful data filtering
- \`SortedSet<T>\` maintains unique elements in sorted order with O(log n) operations
- Prefer \`HashSet<T>\` over \`List<T>\` when you only need membership testing on a large collection
`,
};
