export const lessonWritingFiles = {
  id: "writing-files",
  title: "Writing Files",

  article: `
## Writing Files

Reading files lets your program consume data.

Writing files lets your program produce data.

This is how scripts create reports, logs, and outputs that still exist after the program ends.

---

## Mental Model

When writing files, always choose mode intentionally:

- \`"w"\`: write and overwrite existing content
- \`"a"\`: append to existing content
- \`"x"\`: create new file, fail if it already exists

Mode choice is behavior.

Behavior is design.

---

## Example 1: Write a New File

\`\`\`python
report = "Sales Summary\\nTotal: 145\\n"

with open("report.txt", "w", encoding="utf-8") as file:
    chars_written = file.write(report)

print("Wrote characters:", chars_written)
\`\`\`

---

## What just happened?

- \`"w"\` creates \`report.txt\` if missing.
- If \`report.txt\` exists, \`"w"\` replaces its old content.
- \`write()\` returns number of characters written.
- \`with\` closes the file safely.

You wrote data to disk, not just memory.

---

## Example 2: Append to a Log

\`\`\`python
with open("activity.log", "a", encoding="utf-8") as file:
    file.write("Job completed\\n")
\`\`\`

---

## What just happened?

- \`"a"\` keeps existing file content.
- New text is added at the end.
- \`\\n\` keeps entries separated line-by-line.

This mode is ideal for history and log files.

---

## Example 3: Build Output Before Writing

\`\`\`python
def build_report(name, total):
    return f"Report for {name}\\nTotal: {total}\\n"

content = build_report("March", 145)

with open("report.txt", "w", encoding="utf-8") as file:
    file.write(content)
\`\`\`

---

## What just happened?

- \`build_report()\` handles formatting logic.
- File writing stays separate from formatting.

This separation makes code easier to test and reuse.

---

## Common Mistakes

- Using \`"w"\` for logs and deleting history by accident.
- Appending without \`\\n\`, producing unreadable output.
- Mixing file I/O and formatting in one large function.
- Not checking where files are being written.

---

## Try this

1. Save a 5-line summary to \`notes.txt\` with \`"w"\`.
2. Append a timestamp line to \`activity.log\`.
3. Use \`"x"\` to create \`backup.txt\` and handle "already exists" safely.
4. Write one function to build report text and another to save it.

Save.
Run the file.
Observe the output.

---

## What you just learned

- How write modes change file behavior
- Why \`with open(...)\` is the safe default
- How to append vs overwrite intentionally
- Why separating formatting from writing improves maintainability

---

## What comes next

Next lesson: **Working with CSV & Text Data**
`,
};
