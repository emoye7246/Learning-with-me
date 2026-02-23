export const lessonInputVsCommandLineArguments = {
  id: "input-vs-command-line-arguments",
  title: "input() vs Command-Line Arguments",

  article: `
## input() vs Command-Line Arguments

## Concept Introduction

Console apps usually get data in two ways:

- Interactive input with \`input()\`
- Startup arguments from the command line

Both patterns are valid.

The difference is timing and intent.

- \`input()\`: ask during runtime interaction
- command-line args: provide upfront at launch

---

## Why This Matters in Real Software

Interactive input is great for guided, step-by-step tools.

Arguments are better for automation and repeatability.

If a tool can run both ways, it becomes more flexible:

- humans can use it directly
- scripts can call it automatically

---

## Example

\`\`\`python
import sys


def greet():
    if len(sys.argv) > 1:
        name = sys.argv[1]
    else:
        name = input("Name: ")

    print(f"Hello, {name}!")


if __name__ == "__main__":
    greet()
\`\`\`

Run either style:

- \`python app.py\` then type your name
- \`python app.py Maya\`

The tool supports both interaction models without duplicating business logic.

---

## Common Mistakes in CLI Programs

- Assuming \`sys.argv[1]\` always exists.
- Using only \`input()\` when automation is needed.
- Accepting arguments without validating meaning.
- Mixing argument parsing and business logic in one function.

---

## Design Thinking

Before writing code, decide interface strategy:

- Is this tool primarily human-driven or script-driven?
- Does the value change each run?
- Should this step be prompt-based or passed at startup?

Then define fallback behavior clearly.

Example:

\"If argument is missing, prompt user.\"

That single rule removes ambiguity.

---

## Implementation Checklist

- Import \`sys\` and inspect \`sys.argv\` safely.
- Support a fallback prompt when arguments are missing.
- Validate argument content before using it.
- Keep parsing code separate from processing code.
- Document one example command in comments or docs.

Keep parsing predictable.

Keep runtime logic separate.

---

## What This Enables

You can build console tools that work both interactively and in automated workflows.

That makes your tools reusable in real engineering pipelines.
`,
};
