export const lessonJavaDebugger = {
  id: "java-debugger",
  title: "Using the Java Debugger",
  hasChallenge: false,
  article: `
## Using the Java Debugger

The IntelliJ debugger lets you pause your program at any line and inspect the state of every variable.

It turns your mental tracing exercise into a real-time, visual experience.

---

## Setting a Breakpoint

A **breakpoint** tells the debugger: "Pause execution here."

To set a breakpoint in IntelliJ:
- Click in the **gutter** (the narrow column to the left of your code) next to the line you want to pause at
- A red dot appears — that's the breakpoint

To remove a breakpoint: click the red dot again.

---

## Running in Debug Mode

Instead of clicking the green play button, click the **green bug icon** next to it (or press **Shift+F9** on Windows/Linux, **Ctrl+D** on macOS).

The program runs normally until it hits your breakpoint, then pauses.

---

## The Debug Panel

When the program pauses, you'll see the Debug panel at the bottom of IntelliJ:

**Variables panel** — shows all current variables and their values. You can expand objects to see their fields.

**Frames panel** — shows the call stack: which method you're in, and which method called it.

---

## Stepping Through Code

Once paused at a breakpoint, you control execution step by step:

| Action | Shortcut (Win/Linux) | Shortcut (Mac) | What it does |
|---|---|---|---|
| Step Over | F8 | F8 | Run the current line, move to next |
| Step Into | F7 | F7 | If current line calls a method, go into it |
| Step Out | Shift+F8 | Shift+F8 | Finish current method, return to caller |
| Resume | F9 | F9 | Run until next breakpoint |

**Step Over** is what you'll use most — it executes one line at a time.

---

## Watching Variables

In the Variables panel, you can see every variable in scope and its current value.

You can also right-click a variable in your code → **Add to Watches** to pin it to the Watch panel and track it across multiple step-overs.

Or, in the **Evaluate Expression** panel (Alt+F8), you can type any Java expression and see its current value.

---

## A Debugging Workflow

1. Notice your program produces wrong output
2. Form a hypothesis: "I think X variable has the wrong value after line Y"
3. Set a breakpoint at line Y
4. Run in debug mode
5. Check the Variables panel — is X what you expected?
6. If yes, the bug is later — move the breakpoint forward
7. If no, the bug is at or before this line — step backward conceptually
8. Keep narrowing until you find the exact line that produces wrong state

---

## Conditional Breakpoints

You can make a breakpoint only pause when a condition is true:

1. Right-click the red breakpoint dot
2. Enter a condition: e.g., \`i == 5\` or \`name.equals("Alice")\`
3. The program only pauses when the condition is met

This is invaluable in loops — you don't have to step through 1000 iterations to reach the one that's wrong.

---

## What You Learned

- Set breakpoints by clicking the gutter next to a line
- Run in debug mode with the bug icon (not the play button)
- Step Over (F8) executes one line at a time
- The Variables panel shows all current variable values
- Conditional breakpoints pause only when a condition is met
- Debugging is hypothesis-driven: form a theory, test it, narrow down

## What Comes Next

The debugger helps you find errors. But first you need to understand the types of errors you'll encounter.

Continue to:
**3.5 Error Types**
`,
};
