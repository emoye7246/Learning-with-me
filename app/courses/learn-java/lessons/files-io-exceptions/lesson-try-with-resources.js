export const lessonTryWithResources = {
  id: "try-with-resources",
  title: "try-with-resources — the right way to handle closeable resources",
  hasChallenge: false,
  article: `
## try-with-resources — the right way to handle closeable resources

Any time you open a file, network connection, or database connection, you're holding a **resource** that must be closed when you're done. Forgetting to close resources causes memory leaks, file handle exhaustion, and data corruption.

**try-with-resources** (introduced in Java 7) solves this completely.

---

## The Problem: Manual Resource Management

\`\`\`java
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader("data.txt"));
    System.out.println(reader.readLine());
} catch (IOException e) {
    System.err.println("Error: " + e.getMessage());
} finally {
    if (reader != null) {
        try {
            reader.close();
        } catch (IOException e) {
            System.err.println("Failed to close: " + e.getMessage());
        }
    }
}
\`\`\`

This is verbose, error-prone, and easy to forget. There's a much better way.

---

## The Solution: try-with-resources

\`\`\`java
try (BufferedReader reader = new BufferedReader(new FileReader("data.txt"))) {
    System.out.println(reader.readLine());
} catch (IOException e) {
    System.err.println("Error: " + e.getMessage());
}
\`\`\`

The resource declared in \`()\` is automatically closed when the block exits — whether normally or due to an exception. That's it.

---

## How It Works

Any class that implements \`AutoCloseable\` (or its subinterface \`Closeable\`) can be used in try-with-resources. The compiler generates the \`close()\` call in a \`finally\` block for you.

\`\`\`java
public interface AutoCloseable {
    void close() throws Exception;
}
\`\`\`

Built-in classes that implement it: \`BufferedReader\`, \`FileWriter\`, \`InputStream\`, \`Connection\`, \`PreparedStatement\`, \`Scanner\`, and many more.

---

## Multiple Resources

Declare multiple resources separated by semicolons — they're closed in **reverse order**:

\`\`\`java
try (
    BufferedReader reader = new BufferedReader(new FileReader("input.txt"));
    BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))
) {
    String line;
    while ((line = reader.readLine()) != null) {
        writer.write(line.toUpperCase());
        writer.newLine();
    }
} catch (IOException e) {
    System.err.println("Error: " + e.getMessage());
}
\`\`\`

\`writer\` is closed first, then \`reader\`.

---

## Without a catch Block

If you're declaring the method with \`throws\`, you don't need \`catch\`:

\`\`\`java
public String readFirstLine(String path) throws IOException {
    try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
        return reader.readLine();
    }
}
\`\`\`

Clean and concise.

---

## Creating Your Own AutoCloseable

\`\`\`java
public class DatabaseConnection implements AutoCloseable {
    private final String url;

    public DatabaseConnection(String url) {
        this.url = url;
        System.out.println("Connected to: " + url);
    }

    public void query(String sql) {
        System.out.println("Running: " + sql);
    }

    @Override
    public void close() {
        System.out.println("Connection closed: " + url);
    }
}
\`\`\`

\`\`\`java
try (DatabaseConnection conn = new DatabaseConnection("jdbc:h2:mem:test")) {
    conn.query("SELECT * FROM users");
}
// "Connection closed: jdbc:h2:mem:test" is printed automatically
\`\`\`

---

## Suppressed Exceptions

If both the body and the \`close()\` call throw exceptions, the body's exception is the primary one. The close exception is **suppressed** (attached to the primary exception):

\`\`\`java
try {
    // ...
} catch (IOException e) {
    Throwable[] suppressed = e.getSuppressed();
    for (Throwable s : suppressed) {
        System.err.println("Suppressed: " + s.getMessage());
    }
}
\`\`\`

---

## What You Learned

- try-with-resources automatically closes any \`AutoCloseable\` resource
- Resources are declared in parentheses after \`try\`
- Multiple resources are closed in reverse order of declaration
- You can create your own closeable classes by implementing \`AutoCloseable\`
- This eliminates the need for verbose \`finally\` blocks for resource cleanup

## What Comes Next

Next, you'll learn how to handle missing or corrupt files gracefully.

Continue to: **7.10 Handling Missing or Corrupt Files Gracefully**
`,
};
