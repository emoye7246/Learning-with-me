export const lessonWhyCollections = {
  id: "why-collections",
  title: "Why Collections?",
  hasChallenge: false,
  article: `
## Why Collections?

Arrays were your first tool for storing multiple values. They work, but they have real limitations that collections solve.

---

## The Limits of Arrays

**Fixed size:** An array's length is set when created and cannot change.

\`\`\`java
int[] scores = new int[10];
// You can't add an 11th score without creating a whole new array
\`\`\`

**No built-in operations:** To find an element, you loop. To remove an element, you shift everything manually. To sort, you call \`Arrays.sort()\`.

**Primitive types only work directly:** Arrays of objects work fine, but combining arrays with generic algorithms requires extra work.

---

## What Collections Provide

The Java Collections Framework (JCF) is a set of classes and interfaces in \`java.util\` that provide:

- **Dynamic sizing** — Lists grow and shrink automatically
- **Rich APIs** — add, remove, contains, sort, search — built in
- **Interoperability** — all collections work with the same algorithms
- **Type safety with generics** — \`List<String>\` only holds Strings

---

## The Main Collection Types

| Type | Interface | Use When |
|---|---|---|
| Dynamic list | \`List\` | Ordered collection, duplicates allowed |
| Key-value pairs | \`Map\` | Look up values by key |
| Unique values | \`Set\` | No duplicates, fast membership test |
| FIFO queue | \`Queue\` | Process items in order |
| LIFO stack | \`Deque\` | Last-in, first-out processing |

---

## A Quick Before/After

**With arrays:**
\`\`\`java
String[] names = new String[3];
names[0] = "Alice";
names[1] = "Bob";
names[2] = "Carol";
// Need to add "Dave"? Create new array[4], copy everything over.
\`\`\`

**With ArrayList:**
\`\`\`java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Carol");
names.add("Dave");   // just works
names.remove("Bob"); // just works
\`\`\`

---

## What You Learned

- Arrays have fixed size and limited built-in operations
- Collections provide dynamic sizing, rich APIs, and type safety
- The three main collection types: List (ordered), Map (key-value), Set (unique)
- The Collections Framework is in \`java.util\`

## What Comes Next

Let's look at the overall design of the Collections Framework before diving into specific types.

Continue to:
**6.2 Collections Framework Overview**
`,
};
