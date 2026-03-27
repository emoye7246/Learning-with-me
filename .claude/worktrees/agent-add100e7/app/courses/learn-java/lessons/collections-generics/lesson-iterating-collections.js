export const lessonIteratingCollections = {
  id: "iterating-collections",
  title: "Iterating Collections",
  hasChallenge: false,
  article: `
## Iterating Collections

Java provides several ways to iterate over collections. Each has its use case.

---

## Enhanced For Loop (For-Each)

The simplest and most readable. Works for any \`Iterable\` (all collections implement this):

\`\`\`java
List<String> names = List.of("Alice", "Bob", "Carol");

for (String name : names) {
    System.out.println(name);
}
\`\`\`

Use this by default. It's clean, readable, and handles any collection type.

**Limitation:** Can't modify the collection while iterating (throws \`ConcurrentModificationException\`). Can't access the index.

---

## Index-Based For Loop

When you need the index:

\`\`\`java
List<String> names = new ArrayList<>(List.of("Alice", "Bob", "Carol"));

for (int i = 0; i < names.size(); i++) {
    System.out.println(i + ": " + names.get(i));
}
\`\`\`

Only works for \`List\` (not \`Set\` or \`Map\`).

---

## Iterator

Use the Iterator when you need to remove elements while iterating:

\`\`\`java
List<String> names = new ArrayList<>(List.of("Alice", "Bob", "Carol"));
Iterator<String> it = names.iterator();

while (it.hasNext()) {
    String name = it.next();
    if (name.equals("Bob")) {
        it.remove();   // safe removal during iteration
    }
}
\`\`\`

\`it.remove()\` is the only safe way to remove elements while iterating with a standard for-each loop.

---

## forEach with Lambda

\`\`\`java
names.forEach(name -> System.out.println(name));

// Or with method reference:
names.forEach(System.out::println);
\`\`\`

Clean and concise. Good when you don't need to break early or handle checked exceptions.

---

## Iterating Maps

\`\`\`java
Map<String, Integer> scores = Map.of("Alice", 95, "Bob", 87);

// By entry (key and value together):
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Keys only:
for (String key : scores.keySet()) {
    System.out.println(key + ": " + scores.get(key));
}

// Values only:
for (int value : scores.values()) {
    System.out.println(value);
}

// forEach with lambda:
scores.forEach((k, v) -> System.out.println(k + " -> " + v));
\`\`\`

---

## Choosing an Iteration Strategy

| Situation | Use |
|---|---|
| Simple iteration, any collection | Enhanced for-each |
| Need the index | Index-based for loop |
| Remove while iterating | Iterator with \`it.remove()\` |
| Concise, no early exit needed | \`forEach\` with lambda |
| Map with both key and value | \`entrySet()\` for-each |

---

## What You Learned

- Enhanced for-each: simplest, works for all collections
- Index-based loop: only for List, when index is needed
- Iterator: when removing elements during iteration
- \`forEach\` with lambda: concise one-liner iteration
- Maps: use \`entrySet()\` to get both key and value together

## What Comes Next

Generics make collections type-safe. The next lesson explains how they work and why they matter.

Continue to:
**6.7 Generics**
`,
};
