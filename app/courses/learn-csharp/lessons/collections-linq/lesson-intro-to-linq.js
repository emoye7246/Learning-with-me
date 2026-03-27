export const lessonIntroToLinq = {
  id: "intro-to-linq",
  title: "Intro to LINQ — Querying Collections",
  hasChallenge: false,
  article: `
## Intro to LINQ — Querying Collections

**LINQ** (Language Integrated Query) is one of C#'s most distinctive features. It gives you a consistent, expressive way to query and transform any collection — whether it's a list, array, database, XML document, or even a remote API response — using the same syntax.

Before LINQ, filtering a list meant writing \`foreach\` loops with \`if\` statements and manually building result lists. LINQ replaces that boilerplate with readable, declarative expressions.

### A Taste of What LINQ Can Do

Without LINQ:

\`\`\`csharp
List<int> numbers = new List<int> { 5, 2, 8, 1, 9, 3, 7, 4, 6 };
List<int> result = new List<int>();

foreach (int n in numbers)
{
    if (n > 4)
        result.Add(n);
}
result.Sort();
// result: {5, 6, 7, 8, 9}
\`\`\`

With LINQ:

\`\`\`csharp
using System.Linq;

List<int> result = numbers
    .Where(n => n > 4)
    .OrderBy(n => n)
    .ToList();
// result: {5, 6, 7, 8, 9}
\`\`\`

Same result, much less noise.

### Two Syntaxes: Method and Query

LINQ offers two equivalent syntaxes. You can use either — they compile to the same thing.

**Method syntax** (also called fluent syntax) chains extension methods:

\`\`\`csharp
var result = students
    .Where(s => s.Gpa >= 3.5)
    .OrderByDescending(s => s.Gpa)
    .Select(s => s.Name);
\`\`\`

**Query syntax** looks like SQL:

\`\`\`csharp
var result = from s in students
             where s.Gpa >= 3.5
             orderby s.Gpa descending
             select s.Name;
\`\`\`

Most C# developers prefer method syntax because it's more composable and all LINQ operations are available as methods. Query syntax is nicer for complex \`join\` and \`group by\` operations. This course focuses on method syntax.

### What You Need to Import

LINQ extension methods live in \`System.Linq\`:

\`\`\`csharp
using System.Linq;
\`\`\`

In .NET 6+ with implicit usings enabled, this is included automatically.

### The Core Concept: Extension Methods on IEnumerable<T>

LINQ works by extending \`IEnumerable<T>\`. This means LINQ methods are available on **any** type that implements \`IEnumerable<T>\` — arrays, lists, sets, dictionaries, and custom collections all work the same way.

\`\`\`csharp
int[] arr = { 1, 2, 3, 4, 5 };
List<int> list = new List<int> { 1, 2, 3, 4, 5 };
HashSet<int> set = new HashSet<int> { 1, 2, 3, 4, 5 };

// All three work identically with LINQ
int sumArr = arr.Sum();
int sumList = list.Sum();
int sumSet = set.Sum();
\`\`\`

### Deferred Execution

This is one of the most important concepts in LINQ: **most LINQ queries are not executed when you define them. They run when you iterate the results.**

\`\`\`csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

// This does NOT execute yet — it just defines the query
IEnumerable<int> query = numbers.Where(n => n > 2);

// Now add an item to the source
numbers.Add(10);

// NOW the query executes — and includes 10!
foreach (int n in query)
    Console.Write(n + " "); // 3 4 5 10
\`\`\`

Deferred execution means the query always reflects the current state of the source when it is iterated, not when it was defined. This is efficient — no unnecessary computation happens until you actually need the results.

**To force immediate execution**, use \`ToList()\`, \`ToArray()\`, or aggregation methods like \`Count()\`, \`Sum()\`:

\`\`\`csharp
// Executes immediately and stores results
List<int> snapshot = numbers.Where(n => n > 2).ToList();
\`\`\`

### Lambdas in LINQ

Most LINQ methods accept a **lambda expression** — an inline anonymous function:

\`\`\`csharp
// n => n > 4 is a lambda: takes an int n, returns bool
numbers.Where(n => n > 4)

// s => s.Name is a lambda: takes a Student, returns its Name string
students.Select(s => s.Name)
\`\`\`

The parameter name (like \`n\` or \`s\`) is just a variable — choose something meaningful. The type is inferred by the compiler.

### Summary

- LINQ provides a unified, expressive API for querying any \`IEnumerable<T>\` collection
- Two syntaxes exist: **method syntax** (preferred) and **query syntax** (SQL-like)
- Add \`using System.Linq;\` to access LINQ methods
- **Deferred execution**: most queries don't run until iterated — use \`ToList()\` or \`ToArray()\` to force immediate execution
- Lambda expressions are the building blocks of LINQ method calls
- The next lesson covers the most important LINQ operators in depth
`,
};
