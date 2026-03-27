export const lessonReadingExceptionStackTraces = {
  id: "reading-exception-stack-traces",
  title: "Reading Exception Stack Traces",
  hasChallenge: false,
  article: `
## Reading Exception Stack Traces

When a .NET program throws an unhandled exception, it prints a stack trace to the console. Most beginners see this output and panic. Experienced developers read it directly to the source of the problem. This lesson teaches you to read it.

---

## A Real Stack Trace

\`\`\`
Unhandled exception. System.NullReferenceException: Object reference not set to an instance of an object.
   at UserProcessor.ProcessUser(User user) in /app/UserProcessor.cs:line 24
   at Program.Main() in /app/Program.cs:line 12
\`\`\`

Let's read this from top to bottom.

---

## Line 1: The Exception Type and Message

\`\`\`
System.NullReferenceException: Object reference not set to an instance of an object.
\`\`\`

- **\`System.NullReferenceException\`** — the full type name of the exception. This tells you what went wrong conceptually: something that should have been an object was null.
- **The message** — "Object reference not set to an instance of an object." This is the built-in message for NullReferenceException.

---

## The Stack Frames

\`\`\`
   at UserProcessor.ProcessUser(User user) in /app/UserProcessor.cs:line 24
   at Program.Main() in /app/Program.cs:line 12
\`\`\`

Each \`at\` line is a **stack frame** — a method call that was active when the exception occurred.

**Read from top to bottom:** The topmost frame is where the exception actually happened. The frames below it are the call chain that led there.

- **Frame 1:** The exception was thrown in \`ProcessUser\`, at line 24 of \`UserProcessor.cs\`
- **Frame 2:** \`ProcessUser\` was called by \`Main\`, at line 12 of \`Program.cs\`

**Go directly to line 24 of UserProcessor.cs.** That is where the error occurred.

---

## More Complex Stack Trace

\`\`\`
Unhandled exception. System.IndexOutOfRangeException: Index was outside the bounds of the array.
   at Analyzer.FindPeak(Int32[] data) in /src/Analyzer.cs:line 47
   at ReportGenerator.GenerateReport(String path) in /src/ReportGenerator.cs:line 33
   at Program.<Main>$(String[] args) in /src/Program.cs:line 8
\`\`\`

Reading this:
1. An \`IndexOutOfRangeException\` occurred
2. It happened in \`Analyzer.FindPeak\` at line 47 of Analyzer.cs — **start here**
3. That method was called from \`ReportGenerator.GenerateReport\` at line 33
4. Which was called from \`Main\` at line 8

The investigation begins at line 47 of Analyzer.cs. You're looking for an array index that's out of range.

---

## Inner Exceptions

Some exceptions wrap other exceptions. The output includes the inner exception separately:

\`\`\`
System.InvalidOperationException: Database operation failed.
 ---> System.Data.SqlClient.SqlException: Invalid column name 'UserNam'.
   at SqlCommand.ExecuteReader() ...
   at DatabaseService.GetUser(Int32 id) in /src/DatabaseService.cs:line 89
   --- End of inner exception stack trace ---
   at DatabaseService.GetUser(Int32 id) in /src/DatabaseService.cs:line 92
   at UserController.GetUser(Int32 id) in /src/UserController.cs:line 34
\`\`\`

The inner exception (\`SqlException\`) is the root cause — a typo in a column name. The outer exception (\`InvalidOperationException\`) is what your code caught and re-threw. Focus on the innermost exception and its stack trace.

---

## Async Stack Traces

In async code, stack traces may look different due to how async/await works:

\`\`\`
System.Net.Http.HttpRequestException: Connection refused
   at HttpClient.SendAsync(HttpRequestMessage, CancellationToken)
   at WeatherService.GetForecastAsync(String city) in /src/WeatherService.cs:line 22
   at Program.<Main>$(String[] args) in /src/Program.cs:line 5
\`\`\`

Modern .NET (5+) does a good job of preserving meaningful async stack traces. If a trace looks cut off, look for the innermost frame that points to your code.

---

## Practical Workflow

1. **Exception type** — tells you the category of error
2. **Message** — sometimes gives the specific cause (e.g., "Value cannot be null. (Parameter 'name')")
3. **Top stack frame** — the exact line where it failed
4. **Go to that line** — read the code and reason about what could be null/out-of-range/invalid

If the top frame is in .NET library code (e.g., \`System.IO.FileStream\`), look at the next frame down that's in your code. That's where the problem originated.

---

## What Comes Next

The next lesson covers refactoring — how to improve code clarity and structure without changing what the program does.
`,
};
