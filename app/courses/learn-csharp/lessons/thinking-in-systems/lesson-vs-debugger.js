export const lessonVsDebugger = {
  id: "vs-debugger",
  title: "Using the Debugger",
  hasChallenge: false,
  article: `
## Using the Debugger

The debugger is the most powerful tool you have for understanding program behavior. It lets you pause execution at any line, inspect the current state of every variable, and step through code one line at a time. Learning to use it early will save you enormous amounts of time.

---

## Why the Debugger Over Console.WriteLine

Many beginners debug by adding \`Console.WriteLine\` statements to print values. This works but is slow: you add the line, rebuild, run, read output, remove the line, repeat.

The debugger is faster and more powerful:
- You can inspect any variable without modifying the code
- You can step into methods you didn't think to log
- You can change variable values mid-execution to test hypotheses
- You see the entire call stack, not just one level

Use \`Console.WriteLine\` for quick sanity checks. Use the debugger for any non-trivial investigation.

---

## Setting Breakpoints in VS Code

1. Open your C# file
2. Click in the **gutter** (the space to the left of line numbers) next to any line — a red dot appears
3. Press \`F5\` to start debugging (or \`Run > Start Debugging\`)

Execution pauses when it reaches your breakpoint. The current line is highlighted.

---

## Setting Breakpoints in Visual Studio

The same: click in the left gutter to set a breakpoint, \`F5\` to start debugging.

---

## Debugger Controls

Once paused at a breakpoint:

| Action | VS Code | Visual Studio |
|---|---|---|
| Continue (run to next breakpoint) | F5 | F5 |
| Step Over (execute current line, stay at same level) | F10 | F10 |
| Step Into (enter a method call) | F11 | F11 |
| Step Out (run until current method returns) | Shift+F11 | Shift+F11 |
| Stop debugging | Shift+F5 | Shift+F5 |

**Step Over** is what you'll use most. It moves to the next line without entering method bodies.

**Step Into** is for when you want to follow execution into a method you called.

---

## Inspecting Variables

While paused, you can inspect the current state in several ways:

**Hover:** Hover over any variable name in the editor. A tooltip shows its current value.

**Variables pane:** In VS Code, the debug sidebar shows all local variables and their values. In Visual Studio, use the Locals window (Debug → Windows → Locals).

**Watch window:** Add specific expressions to watch. In VS Code, click the + in the Watch pane. In Visual Studio, Debug → Windows → Watch → Watch 1.

**Immediate/Debug Console:** Type an expression and see its value immediately:
\`\`\`
> items.Count
5
> items[0]
"hello"
\`\`\`

---

## Conditional Breakpoints

Sometimes you only want to pause when a specific condition is true. Right-click a breakpoint and set a condition:

\`\`\`
i == 42
\`\`\`

Execution only pauses at that breakpoint when \`i\` equals 42 — extremely useful when a bug only manifests on a specific iteration of a loop.

---

## The Call Stack

The call stack shows which methods called which, in order. When paused:

- Visual Studio: Debug → Windows → Call Stack
- VS Code: The Call Stack section in the debug sidebar

Reading the call stack tells you how execution got to the current line — essential for understanding exceptions that occur deep in called code.

---

## Edit and Continue

Visual Studio (not VS Code) supports Edit and Continue — you can modify code while paused in the debugger and continue without restarting. This is a significant productivity feature for iterative debugging.

---

## Debugging xUnit Tests

Both VS Code (with C# Dev Kit) and Visual Studio let you set breakpoints in test methods and debug them. Right-click a test in the Test Explorer and choose "Debug Test."

This is how you investigate a test that's failing for reasons that aren't obvious from the assertion message.

---

## What Comes Next

The next lesson covers types of errors — compile-time errors, runtime exceptions, and logic errors — and how to identify which type you're dealing with.
`,
};
