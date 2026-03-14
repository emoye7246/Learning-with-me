export const lessonJavaTime = {
  id: "java-time",
  title: "Dates and Times with java.time",
  hasChallenge: false,
  article: `
## Dates and Times with java.time

Java 8 introduced \`java.time\` — a modern, immutable date/time API that replaced the broken \`Date\` and \`Calendar\` classes. Use \`java.time\` exclusively.

---

## The Key Types

| Class | What It Represents |
|---|---|
| \`LocalDate\` | A date without time: 2024-03-15 |
| \`LocalTime\` | A time without date: 14:30:00 |
| \`LocalDateTime\` | Date + time, no timezone |
| \`ZonedDateTime\` | Date + time + timezone |
| \`Instant\` | A moment in time (UTC epoch) |
| \`Duration\` | Amount of time (hours, minutes, seconds) |
| \`Period\` | Amount of calendar time (years, months, days) |

---

## Creating Dates

\`\`\`java
import java.time.*;

// Current date/time
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
LocalDateTime nowDateTime = LocalDateTime.now();

// Specific date
LocalDate birthday = LocalDate.of(1990, 6, 15);
LocalDate also = LocalDate.of(1990, Month.JUNE, 15);

// Parse from string (ISO 8601 format)
LocalDate parsed = LocalDate.parse("2024-03-15");
LocalDateTime parsedDt = LocalDateTime.parse("2024-03-15T14:30:00");
\`\`\`

---

## Formatting

\`\`\`java
import java.time.format.DateTimeFormatter;

LocalDate date = LocalDate.of(2024, 3, 15);

// ISO format (default)
date.toString();  // "2024-03-15"

// Custom format
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("MMM d, yyyy");
date.format(fmt);  // "Mar 15, 2024"

DateTimeFormatter us = DateTimeFormatter.ofPattern("M/d/yyyy");
date.format(us);   // "3/15/2024"
\`\`\`

---

## Date Arithmetic

\`\`\`java
LocalDate today = LocalDate.now();

// Add / subtract
LocalDate nextWeek   = today.plusDays(7);
LocalDate lastMonth  = today.minusMonths(1);
LocalDate nextYear   = today.plusYears(1);

// Period between dates
Period age = Period.between(LocalDate.of(1990, 6, 15), today);
System.out.println(age.getYears() + " years old");

// Duration between times
LocalDateTime start = LocalDateTime.now();
// ... do work ...
LocalDateTime end = LocalDateTime.now();
Duration elapsed = Duration.between(start, end);
System.out.println(elapsed.toMillis() + "ms");
\`\`\`

---

## Comparison

\`\`\`java
LocalDate a = LocalDate.of(2024, 1, 1);
LocalDate b = LocalDate.of(2024, 6, 1);

a.isBefore(b);   // true
a.isAfter(b);    // false
a.isEqual(b);    // false
a.compareTo(b);  // negative (a < b)
\`\`\`

---

## Timezones

\`\`\`java
import java.time.ZoneId;

ZonedDateTime nyTime = ZonedDateTime.now(ZoneId.of("America/New_York"));
ZonedDateTime tokyoTime = nyTime.withZoneSameInstant(ZoneId.of("Asia/Tokyo"));

System.out.println(nyTime);    // 2024-03-15T14:30:00-04:00[America/New_York]
System.out.println(tokyoTime); // 2024-03-16T03:30:00+09:00[Asia/Tokyo]

// Convert to UTC
Instant utc = nyTime.toInstant();
\`\`\`

---

## Storing Dates

- In databases: store as \`LocalDate\` / \`LocalDateTime\` — JDBC and most ORMs support them directly
- In JSON: ISO 8601 strings (\`"2024-03-15"\`) — parse on read, format on write
- As timestamps: use \`Instant\` (epoch milliseconds, always UTC)

---

## What You Learned

- \`LocalDate\`, \`LocalDateTime\`, and \`ZonedDateTime\` cover most date/time needs
- All \`java.time\` objects are immutable — arithmetic returns new objects
- \`DateTimeFormatter.ofPattern()\` handles custom formatting
- Use \`Instant\` for machine timestamps (logs, events), \`LocalDate\` for human dates

Continue to: **Optional — Avoiding Null**
`,
};
