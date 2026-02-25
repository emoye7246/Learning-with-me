export const projectCsvReportGenerator = {
  id: "project-csv-report-generator",
  title: "Project: CSV Report Generator",

  article: `
## Overview

Build a script that reads CSV data and generates a clear summary report.

This project is your first full data pipeline:

1. read data
2. validate data
3. compute metrics
4. produce output for humans

---

## Functional Requirements

Your tool must:

- [ ] Read an input CSV file
- [ ] Validate expected columns
- [ ] Compute at least 3 summary metrics
- [ ] Print a clean report in terminal
- [ ] Save report to a text file
- [ ] Handle missing file and bad data errors

---

## Suggested User Flow

1. Ask for CSV path.
2. Read rows with \`csv.DictReader\`.
3. Validate required column names.
4. Compute totals/averages/counts.
5. Render report text block.
6. Write report to output file.

---

## Suggested File Structure

\`\`\`text
csv_report/
  main.py
  reader.py
  metrics.py
  report.py
\`\`\`

- \`reader.py\`: CSV reading + validation
- \`metrics.py\`: calculations
- \`report.py\`: formatting and save logic
- \`main.py\`: user flow

You can start with one file and refactor later.

---

## Implementation Milestones

1. Read CSV and print row count.
2. Validate required columns.
3. Compute one metric (e.g., total amount).
4. Add two more metrics.
5. Format clean report text.
6. Save report to output file.
7. Add robust error handling.

Build incrementally.
Verify each milestone before moving forward.

---

## Testing Checklist

- [ ] Missing file path is handled gracefully
- [ ] Missing column prints clear error
- [ ] Empty CSV does not crash
- [ ] Numeric conversion errors are handled
- [ ] Report values match manual calculation
- [ ] Output file content matches terminal report

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
Work in this order: build baseline flow first, then add validation and polish.
Use hints only when blocked.
    `.trim(),

    level1Nudges: [
      "Which columns are required for your calculations?",
      "Where should type conversion happen: at read time or metric time?",
      "How will you handle blank rows?",
      "What should your report look like when no valid rows exist?",
      "Can you separate compute logic from print/save logic?",
    ],

    level2Hints: [
      "Use csv.DictReader so columns are accessed by name.",
      "Validate required headers right after creating the reader.",
      "Convert numeric fields with float(...) inside try/except ValueError.",
      "Store metrics in a dictionary, then render from that dictionary.",
      "Use one function for formatting report text and reuse it for terminal + file.",
    ],

    blueprint: [
      "Prompt user for CSV file path.",
      "Try opening file and creating DictReader.",
      "Verify required columns exist.",
      "Loop through rows and accumulate metrics.",
      "Handle bad numeric rows by skip+count or fail-fast.",
      "Build report string with labels and values.",
      "Print report.",
      "Write same report to output file.",
    ],

    debuggingGuide: [
      {
        problem: "Totals look wrong.",
        hint: "Check whether amount values are converted to float before addition.",
      },
      {
        problem: "KeyError for a column name.",
        hint: "Print reader.fieldnames and compare with required headers exactly.",
      },
      {
        problem: "Program crashes on blank row.",
        hint: "Guard against empty strings before numeric conversion.",
      },
    ],

    revealSolutionWarning: `
Use the example as a structure reference, not as a copy target.
If your output is correct and behavior is robust, your design is valid.
    `.trim(),

    exampleSolution: `import csv

def load_rows(path):
    with open(path, "r", encoding="utf-8", newline="") as file:
        reader = csv.DictReader(file)
        required = {"name", "amount"}
        if not required.issubset(set(reader.fieldnames or [])):
            raise ValueError("Missing required columns.")
        rows = []
        for row in reader:
            try:
                rows.append({"name": row["name"], "amount": float(row["amount"])})
            except (TypeError, ValueError):
                continue
        return rows

def build_report(rows):
    total = sum(r["amount"] for r in rows)
    count = len(rows)
    avg = total / count if count else 0
    return f"Rows: {count}\\nTotal: {total:.2f}\\nAverage: {avg:.2f}\\n"
`,

    upgrades: {
      groupingBlueprint: [
        "Add a category column.",
        "Group totals by category in a dictionary.",
        "Render grouped section in the report.",
      ],
      exportBlueprint: [
        "Keep text report output.",
        "Add JSON export using json.dump.",
        "Write both files with matching metric values.",
      ],
    },
  },
};
