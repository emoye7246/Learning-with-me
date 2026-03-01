export const projectFullFeaturedCli = {
  id: "capstone-full-featured-cli",
  title: "Capstone: Full-Featured CLI Tool",

  article: `
## Overview

Build a complete, polished command-line application that solves a real problem.

This is not a mini-project. This is the kind of tool you'd actually publish, put on GitHub, and use in your daily workflow. It needs multiple commands, persistent data storage, proper error handling, and a clean user experience.

---

## What Makes This Different

Mini-projects demonstrate a concept. Capstone projects demonstrate readiness.

Your CLI tool must feel finished — not like an exercise. Someone else should be able to clone it, install it, and use it without reading your code.

---

## Project Options

Choose one (or propose your own with similar scope):

- **Personal finance tracker** — log income/expenses by category, view summaries, export reports
- **Task manager with priorities** — add/complete/list tasks, filter by tag or priority, persist between sessions
- **Developer journal** — log daily notes by date, search by keyword, export to Markdown
- **Recipe manager** — store recipes, search by ingredient, scale servings
- **Habit tracker** — log daily habits, show streaks, display weekly summaries

---

## Functional Requirements

Your tool must:

- [ ] Have at least 3 distinct commands (e.g., \`add\`, \`list\`, \`delete\`)
- [ ] Persist data between sessions (JSON file or SQLite)
- [ ] Validate all user input with clear error messages
- [ ] Display output in a readable, well-formatted way
- [ ] Include \`--help\` text for every command
- [ ] Handle missing or corrupt data files gracefully
- [ ] Follow a clean project structure (not a single 300-line file)

---

## Non-Functional Requirements

- [ ] Runs from the terminal with a single entry command
- [ ] Has a \`requirements.txt\` and a \`README.md\` with installation and usage instructions
- [ ] No crashes on invalid input — every error is caught and explained

---

## Suggested Project Structure

\`\`\`text
my-tool/
  main.py            ← entry point
  commands/
    add.py
    list.py
    delete.py
  storage.py         ← all data read/write logic
  models.py          ← data structures
  requirements.txt
  README.md
\`\`\`

---

## Implementation Milestones

1. Define your data model — what does one record look like?
2. Implement storage: load from and save to a JSON file.
3. Build the first command end-to-end: input → validate → store → confirm.
4. Build the list/display command with formatting.
5. Add remaining commands.
6. Add input validation and error handling to every command.
7. Write the README with clear usage instructions.
8. Test every command with valid and invalid input.

---

## Testing Checklist

- [ ] Run the tool fresh (no data file) — it should initialize cleanly
- [ ] Add several records and confirm they appear in the list
- [ ] Try invalid inputs — the tool should explain what went wrong
- [ ] Delete a record and confirm it's removed
- [ ] Close the terminal and reopen — data should persist
- [ ] Run with \`--help\` on each command and confirm it's informative
- [ ] Try to corrupt the data file manually — the tool should recover gracefully

---

## Optional Extensions

- [ ] Add an export command (CSV or Markdown)
- [ ] Add filtering or search across records
- [ ] Add color and formatting with the \`rich\` library
- [ ] Add a config file for user preferences (default file path, display options)
- [ ] Package it properly so it can be installed with \`pip install .\`

---

## Submission Requirements

Entry file: \`main.py\`

Run with:

\`\`\`bash
python main.py --help
python main.py add "Buy groceries" --priority high
python main.py list
\`\`\`

Repository must include \`requirements.txt\` and \`README.md\`.

---

## What This Project Proves

You can design and build a complete, usable software tool — not just a script that works once. You understand project structure, data persistence, error handling, and user experience in the terminal.
`,

  support: {
    intro: `
Use this support in order.

Start with Level 1 nudges.
Move to Level 2 hints if still stuck.
Use the blueprint to unblock your approach.
    `.trim(),

    level1Nudges: [
      "What is the minimum data structure for one record in your tool? Write it out on paper first.",
      "Where will data live between sessions — a JSON file? SQLite? How will you load it at startup?",
      "How will you handle the case where the data file doesn't exist yet?",
      "What should happen when a user runs a command with missing or invalid arguments?",
      "How will you separate the storage logic from the command logic?",
      "What does the --help output for your main command and each subcommand need to say?",
    ],

    level2Hints: [
      "Start your data file as a JSON array of dicts. Load with json.load(), save with json.dump(indent=2).",
      "Wrap your load function in a try/except FileNotFoundError — return an empty list if the file doesn't exist yet.",
      "Use click or typer to define commands as decorated functions. Each command is its own function.",
      "Validate inputs at the top of each command function before touching storage.",
      "Keep all read/write logic in a single storage.py module. Commands import from it.",
      "Use rich's Table class to display records in a clean, aligned format.",
    ],

    blueprint: [
      "Define your data model as a dict or dataclass. Decide what fields every record needs.",
      "Create storage.py with load() and save() functions. load() handles missing file. save() writes with indent=2.",
      "Create main.py with your CLI app (click or typer). Add a first command that calls storage.load().",
      "Implement the add command: validate input, append to list, call save(), confirm to user.",
      "Implement the list command: load data, display with rich Table or formatted print.",
      "Implement the delete command: find record by ID or index, remove it, save, confirm.",
      "Add validation to every command. Catch and explain every failure.",
      "Write README.md: what the tool does, how to install, how to use each command.",
    ],

    debuggingGuide: [
      {
        problem: "Data is not persisting between runs.",
        hint: "Confirm save() is actually being called after every mutation. Add a print statement inside save() temporarily to verify it runs.",
      },
      {
        problem: "The tool crashes on the first run with FileNotFoundError.",
        hint: "Your load() function needs to catch FileNotFoundError and return an empty list. Wrap json.load() in a try/except.",
      },
      {
        problem: "Commands work individually but don't share state.",
        hint: "All commands should call the same load() and save() functions from storage.py. Don't define separate data variables inside each command.",
      },
      {
        problem: "Delete command removes the wrong item.",
        hint: "If you're deleting by index, make sure the displayed index matches the list index. Consider using a generated unique ID instead.",
      },
    ],

    revealSolutionWarning: `
This capstone has no example solution.

That's intentional. A capstone proves you can build something without a model to copy.

Use the blueprint and hints above. If you're stuck, revisit the relevant course lessons.
    `.trim(),
  },
};
