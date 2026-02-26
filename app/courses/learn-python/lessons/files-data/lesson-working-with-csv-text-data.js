export const lessonWorkingWithCsvTextData = {
  id: "working-with-csv-text-data",
  title: "Working with CSV & Text Data",

  article: `
## Working with CSV & Text Data

CSV files are everywhere.

Exports, reports, analytics, and internal tools often use CSV because it is simple and portable.

If you can read and write CSV safely, you can process real-world data confidently.

---

## Mental Model

CSV is text with structure.

- Row = one record
- Column = one field

Your job is to parse that structure safely.

Do not rely on fragile string splitting for production workflows.

---

## Example 1: Read CSV with DictReader

\`\`\`python
import csv

with open("sales.csv", "r", encoding="utf-8", newline="") as file:
    reader = csv.DictReader(file)
    for row in reader:
        name = row["name"]
        amount = float(row["amount"])
        print(name, amount)
\`\`\`

---

## What just happened?

- \`csv.DictReader\` reads each row as a dictionary.
- You access values by header name, not index.
- \`float(...)\` converts numeric text into numeric data.
- \`newline=""\` helps CSV behave consistently across systems.

This keeps parsing explicit and readable.

---

## Example 2: Write CSV with DictWriter

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

---

## What just happened?

- \`DictWriter\` writes rows using a header definition.
- \`writeheader()\` creates the first header row.
- \`writerows(...)\` writes all row dictionaries in order.

Now your output is structured and shareable.

---

## Example 3: Normalize Text for Matching

\`\`\`python
text = " Error\\nwarning \\nERROR "
normalized = [line.strip().lower() for line in text.splitlines()]
print(normalized)  # ['error', 'warning', 'error']
\`\`\`

---

## What just happened?

- \`splitlines()\` separates lines.
- \`strip()\` removes extra whitespace.
- \`lower()\` normalizes case.

Normalization reduces false mismatches during analysis.

---

## Common Mistakes

- Using \`line.split(",")\` and breaking on quoted commas.
- Assuming every CSV has expected headers.
- Forgetting type conversion for numeric fields.
- Crashing on blank rows or missing values.

---

## Try this

1. Read a CSV and print rows where \`amount > 100\`.
2. Compute total and average for one numeric column.
3. Write a filtered CSV with only selected columns.
4. Count how many log lines contain \`error\` (case-insensitive).

Save.
Run the file.
Observe the output.

---

## What you just learned

- Why the \`csv\` module is safer than manual splitting
- How to read rows with \`DictReader\`
- How to write rows with \`DictWriter\`
- How text normalization improves matching accuracy

---

## What comes next

Next lesson: **Directories & Paths**
`,
};
