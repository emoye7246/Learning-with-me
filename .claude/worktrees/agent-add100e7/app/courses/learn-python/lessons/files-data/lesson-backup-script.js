export const projectBackupScript = {
  id: "project-backup-script",
  title: "Project: Backup Script",

  article: `
## Overview

You will build a backup utility that copies files into a timestamped folder.

This is a real operations task.

The focus is reliability.

A good backup script should be predictable, safe, and clear about what happened.

---

## What You’re Building

A tool that:

- validates a source directory
- creates a timestamped backup destination
- copies files safely
- reports copied, skipped, and failed counts

---

## Requirements Checklist (Core)

Your project should:

- [ ] Ask for source and backup root directories
- [ ] Validate source exists and is a directory
- [ ] Create a timestamped backup folder
- [ ] Copy files from source into backup folder
- [ ] Skip non-file entries intentionally (or handle recursively)
- [ ] Continue processing even if one file copy fails
- [ ] Print clear summary counts

---

## User Experience Checklist (Recommended)

- [ ] Clear error if source path is invalid
- [ ] Destination folder path is printed at end
- [ ] Per-file errors include file name
- [ ] Summary shows copied / skipped / failed totals

---

## Rules

- Do not overwrite source files.
- Generate timestamp once per run, not per file.
- Do not stop full run because one file fails.
- Keep copy logic separate from summary/report formatting.

---

## Suggested Build Plan (No Answers)

1. Prompt for source and backup root paths.
2. Validate source directory.
3. Build timestamp string.
4. Create backup destination folder.
5. Initialize counters.
6. Loop through source entries.
7. Copy files with per-file error handling.
8. Print final summary and destination path.

---

## Testing Checklist

- [ ] Missing source folder handled clearly
- [ ] Existing files are copied correctly
- [ ] Non-file entries are skipped or handled intentionally
- [ ] Permission errors do not crash full run
- [ ] Summary counts match actual results
- [ ] Timestamped backup folder name format is correct

---

## Extensions (Optional)

### Upgrade 1 — Recursive Backup

- [ ] Include files from nested subdirectories
- [ ] Preserve relative folder structure in backup
- [ ] Add per-folder summary counts

### Upgrade 2 — Verify Copy Integrity

- [ ] Compare source and destination file sizes
- [ ] Mark mismatches as verification failures
- [ ] Include verification metrics in final report

---

## Submission Requirements

Use entry file:

\`main.py\`

Run with:

\`\`\`bash
python main.py
\`\`\`

---

## What You’re Proving

If you complete this project, you are proving you can:

- automate real file operations safely
- handle operational failures without panic
- design scripts with clear outcomes and summaries
- separate core logic from reporting

---

## Need Help?

Use support in this order:

1. Level 1 nudges
2. Level 2 hints
3. Blueprint
4. Example solution (only if truly blocked)
`,

  support: {
    intro: `
Build for safety first.
Get one-file copy flow working before scaling to all files.
Use hints in order and keep your own design choices when possible.
The solution is one possible implementation.
    `.trim(),

    level1Nudges: [
      "Where should you validate the source path before any copy attempt?",
      "How will you create one timestamp value for the full run?",
      "How should your script behave when it encounters a directory entry?",
      "What data structure or variables will track copied/skipped/failed counts?",
      "How can you make the final summary useful to another developer?",
    ],

    level2Hints: [
      "Use Path.exists() and Path.is_dir() to validate source input.",
      "Use datetime.now().strftime(...) once before entering the loop.",
      "Use shutil.copy2(...) to copy while preserving metadata.",
      "Wrap each copy call in try/except so one failure does not stop everything.",
      "Track integers for copied, skipped, and failed; print them at the end.",
    ],

    blueprint: [
      "Prompt user for source and backup root directories.",
      "Validate source exists and is a directory.",
      "Build destination folder name with timestamp.",
      "Create destination folder.",
      "Initialize copied/skipped/failed counters to 0.",
      "Loop through source entries.",
      "If entry is not a file, increment skipped and continue.",
      "Try copying file to destination and increment copied on success.",
      "On copy error, increment failed and print file-specific message.",
      "Print destination path and summary counts.",
    ],

    debuggingGuide: [
      {
        problem: "No files are copied even though source has content.",
        hint: "Check your filter logic for is_file(); you may be skipping everything.",
      },
      {
        problem: "Backup folder name changes during run.",
        hint: "Generate timestamp once before the loop and reuse it.",
      },
      {
        problem: "Program stops when one file fails.",
        hint: "Wrap per-file copy calls in try/except, not the whole loop only.",
      },
    ],

    revealSolutionWarning: `
This is one possible implementation.
If your version handles errors clearly and produces correct summary counts, it is valid.
Do not copy blindly.
Trace the flow line by line.
    `.trim(),

    exampleSolution: `from pathlib import Path
from datetime import datetime
import shutil


def build_destination(backup_root):
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    destination = backup_root / f"backup_{stamp}"
    destination.mkdir(parents=True, exist_ok=True)
    return destination


def backup_files(source, destination):
    copied = 0
    skipped = 0
    failed = 0

    for item in source.iterdir():
        if not item.is_file():
            skipped += 1
            continue

        try:
            shutil.copy2(item, destination / item.name)
            copied += 1
        except OSError as error:
            failed += 1
            print(f"Failed: {item.name} ({error})")

    return copied, skipped, failed


def main():
    source = Path(input("Source directory: ").strip())
    backup_root = Path(input("Backup root directory: ").strip())

    if not source.exists() or not source.is_dir():
        print("Invalid source directory.")
        return

    destination = build_destination(backup_root)
    copied, skipped, failed = backup_files(source, destination)

    print("\nBackup complete")
    print(f"Destination: {destination}")
    print(f"Copied: {copied} | Skipped: {skipped} | Failed: {failed}")


if __name__ == "__main__":
    main()
`,

    upgrades: {
      recursiveBlueprint: [
        "Walk source tree with rglob('*').",
        "Skip non-file entries and preserve relative paths in destination.",
        "Create destination subfolders before copying nested files.",
      ],
      verifyBlueprint: [
        "After each copy, compare source and destination file sizes.",
        "Track verification_passed and verification_failed counts.",
        "Add verification section in final summary output.",
      ],
    },
  },
};
