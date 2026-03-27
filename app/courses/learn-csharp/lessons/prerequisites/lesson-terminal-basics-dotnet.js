export const lessonTerminalBasicsDotnet = {
  id: "terminal-basics-dotnet",
  title: "Terminal Basics for .NET",
  hasChallenge: false,
  article: `
## Terminal Basics for .NET

The terminal (command line) is where you'll spend a significant amount of time as a C# developer. Even if you use a GUI IDE, knowing how to use the terminal is essential. This lesson covers the commands you'll use every day.

---

## Why the Terminal Matters

The \`dotnet\` CLI is your primary tool for:
- Creating new projects
- Building projects
- Running programs
- Running tests
- Adding NuGet packages
- Publishing applications

While IDEs have GUI buttons for some of these, the terminal is faster, more explicit, and works everywhere. Learning the terminal first means you understand what the IDE buttons are actually doing.

---

## Essential Terminal Commands

**Navigating directories:**

\`\`\`bash
# Print current directory
pwd                    # macOS/Linux
cd                     # Windows (no arguments shows current path)

# List files
ls                     # macOS/Linux
dir                    # Windows

# Change directory
cd Projects            # move into Projects folder
cd ..                  # move up one level
cd ~/Projects          # move to Projects in home directory (macOS/Linux)
cd %USERPROFILE%\\Projects  # move to Projects in home directory (Windows)
\`\`\`

**Creating and managing files/folders:**

\`\`\`bash
# Create a directory
mkdir MyProject

# Remove a file
rm file.txt            # macOS/Linux
del file.txt           # Windows

# Remove a directory
rm -rf MyFolder        # macOS/Linux (careful!)
rmdir /s /q MyFolder   # Windows
\`\`\`

---

## Core dotnet CLI Commands

These are the commands you'll use throughout this course:

\`\`\`bash
# Create a new console application
dotnet new console -n MyApp

# Create a new class library
dotnet new classlib -n MyLibrary

# Create a new xUnit test project
dotnet new xunit -n MyApp.Tests

# Build the project (compiles to IL)
dotnet build

# Run the project (builds if needed, then runs)
dotnet run

# Run with arguments
dotnet run -- arg1 arg2

# Run tests
dotnet test

# Add a NuGet package
dotnet add package Newtonsoft.Json

# Remove a NuGet package
dotnet remove package Newtonsoft.Json

# Restore NuGet packages (download dependencies)
dotnet restore

# List available templates
dotnet new list

# Publish the application
dotnet publish -c Release
\`\`\`

---

## Project Creation Walkthrough

Here's what a typical new project setup looks like:

\`\`\`bash
# Navigate to your projects folder
cd ~/Projects

# Create a new console app
dotnet new console -n HelloWorld

# Move into the project folder
cd HelloWorld

# See what was created
ls
# Output: HelloWorld.csproj  Program.cs

# Run it
dotnet run
# Output: Hello, World!
\`\`\`

---

## Understanding Output Directories

When you run \`dotnet build\`, the compiled output goes to:
- \`bin/Debug/net8.0/\` — debug build (default)
- \`bin/Release/net8.0/\` — release build (when you specify \`-c Release\`)

You generally don't need to touch these directories. \`dotnet run\` handles building and running automatically.

---

## Using the Terminal in VS Code

VS Code has a built-in terminal. Open it with the integrated terminal shortcut, usually \`Ctrl+backtick\`. It opens in the directory of the current workspace folder, which is usually what you want.

You can run all \`dotnet\` commands from here without switching to a separate terminal window.

---

## Tab Completion

Most terminals support tab completion for file paths and commands. Start typing a path and press Tab to complete it. This dramatically reduces typing errors.

In PowerShell on Windows, you may need to enable tab completion for the \`dotnet\` CLI:

\`\`\`powershell
dotnet complete --shell powershell | Set-Content $PROFILE
\`\`\`

---

## What Comes Next

The next lesson creates your first C# console project from scratch — not a template tour, but a real walkthrough of every file, every command, and what each part does.
`,
};
