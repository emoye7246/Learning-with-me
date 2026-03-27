export const lessonStringUtilitiesCs = {
  id: "string-utilities-cs",
  title: "String Utilities — StringBuilder, String.Format, Interpolation Deep-Dive",
  hasChallenge: false,
  article: `
## String Utilities — StringBuilder, String.Format, Interpolation Deep-Dive

Strings are immutable in C#. Every time you concatenate with \`+\`, you create a new string object and leave the old one for the garbage collector. For small-scale work this is fine, but in loops or high-throughput code, naive concatenation becomes a serious performance problem. C# provides several tools to handle this correctly.

---

## StringBuilder — High-Performance String Building

\`System.Text.StringBuilder\` gives you a mutable buffer for building strings incrementally. Instead of allocating a new string on each operation, it builds internally and only allocates the final string when you call \`ToString()\`.

\`\`\`csharp
using System.Text;

var sb = new StringBuilder();

for (int i = 1; i <= 5; i++)
{
    sb.Append("Item ");
    sb.Append(i);
    sb.AppendLine(); // adds Environment.NewLine
}

string result = sb.ToString();
Console.WriteLine(result);
\`\`\`

Key \`StringBuilder\` methods:
- \`Append(value)\` — appends without a newline
- \`AppendLine(value)\` — appends with a newline
- \`AppendFormat("template {0}", arg)\` — formatted append
- \`Insert(index, value)\` — insert at a position
- \`Remove(start, length)\` — remove a range
- \`Replace(old, new)\` — replace all occurrences
- \`Clear()\` — reset the buffer (useful when reusing instances)

Use \`StringBuilder\` when you're building strings in a loop or concatenating more than a handful of pieces. For two or three literals, \`+\` or interpolation is fine.

---

## String.Format — Positional Formatting

\`String.Format\` uses numbered placeholders and is the foundation of .NET's formatting system:

\`\`\`csharp
string name = "Alice";
int score = 9850;

string msg = String.Format("Player {0} scored {1:N0} points.", name, score);
Console.WriteLine(msg); // Player Alice scored 9,850 points.
\`\`\`

Format specifiers go after the colon inside the placeholder:
- \`{0:N0}\` — number with thousand separators, no decimals
- \`{0:C2}\` — currency with 2 decimal places
- \`{0:F4}\` — fixed-point with 4 decimal places
- \`{0:P1}\` — percentage with 1 decimal
- \`{0:yyyy-MM-dd}\` — date formatted as ISO 8601
- \`{0:X}\` — hexadecimal (uppercase)

\`\`\`csharp
double price = 1999.5;
DateTime date = DateTime.UtcNow;

Console.WriteLine(String.Format("Price: {0:C}", price));       // Price: $1,999.50
Console.WriteLine(String.Format("Date: {0:yyyy-MM-dd}", date)); // Date: 2026-03-26
Console.WriteLine(String.Format("Hex: {0:X}", 255));            // Hex: FF
\`\`\`

---

## String Interpolation — The Modern Way

Since C# 6, interpolation with \`$""\` is the cleanest option for most cases. Expressions inside \`{}\` are evaluated inline:

\`\`\`csharp
string name = "Bob";
int age = 34;
double salary = 82500.0;

Console.WriteLine($"Name: {name}, Age: {age}, Salary: {salary:C0}");
// Name: Bob, Age: 34, Salary: $82,500
\`\`\`

You can include any valid C# expression:

\`\`\`csharp
int[] scores = { 88, 92, 77 };
Console.WriteLine($"Average: {scores.Average():F1}");
Console.WriteLine($"Status: {(age >= 18 ? "adult" : "minor")}");
\`\`\`

Interpolation compiles to a \`String.Format\` call under the hood. In hot paths, consider using \`StringBuilder.AppendFormat\` or \`DefaultInterpolatedStringHandler\` (C# 10+) instead.

---

## Verbatim Strings — Literal Backslashes

Prefix a string with \`@\` to disable escape sequence processing. This is ideal for file paths and multiline strings:

\`\`\`csharp
string path = @"C:\\Users\\Alice\\Documents\\file.txt"; // still needs escaping
string path2 = @"C:\Users\Alice\Documents\file.txt";    // verbatim: no escape needed

string json = @"
{
  ""name"": ""Alice"",
  ""age"": 34
}";
// Double quotes inside verbatim strings are escaped by doubling them
\`\`\`

---

## Raw String Literals — C# 11+

C# 11 introduced raw string literals, delimited by three or more double-quotes. No escape sequences needed at all:

\`\`\`csharp
string json = """
{
  "name": "Alice",
  "age": 34
}
""";

string sql = """
    SELECT *
    FROM users
    WHERE active = 1
    """;
\`\`\`

Raw strings trim leading whitespace based on the indentation of the closing \`"""\`. They are ideal for embedding JSON, SQL, XML, or HTML inside C# code without escape noise.

You can combine raw strings with interpolation using \`$""" ... """\`:

\`\`\`csharp
string city = "London";
string query = $"""
    SELECT * FROM locations
    WHERE city = "{city}"
    """;
\`\`\`

---

## Choosing the Right Tool

| Scenario | Use |
|---|---|
| Simple one-liner with variables | \`$""\` interpolation |
| Formatted numbers/dates | \`String.Format\` or interpolation with specifiers |
| Building strings in a loop | \`StringBuilder\` |
| File paths, embedded text | \`@""\` verbatim string |
| JSON, SQL, multiline content | \`"""raw string"""\` (C# 11+) |
`,
};
