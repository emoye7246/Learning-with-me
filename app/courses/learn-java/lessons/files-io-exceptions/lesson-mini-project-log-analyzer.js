export const lessonMiniProjectLogAnalyzer = {
  id: "mini-project-log-analyzer",
  title: "Mini Project: Log File Analyzer with Exception Reporting",
  hasChallenge: false,
  article: `
## Mini Project: Log File Analyzer with Exception Reporting

Build a tool that parses a log file, extracts errors and warnings, counts occurrences, and produces a summary report.

---

## What You'll Build

- Read a log file line by line
- Identify ERROR, WARN, INFO entries
- Count each level
- Extract and list all ERROR messages
- Write a summary report

---

## Sample Log File: app.log

Create this file in your project root:

\`\`\`
2024-03-15 09:01:12 INFO  Application started
2024-03-15 09:01:15 INFO  Database connected
2024-03-15 09:02:33 WARN  Response time high: 1200ms
2024-03-15 09:03:01 ERROR Failed to load user: id=42
2024-03-15 09:03:45 INFO  Retry successful
2024-03-15 09:04:10 ERROR Null pointer in OrderService.process()
2024-03-15 09:05:00 WARN  Cache miss rate above threshold
2024-03-15 09:06:22 ERROR Timeout connecting to payment API
2024-03-15 09:07:00 INFO  Scheduled job completed
\`\`\`

---

## Expected Output

\`\`\`
LOG ANALYSIS REPORT
===================
File: app.log
Lines analyzed: 9

Level Counts:
  INFO : 4
  WARN : 2
  ERROR: 3

ERRORS FOUND:
  [09:03:01] Failed to load user: id=42
  [09:04:10] Null pointer in OrderService.process()
  [09:06:22] Timeout connecting to payment API

Report written to: log-report.txt
\`\`\`

---

## Step 1: LogEntry Record

\`\`\`java
public record LogEntry(String timestamp, String level, String message) {
    public boolean isError() { return "ERROR".equals(level); }
    public boolean isWarn()  { return "WARN".equals(level);  }
}
\`\`\`

---

## Step 2: Parse the Log File

\`\`\`java
import java.io.*;
import java.nio.file.*;
import java.util.*;

public class LogAnalyzer {

    public static List<LogEntry> parseLog(String path) throws IOException {
        List<LogEntry> entries = new ArrayList<>();
        int lineNum = 0;

        try (BufferedReader reader = new BufferedReader(new FileReader(path))) {
            String line;
            while ((line = reader.readLine()) != null) {
                lineNum++;
                try {
                    // Format: 2024-03-15 09:01:12 INFO  Message...
                    String[] parts = line.split("\\\\s+", 4);
                    if (parts.length < 4) continue;

                    String timestamp = parts[1]; // time only
                    String level     = parts[2].trim();
                    String message   = parts[3];

                    entries.add(new LogEntry(timestamp, level, message));
                } catch (Exception e) {
                    System.err.println("Warning: could not parse line " + lineNum + ": " + line);
                }
            }
        }
        return entries;
    }
\`\`\`

---

## Step 3: Analyze and Report

\`\`\`java
    public static void writeReport(String reportPath, String logPath, List<LogEntry> entries)
            throws IOException {

        Map<String, Long> counts = new LinkedHashMap<>();
        counts.put("INFO",  entries.stream().filter(e -> "INFO".equals(e.level())).count());
        counts.put("WARN",  entries.stream().filter(LogEntry::isWarn).count());
        counts.put("ERROR", entries.stream().filter(LogEntry::isError).count());

        List<LogEntry> errors = entries.stream()
            .filter(LogEntry::isError)
            .toList();

        try (PrintWriter writer = new PrintWriter(new FileWriter(reportPath))) {
            writer.println("LOG ANALYSIS REPORT");
            writer.println("===================");
            writer.println("File: " + logPath);
            writer.println("Lines analyzed: " + entries.size());
            writer.println();
            writer.println("Level Counts:");
            counts.forEach((level, count) ->
                writer.printf("  %-6s: %d%n", level, count));

            if (!errors.isEmpty()) {
                writer.println();
                writer.println("ERRORS FOUND:");
                for (LogEntry e : errors) {
                    writer.printf("  [%s] %s%n", e.timestamp(), e.message());
                }
            }
        }

        // Also print to console
        System.out.println("LOG ANALYSIS REPORT");
        System.out.println("===================");
        System.out.println("File: " + logPath);
        System.out.println("Lines analyzed: " + entries.size());
        System.out.println();
        System.out.println("Level Counts:");
        counts.forEach((level, count) ->
            System.out.printf("  %-6s: %d%n", level, count));

        if (!errors.isEmpty()) {
            System.out.println();
            System.out.println("ERRORS FOUND:");
            for (LogEntry e : errors) {
                System.out.printf("  [%s] %s%n", e.timestamp(), e.message());
            }
        }

        System.out.println();
        System.out.println("Report written to: " + reportPath);
    }
\`\`\`

---

## Step 4: Main Method

\`\`\`java
    public static void main(String[] args) {
        String logFile    = args.length > 0 ? args[0] : "app.log";
        String reportFile = args.length > 1 ? args[1] : "log-report.txt";

        if (!Files.exists(Path.of(logFile))) {
            System.err.println("Log file not found: " + logFile);
            System.exit(1);
        }

        try {
            List<LogEntry> entries = parseLog(logFile);
            writeReport(reportFile, logFile, entries);
        } catch (IOException e) {
            System.err.println("Analysis failed: " + e.getMessage());
        }
    }
}
\`\`\`

---

## Stretch Goals

- Group errors by hour and show an error rate over time
- Find the most common error message (group identical messages)
- Accept a \`--errors-only\` flag to filter the output
- Support multiple log files by scanning a directory

---

## What You Practiced

- Parsing structured text files line by line
- Handling malformed lines without crashing
- Using streams to filter and count
- Writing both console output and file output from the same data
- Combining \`Files.exists()\` with graceful error messages

This completes Course 7 — File I/O, Exceptions & Error Handling.
`,
};
