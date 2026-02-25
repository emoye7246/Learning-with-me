export const projectLogFileAnalyzer = {
  id: "project-log-file-analyzer",
  title: "Project: Log File Analyzer",

  article: `
## Overview

Build a script that reads a log file and reports useful metrics.

This project mirrors a real debugging workflow.

You are turning unstructured text into actionable information.

---

## Functional Requirements

Your tool must:

- [ ] Read log file path from user input
- [ ] Count total log lines
- [ ] Count error/warning/info lines (or similar categories)
- [ ] Print a summary report
- [ ] Save summary to output file
- [ ] Handle missing or unreadable log files

---

## Suggested User Flow

1. Ask for log file path.
2. Read lines safely.
3. Classify each line by keyword/pattern.
4. Aggregate counts.
5. Print and save report.

---

## Classification Strategy

Beginner-friendly baseline:

- if line contains \`error\` -> error count
- else if line contains \`warning\` -> warning count
- else -> info/other count

Use lowercase normalization before matching.

---

## Implementation Milestones

1. Read file and count total lines.
2. Add keyword-based classification.
3. Add clean summary output.
4. Save summary to text file.
5. Add missing/unreadable-file handling.
6. Add optional advanced metrics.

---

## Testing Checklist

- [ ] Empty file returns zero-safe counts
- [ ] Mixed uppercase/lowercase keywords are detected
- [ ] Missing file path handled cleanly
- [ ] Summary values match manual verification
- [ ] Output file is created and readable

---

## Optional Extensions

- [ ] Show top recurring error messages
- [ ] Filter by date range pattern
- [ ] Export JSON summary

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
Build this as a pipeline: read, classify, aggregate, report.
Keep classification logic in one function so it is easy to improve later.
    `.trim(),

    level1Nudges: [
      "How will you classify a line when it contains multiple keywords?",
      "Will matching be case-sensitive or normalized?",
      "Where should summary formatting live?",
      "How will you handle lines that fit no known category?",
      "What should happen if output file writing fails?",
    ],

    level2Hints: [
      "Convert each line to lowercase before checks.",
      "Use an ordered if/elif/else block for category precedence.",
      "Track counts in a dictionary: {'error': 0, 'warning': 0, 'info': 0}.",
      "Use one report builder function for terminal and file output.",
      "Wrap file reads and writes in separate try/except blocks.",
    ],

    blueprint: [
      "Prompt user for log path.",
      "Try reading all lines from file.",
      "Initialize counters including total lines.",
      "Loop over lines and classify each one.",
      "Increment matching category counters.",
      "Build summary report string.",
      "Print report to terminal.",
      "Write report to output file.",
    ],

    debuggingGuide: [
      {
        problem: "Error count is always zero.",
        hint: "Check that you normalize line case before matching.",
      },
      {
        problem: "Total lines do not match file.",
        hint: "Compare len(lines) with your counting logic inside the loop.",
      },
      {
        problem: "Output file is empty.",
        hint: "Verify the report string is built before write and write mode is correct.",
      },
    ],

    revealSolutionWarning: `
Use the example to compare control flow.
If your metrics and failure handling are correct, your version is valid.
    `.trim(),

    exampleSolution: `from pathlib import Path

def classify(line):
    text = line.lower()
    if "error" in text:
        return "error"
    if "warning" in text:
        return "warning"
    return "info"

path = Path(input("Log file path: ").strip())

try:
    with path.open("r", encoding="utf-8") as file:
        lines = file.readlines()
except FileNotFoundError:
    print("File not found.")
else:
    counts = {"error": 0, "warning": 0, "info": 0}
    for line in lines:
        counts[classify(line)] += 1
    print(f"Total: {len(lines)} | {counts}")
`,

    upgrades: {
      topErrorsBlueprint: [
        "Collect normalized error lines in a list.",
        "Count frequency of each message with a dictionary.",
        "Sort and print top N recurring errors.",
      ],
      jsonBlueprint: [
        "Build a summary dictionary with totals and categories.",
        "Write JSON file with json.dump(..., indent=2).",
        "Keep text report and JSON report values consistent.",
      ],
    },
  },
};
