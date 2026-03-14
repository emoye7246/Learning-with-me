export const lessonStringsReferenceType = {
  id: "strings-reference-type",
  title: "Strings and the Reference Type",
  hasChallenge: false,
  article: `
## Strings and the Reference Type

Strings are the most commonly used type in Java programs.

They are different from primitive types — and understanding how they work prevents some of the most confusing bugs beginners encounter.

---

## What Is a String?

A \`String\` is a sequence of characters enclosed in double quotes.

\`\`\`java
String name = "Alice";
String message = "Hello, World!";
String empty = "";
\`\`\`

\`String\` is a **reference type** (also called an object type). Unlike primitives, a String variable doesn't store the characters directly — it stores a reference (a memory address) to where those characters live in memory.

---

## String Concatenation

Use \`+\` to join Strings together:

\`\`\`java
String first = "Hello";
String second = "World";
String combined = first + ", " + second + "!";
System.out.println(combined);   // Hello, World!
\`\`\`

You can also concatenate Strings with numbers — Java converts the number to a String automatically:

\`\`\`java
int age = 30;
System.out.println("Age: " + age);   // Age: 30
\`\`\`

---

## String Methods

Strings come with many built-in methods. The most useful:

\`\`\`java
String text = "Hello, World!";

text.length()           // 13 — number of characters
text.toUpperCase()      // "HELLO, WORLD!"
text.toLowerCase()      // "hello, world!"
text.trim()             // removes leading/trailing whitespace
text.contains("World") // true
text.startsWith("Hello") // true
text.endsWith("!")      // true
text.replace("World", "Java")   // "Hello, Java!"
text.substring(7)       // "World!" — from index 7 to end
text.substring(7, 12)   // "World" — from index 7 to 12 (exclusive)
text.indexOf("World")   // 7 — position of first occurrence
text.isEmpty()          // false
text.isBlank()          // false (also checks whitespace-only strings)
\`\`\`

---

## String Comparison: Always Use \`.equals()\`

This is one of the most common Java bugs:

\`\`\`java
String a = "hello";
String b = "hello";

// Wrong — compares references (memory addresses), not content
if (a == b) { ... }      // may be true by coincidence, not guaranteed

// Correct — compares content
if (a.equals(b)) { ... } // always compares actual characters
\`\`\`

**Always use \`.equals()\` to compare Strings in Java.** Never use \`==\`.

For case-insensitive comparison:
\`\`\`java
if (a.equalsIgnoreCase(b)) { ... }
\`\`\`

---

## String Formatting with \`String.format\` and Text Blocks

**\`String.format\`:**

\`\`\`java
String name = "Alice";
int age = 30;
String result = String.format("Name: %s, Age: %d", name, age);
// "Name: Alice, Age: 30"
\`\`\`

Common format specifiers: \`%s\` (String), \`%d\` (integer), \`%f\` (float), \`%.2f\` (float with 2 decimal places).

**Text Blocks (Java 15+):**

\`\`\`java
String json = """
    {
        "name": "Alice",
        "age": 30
    }
    """;
\`\`\`

Text blocks preserve formatting and don't require escaped quotes inside.

---

## Strings Are Immutable

Once created, a String cannot be modified.

\`\`\`java
String name = "Alice";
name.toUpperCase();              // Does NOT modify name
System.out.println(name);       // Still "Alice"

name = name.toUpperCase();      // Assigns the new String to name
System.out.println(name);       // "ALICE"
\`\`\`

String methods return new Strings — they don't change the original.

---

## What You Learned

- \`String\` is a reference type (object), not a primitive
- Use \`+\` for concatenation
- Always use \`.equals()\` to compare String content — never \`==\`
- Common methods: \`length()\`, \`toUpperCase()\`, \`substring()\`, \`contains()\`, \`trim()\`
- Strings are immutable — methods return new Strings
- Text blocks (Java 15+) allow multi-line Strings without escape characters

## What Comes Next

Now you can store data. Next, you'll learn how to perform operations on that data — arithmetic, comparison, and logical operators.

Continue to:
**2.6 Operators and Math**
`,
};
