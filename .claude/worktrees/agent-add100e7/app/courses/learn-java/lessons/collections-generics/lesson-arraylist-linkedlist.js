export const lessonArraylistLinkedlist = {
  id: "arraylist-linkedlist",
  title: "ArrayList and LinkedList",
  hasChallenge: false,
  article: `
## ArrayList and LinkedList

Both implement the \`List\` interface. They have the same API but different performance characteristics.

---

## ArrayList

\`ArrayList\` stores elements in a dynamic array under the hood.

\`\`\`java
import java.util.ArrayList;
import java.util.List;

List<String> names = new ArrayList<>();

names.add("Alice");           // add to end
names.add("Bob");
names.add(0, "Zara");         // insert at index 0
names.set(1, "Alicia");       // replace element at index 1
names.remove("Bob");          // remove by value
names.remove(0);              // remove by index
String first = names.get(0);  // access by index — O(1)
int size = names.size();
boolean has = names.contains("Alice");
\`\`\`

**Performance:**
- \`get(index)\`: O(1) — direct array access
- \`add(end)\`: O(1) amortized
- \`add(middle)\` / \`remove(middle)\`: O(n) — must shift elements

Use ArrayList when you access elements by index frequently.

---

## Common ArrayList Operations

\`\`\`java
List<Integer> numbers = new ArrayList<>(List.of(3, 1, 4, 1, 5, 9));

numbers.size()          // 6
numbers.isEmpty()       // false
numbers.indexOf(1)      // 1 (first occurrence)
numbers.lastIndexOf(1)  // 3
numbers.subList(1, 4)   // [1, 4, 1] — view of elements 1 to 3
numbers.clear()         // removes all elements
\`\`\`

---

## LinkedList

\`LinkedList\` stores elements as a doubly-linked chain of nodes.

\`\`\`java
import java.util.LinkedList;

LinkedList<String> queue = new LinkedList<>();

queue.addFirst("A");    // add to front
queue.addLast("B");     // add to back (same as add())
queue.peekFirst();      // look at front without removing
queue.peekLast();       // look at back
queue.pollFirst();      // remove and return front
queue.pollLast();       // remove and return back
\`\`\`

**Performance:**
- \`get(index)\`: O(n) — must traverse to that position
- \`addFirst\` / \`addLast\`: O(1) — just update pointers
- Ideal as a queue or deque, not for random access

---

## Choosing Between Them

| Scenario | Use |
|---|---|
| Read by index frequently | ArrayList |
| Add/remove at the beginning | LinkedList |
| General-purpose list | ArrayList |
| Queue (FIFO) or Deque | LinkedList or ArrayDeque |

**In practice:** ArrayList is the right choice for almost everything. Only reach for LinkedList when you're specifically using its queue/deque operations.

---

## Creating Lists with Initial Values

\`\`\`java
// Java 9+: immutable list literal
List<String> fixed = List.of("A", "B", "C");

// Mutable copy:
List<String> mutable = new ArrayList<>(List.of("A", "B", "C"));
\`\`\`

---

## What You Learned

- ArrayList: dynamic array, fast random access, slow insert/remove in middle
- LinkedList: doubly-linked, fast insert/remove at ends, slow random access
- Declare as \`List<Type>\`, not \`ArrayList<Type>\`
- Use ArrayList for general-purpose lists; LinkedList for queue/deque operations

## What Comes Next

Next, the key-value collection: HashMap.

Continue to:
**6.4 HashMap and LinkedHashMap**
`,
};
