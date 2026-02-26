export const projectMultiFileConsoleApp = {
  id: "project-multi-file-console-app",
  title: "Project: Multi-file Console App",

  article: `
## Overview

Build a console application that is intentionally split into multiple files.

Goal: prove you can structure a growing project, not just make it work once.

This project is about architecture discipline.

You are practicing how real software teams keep projects understandable as features expand.

---

## Why This Project Matters

Many beginners can build a working script.

Fewer beginners can grow that script safely.

This project trains the second skill:

- clean boundaries
- controlled dependency flow
- easier feature growth

If you can do this well, you are no longer just writing code.

You are designing software.

---

## Functional Requirements

Your app must:

- [ ] Have at least 4 Python files with clear roles
- [ ] Use imports with clean dependency direction
- [ ] Keep logic separate from terminal input/output
- [ ] Persist data to a file
- [ ] Handle invalid input safely

---

## Suggested Project Ideas

Pick one:

- task manager
- expense tracker
- note organizer

Use the same architecture regardless of topic.

---

## Suggested File Layout

\`\`\`text
app/
  main.py
  ui.py
  service.py
  storage.py
  validators.py
\`\`\`

- \`main.py\`: entry point
- \`ui.py\`: prompts and display text
- \`service.py\`: business rules
- \`storage.py\`: file read/write
- \`validators.py\`: input validation helpers

---

## Build Strategy (Recommended)

Do not implement all features at once.

Build one vertical slice first:

1. prompt user
2. validate input
3. apply business logic
4. save data
5. show output

Once one path works, extend carefully.

---

## Milestones

1. Create folders/files and wire imports.
2. Build one core command end-to-end.
3. Add save/load persistence.
4. Add input validation and error messages.
5. Add one extra feature without breaking structure.

---

## Architecture Self-Check

Before finishing, confirm:

- Can \`service.py\` run without terminal prompts?
- Can \`storage.py\` be replaced without rewriting business logic?
- Are imports directional, not circular?
- Does \`main.py\` mainly orchestrate?

If yes, your structure is working.

---

## Testing Checklist

- [ ] App starts from \`main.py\` only
- [ ] Importing modules does not execute the app
- [ ] Invalid input does not crash the program
- [ ] Data is saved and loaded correctly
- [ ] New feature required only focused edits
`,

  support: {
    intro: `
Treat this as a software-design exercise first and a coding exercise second.
Map boundaries before writing many lines.
    `.trim(),

    level1Nudges: [
      "Which file should own user prompts versus business rules?",
      "Can your service layer run without terminal input?",
      "Do any modules import upward instead of downward?",
      "Where should data validation happen for consistency?",
      "What one feature can you add to prove your structure scales?",
    ],

    level2Hints: [
      "Start from a single feature path: UI -> service -> storage.",
      "Put all app startup in main.py under if __name__ == '__main__'.",
      "Keep validators pure: return bool/result, avoid print/input inside them.",
      "Use one storage interface (load/save) so data backend can change later.",
      "If two modules depend on each other, extract shared logic into a third module.",
    ],

    blueprint: [
      "Define module responsibilities before implementation.",
      "Implement one end-to-end command flow first.",
      "Separate validation and persistence cleanly.",
      "Add robust error handling for input and file issues.",
      "Add one new feature and check that changes stay localized.",
    ],

    debuggingGuide: [
      {
        problem: "Circular import error appears.",
        hint: "Check dependency direction and move shared logic to a neutral module.",
      },
      {
        problem: "App runs during import.",
        hint: "Move startup code under if __name__ == '__main__'.",
      },
      {
        problem: "Validation logic is duplicated.",
        hint: "Consolidate shared checks into validators.py and reuse them.",
      },
    ],
  },
};
