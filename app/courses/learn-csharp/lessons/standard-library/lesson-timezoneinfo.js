export const lessonTimezoneinfo = {
  id: "timezoneinfo",
  title: "TimeZoneInfo — Handling Zones and UTC",
  hasChallenge: false,
  article: `
## TimeZoneInfo — Handling Zones and UTC

Timezones are not just offsets. They include daylight saving rules, historical changes, and political decisions that can shift without warning. The \`TimeZoneInfo\` class in .NET encapsulates all of this complexity so you don't have to manage it manually.

---

## Finding a Timezone

Use \`TimeZoneInfo.FindSystemTimeZoneById\` to look up a timezone by its system identifier. The identifiers differ between Windows and IANA (used on macOS/Linux):

\`\`\`csharp
// Windows identifier
TimeZoneInfo eastern = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");

// IANA identifier (macOS, Linux)
TimeZoneInfo eastern = TimeZoneInfo.FindSystemTimeZoneById("America/New_York");
\`\`\`

On .NET 6+, .NET automatically handles both Windows and IANA identifiers on all platforms. You can also use \`TimeZoneInfo.TryFindSystemTimeZoneById\` to avoid exceptions on invalid IDs:

\`\`\`csharp
if (TimeZoneInfo.TryFindSystemTimeZoneById("America/New_York", out TimeZoneInfo? tz))
{
    Console.WriteLine(tz.DisplayName);
}
\`\`\`

---

## Converting Between Timezones

\`TimeZoneInfo.ConvertTime\` converts a \`DateTime\` or \`DateTimeOffset\` to a target timezone:

\`\`\`csharp
TimeZoneInfo utc     = TimeZoneInfo.Utc;
TimeZoneInfo pacific = TimeZoneInfo.FindSystemTimeZoneById("America/Los_Angeles");
TimeZoneInfo tokyo   = TimeZoneInfo.FindSystemTimeZoneById("Asia/Tokyo");

DateTime utcNow = DateTime.UtcNow;

DateTime pacificTime = TimeZoneInfo.ConvertTimeFromUtc(utcNow, pacific);
DateTime tokyoTime   = TimeZoneInfo.ConvertTimeFromUtc(utcNow, tokyo);

Console.WriteLine($"UTC:     {utcNow:HH:mm}");
Console.WriteLine($"Pacific: {pacificTime:HH:mm}");
Console.WriteLine($"Tokyo:   {tokyoTime:HH:mm}");
\`\`\`

Converting between two non-UTC zones:

\`\`\`csharp
TimeZoneInfo source = TimeZoneInfo.FindSystemTimeZoneById("America/New_York");
TimeZoneInfo target = TimeZoneInfo.FindSystemTimeZoneById("Europe/London");

DateTime sourceTime = new DateTime(2026, 3, 26, 9, 0, 0);
DateTime targetTime = TimeZoneInfo.ConvertTime(sourceTime, source, target);

Console.WriteLine($"New York 9am = London {targetTime:HH:mm}");
\`\`\`

---

## UTC as Canonical Storage

The single most important rule in timezone handling: **always store timestamps in UTC**. Convert to local time only at the display layer.

\`\`\`csharp
// Good: store in UTC
DateTime created = DateTime.UtcNow;
SaveToDatabase(created);

// Later, when displaying:
TimeZoneInfo userZone = TimeZoneInfo.FindSystemTimeZoneById(user.TimezoneId);
DateTime displayTime = TimeZoneInfo.ConvertTimeFromUtc(created, userZone);
Console.WriteLine($"Created: {displayTime:f}");
\`\`\`

If you store \`DateTime.Now\` instead, your data becomes ambiguous the moment your server moves to a different datacenter or DST transitions occur.

---

## Daylight Saving Awareness

\`TimeZoneInfo\` knows about DST transitions. You can check whether a given time is in DST:

\`\`\`csharp
TimeZoneInfo eastern = TimeZoneInfo.FindSystemTimeZoneById("America/New_York");
DateTime march  = new DateTime(2026, 3, 26);
DateTime august = new DateTime(2026, 8, 1);

Console.WriteLine(eastern.IsDaylightSavingTime(march));  // True (DST active)
Console.WriteLine(eastern.IsDaylightSavingTime(august)); // True
\`\`\`

You can also list all adjustment rules to understand when transitions happen:

\`\`\`csharp
foreach (var rule in eastern.GetAdjustmentRules())
{
    Console.WriteLine($"DST start: {rule.DaylightTransitionStart.Month}/{rule.DaylightTransitionStart.Day}");
}
\`\`\`

---

## Common Timezone Mistakes

**Mistake 1: Storing local time in the database.** Always convert to UTC before persisting.

**Mistake 2: Hardcoding UTC offsets.** \`-5:00\` is not always Eastern time — DST changes it to \`-4:00\`. Use \`TimeZoneInfo\`, not manual offsets.

**Mistake 3: Using \`DateTime.Kind == Unspecified\`.** Before converting, make sure your \`DateTime\` has the correct \`Kind\`. Pass \`DateTime.SpecifyKind(dt, DateTimeKind.Utc)\` if needed.

**Mistake 4: Assuming the server timezone.** Never rely on \`TimeZone.CurrentTimeZone\` in server-side code. Always work with explicit timezone IDs.

---

## Listing Available Timezones

\`\`\`csharp
foreach (TimeZoneInfo tz in TimeZoneInfo.GetSystemTimeZones())
{
    Console.WriteLine($"{tz.Id} — {tz.DisplayName}");
}
\`\`\`

This enumerates every timezone the OS knows about — useful for building a timezone picker in a web app or API.
`,
};
