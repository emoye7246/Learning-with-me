export const lessonHandlingMissingFiles = {
  id: "handling-missing-files-cs",
  title: "Handling Missing or Broken Files",
  hasChallenge: false,
  article: `
## Handling Missing or Broken Files

File operations are inherently fragile. Files get deleted, moved, locked by other processes, or corrupted. Programs that don't handle these conditions crash or lose data. Robust file handling means anticipating failure and responding gracefully.

---

## File.Exists and Directory.Exists

The simplest check — confirm something exists before trying to use it:

\`\`\`csharp
string configPath = "config.json";

if (!File.Exists(configPath))
{
    Console.Error.WriteLine($"Configuration file not found: {configPath}");
    Console.Error.WriteLine("Run 'myapp init' to create a default configuration.");
    return 1;
}

string content = File.ReadAllText(configPath);
\`\`\`

\`\`\`csharp
string outputDir = "output/reports";

if (!Directory.Exists(outputDir))
{
    Directory.CreateDirectory(outputDir);
    Console.WriteLine($"Created directory: {outputDir}");
}
\`\`\`

**Important:** \`File.Exists\` has a race condition — the file could be deleted between the check and the read. Always combine existence checks with exception handling for full robustness.

---

## FileNotFoundException

Thrown when you try to open a file that doesn't exist:

\`\`\`csharp
try
{
    string content = File.ReadAllText("data.txt");
    ProcessData(content);
}
catch (FileNotFoundException ex)
{
    Console.Error.WriteLine($"Required file not found: {ex.FileName}");
    Console.Error.WriteLine("Check that the file path is correct and the file exists.");
}
\`\`\`

\`ex.FileName\` contains the path that was not found — useful for error messages.

---

## DirectoryNotFoundException

Thrown when a path references a directory that doesn't exist:

\`\`\`csharp
try
{
    string[] files = Directory.GetFiles("nonexistent/folder");
}
catch (DirectoryNotFoundException)
{
    Console.Error.WriteLine("The specified directory does not exist.");
}
\`\`\`

---

## IOException — General I/O Failures

\`IOException\` is the base class for file-related exceptions. It covers:
- Files locked by another process
- Disk full conditions
- Network drive disconnected
- Permission denied (on some systems)

\`\`\`csharp
try
{
    using var writer = new StreamWriter("output.txt");
    writer.WriteLine("Data...");
}
catch (IOException ex)
{
    Console.Error.WriteLine($"Failed to write file: {ex.Message}");
}
\`\`\`

---

## UnauthorizedAccessException

Thrown when the current user doesn't have permission to access the file:

\`\`\`csharp
try
{
    string content = File.ReadAllText("/etc/shadow");
}
catch (UnauthorizedAccessException)
{
    Console.Error.WriteLine("Access denied. You may need elevated permissions.");
}
\`\`\`

---

## Layered Exception Handling

Catch specific exceptions first, then broader ones:

\`\`\`csharp
try
{
    string data = File.ReadAllText(args[0]);
    var results = ProcessData(data);
    File.WriteAllText(args[1], results);
    Console.WriteLine("Done.");
}
catch (FileNotFoundException ex)
{
    Console.Error.WriteLine($"Input file not found: {ex.FileName}");
    return 1;
}
catch (UnauthorizedAccessException)
{
    Console.Error.WriteLine("Permission denied. Check file permissions.");
    return 1;
}
catch (IOException ex)
{
    Console.Error.WriteLine($"I/O error: {ex.Message}");
    return 1;
}
\`\`\`

---

## Graceful Degradation Patterns

Not every missing file is a fatal error. Sometimes the right response is to use a default:

\`\`\`csharp
static string LoadConfig(string path)
{
    if (File.Exists(path))
        return File.ReadAllText(path);

    Console.WriteLine($"Config not found at {path}, using defaults.");
    return "{}";  // empty JSON object as default
}
\`\`\`

Or to create the missing resource:

\`\`\`csharp
static List<string> LoadOrCreate(string path)
{
    if (!File.Exists(path))
    {
        File.WriteAllText(path, "");  // create empty file
        return [];
    }

    return [..File.ReadAllLines(path)];
}
\`\`\`

---

## Validating File Content

A file that exists can still be empty or malformed:

\`\`\`csharp
string content = File.ReadAllText("data.json");

if (string.IsNullOrWhiteSpace(content))
{
    Console.Error.WriteLine("The file is empty.");
    return 1;
}

try
{
    var data = System.Text.Json.JsonSerializer.Deserialize<MyData>(content);
    // use data...
}
catch (System.Text.Json.JsonException ex)
{
    Console.Error.WriteLine($"The file contains invalid JSON: {ex.Message}");
    return 1;
}
\`\`\`

---

## What Comes Next

The next lesson covers automating repetitive file tasks — batch processing, renaming files, and building practical file automation scripts.
`,
};
