export const projectLogFileAnalyzer = {
  id: "project-log-file-analyzer",
  title: "Project: Log File Analyzer",

  article: `
## Overview

You will build a log analyzer that turns raw log text into useful metrics.

This is a real debugging workflow.

You are taking unstructured input and producing structured insight.

---

## What You’re Building

A tool that:

- reads a log file path from user input
- classifies lines by severity or category
- counts totals and category metrics
- prints a summary report
- saves summary output to a file

---

## Requirements Checklist (Core)

Your project should:

- [ ] Prompt for log file path
- [ ] Read lines safely with error handling
- [ ] Count total lines
- [ ] Count at least 3 categories (example: error, warning, info)
- [ ] Normalize case before classification
- [ ] Print a readable summary report
- [ ] Save summary report to output file

---

## User Experience Checklist (Recommended)

- [ ] Missing file error is clear
- [ ] Category logic is easy to understand
- [ ] Summary labels are consistent and readable
- [ ] Terminal summary matches saved output

---

## Rules

- Keep classification logic in one dedicated function.
- Normalize text before keyword checks.
- Decide category precedence and keep it consistent.
- Do not crash on missing/unreadable files.

---

## Suggested Build Plan (No Answers)

1. Prompt for input log path.
2. Read file safely.
3. Initialize total and category counters.
4. Loop through lines and classify each line.
5. Update counters based on classification.
6. Build one summary string.
7. Print summary.
8. Save summary to output file.

---

## Testing Checklist

- [ ] Empty file returns zero-safe counts
- [ ] Mixed uppercase/lowercase keywords are handled
- [ ] Missing file path is handled clearly
- [ ] Summary counts match manual verification
- [ ] Saved report file is readable and correct

---

## Extensions (Optional)

### Upgrade 1 — Top Error Messages

- [ ] Track recurring error lines
- [ ] Count frequency of each normalized error message
- [ ] Print top N recurring errors

### Upgrade 2 — JSON Summary Export

- [ ] Build summary dictionary
- [ ] Export with \`json.dump(..., indent=2)\`
- [ ] Keep text and JSON values consistent

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

- parse and classify text safely
- build pipeline-style scripts
- separate classification from reporting logic
- generate actionable summaries from noisy data

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
Build this as a pipeline: read, classify, aggregate, report.
Keep each stage simple and explicit.
Use support in order.
The solution is one possible implementation.
    `.trim(),

    level1Nudges: [
      "How will you classify lines when multiple keywords appear in one line?",
      "Will your matching be case-sensitive or normalized?",
      "Where should summary formatting live so it can be reused?",
      "How will you handle lines that match no known category?",
      "What should happen if writing the output report fails?",
    ],

    level2Hints: [
      "Convert each line to lowercase before checking keywords.",
      "Use if/elif/else to enforce category precedence.",
      "Track counts in a dictionary for easier reporting.",
      "Build report text in one function and reuse for print/save.",
      "Wrap read and write operations in separate try/except blocks.",
    ],

    blueprint: [
      "Prompt user for log file path and output report path.",
      "Open and read log file lines safely.",
      "Initialize counters: total, error, warning, info/other.",
      "Create classify(line) helper with clear precedence.",
      "Loop through lines and increment counters.",
      "Build summary report string from counters.",
      "Print summary report.",
      "Write summary report to output file.",
    ],

    debuggingGuide: [
      {
        problem: "Error count is always zero.",
        hint: "Check whether classification uses lowercase normalization before comparisons.",
      },
      {
        problem: "Total line count looks wrong.",
        hint: "Compare len(lines) with your loop counter logic and ensure blank lines are handled intentionally.",
      },
      {
        problem: "Saved output file is empty.",
        hint: "Verify report text is built before writing and file path is valid.",
      },
    ],

    revealSolutionWarning: `
This is one possible implementation.
If your classification and summary behavior are correct, your solution is valid.
Do not copy blindly.
Trace each pipeline stage.
    `.trim(),

    exampleSolution: `from pathlib import Path


def classify(line):
    text = line.lower()
    if "error" in text:
        return "error"
    if "warning" in text:
        return "warning"
    return "info"


def build_report(total, counts):
    return (
        "Log Summary Report\n"
        f"Total lines: {total}\n"
        f"Error: {counts['error']}\n"
        f"Warning: {counts['warning']}\n"
        f"Info/Other: {counts['info']}\n"
    )


def main():
    input_path = Path(input("Log file path: ").strip())
    output_path = Path(input("Output report file (default log_report.txt): ").strip() or "log_report.txt")

    try:
        with input_path.open("r", encoding="utf-8") as file:
            lines = file.readlines()
    except FileNotFoundError:
        print("Log file not found.")
        return
    except OSError as error:
        print(f"Could not read file: {error}")
        return

    counts = {"error": 0, "warning": 0, "info": 0}

    for line in lines:
        category = classify(line)
        counts[category] += 1

    report = build_report(len(lines), counts)
    print("\n" + report)

    try:
        output_path.write_text(report, encoding="utf-8")
    except OSError as error:
        print(f"Could not write report: {error}")
        return

    print(f"Saved report: {output_path}")


if __name__ == "__main__":
    main()
`,

    upgrades: {
      topErrorsBlueprint: [
        "Collect lines classified as error after normalization.",
        "Count frequencies with a dictionary.",
        "Sort counts descending and print top N messages.",
      ],
      jsonBlueprint: [
        "Create summary dictionary with total and category counts.",
        "Write JSON summary file with indentation.",
        "Verify JSON values match text report values.",
      ],
    },
  },
};
