export const lessonPathlibModernFilePaths = {
  id: "pathlib-modern-file-paths",
  title: "pathlib: Modern File Paths",

  article: `
## pathlib

\`pathlib\` is the modern way to work with files and folders in Python.

It replaces a lot of string-based path handling with clearer objects.

---

## Why It Matters

Real Python projects touch files constantly.

If your path handling is sloppy, your scripts become fragile across folders, operating systems, and user input.

---

## Example

\`\`\`python
from pathlib import Path

project_root = Path("reports")
csv_file = project_root / "march" / "sales.csv"

print(csv_file.exists())
print(csv_file.suffix)
\`\`\`

The \`/\` operator joins paths cleanly.

That is easier to read than manual string concatenation.

---

## Common Operations

- \`Path.cwd()\` for the current working directory
- \`.exists()\` to check whether something is there
- \`.mkdir()\` to create folders
- \`.read_text()\` and \`.write_text()\` for simple text files
- \`.glob(\"*.txt\")\` for pattern matching

---

## Rule of Thumb

When you start writing file logic, reach for \`pathlib\` first.

It covers most everyday file tasks cleanly.
`,
};
