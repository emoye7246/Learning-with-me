export const lessonRegexCs = {
  id: "regex-cs",
  title: "Regular Expressions with System.Text.RegularExpressions",
  hasChallenge: false,
  article: `
## Regular Expressions with System.Text.RegularExpressions

Regular expressions let you search, validate, and transform text using a declarative pattern language. They are dense by nature, but once you understand the building blocks, they become an indispensable tool for parsing user input, extracting data, and validating formats.

---

## The Regex Class

\`System.Text.RegularExpressions.Regex\` is the primary class for working with patterns in C#. You can use it via static methods for one-off operations, or instantiate it for reuse:

\`\`\`csharp
using System.Text.RegularExpressions;

// Static usage — convenient but instantiates a new Regex each time
bool isDigits = Regex.IsMatch("12345", @"^\\d+$");

// Instance usage — reusable
var regex = new Regex(@"^\\d+$");
bool matches = regex.IsMatch("12345");
\`\`\`

---

## Core Methods

**IsMatch** — returns \`true\` if the pattern matches anywhere in the string:

\`\`\`csharp
bool valid = Regex.IsMatch("hello123", @"\\d"); // true — contains a digit
\`\`\`

**Match** — returns the first \`Match\` object:

\`\`\`csharp
Match m = Regex.Match("Order #4521 placed", @"#(\\d+)");
if (m.Success)
{
    Console.WriteLine(m.Value);       // #4521
    Console.WriteLine(m.Groups[1].Value); // 4521 (captured group)
}
\`\`\`

**Matches** — returns all matches as a \`MatchCollection\`:

\`\`\`csharp
string text = "Prices: $10, $25, $100";
foreach (Match m in Regex.Matches(text, @"\\$(\\d+)"))
{
    Console.WriteLine(m.Groups[1].Value); // 10, 25, 100
}
\`\`\`

**Replace** — replaces matches with a substitution:

\`\`\`csharp
string cleaned = Regex.Replace("Hello   World", @"\\s+", " ");
Console.WriteLine(cleaned); // Hello World
\`\`\`

Replace with a lambda for dynamic substitutions:

\`\`\`csharp
string result = Regex.Replace("hello world", @"\\b\\w", m => m.Value.ToUpper());
Console.WriteLine(result); // Hello World
\`\`\`

---

## Common Patterns

**Email validation:**

\`\`\`csharp
var emailRegex = new Regex(@"^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$");
Console.WriteLine(emailRegex.IsMatch("user@example.com")); // True
Console.WriteLine(emailRegex.IsMatch("not-an-email"));     // False
\`\`\`

**US phone number:**

\`\`\`csharp
var phoneRegex = new Regex(@"^(\\+1)?[\\s.-]?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$");
Console.WriteLine(phoneRegex.IsMatch("(555) 123-4567")); // True
\`\`\`

**URL detection:**

\`\`\`csharp
var urlRegex = new Regex(@"https?://[^\\s/$.?#].[^\\s]*");
foreach (Match m in urlRegex.Matches("Visit https://example.com or http://test.org"))
{
    Console.WriteLine(m.Value);
}
\`\`\`

**Extract named groups:**

\`\`\`csharp
var dateRegex = new Regex(@"(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})");
Match m = dateRegex.Match("Published: 2026-03-26");
if (m.Success)
{
    Console.WriteLine(m.Groups["year"].Value);  // 2026
    Console.WriteLine(m.Groups["month"].Value); // 03
    Console.WriteLine(m.Groups["day"].Value);   // 26
}
\`\`\`

---

## Compiled Regex for Performance

By default, \`Regex\` interprets patterns at runtime. For patterns used many times, compile them with \`RegexOptions.Compiled\` — this takes longer to initialize but is significantly faster per match:

\`\`\`csharp
private static readonly Regex EmailRegex = new Regex(
    @"^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
    RegexOptions.Compiled | RegexOptions.IgnoreCase
);
\`\`\`

In C# 7+, you can also use the source generator approach (\`[GeneratedRegex]\` attribute) which generates compile-time code with no runtime overhead at all:

\`\`\`csharp
using System.Text.RegularExpressions;

public partial class Validator
{
    [GeneratedRegex(@"^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$", RegexOptions.IgnoreCase)]
    private static partial Regex EmailRegex();

    public bool IsValidEmail(string input) => EmailRegex().IsMatch(input);
}
\`\`\`

---

## Useful RegexOptions

\`\`\`csharp
var r = new Regex(@"pattern", RegexOptions.IgnoreCase | RegexOptions.Multiline);
\`\`\`

- \`IgnoreCase\` — case-insensitive matching
- \`Multiline\` — \`^\` and \`$\` match line starts/ends, not just string boundaries
- \`Singleline\` — \`.\` matches newlines too
- \`IgnorePatternWhitespace\` — lets you add comments and whitespace to the pattern for readability

---

## Quick Reference: Pattern Syntax

| Pattern | Meaning |
|---|---|
| \`\\d\` | Any digit (0–9) |
| \`\\w\` | Word character (letters, digits, underscore) |
| \`\\s\` | Whitespace |
| \`.\` | Any character except newline |
| \`^\` | Start of string (or line with Multiline) |
| \`$\` | End of string (or line with Multiline) |
| \`+\` | One or more |
| \`*\` | Zero or more |
| \`?\` | Zero or one |
| \`{3,5}\` | Between 3 and 5 times |
| \`()\` | Capture group |
| \`(?<name>)\` | Named capture group |
| \`(?:)\` | Non-capturing group |
| \`[abc]\` | Character class |
| \`[^abc]\` | Negated character class |
`,
};
