export const lessonExceptionHandling = {
  id: "exception-handling",
  title: "Exception Handling — try, catch, finally",
  hasChallenge: false,
  article: `
## Exception Handling — try, catch, finally

Every real program encounters unexpected situations: a file doesn't exist, a network request fails, a user enters invalid input. Java uses **exceptions** to signal and handle these situations.

---

## What Is an Exception?

An exception is an object that represents an error or unexpected condition. When an error occurs, Java **throws** an exception. If nothing catches it, the program crashes with a stack trace.

\`\`\`
Exception in thread "main" java.lang.NumberFormatException: For input string: "abc"
    at java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:67)
    at Main.main(Main.java:5)
\`\`\`

---

## try / catch

\`\`\`java
try {
    int result = Integer.parseInt("abc");  // throws NumberFormatException
    System.out.println(result);
} catch (NumberFormatException e) {
    System.err.println("That's not a number: " + e.getMessage());
}
\`\`\`

- The \`try\` block contains code that might throw
- The \`catch\` block runs if the specified exception is thrown
- Code after the try-catch continues normally

---

## Catching Multiple Exceptions

\`\`\`java
try {
    String[] items = {"apple", "banana"};
    System.out.println(items[5]);        // ArrayIndexOutOfBoundsException
    int n = Integer.parseInt(items[0]);  // NumberFormatException
} catch (ArrayIndexOutOfBoundsException e) {
    System.err.println("Index out of range: " + e.getMessage());
} catch (NumberFormatException e) {
    System.err.println("Not a number: " + e.getMessage());
}
\`\`\`

Or catch multiple types in one block:

\`\`\`java
try {
    // ...
} catch (ArrayIndexOutOfBoundsException | NumberFormatException e) {
    System.err.println("Something went wrong: " + e.getMessage());
}
\`\`\`

---

## finally

The \`finally\` block **always runs**, whether or not an exception was thrown. Use it to release resources:

\`\`\`java
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader("notes.txt"));
    System.out.println(reader.readLine());
} catch (IOException e) {
    System.err.println("Read failed: " + e.getMessage());
} finally {
    if (reader != null) {
        try { reader.close(); } catch (IOException ignored) {}
    }
    System.out.println("Done — this always runs");
}
\`\`\`

In modern Java, use **try-with-resources** instead (covered in lesson 7.9). \`finally\` is mainly useful for non-resource cleanup.

---

## The Exception Hierarchy

\`\`\`
Throwable
├── Error          (JVM problems — don't catch these)
│   └── OutOfMemoryError, StackOverflowError
└── Exception
    ├── RuntimeException  (unchecked — no forced handling)
    │   ├── NullPointerException
    │   ├── NumberFormatException
    │   ├── ArrayIndexOutOfBoundsException
    │   └── IllegalArgumentException
    └── IOException       (checked — must handle or declare)
        └── FileNotFoundException
\`\`\`

---

## getMessage() and printStackTrace()

\`\`\`java
try {
    int[] arr = new int[3];
    arr[10] = 42;
} catch (ArrayIndexOutOfBoundsException e) {
    System.err.println(e.getMessage());    // Index 10 out of bounds for length 3
    e.printStackTrace();                   // Full stack trace to stderr
}
\`\`\`

Use \`printStackTrace()\` for debugging. In production, log the exception properly with a logging framework.

---

## Catching Exception (Broad Catch)

\`\`\`java
try {
    // risky code
} catch (Exception e) {
    System.err.println("Unexpected error: " + e.getMessage());
}
\`\`\`

This catches everything (except \`Error\`). Use sparingly — catching too broadly hides what actually went wrong.

---

## Rethrowing Exceptions

\`\`\`java
public void processFile(String path) throws IOException {
    try {
        // ...
    } catch (IOException e) {
        System.err.println("Failed to process: " + path);
        throw e;  // rethrow so the caller knows too
    }
}
\`\`\`

---

## What You Learned

- Use \`try / catch\` to handle exceptions without crashing
- \`finally\` always runs — use it for cleanup that must happen
- Catch specific exception types before broad ones
- \`e.getMessage()\` gives a short description; \`e.printStackTrace()\` gives the full trace
- Broad catches (\`catch (Exception e)\`) should be used carefully

## What Comes Next

Not all exceptions are equal — Java distinguishes between checked and unchecked exceptions.

Continue to: **7.7 Checked vs Unchecked Exceptions**
`,
};
