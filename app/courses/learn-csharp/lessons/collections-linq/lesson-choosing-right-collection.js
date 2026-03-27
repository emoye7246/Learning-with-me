export const lessonChoosingRightCollection = {
  id: "choosing-right-collection-cs",
  title: "Choosing the Right Collection",
  hasChallenge: false,
  article: `
## Choosing the Right Collection

With so many collection types available, a common question is: which one should I use? The good news is that most decisions come down to answering a few simple questions about how you'll use the data.

### The Decision Guide

**Start here: What is the primary operation you need?**

1. **Do you need key-based lookup?** → \`Dictionary<TKey, TValue>\`
2. **Do you need fast membership testing (is this item in the set)?** → \`HashSet<T>\`
3. **Do you need ordered, unique items or range queries?** → \`SortedSet<T>\`
4. **Do you need to process items in submission order (first in, first out)?** → \`Queue<T>\`
5. **Do you need to process items in reverse order (last in, first out)?** → \`Stack<T>\`
6. **For everything else — ordered list with index access** → \`List<T>\`

### Performance Characteristics

| Operation | List\<T\> | Dictionary | HashSet\<T\> | SortedSet\<T\> | Queue/Stack |
|---|---|---|---|---|---|
| Access by index | O(1) | N/A | N/A | N/A | N/A |
| Access by key | O(n) | O(1) avg | N/A | N/A | N/A |
| Add to end | O(1) amort | O(1) avg | O(1) avg | O(log n) | O(1) |
| Insert at middle | O(n) | N/A | N/A | O(log n) | N/A |
| Remove by value | O(n) | O(1) avg | O(1) avg | O(log n) | N/A |
| Contains check | O(n) | O(1) avg | O(1) avg | O(log n) | N/A |
| Sorted iteration | O(n log n)* | O(n log n)* | O(n log n)* | O(n) | N/A |

*Requires a separate sort step first.

### Scenario Walk-Throughs

**Scenario: Track which users have seen a notification**

You need to check quickly whether a user has seen something. Lookup is the primary operation.

\`\`\`csharp
// Bad: O(n) per check
List<int> seenByUserIds = new List<int>();
bool hasSeen = seenByUserIds.Contains(userId); // Slow for large lists

// Good: O(1) per check
HashSet<int> seenByUserIds = new HashSet<int>();
bool hasSeen = seenByUserIds.Contains(userId);
\`\`\`

**Scenario: Cache computed results by input**

You have an expensive calculation and want to store results by their input key.

\`\`\`csharp
Dictionary<string, decimal> taxRateCache = new Dictionary<string, decimal>();

decimal GetTaxRate(string region)
{
    if (!taxRateCache.TryGetValue(region, out decimal rate))
    {
        rate = ComputeExpensiveTaxRate(region); // Only called once per region
        taxRateCache[region] = rate;
    }
    return rate;
}
\`\`\`

**Scenario: Process incoming requests in order**

A web server receives API requests that must be processed in arrival order.

\`\`\`csharp
Queue<ApiRequest> requestQueue = new Queue<ApiRequest>();

// Thread that receives requests adds to queue
requestQueue.Enqueue(incomingRequest);

// Worker thread processes in order
while (requestQueue.TryDequeue(out ApiRequest request))
    ProcessRequest(request);
\`\`\`

**Scenario: Implement undo history**

The most recently performed action must be the first one undone.

\`\`\`csharp
Stack<ICommand> undoStack = new Stack<ICommand>();
undoStack.Push(new DeleteCommand(selectedItem));

void Undo() => undoStack.Pop()?.Undo();
\`\`\`

**Scenario: Maintain a leaderboard that is always sorted**

You frequently add scores and always want them in order.

\`\`\`csharp
// Bad: must re-sort after every add
List<int> scores = new List<int>();
scores.Add(newScore);
scores.Sort(); // O(n log n) every time

// Good: always sorted
SortedSet<int> scores = new SortedSet<int>();
scores.Add(newScore); // O(log n), stays sorted
\`\`\`

**Scenario: A general-purpose list of items**

Most of the time, you just need an ordered collection of items you can iterate, add to, and occasionally search.

\`\`\`csharp
List<Order> pendingOrders = new List<Order>();
pendingOrders.Add(newOrder);
pendingOrders.Remove(completedOrder);
var recent = pendingOrders.Where(o => o.Date > DateTime.Today.AddDays(-7)).ToList();
\`\`\`

### Quick Reference Card

| You need to... | Use |
|---|---|
| Store an ordered list of items | \`List<T>\` |
| Look things up by a key | \`Dictionary<TKey, TValue>\` |
| Track a set of unique items | \`HashSet<T>\` |
| Keep unique items sorted | \`SortedSet<T>\` |
| Process items FIFO (queue) | \`Queue<T>\` |
| Process items LIFO (stack) | \`Stack<T>\` |
| Frequent insertion in the middle | \`LinkedList<T>\` |
| Fixed size, known at compile time | \`T[]\` (array) |
| Thread-safe concurrent access | \`ConcurrentQueue<T>\`, \`ConcurrentDictionary<TKey, TValue>\` |

### The Default Rule

When in doubt, start with \`List<T>\`. It is versatile, well-understood, and works for the majority of use cases. If profiling reveals that \`Contains\` checks are slow, switch to \`HashSet<T>\`. If key lookups are needed, switch to \`Dictionary\`. Let actual performance problems guide you to specialized types rather than over-engineering upfront.

### Summary

- \`List<T>\` is the right default for ordered, index-accessible data
- \`Dictionary<TKey, TValue>\` is the right choice when you need fast lookup by key
- \`HashSet<T>\` beats \`List<T>\` for membership testing at O(1) vs O(n)
- \`Queue<T>\` and \`Stack<T>\` enforce specific processing orders
- \`SortedSet<T>\` and \`SortedDictionary\` maintain sorted order automatically at O(log n) cost
- Choose based on your primary access pattern, and validate performance assumptions with real data
`,
};
