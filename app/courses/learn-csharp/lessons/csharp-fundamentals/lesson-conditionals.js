export const lessonConditionals = {
  id: "conditionals-cs",
  title: "Conditionals",
  hasChallenge: false,
  article: `
## Conditionals

Conditionals let your program make decisions — execute different code depending on whether a condition is true or false. Without conditionals, a program would do the same thing every time, regardless of input or state.

---

## if / else if / else

\`\`\`csharp
int score = 85;

if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else if (score >= 70)
{
    Console.WriteLine("Grade: C");
}
else
{
    Console.WriteLine("Grade: F");
}
\`\`\`

Output: \`Grade: B\`

Each condition is evaluated in order from top to bottom. As soon as one is true, its block executes and the rest are skipped.

---

## Braces Are Required for Multiple Statements

\`\`\`csharp
// Single statement — braces optional (but recommended)
if (score > 50)
    Console.WriteLine("Pass");

// Multiple statements — braces required
if (score > 50)
{
    Console.WriteLine("Pass");
    Console.WriteLine("Well done!");
}
\`\`\`

Skipping braces for single-statement \`if\` bodies is a common source of bugs when you later add a second statement. Many style guides require braces always.

---

## The Ternary Operator

For simple if/else assignments, the ternary operator is concise:

\`\`\`csharp
string result = score >= 60 ? "Pass" : "Fail";
Console.WriteLine(result);
\`\`\`

This is equivalent to:
\`\`\`csharp
string result;
if (score >= 60)
    result = "Pass";
else
    result = "Fail";
\`\`\`

Use the ternary when the expression is simple and the intent is clear. Don't nest ternaries — it becomes unreadable.

---

## switch Statement

\`switch\` compares a value against multiple constant cases:

\`\`\`csharp
int day = 3;

switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    case 6:
    case 7:
        Console.WriteLine("Weekend");
        break;
    default:
        Console.WriteLine("Unknown day");
        break;
}
\`\`\`

The \`break\` is required at the end of each case in C# (unlike C/C++ where fall-through is silent). The \`default\` case handles values that don't match any case.

---

## switch Expressions (C# 8+)

Modern C# has a more concise switch expression syntax:

\`\`\`csharp
string dayName = day switch
{
    1 => "Monday",
    2 => "Tuesday",
    3 => "Wednesday",
    4 => "Thursday",
    5 => "Friday",
    6 or 7 => "Weekend",
    _ => "Unknown"
};

Console.WriteLine(dayName);
\`\`\`

The \`_\` is the discard pattern — it matches anything, serving as the default case. Switch expressions are an expression (they produce a value) rather than a statement.

---

## Pattern Matching in Conditions

C# supports rich pattern matching in \`if\` and \`switch\`:

\`\`\`csharp
object value = 42;

if (value is int n)
{
    Console.WriteLine($"It's an int: {n}");
}

// With type patterns and guards in switch
string Describe(object obj) => obj switch
{
    int n when n < 0 => "negative integer",
    int n when n == 0 => "zero",
    int n => $"positive integer: {n}",
    string s => $"string of length {s.Length}",
    null => "null",
    _ => "something else"
};
\`\`\`

---

## Null Checks

With nullable reference types enabled, null checks are common:

\`\`\`csharp
string? name = GetName(); // might return null

if (name is null)
{
    Console.WriteLine("No name provided");
}
else
{
    Console.WriteLine($"Hello, {name}!");
}

// Modern null check syntax
if (name is not null)
{
    Console.WriteLine(name.Length);
}
\`\`\`

Prefer \`is null\` and \`is not null\` over \`== null\` and \`!= null\` — they're clearer and work correctly with operator overloading.

---

## What Comes Next

The next lesson covers loops — \`for\`, \`foreach\`, \`while\`, and \`do-while\` — for repeating code a specified number of times or until a condition changes.
`,
};
