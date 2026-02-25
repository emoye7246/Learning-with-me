export const lessonWorkingWithCsvTextData = {
  id: "working-with-csv-text-data",
  title: "Working with CSV & Text Data",

  article: `
## Working with CSV & Text Data

## Concept Introduction

CSV files are one of the most common real-world data formats.

CSV means "comma-separated values."

Each row is a record.

Each column is a field.

---

## Why You Should Use the csv Module

Beginners often try:

\`\`\`python
line.split(",")
\`\`\`

That works only for perfect data.

Real CSV files can include:

- quoted commas
- missing values
- extra spaces
- mixed numeric/text columns

Use Python's built-in \`csv\` module so parsing stays correct.

---

## Read CSV with DictReader

\`\`\`python
import csv

with open("sales.csv", "r", encoding="utf-8", newline="") as file:
    reader = csv.DictReader(file)
    for row in reader:
        name = row["name"]
        amount = float(row["amount"])
        print(name, amount)
\`\`\`

Why \`DictReader\` is beginner-friendly:

- field names are explicit
- code reads like data, not index math
- less fragile than using numeric column positions

---

## Write CSV with DictWriter

\`\`\`python
import csv

rows = [
    {"name": "Ava", "amount": 120},
    {"name": "Liam", "amount": 95},
]

with open("report.csv", "w", encoding="utf-8", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=["name", "amount"])
    writer.writeheader()
    writer.writerows(rows)
\`\`\`

Use \`newline=""\` for correct CSV line handling across platforms.

---

## Text File Processing Baseline

For plain text files:

1. strip whitespace
2. split lines
3. normalize case for matching

\`\`\`python
text = " Error\\nwarning \\nERROR "
normalized = [line.strip().lower() for line in text.splitlines()]
print(normalized)  # ['error', 'warning', 'error']
\`\`\`

This reduces false mismatches during analysis.

---

## Common Mistakes

- Assuming every CSV has the same headers.
- Forgetting to convert number-like text to \`int\` or \`float\`.
- Crashing on blank rows or missing fields.
- Writing CSV without headers.

---

## Practice Prompts

1. Read a CSV and print only rows where \`amount > 100\`.
2. Calculate total and average from one numeric column.
3. Write a new CSV with only selected columns.
4. Read a log text file and count how many lines contain "error".

---

## Quick Checklist

- Prefer \`csv.DictReader\` and \`csv.DictWriter\`.
- Keep headers explicit.
- Convert field types intentionally.
- Test with messy input, not only clean samples.
`,
};
