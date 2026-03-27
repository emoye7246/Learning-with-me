export const lessonRefactoringCodeClarity = {
  id: "refactoring-code-clarity-cs",
  title: "Refactoring for Code Clarity",
  hasChallenge: false,
  article: `
## Refactoring for Code Clarity

Refactoring is the process of improving the structure of code without changing its behavior. It's one of the most valuable skills a developer can have, because code is read far more often than it's written.

---

## Why Refactoring Matters

Code that works is not necessarily good code. Consider:

\`\`\`csharp
// Version 1 — works, but hard to read
int r = 0;
for(int i=0;i<a.Length;i++){if(a[i]%2==0)r+=a[i];}
return r;
\`\`\`

\`\`\`csharp
// Version 2 — same behavior, much clearer
int sumOfEvens = 0;
foreach (int number in numbers)
{
    if (number % 2 == 0)
        sumOfEvens += number;
}
return sumOfEvens;
\`\`\`

Both versions produce identical results. The second version takes thirty seconds to understand. The first one requires careful reading and mental parsing.

---

## Extract Method

The most common refactoring: moving a block of code into a named method.

**Before:**
\`\`\`csharp
Console.Write("Enter age: ");
int age;
while (!int.TryParse(Console.ReadLine(), out age) || age < 0 || age > 120)
{
    Console.WriteLine("Please enter a valid age (0-120).");
    Console.Write("Enter age: ");
}
\`\`\`

**After:**
\`\`\`csharp
int age = ReadValidAge();

int ReadValidAge()
{
    while (true)
    {
        Console.Write("Enter age: ");
        if (int.TryParse(Console.ReadLine(), out int age) && age >= 0 && age <= 120)
            return age;
        Console.WriteLine("Please enter a valid age (0-120).");
    }
}
\`\`\`

The method has a name that describes what it does. The caller doesn't need to understand the details.

---

## Rename for Clarity

Variable, method, and class names should describe their purpose:

\`\`\`csharp
// Hard to understand
int x = GetD(s, t);
bool f = x > 3;

// Clear
int delaySeconds = GetDelay(startTime, endTime);
bool isSignificantDelay = delaySeconds > 3;
\`\`\`

Use your IDE's rename refactoring (\`F2\` in both VS Code and Visual Studio) — it renames all references simultaneously.

---

## Remove Magic Numbers

A magic number is a literal value in code whose meaning isn't obvious:

\`\`\`csharp
// Magic number — what does 86400 mean?
if (elapsed > 86400)
    NotifyUser();

// Named constant — obvious
const int SecondsPerDay = 86400;
if (elapsed > SecondsPerDay)
    NotifyUser();
\`\`\`

---

## Simplify Conditionals

Long chains of conditions become hard to read:

\`\`\`csharp
// Before
if (user != null && user.IsActive && user.Age >= 18 && !user.IsBanned)
{
    AllowAccess();
}

// After — extract the meaning
bool CanAccess(User user) =>
    user != null &&
    user.IsActive &&
    user.Age >= 18 &&
    !user.IsBanned;

if (CanAccess(user))
{
    AllowAccess();
}
\`\`\`

---

## Guard Clauses

Deeply nested code is hard to read. Guard clauses return early for invalid conditions, keeping the happy path at the lowest nesting level:

\`\`\`csharp
// Before — arrow-shaped nesting
void ProcessOrder(Order? order)
{
    if (order != null)
    {
        if (order.Items.Count > 0)
        {
            if (order.Total > 0)
            {
                // actual logic here
            }
        }
    }
}

// After — guard clauses
void ProcessOrder(Order? order)
{
    if (order is null) return;
    if (order.Items.Count == 0) return;
    if (order.Total <= 0) return;

    // actual logic here — at zero nesting
}
\`\`\`

---

## The Boy Scout Rule

Leave code cleaner than you found it. When you're working in a method or class, if you notice a variable with a bad name or a method that could be extracted, do it. Small improvements compound over time.

Refactoring is not a separate phase — it's part of the normal development process. Write it to work, then improve the structure before moving on.

---

## What Comes Next

The final lesson in this module covers problem decomposition — how to break a large, undefined problem into specific, solvable pieces.
`,
};
