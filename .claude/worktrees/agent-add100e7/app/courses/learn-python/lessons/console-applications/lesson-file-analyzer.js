export const projectFileAnalyzer = {
  id: "project-file-analyzer",
  title: "Project: File Analyzer",

  article: `
## Overview

Build a terminal tool that reads a text file and reports useful metrics.

This mirrors real utility software used in engineering workflows.

The value is not complexity.

The value is reliability under imperfect inputs.

---

## Functional Requirements

Your tool must:

- [ ] Ask user for a file path
- [ ] Attempt to open and read file safely
- [ ] Count lines
- [ ] Count words
- [ ] Count characters
- [ ] Show a clean summary report
- [ ] Handle missing file errors gracefully
- [ ] Handle empty file content correctly

Each metric should be computed with explicit logic.

---

## User Flow Description

1. User starts analyzer.
2. Program asks for file path.
3. Program validates and reads file.
4. Program computes metrics.
5. Program prints formatted summary.
6. Program optionally lets user analyze another file.

Keep this flow stable even when file input fails.

---

## Suggested File Structure

\`\`\`text
file_analyzer/
  main.py
  analyzer.py
  formatters.py
\`\`\`

- \`analyzer.py\`: metric calculations
- \`formatters.py\`: output formatting
- \`main.py\`: user interaction and control flow

This separation keeps logic testable.

---

## Implementation Milestones

1. Read a file and print raw text length.
2. Add line/word/character counts.
3. Add missing-file handling.
4. Add clean summary output.
5. Add repeat-analyze loop.
6. Refactor into modules.

Build the happy path first.

Then harden failures.

---

## Testing Checklist

- [ ] Valid file produces expected counts
- [ ] Empty file returns zero-safe metrics
- [ ] Missing path prints clear error, no crash
- [ ] Word count handles multiple spaces sensibly
- [ ] Report format is readable and consistent

Test with real files, not only ideal samples.

---

## Optional Extensions

- [ ] Count unique words
- [ ] Show top 10 most frequent words
- [ ] Ignore punctuation in word analysis
- [ ] Export report to output file

Add one extension at a time.

Re-test the core after each extension.

---

## Submission Requirements

Entry file:

\`main.py\`

Run with:

\`\`\`bash
python main.py
\`\`\`

---

## What This Project Proves

You can build robust CLI software that reads from the filesystem, handles edge cases, and reports results clearly.
`,

  support: {
    intro: `
Use this support in sequence.
Try your own architecture first.
Use hints to unblock, not replace reasoning.
    `.trim(),

    level1Nudges: [
      "Where should file opening happen in your flow?",
      "How will you protect against a missing path?",
      "What logic counts lines vs words vs characters?",
      "Will your app analyze one file or loop for multiple files?",
      "How will you keep output format consistent?",
    ],

    level2Hints: [
      "Use try/except around open(...).",
      "For words, a common baseline is len(text.split()).",
      "For lines, splitlines() is clearer than counting newline characters manually.",
      "Put metric logic in a pure function for easier testing.",
      "Use one report function so formatting stays uniform.",
    ],

    blueprint: [
      "Prompt user for file path.",
      "Try reading file text.",
      "On failure, print clear error and return to prompt or exit.",
      "Compute line count.",
      "Compute word count.",
      "Compute character count.",
      "Print summary block with labels.",
      "Ask whether to analyze another file.",
    ],

    debuggingGuide: [
      {
        problem: "Word count seems too high.",
        hint: "Check how punctuation and repeated spaces are being treated.",
      },
      {
        problem: "Line count is off by one.",
        hint: "Compare splitlines() behavior with trailing newline assumptions.",
      },
      {
        problem: "Program crashes on bad path.",
        hint: "Catch FileNotFoundError and print recovery guidance.",
      },
    ],

    revealSolutionWarning: `
This reference is intentionally compact.
Use it to compare flow, then improve structure in your own code.
    `.trim(),

    exampleSolution: `def analyze_text(text):
    return {
        "lines": len(text.splitlines()),
        "words": len(text.split()),
        "chars": len(text),
    }

path = input("File path: ").strip()

try:
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
except FileNotFoundError:
    print("File not found.")
else:
    stats = analyze_text(text)
    print(stats)`,

    upgrades: {
      frequencyBlueprint: [
        "Normalize text case.",
        "Tokenize words.",
        "Count frequencies with dict.",
        "Display top N results.",
      ],
      exportBlueprint: [
        "Format report as text block.",
        "Write report to chosen output file.",
        "Print success/failure confirmation.",
      ],
    },
  },
};
