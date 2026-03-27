export const lessonDirectoriesAndPaths = {
  id: "directories-and-paths-cs",
  title: "Directories & Paths — System.IO",
  hasChallenge: false,
  article: `
## Directories & Paths — System.IO

Working with the file system means more than just reading and writing individual files. You need to navigate directories, list their contents, create folder structures, and build file paths correctly. \`System.IO\` provides all of this.

---

## Listing Files in a Directory

\`Directory.GetFiles\` returns an array of file paths:

\`\`\`csharp
// All files in a directory
string[] files = Directory.GetFiles("documents");

// Only .txt files
string[] txtFiles = Directory.GetFiles("documents", "*.txt");

// All .cs files in all subdirectories
string[] csFiles = Directory.GetFiles("src", "*.cs", SearchOption.AllDirectories);

foreach (string file in csFiles)
{
    Console.WriteLine(file);
}
\`\`\`

\`SearchOption.AllDirectories\` recurses into subdirectories. Use \`SearchOption.TopDirectoryOnly\` (the default) when you only want the immediate directory.

---

## Listing Subdirectories

\`\`\`csharp
string[] dirs = Directory.GetDirectories("projects");

foreach (string dir in dirs)
{
    Console.WriteLine(Path.GetFileName(dir));
}
\`\`\`

---

## Creating Directories

\`Directory.CreateDirectory\` creates a directory and any missing parent directories:

\`\`\`csharp
Directory.CreateDirectory("output/reports/2024");
\`\`\`

This is safe to call even if the directory already exists — it silently succeeds. No need to check with \`Directory.Exists\` first.

---

## Path.Combine — Building Paths Correctly

Never concatenate paths with string operators. Use \`Path.Combine\`:

\`\`\`csharp
// Wrong — breaks on Windows vs Linux
string bad = "data" + "/" + "output" + "/" + "report.csv";

// Right — uses the correct separator for the current OS
string good = Path.Combine("data", "output", "report.csv");

// With a base directory
string baseDir = "C:\\\\Users\\\\Alice\\\\Documents";
string filePath = Path.Combine(baseDir, "reports", "summary.txt");
\`\`\`

\`Path.Combine\` handles trailing slashes gracefully and uses the OS-appropriate separator.

---

## Path Utility Methods

\`\`\`csharp
string path = "/home/alice/documents/report.csv";

Console.WriteLine(Path.GetFileName(path));           // report.csv
Console.WriteLine(Path.GetFileNameWithoutExtension(path)); // report
Console.WriteLine(Path.GetExtension(path));          // .csv
Console.WriteLine(Path.GetDirectoryName(path));      // /home/alice/documents
Console.WriteLine(Path.GetFullPath("relative/path")); // absolute path
\`\`\`

These are safe to call on paths that don't exist — they operate on strings, not the actual file system.

---

## DirectoryInfo — Object-Oriented API

\`DirectoryInfo\` wraps a directory path in an object with methods and properties:

\`\`\`csharp
var dir = new DirectoryInfo("documents");

Console.WriteLine(dir.FullName);        // absolute path
Console.WriteLine(dir.Name);           // "documents"
Console.WriteLine(dir.Exists);         // true/false
Console.WriteLine(dir.CreationTime);   // DateTime

foreach (FileInfo file in dir.GetFiles("*.txt"))
{
    Console.WriteLine($"{file.Name} ({file.Length:N0} bytes)");
}

foreach (DirectoryInfo sub in dir.GetDirectories())
{
    Console.WriteLine($"[dir] {sub.Name}");
}
\`\`\`

Use \`DirectoryInfo\` when you need metadata (size, timestamps) or prefer the object-oriented style. Use the static \`Directory\` methods when you just need paths.

---

## Recursive Directory Traversal

Process files in a directory tree recursively:

\`\`\`csharp
static void ProcessDirectory(string path, string extension)
{
    foreach (string file in Directory.GetFiles(path, $"*{extension}"))
    {
        Console.WriteLine($"Processing: {file}");
        // ... do something with each file
    }

    foreach (string subDir in Directory.GetDirectories(path))
    {
        ProcessDirectory(subDir, extension);
    }
}

ProcessDirectory("project", ".cs");
\`\`\`

Or more concisely using \`SearchOption.AllDirectories\`:

\`\`\`csharp
foreach (string file in Directory.GetFiles("project", "*.cs", SearchOption.AllDirectories))
{
    Console.WriteLine(file);
}
\`\`\`

---

## Moving and Deleting

\`\`\`csharp
// Move a file
File.Move("old-name.txt", "new-name.txt");

// Move a directory
Directory.Move("old-folder", "new-folder");

// Delete a file
File.Delete("temp.txt");

// Delete a directory (must be empty)
Directory.Delete("empty-folder");

// Delete a directory and all its contents
Directory.Delete("folder-with-files", recursive: true);
\`\`\`

Be careful with \`recursive: true\` — it permanently deletes everything inside.

---

## What Comes Next

The next lesson covers handling missing or broken files gracefully — using \`File.Exists\`, \`Directory.Exists\`, and exception handling to build resilient programs.
`,
};
