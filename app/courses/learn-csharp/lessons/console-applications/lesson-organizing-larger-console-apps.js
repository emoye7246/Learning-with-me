export const lessonOrganizingLargerConsoleApps = {
  id: "organizing-larger-console-apps-cs",
  title: "Organizing Larger Console Apps",
  hasChallenge: false,
  article: `
## Organizing Larger Console Apps

When a console application grows beyond a few dozen lines, you need structure. Before reaching for classes and OOP, there's a simpler model: separating concerns using static helper methods and multiple files within the same project.

---

## The Problem with Everything in Program.cs

A common beginner pattern: everything in one file.

\`\`\`csharp
// Program.cs — 400 lines, everything tangled together
Console.WriteLine("Welcome to Todo App");
var tasks = new List<string>();

while (true)
{
    // Menu logic
    // Input validation
    // Task management
    // File persistence
    // Display formatting
    // Error handling
    // ... all jumbled together
}
\`\`\`

This becomes hard to read, hard to change, and impossible to test. The solution is separation of concerns — grouping related logic together, away from the entry point.

---

## Static Helper Methods

The simplest form of separation: extract functionality into static methods, either in \`Program.cs\` or in separate files.

\`\`\`csharp
// Program.cs — thin entry point
var tasks = TaskStorage.Load("tasks.txt");
MenuRunner.Run(tasks);
TaskStorage.Save(tasks, "tasks.txt");
\`\`\`

\`\`\`csharp
// TaskStorage.cs
static class TaskStorage
{
    public static List<string> Load(string path)
    {
        if (!File.Exists(path)) return [];
        return [..File.ReadAllLines(path)];
    }

    public static void Save(List<string> tasks, string path)
    {
        File.WriteAllLines(path, tasks);
    }
}
\`\`\`

\`\`\`csharp
// MenuRunner.cs
static class MenuRunner
{
    public static void Run(List<string> tasks)
    {
        while (true)
        {
            DisplayMenu();
            string? choice = Console.ReadLine()?.Trim();
            if (choice == "0") break;
            HandleChoice(choice, tasks);
        }
    }

    static void DisplayMenu() { /* ... */ }
    static void HandleChoice(string? choice, List<string> tasks) { /* ... */ }
}
\`\`\`

---

## Multiple Files in the Same Project

All \`.cs\` files in a project are compiled together. You don't need to import or include them manually — just create a new file and it becomes part of the same compilation unit:

\`\`\`
TodoApp/
├── TodoApp.csproj
├── Program.cs          ← entry point, thin
├── MenuRunner.cs       ← menu loop and display
├── TaskStorage.cs      ← file read/write
├── InputHelper.cs      ← prompt and validation helpers
└── Display.cs          ← color output and formatting
\`\`\`

Each file has one focused responsibility. When you need to change how tasks are stored, you know exactly which file to open.

---

## Keeping Program.cs Thin

A thin \`Program.cs\` is easier to understand at a glance. It should read like a description of what the program does, not the implementation of how it does it:

\`\`\`csharp
// Program.cs — clear at a glance
if (!Config.Validate(args))
{
    Console.Error.WriteLine("Usage: todo <command>");
    return 1;
}

var store = new TaskStore("tasks.txt");
var app = new TodoApp(store);

return app.Run(args);
\`\`\`

If your \`Program.cs\` is growing beyond 50-80 lines, start extracting. Ask: "What is this block of code doing?" Then name that thing and move it.

---

## Naming Conventions

Consistent naming helps orient any reader (including future you):

- Files named after the class or static class they contain: \`TaskStorage.cs\`, \`MenuRunner.cs\`
- Static utility classes: noun phrases — \`TaskStorage\`, \`InputHelper\`, \`Display\`
- Methods: verb phrases — \`LoadTasks\`, \`PrintMenu\`, \`PromptForInt\`
- Avoid prefixes like \`MyHelper\`, \`Utilities\`, \`Misc\` — these signal that the class has no clear focus

---

## When to Introduce Classes

Static methods work well when your program is procedural — a sequence of steps that transform data. When you find yourself passing the same variables to multiple methods repeatedly, that's a signal that a class might help group them:

\`\`\`csharp
// Before: passing config everywhere
ProcessFiles(inputPath, outputPath, verbose, maxItems);
LogResults(inputPath, outputPath, verbose);
Cleanup(inputPath, outputPath);

// After: group related state into a class
var processor = new FileProcessor(inputPath, outputPath, verbose, maxItems);
processor.Run();
processor.LogResults();
processor.Cleanup();
\`\`\`

But don't rush to OOP. Many excellent console tools are mostly static methods.

---

## What Comes Next

The next lesson introduces verification — how to know your program actually works correctly before you ship it or add more features.
`,
};
