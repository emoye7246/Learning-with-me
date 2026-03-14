export const lessonChoosingRightCollection = {
  id: "choosing-right-collection",
  title: "Choosing the Right Collection",
  hasChallenge: false,
  article: `
## Choosing the Right Collection

You know the collection types. Now let's build the judgment to pick the right one.

---

## Decision Tree

**Do you need key-value lookup?**
→ Yes → Use a **Map**
  - Need insertion order? → **LinkedHashMap**
  - Need sorted keys? → **TreeMap**
  - Otherwise → **HashMap** (fastest)

**Do you need to avoid duplicates?**
→ Yes → Use a **Set**
  - Need insertion order? → **LinkedHashSet**
  - Need sorted order? → **TreeSet**
  - Otherwise → **HashSet** (fastest)

**Do you need a FIFO queue or stack?**
→ Yes → Use **ArrayDeque** (faster than LinkedList for most queue/stack operations)

**Otherwise → Use a List**
  - Random access by index? → **ArrayList**
  - Frequent insertions/deletions at both ends? → **LinkedList**
  - In practice: **ArrayList** is almost always right

---

## Quick Reference Table

| Interface | Implementation | Best For |
|---|---|---|
| List | ArrayList | General-purpose ordered list |
| List | LinkedList | Queue/Deque operations |
| Set | HashSet | Unique values, fast membership |
| Set | LinkedHashSet | Unique values, insertion order |
| Set | TreeSet | Unique values, sorted order |
| Map | HashMap | Fast key-value lookup |
| Map | LinkedHashMap | Key-value, insertion order |
| Map | TreeMap | Key-value, sorted keys |
| Queue | ArrayDeque | Fast FIFO or LIFO queue |

---

## Performance Summary

| Operation | ArrayList | LinkedList | HashMap | HashSet |
|---|---|---|---|---|
| Access by index | O(1) | O(n) | — | — |
| Add to end | O(1)* | O(1) | — | — |
| Add to middle | O(n) | O(1)** | — | — |
| Contains | O(n) | O(n) | O(1) | O(1) |
| Remove by value | O(n) | O(n) | O(1) | O(1) |

*Amortized; **assuming you already have a reference to the node

---

## Common Mistakes

**Using ArrayList when HashSet would be faster:**
\`\`\`java
// Bad: contains() is O(n) on a list
List<String> seen = new ArrayList<>();
if (!seen.contains(item)) { seen.add(item); }

// Better: contains() is O(1) on a set
Set<String> seen = new HashSet<>();
if (seen.add(item)) { ... }   // add() returns false if already present
\`\`\`

**Using HashMap when you need predictable order:**
\`\`\`java
// Use LinkedHashMap if you need to iterate in insertion order
Map<String, Integer> ordered = new LinkedHashMap<>();
\`\`\`

---

## What You Learned

- Start with ArrayList for lists, HashMap for key-value, HashSet for unique values
- Use Linked variants (LinkedHashMap, LinkedHashSet) when insertion order matters
- Use Tree variants (TreeMap, TreeSet) when sorted order matters
- HashSet beats ArrayList for membership testing
- ArrayDeque is the modern choice for queue/stack operations

## What Comes Next

Time to apply collections in mini-projects.

Continue to:
**6.11 Mini-Project: Word Frequency Counter**
`,
};
