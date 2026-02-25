export const lessonReadingFiles = {
  id: "reading-files",
  title: "Reading Files",

  article: `
## Reading Files

## Introduction

Reading files is how your code starts working with real-world data.

Until now, most values came from hardcoded variables or \`input()\`.

In real software, data usually already exists in files created by users, tools, or other programs.

You need this skill for logs, reports, CSV exports, and config files.

If your file-reading logic is fragile, everything built on top of it becomes fragile.

---

## Mental Model

Think of reading files as a 3-step pipeline:

1. Locate the file.
2. Choose a reading strategy.
3. Transform the text into useful data.

When beginners struggle, it is usually step 1 (wrong path) or step 2 (wrong read method).

Keep this rule in mind:

Small file: read all.
Large file: stream line by line.

---

## Focused Code Example 1: Core Read Pattern

\`\`\`python
with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
\`\`\`

This gives you the full file as one string.

Use it for small text files when you need all content at once.

---

## Focused Code Example 2: Read Line by Line

\`\`\`python
with open("server.log", "r", encoding="utf-8") as file:
    for line in file:
        if "ERROR" in line:
            print(line.strip())
\`\`\`

This is memory-friendly for large files.

It is the safest default when file size is unknown.

---

## Focused Code Example 3: Check Path Before Reading

\`\`\`python
from pathlib import Path

path = Path("data") / "input.txt"

if not path.exists():
    print("Missing file:", path)
else:
    with path.open("r", encoding="utf-8") as file:
        print(file.readline().strip())
\`\`\`

This prevents immediate crashes and gives clearer feedback.

---

## Focused Code Example 4: Confirm Current Working Folder

\`\`\`python
from pathlib import Path

print("Current folder:", Path.cwd())
\`\`\`

If a relative path fails unexpectedly, check this first.

---

## Common Mistakes

- Using \`read()\` on huge files and running out of memory.
- Assuming relative paths are resolved from your project root.
- Forgetting \`encoding="utf-8"\` for text data.
- Skipping file-existence checks before reading.

---

## Practice Prompts

1. Print only the first 5 lines of a file. Hint: use a counter inside a \`for line in file\` loop.
2. Count total lines in a file without using \`readlines()\`.
3. Print only lines containing a keyword like \`"WARNING"\`.
4. Show a friendly message when \`data/report.txt\` is missing.

---

## Reflection Questions

- Why is line-by-line reading safer for unknown file sizes?
- What changes when you run the same script from a different folder?
- When would \`file.read()\` still be the better choice?

---

## What You Can Now Do

You can now:

- read text files safely with \`with open(...)\`
- choose between full-read and streaming approaches
- debug path issues with \`Path.cwd()\`
- guard your script against missing files

---

## Next Lesson Teaser

Next, you will write files so your programs can save results, logs, and generated reports.
`,
};
