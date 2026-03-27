export const lessonAutomatingRepetitiveTasks = {
  id: "automating-repetitive-tasks-cs",
  title: "Automating Repetitive Tasks",
  hasChallenge: false,
  article: `
## Automating Repetitive Tasks

One of the highest-value uses of file I/O knowledge is automating work you'd otherwise do by hand. Renaming 200 files, converting a folder of text files to a different format, processing a month's worth of logs — these are tasks where a 30-line C# script saves hours.

---

## Batch File Processing

The core pattern: find files matching a condition, process each one.

\`\`\`csharp
string inputDir = "raw-data";
string outputDir = "processed";
Directory.CreateDirectory(outputDir);

int processed = 0;
int errors = 0;

foreach (string inputPath in Directory.GetFiles(inputDir, "*.csv"))
{
    string fileName = Path.GetFileName(inputPath);
    string outputPath = Path.Combine(outputDir, fileName);

    try
    {
        string content = File.ReadAllText(inputPath);
        string result = TransformCsv(content);
        File.WriteAllText(outputPath, result);
        processed++;
        Console.WriteLine($"[OK] {fileName}");
    }
    catch (Exception ex)
    {
        errors++;
        Console.Error.WriteLine($"[FAIL] {fileName}: {ex.Message}");
    }
}

Console.WriteLine($"\\nDone. Processed: {processed}, Errors: {errors}");
\`\`\`

Log successes and failures separately. Don't stop at the first error — process the rest and report all failures at the end.

---

## Filtering Files by Extension

\`Directory.GetFiles\` with a pattern is the simplest approach:

\`\`\`csharp
// Only .log files
string[] logs = Directory.GetFiles(".", "*.log");

// Multiple extensions — filter with LINQ
string[] sourceFiles = Directory.GetFiles("src", "*", SearchOption.AllDirectories)
    .Where(f => f.EndsWith(".cs") || f.EndsWith(".csproj"))
    .ToArray();
\`\`\`

---

## Filtering by Date

Process only files modified recently:

\`\`\`csharp
DateTime cutoff = DateTime.Now.AddDays(-7);

var recentFiles = Directory.GetFiles("logs", "*.log")
    .Where(f => File.GetLastWriteTime(f) > cutoff)
    .ToList();

Console.WriteLine($"Files modified in the last 7 days: {recentFiles.Count}");
\`\`\`

---

## Renaming Files

Rename files by building a new path and calling \`File.Move\`:

\`\`\`csharp
// Add a prefix to every .txt file
foreach (string file in Directory.GetFiles("docs", "*.txt"))
{
    string dir = Path.GetDirectoryName(file)!;
    string name = Path.GetFileName(file);
    string newPath = Path.Combine(dir, "archived_" + name);
    File.Move(file, newPath);
    Console.WriteLine($"Renamed: {name} → archived_{name}");
}
\`\`\`

\`\`\`csharp
// Change extension: .txt → .md
foreach (string file in Directory.GetFiles("notes", "*.txt"))
{
    string newPath = Path.ChangeExtension(file, ".md");
    File.Move(file, newPath);
}
\`\`\`

\`\`\`csharp
// Add a timestamp to file names
string timestamp = DateTime.Now.ToString("yyyyMMdd-HHmmss");
foreach (string file in Directory.GetFiles("exports", "*.csv"))
{
    string dir = Path.GetDirectoryName(file)!;
    string name = Path.GetFileNameWithoutExtension(file);
    string ext = Path.GetExtension(file);
    string newPath = Path.Combine(dir, $"{name}_{timestamp}{ext}");
    File.Move(file, newPath);
}
\`\`\`

---

## Safe Renaming — Dry Run Mode

Before renaming hundreds of files for real, support a dry-run mode that shows what would happen:

\`\`\`csharp
bool dryRun = args.Contains("--dry-run");

foreach (string file in Directory.GetFiles(".", "*.txt"))
{
    string newPath = Path.ChangeExtension(file, ".md");

    if (dryRun)
    {
        Console.WriteLine($"[dry-run] Would rename: {Path.GetFileName(file)} → {Path.GetFileName(newPath)}");
    }
    else
    {
        File.Move(file, newPath);
        Console.WriteLine($"Renamed: {Path.GetFileName(file)} → {Path.GetFileName(newPath)}");
    }
}
\`\`\`

Run with \`--dry-run\` first to verify the plan, then without it to execute.

---

## Building Automation Scripts

A complete automation script usually has this shape:

\`\`\`csharp
// 1. Parse and validate arguments
if (args.Length < 2)
{
    Console.Error.WriteLine("Usage: myapp <input-dir> <output-dir>");
    return 1;
}

string inputDir = args[0];
string outputDir = args[1];

// 2. Validate inputs
if (!Directory.Exists(inputDir))
{
    Console.Error.WriteLine($"Input directory not found: {inputDir}");
    return 1;
}

// 3. Set up output
Directory.CreateDirectory(outputDir);

// 4. Process files
int processed = 0, skipped = 0, errors = 0;

foreach (string file in Directory.GetFiles(inputDir, "*", SearchOption.AllDirectories))
{
    // ... process each file
}

// 5. Report summary
Console.WriteLine($"Complete. Processed: {processed}, Skipped: {skipped}, Errors: {errors}");
return errors > 0 ? 1 : 0;
\`\`\`

A non-zero exit code when there are errors lets CI systems and scripts detect failures automatically.

---

## What Comes Next

The next lesson covers JSON — reading and writing structured data using \`System.Text.Json\`, which is built into .NET and requires no additional packages.
`,
};
