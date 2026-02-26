export const lessonHandlingMissingBrokenFiles = {
  id: "handling-missing-broken-files",
  title: "Handling Missing or Broken Files",

  article: `
## Handling Missing or Broken Files

Real files are not always clean and available.

Sometimes files are missing.
Sometimes they are unreadable.
Sometimes data inside them is malformed.

Reliable software plans for these cases.

---

## Mental Model

Treat file operations as failure-prone boundaries.

Inside your code, behavior can be controlled.

At the filesystem boundary, many things can go wrong.

Your job is to fail clearly, not silently.

---

## Example 1: Defensive Read Helper

\`\`\`python
from pathlib import Path

def read_text(path_str):
    path = Path(path_str)

    if not path.exists():
        print("File not found:", path)
        return None

    try:
        with path.open("r", encoding="utf-8") as file:
            return file.read()
    except PermissionError:
        print("Permission denied.")
    except UnicodeDecodeError:
        print("Could not decode as UTF-8.")

    return None
\`\`\`

---

## What just happened?

- You validated existence before reading.
- You caught specific exceptions with clear messages.
- You returned \`None\` as an explicit failure signal.

That gives downstream logic a clear contract.

---

## Example 2: try / except / else

\`\`\`python
try:
    with open("data.txt", "r", encoding="utf-8") as file:
        text = file.read()
except FileNotFoundError:
    print("Missing file.")
else:
    print("Read succeeded. Length:", len(text))
\`\`\`

---

## What just happened?

- \`except\` handles failure path.
- \`else\` runs only if no exception happened.

This keeps success behavior separate from error handling.

---

## Example 3: Stop on Invalid Input

\`\`\`python
rows = read_text("report.csv")
if rows is None:
    print("Stopping: input could not be read safely.")
else:
    print("Continue processing...")
\`\`\`

---

## What just happened?

- You checked the helper return value before continuing.
- You avoided cascading errors from invalid input.

Good error handling prevents secondary bugs.

---

## Common Mistakes

- Catching broad \`Exception\` and hiding root causes.
- Printing vague errors like "Something went wrong."
- Continuing processing after a failed read.
- Not testing failure paths intentionally.

---

## Try this

1. Handle a missing file with a clear message.
2. Handle permission errors separately from missing files.
3. Return an empty list or \`None\` from a failed read helper.
4. Add one malformed-data guard in a CSV loop.

Save.
Run the file.
Observe the output.

---

## What you just learned

- Why filesystem code needs defensive design
- How to catch specific exceptions cleanly
- How \`try/except/else\` improves control flow clarity
- How to stop safely when required input is invalid

---

## What comes next

Next lesson: **Automating Repetitive Tasks**
`,
};
