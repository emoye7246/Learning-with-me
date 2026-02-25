export const projectFileRenamingTool = {
  id: "project-file-renaming-tool",
  title: "Project: File Renaming Tool",

  article: `
## Overview

Build a utility that renames files in bulk based on a consistent rule.

This project teaches safe automation on live files.

The key is not clever naming.
The key is predictable and reversible behavior.

---

## Functional Requirements

Your tool must:

- [ ] Select files by extension or pattern
- [ ] Apply a deterministic rename rule
- [ ] Preview planned rename operations
- [ ] Execute rename operations safely
- [ ] Prevent filename collisions
- [ ] Report successes and failures

---

## Suggested Rename Rules

- add a prefix
- add a suffix
- replace spaces with underscores
- add numeric sequence

Choose one rule and implement it well.

---

## Suggested User Flow

1. Scan target directory.
2. Build old->new rename plan.
3. Detect conflicts in new names.
4. Show preview and confirm.
5. Execute renames with per-file error handling.

---

## Implementation Milestones

1. Select files by extension.
2. Generate proposed new names.
3. Print preview only (no rename yet).
4. Add conflict detection.
5. Execute rename operations.
6. Add success/failure counters.
7. Add optional dry-run mode flag.

---

## Safety Rules

- Never rename immediately after discovering files.
- Always build and validate the full rename plan first.
- Never continue when two files map to the same target name.
- Print a summary after execution.

---

## Testing Checklist

- [ ] Correct files are selected by pattern
- [ ] Preview output is readable and accurate
- [ ] Conflicting target names are blocked
- [ ] Renaming updates filenames exactly as expected
- [ ] Program handles permission or lock errors gracefully
- [ ] Summary counts match actual changes

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
Treat this project as a safety exercise.
Generate and validate the full plan before mutating files.
    `.trim(),

    level1Nudges: [
      "How will you ensure new names are deterministic?",
      "Where should conflict detection happen in your flow?",
      "How will you show preview output so users can verify quickly?",
      "What happens if one rename fails in the middle of the batch?",
      "How will you track successes and failures?",
    ],

    level2Hints: [
      "Store rename operations as tuples: (old_path, new_path).",
      "Use a set of new names to detect collisions before renaming.",
      "Call input() for confirmation after preview and before execution.",
      "Use try/except around each rename call.",
      "Use counters for renamed, skipped, failed.",
    ],

    blueprint: [
      "Prompt for target directory and extension filter.",
      "Collect matching files.",
      "Build rename plan according to one rule.",
      "Validate plan for collisions.",
      "Print preview list old->new.",
      "Ask for confirmation.",
      "Execute renames with per-file error handling.",
      "Print summary counters.",
    ],

    debuggingGuide: [
      {
        problem: "Some files were renamed twice unexpectedly.",
        hint: "Ensure you build the plan first and execute once, not while scanning.",
      },
      {
        problem: "Renaming fails with file exists error.",
        hint: "You likely have target name collisions; detect before execution.",
      },
      {
        problem: "Wrong files are renamed.",
        hint: "Print the filtered file list before creating rename targets.",
      },
    ],

    revealSolutionWarning: `
Use the example for flow shape.
Keep your own rename rule and naming strategy if behavior is correct.
    `.trim(),

    exampleSolution: `from pathlib import Path

folder = Path(input("Folder: ").strip())
files = sorted(folder.glob("*.txt"))

plan = []
for i, old in enumerate(files, start=1):
    new = old.with_name(f"{i:03d}_{old.name.replace(' ', '_')}")
    plan.append((old, new))

new_names = [p[1].name for p in plan]
if len(new_names) != len(set(new_names)):
    print("Conflict detected. Aborting.")
else:
    for old, new in plan:
        print(f"{old.name} -> {new.name}")
`,

    upgrades: {
      undoBlueprint: [
        "Save rename plan to JSON before execution.",
        "Create an undo command that reverses mappings.",
        "Validate existence before applying undo.",
      ],
      regexBlueprint: [
        "Accept a regex pattern and replacement.",
        "Preview transformed names first.",
        "Reject invalid or empty resulting names.",
      ],
    },
  },
};
