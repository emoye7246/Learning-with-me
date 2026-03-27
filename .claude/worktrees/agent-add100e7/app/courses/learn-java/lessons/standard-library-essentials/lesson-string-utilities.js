export const lessonStringUtilities = {
  id: "string-utilities",
  title: "String Utilities",
  hasChallenge: false,
  article: `
## String Utilities

Java strings are immutable and come with a rich set of built-in methods. Knowing them saves you from reinventing common operations.

---

## Essential String Methods

\`\`\`java
String s = "  Hello, World!  ";

// Trimming
s.trim();                  // "Hello, World!" (removes leading/trailing whitespace)
s.strip();                 // same, but unicode-aware (Java 11+)
s.stripLeading();          // "Hello, World!  "
s.stripTrailing();         // "  Hello, World!"

// Case
s.toUpperCase();           // "  HELLO, WORLD!  "
s.toLowerCase();           // "  hello, world!  "

// Searching
s.contains("World");       // true
s.startsWith("  Hello");   // true
s.endsWith("!  ");         // true
s.indexOf("o");            // 5 (first occurrence)
s.lastIndexOf("o");        // 9

// Checking
s.isEmpty();               // false (has whitespace)
s.isBlank();               // false (Java 11+, checks only whitespace)
"".isEmpty();              // true
"   ".isBlank();           // true
\`\`\`

---

## Splitting and Joining

\`\`\`java
// Split
String csv = "Alice,Bob,Charlie";
String[] parts = csv.split(",");          // ["Alice", "Bob", "Charlie"]
String[] first2 = csv.split(",", 2);     // ["Alice", "Bob,Charlie"]

// Join
String joined = String.join(", ", "Alice", "Bob", "Charlie");
// "Alice, Bob, Charlie"

String fromList = String.join("-", List.of("2024", "03", "15"));
// "2024-03-15"
\`\`\`

---

## Replacing

\`\`\`java
String s = "Hello, World!";

s.replace("World", "Java");         // "Hello, Java!"
s.replaceAll("[aeiou]", "*");       // "H*ll*, W*rld!" (regex)
s.replaceFirst("[A-Z]", "_");       // "_ello, World!" (regex, first only)
\`\`\`

---

## Substrings

\`\`\`java
String s = "Hello, World!";

s.substring(7);        // "World!"    (from index 7 to end)
s.substring(7, 12);    // "World"     (from 7, up to but not including 12)
s.charAt(0);           // 'H'
s.length();            // 13
\`\`\`

---

## StringBuilder — Efficient String Building

Concatenating strings in a loop with \`+\` creates a new object each iteration. Use \`StringBuilder\` instead:

\`\`\`java
// Slow:
String result = "";
for (String word : words) {
    result += word + " ";
}

// Fast:
StringBuilder sb = new StringBuilder();
for (String word : words) {
    sb.append(word).append(" ");
}
String result = sb.toString().trim();

// Other useful StringBuilder methods:
sb.insert(0, "prefix ");
sb.delete(0, 7);
sb.reverse();
sb.length();
\`\`\`

---

## String.format and formatted

\`\`\`java
String msg = String.format("Hello, %s! You are %d years old.", name, age);

// Java 15+ — same thing as an instance method
String msg = "Hello, %s! You are %d years old.".formatted(name, age);
\`\`\`

Common format specifiers:
- \`%s\` — String
- \`%d\` — integer
- \`%f\` / \`%.2f\` — float/double, optional decimal places
- \`%n\` — newline (platform-independent)
- \`%10s\` — right-align in field of width 10
- \`%-10s\` — left-align

---

## Text Blocks (Java 15+)

Multi-line strings without escape characters:

\`\`\`java
String json = """
    {
      "name": "Alice",
      "age": 30
    }
    """;

String html = """
    <html>
      <body>Hello</body>
    </html>
    """;
\`\`\`

The leading indentation is stripped automatically.

---

## Useful String Checks

\`\`\`java
// Null-safe comparison (avoid NullPointerException)
"expected".equals(userInput);    // safe — equals on literal never throws
userInput.equals("expected");    // unsafe if userInput is null

// Convert to/from numbers
int n = Integer.parseInt("42");
double d = Double.parseDouble("3.14");
String s = String.valueOf(42);      // "42"
String s = Integer.toString(42);    // "42"
\`\`\`

---

## What You Learned

- \`trim()\`/\`strip()\`, \`contains()\`, \`split()\`, \`replace()\` are everyday string operations
- \`StringBuilder\` is essential for building strings in loops
- \`String.format()\` / \`"...".formatted()\` handles structured output
- Text blocks eliminate escape clutter for multi-line strings
- Always call \`equals()\` on the literal (not the variable) to avoid NPEs

Continue to: **Math, Random, and UUID**
`,
};
