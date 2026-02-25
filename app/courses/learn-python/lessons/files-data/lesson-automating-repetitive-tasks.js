export const lessonAutomatingRepetitiveTasks = {
  id: "automating-repetitive-tasks",
  title: "Automating Repetitive Tasks",

  article: `
## Automating Repetitive Tasks

## Concept Introduction

Automation turns repeated manual work into consistent code.

If you repeat a task more than a few times, that is a strong signal to automate it.

---

## Typical Automation Flows

- rename batches of files
- archive old logs
- generate periodic reports
- clean and transform data files

Most automation scripts follow this structure:

1. find targets
2. process safely
3. report results

---

## Example: Rename Text Files

\`\`\`python
from pathlib import Path

source_dir = Path("notes")

for txt_file in source_dir.glob("*.txt"):
    new_path = txt_file.with_suffix(".bak")
    txt_file.rename(new_path)
    print(f"Renamed: {txt_file.name} -> {new_path.name}")
\`\`\`

---

## Automation Safety Rules

- Dry run first: print planned changes without applying.
- Keep backups for destructive actions.
- Process one folder at a time while testing.
- Log what changed.

---

## Dry Run Pattern

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

This protects you while validating logic.

---

## Quality Mindset for Automation

Good automation is:

- predictable
- reversible when possible
- observable (clear logs and summaries)

Avoid scripts that "do things silently."

---

## Practice Prompts

1. Build a dry-run script that lists files larger than a size threshold.
2. Create an archive folder and move files older than 30 days.
3. Rename image files to include a numbered prefix.
4. Produce a summary report: processed, skipped, failed.

---

## Quick Checklist

- Define exact selection rules for target files.
- Separate planning and execution logic.
- Add error handling per file.
- Start with dry run mode.
- Print summary counts at the end.
`,
};
