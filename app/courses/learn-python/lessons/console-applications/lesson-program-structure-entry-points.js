export const lessonProgramStructureEntryPoints = {
  id: "program-structure-entry-points",
  title: "Program Structure & Entry Points",

  article: `
## Program Structure & Entry Points

## Concept Introduction

A real CLI app needs a controlled starting point.

In Python, that is usually controlled with:

\`if __name__ == "__main__":\`

This line tells Python:

\"Run this block only when this file is executed directly.\"

That keeps execution intentional.

---

## Why This Matters in Real Software

Without an entry point, code may run unexpectedly during import.

Unexpected side effects make debugging and testing harder.

A clear entry point gives you separation:

- startup flow
- core logic
- reusable helpers

---

## Example

\`\`\`python

def load_tasks():
    return ["write", "test", "ship"]


def show_tasks(tasks):
    for index, task in enumerate(tasks, start=1):
        print(f"{index}. {task}")


def main():
    tasks = load_tasks()
    show_tasks(tasks)


if __name__ == "__main__":
    main()
\`\`\`

The flow is explicit and predictable:

entry point -> \`main()\` -> focused helper functions.

This is easier to extend than top-level scattered code.

---

## Common Mistakes in CLI Programs

- Putting all logic at top level with no \`main()\` function.
- Running side effects when a file is imported.
- Mixing I/O, validation, and core logic in one function.
- Using unclear function boundaries.

---

## Design Thinking

Design the runtime path before coding details:

1. What happens first?
2. Which function owns each step?
3. Which functions should be reusable?

If a future teammate reads your file, they should find:

- one entry point
- one primary flow function
- helper functions with clear names

---

## Implementation Checklist

- Create a \`main()\` function.
- Move executable flow into \`main()\`.
- Keep helper functions single-purpose.
- Use \`if __name__ == "__main__":\` as the only startup gate.
- Confirm module import does not execute runtime flow.

Check this explicitly:

importing the file should not launch the app.

---

## What This Enables

You can build CLI programs that are easier to test, extend, and maintain.

That is core to writing production-style Python.
`,
};
