export const projectBackupScript = {
  id: "project-backup-script",
  title: "Project: Backup Script",

  article: `
## Overview

Build a script that copies files from a source directory into a timestamped backup folder.

This is a real operations task.

Your goal is reliability:

- copy the right files
- avoid accidental data loss
- produce a clear summary

---

## Functional Requirements

Your tool must:

- [ ] Accept source and backup directories
- [ ] Create backup folder if needed
- [ ] Copy files safely
- [ ] Skip directories or handle them intentionally
- [ ] Show a summary of copied/skipped/failed files
- [ ] Handle missing source directory gracefully

---

## Suggested User Flow

1. Validate source directory.
2. Create timestamped backup folder.
3. Iterate files in source.
4. Copy each file with error handling.
5. Print summary.

---

## Suggested File Structure

\`\`\`text
backup_tool/
  main.py
  backup.py
  report.py
\`\`\`

- \`backup.py\`: copy logic
- \`report.py\`: counters and summary rendering
- \`main.py\`: input and orchestration

---

## Implementation Hints

Use:

- \`pathlib.Path\` for path handling
- \`shutil.copy2\` to preserve metadata

---

## Implementation Milestones

1. Validate source path.
2. Create backup folder.
3. Copy one known file.
4. Loop through all files.
5. Add per-file error handling.
6. Add copied/skipped/failed counters.
7. Print final summary.

---

## Testing Checklist

- [ ] Missing source folder handled with clear message
- [ ] Existing files copied successfully
- [ ] Directory entries are skipped or handled intentionally
- [ ] Permission errors do not crash full run
- [ ] Summary counts are accurate
- [ ] Timestamped backup folder name is correct

---

## Submission Requirements

Entry file:

\`main.py\`

Run with:

\`\`\`bash
python main.py
\`\`\`
`,

  support: {
    intro: `
Start with safe behavior before speed.
First get one file copy working, then generalize.
    `.trim(),

    level1Nudges: [
      "How will you build a timestamped folder name?",
      "What counts as a file to copy vs a directory to skip?",
      "Where should counters live so they are easy to print at the end?",
      "How should one failed file affect the rest of the run?",
      "What information should a user see in the final summary?",
    ],

    level2Hints: [
      "Use datetime.now().strftime(...) for timestamp folder names.",
      "Use Path.iterdir() and check item.is_file() before copy.",
      "Use shutil.copy2(source, destination) for copying.",
      "Wrap each copy operation in try/except so one error does not stop the whole run.",
      "Track metrics in integers: copied, skipped, failed.",
    ],

    blueprint: [
      "Prompt for source and backup parent directory.",
      "Validate source exists and is directory.",
      "Create backup destination folder with timestamp.",
      "Initialize copied/skipped/failed counters.",
      "Iterate source directory entries.",
      "If item is not file, increment skipped and continue.",
      "Try copy file; increment copied on success.",
      "On exception, increment failed and print error.",
      "Print summary with destination path and counters.",
    ],

    debuggingGuide: [
      {
        problem: "Nothing was copied.",
        hint: "Check whether your loop filters only files with is_file().",
      },
      {
        problem: "Backup folder name keeps changing unexpectedly.",
        hint: "Generate timestamp once before the loop, not per file.",
      },
      {
        problem: "Program crashes on permission error.",
        hint: "Wrap individual copy calls in try/except.",
      },
    ],

    revealSolutionWarning: `
Reference the example for control flow only.
Keep your own naming and structure if behavior matches requirements.
    `.trim(),

    exampleSolution: `from pathlib import Path
from datetime import datetime
import shutil

source = Path(input("Source dir: ").strip())
backup_root = Path(input("Backup root dir: ").strip())

if not source.exists() or not source.is_dir():
    print("Invalid source directory.")
else:
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    destination = backup_root / f"backup_{stamp}"
    destination.mkdir(parents=True, exist_ok=True)

    copied = skipped = failed = 0
    for item in source.iterdir():
        if not item.is_file():
            skipped += 1
            continue
        try:
            shutil.copy2(item, destination / item.name)
            copied += 1
        except Exception:
            failed += 1

    print(f"Copied={copied}, Skipped={skipped}, Failed={failed}")
`,

    upgrades: {
      recursiveBlueprint: [
        "Walk subdirectories recursively.",
        "Preserve relative folder structure in backup.",
        "Keep per-folder summary counts.",
      ],
      verifyBlueprint: [
        "After copy, compare source and destination file sizes.",
        "Report mismatches as verification failures.",
        "Add verification results to summary output.",
      ],
    },
  },
};
