export const lessonErrorHandlingCliPrograms = {
  id: "error-handling-cli-programs",
  title: "Error Handling in CLI Programs",

  article: `
## Error Handling in CLI Programs

## Concept Introduction

CLI programs run in unpredictable environments.

Users enter unexpected values.
Files may be missing.
Arguments may be invalid.

Error handling is how your tool stays reliable.

Without it, small user mistakes become crashes.

---

## Why This Matters in Real Software

Crashes break trust.

Professional tools fail gracefully:

- explain what went wrong
- preserve useful context
- guide the user to recovery

Reliability is a product feature.

Not an optional extra.

---

## Example

\`\`\`python

def ask_quantity():
    raw = input("Quantity: ").strip()

    try:
        qty = int(raw)
    except ValueError:
        print("Please enter a whole number.")
        return None

    if qty <= 0:
        print("Quantity must be greater than zero.")
        return None

    return qty


def main():
    quantity = ask_quantity()
    if quantity is None:
        print("Request cancelled due to invalid input.")
        return

    print("Order accepted:", quantity)


if __name__ == "__main__":
    main()
\`\`\`

This program rejects invalid input without crashing.

That is the core goal:

bad input should not destroy program flow.

---

## Common Mistakes in CLI Programs

- Catching errors without helpful user messages.
- Using broad \`except\` blocks that hide root causes.
- Validating too late after side effects occur.
- Continuing program flow after invalid state.

---

## Design Thinking

For each input path, define:

- expected valid format
- invalid cases
- exact recovery message
- whether to retry, skip, or exit

Reliability is mostly design, not syntax.

Think in boundaries:

validate at the boundary where input enters the system.

---

## Implementation Checklist

- Validate external input at boundaries.
- Handle predictable exceptions (for example, \`ValueError\`).
- Print clear correction guidance.
- Stop or retry intentionally after errors.
- Keep error handling local to risky operations.

If recovery is possible, guide the user.

If recovery is not possible, fail clearly and safely.

---

## What This Enables

You can build CLI tools that remain stable under real user behavior.

That is required for software people trust.
`,
};
