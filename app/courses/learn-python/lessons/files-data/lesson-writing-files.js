export const lessonWritingFiles = {
  id: "writing-files",
  title: "Writing Files",

  article: `
## Writing Files

## Concept Introduction

Writing files lets your program save results outside of memory.

When your script ends, variables disappear.

But files stay on disk, so you can use the data later.

Writing files is how you:

- save reports your team can open
- keep logs of what happened during a run
- export cleaned data for other tools
- create backups or snapshots of important results

---

## File Modes You Must Know

- \`"w"\` write mode:
create file if missing, overwrite entire file if it exists
- \`"a"\` append mode:
create file if missing, add new content to the end
- \`"x"\` exclusive-create mode:
create a new file only, fail if file already exists

Use \`"w"\` very carefully.

It erases old content and replaces it.

Use \`"x"\` when you want "never overwrite by accident" behavior.

---

## Why \`with open(...)\` Matters

Always prefer:

\`\`\`python
with open("file.txt", "w", encoding="utf-8") as file:
    file.write("hello\\n")
\`\`\`

When the \`with\` block ends, Python closes the file automatically.

That means:

- fewer resource leaks
- less chance of partial writes
- cleaner code with fewer bugs

---

## Basic Write Example

\`\`\`python
report = "Sales Summary\\nTotal: 145\\n"

with open("report.txt", "w", encoding="utf-8") as file:
    chars_written = file.write(report)

print("Wrote characters:", chars_written)
\`\`\`

\`write()\` returns the number of characters written.

That return value is useful for quick sanity checks.

If you expected 1200 characters but got 12, something is wrong upstream.

---

## Append Example

\`\`\`python
with open("activity.log", "a", encoding="utf-8") as file:
    file.write("Job completed\\n")
\`\`\`

Append mode is ideal for logs and history files.

Always include \`\\n\` if you want one entry per line.

Without it, entries run together and become hard to parse.

---

## Writing Multiple Lines Clearly

If you already have a list of lines, join them first:

\`\`\`python
rows = ["Name,Score", "Ava,92", "Noah,88"]
content = "\\n".join(rows) + "\\n"

with open("scores.csv", "w", encoding="utf-8") as file:
    file.write(content)
\`\`\`

This keeps formatting logic in one place and avoids many tiny writes.

---

## Build Output Before Writing

Avoid mixing file I/O with formatting logic.

\`\`\`python
def build_report(name, total):
    return f"Report for {name}\\nTotal: {total}\\nStatus: Complete\\n"

content = build_report("March", 145)

with open("report.txt", "w", encoding="utf-8") as file:
    file.write(content)
\`\`\`

This pattern gives you:

- easier testing (test \`build_report()\` without touching files)
- easier reuse (same report text for console, email, or file)
- cleaner scripts that are easier to debug

---

## Safer Overwrite Pattern

For important output, avoid writing directly to the final file first.

Beginner-safe workflow:

1. write to \`output.new.txt\` with mode \`"w"\`
2. inspect result
3. replace original manually

This prevents destroying a good file with bad new data.

As you advance, you can automate atomic replace behavior.

---

## Common Mistakes

- Using \`"w"\` for logs, which deletes previous log history every run.
- Forgetting \`encoding="utf-8"\`, then hitting character issues later.
- Building paths implicitly and not knowing where the file was saved.
- Writing partial content, then crashing before full output is complete.
- Appending without newline separators, producing unreadable files.

---

## Practice Prompts

1. Save a 5-line meeting summary to \`notes.txt\` using mode \`"w"\`.
2. Append a timestamped "script started" line to \`activity.log\`.
3. Write a function that takes a list of names and writes one name per line.
4. Use mode \`"x"\` to create \`backup.txt\` and handle "already exists" safely.
5. Build report text in one function and write it in another.

---

## Quick Checklist

- Choose \`"w"\` or \`"a"\` intentionally.
- Use \`with open(...)\` for automatic close.
- Set \`encoding="utf-8"\` unless you have a specific reason not to.
- Build output text before writing.
- Confirm the exact path where the file was written.
`,
};
