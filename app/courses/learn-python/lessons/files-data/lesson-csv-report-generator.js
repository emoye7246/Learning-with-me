export const projectCsvReportGenerator = {
  id: "project-csv-report-generator",
  title: "Project: CSV Report Generator",

  article: `
## Overview

You will build a script that reads CSV data and produces a clean summary report.

This is not a copy-and-paste lesson.

This is an assignment.

You already have the building blocks:

- reading files
- writing files
- CSV parsing
- error handling

Now you will combine them into one complete workflow.

---

## What You’re Building

A tool that:

- reads an input CSV file
- validates required columns
- computes summary metrics
- prints a readable report
- saves the same report to a file

---

## Requirements Checklist (Core)

Your project should:

- [ ] Ask for an input CSV path
- [ ] Read rows using \`csv.DictReader\`
- [ ] Validate required headers before processing
- [ ] Compute at least 3 metrics (example: count, total, average)
- [ ] Print a clear terminal report
- [ ] Save report output to a text file
- [ ] Handle missing file and bad numeric values safely

---

## User Experience Checklist (Recommended)

- [ ] Errors are specific and actionable
- [ ] Report labels are easy to scan
- [ ] Empty data case is handled cleanly
- [ ] Terminal output matches saved file content

---

## Rules

- Do not hardcode values from one sample CSV.
- Validate headers before calculating metrics.
- Do not crash when one row is malformed.
- Keep report generation separate from CSV reading logic.

---

## Suggested Build Plan (No Answers)

1. Prompt for CSV file path.
2. Open file and build a \`DictReader\`.
3. Validate required headers.
4. Loop rows and convert numeric fields safely.
5. Accumulate metrics in a dictionary.
6. Build one report string from those metrics.
7. Print report.
8. Save same report string to output file.

Build in small passes.
Verify each pass before adding more.

---

## Testing Checklist

- [ ] Missing file shows clear message
- [ ] Missing required header is handled
- [ ] Empty CSV does not crash
- [ ] Bad numeric values are skipped or handled intentionally
- [ ] Totals and averages match manual checks
- [ ] Output file content matches terminal report

---

## Extensions (Optional)

### Upgrade 1 — Grouped Totals

- [ ] Add a \`category\` column requirement
- [ ] Compute totals per category
- [ ] Add grouped section to report

### Upgrade 2 — JSON Export

- [ ] Keep text report output
- [ ] Add JSON output with same metric values
- [ ] Validate both outputs stay consistent

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

- process structured data safely
- separate parsing, metrics, and output logic
- design for bad input without panic
- build a real file-based automation workflow

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
Use support in order.
Start with Level 1 and think through each decision.
Move to Level 2 only when you are blocked.
Use the blueprint for structure.
Reveal the example solution only if necessary.
It is one possible implementation, not the only correct one.
    `.trim(),

    level1Nudges: [
      "Which columns are required before any metrics can be trusted?",
      "Where should numeric conversion happen so errors are easy to handle?",
      "How will you handle rows with blank amount values?",
      "What should your report look like when there are zero valid rows?",
      "Can one function build report text for both terminal and file output?",
    ],

    level2Hints: [
      "Use csv.DictReader so headers become dictionary keys.",
      "Check reader.fieldnames before processing rows.",
      "Convert numeric fields with float(...) inside try/except.",
      "Track totals in a dictionary, then format from that dictionary.",
      "Build the report string once and reuse it for print + save.",
    ],

    blueprint: [
      "Prompt for CSV path and output file path.",
      "Open CSV with utf-8 and newline=''.",
      "Create DictReader and validate required headers.",
      "Initialize counters: valid_rows, skipped_rows, total_amount.",
      "Loop through rows and convert amount safely.",
      "Update metrics for valid rows; count skipped rows on errors.",
      "Compute average safely (guard divide-by-zero).",
      "Build report text with labels and values.",
      "Print report text.",
      "Write same report text to output file.",
    ],

    debuggingGuide: [
      {
        problem: "Totals look too low.",
        hint: "Check whether valid numeric rows are being skipped unexpectedly.",
      },
      {
        problem: "KeyError when reading a column.",
        hint: "Print reader.fieldnames and compare exact header names.",
      },
      {
        problem: "Average calculation crashes.",
        hint: "Guard against zero valid rows before dividing.",
      },
    ],

    revealSolutionWarning: `
This is one possible implementation.
If your version meets the checklist and handles failures clearly, it is valid.
Do not copy blindly.
Read each step and explain why it exists.
    `.trim(),

    exampleSolution: `import csv
from pathlib import Path

REQUIRED = {"name", "amount"}


def load_rows(csv_path):
    with open(csv_path, "r", encoding="utf-8", newline="") as file:
        reader = csv.DictReader(file)
        headers = set(reader.fieldnames or [])
        if not REQUIRED.issubset(headers):
            missing = REQUIRED - headers
            raise ValueError(f"Missing columns: {sorted(missing)}")

        valid_rows = []
        skipped = 0
        for row in reader:
            try:
                valid_rows.append({
                    "name": row["name"].strip(),
                    "amount": float(row["amount"]),
                })
            except (KeyError, TypeError, ValueError):
                skipped += 1
        return valid_rows, skipped


def build_report(rows, skipped_count):
    total = sum(r["amount"] for r in rows)
    count = len(rows)
    average = total / count if count else 0.0

    return (
        "CSV Summary Report\n"
        f"Valid rows: {count}\n"
        f"Skipped rows: {skipped_count}\n"
        f"Total amount: {total:.2f}\n"
        f"Average amount: {average:.2f}\n"
    )


def main():
    csv_path = input("CSV path: ").strip()
    out_path = input("Output report file (default report.txt): ").strip() or "report.txt"

    try:
        rows, skipped = load_rows(csv_path)
    except FileNotFoundError:
        print("File not found.")
        return
    except ValueError as error:
        print(error)
        return

    report = build_report(rows, skipped)
    print("\n" + report)

    Path(out_path).write_text(report, encoding="utf-8")
    print(f"Saved report: {out_path}")


if __name__ == "__main__":
    main()
`,

    upgrades: {
      groupingBlueprint: [
        "Require a category column in input headers.",
        "Create a dictionary mapping category -> running total.",
        "Render grouped totals in a separate report section.",
      ],
      exportBlueprint: [
        "Create a metrics dictionary with all computed values.",
        "Write JSON output with json.dump(..., indent=2).",
        "Verify text and JSON outputs show matching totals.",
      ],
    },
  },
};
