export const lessonScopeVariableLifetime = {
  id: "scope-variable-lifetime-cs",
  title: "Scope & Variable Lifetime",
  hasChallenge: false,
  article: `
## Scope & Variable Lifetime

Scope determines where a variable can be accessed. Lifetime determines how long a variable exists. Both concepts affect how you structure code and how you avoid subtle bugs.

---

## Block Scope

In C#, variables declared inside a block (\`{}\`) are only accessible within that block and any nested blocks:

\`\`\`csharp
{
    int x = 10;
    Console.WriteLine(x); // OK — inside the block
}
// Console.WriteLine(x); // Error: x doesn't exist here
\`\`\`

---

## Method Scope

Variables declared inside a method live for the duration of the method call:

\`\`\`csharp
void Process()
{
    int temp = CalculateSomething(); // temp created
    Console.WriteLine(temp);
    // temp's lifetime ends when method returns
}
\`\`\`

When the method returns, its local variables are gone. Calling the method again creates fresh variables with no memory of previous calls.

---

## Loop Variable Scope

Loop variables declared in a \`for\` statement are scoped to the loop:

\`\`\`csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i); // i accessible here
}
// Console.WriteLine(i); // Error: i doesn't exist here

// foreach variable is also block-scoped
foreach (string s in items)
{
    Console.WriteLine(s); // s accessible here
}
// Console.WriteLine(s); // Error
\`\`\`

---

## Nested Scope

Inner blocks can access variables from outer blocks:

\`\`\`csharp
int outerVar = 10;

for (int i = 0; i < 3; i++)
{
    int innerVar = i * outerVar;  // can access outerVar
    Console.WriteLine(innerVar);
}

// outerVar is still accessible here
// innerVar is not
\`\`\`

---

## Variable Shadowing

C# does not allow a local variable to shadow (hide) another local variable in the same scope chain:

\`\`\`csharp
int x = 5;
{
    // int x = 10; // Error: 'x' already defined in enclosing scope
}
\`\`\`

This is different from some other languages (like JavaScript) that allow shadowing. C# prevents it to avoid confusion.

However, class fields can be shadowed by local variables of the same name:

\`\`\`csharp
class MyClass
{
    int count = 0;

    void Method()
    {
        int count = 10;  // shadows the field 'count'
        Console.WriteLine(count);       // 10 — local variable
        Console.WriteLine(this.count);  // 0  — field (using 'this')
    }
}
\`\`\`

---

## Why Scope Matters for Correctness

Common scope-related bugs:

**1. Using a variable after a loop that no longer "persists"**

\`\`\`csharp
// Wrong — 'last' doesn't exist outside the foreach
foreach (int n in numbers)
{
    int last = n;
}
// Console.WriteLine(last); // Error!

// Correct — declare before the loop
int last = 0;
foreach (int n in numbers)
{
    last = n;
}
Console.WriteLine(last); // works — last is in outer scope
\`\`\`

**2. Assuming a loop variable retains its value**

\`\`\`csharp
for (int i = 0; i < 5; i++)
{
    // i is fresh at the start of each iteration — it doesn't "carry over" changes
}
\`\`\`

---

## Closures and Lambda Scope

When you use a lambda or local function that references a variable from an outer scope, that variable is "captured":

\`\`\`csharp
int multiplier = 3;
Func<int, int> triple = x => x * multiplier;  // captures 'multiplier'

Console.WriteLine(triple(5));  // 15

multiplier = 10;
Console.WriteLine(triple(5));  // 50 — captures the variable, not the value!
\`\`\`

The lambda captures a reference to \`multiplier\`, not its value at the time of capture. Changes to \`multiplier\` affect the lambda's behavior.

---

## What Comes Next

The next lesson covers the Visual Studio debugger — how to use breakpoints, step through code, and inspect state without relying on \`Console.WriteLine\` debugging.
`,
};
