export const lessonFirstConsoleProject = {
  id: "first-console-project",
  title: "Your First Console Project",
  hasChallenge: false,
  article: `
## Your First Console Project

This lesson creates a real C# console project from scratch and explains every part of it. Don't just read — follow along. Type the commands. Open the files. Run the program.

---

## Creating the Project

Open a terminal and run:

\`\`\`bash
dotnet new console -n FirstProject
cd FirstProject
\`\`\`

This creates a new folder called \`FirstProject\` with two files:
- \`FirstProject.csproj\` — the project file
- \`Program.cs\` — your C# source code

---

## The Project File: FirstProject.csproj

Open \`FirstProject.csproj\` in your editor:

\`\`\`xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
\`\`\`

Every line means something:

- **\`Sdk="Microsoft.NET.Sdk"\`** — tells MSBuild to use the standard .NET SDK build rules
- **\`<OutputType>Exe</OutputType>\`** — this produces an executable, not a library
- **\`<TargetFramework>net8.0</TargetFramework>\`** — targets .NET 8
- **\`<Nullable>enable</Nullable>\`** — enables nullable reference type analysis (a safety feature)
- **\`<ImplicitUsings>enable</ImplicitUsings>\`** — automatically imports common namespaces so you don't have to write \`using System;\` everywhere

---

## The Source File: Program.cs

Open \`Program.cs\`:

\`\`\`csharp
Console.WriteLine("Hello, World!");
\`\`\`

This is a **top-level statement** program — a feature introduced in C# 9. The boilerplate \`class Program { static void Main(string[] args) { } }\` wrapper is implicit. You just write the code you want to run at the top level of the file.

---

## Running the Program

\`\`\`bash
dotnet run
\`\`\`

Output:
\`\`\`
Hello, World!
\`\`\`

That's it. The \`dotnet run\` command:
1. Compiles your code to IL
2. Starts the .NET runtime
3. Executes your program

---

## Modifying the Program

Let's write something more interesting. Replace the contents of \`Program.cs\` with:

\`\`\`csharp
Console.Write("What is your name? ");
string name = Console.ReadLine() ?? "stranger";
Console.WriteLine($"Hello, {name}! Welcome to C#.");
\`\`\`

Run it again:

\`\`\`bash
dotnet run
\`\`\`

The program now asks for input and responds. A few things to notice:

- **\`Console.Write\`** prints without a newline; **\`Console.WriteLine\`** adds a newline
- **\`Console.ReadLine()\`** reads a line of input from the user
- **\`?? "stranger"\`** is the null-coalescing operator — it uses "stranger" if \`ReadLine()\` returns null (which it can on some streams)
- **\`$"Hello, {name}!"\`** is a string interpolation expression — the \`{name}\` is replaced with the value of the \`name\` variable

---

## The Build Output

After running, look at the directory structure:

\`\`\`
FirstProject/
├── bin/
│   └── Debug/
│       └── net8.0/
│           ├── FirstProject.dll
│           ├── FirstProject.exe  (Windows only)
│           └── FirstProject.runtimeconfig.json
├── obj/
│   └── (intermediate build files)
├── FirstProject.csproj
└── Program.cs
\`\`\`

- **\`bin/\`** — compiled output (what you run)
- **\`obj/\`** — intermediate files used during compilation (don't edit these)
- The \`.dll\` file contains your IL code — the runtime executes this

---

## Running Without dotnet run

You can also run the compiled output directly:

\`\`\`bash
dotnet bin/Debug/net8.0/FirstProject.dll
\`\`\`

Or on Windows, you can run the \`.exe\` directly. But \`dotnet run\` is simpler during development.

---

## What Comes Next

The next lesson explains \`.csproj\` and \`.sln\` files in depth — how they're structured, what every element means, and how solution files tie multiple projects together.
`,
};
