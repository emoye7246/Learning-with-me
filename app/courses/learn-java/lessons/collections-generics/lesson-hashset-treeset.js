export const lessonHashsetTreeset = {
  id: "hashset-treeset",
  title: "HashSet and TreeSet",
  hasChallenge: false,
  article: `
## HashSet and TreeSet

A \`Set\` is a collection that never contains duplicate elements. It's the right tool when uniqueness matters.

---

## HashSet

\`HashSet\` stores unique elements with O(1) average add/contains/remove.

\`\`\`java
import java.util.HashSet;
import java.util.Set;

Set<String> tags = new HashSet<>();

tags.add("java");
tags.add("programming");
tags.add("java");    // duplicate — ignored, no error

tags.size()            // 2, not 3
tags.contains("java")  // true
tags.remove("java")    // removes it
tags.isEmpty()         // false
\`\`\`

---

## Removing Duplicates from a List

A common use of HashSet is to remove duplicates:

\`\`\`java
List<Integer> withDupes = new ArrayList<>(List.of(1, 2, 3, 2, 1, 4));
Set<Integer> unique = new HashSet<>(withDupes);
System.out.println(unique);   // [1, 2, 3, 4] (order not guaranteed)

// Back to a list:
List<Integer> deduplicated = new ArrayList<>(unique);
\`\`\`

---

## Set Operations

\`\`\`java
Set<String> setA = new HashSet<>(Set.of("a", "b", "c"));
Set<String> setB = new HashSet<>(Set.of("b", "c", "d"));

// Union: all elements from both
Set<String> union = new HashSet<>(setA);
union.addAll(setB);           // {a, b, c, d}

// Intersection: only elements in both
Set<String> intersection = new HashSet<>(setA);
intersection.retainAll(setB); // {b, c}

// Difference: elements in A not in B
Set<String> difference = new HashSet<>(setA);
difference.removeAll(setB);   // {a}
\`\`\`

---

## TreeSet — Sorted Unique Elements

\`TreeSet\` keeps elements in sorted order:

\`\`\`java
Set<String> sorted = new TreeSet<>();
sorted.add("banana");
sorted.add("apple");
sorted.add("cherry");
System.out.println(sorted);   // [apple, banana, cherry]
\`\`\`

TreeSet also has range operations:

\`\`\`java
TreeSet<Integer> numbers = new TreeSet<>(Set.of(5, 3, 8, 1, 9, 2));
numbers.first()           // 1
numbers.last()            // 9
numbers.headSet(5)        // {1, 2, 3} — elements less than 5
numbers.tailSet(5)        // {5, 8, 9} — elements >= 5
numbers.subSet(3, 8)      // {3, 5} — elements from 3 (inclusive) to 8 (exclusive)
\`\`\`

---

## LinkedHashSet — Insertion-Ordered Unique Elements

\`LinkedHashSet\` maintains insertion order while rejecting duplicates:

\`\`\`java
Set<String> ordered = new LinkedHashSet<>();
ordered.add("c");
ordered.add("a");
ordered.add("b");
ordered.add("a");   // duplicate ignored
// Iteration: c, a, b
\`\`\`

---

## For Sets to Work: hashCode and equals

HashSet uses \`hashCode()\` and \`equals()\` to determine duplicates. If you store custom objects in a Set, you must override both methods correctly.

---

## What You Learned

- Set guarantees uniqueness — adding a duplicate is silently ignored
- HashSet: O(1) operations, no order guarantee
- LinkedHashSet: insertion order maintained
- TreeSet: sorted order, O(log n) operations
- Set operations: union (addAll), intersection (retainAll), difference (removeAll)

## What Comes Next

Now you know the main collection types. The next lesson covers the different ways to iterate over them.

Continue to:
**6.6 Iterating Collections**
`,
};
