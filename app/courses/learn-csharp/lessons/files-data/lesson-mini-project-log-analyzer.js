export const lessonMiniProjectLogAnalyzer = {
  id: "mini-project-log-analyzer-cs",
  title: "Mini-Project: Log File Analyzer",
  hasChallenge: false,
  article: `
## Mini-Project: Log File Analyzer

Build a tool that reads a log file, parses each entry, counts error types, identifies the most recent errors, and outputs a structured summary. This project exercises line-by-line file reading, string parsing, LINQ aggregation, and formatted output.

---

## What You're Building

A program that reads a log file and produces output like this:

\`\`\`
=== Log Analysis: app.log ===
Total entries:    1,247
Time range:       2024-03-01 00:00:01 → 2024-03-15 23:58:44

Log Levels:
  INFO            892  (71.5%)
  WARNING         203  (16.3%)
  ERROR           152  (12.2%)

Top Error Messages:
  1. Connection timeout (47 occurrences)
  2. Failed to parse response (31 occurrences)
  3. Null reference in UserService (18 occurrences)

Most Recent Errors:
  2024-03-15 23:45:12 [ERROR] Connection timeout
  2024-03-15 22:10:05 [ERROR] Failed to parse response
  2024-03-15 21:33:40 [ERROR] Connection timeout
\`\`\`

---

## Getting Started

\`\`\`bash
dotnet new console -n LogAnalyzer
cd LogAnalyzer
\`\`\`

Create a sample \`app.log\` to test with:

\`\`\`
2024-03-15 10:00:01 [INFO] Application started
2024-03-15 10:01:22 [INFO] Connected to database
2024-03-15 10:05:44 [WARNING] Response time exceeded threshold: 850ms
2024-03-15 10:07:03 [ERROR] Connection timeout
2024-03-15 10:09:15 [INFO] Retry successful
2024-03-15 10:15:30 [ERROR] Failed to parse response
2024-03-15 10:22:00 [WARNING] Memory usage at 78%
2024-03-15 10:30:01 [ERROR] Connection timeout
\`\`\`

---

## Data Model

\`\`\`csharp
record LogEntry(DateTime Timestamp, string Level, string Message);
\`\`\`

---

## Parsing Log Lines

\`\`\`csharp
static LogEntry? ParseLine(string line)
{
    // Expected format: "2024-03-15 10:00:01 [INFO] Message here"
    if (string.IsNullOrWhiteSpace(line)) return null;

    try
    {
        // Find the end of the timestamp (first 19 characters: yyyy-MM-dd HH:mm:ss)
        if (line.Length < 25) return null;

        string timestampStr = line[..19];
        if (!DateTime.TryParse(timestampStr, out DateTime timestamp)) return null;

        // Find level between [ and ]
        int levelStart = line.IndexOf('[', 20);
        int levelEnd = line.IndexOf(']', levelStart);
        if (levelStart < 0 || levelEnd < 0) return null;

        string level = line[(levelStart + 1)..levelEnd];
        string message = line[(levelEnd + 2)..].Trim();  // skip "] "

        return new LogEntry(timestamp, level, message);
    }
    catch
    {
        return null;
    }
}
\`\`\`

---

## Loading All Entries

\`\`\`csharp
static List<LogEntry> LoadLog(string path)
{
    int skipped = 0;
    var entries = new List<LogEntry>();

    foreach (string line in File.ReadLines(path))
    {
        var entry = ParseLine(line);
        if (entry != null)
            entries.Add(entry);
        else if (!string.IsNullOrWhiteSpace(line))
            skipped++;
    }

    if (skipped > 0)
        Console.Error.WriteLine($"Warning: skipped {skipped} unparseable lines.");

    return entries;
}
\`\`\`

---

## Computing the Analysis

\`\`\`csharp
// Count by level
var levelCounts = entries
    .GroupBy(e => e.Level)
    .ToDictionary(g => g.Key, g => g.Count());

// Top error messages
var topErrors = entries
    .Where(e => e.Level == "ERROR")
    .GroupBy(e => e.Message)
    .OrderByDescending(g => g.Count())
    .Take(5)
    .Select(g => (Message: g.Key, Count: g.Count()))
    .ToList();

// Most recent errors
var recentErrors = entries
    .Where(e => e.Level == "ERROR")
    .OrderByDescending(e => e.Timestamp)
    .Take(5)
    .ToList();

// Time range
DateTime earliest = entries.Min(e => e.Timestamp);
DateTime latest = entries.Max(e => e.Timestamp);
\`\`\`

---

## Key Requirements

- [ ] Accepts log file path as a command-line argument
- [ ] Parses each line into timestamp, level, and message
- [ ] Skips unparseable lines with a count reported to stderr
- [ ] Shows total entry count and time range
- [ ] Groups and counts by log level with percentages
- [ ] Identifies the top 5 most frequent error messages
- [ ] Shows the 5 most recent ERROR entries with timestamps
- [ ] Handles large log files efficiently using \`File.ReadLines\`

---

## Stretch Goals

- **Filter by date range** — only analyze entries from a given period (\`--from\` and \`--to\`)
- **Filter by level** — show only ERROR entries (\`--level ERROR\`)
- **Search** — find all entries containing a specific string (\`--search "timeout"\`)
- **Write JSON output** — export the analysis as a \`report.json\` file
- **Multiple files** — accept a directory and analyze all \`.log\` files in it, merged
- **Hourly breakdown** — show entry counts grouped by hour to spot traffic spikes
- **Configurable format** — support different log formats via a format string argument
`,
};
