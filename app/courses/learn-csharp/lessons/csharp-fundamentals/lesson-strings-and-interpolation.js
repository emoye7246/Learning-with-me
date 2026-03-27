export const lessonStringsAndInterpolation = {
  id: "strings-and-interpolation",
  title: "Strings & Interpolation",
  hasChallenge: false,
  article: `
## Strings & Interpolation

Strings are the most frequently used type in most programs. C# has rich built-in support for creating, formatting, and manipulating strings. This lesson covers the core features you'll use constantly.

---

## String Literals

\`\`\`csharp
string greeting = "Hello, World!";
string empty = "";
string withEscapes = "Line one\\nLine two\\tTabbed";
\`\`\`

**Common escape sequences:**
- \`\\n\` — newline
- \`\\t\` — tab
- \`\\\\\` — literal backslash
- \`\\"\` — literal double quote
- \`\\r\\n\` — Windows line ending (CRLF)

---

## Verbatim Strings

Prefix with \`@\` to disable escape processing. Useful for file paths and multiline strings:

\`\`\`csharp
string path = @"C:\\Users\\Alice\\Documents\\file.txt";
// same as: "C:\\\\Users\\\\Alice\\\\Documents\\\\file.txt"

string multiline = @"Line one
Line two
Line three";
\`\`\`

---

## String Interpolation

String interpolation embeds expressions directly in string literals using the \`$\` prefix:

\`\`\`csharp
string name = "Alice";
int age = 30;
double score = 95.5;

string message = $"Name: {name}, Age: {age}, Score: {score:F1}";
Console.WriteLine(message);
// Output: Name: Alice, Age: 30, Score: 95.5
\`\`\`

Inside \`{}\` you can put any C# expression:

\`\`\`csharp
int a = 5, b = 3;
Console.WriteLine($"Sum: {a + b}");           // Sum: 8
Console.WriteLine($"Max: {Math.Max(a, b)}");  // Max: 5
Console.WriteLine($"Is big: {a > 10}");       // Is big: False
\`\`\`

---

## Format Specifiers

Inside an interpolation expression, you can specify formatting with a colon:

\`\`\`csharp
double price = 19.99;
int count = 1000000;
DateTime now = DateTime.Now;

Console.WriteLine($"Price: {price:C}");         // Price: $19.99 (currency)
Console.WriteLine($"Count: {count:N0}");         // Count: 1,000,000 (with commas)
Console.WriteLine($"Pi: {Math.PI:F4}");          // Pi: 3.1416 (4 decimal places)
Console.WriteLine($"Today: {now:yyyy-MM-dd}");   // Today: 2025-03-26
Console.WriteLine($"Hex: {255:X}");              // Hex: FF
\`\`\`

---

## Common String Methods

\`\`\`csharp
string text = "  Hello, World!  ";

text.Length;                    // 18
text.Trim();                    // "Hello, World!" (removes whitespace)
text.ToUpper();                 // "  HELLO, WORLD!  "
text.ToLower();                 // "  hello, world!  "
text.Contains("World");         // true
text.StartsWith("  Hello");     // true
text.Replace("World", "C#");    // "  Hello, C#!  "
text.Split(',');                // ["  Hello", " World!  "]
text.Substring(2, 5);           // "Hello"
text.IndexOf("World");          // 9
text.Trim().ToLower();          // "hello, world!" (chaining)
\`\`\`

---

## String Comparison

\`\`\`csharp
string a = "hello";
string b = "Hello";

bool equal = a == b;                                          // false (case-sensitive)
bool equalIgnoreCase = string.Equals(a, b, StringComparison.OrdinalIgnoreCase); // true

// For sorting/ordering
int result = string.Compare(a, b, StringComparison.Ordinal);  // negative (a < b)
\`\`\`

Avoid \`==\` for culture-sensitive comparisons. Use \`StringComparison.OrdinalIgnoreCase\` for most case-insensitive comparisons in non-UI code.

---

## StringBuilder for Performance

When building strings in a loop, use \`StringBuilder\` — concatenating strings in a loop creates many intermediate objects:

\`\`\`csharp
// Inefficient — creates a new string each iteration
string result = "";
for (int i = 0; i < 1000; i++)
{
    result += i.ToString();
}

// Efficient — modifies in place
var sb = new System.Text.StringBuilder();
for (int i = 0; i < 1000; i++)
{
    sb.Append(i);
}
string result2 = sb.ToString();
\`\`\`

For small numbers of concatenations (2–3), \`+\` or \`$"..."\` is fine.

---

## Raw String Literals (C# 11+)

For strings containing many special characters (like JSON or regex patterns), raw string literals use triple quotes:

\`\`\`csharp
string json = """
{
  "name": "Alice",
  "age": 30
}
""";
\`\`\`

No escaping needed. Indentation is handled automatically.

---

## What Comes Next

The next lesson covers operators and math — arithmetic, comparison, and logical operators, and how C# handles numeric operations.
`,
};
