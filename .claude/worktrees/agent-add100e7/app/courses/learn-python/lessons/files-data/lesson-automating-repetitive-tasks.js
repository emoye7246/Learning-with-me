export const lessonAutomatingRepetitiveTasks = {
  id: "automating-repetitive-tasks",
  title: "Automating Repetitive Tasks",

  article: `
## Automating Repetitive Tasks

If you repeat the same file task again and again, that is a signal.

It is probably time to automate.

Automation is not about being fancy.

It is about consistency, speed, and fewer manual mistakes.

---

## Mental Model

Most automation scripts follow one pipeline:

1. Select targets
2. Apply rules
3. Report results

Good automation is predictable.

Great automation is also safe.

---

## Example 1: Rename Text Files

\`\`\`python
from pathlib import Path

source_dir = Path("notes")

for txt_file in source_dir.glob("*.txt"):
    new_path = txt_file.with_suffix(".bak")
    txt_file.rename(new_path)
    print(f"Renamed: {txt_file.name} -> {new_path.name}")
\`\`\`

---

## What just happened?

- \`glob("*.txt")\` selected matching files.
- \`with_suffix(".bak")\` built new names.
- \`rename(...)\` applied the file change.
- You logged each change for visibility.

This is a complete automation loop.

---

## Example 2: Dry Run Safety Mode

\`\`\`python
from pathlib import Path

DRY_RUN = True

for file in Path("notes").glob("*.txt"):
    new_path = file.with_suffix(".bak")

    if DRY_RUN:
        print(f"[DRY RUN] {file.name} -> {new_path.name}")
    else:
        file.rename(new_path)
\`\`\`

---

## What just happened?

- Dry run mode prints planned changes without mutating files.
- You can validate logic before touching real data.

This is one of the most important safety habits in automation.

---

## Example 3: End-of-Run Summary

\`\`\`python
processed = 12
skipped = 3
failed = 1

print(f"Processed: {processed} | Skipped: {skipped} | Failed: {failed}")
\`\`\`

---

## What just happened?

- You produced an execution summary.
- Users can verify what changed and what failed.

Automation should never be silent.

---

## Common Mistakes

- Renaming/deleting immediately without preview.
- Mixing selection rules and mutation logic in one block.
- Not handling per-file errors.
- Running destructive scripts without backups.

---

## Try this

1. Add dry-run mode to a rename script.
2. Move old \`.log\` files into an archive directory.
3. Print per-file failures without stopping the whole run.
4. Add summary counts for processed/skipped/failed.

Save.
Run the file.
Observe the output.

---

## What you just learned

- The core pipeline pattern for automation scripts
- Why dry-run mode reduces risk
- How to apply rule-based file changes with \`pathlib\`
- Why summaries and logs are part of automation quality

---

## What comes next

When you're ready, continue to: **Project: CSV Report Generator**
`,
};
