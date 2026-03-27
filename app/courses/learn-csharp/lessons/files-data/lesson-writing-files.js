export const lessonWritingFiles = {
  id: "writing-files-cs",
  title: "Writing Files — File.WriteAllText & StreamWriter",
  hasChallenge: false,
  article: `
## Writing Files — File.WriteAllText & StreamWriter

Writing files is the counterpart to reading them. .NET provides simple APIs for common cases and lower-level streaming APIs when you need more control. Understanding overwrite vs. append behavior is essential — a wrong assumption here can cause data loss.

---

## File.WriteAllText — Write a String to a File

The simplest way to write a file:

\`\`\`csharp
string content = "Hello, World!\\nThis is line two.";
File.WriteAllText("output.txt", content);
\`\`\`

This creates the file if it doesn't exist, or **completely overwrites** it if it does. The containing directory must exist.

To specify encoding:

\`\`\`csharp
File.WriteAllText("output.txt", content, System.Text.Encoding.UTF8);
\`\`\`

---

## File.WriteAllLines — Write a Collection of Lines

Takes an \`IEnumerable<string>\` and writes each element as a line:

\`\`\`csharp
var lines = new List<string> { "Alice", "Bob", "Charlie" };
File.WriteAllLines("names.txt", lines);
\`\`\`

Equivalent to joining the lines with \`Environment.NewLine\` and calling \`WriteAllText\`. Like \`WriteAllText\`, it overwrites the file completely.

---

## File.AppendAllText — Append Without Overwriting

To add content to an existing file without replacing it:

\`\`\`csharp
File.AppendAllText("log.txt", $"[{DateTime.Now}] Application started.\\n");
\`\`\`

If the file doesn't exist, \`AppendAllText\` creates it. This is the safe way to add to a log file or accumulate records.

---

## File.AppendAllLines

Like \`AppendAllText\` but accepts a collection:

\`\`\`csharp
var newEntries = new[] { "entry one", "entry two" };
File.AppendAllLines("data.txt", newEntries);
\`\`\`

---

## StreamWriter — Fine-Grained Control

\`StreamWriter\` gives you a \`Write\`/\`WriteLine\` interface over a file stream. Always use it with \`using\` to ensure the file is closed and flushed:

\`\`\`csharp
using var writer = new StreamWriter("report.txt");

writer.WriteLine("=== Monthly Report ===");
writer.WriteLine($"Generated: {DateTime.Now:yyyy-MM-dd}");
writer.WriteLine();

foreach (var record in records)
{
    writer.WriteLine($"{record.Name},{record.Amount}");
}
\`\`\`

By default, \`StreamWriter\` overwrites the file. To append, pass \`append: true\`:

\`\`\`csharp
using var writer = new StreamWriter("log.txt", append: true);
writer.WriteLine($"[{DateTime.Now:HH:mm:ss}] Job completed.");
\`\`\`

---

## Buffering and Flushing

\`StreamWriter\` buffers writes for performance. When the \`using\` block ends, it automatically flushes and closes the stream. If you need to write and keep the stream open (e.g., logging over time), call \`Flush\` explicitly:

\`\`\`csharp
using var writer = new StreamWriter("live-log.txt", append: true) { AutoFlush = true };

// AutoFlush: true means each WriteLine is immediately written to disk
writer.WriteLine("Starting process...");
DoWork();
writer.WriteLine("Process complete.");
\`\`\`

Use \`AutoFlush = true\` when you need writes to appear immediately (like a tail-able log), and leave it off when throughput matters.

---

## Overwrite vs. Append — A Summary

| Method | Behavior if file exists |
|--------|------------------------|
| \`File.WriteAllText\` | Overwrites completely |
| \`File.WriteAllLines\` | Overwrites completely |
| \`File.AppendAllText\` | Appends to end |
| \`File.AppendAllLines\` | Appends to end |
| \`new StreamWriter(path)\` | Overwrites completely |
| \`new StreamWriter(path, append: true)\` | Appends to end |

Before writing, ask: should this replace the file, or add to it? Choosing wrong can mean silently deleting data that was there before.

---

## Creating Directories Before Writing

\`File.WriteAllText\` throws if the directory doesn't exist. Create it first:

\`\`\`csharp
string outputPath = "output/reports/summary.txt";
Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);
File.WriteAllText(outputPath, content);
\`\`\`

\`Directory.CreateDirectory\` is safe to call even if the directory already exists — it does nothing in that case.

---

## What Comes Next

The next lesson covers working with CSV and text-delimited data — one of the most common file formats you'll encounter in real-world programs.
`,
};
