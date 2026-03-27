export const lessonReadingFiles = {
  id: "reading-files-cs",
  title: "Reading Files — File.ReadAllText & StreamReader",
  hasChallenge: false,
  article: `
## Reading Files — File.ReadAllText & StreamReader

Reading files is one of the most common tasks in real-world programming. .NET provides several approaches, from simple one-liners for small files to streaming APIs for large ones. Understanding which to use — and when — prevents common pitfalls.

---

## File.ReadAllText — Read an Entire File as a String

The simplest approach for small files:

\`\`\`csharp
string content = File.ReadAllText("notes.txt");
Console.WriteLine(content);
\`\`\`

This reads the entire file into a single string. It's clean and easy, but loads everything into memory at once. Fine for config files, small data files, and anything under a few megabytes.

By default, .NET assumes UTF-8 encoding. To specify a different encoding:

\`\`\`csharp
string content = File.ReadAllText("legacy.txt", System.Text.Encoding.Latin1);
\`\`\`

---

## File.ReadAllLines — Read as an Array of Lines

Returns a \`string[]\` where each element is one line, with line endings stripped:

\`\`\`csharp
string[] lines = File.ReadAllLines("data.csv");
foreach (string line in lines)
{
    Console.WriteLine(line);
}
\`\`\`

Useful when you need to process the file line by line but want random access to any line by index. Like \`ReadAllText\`, it loads everything into memory.

---

## File.ReadLines — Lazy Line-by-Line Reading

\`File.ReadLines\` returns an \`IEnumerable<string>\` that reads the file lazily — one line at a time, without loading the whole file:

\`\`\`csharp
foreach (string line in File.ReadLines("large-log.txt"))
{
    if (line.Contains("ERROR"))
        Console.WriteLine(line);
}
\`\`\`

For large files (hundreds of MB or more), this is significantly more memory-efficient than \`ReadAllLines\`. Use \`ReadLines\` as the default for processing files line by line.

---

## StreamReader — Fine-Grained Control

\`StreamReader\` gives you full control over how you read a file. Always use it inside a \`using\` statement so the file handle is released when you're done:

\`\`\`csharp
using var reader = new StreamReader("data.txt");

string? line;
while ((line = reader.ReadLine()) != null)
{
    Console.WriteLine(line);
}
\`\`\`

\`StreamReader\` also lets you read specific amounts of data:

\`\`\`csharp
using var reader = new StreamReader("binary-like.txt");

// Read exactly 4 characters
char[] buffer = new char[4];
int charsRead = reader.Read(buffer, 0, 4);
string header = new string(buffer, 0, charsRead);
\`\`\`

---

## Checking File Existence First

Always check before reading to provide a useful error message rather than an exception:

\`\`\`csharp
string path = "config.json";

if (!File.Exists(path))
{
    Console.Error.WriteLine($"Config file not found: {path}");
    return 1;
}

string content = File.ReadAllText(path);
\`\`\`

Note: there is a race condition — the file could be deleted between the check and the read. Wrap reads in try/catch for full robustness, using \`File.Exists\` for user-friendly pre-validation.

---

## Handling Large Files

For files that are too large to load into memory:

\`\`\`csharp
long lineCount = 0;
long errorCount = 0;

foreach (string line in File.ReadLines("huge-log.txt"))
{
    lineCount++;
    if (line.StartsWith("ERROR")) errorCount++;
}

Console.WriteLine($"Total lines: {lineCount}, Errors: {errorCount}");
\`\`\`

This processes a 2 GB log file using constant memory — only one line is in memory at a time.

---

## Choosing the Right Approach

| Method | Use When |
|--------|----------|
| \`File.ReadAllText\` | Small file, need it as one string |
| \`File.ReadAllLines\` | Small file, need all lines with index access |
| \`File.ReadLines\` | Large file, processing line by line |
| \`StreamReader\` | Need fine-grained control, partial reads, or custom encoding |

---

## What Comes Next

The next lesson covers writing files — creating, overwriting, and appending to files using \`File.WriteAllText\` and \`StreamWriter\`.
`,
};
