export const lessonMiniProjectAsyncFileProcessor = {
  id: "mini-project-async-file-processor",
  title: "Mini-Project: Async File Processor",
  hasChallenge: true,
  article: `
## Mini-Project: Async File Processor

In this project you'll build a small utility that reads multiple text files in parallel using \`async/await\` and \`Task.WhenAll\`, then reports statistics about each file. This ties together async fundamentals, parallel task coordination, and basic error handling.

## What You'll Build

A console application that:
1. Accepts a list of file paths (hardcoded or from command-line args)
2. Reads all files asynchronously and in parallel
3. Reports the filename, line count, word count, and character count for each
4. Handles missing files gracefully — reports an error for that file without stopping the rest

## Project Setup

\`\`\`bash
dotnet new console -n AsyncFileProcessor
cd AsyncFileProcessor
\`\`\`

Create some sample text files to process:

\`\`\`bash
echo "Hello world. This is file one." > file1.txt
echo "Second file here.\nWith two lines." > file2.txt
echo "Third file.\nMore content.\nThree lines total." > file3.txt
\`\`\`

## The FileResult Record

Start with a data structure to hold results for each file:

\`\`\`csharp
record FileResult(
    string FilePath,
    bool Success,
    int LineCount,
    int WordCount,
    int CharCount,
    string? Error = null
);
\`\`\`

## The Async Processing Method

\`\`\`csharp
static async Task<FileResult> ProcessFileAsync(string filePath)
{
    try
    {
        string content = await File.ReadAllTextAsync(filePath);

        int lineCount = content.Split('\\n', StringSplitOptions.RemoveEmptyEntries).Length;
        int wordCount = content.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
        int charCount = content.Length;

        return new FileResult(filePath, true, lineCount, wordCount, charCount);
    }
    catch (FileNotFoundException)
    {
        return new FileResult(filePath, false, 0, 0, 0, Error: "File not found");
    }
    catch (Exception ex)
    {
        return new FileResult(filePath, false, 0, 0, 0, Error: ex.Message);
    }
}
\`\`\`

Notice: the method returns a \`FileResult\` whether it succeeds or fails — failures are data, not exceptions that propagate. This is the right pattern for fan-out operations where you want to know about each individual result.

## Running Files in Parallel

\`\`\`csharp
static async Task Main(string[] args)
{
    string[] filePaths =
    [
        "file1.txt",
        "file2.txt",
        "file3.txt",
        "missing.txt",  // will produce an error result
    ];

    Console.WriteLine($"Processing {filePaths.Length} files in parallel...\\n");

    // Start all file reads at once
    IEnumerable<Task<FileResult>> tasks = filePaths.Select(ProcessFileAsync);

    // Wait for all to complete
    FileResult[] results = await Task.WhenAll(tasks);

    // Report results
    foreach (FileResult result in results)
    {
        if (result.Success)
        {
            Console.WriteLine($"[OK]    {result.FilePath}");
            Console.WriteLine($"        Lines: {result.LineCount}  Words: {result.WordCount}  Chars: {result.CharCount}");
        }
        else
        {
            Console.WriteLine($"[ERROR] {result.FilePath} — {result.Error}");
        }

        Console.WriteLine();
    }

    int successCount = results.Count(r => r.Success);
    int errorCount   = results.Length - successCount;

    Console.WriteLine($"Done. {successCount} succeeded, {errorCount} failed.");
}
\`\`\`

## Expected Output

\`\`\`bash
Processing 4 files in parallel...

[OK]    file1.txt
        Lines: 1  Words: 6  Chars: 31

[OK]    file2.txt
        Lines: 2  Words: 5  Chars: 27

[OK]    file3.txt
        Lines: 3  Words: 6  Chars: 42

[ERROR] missing.txt — File not found

Done. 3 succeeded, 1 failed.
\`\`\`

## Extension Challenges

Try extending the project to push your skills further:

- Add a \`CancellationToken\` with a configurable timeout (e.g., cancel after 5 seconds)
- Accept file paths from command-line arguments instead of hardcoded values
- Add a \`--parallel\` flag to control how many files are processed at once using \`SemaphoreSlim\` to limit concurrency
- Report total processing time using \`Stopwatch\`

\`\`\`csharp
// Limiting concurrency with SemaphoreSlim
var semaphore = new SemaphoreSlim(initialCount: 4); // max 4 at a time

async Task<FileResult> ProcessWithLimitAsync(string path)
{
    await semaphore.WaitAsync();
    try
    {
        return await ProcessFileAsync(path);
    }
    finally
    {
        semaphore.Release();
    }
}
\`\`\`

## Key Concepts Practiced

- \`File.ReadAllTextAsync\` for non-blocking file I/O
- \`Task.WhenAll\` with \`Select\` to fan out across a collection
- Encoding failures as data (result objects) rather than propagating exceptions
- Aggregating results and reporting summaries
`,
};
