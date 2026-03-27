export const lessonHashmapLinkedhashmap = {
  id: "hashmap-linkedhashmap",
  title: "HashMap and LinkedHashMap",
  hasChallenge: false,
  article: `
## HashMap and LinkedHashMap

Maps store key-value pairs. A HashMap gives you O(1) average-case lookup by key.

---

## HashMap Basics

\`\`\`java
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> wordCount = new HashMap<>();

wordCount.put("apple", 3);
wordCount.put("banana", 1);
wordCount.put("cherry", 5);

int count = wordCount.get("apple");    // 3
int missing = wordCount.getOrDefault("mango", 0);  // 0 (key not present)

wordCount.containsKey("banana");       // true
wordCount.containsValue(5);            // true
wordCount.remove("banana");
wordCount.size();                       // 2

// Iterate over entries:
for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}
\`\`\`

---

## Useful HashMap Methods

\`\`\`java
// putIfAbsent — only adds if key not already present
wordCount.putIfAbsent("apple", 10);   // does nothing (apple exists)

// computeIfAbsent — compute and put if absent
map.computeIfAbsent("key", k -> new ArrayList<>());

// merge — update existing value or put new value
wordCount.merge("apple", 1, Integer::sum);   // apple: 3 + 1 = 4

// getOrDefault — safe get with fallback
int val = map.getOrDefault("missing", 0);

// forEach — iterate with lambda
wordCount.forEach((k, v) -> System.out.println(k + ": " + v));
\`\`\`

---

## HashMap Order

HashMap makes **no guarantee about iteration order**. The order in which entries come out may not match the order they were put in.

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("c", 3);
map.put("a", 1);
map.put("b", 2);
// Iteration order: could be anything
\`\`\`

---

## LinkedHashMap — Insertion Order

LinkedHashMap maintains the order in which entries were inserted:

\`\`\`java
Map<String, Integer> map = new LinkedHashMap<>();
map.put("c", 3);
map.put("a", 1);
map.put("b", 2);
// Iteration order: c, a, b (insertion order preserved)
\`\`\`

Use LinkedHashMap when order matters — e.g., displaying a form's field values in the original order.

---

## TreeMap — Sorted Order

\`TreeMap\` keeps keys in natural sorted order (or by a \`Comparator\`):

\`\`\`java
Map<String, Integer> sorted = new TreeMap<>();
sorted.put("banana", 2);
sorted.put("apple", 1);
sorted.put("cherry", 3);
// Iteration order: apple, banana, cherry (alphabetical)
\`\`\`

---

## null Keys and Values

- HashMap: allows one null key and multiple null values
- LinkedHashMap: same as HashMap
- TreeMap: does NOT allow null keys (throws NullPointerException)

---

## What You Learned

- HashMap stores key-value pairs with O(1) average access by key
- Important methods: \`put\`, \`get\`, \`getOrDefault\`, \`containsKey\`, \`remove\`, \`entrySet\`
- HashMap: no order guaranteed
- LinkedHashMap: preserves insertion order
- TreeMap: keys in sorted order

## What Comes Next

Sets: collections that reject duplicates.

Continue to:
**6.5 HashSet and TreeSet**
`,
};
