export const lessonVscodeCsharpDevKit = {
  id: "vscode-csharp-dev-kit",
  title: "VS Code & C# Dev Kit",
  hasChallenge: false,
  article: `
## VS Code & C# Dev Kit

VS Code is a free, lightweight code editor from Microsoft. With the right extensions, it becomes a capable C# development environment suitable for everything in this course. This lesson walks through setting it up correctly.

---

## Why VS Code?

VS Code is a strong choice for C# development because:

- It's **free** and open source
- It runs on **Windows, macOS, and Linux**
- Microsoft actively maintains the **C# Dev Kit extension**, which brings IDE-quality features
- It's lightweight compared to Visual Studio
- Many professional developers use it for .NET development

The alternative — Visual Studio Community — is also free and is covered in the next lesson. Both are legitimate choices. VS Code is recommended if you're on macOS or Linux, or if you prefer a lighter editor.

---

## Installing VS Code

1. Go to **https://code.visualstudio.com**
2. Download the installer for your platform
3. Run the installer — accept the defaults, and optionally check "Add to PATH" on Windows

---

## Installing the C# Dev Kit

The **C# Dev Kit** is Microsoft's official extension for C# development in VS Code. It's not just syntax highlighting — it includes:

- IntelliSense (autocomplete with full type information)
- Go to definition and find references
- Inline error highlighting (red underlines for compile errors)
- The Solution Explorer sidebar
- Test runner integration
- Refactoring tools (rename, extract method, etc.)
- Integrated debugger

To install:
1. Open VS Code
2. Press \`Ctrl+Shift+X\` (Windows/Linux) or \`Cmd+Shift+X\` (macOS) to open the Extensions panel
3. Search for **C# Dev Kit**
4. Click **Install** on the Microsoft-published extension

The C# Dev Kit will automatically install the base **C#** extension as a dependency.

---

## Opening a C# Project

VS Code works best when you open a **folder** containing a \`.csproj\` file (or a \`.sln\` solution file), not just an individual file.

\`\`\`bash
# Create a new console project
dotnet new console -n MyApp
cd MyApp

# Open the folder in VS Code
code .
\`\`\`

When you open a C# project folder, VS Code (with C# Dev Kit) will:
- Detect the project file
- Restore NuGet packages if needed
- Show the project in the Solution Explorer
- Start the language server (OmniSharp or Roslyn — the Dev Kit uses Roslyn)

---

## Key Shortcuts You'll Use Constantly

| Action | Windows/Linux | macOS |
|---|---|---|
| Open terminal | Ctrl+\` | Ctrl+\` |
| Command palette | Ctrl+Shift+P | Cmd+Shift+P |
| Go to definition | F12 | F12 |
| Peek definition | Alt+F12 | Option+F12 |
| Find all references | Shift+F12 | Shift+F12 |
| Rename symbol | F2 | F2 |
| Format document | Shift+Alt+F | Shift+Option+F |
| Toggle line comment | Ctrl+/ | Cmd+/ |
| Quick fix (lightbulb) | Ctrl+. | Cmd+. |

---

## Configuring the Integrated Terminal

VS Code has a built-in terminal. You'll use it constantly to run \`dotnet build\`, \`dotnet run\`, and \`dotnet test\`.

Open it with the integrated terminal shortcut, usually \`Ctrl+backtick\`. On Windows, you can configure it to use PowerShell or Command Prompt. On macOS/Linux, it defaults to your system shell.

---

## The .NET Solution View

With C# Dev Kit installed, you'll see a **Solution Explorer** in the sidebar (the icon looks like a file tree). This shows your solution and projects in a structured way — more useful than the raw file explorer for larger C# solutions.

---

## What Comes Next

The next lesson covers Visual Studio Community — the full IDE from Microsoft, which has a few capabilities that VS Code doesn't. Even if you use VS Code primarily, it's worth knowing what Visual Studio offers.
`,
};
