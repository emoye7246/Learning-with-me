export const lessonWhatIsAConsoleApplication = {
  id: "what-is-a-console-application-cs",
  title: "What Is a Console Application?",
  hasChallenge: false,
  article: `
## What Is a Console Application?

Before web APIs, before GUI frameworks, before mobile apps — there are console applications. They are the simplest form of real software: a program that reads text input and writes text output. Understanding console applications deeply is essential before adding the complexity of frameworks.

---

## The Terminal Is an Interface

A console application runs in a terminal (command prompt, PowerShell, bash). Its user interface consists entirely of:
- Text it writes to standard output (stdout)
- Text the user types to standard input (stdin)
- Error messages to standard error (stderr)

This simplicity is a feature, not a limitation. When you're learning to build software, removing the complexity of a GUI framework lets you focus on program logic, data structures, and flow control.

---

## Two Modes: Interactive and Non-Interactive

**Interactive console apps** engage the user in a conversation:
\`\`\`
Enter your name: Alice
Hello, Alice!
What would you like to do?
> add-task Buy groceries
Task added.
> list
1. Buy groceries
> quit
Goodbye.
\`\`\`

**Non-interactive (piped) apps** read from files or pipes and produce output:
\`\`\`bash
cat data.csv | dotnet run -- --format table
\`\`\`

Many professional tools are non-interactive: compilers, formatters, analyzers, build tools. The .NET CLI itself (\`dotnet build\`, \`dotnet run\`) is a console application.

---

## Console Applications as Professional Tools

Many professional C# developers build or maintain console applications in their daily work:

- **Build scripts** — custom build steps that process files, run checks, or generate code
- **Database migration tools** — apply schema changes to databases
- **Report generators** — query a database and write CSV or HTML reports
- **Data migration tools** — move data between systems
- **Developer utilities** — code generators, scaffolders, linters

These are not toy programs. They are production software used by other developers, data teams, and DevOps engineers.

---

## Standard Streams

Every console application has three standard streams:

\`\`\`csharp
// Standard output — normal program output
Console.WriteLine("Hello");
Console.Out.WriteLine("Also standard output");

// Standard error — error and diagnostic messages
Console.Error.WriteLine("Something went wrong");

// Standard input — reading user input
string? line = Console.ReadLine();
\`\`\`

The distinction between stdout and stderr matters when programs are piped:
\`\`\`bash
dotnet run > output.txt     # stdout goes to file, stderr still shows in terminal
dotnet run 2> errors.txt    # stderr goes to file, stdout still shows in terminal
\`\`\`

Use stderr for errors and diagnostics. Use stdout for actual output.

---

## Exit Codes

Console applications signal success or failure to the operating system through exit codes:
- **0** = success
- **Non-zero** = failure (the specific number convention varies)

\`\`\`csharp
// In top-level statements, return an int to set the exit code
if (!File.Exists(inputPath))
{
    Console.Error.WriteLine($"File not found: {inputPath}");
    return 1;  // failure
}

// Process file...
return 0;  // success
\`\`\`

Build systems and CI pipelines check exit codes to determine whether a step passed or failed. A program that always exits with 0 cannot signal failure to the calling system.

---

## The Console Application as a Learning Ground

This module builds several complete console applications. The goal is not just to learn about console apps — it's to practice:

- Organizing a real program with multiple responsibilities
- Handling invalid input gracefully
- Designing clear user interactions
- Testing behavior at the boundaries

These skills transfer directly to every other kind of .NET application. ASP.NET Core controllers, Azure Functions, desktop event handlers — they all share the same underlying patterns.

---

## What Comes Next

The next lesson covers \`Console.ReadLine()\` vs command-line arguments — two different ways to pass data into a console application, each suited for different use cases.
`,
};
