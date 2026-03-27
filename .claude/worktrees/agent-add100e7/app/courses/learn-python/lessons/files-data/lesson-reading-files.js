export const lessonReadingFiles = {
  id: "reading-files",
  title: "Reading Files",

  article: `
## Reading Files

Until now, most data in your programs came from variables or \`input()\`.

Real software usually reads data that already exists.

That data often lives in files.

When you can read files safely, Python starts interacting with the real world.

---

## Mental Model

Think of file reading as a 3-step flow:

1. Find the file.
2. Read the content.
3. Turn text into useful data.

Most beginner errors happen at step 1.

Wrong path.
Wrong folder.
Wrong assumptions.

---

## Example 1: Read a Small File

\`\`\`python
with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
\`\`\`

Use this when the file is small and you need everything at once.

---

## What just happened?

- \`open(..., "r")\` opens the file for reading.
- \`encoding="utf-8"\` tells Python how to decode text.
- \`with\` closes the file automatically when the block ends.
- \`file.read()\` returns the entire file as one string.

That is the core read pattern.

---

## Example 2: Read Line by Line

\`\`\`python
with open("server.log", "r", encoding="utf-8") as file:
    for line in file:
        if "ERROR" in line:
            print(line.strip())
\`\`\`

Use this when files might be large.

You process one line at a time instead of loading everything into memory.

---

## What just happened?

- \`for line in file\` streams line by line.
- \`if "ERROR" in line\` filters only relevant lines.
- \`strip()\` removes trailing newline characters.

This is a safer default when file size is unknown.

---

## Example 3: Guard Against Missing Files

\`\`\`python
from pathlib import Path

path = Path("data") / "input.txt"

if not path.exists():
    print("Missing file:", path)
else:
    with path.open("r", encoding="utf-8") as file:
        print(file.readline().strip())
\`\`\`

---

## What just happened?

- \`Path("data") / "input.txt"\` builds a path safely.
- \`exists()\` checks whether the file is actually there.
- You only attempt to read when the path is valid.

That prevents immediate crashes and gives clearer feedback.

---

## Common Mistakes

- Using \`read()\` on very large files.
- Assuming relative paths always start at project root.
- Skipping \`encoding="utf-8"\` and hitting decode issues later.
- Reading before checking whether the file exists.

---

## Try this

1. Print only the first 5 lines of a file.
2. Count total lines without using \`readlines()\`.
3. Print only lines containing \`"WARNING"\`.
4. Show a clear message when \`data/report.txt\` is missing.

Save.
Run the file.
Observe the output.

---

## What you just learned

- How to read file content with \`with open(...)\`
- When to use full-read vs line-by-line reading
- How to use \`pathlib.Path\` for safer file paths
- How to guard against missing files before reading

---

## What comes next

Next lesson: **Writing Files**
`,
};
