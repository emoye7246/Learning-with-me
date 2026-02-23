export const lessonOrganizingLargerConsoleApps = {
  id: "organizing-larger-console-apps",
  title: "Organizing Larger Console Apps",

  article: `
## Organizing Larger Console Apps

## Concept Introduction

As features grow, one file becomes hard to manage.

Organization is not cosmetic.

It directly affects debugging speed, change safety, and team readability.

If structure is weak, every change feels risky.

---

## Why This Matters in Real Software

Larger CLI tools evolve over time.

If structure is weak, every change risks regression.

A small module layout keeps responsibilities separated and predictable.

Good structure reduces accidental complexity.

---

## Example

\`\`\`text
project/
  main.py
  commands.py
  storage.py
\`\`\`

\`main.py\`
\`\`\`python
from commands import run_menu


if __name__ == "__main__":
    run_menu()
\`\`\`

\`storage.py\`
\`\`\`python
def load_tasks():
    return []


def save_task(tasks, title):
    tasks.append(title)
\`\`\`

\`commands.py\`
\`\`\`python
from storage import load_tasks, save_task


def run_menu():
    tasks = load_tasks()
    title = input("Task: ").strip()
    if title:
        save_task(tasks, title)
        print("Saved")
\`\`\`

Each file owns a focused responsibility.

When responsibilities are separated, edits become safer.

---

## Common Mistakes in CLI Programs

- Keeping all features in one growing file.
- Creating modules without clear boundaries.
- Circular imports from poor dependency direction.
- Mixing file I/O, logic, and UI messaging everywhere.

---

## Design Thinking

Split by responsibility:

- entry point and app startup
- user interaction and commands
- data access/persistence
- pure logic helpers

Design module boundaries before adding new features.

A practical rule:

if a function does two different jobs, split it.

---

## Implementation Checklist

- Define 2-4 clear modules by responsibility.
- Keep imports directional (entry point depends on lower layers).
- Keep business logic testable outside user prompts.
- Keep persistence logic isolated from menu rendering.
- Add one simple README note describing file responsibilities.

Refactor in small passes.

Preserve behavior while improving structure.

---

## What This Enables

You can grow a CLI project without losing clarity.

That is how small tools become maintainable software.
`,
};
