export const lessonReadlineVsCommandLineArgs = {
  id: "readline-vs-command-line-args",
  title: "ReadLine vs Command-Line Args",
  hasChallenge: false,
  article: `
## ReadLine vs Command-Line Args

Console applications receive input in two fundamentally different ways: interactively via \`Console.ReadLine()\`, or upfront via command-line arguments. Knowing which to use — and how to design for both — is a practical skill.

---

## Console.ReadLine() — Interactive Input

\`Console.ReadLine()\` is for interactive programs that engage in a conversation with the user:

\`\`\`csharp
Console.Write("Enter your name: ");
string name = Console.ReadLine() ?? "Anonymous";

Console.Write("Enter your age: ");
int age = int.TryParse(Console.ReadLine(), out int parsed) ? parsed : 0;
\`\`\`

This is appropriate when:
- The program is meant to be run by a human, interactively
- The input depends on previous output (the program asks questions)
- You want to guide the user through a workflow

---

## Command-Line Arguments — Upfront Input

Command-line arguments are passed when launching the program:

\`\`\`bash
dotnet run -- convert input.csv output.json
dotnet run -- --verbose --max-results 50 search "query text"
\`\`\`

In top-level statement programs, \`args\` is automatically available:

\`\`\`csharp
if (args.Length < 2)
{
    Console.Error.WriteLine("Usage: myapp <input-file> <output-file>");
    return 1;
}

string inputFile = args[0];
string outputFile = args[1];
\`\`\`

This is appropriate when:
- The program is meant to be used in scripts and pipelines
- The input is known before the program starts
- The program doesn't need user interaction during execution
- You want the program to be automatable

---

## Parsing Arguments Manually

For simple tools, manual parsing is fine:

\`\`\`csharp
bool verbose = false;
string? inputFile = null;
string? outputFile = null;

for (int i = 0; i < args.Length; i++)
{
    switch (args[i])
    {
        case "--verbose":
        case "-v":
            verbose = true;
            break;
        case "--input":
        case "-i":
            inputFile = args[++i];
            break;
        case "--output":
        case "-o":
            outputFile = args[++i];
            break;
        default:
            Console.Error.WriteLine($"Unknown argument: {args[i]}");
            return 1;
    }
}

if (inputFile is null || outputFile is null)
{
    Console.Error.WriteLine("Both --input and --output are required.");
    return 1;
}
\`\`\`

---

## Using System.CommandLine (NuGet)

For complex CLIs, the \`System.CommandLine\` package provides a robust argument parsing framework:

\`\`\`bash
dotnet add package System.CommandLine
\`\`\`

\`\`\`csharp
using System.CommandLine;

var fileOption = new Option<FileInfo>("--file", "The input file") { IsRequired = true };
var verboseOption = new Option<bool>("--verbose", "Enable verbose output");

var rootCommand = new RootCommand("My CLI tool");
rootCommand.AddOption(fileOption);
rootCommand.AddOption(verboseOption);

rootCommand.SetHandler((file, verbose) =>
{
    Console.WriteLine($"Processing: {file.FullName}");
    if (verbose) Console.WriteLine("Verbose mode enabled.");
}, fileOption, verboseOption);

return await rootCommand.InvokeAsync(args);
\`\`\`

\`System.CommandLine\` automatically generates help text (\`--help\`), handles validation, and supports subcommands.

---

## Mixing Both Approaches

Some tools use arguments for configuration and ReadLine for data:

\`\`\`csharp
// Arguments configure the mode
bool interactiveMode = args.Contains("--interactive");

if (interactiveMode)
{
    // Interactive REPL-style
    while (true)
    {
        Console.Write("> ");
        string? input = Console.ReadLine();
        if (input == "exit") break;
        Process(input);
    }
}
else
{
    // Read from stdin pipe
    string? line;
    while ((line = Console.ReadLine()) != null)
    {
        Process(line);
    }
}
\`\`\`

---

## Environment Variables

A third input mechanism: environment variables. They're set externally and read in code:

\`\`\`csharp
string? apiKey = Environment.GetEnvironmentVariable("MY_API_KEY");
if (apiKey is null)
{
    Console.Error.WriteLine("MY_API_KEY environment variable is required.");
    return 1;
}
\`\`\`

Environment variables are appropriate for configuration that varies by deployment environment (dev vs staging vs production) and for secrets that shouldn't appear in command history.

---

## What Comes Next

The next lesson covers program structure and entry points — how a C# console application is organized, from the entry point down to lower-level components.
`,
};
