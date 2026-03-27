export const lessonDatetimeDatetimeoffset = {
  id: "datetime-datetimeoffset",
  title: "System.DateTime & DateTimeOffset — Working with Time Correctly",
  hasChallenge: false,
  article: `
## System.DateTime & DateTimeOffset — Working with Time Correctly

Time is one of the most deceptively complex domains in software. A date looks simple — March 26, 2026 — but the moment you add clocks, timezones, daylight saving, and distributed systems, it becomes a source of serious bugs. C# gives you two main types to handle time: \`DateTime\` and \`DateTimeOffset\`. Knowing which one to use, and why, is essential.

---

## DateTime.Now vs DateTime.UtcNow

\`DateTime.Now\` returns the current local time on the machine where your code is running. \`DateTime.UtcNow\` returns Coordinated Universal Time — the universal standard that doesn't change with location or season.

\`\`\`csharp
DateTime local = DateTime.Now;      // e.g. 2026-03-26 09:30:00 (your local timezone)
DateTime utc   = DateTime.UtcNow;   // e.g. 2026-03-26 14:30:00 UTC
\`\`\`

**Rule of thumb:** store and compare timestamps in UTC. Display them in local time for the user. Using \`DateTime.Now\` for storage is a common mistake that causes bugs when servers are in different timezones or when daylight saving transitions occur.

Every \`DateTime\` has a \`Kind\` property: \`Utc\`, \`Local\`, or \`Unspecified\`. Mixing kinds in comparisons is dangerous — \`DateTime\` does not automatically convert between them.

---

## Parsing Dates with Parse and TryParse

\`DateTime.Parse\` converts a string to a \`DateTime\`. It throws an exception if the string is invalid:

\`\`\`csharp
DateTime dt = DateTime.Parse("2026-03-26");
Console.WriteLine(dt); // 3/26/2026 12:00:00 AM
\`\`\`

\`DateTime.TryParse\` is safer for user input — it returns \`false\` instead of throwing:

\`\`\`csharp
string input = "not a date";
if (DateTime.TryParse(input, out DateTime result))
{
    Console.WriteLine($"Parsed: {result}");
}
else
{
    Console.WriteLine("Invalid date format.");
}
\`\`\`

For strict format control, use \`ParseExact\` or \`TryParseExact\`:

\`\`\`csharp
DateTime dt = DateTime.ParseExact("2026-03-26", "yyyy-MM-dd", null);
\`\`\`

---

## Formatting with ToString

\`DateTime.ToString\` accepts format strings that give you precise control over output:

\`\`\`csharp
DateTime now = DateTime.UtcNow;

Console.WriteLine(now.ToString("yyyy-MM-dd"));           // 2026-03-26
Console.WriteLine(now.ToString("yyyy-MM-ddTHH:mm:ssZ")); // ISO 8601 with UTC marker
Console.WriteLine(now.ToString("dddd, MMMM d, yyyy"));   // Thursday, March 26, 2026
Console.WriteLine(now.ToString("HH:mm"));                 // 14:30
\`\`\`

Common format specifiers:
- \`yyyy\` — 4-digit year
- \`MM\` — 2-digit month
- \`dd\` — 2-digit day
- \`HH\` — 24-hour hour
- \`mm\` — minutes
- \`ss\` — seconds
- \`fff\` — milliseconds

---

## DateTimeOffset — Timezone-Aware Time

\`DateTimeOffset\` is like \`DateTime\` but it always carries an explicit UTC offset. This makes it unambiguous regardless of where the code runs:

\`\`\`csharp
DateTimeOffset now = DateTimeOffset.UtcNow;
Console.WriteLine(now); // 2026-03-26 14:30:00 +00:00

DateTimeOffset eastern = new DateTimeOffset(2026, 3, 26, 9, 30, 0, TimeSpan.FromHours(-5));
Console.WriteLine(eastern); // 2026-03-26 09:30:00 -05:00
\`\`\`

When you compare two \`DateTimeOffset\` values, comparison is performed in UTC — so offsets are handled automatically. This makes \`DateTimeOffset\` the correct choice for:

- API responses and JSON serialization
- Database timestamps in distributed systems
- Any code that crosses timezone boundaries

---

## Arithmetic and TimeSpan

\`DateTime\` and \`DateTimeOffset\` support arithmetic using \`TimeSpan\`:

\`\`\`csharp
DateTime start = DateTime.UtcNow;
DateTime end = start.AddDays(7).AddHours(3);

TimeSpan duration = end - start;
Console.WriteLine($"Duration: {duration.TotalHours} hours");
Console.WriteLine($"Days: {duration.Days}");
\`\`\`

---

## Key Takeaways

- Use \`DateTime.UtcNow\` — not \`Now\` — when storing or comparing timestamps
- Use \`DateTimeOffset\` when working across timezones or building APIs
- Always parse with \`TryParse\` for user-provided input
- Use ISO 8601 format (\`yyyy-MM-ddTHH:mm:ssZ\`) for interoperability
- The \`Kind\` property on \`DateTime\` matters — \`Unspecified\` is a silent bug waiting to happen
`,
};
