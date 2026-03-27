export const lessonCheckedUncheckedExceptions = {
  id: "checked-unchecked-exceptions",
  title: "Checked vs Unchecked Exceptions",
  hasChallenge: false,
  article: `
## Checked vs Unchecked Exceptions

Java has a unique feature among mainstream languages: **checked exceptions**. The compiler enforces that certain exceptions are either handled or declared. This is one of Java's most distinctive design decisions.

---

## The Two Categories

### Unchecked Exceptions (Runtime Exceptions)

Extend \`RuntimeException\`. The compiler does **not** require you to handle them.

\`\`\`java
String s = null;
s.length();  // NullPointerException — no compile error for not catching it
\`\`\`

Common unchecked exceptions:
- \`NullPointerException\`
- \`NumberFormatException\`
- \`ArrayIndexOutOfBoundsException\`
- \`IllegalArgumentException\`
- \`IllegalStateException\`
- \`ClassCastException\`

These typically represent **programming errors** — bugs in your code.

---

### Checked Exceptions

Extend \`Exception\` (but not \`RuntimeException\`). The compiler **requires** you to either catch them or declare them with \`throws\`.

\`\`\`java
// This won't compile without handling IOException:
BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
\`\`\`

Fix option 1 — **catch** it:
\`\`\`java
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    System.out.println(reader.readLine());
} catch (IOException e) {
    System.err.println("Read failed: " + e.getMessage());
}
\`\`\`

Fix option 2 — **declare** it (pass responsibility to the caller):
\`\`\`java
public void readFile() throws IOException {
    BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
    System.out.println(reader.readLine());
}
\`\`\`

Common checked exceptions:
- \`IOException\` (and all subclasses like \`FileNotFoundException\`)
- \`SQLException\`
- \`ClassNotFoundException\`
- \`ParseException\`

---

## Handle It or Declare It

The rule is simple: if a method can throw a checked exception, you must either:

1. **Handle it** with try-catch, or
2. **Declare it** with \`throws\` in the method signature

\`\`\`java
// Option 1: Handle it here
public String readFirstLine(String path) {
    try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
        return reader.readLine();
    } catch (IOException e) {
        return null;  // caller gets null if reading fails
    }
}

// Option 2: Declare it — caller must handle
public String readFirstLine(String path) throws IOException {
    try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
        return reader.readLine();
    }
}
\`\`\`

---

## When to Catch vs When to Declare

**Catch it when:**
- You can meaningfully recover (retry, use a default value, log and continue)
- You're at an application boundary (main method, UI event handler)

**Declare it when:**
- You're writing a library method and the caller should decide how to handle it
- You can't recover meaningfully at this level

---

## Don't Swallow Exceptions

\`\`\`java
// BAD — silent failure
try {
    processFile("data.csv");
} catch (IOException e) {
    // do nothing
}
\`\`\`

At minimum, log it:

\`\`\`java
try {
    processFile("data.csv");
} catch (IOException e) {
    System.err.println("Failed to process file: " + e.getMessage());
}
\`\`\`

---

## Wrapping Checked Exceptions

Sometimes you want to convert a checked exception to an unchecked one (common in clean API design):

\`\`\`java
public String readConfig(String path) {
    try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
        return reader.readLine();
    } catch (IOException e) {
        throw new RuntimeException("Failed to read config: " + path, e);
    }
}
\`\`\`

The original exception is preserved as the **cause**, so stack traces still show the root problem.

---

## The Full Picture

\`\`\`
Throwable
├── Error                         ← don't catch
└── Exception
    ├── RuntimeException          ← unchecked (optional to handle)
    │   ├── NullPointerException
    │   ├── NumberFormatException
    │   └── ...
    └── (everything else)         ← checked (must handle or declare)
        ├── IOException
        ├── SQLException
        └── ...
\`\`\`

---

## What You Learned

- Unchecked exceptions extend \`RuntimeException\` — the compiler doesn't force handling
- Checked exceptions extend \`Exception\` — the compiler requires handling or declaration
- Handle exceptions when you can recover; declare them when the caller should decide
- Never silently swallow exceptions — at minimum, log them
- Wrap checked exceptions in \`RuntimeException\` to convert them when needed

## What Comes Next

Now you'll learn to create your own exception types.

Continue to: **7.8 Creating Custom Exceptions**
`,
};
