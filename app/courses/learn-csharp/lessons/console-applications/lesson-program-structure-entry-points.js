export const lessonProgramStructureEntryPoints = {
  id: "program-structure-entry-points-cs",
  title: "Program Structure & Entry Points",
  hasChallenge: false,
  article: `
## Program Structure & Entry Points

Every C# program has an entry point — a specific place where execution begins. Understanding how that entry point works, and how it has evolved across C# versions, gives you a solid foundation for building well-structured console applications.

---

## Top-Level Statements (C# 9+)

Since C# 9, you can write code directly at the top of a file without wrapping it in a class or method. The compiler handles the boilerplate for you:

\`\`\`csharp
// Program.cs
Console.WriteLine("Hello, World!");
\`\`\`

This is not a hack or a shortcut — it generates the same IL as the traditional pattern. The compiler wraps it in a class and a \`Main\` method behind the scenes. For console applications, this is now the preferred style.

---

## The Traditional Main Method Pattern

Before C# 9, every program required an explicit \`Main\` method inside a class:

\`\`\`csharp
using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
\`\`\`

You will encounter this pattern in older codebases, tutorials, and documentation. It is still valid C# and some teams prefer it for explicitness. Understanding both patterns is important.

---

## Namespaces

Namespaces organize code and prevent naming conflicts. In top-level statement programs, you can still declare namespaces for any types you define:

\`\`\`csharp
// Top-level code (no namespace needed for Program.cs itself)
var helper = new MyApp.TextHelper();
Console.WriteLine(helper.FormatTitle("Welcome"));

namespace MyApp
{
    class TextHelper
    {
        public string FormatTitle(string text) => $"=== {text} ===";
    }
}
\`\`\`

File-scoped namespaces (C# 10+) reduce indentation:

\`\`\`csharp
namespace MyApp;  // applies to the whole file

class TextHelper
{
    public string FormatTitle(string text) => $"=== {text} ===";
}
\`\`\`

---

## Program.cs and Project Structure

In a minimal .NET console project, the structure looks like this:

\`\`\`
MyApp/
├── MyApp.csproj
├── Program.cs
└── Helpers.cs         (optional additional files)
\`\`\`

The \`Program.cs\` file is the conventional name for the entry point file — the compiler does not require this name, but it is universally understood. Keep \`Program.cs\` focused on startup and coordination. Move logic into other files.

---

## The args Variable in Top-Level Statements

When you use top-level statements, the command-line arguments are available through a magic variable called \`args\`:

\`\`\`csharp
// args is automatically available — no need to declare it
if (args.Length == 0)
{
    Console.WriteLine("Usage: myapp <name>");
    return;
}

string name = args[0];
Console.WriteLine($"Hello, {name}!");
\`\`\`

This \`args\` variable is of type \`string[]\`, exactly as in the traditional \`Main(string[] args)\` signature.

---

## Return Codes

A console application communicates success or failure to the operating system via its exit code. Exit code 0 means success; any non-zero value means failure.

In top-level statements, use \`return\` with an integer:

\`\`\`csharp
if (args.Length == 0)
{
    Console.Error.WriteLine("Error: no arguments provided.");
    return 1;  // failure
}

// Do work...
return 0;  // success
\`\`\`

You can also use \`Environment.Exit()\` to exit immediately from anywhere in the call stack:

\`\`\`csharp
static void Abort(string message)
{
    Console.Error.WriteLine($"Fatal: {message}");
    Environment.Exit(1);
}
\`\`\`

Exit codes matter in CI/CD pipelines, build scripts, and shell scripts that check \`$?\` or \`%ERRORLEVEL%\`.

---

## Async Entry Points

If your program needs async/await from the start, you can make the entry point async:

\`\`\`csharp
// Top-level async entry point
await RunAsync();

async Task RunAsync()
{
    Console.WriteLine("Starting async work...");
    await Task.Delay(100);
    Console.WriteLine("Done.");
}
\`\`\`

In the traditional pattern, the signature becomes \`static async Task Main(string[] args)\`.

---

## What Comes Next

The next lesson covers how to design user interaction in the terminal — menu loops, prompts, input validation, and making CLI programs pleasant to use.
`,
};
