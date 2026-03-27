export const lessonLoops = {
  id: "loops-cs",
  title: "Loops",
  hasChallenge: false,
  article: `
## Loops

Loops execute a block of code repeatedly. C# has four loop constructs, each suited for different situations. Knowing which to use — and why — is a practical skill.

---

## for Loop

Use \`for\` when you know exactly how many times to loop:

\`\`\`csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine($"Iteration {i}");
}
// Output: 0, 1, 2, 3, 4
\`\`\`

The three parts of the \`for\` header:
1. **Initializer** (\`int i = 0\`) — runs once before the loop starts
2. **Condition** (\`i < 5\`) — checked before each iteration; loop continues while true
3. **Iterator** (\`i++\`) — runs at the end of each iteration

Counting backward:
\`\`\`csharp
for (int i = 10; i >= 0; i--)
{
    Console.Write($"{i} ");
}
// Output: 10 9 8 7 6 5 4 3 2 1 0
\`\`\`

---

## foreach Loop

Use \`foreach\` to iterate over a collection. It's cleaner than a \`for\` loop with an index:

\`\`\`csharp
string[] fruits = { "apple", "banana", "cherry" };

foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
\`\`\`

\`foreach\` works on anything that implements \`IEnumerable\` — arrays, \`List<T>\`, \`Dictionary<K,V>\`, and most collections.

**You cannot modify the collection while iterating with \`foreach\`.** If you need to add or remove items during iteration, use a \`for\` loop or iterate over a copy.

---

## while Loop

Use \`while\` when you don't know how many iterations you need — you loop until a condition becomes false:

\`\`\`csharp
int n = 1;
while (n < 100)
{
    Console.Write($"{n} ");
    n *= 2;
}
// Output: 1 2 4 8 16 32 64
\`\`\`

The condition is checked before each iteration. If it's false initially, the body never runs.

---

## do-while Loop

Like \`while\`, but the condition is checked after each iteration — guaranteeing the body runs at least once:

\`\`\`csharp
string input;
do
{
    Console.Write("Enter a number: ");
    input = Console.ReadLine() ?? "";
}
while (!int.TryParse(input, out _));

Console.WriteLine("Valid number entered.");
\`\`\`

The classic use case: keep asking for input until the user provides valid data.

---

## break and continue

\`break\` exits the loop immediately:

\`\`\`csharp
for (int i = 0; i < 100; i++)
{
    if (i == 5)
        break; // stops at i = 5
    Console.WriteLine(i);
}
// Output: 0 1 2 3 4
\`\`\`

\`continue\` skips the rest of the current iteration and moves to the next:

\`\`\`csharp
for (int i = 0; i < 10; i++)
{
    if (i % 2 == 0)
        continue; // skip even numbers
    Console.Write($"{i} ");
}
// Output: 1 3 5 7 9
\`\`\`

---

## Nested Loops

Loops can be nested. A common use case is working with two-dimensional data:

\`\`\`csharp
for (int row = 1; row <= 3; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        Console.Write($"{row * col,4}");
    }
    Console.WriteLine();
}
// Output:
//    1   2   3
//    2   4   6
//    3   6   9
\`\`\`

\`break\` in a nested loop only exits the innermost loop.

---

## Infinite Loops

Sometimes you deliberately want a loop that runs until explicitly broken:

\`\`\`csharp
while (true)
{
    string? input = Console.ReadLine();
    if (input == "quit")
        break;
    Console.WriteLine($"You said: {input}");
}
\`\`\`

This is a legitimate pattern for REPL-style programs and event loops. Be sure there's always a path to the \`break\`.

---

## Choosing the Right Loop

| Situation | Use |
|---|---|
| Known number of iterations | \`for\` |
| Iterating a collection | \`foreach\` |
| Unknown iterations, check first | \`while\` |
| Unknown iterations, run at least once | \`do-while\` |

When in doubt between \`for\` and \`foreach\` for a collection, prefer \`foreach\` — it's more readable and less error-prone.

---

## What Comes Next

The next lesson covers arrays — ordered collections of fixed size that you'll use constantly as you work with sequences of data.
`,
};
