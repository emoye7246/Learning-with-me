export const lessonHandlingMissingBrokenFiles = {
  id: "handling-missing-broken-files",
  title: "Handling Missing or Broken Files",

  article: `
## Handling Missing or Broken Files

## Concept Introduction

Real inputs fail.

Files can be:

- missing
- unreadable due to permissions
- encoded unexpectedly
- malformed (wrong columns, unexpected lines)

Your script should fail gracefully, not crash unexpectedly.

---

## A Defensive Read Pattern

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
        print("Could not decode file as UTF-8.")
    return None
\`\`\`

---

## Why This Matters

Error handling is core behavior for filesystem tools.

If failure behavior is poor:

- users lose trust
- automation breaks silently
- bugs are harder to diagnose

---

## Practical Rules

1. Validate early (\`exists()\`, expected extension, required columns).
2. Catch specific exceptions before broad ones.
3. Return explicit fallback values (\`None\`, empty list, structured error).
4. Print or log actionable messages.
5. Stop downstream processing when input is invalid.

---

## try/except/else Pattern

\`\`\`python
try:
    with open("data.txt", "r", encoding="utf-8") as file:
        text = file.read()
except FileNotFoundError:
    print("Missing file.")
else:
    print("Read succeeded. Length:", len(text))
\`\`\`

Use \`else\` for logic that should run only when no exception occurred.

---

## Common Mistakes

- Catching \`Exception\` and hiding root causes.
- Printing vague errors like "something went wrong".
- Continuing with invalid data after a failed read.

---

## Practice Prompts

1. Intentionally open a missing file and handle it cleanly.
2. Build a helper that returns an empty list when a read fails.
3. Add clear messages for missing file vs permission denied.
4. Handle malformed CSV rows without crashing the whole run.

---

## Quick Checklist

- Identify expected failure paths.
- Add specific exception handling.
- Keep messages clear and actionable.
- Stop processing when required data is invalid.
- Test failure cases intentionally.
`,
};
