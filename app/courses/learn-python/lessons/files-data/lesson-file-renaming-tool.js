export const projectFileRenamingTool = {
  id: "project-file-renaming-tool",
  title: "Project: File Renaming Tool",

  article: `
## Overview

You will build a bulk file renaming tool.

This project is about safe automation on live files.

The goal is not clever naming.

The goal is predictable, reversible behavior.

---

## What You’re Building

A tool that:

- selects files by pattern
- creates a full rename plan
- previews old -> new names
- blocks conflicts before execution
- runs renames with clear reporting

---

## Requirements Checklist (Core)

Your project should:

- [ ] Ask for target directory and selection pattern/extension
- [ ] Build deterministic new names from one rename rule
- [ ] Preview full rename plan before changes
- [ ] Detect collisions in target names and abort safely
- [ ] Rename files with per-file error handling
- [ ] Report renamed / skipped / failed counts

---

## User Experience Checklist (Recommended)

- [ ] Preview output is easy to verify quickly
- [ ] Confirmation prompt appears before execution
- [ ] Conflict messages explain what failed
- [ ] Final summary matches actual file changes

---

## Rules

- Never rename while scanning files.
- Build and validate full plan first.
- Never proceed when target names collide.
- Keep dry-run or preview path available.

---

## Suggested Build Plan (No Answers)

1. Read target directory and extension/pattern.
2. Collect matching files in a stable order.
3. Build rename plan as old path -> new path.
4. Validate no duplicate target names.
5. Print preview.
6. Ask for confirmation.
7. Execute renames with try/except per file.
8. Print summary counts.

---

## Testing Checklist

- [ ] Correct files are selected by rule
- [ ] Preview list is accurate
- [ ] Colliding target names are detected and blocked
- [ ] Successful renames update filenames as expected
- [ ] Locked/permission errors are handled gracefully
- [ ] Final summary is accurate

---

## Extensions (Optional)

### Upgrade 1 — Undo Support

- [ ] Save rename mappings to JSON before execution
- [ ] Build undo mode that reverses mappings
- [ ] Validate source/target existence before undoing

### Upgrade 2 — Regex Rename Rule

- [ ] Accept regex pattern and replacement
- [ ] Preview transformed names before execution
- [ ] Reject invalid or empty output names

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

- build safe mutation workflows
- prevent destructive mistakes before execution
- design deterministic rename systems
- communicate automation results clearly

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
Treat this project as a safety workflow.
Build and validate your plan before touching filenames.
Use support in order and keep your own naming rule when possible.
The solution is one possible implementation.
    `.trim(),

    level1Nudges: [
      "How will you guarantee the same input set always produces the same new names?",
      "Where should collision detection happen in your control flow?",
      "How can preview output make review fast and accurate?",
      "How should your script behave if one rename fails mid-run?",
      "What counts should appear in your final summary?",
    ],

    level2Hints: [
      "Store plan items as tuples: (old_path, new_path).",
      "Use a set of new_path names to detect duplicates before execution.",
      "Sort input files before generating sequence-based names.",
      "Ask for explicit confirmation before rename execution.",
      "Wrap each rename in try/except and continue after failures.",
    ],

    blueprint: [
      "Prompt for target folder and extension filter.",
      "Collect and sort matching files.",
      "Generate new names from one rename rule.",
      "Build rename plan list of old/new paths.",
      "Validate collisions in planned target names.",
      "Print preview mapping old -> new.",
      "Request confirmation from user.",
      "Execute renames with per-file error handling.",
      "Track renamed, skipped, failed counters.",
      "Print final summary.",
    ],

    debuggingGuide: [
      {
        problem: "Wrong files are being renamed.",
        hint: "Print filtered file list before creating rename targets and verify your selection rule.",
      },
      {
        problem: "Rename fails with file exists errors.",
        hint: "You likely have collisions in target names; detect and abort before execution.",
      },
      {
        problem: "Some files renamed twice or inconsistently.",
        hint: "Ensure plan is generated once from original names, then executed once.",
      },
    ],

    revealSolutionWarning: `
This is one possible implementation.
If your flow safely validates and executes renames with clear reporting, it is valid.
Do not copy blindly.
Explain each stage of your pipeline.
    `.trim(),

    exampleSolution: `from pathlib import Path


def build_plan(folder, extension):
    files = sorted(folder.glob(f"*.{extension}"))
    plan = []

    for index, old in enumerate(files, start=1):
        safe_name = old.stem.replace(" ", "_")
        new_name = f"{index:03d}_{safe_name}{old.suffix}"
        plan.append((old, old.with_name(new_name)))

    return plan


def has_collisions(plan):
    targets = [new.name for _, new in plan]
    return len(targets) != len(set(targets))


def main():
    folder = Path(input("Target folder: ").strip())
    extension = input("Extension (without dot): ").strip().lower()

    if not folder.exists() or not folder.is_dir():
        print("Invalid folder.")
        return

    plan = build_plan(folder, extension)
    if not plan:
        print("No matching files found.")
        return

    if has_collisions(plan):
        print("Collision detected. Aborting.")
        return

    print("\nPreview:")
    for old, new in plan:
        print(f"{old.name} -> {new.name}")

    confirm = input("Apply these changes? (y/n): ").strip().lower()
    if confirm != "y":
        print("Cancelled.")
        return

    renamed = 0
    failed = 0

    for old, new in plan:
        try:
            old.rename(new)
            renamed += 1
        except OSError as error:
            failed += 1
            print(f"Failed: {old.name} ({error})")

    print(f"\nRenamed: {renamed} | Failed: {failed}")


if __name__ == "__main__":
    main()
`,

    upgrades: {
      undoBlueprint: [
        "Before executing renames, save plan mappings to a JSON file.",
        "Add an undo mode that reads JSON and reverses target/source pairs.",
        "Validate path existence before applying each undo operation.",
      ],
      regexBlueprint: [
        "Accept regex pattern and replacement from user input.",
        "Apply regex transformation to each stem while preserving extension.",
        "Preview and validate names before executing renames.",
      ],
    },
  },
};
