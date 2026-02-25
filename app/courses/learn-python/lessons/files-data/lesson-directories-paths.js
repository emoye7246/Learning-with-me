export const lessonDirectoriesPaths = {
  id: "directories-paths",
  title: "Directories & Paths",

  article: `
## Directories & Paths

## Concept Introduction

Files live inside directories.

Paths describe where files are located.

Path handling quality determines whether your script works on one machine or many.

---

## Why pathlib Matters

Prefer \`pathlib\` over manual string concatenation.

Reasons:

- clearer code
- fewer path separator bugs
- cross-platform behavior (Windows/macOS/Linux)

\`\`\`python
from pathlib import Path

base = Path("data")
target = base / "input.csv"

print(target.exists())
print(target.name)
print(target.parent)
\`\`\`

---

## Relative vs Absolute Paths

\`\`\`python
from pathlib import Path

relative = Path("data/input.csv")
absolute = relative.resolve()

print("cwd:", Path.cwd())
print("relative:", relative)
print("absolute:", absolute)
\`\`\`

If "file not found" surprises you, start by printing \`Path.cwd()\`.

---

## Working with Directories

\`\`\`python
from pathlib import Path

logs_dir = Path("logs")
logs_dir.mkdir(exist_ok=True)

for item in logs_dir.iterdir():
    print(item.name)
\`\`\`

Useful methods:

- \`iterdir()\` to list directory contents
- \`glob("*.txt")\` to match patterns
- \`mkdir(...)\` to create directories
- \`exists()\` to verify paths
- \`is_file()\` and \`is_dir()\` to validate type

---

## Common Mistakes

- Hardcoding absolute paths from one machine.
- Building paths with raw string concatenation.
- Assuming current working directory is always project root.
- Assuming every path in a folder is a file.

---

## Practical Pattern

\`\`\`python
from pathlib import Path

data_dir = Path("data")

if not data_dir.exists():
    print("Missing folder:", data_dir)
else:
    csv_files = list(data_dir.glob("*.csv"))
    print("CSV count:", len(csv_files))
\`\`\`

This gives you explicit checks before processing.

---

## Practice Prompts

1. List all \`.txt\` files in a target folder.
2. Create an \`output\` folder only if it does not exist.
3. Print file name and size for each file in a folder.
4. Build a script that moves all \`.log\` files into a \`logs_archive\` directory.

---

## Quick Checklist

- Use \`Path\` objects.
- Join paths with \`/\`.
- Check existence before read/write operations.
- Validate file vs directory before operations.
- Use \`exist_ok=True\` when safe to reuse folders.
`,
};
