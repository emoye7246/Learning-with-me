export const lessonWorkingWithPaths = {
  id: "working-with-paths",
  title: "Working with Paths — the java.nio.file.Path API",
  hasChallenge: false,
  article: `
## Working with Paths — the java.nio.file.Path API

Java's original \`File\` class is old and awkward. Java 7 introduced \`java.nio.file.Path\` and the \`Files\` utility class — a much cleaner, more capable API for working with the filesystem.

---

## Path vs File

| Old API | New API |
|---|---|
| \`new File("data/notes.txt")\` | \`Path.of("data/notes.txt")\` |
| \`file.exists()\` | \`Files.exists(path)\` |
| \`file.delete()\` | \`Files.delete(path)\` |
| \`file.mkdirs()\` | \`Files.createDirectories(path)\` |

Prefer the \`Path\` API for new code. Use \`File\` only when an old API requires it.

---

## Creating Paths

\`\`\`java
import java.nio.file.Path;

// From a string
Path p1 = Path.of("data/notes.txt");

// Multiple segments (joined automatically)
Path p2 = Path.of("data", "2024", "notes.txt");  // data/2024/notes.txt

// Absolute path
Path p3 = Path.of("/Users/elijah/projects/app/data.txt");
\`\`\`

---

## Resolving and Relativizing

\`\`\`java
Path base = Path.of("projects/myapp");

// Append a child path
Path config = base.resolve("config/app.properties");
// → projects/myapp/config/app.properties

// Get the parent directory
Path parent = config.getParent();
// → projects/myapp/config

// Get just the file name
Path filename = config.getFileName();
// → app.properties

// Get the file extension (manual)
String name = config.getFileName().toString();
String ext = name.substring(name.lastIndexOf('.') + 1);  // "properties"
\`\`\`

---

## Checking Path Properties

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Path;

Path path = Path.of("data/notes.txt");

Files.exists(path)          // true if exists
Files.isDirectory(path)     // true if it's a directory
Files.isRegularFile(path)   // true if it's a file (not a directory)
Files.isReadable(path)      // true if readable
Files.isWritable(path)      // true if writable
Files.size(path)            // size in bytes (throws IOException)
\`\`\`

---

## Creating and Deleting

\`\`\`java
// Create a single directory
Files.createDirectory(Path.of("output"));

// Create a directory and all parents
Files.createDirectories(Path.of("output/reports/2024"));

// Delete a file
Files.delete(Path.of("temp.txt"));

// Delete if it exists (no exception if missing)
Files.deleteIfExists(Path.of("temp.txt"));
\`\`\`

---

## Copying and Moving

\`\`\`java
import java.nio.file.StandardCopyOption;

Path source = Path.of("original.txt");
Path dest   = Path.of("backup/original.txt");

// Copy (will fail if dest exists — use REPLACE_EXISTING to override)
Files.copy(source, dest, StandardCopyOption.REPLACE_EXISTING);

// Move (rename or relocate)
Files.move(source, dest, StandardCopyOption.REPLACE_EXISTING);
\`\`\`

---

## Listing Directory Contents

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

try (Stream<Path> entries = Files.list(Path.of("data"))) {
    entries.forEach(System.out::println);
}
\`\`\`

For recursive listing:

\`\`\`java
try (Stream<Path> entries = Files.walk(Path.of("data"))) {
    entries
        .filter(Files::isRegularFile)
        .forEach(System.out::println);
}
\`\`\`

---

## Reading and Writing with Path

\`\`\`java
// Read all lines
List<String> lines = Files.readAllLines(Path.of("notes.txt"));

// Write a string
Files.writeString(Path.of("output.txt"), "Hello!");

// Write lines
Files.write(Path.of("list.txt"), List.of("one", "two", "three"));
\`\`\`

---

## Getting the Current Working Directory

\`\`\`java
Path cwd = Path.of("").toAbsolutePath();
System.out.println("Running from: " + cwd);
\`\`\`

---

## What You Learned

- \`Path.of()\` creates path objects from strings or segments
- \`Files\` is the utility class for all filesystem operations
- Use \`resolve()\` to build child paths from a base
- \`Files.createDirectories()\` creates all missing parent directories
- \`Files.list()\` and \`Files.walk()\` enumerate directory contents

## What Comes Next

Next, you'll read and write structured text data in CSV format.

Continue to: **7.4 Reading and Writing CSV and Text Data**
`,
};
