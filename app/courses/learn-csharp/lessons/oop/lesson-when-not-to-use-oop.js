export const lessonWhenNotToUseOop = {
  id: "when-not-to-use-oop-cs",
  title: "When NOT to Use OOP",
  hasChallenge: false,
  article: `
## When NOT to Use OOP

Object-oriented programming is a powerful tool — but it's not the right tool for every job. One of the marks of an experienced developer is knowing when *not* to use the patterns they've learned. This lesson is about developing that pragmatic judgment.

### The Over-Engineering Trap

Beginners who have just learned OOP often fall into a trap: they reach for classes and objects everywhere, even when a simple function would do. This is called **over-engineering**, and it makes code harder to read, not easier.

Here's an over-engineered "Hello, World!":

\`\`\`csharp
class MessageFormatter
{
    private readonly string _template;

    public MessageFormatter(string template)
    {
        _template = template;
    }

    public string Format(string name) => string.Format(_template, name);
}

class GreetingPrinter
{
    private readonly MessageFormatter _formatter;

    public GreetingPrinter(MessageFormatter formatter)
    {
        _formatter = formatter;
    }

    public void Print(string name)
    {
        Console.WriteLine(_formatter.Format(name));
    }
}

var printer = new GreetingPrinter(new MessageFormatter("Hello, {0}!"));
printer.Print("World");
\`\`\`

Compare that to:

\`\`\`csharp
Console.WriteLine("Hello, World!");
\`\`\`

The OOP version is worse in every measurable way for this problem. More lines, more indirection, harder to understand.

### Simple Scripts Don't Need Classes

For short scripts, automation tasks, and data processing pipelines, a procedural approach with top-level statements and standalone functions is often cleaner:

\`\`\`csharp
// Read a CSV, filter rows, print results — no class needed
string[] lines = File.ReadAllLines("data.csv");
foreach (string line in lines.Skip(1)) // skip header
{
    string[] parts = line.Split(',');
    if (decimal.TryParse(parts[1], out decimal price) && price > 100)
        Console.WriteLine($"{parts[0]}: {price:C}");
}
\`\`\`

This is clear, direct, and appropriate for a one-off data task.

### Static Utility Classes Are Fine

When you have a collection of related helper functions with no shared state, a static class is exactly the right abstraction:

\`\`\`csharp
static class DateHelpers
{
    public static bool IsWeekend(DateTime date) =>
        date.DayOfWeek is DayOfWeek.Saturday or DayOfWeek.Sunday;

    public static int BusinessDaysBetween(DateTime start, DateTime end)
    {
        int count = 0;
        for (DateTime d = start; d < end; d = d.AddDays(1))
            if (!IsWeekend(d)) count++;
        return count;
    }
}
\`\`\`

There's no meaningful "instance" of a date helper. Static is the right tool.

### Anti-Patterns to Recognize

**The Anemic Domain Model** — classes with only properties and no behavior:

\`\`\`csharp
// Anti-pattern: class is just a bag of data
class Order
{
    public int Id { get; set; }
    public List<OrderLine> Lines { get; set; } = new();
    public decimal TotalAmount { get; set; }
    public bool IsApproved { get; set; }
}

// Behavior lives somewhere else entirely
class OrderService
{
    public void Approve(Order order) { order.IsApproved = true; }
    public void CalculateTotal(Order order) { /* ... */ }
}
\`\`\`

The behavior that naturally belongs to \`Order\` has been extracted into a separate service for no good reason.

**God Classes** — one class that does everything:

\`\`\`csharp
// Anti-pattern: AppManager does way too much
class AppManager
{
    public void SaveUser() { }
    public void SendEmail() { }
    public void GenerateReport() { }
    public void ProcessPayment() { }
    public void UpdateInventory() { }
}
\`\`\`

A class should have one clear responsibility. When a class grows beyond that, split it.

**Inheritance for Code Reuse Alone** — using \`class Dog : Animal\` just because Dog and Animal share some code, not because there's a genuine "is-a" relationship you want to model. This creates tight coupling and makes future changes painful.

### Ask These Questions First

Before creating a class, ask yourself:

1. **Does this concept have meaningful state?** If it's purely stateless, a static method or function is simpler.
2. **Will I create multiple independent instances?** If there's always just one, reconsider.
3. **Does this data have behavior that belongs with it?** If not, you might just need a record or struct.
4. **Am I modeling a real domain entity?** User, Order, Product — yes. "EmailSender" might just be a function.

### The Rule of Thumb

Write the simplest thing that works. Start with functions. Reach for a class when:

- You have **state** that changes over time and behavior that operates on that state
- You need **multiple independent instances** of the same concept
- You want to use **encapsulation** to protect invariants
- You're modeling a **domain concept** with real-world meaning

### Summary

- OOP is a tool — not a requirement for every program
- Simple scripts and data pipelines are often cleaner without classes
- Static utility classes are the right abstraction for stateless helpers
- Over-engineering with unnecessary classes makes code harder, not easier
- Watch for anti-patterns: anemic models, god classes, and inheritance for code reuse
- Write the simplest thing that works, then refactor toward structure when complexity demands it
`,
};
