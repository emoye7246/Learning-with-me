export const lessonVisualStudioCommunity = {
  id: "visual-studio-community",
  title: "Visual Studio Community",
  hasChallenge: false,
  article: `
## Visual Studio Community

Visual Studio is Microsoft's full IDE for .NET development. The Community edition is free and provides the complete Visual Studio experience — including features that VS Code doesn't have.

---

## Visual Studio vs VS Code

These are two very different tools despite the similar names:

| | VS Code | Visual Studio |
|---|---|---|
| Type | Lightweight code editor with extensions | Full IDE |
| Size | ~100 MB | 3–20+ GB depending on workloads |
| Platform | Windows, macOS, Linux | Windows (and a limited macOS version) |
| C# support | Via C# Dev Kit extension | Built-in, first-class |
| Designer tools | None | WinForms/WPF designer, XAML preview |
| Profiler | Basic | Full CPU/memory/allocation profiler |
| Best for | Most projects, cross-platform dev | Windows app development, large enterprise solutions |

For this course, either tool works. VS Code is lighter and cross-platform. Visual Studio is more powerful for Windows-specific development.

---

## Installing Visual Studio Community

1. Go to **https://visualstudio.microsoft.com/vs/community/**
2. Click **Download Visual Studio Community** — this downloads the installer
3. Run \`VisualStudioSetup.exe\`
4. The installer will ask you to select **workloads** — these are bundles of tools for specific types of development

---

## Choosing Workloads

Select the workloads that match what you want to build. For this course, you need at minimum:

- **.NET desktop development** — includes console apps, WinForms, WPF
- **ASP.NET and web development** — needed if you're building web APIs

Optional workloads for later:
- **Mobile development with .NET** — for .NET MAUI (iOS/Android)
- **Game development with Unity** — for Unity projects

Each workload is several GB. Install only what you need.

---

## Key Visual Studio Features

**IntelliSense** in Visual Studio is arguably the best autocomplete experience in any IDE. It provides:
- Completion for types, methods, properties, and keywords
- Parameter hints as you type function calls
- Full documentation inline

**The Debugger** is exceptional. You can:
- Set breakpoints with a single click on the line number
- Step through code line by line (F10 steps over, F11 steps into)
- Inspect variable values by hovering over them
- View the full call stack at any point
- Set conditional breakpoints (only break if a condition is true)
- Use Edit and Continue (change code while debugging without stopping)

**The Profiler** (available in the full Visual Studio, not VS Code) lets you:
- See which methods consume the most CPU time
- Track memory allocations and find memory leaks
- Analyze async task performance

**The Solution Explorer** shows your entire solution with all projects, references, and files organized hierarchically.

---

## Project Templates in Visual Studio

When you create a new project (File → New → Project), Visual Studio offers a searchable template browser. Common templates:

- Console App
- Class Library
- ASP.NET Core Web API
- ASP.NET Core MVC
- .NET MAUI App
- xUnit Test Project

Each template creates the correct project file structure and initial code.

---

## Should You Use Visual Studio or VS Code?

For this course: **use whichever you prefer.** Both are free. Both have excellent C# support.

Recommendation:
- **Windows users**: Try Visual Studio Community first — the debugging and IntelliSense experience is slightly better out of the box
- **macOS/Linux users**: Use VS Code with C# Dev Kit — Visual Studio for Mac has been discontinued
- **If you want the lightest setup**: VS Code

Whatever you choose, the code you write is identical. The \`.csproj\` files and \`.cs\` files are the same. The \`dotnet\` CLI commands are the same. The choice of editor is a workflow preference, not a technical commitment.

---

## What Comes Next

The next lesson covers terminal basics — how to navigate the file system and run \`dotnet\` commands effectively from the command line.
`,
};
