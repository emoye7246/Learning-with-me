export const lessonCollectionsFrameworkOverview = {
  id: "collections-framework-overview",
  title: "Collections Framework Overview",
  hasChallenge: false,
  article: `
## Collections Framework Overview

The Java Collections Framework is a unified architecture for representing and manipulating collections of objects.

---

## The Hierarchy

\`\`\`
Collection<E>
├── List<E>          (ordered, duplicates allowed)
│   ├── ArrayList
│   └── LinkedList
├── Set<E>           (no duplicates)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue<E>         (FIFO processing)
    ├── LinkedList
    └── PriorityQueue

Map<K, V>            (key-value pairs — not a Collection)
├── HashMap
├── LinkedHashMap
└── TreeMap
\`\`\`

---

## The Interface Principle

In Java, you declare collection variables using the **interface type**:

\`\`\`java
List<String> names = new ArrayList<>();    // good
Set<Integer> ids = new HashSet<>();        // good
Map<String, Integer> scores = new HashMap<>();   // good

ArrayList<String> names = new ArrayList<>();  // avoid — tied to implementation
\`\`\`

By using the interface, you can switch implementations without changing the code that uses the collection.

---

## Key Interfaces

**\`Collection<E>\`** — root interface. Basic operations: \`add\`, \`remove\`, \`contains\`, \`size\`, \`isEmpty\`, \`iterator\`

**\`List<E>\`** — ordered, indexed. Extra: \`get(index)\`, \`set(index, element)\`, \`indexOf(element)\`

**\`Set<E>\`** — no duplicates. Same as Collection API — but add() returns false if element already exists

**\`Map<K, V>\`** — key-value pairs. Key operations: \`put\`, \`get\`, \`containsKey\`, \`containsValue\`, \`keySet\`, \`values\`, \`entrySet\`

---

## The \`Collections\` Utility Class

\`java.util.Collections\` provides static utility methods:

\`\`\`java
import java.util.Collections;

Collections.sort(list);                    // sort a List
Collections.reverse(list);                 // reverse in place
Collections.shuffle(list);                 // random order
Collections.max(collection);               // largest element
Collections.min(collection);               // smallest element
Collections.unmodifiableList(list);        // read-only wrapper
Collections.frequency(collection, target); // count occurrences
\`\`\`

---

## What You Learned

- The JCF provides List, Set, Queue, and Map interfaces with multiple implementations
- Always declare with the interface type: \`List<String>\`, not \`ArrayList<String>\`
- \`Collections\` utility class provides sort, reverse, shuffle, max, min, and more

## What Comes Next

The most commonly used collection is ArrayList. The next lesson covers ArrayList and its less common counterpart, LinkedList.

Continue to:
**6.3 ArrayList and LinkedList**
`,
};
