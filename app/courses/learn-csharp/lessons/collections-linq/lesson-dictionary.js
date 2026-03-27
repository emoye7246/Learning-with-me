export const lessonDictionary = {
  id: "dictionary-cs",
  title: "Dictionary<TKey, TValue>",
  hasChallenge: false,
  article: `
## Dictionary<TKey, TValue>

A \`Dictionary<TKey, TValue>\` stores data as **key-value pairs**, where each key is unique. Think of it like a real dictionary: you look up a word (the key) and instantly get its definition (the value). This lookup is extremely fast — O(1) on average — regardless of how many items are stored.

### Creating a Dictionary

\`\`\`csharp
// Empty dictionary
Dictionary<string, int> wordCount = new Dictionary<string, int>();

// Initialize with values
Dictionary<string, string> capitals = new Dictionary<string, string>
{
    { "France", "Paris" },
    { "Germany", "Berlin" },
    { "Japan", "Tokyo" }
};
\`\`\`

The first type parameter is the key type, the second is the value type. Keys can be any type that correctly implements \`GetHashCode()\` and \`Equals()\` — strings and integers are the most common.

### Adding and Updating Entries

\`\`\`csharp
wordCount.Add("hello", 1);       // Throws if key already exists
wordCount["world"] = 1;          // Adds if new, updates if exists
wordCount["hello"] = 5;          // Update existing value
\`\`\`

The indexer syntax (\`dictionary[key] = value\`) is generally preferred over \`Add\` because it won't throw an exception if the key already exists.

### Reading Values Safely

Accessing a key that doesn't exist throws a \`KeyNotFoundException\`. Always guard against this:

\`\`\`csharp
// Unsafe — throws if key missing
int count = wordCount["missing"]; // KeyNotFoundException!

// Safe approach 1: check first
if (wordCount.ContainsKey("hello"))
{
    int count = wordCount["hello"];
}

// Safe approach 2: TryGetValue (preferred)
if (wordCount.TryGetValue("hello", out int value))
{
    Console.WriteLine($"Found: {value}");
}
else
{
    Console.WriteLine("Key not found");
}

// Safe approach 3: default if missing
int safeCount = wordCount.GetValueOrDefault("missing", 0);
\`\`\`

\`TryGetValue\` is the most efficient because it only performs one lookup, whereas \`ContainsKey\` + indexer performs two.

### Removing Entries

\`\`\`csharp
wordCount.Remove("hello");           // Removes by key, returns bool
wordCount.Clear();                   // Removes all entries
\`\`\`

### Checking What's Inside

\`\`\`csharp
bool hasKey = wordCount.ContainsKey("world");
bool hasValue = wordCount.ContainsValue(42);  // O(n) — scans all values
int size = wordCount.Count;
\`\`\`

### Iterating a Dictionary

\`\`\`csharp
// Iterate key-value pairs
foreach (KeyValuePair<string, int> pair in wordCount)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}

// More concise with var
foreach (var (key, value) in wordCount)
{
    Console.WriteLine($"{key}: {value}");
}

// Keys only
foreach (string key in wordCount.Keys)
{
    Console.WriteLine(key);
}

// Values only
foreach (int val in wordCount.Values)
{
    Console.WriteLine(val);
}
\`\`\`

Note: dictionaries do not guarantee a specific iteration order. If order matters, use \`SortedDictionary<TKey, TValue>\` or sort the keys manually.

### Common Use Cases

**Counting occurrences:**

\`\`\`csharp
string[] words = { "apple", "banana", "apple", "cherry", "banana", "apple" };
Dictionary<string, int> freq = new Dictionary<string, int>();

foreach (string word in words)
{
    if (freq.ContainsKey(word))
        freq[word]++;
    else
        freq[word] = 1;
}
// apple: 3, banana: 2, cherry: 1
\`\`\`

**Caching / memoization:**

\`\`\`csharp
Dictionary<int, long> fibCache = new Dictionary<int, long>();

long Fibonacci(int n)
{
    if (n <= 1) return n;
    if (fibCache.TryGetValue(n, out long cached)) return cached;
    long result = Fibonacci(n - 1) + Fibonacci(n - 2);
    fibCache[n] = result;
    return result;
}
\`\`\`

**Grouping items:**

\`\`\`csharp
Dictionary<string, List<string>> byCategory = new();

void AddToCategory(string category, string item)
{
    if (!byCategory.ContainsKey(category))
        byCategory[category] = new List<string>();
    byCategory[category].Add(item);
}
\`\`\`

### Summary

- \`Dictionary<TKey, TValue>\` provides O(1) average-time key lookups
- Use \`TryGetValue\` for safe access — it is both null-safe and efficient
- The indexer (\`dict[key] = value\`) adds or updates without throwing
- Keys must be unique; values may be duplicated
- Iteration order is not guaranteed — use \`SortedDictionary\` if ordering matters
`,
};
