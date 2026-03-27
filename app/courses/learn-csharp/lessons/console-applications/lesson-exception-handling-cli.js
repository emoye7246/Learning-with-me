export const lessonExceptionHandlingCli = {
  id: "exception-handling-cli-cs",
  title: "Exception Handling in CLI Programs",
  hasChallenge: false,
  article: `
## Exception Handling in CLI Programs

Unhandled exceptions crash your program and print a stack trace that confuses users. Good exception handling means your program fails gracefully, with clear messages, and exits with a meaningful code.

---

## try / catch / finally

The core construct for exception handling in C#:

\`\`\`csharp
try
{
    string content = File.ReadAllText("data.txt");
    Console.WriteLine(content);
}
catch (FileNotFoundException ex)
{
    Console.Error.WriteLine($"File not found: {ex.FileName}");
}
catch (IOException ex)
{
    Console.Error.WriteLine($"IO error: {ex.Message}");
}
finally
{
    // Runs whether an exception occurred or not
    Console.WriteLine("Done.");
}
\`\`\`

- \`try\` — the code that might throw
- \`catch\` — handles specific exception types
- \`finally\` — always runs, used for cleanup (closing files, releasing resources)

---

## Catching Specific Exception Types

Catch the most specific type first. C# matches the first catch block whose type matches the thrown exception:

\`\`\`csharp
try
{
    int value = int.Parse(Console.ReadLine() ?? "");
    Console.WriteLine(100 / value);
}
catch (FormatException)
{
    Console.Error.WriteLine("Input was not a valid number.");
}
catch (DivideByZeroException)
{
    Console.Error.WriteLine("Cannot divide by zero.");
}
catch (Exception ex)
{
    // Catch-all for anything else
    Console.Error.WriteLine($"Unexpected error: {ex.Message}");
}
\`\`\`

Common exception types you'll encounter in CLI programs:

| Exception | Cause |
|-----------|-------|
| \`FormatException\` | Invalid format in \`int.Parse\`, \`DateTime.Parse\`, etc. |
| \`FileNotFoundException\` | File does not exist |
| \`DirectoryNotFoundException\` | Directory does not exist |
| \`IOException\` | General file/stream error |
| \`UnauthorizedAccessException\` | Insufficient permissions |
| \`ArgumentException\` | Invalid argument passed to a method |
| \`OverflowException\` | Numeric overflow |

---

## Environment.Exit vs Return

Two ways to stop execution with an exit code:

\`\`\`csharp
// At the top level — use return
if (args.Length == 0)
{
    Console.Error.WriteLine("No arguments provided.");
    return 1;
}

// From deep inside a helper method — use Environment.Exit
static void AbortWithError(string message)
{
    Console.Error.WriteLine($"Fatal: {message}");
    Environment.Exit(1);
}
\`\`\`

Prefer \`return\` from the top level when possible — it's cleaner and more testable. \`Environment.Exit\` is for situations where you cannot propagate a return value up the call stack.

---

## stderr vs stdout

Always write error messages to \`Console.Error\`, not \`Console.Out\`:

\`\`\`csharp
// Good — error goes to stderr
Console.Error.WriteLine("Error: file not found.");

// Bad — error mixed in with program output
Console.WriteLine("Error: file not found.");
\`\`\`

This matters when programs are piped or redirected:

\`\`\`bash
dotnet run > output.txt        # stdout captured, errors still visible in terminal
dotnet run 2> errors.log       # stderr captured separately
dotnet run > out.txt 2>&1      # both captured together
\`\`\`

---

## Top-Level Exception Handlers

Wrap your entire program in a top-level try/catch to ensure no exception escapes to produce a raw stack trace:

\`\`\`csharp
try
{
    Run(args);
}
catch (Exception ex)
{
    Console.Error.WriteLine($"Unexpected error: {ex.Message}");
    return 1;
}

return 0;

static void Run(string[] args)
{
    // ... application logic
}
\`\`\`

This pattern gives you one place to handle truly unexpected exceptions while letting specific handlers deal with expected failure cases closer to where they occur.

---

## Graceful Error Messages

Prefer helpful, user-facing messages over raw exception text:

\`\`\`csharp
try
{
    var data = LoadConfig("config.json");
}
catch (FileNotFoundException)
{
    Console.Error.WriteLine("Configuration file not found.");
    Console.Error.WriteLine("Run 'myapp init' to create a default configuration.");
    return 1;
}
catch (System.Text.Json.JsonException ex)
{
    Console.Error.WriteLine("Configuration file is not valid JSON.");
    Console.Error.WriteLine($"Detail: {ex.Message}");
    return 1;
}
\`\`\`

Raw exception messages often contain implementation details that confuse users. Write the message your user needs to take action — not the message that helps you debug.

---

## When to Not Catch

Not every exception should be caught. Let \`ArgumentNullException\` and \`InvalidOperationException\` from your own bugs surface during development — they indicate programming errors, not runtime conditions. Catch exceptions that represent recoverable, expected failure conditions.

---

## What Comes Next

The next lesson covers how to organize larger console apps — separating concerns, using static helper methods, and keeping \`Program.cs\` focused.
`,
};
