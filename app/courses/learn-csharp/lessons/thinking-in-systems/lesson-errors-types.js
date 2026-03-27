export const lessonErrorsTypes = {
  id: "errors-types-cs",
  title: "Types of Errors",
  hasChallenge: false,
  article: `
## Types of Errors

Not all errors are the same. Understanding the three categories of errors — compile-time, runtime, and logic — helps you approach each one correctly.

---

## Compile-Time Errors

Compile-time errors are caught by the C# compiler before your program runs. They prevent the program from being built at all.

\`\`\`csharp
int x = "hello";   // CS0029: Cannot implicitly convert type 'string' to 'int'
Console.WriteLin(); // CS0117: 'Console' does not contain a definition for 'WriteLin'
int y = x +;       // CS1003: Syntax error, '}' expected (actually a parse error)
\`\`\`

**How to fix them:** Read the error message. The compiler tells you:
- The error code (e.g., \`CS0029\`)
- The file and line number
- What it found and what it expected

The error code can be searched online for a full explanation. The line number in the error is where the compiler noticed the problem — the root cause may be one or two lines before.

**The key point:** Compile-time errors are the safest kind. Your program can't run with them. Fix them before moving on.

---

## Runtime Errors (Exceptions)

Runtime errors occur while the program is running — the code compiled fine, but something went wrong during execution.

\`\`\`csharp
int[] numbers = { 1, 2, 3 };
Console.WriteLine(numbers[10]); // IndexOutOfRangeException

string? name = null;
Console.WriteLine(name.Length); // NullReferenceException

int result = int.Parse("abc");  // FormatException
\`\`\`

C# signals runtime errors by **throwing exceptions** — objects that carry information about what went wrong.

**Common runtime exceptions:**

| Exception | Typical Cause |
|---|---|
| \`NullReferenceException\` | Calling a method/property on null |
| \`IndexOutOfRangeException\` | Array/string index out of bounds |
| \`FormatException\` | Parsing a string that isn't the expected format |
| \`InvalidCastException\` | Casting an object to an incompatible type |
| \`DivideByZeroException\` | Integer division by zero |
| \`StackOverflowException\` | Infinite recursion |
| \`FileNotFoundException\` | Trying to open a file that doesn't exist |

**How to fix them:** Read the exception type and message, then look at the stack trace (covered in the next lesson) to find the exact line that threw it.

---

## Logic Errors

Logic errors are the hardest category. The program compiles and runs without throwing an exception, but produces the wrong output.

\`\`\`csharp
// Intended to calculate average
int[] scores = { 90, 85, 78 };
int sum = 0;
for (int i = 0; i <= scores.Length; i++)  // Bug: should be <, not <=
    sum += scores[i];
// This actually throws IndexOutOfRangeException at i = 3
// But if the condition were i < scores.Length and we forgot /3:
double average = sum;  // should be sum / scores.Length
\`\`\`

\`\`\`csharp
// Logic error: off-by-one in condition
bool IsAdult(int age) => age > 18;  // should be >= 18
// Returns false for 18-year-olds — wrong but no exception
\`\`\`

**How to fix them:** Trace the execution. The program does exactly what you told it to do — it's your logic that's wrong. Testing with known inputs helps isolate where the incorrect behavior first appears.

---

## The Relationship Between Error Types

In practice, fixing a runtime error sometimes reveals a logic error. Fixing a logic error requires understanding what the code actually does vs what you intended.

The progression from learner to professional largely involves getting better at quickly identifying which type of error you're dealing with and applying the right investigation technique for each.

---

## Warnings vs Errors

The C# compiler produces two levels of messages:

**Errors** (CS prefix followed by a number): prevent compilation. Must be fixed.

**Warnings** (also CS prefix): code compiles, but the compiler has noticed something suspicious. Warnings you should take seriously:
- Possible null reference dereference
- Variable assigned but never used
- Unreachable code
- Missing \`await\` on async method

Modern C# projects often treat all warnings as errors (\`<TreatWarningsAsErrors>true</TreatWarningsAsErrors>\`) to force clean code.

---

## What Comes Next

The next lesson covers exception stack traces — how to read them, what every line means, and how to use them to find the source of a runtime error.
`,
};
