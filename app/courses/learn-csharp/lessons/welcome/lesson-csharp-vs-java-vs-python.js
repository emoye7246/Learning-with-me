export const lessonCsharpVsJavaVsPython = {
  id: "csharp-vs-java-vs-python",
  title: "C# vs Java vs Python",
  hasChallenge: false,
  article: `
## C# vs Java vs Python

If you're coming from another language — or trying to decide where to invest your time — it helps to understand concretely what makes C# different from Java and Python.

These three languages are not interchangeable. They have different strengths, different ecosystems, and different use cases. Understanding those differences is practical knowledge, not trivia.

---

## C# vs Java

C# and Java are the most similar pair on this list. Both are:
- Statically typed
- Compiled to bytecode and run on a managed runtime (CLR vs JVM)
- Object-oriented with single inheritance and interfaces
- Garbage-collected
- Used heavily in enterprise software

But C# has evolved faster and more aggressively than Java. Modern C# includes features that Java lacks entirely or added years later:

| Feature | C# | Java |
|---|---|---|
| Records (immutable data classes) | C# 9 (2020) | Java 16 (2021) |
| Pattern matching | C# 7+ (rich, expanding) | Java 16+ (limited) |
| Nullable reference types | C# 8 (2019) | Via annotations only |
| async/await | C# 5 (2012) | No native equivalent |
| Properties | First-class syntax | Getter/setter methods |
| LINQ | Built-in query syntax | Streams (Java 8+) |
| Value types / structs | Yes | No (primitives only) |
| Top-level statements | C# 9+ | No |

The practical difference: C# code tends to be more concise than equivalent Java code. You write less boilerplate. The type system is more expressive. Async programming is built into the language rather than bolted on.

If you already know Java, C# will feel familiar but more modern.

---

## C# vs Python

Python and C# are more different than they first appear.

Python is dynamically typed. This means you can write code faster with less ceremony — but the type system won't catch errors until runtime, IDE support is weaker (no guaranteed type information), and large Python codebases become harder to maintain over time.

C# is statically typed. The compiler catches type errors before you run the code. IDEs can provide accurate autocomplete, refactoring, and navigation because they know the type of every expression.

\`\`\`python
# Python — no type information, works fine until it doesn't
def add(a, b):
    return a + b

add("hello", 5)  # Runtime error: can't add str and int
\`\`\`

\`\`\`csharp
// C# — compiler catches this before you run it
int Add(int a, int b) => a + b;

Add("hello", 5); // Compile error: cannot convert string to int
\`\`\`

Python is dominant in data science, ML research, and scripting. C# is dominant in enterprise applications, game development, and Windows ecosystems. They rarely compete for the same jobs.

The performance difference is also real: C# is typically 10–50x faster than Python for compute-intensive tasks. This matters in game loops, financial calculations, and data processing pipelines.

---

## Which Should You Learn?

The honest answer is that the question is usually wrong. You should learn the language that matches the work you want to do:

- **Game development with Unity** → C#, no contest
- **Enterprise Windows/Azure software** → C#
- **Web APIs on the Microsoft stack** → C#
- **Data science and ML research** → Python
- **Android app development** → Kotlin (or Java)
- **Cross-platform backend at non-Microsoft companies** → Java or Go

If you're here, C# is probably already the right choice for your goals. This course will give you the foundation to use it professionally.

---

## What Comes Next

The next lesson explains the .NET runtime — what it is, how it works, and why it matters for how you write and deploy C# programs.
`,
};
