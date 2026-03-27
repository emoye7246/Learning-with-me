export const lessonWorkingWithCsv = {
  id: "working-with-csv-cs",
  title: "Working with CSV & Text Data",
  hasChallenge: false,
  article: `
## Working with CSV & Text Data

CSV (Comma-Separated Values) is one of the most common data exchange formats. It's simple, human-readable, and supported by every spreadsheet application. Understanding how to read and write it manually — before reaching for a library — makes you a more capable developer.

---

## What is CSV?

A CSV file stores tabular data as plain text. The first line is typically a header row:

\`\`\`
Name,Age,City
Alice,30,New York
Bob,25,London
Charlie,35,Sydney
\`\`\`

Each row is a record. Fields are separated by commas. Line endings separate rows.

---

## Reading CSV with string.Split

For simple CSV without quoted fields:

\`\`\`csharp
string[] lines = File.ReadAllLines("people.csv");
string[] headers = lines[0].Split(',');

for (int i = 1; i < lines.Length; i++)
{
    string[] fields = lines[i].Split(',');
    string name = fields[0];
    int age = int.Parse(fields[1]);
    string city = fields[2];
    Console.WriteLine($"{name} is {age} years old and lives in {city}.");
}
\`\`\`

This works perfectly for well-structured CSV with no commas inside field values.

---

## Handling Quoted Fields

Real CSV data often contains commas inside quoted fields:

\`\`\`
Name,Description,Price
Widget,"A small, handy widget",9.99
Gadget,"High-tech, multi-use gadget",24.99
\`\`\`

\`string.Split(',')\` breaks quoted fields incorrectly. A simple parser handles this:

\`\`\`csharp
static string[] ParseCsvLine(string line)
{
    var fields = new List<string>();
    bool inQuotes = false;
    var current = new System.Text.StringBuilder();

    foreach (char c in line)
    {
        if (c == '"')
        {
            inQuotes = !inQuotes;
        }
        else if (c == ',' && !inQuotes)
        {
            fields.Add(current.ToString());
            current.Clear();
        }
        else
        {
            current.Append(c);
        }
    }

    fields.Add(current.ToString());
    return [..fields];
}
\`\`\`

For production use, consider the \`CsvHelper\` NuGet package, which handles edge cases including escaped quotes, multi-line fields, and encoding. For learning and simple scripts, the manual approach above is perfectly valid.

---

## Mapping CSV Rows to Objects

Instead of raw arrays of strings, map each row to a typed object:

\`\`\`csharp
record Person(string Name, int Age, string City);

static Person ParsePerson(string line)
{
    var fields = line.Split(',');
    return new Person(
        Name: fields[0].Trim(),
        Age: int.Parse(fields[1].Trim()),
        City: fields[2].Trim()
    );
}

// Usage
var people = File.ReadLines("people.csv")
    .Skip(1)                     // skip header
    .Select(ParsePerson)
    .ToList();
\`\`\`

---

## Writing CSV

Build each line by joining fields with commas, quoting any field that contains a comma:

\`\`\`csharp
static string ToCsvField(string value)
{
    if (value.Contains(',') || value.Contains('"') || value.Contains('\\n'))
        return $"\\"{value.Replace("\\"", "\\"\\"")}\\"";;
    return value;
}

static string ToCsvLine(IEnumerable<string> fields)
{
    return string.Join(",", fields.Select(ToCsvField));
}

// Write a CSV file
var header = ToCsvLine(["Name", "Age", "City"]);
var rows = people.Select(p => ToCsvLine([p.Name, p.Age.ToString(), p.City]));

File.WriteAllLines("output.csv", [header, ..rows]);
\`\`\`

---

## Practical Patterns

**Skip empty lines:**
\`\`\`csharp
File.ReadLines("data.csv")
    .Where(line => !string.IsNullOrWhiteSpace(line))
    .Skip(1)
    .Select(ParseRecord)
\`\`\`

**Handle rows with wrong field count:**
\`\`\`csharp
.Where(line =>
{
    var parts = line.Split(',');
    if (parts.Length != 3)
    {
        Console.Error.WriteLine($"Skipping malformed row: {line}");
        return false;
    }
    return true;
})
\`\`\`

**Report progress for large files:**
\`\`\`csharp
int count = 0;
foreach (string line in File.ReadLines("large.csv").Skip(1))
{
    ProcessRow(line);
    if (++count % 1000 == 0)
        Console.Write($"\\rProcessed {count:N0} rows...");
}
Console.WriteLine($"\\rDone. Processed {count:N0} rows.");
\`\`\`

---

## What Comes Next

The next lesson covers the \`System.IO\` directory APIs — navigating the file system, listing files, and building paths correctly.
`,
};
