export const lessonHelloWorldEveryToken = {
  id: "hello-world-every-token",
  title: "Hello World: Every Token Explained",
  hasChallenge: false,
  article: `
## Hello World: Every Token Explained

Most courses show you Hello World and immediately move on. This one doesn't. Every token in a Hello World program carries meaning, and understanding that meaning now prevents confusion later.

---

## The Program

\`\`\`csharp
Console.WriteLine("Hello, World!");
\`\`\`

This is a modern C# Hello World using top-level statements. One line. But every part of it is deliberate.

---

## Breaking It Down

**\`Console\`**

\`Console\` is a **class** in the .NET Base Class Library — specifically in the \`System\` namespace. A class is a named container for related functionality. \`Console\` contains methods for reading input from and writing output to the terminal.

Because of Implicit Usings (enabled in modern .csproj files), you don't need to write \`System.Console\` — the \`System\` namespace is automatically imported.

**\`.\`** (dot)

The dot operator accesses a member of a class or object. \`Console.WriteLine\` means: "access the \`WriteLine\` member of the \`Console\` class."

**\`WriteLine\`**

This is a **method** — a named block of code that performs an action. Specifically, \`WriteLine\` writes its argument to the standard output stream (the terminal), followed by a newline character.

There is also \`Console.Write\` — the same thing, but without the newline at the end.

**\`(\`** and **\`)\`**

Parentheses in this position indicate a **method call**. Everything between them is an **argument** passed to the method.

**\`"Hello, World!"\`**

This is a **string literal** — a sequence of characters surrounded by double quotes. In C#, string literals use double quotes (single quotes are for \`char\` values, not strings).

The value \`"Hello, World!"\` is passed as the argument to \`WriteLine\`, which prints it to the terminal.

**\`;\`** (semicolon)

In C#, most statements end with a semicolon. The semicolon tells the compiler "this statement is complete." Forgetting it is one of the most common errors beginners make, and the compiler will catch it immediately with a clear error message.

---

## The Older Form

Before C# 9 introduced top-level statements, Hello World required more boilerplate:

\`\`\`csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
\`\`\`

You may encounter this form in older tutorials, textbooks, and enterprise codebases. Every element has meaning:

- **\`using System;\`** — imports the \`System\` namespace so you can write \`Console\` instead of \`System.Console\`
- **\`namespace HelloWorld\`** — declares that the code in the block belongs to the \`HelloWorld\` namespace
- **\`class Program\`** — declares a class named \`Program\`
- **\`static void Main(string[] args)\`** — the entry point method; \`static\` means it belongs to the class, not an instance; \`void\` means it returns nothing; \`string[] args\` are the command-line arguments
- **\`{ }\`** — curly braces define a block of code

Modern C# hides this boilerplate with top-level statements. But the structure still exists — the compiler generates it for you from your top-level statements.

---

## A Slightly More Complex Program

\`\`\`csharp
string greeting = "Hello";
string name = "Alice";
int year = 2025;

Console.WriteLine($"{greeting}, {name}! The year is {year}.");
Console.WriteLine("That's all.");
\`\`\`

Output:
\`\`\`
Hello, Alice! The year is 2025.
That's all.
\`\`\`

New tokens here:
- **\`string\`** — a data type for text
- **\`int\`** — a data type for integers
- **\`=\`** — assignment operator (gives a value to a variable)
- **\`$"..."\`** — a string interpolation prefix; \`{expression}\` inside it is evaluated and inserted into the string

---

## What Comes Next

The next lesson covers variables, types, and declarations — the foundation of every C# program.
`,
};
