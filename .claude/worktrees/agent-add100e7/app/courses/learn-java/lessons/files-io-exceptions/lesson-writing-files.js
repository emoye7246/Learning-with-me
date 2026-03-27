export const lessonWritingFiles = {
  id: "writing-files",
  title: "Writing Files with FileWriter and BufferedWriter",
  hasChallenge: false,
  article: `
## Writing Files with FileWriter and BufferedWriter

Writing to files follows the same layered pattern as reading: \`FileWriter\` opens the file, and \`BufferedWriter\` adds buffering for efficient output.

---

## Basic File Writing

\`\`\`java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample {
    public static void main(String[] args) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            writer.write("Hello, file!");
            writer.newLine();
            writer.write("Second line.");
            writer.newLine();
        } catch (IOException e) {
            System.err.println("Could not write file: " + e.getMessage());
        }
    }
}
\`\`\`

- \`write(String)\` — writes text (no newline added automatically)
- \`newLine()\` — writes the platform-appropriate line separator (\`\\n\` on Linux/Mac, \`\\r\\n\` on Windows)

---

## Appending vs Overwriting

By default, \`FileWriter\` **overwrites** the file. To append instead:

\`\`\`java
// Overwrite (default):
new FileWriter("log.txt")

// Append:
new FileWriter("log.txt", true)
\`\`\`

\`\`\`java
try (BufferedWriter writer = new BufferedWriter(new FileWriter("log.txt", true))) {
    writer.write("[INFO] Application started");
    writer.newLine();
}
\`\`\`

---

## Writing Multiple Lines

\`\`\`java
import java.util.List;

List<String> lines = List.of("Alice,90", "Bob,85", "Carol,92");

try (BufferedWriter writer = new BufferedWriter(new FileWriter("grades.txt"))) {
    for (String line : lines) {
        writer.write(line);
        writer.newLine();
    }
}
\`\`\`

---

## Modern Alternative: Files.writeString() and Files.write()

Java 11+ provides convenient one-liners:

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

// Write a single string
Files.writeString(Path.of("output.txt"), "Hello, file!");

// Write a list of lines
Files.write(Path.of("grades.txt"), List.of("Alice,90", "Bob,85", "Carol,92"));
\`\`\`

These are fine for small writes. For large or incremental writes, use \`BufferedWriter\`.

---

## PrintWriter — Writing with Formatting

\`PrintWriter\` wraps a writer and adds \`println\`, \`printf\`, and \`format\`:

\`\`\`java
import java.io.PrintWriter;
import java.io.FileWriter;

try (PrintWriter pw = new PrintWriter(new FileWriter("report.txt"))) {
    pw.println("Student Report");
    pw.println("==============");
    pw.printf("%-10s %5s%n", "Name", "Score");
    pw.printf("%-10s %5d%n", "Alice", 92);
    pw.printf("%-10s %5d%n", "Bob", 87);
}
\`\`\`

Output:
\`\`\`
Student Report
==============
Name       Score
Alice         92
Bob           87
\`\`\`

---

## Creating Directories Before Writing

If the output directory doesn't exist, the write will fail. Create it first:

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

Path outputDir = Path.of("reports/2024");
Files.createDirectories(outputDir);  // creates all parent directories too

Path outputFile = outputDir.resolve("summary.txt");
Files.writeString(outputFile, "All systems nominal.");
\`\`\`

---

## What You Learned

- \`FileWriter\` + \`BufferedWriter\` is the standard approach for writing files
- Pass \`true\` as the second argument to \`FileWriter\` to append instead of overwrite
- \`PrintWriter\` adds \`println\` and \`printf\` formatting
- \`Files.writeString()\` and \`Files.write()\` are convenient for small, one-shot writes
- Create directories with \`Files.createDirectories()\` before writing

## What Comes Next

Next, you'll work with the modern \`Path\` API for navigating the filesystem.

Continue to: **7.3 Working with Paths — the java.nio.file.Path API**
`,
};
