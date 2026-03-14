export const lessonHandlingMissingCorruptFiles = {
  id: "handling-missing-corrupt-files",
  title: "Handling Missing or Corrupt Files Gracefully",
  hasChallenge: false,
  article: `
## Handling Missing or Corrupt Files Gracefully

Real programs don't get to assume that files exist, are readable, or contain valid data. This lesson covers the patterns that make file-handling code robust rather than fragile.

---

## Checking Before Opening

Check whether a file exists before trying to read it:

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Path;

Path path = Path.of("config.json");

if (!Files.exists(path)) {
    System.out.println("Config file not found. Using defaults.");
    return getDefaultConfig();
}

// Safe to read now
String content = Files.readString(path);
\`\`\`

---

## Catching FileNotFoundException Specifically

\`\`\`java
try (BufferedReader reader = new BufferedReader(new FileReader("data.csv"))) {
    // process file
} catch (FileNotFoundException e) {
    System.err.println("Data file is missing: " + e.getMessage());
    // graceful recovery
} catch (IOException e) {
    System.err.println("Error reading file: " + e.getMessage());
}
\`\`\`

Catch specific exception types first — \`FileNotFoundException\` is a subclass of \`IOException\`.

---

## Recovering from Corrupt or Malformed Data

When parsing files, individual lines may be malformed. Skip bad lines rather than crashing:

\`\`\`java
List<Student> students = new ArrayList<>();
int lineNumber = 0;

try (BufferedReader reader = new BufferedReader(new FileReader("students.csv"))) {
    reader.readLine(); // skip header
    String line;

    while ((line = reader.readLine()) != null) {
        lineNumber++;
        try {
            String[] parts = line.split(",");
            String name = parts[0].trim();
            int score   = Integer.parseInt(parts[1].trim());
            students.add(new Student(name, score));
        } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
            System.err.println("Skipping malformed line " + lineNumber + ": " + line);
        }
    }
}

System.out.println("Loaded " + students.size() + " students.");
\`\`\`

---

## Using Optional for File Reads

Return \`Optional\` when a file might legitimately not exist:

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Optional;

public Optional<String> readConfig(String filename) {
    Path path = Path.of(filename);
    if (!Files.exists(path)) {
        return Optional.empty();
    }
    try {
        return Optional.of(Files.readString(path));
    } catch (IOException e) {
        System.err.println("Failed to read " + filename + ": " + e.getMessage());
        return Optional.empty();
    }
}
\`\`\`

Usage:

\`\`\`java
String config = readConfig("app.json").orElse("{}");
\`\`\`

---

## Providing Defaults When Files Are Missing

\`\`\`java
public class AppConfig {
    private final String host;
    private final int port;

    public static AppConfig load(String path) {
        try {
            String json = Files.readString(Path.of(path));
            return parseJson(json);
        } catch (IOException e) {
            System.out.println("Config not found, using defaults.");
            return new AppConfig("localhost", 8080);
        }
    }

    // ...
}
\`\`\`

---

## Validating File Properties Before Reading

\`\`\`java
public void processFile(Path path) throws IOException {
    if (!Files.exists(path)) {
        throw new FileNotFoundException("Required file missing: " + path);
    }
    if (!Files.isReadable(path)) {
        throw new IOException("File is not readable (check permissions): " + path);
    }
    if (Files.size(path) == 0) {
        System.out.println("Warning: file is empty — " + path);
        return;
    }

    // proceed with reading
}
\`\`\`

---

## Logging Errors Properly

In production code, use a logging framework instead of \`System.err.println\`:

\`\`\`java
import java.util.logging.Logger;
import java.util.logging.Level;

private static final Logger log = Logger.getLogger(MyClass.class.getName());

try {
    processFile(path);
} catch (IOException e) {
    log.log(Level.SEVERE, "Failed to process file: " + path, e);
}
\`\`\`

---

## What You Learned

- Check \`Files.exists()\` before reading when a file might be absent
- Catch \`FileNotFoundException\` separately from \`IOException\` for precise handling
- Skip malformed lines with inner try-catch when parsing line by line
- Return \`Optional\` when a missing file is a normal (not exceptional) case
- Provide sensible defaults rather than crashing when config files are missing

## What Comes Next

Time to put everything together in a real project.

Continue to: **Mini Project: CSV Report Generator**
`,
};
