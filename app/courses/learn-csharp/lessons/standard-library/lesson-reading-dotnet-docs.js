export const lessonReadingDotnetDocs = {
  id: "reading-dotnet-docs",
  title: "How to Read the .NET API Documentation",
  hasChallenge: false,
  article: `
## How to Read the .NET API Documentation

The ability to read official documentation independently is what separates developers who constantly need help from developers who can solve their own problems. Microsoft's .NET documentation is comprehensive, well-maintained, and freely available. Learning to navigate it efficiently is a skill you will use every day.

---

## Where to Find It

The primary documentation site is **learn.microsoft.com**. The .NET API browser lives at:

\`\`\`bash
https://learn.microsoft.com/en-us/dotnet/api/
\`\`\`

You can search directly from the URL:

\`\`\`bash
https://learn.microsoft.com/en-us/dotnet/api/system.datetime
https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1
https://learn.microsoft.com/en-us/dotnet/api/system.text.stringbuilder
\`\`\`

The search box at the top of the site works well. Most developers just type "dotnet [ClassName]" into a browser and the docs come up in the first result.

---

## Reading a Type Page

Every type page follows the same structure. Let's use \`Dictionary<TKey, TValue>\` as an example.

**Definition block** — at the top, you'll see the namespace, assembly, and the type signature:

\`\`\`csharp
public class Dictionary<TKey, TValue> :
    IDictionary<TKey, TValue>,
    IReadOnlyDictionary<TKey, TValue>,
    // ...
\`\`\`

This tells you what interfaces it implements — which means what you can use it as. If it implements \`IEnumerable<T>\`, you can use it with LINQ and \`foreach\`.

**Type Parameters** — generic parameters like \`TKey\` and \`TValue\` are explained with constraints. If you see \`where TKey : IComparable\`, that means TKey must implement that interface.

**Constructors** — lists all ways to instantiate the type.

**Properties** — readable state on the object (\`Count\`, \`Keys\`, \`Values\`).

**Methods** — available operations. This is usually the longest section. Methods are listed with their signatures — pay attention to:
- Return type (what do you get back?)
- Parameters (what do you pass in?)
- Whether it's \`static\` or instance

---

## The Remarks Section

The **Remarks** section is the most valuable part of any documentation page. It's where authors explain:

- When to use this type vs. alternatives
- Important thread-safety notes
- Performance characteristics
- Common pitfalls

For example, the \`Dictionary\` Remarks section explains that it is not thread-safe, and points you to \`ConcurrentDictionary\` if you need thread safety. The \`StringBuilder\` Remarks explain the capacity-doubling growth strategy.

**Always read the Remarks section before using an unfamiliar type in production code.**

---

## The Examples Section

Every well-documented type has an Examples section with runnable code. These are not toy snippets — they demonstrate real usage patterns:

\`\`\`csharp
// From the DateTime docs:
DateTime date1 = new DateTime(2008, 1, 2, 6, 30, 15);

Console.WriteLine(date1.ToString("F"));
// Wednesday, January 02, 2008 6:30:15 AM

Console.WriteLine(date1.ToString("G"));
// 1/2/2008 6:30:15 AM
\`\`\`

Copy these, run them, modify them. The fastest way to understand a type is to play with the official examples.

---

## Navigating Overloads

Many methods have multiple overloads. The docs list them all. For example, \`String.Format\` has overloads that accept different numbers of arguments, a custom \`IFormatProvider\`, or a \`ReadOnlySpan<char>\`.

The overload list is shown in a table. Click each one to see its specific documentation. Look at the parameter descriptions — they explain exactly what each argument does and what values are valid.

---

## Source on GitHub

At the top-right of most API pages, there's a "View Source" or "GitHub" link that takes you directly to the .NET runtime source code. Reading the actual implementation teaches you things the docs don't say:

- How a method handles edge cases internally
- Whether an exception is thrown or silently handled
- What the default capacity of a collection is

The .NET runtime is open source at \`github.com/dotnet/runtime\`. Searching it with GitHub's code search is faster than trying to navigate the folder structure.

---

## Version Filtering

The docs cover multiple .NET versions. Use the **Version** dropdown at the top of the page to filter for the version you're targeting. Some APIs exist only in .NET 6+, some were added in .NET 8. This is especially important for:

- \`Random.Shared\` (added in .NET 6)
- \`TimeZoneInfo.TryFindSystemTimeZoneById\` (added in .NET 6)
- Raw string literals (C# 11)

If an API doesn't exist in your version, the docs will tell you when it was introduced.

---

## Searching Effectively

When you're looking for something specific:

- Search for the **type name** when you know the class: \`StringBuilder\`
- Search for the **method name** when you know what you want to do: \`string split\`
- Search by **concept** when you don't know what class to use: \`.NET read file lines\`

The search at learn.microsoft.com weights official docs highly. For community discussion and edge cases, combine docs reading with Stack Overflow searches — but always verify against the official source.

---

## Building the Habit

The best developers don't memorize APIs — they know where to look. When you encounter an unfamiliar class, your workflow should be:

1. Open the type's docs page
2. Read the summary (what is this for?)
3. Read the Remarks (what should I know before using it?)
4. Look at the Examples (how is it used in practice?)
5. Find the specific method you need and read its parameters and return type

This takes 2–3 minutes and will save you hours of debugging.
`,
};
