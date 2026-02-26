export const lessonDirectoriesPaths = {
  id: "directories-paths",
  title: "Directories & Paths",

  article: `
## Directories & Paths

Files do not exist in isolation.

They live inside folders.

Paths are how your program finds those files and folders.

If path handling is weak, file scripts fail in unpredictable ways.

---

## Mental Model

A path is an address.

- Relative path: based on current working directory
- Absolute path: full location from system root

When a script says "file not found," path assumptions are usually wrong.

---

## Example 1: Build Paths with pathlib

\`\`\`python
from pathlib import Path

base = Path("data")
target = base / "input.csv"

print(target)
print(target.name)
print(target.parent)
\`\`\`

---

## What just happened?

- \`Path(...)\` creates path objects.
- \`/\` joins paths safely across OS differences.
- \`name\` gives final file/folder name.
- \`parent\` gives containing directory.

This is cleaner and safer than string concatenation.

---

## Example 2: Relative vs Absolute

\`\`\`python
from pathlib import Path

relative = Path("data/input.csv")
absolute = relative.resolve()

print("cwd:", Path.cwd())
print("relative:", relative)
print("absolute:", absolute)
\`\`\`

---

## What just happened?

- \`Path.cwd()\` shows current working directory.
- \`resolve()\` shows full absolute path.

If a path fails, inspect these first.

---

## Example 3: Create and Inspect Directories

\`\`\`python
from pathlib import Path

logs_dir = Path("logs")
logs_dir.mkdir(exist_ok=True)

for item in logs_dir.iterdir():
    print(item.name)
\`\`\`

---

## What just happened?

- \`mkdir(exist_ok=True)\` creates the folder if missing.
- \`iterdir()\` iterates items inside the folder.

Now your scripts can manage directories, not just files.

---

## Common Mistakes

- Hardcoding machine-specific absolute paths.
- Building paths with raw strings and manual separators.
- Assuming current directory is always project root.
- Treating every path entry as a file without checking.

---

## Try this

1. List all \`.txt\` files in a folder using \`glob("*.txt")\`.
2. Create an \`output\` folder only if needed.
3. Print file name and size for each file in a folder.
4. Count how many \`.csv\` files exist in \`data\`.

Save.
Run the file.
Observe the output.

---

## What you just learned

- How to use \`pathlib.Path\` for reliable path handling
- How relative and absolute paths differ
- How to inspect current working directory during debugging
- How to create and iterate directories safely

---

## What comes next

Next lesson: **Handling Missing or Broken Files**
`,
};
