export const lessonOperatorsAndMath = {
  id: "operators-and-math-cs",
  title: "Operators & Math",
  hasChallenge: false,
  article: `
## Operators & Math

Operators are the symbols that express computations in C#. This lesson covers arithmetic, comparison, logical, and assignment operators — the building blocks of all logic.

---

## Arithmetic Operators

\`\`\`csharp
int a = 17;
int b = 5;

Console.WriteLine(a + b);   // 22 — addition
Console.WriteLine(a - b);   // 12 — subtraction
Console.WriteLine(a * b);   // 85 — multiplication
Console.WriteLine(a / b);   // 3  — integer division (truncates!)
Console.WriteLine(a % b);   // 2  — modulo (remainder)
\`\`\`

**Important:** Integer division truncates, not rounds. \`17 / 5\` is \`3\`, not \`3.4\`. To get a decimal result, at least one operand must be a floating-point type:

\`\`\`csharp
Console.WriteLine(17.0 / 5);    // 3.4
Console.WriteLine((double)a / b); // 3.4 (explicit cast)
\`\`\`

---

## Increment and Decrement

\`\`\`csharp
int x = 5;
x++;        // x is now 6 (post-increment)
x--;        // x is now 5 (post-decrement)
++x;        // x is now 6 (pre-increment)
--x;        // x is now 5 (pre-decrement)
\`\`\`

The difference between pre and post matters when the result is used in an expression:

\`\`\`csharp
int a = 5;
int b = a++;  // b = 5, a = 6 (b gets the value BEFORE increment)
int c = ++a;  // c = 7, a = 7 (c gets the value AFTER increment)
\`\`\`

---

## Compound Assignment

\`\`\`csharp
int n = 10;
n += 5;   // n = 15 (same as n = n + 5)
n -= 3;   // n = 12
n *= 2;   // n = 24
n /= 4;   // n = 6
n %= 4;   // n = 2
\`\`\`

---

## Comparison Operators

These return \`bool\` values (\`true\` or \`false\`):

\`\`\`csharp
int x = 10, y = 20;

x == y   // false — equal to
x != y   // true  — not equal to
x < y    // true  — less than
x > y    // false — greater than
x <= y   // true  — less than or equal
x >= y   // false — greater than or equal
\`\`\`

---

## Logical Operators

\`\`\`csharp
bool a = true, b = false;

a && b   // false — AND (both must be true)
a || b   // true  — OR (at least one must be true)
!a       // false — NOT (inverts the value)
\`\`\`

**Short-circuit evaluation:** \`&&\` and \`||\` short-circuit. In \`a && b\`, if \`a\` is false, \`b\` is never evaluated. In \`a || b\`, if \`a\` is true, \`b\` is never evaluated.

\`\`\`csharp
string name = null;
if (name != null && name.Length > 0)
{
    // safe — .Length is only accessed if name is not null
}
\`\`\`

---

## The Math Class

The \`System.Math\` class provides common mathematical functions:

\`\`\`csharp
Math.Abs(-5)          // 5 — absolute value
Math.Max(3, 7)        // 7 — maximum
Math.Min(3, 7)        // 3 — minimum
Math.Pow(2, 10)       // 1024.0 — power
Math.Sqrt(144)        // 12.0 — square root
Math.Round(3.567, 2)  // 3.57 — round to 2 decimal places
Math.Floor(3.9)       // 3.0 — round down
Math.Ceiling(3.1)     // 4.0 — round up
Math.PI               // 3.14159... — constant
Math.E                // 2.71828... — Euler's number
\`\`\`

---

## Integer Overflow

By default, integer overflow wraps around silently:

\`\`\`csharp
int max = int.MaxValue; // 2,147,483,647
int overflow = max + 1; // wraps to -2,147,483,648 (no error!)
\`\`\`

To catch overflow:

\`\`\`csharp
checked
{
    int result = max + 1; // throws OverflowException
}
\`\`\`

Use \`long\` when you need larger integers, or \`checked\` blocks when overflow must be an error.

---

## Decimal for Money

Never use \`double\` or \`float\` for monetary values — they have floating-point representation errors:

\`\`\`csharp
double price = 0.1 + 0.2;
Console.WriteLine(price); // 0.30000000000000004 — wrong!

decimal total = 0.1m + 0.2m;
Console.WriteLine(total); // 0.3 — correct
\`\`\`

The \`m\` suffix creates a \`decimal\` literal. Use \`decimal\` for all financial calculations.

---

## What Comes Next

The next lesson covers conditionals — \`if\`, \`else\`, \`switch\`, and the ternary operator — the structures that control which code executes based on logic.
`,
};
