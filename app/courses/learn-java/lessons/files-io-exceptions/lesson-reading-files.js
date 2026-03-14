export const lessonReadingFiles = {
  id: "reading-files",
  title: "Reading Files with FileReader and BufferedReader",
  hasChallenge: false,
  article: `
## Reading Files with FileReader and BufferedReader

Every real Java application reads data from somewhere — config files, logs, CSV exports, text datasets. Java provides several APIs for reading files. This lesson covers the classic approach: \`FileReader\` and \`BufferedReader\`.

---

## The Core Idea

Java's file reading is layered:

- **\`FileReader\`** — opens a file and reads characters
- **\`BufferedReader\`** — wraps a reader and buffers the input, making line-by-line reading efficient

You almost always use them together.

---

## Reading a File Line by Line

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileExample {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("notes.txt"));

        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }

        reader.close();
    }
}
\`\`\`

\`readLine()\` returns \`null\` when there are no more lines — that's the loop termination condition.

---

## The Better Way: try-with-resources

Manually calling \`reader.close()\` is error-prone. If an exception is thrown before that line, the file stays open. Use **try-with-resources** instead:

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class ReadFileExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("notes.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Could not read file: " + e.getMessage());
        }
    }
}
\`\`\`

The file is automatically closed when the \`try\` block exits — even if an exception is thrown.

---

## Reading All Lines into a List

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ReadAllLines {
    public static List<String> readLines(String path) throws IOException {
        List<String> lines = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            String line;
            while ((line = reader.readLine()) != null) {
                lines.add(line);
            }
        }
        return lines;
    }
}
\`\`\`

---

## Modern Alternative: Files.readAllLines()

Java 7+ includes a much simpler one-liner for small files:

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

List<String> lines = Files.readAllLines(Path.of("notes.txt"));
\`\`\`

**Warning:** This loads the entire file into memory at once. For large files (logs, data exports), stick with \`BufferedReader\` and process line by line.

---

## File Paths

You can use relative or absolute paths:

\`\`\`java
// Relative — relative to where the program is run from
new FileReader("data/notes.txt")

// Absolute
new FileReader("/Users/elijah/projects/app/notes.txt")
\`\`\`

In IntelliJ, relative paths resolve from the project root.

---

## What Happens When the File Doesn't Exist?

\`\`\`java
try (BufferedReader reader = new BufferedReader(new FileReader("missing.txt"))) {
    // ...
} catch (IOException e) {
    System.err.println("File not found: " + e.getMessage());
}
\`\`\`

A \`FileNotFoundException\` is thrown (it's a subclass of \`IOException\`). Always handle this case.

---

## What You Learned

- \`FileReader\` + \`BufferedReader\` is the classic line-by-line file reading pattern
- Always use try-with-resources so the file is closed automatically
- \`Files.readAllLines()\` is a convenient shortcut for small files
- \`IOException\` must be caught or declared when reading files

## What Comes Next

Next, you'll write data to files.

Continue to: **7.2 Writing Files with FileWriter and BufferedWriter**
`,
};
