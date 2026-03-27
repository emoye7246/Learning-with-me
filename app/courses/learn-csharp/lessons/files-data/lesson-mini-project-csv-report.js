export const lessonMiniProjectCsvReport = {
  id: "mini-project-csv-report-cs",
  title: "Mini-Project: CSV Report Generator",
  hasChallenge: false,
  article: `
## Mini-Project: CSV Report Generator

Build a console program that reads a CSV file of sales data, computes totals and averages per category, and writes a formatted summary report. This project combines file reading, CSV parsing, LINQ aggregation, and file writing.

---

## What You're Building

A program that:
- Reads a \`sales.csv\` file with transaction records
- Groups records by product category
- Computes total sales, average sale value, and record count per category
- Writes a formatted text report to \`report.txt\`
- Prints a summary to the console

\`\`\`
=== Sales Report ===
Generated: 2024-03-15

Category         Records   Total Sales   Avg Sale
-------------------------------------------------
Electronics           42    $18,420.00    $438.57
Clothing              67     $4,021.50     $60.02
Books                 31       $621.00     $20.03

TOTAL                140    $23,062.50    $164.73

Report written to: report.txt
\`\`\`

---

## Getting Started

\`\`\`bash
dotnet new console -n CsvReport
cd CsvReport
\`\`\`

Create a sample \`sales.csv\` file to test with:

\`\`\`
Date,Category,Product,Amount
2024-01-15,Electronics,Laptop,999.00
2024-01-16,Books,Clean Code,35.00
2024-01-17,Clothing,Jacket,89.99
2024-01-18,Electronics,Headphones,149.00
2024-01-19,Books,C# in Depth,45.00
2024-01-20,Clothing,T-Shirt,24.99
\`\`\`

---

## Data Model

\`\`\`csharp
record SaleRecord(DateOnly Date, string Category, string Product, decimal Amount);
\`\`\`

---

## Parsing the CSV

\`\`\`csharp
static List<SaleRecord> LoadSales(string path)
{
    var records = new List<SaleRecord>();

    foreach (string line in File.ReadLines(path).Skip(1))  // skip header
    {
        if (string.IsNullOrWhiteSpace(line)) continue;

        var parts = line.Split(',');
        if (parts.Length < 4)
        {
            Console.Error.WriteLine($"Skipping malformed row: {line}");
            continue;
        }

        try
        {
            records.Add(new SaleRecord(
                Date: DateOnly.Parse(parts[0].Trim()),
                Category: parts[1].Trim(),
                Product: parts[2].Trim(),
                Amount: decimal.Parse(parts[3].Trim())
            ));
        }
        catch (FormatException)
        {
            Console.Error.WriteLine($"Skipping row with bad data: {line}");
        }
    }

    return records;
}
\`\`\`

---

## Computing the Report

Use LINQ to group and aggregate:

\`\`\`csharp
var grouped = sales
    .GroupBy(s => s.Category)
    .Select(g => new
    {
        Category = g.Key,
        Count = g.Count(),
        Total = g.Sum(s => s.Amount),
        Average = g.Average(s => s.Amount)
    })
    .OrderByDescending(g => g.Total)
    .ToList();

decimal grandTotal = sales.Sum(s => s.Amount);
double grandAverage = (double)grandTotal / sales.Count;
\`\`\`

---

## Writing the Report File

\`\`\`csharp
static void WriteReport(string path, IEnumerable<CategorySummary> summaries, decimal total)
{
    using var writer = new StreamWriter(path);

    writer.WriteLine("=== Sales Report ===");
    writer.WriteLine($"Generated: {DateTime.Now:yyyy-MM-dd}");
    writer.WriteLine();
    writer.WriteLine($"{"Category",-20} {"Records",8} {"Total Sales",14} {"Avg Sale",10}");
    writer.WriteLine(new string('-', 55));

    foreach (var s in summaries)
    {
        writer.WriteLine($"{s.Category,-20} {s.Count,8} {s.Total,14:C} {s.Average,10:C}");
    }

    writer.WriteLine(new string('-', 55));
    writer.WriteLine($"{"TOTAL",-20} {summaries.Sum(s => s.Count),8} {total,14:C}");
}
\`\`\`

---

## Key Requirements

- [ ] Reads \`sales.csv\` path from command-line argument (with sensible default)
- [ ] Skips malformed rows and reports them to stderr
- [ ] Groups by category with correct totals and averages
- [ ] Writes a neatly formatted report file
- [ ] Prints a summary to the console
- [ ] Exits with code 1 if the input file is missing or unreadable
- [ ] Handles the case where a category has zero records gracefully

---

## Stretch Goals

- Accept the output report path as a second command-line argument
- Add a **date range filter**: only include records from a specified date range
- Output as **CSV** instead of text (for easy import into Excel)
- Output as **JSON** using \`System.Text.Json\`
- Add a **top N products** section showing the highest-grossing individual products
- Support multiple input files and merge their data into one report
`,
};
