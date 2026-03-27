export const lessonTypeCasting = {
  id: "type-casting-cs",
  title: "Type Casting",
  hasChallenge: false,
  article: `
## Type Casting

Type casting converts a value from one type to another. C# is strongly typed, so you often need to be explicit about these conversions. Understanding when they're safe and when they can lose data prevents subtle bugs.

---

## Implicit Conversions

Implicit conversions happen automatically when there is no risk of data loss. The type system allows them without any explicit cast syntax:

\`\`\`csharp
int i = 42;
long l = i;        // int fits in long — implicit, safe
double d = i;      // int fits in double — implicit, safe
float f = i;       // int fits in float — implicit, safe
\`\`\`

The rule: implicit conversions are allowed when the target type can represent all values of the source type.

---

## Explicit Casts

When a conversion might lose data, you must use an explicit cast with \`(type)\`:

\`\`\`csharp
double d = 9.99;
int i = (int)d;    // truncates, not rounds — i = 9

long bigNumber = 3000000000L;
int small = (int)bigNumber;  // might overflow!

double price = 19.995;
int rounded = (int)Math.Round(price);  // 20 — round first, then cast
\`\`\`

The explicit cast is your statement to the compiler: "I know this might lose precision or overflow. I accept that."

---

## Numeric Widening vs Narrowing

**Widening** (safe, implicit): converting from a smaller type to a larger type
- \`int\` → \`long\` → \`double\`
- \`float\` → \`double\`

**Narrowing** (potentially unsafe, requires explicit cast): converting from a larger type to a smaller type
- \`double\` → \`int\`
- \`long\` → \`int\`
- \`double\` → \`float\`

---

## Convert Class

The \`System.Convert\` class provides type conversions with explicit overflow checking and null handling:

\`\`\`csharp
string s = "42";
int n = Convert.ToInt32(s);        // parses string to int
double d = Convert.ToDouble("3.14");
bool b = Convert.ToBoolean(1);     // true
string str = Convert.ToString(42); // "42"
\`\`\`

\`Convert.ToInt32\` rounds (to nearest even) rather than truncating, unlike a raw cast:

\`\`\`csharp
double d = 9.99;
int a = (int)d;                    // 9 — truncates
int b = Convert.ToInt32(d);        // 10 — rounds
int c = (int)Math.Round(d);        // 10 — rounds explicitly
\`\`\`

---

## Casting Reference Types

For reference types (objects), casting works differently:

\`\`\`csharp
object obj = "hello";

// Direct cast — throws InvalidCastException if wrong type
string s = (string)obj;

// Safe cast with as — returns null if wrong type
string? safe = obj as string;

// Pattern matching (preferred modern approach)
if (obj is string text)
{
    Console.WriteLine(text.Length);
}
\`\`\`

Use \`as\` when you're not sure if the cast will succeed. Use a direct cast only when you're certain.

---

## ToString() and Parse()

Every type in C# has a \`ToString()\` method inherited from \`object\`:

\`\`\`csharp
int n = 42;
string s = n.ToString();        // "42"
string hex = n.ToString("X");   // "2A" (hexadecimal)
string formatted = n.ToString("D5"); // "00042" (5 digits, zero-padded)

double pi = 3.14159;
string p = pi.ToString("F2");   // "3.14" (2 decimal places)
\`\`\`

Parsing strings back to numeric types:

\`\`\`csharp
int parsed = int.Parse("42");
double d = double.Parse("3.14");
bool b = bool.Parse("true");

// Safe versions
if (int.TryParse("abc", out int result))
    Console.WriteLine(result);
else
    Console.WriteLine("Not a number");
\`\`\`

---

## Checked and Unchecked Arithmetic

By default, integer overflow is silent (wraps around). Use \`checked\` to make it throw:

\`\`\`csharp
int max = int.MaxValue;

int unchecked_result = max + 1;    // -2147483648 (silent overflow)

try
{
    int checked_result = checked(max + 1);  // OverflowException
}
catch (OverflowException)
{
    Console.WriteLine("Overflow detected!");
}
\`\`\`

---

## What Comes Next

The next three lessons are mini-projects — small complete programs that practice everything you've learned in the fundamentals module. Start with the Number Guessing Game.
`,
};
