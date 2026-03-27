export const lessonStateChangeOverTime = {
  id: "state-change-over-time-cs",
  title: "State Change Over Time",
  hasChallenge: false,
  article: `
## State Change Over Time

Every non-trivial program has state — variables, collections, and objects whose values change as the program runs. Understanding how state changes over time is the foundation of reasoning about program behavior.

---

## What Is State?

State is the complete set of values held by all variables and objects at a specific point in program execution.

\`\`\`csharp
// At this point, state = { count: 0, total: 0 }
int count = 0;
int total = 0;

// State = { count: 0, total: 0 }
total += 10;
// State = { count: 0, total: 10 }
count++;
// State = { count: 1, total: 10 }
total += 20;
// State = { count: 1, total: 30 }
count++;
// State = { count: 2, total: 30 }
\`\`\`

Every statement either reads state or changes it. The program's behavior at any moment depends entirely on its current state.

---

## Mutable vs Immutable State

**Mutable state** can change. Most variables in C# are mutable — you can reassign them.

**Immutable state** cannot change once set. Constants (\`const\`) and \`readonly\` fields are immutable. Strings are immutable objects (operations return new strings).

Immutable state is easier to reason about because you never have to wonder "has this changed?" The answer is always no.

This is why functional programming favors immutability, and why C# 9+ records are popular for representing data that shouldn't change.

---

## State Bugs

The most common class of programming bugs is **unexpected state** — a variable holds a value you didn't expect at the moment you read it.

\`\`\`csharp
int score = 0;

// ... 50 lines of code ...

if (score > 100)  // Is score still 0? Has it been modified?
    Console.WriteLine("High score!");
\`\`\`

When this check behaves unexpectedly, you trace backward to find where \`score\` was set to a value that surprised you.

---

## The Accumulator Pattern

One of the most common patterns in programming is accumulating state:

\`\`\`csharp
string[] words = { "the", "quick", "brown", "fox" };

// Count vowels across all words
int vowelCount = 0;  // initial state

foreach (string word in words)
{
    foreach (char c in word)
    {
        if ("aeiou".Contains(c))
            vowelCount++;  // state change
    }
}

Console.WriteLine($"Total vowels: {vowelCount}");
\`\`\`

The \`vowelCount\` variable is an accumulator — it starts at zero and grows with each relevant event. Almost every program that processes a sequence of items uses this pattern.

---

## State in Interactive Programs

Console programs maintain state across the entire user session:

\`\`\`csharp
var items = new List<string>();
bool running = true;

while (running)
{
    Console.Write("> ");
    string? input = Console.ReadLine()?.Trim();

    switch (input)
    {
        case "add":
            Console.Write("Item: ");
            string? item = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(item))
                items.Add(item);  // state change: list grows
            break;
        case "list":
            foreach (string i in items)
                Console.WriteLine($"  - {i}");
            break;
        case "quit":
            running = false;  // state change: triggers loop exit
            break;
    }
}
\`\`\`

The \`items\` list and the \`running\` flag are the core program state. The entire user interaction is about reading and modifying them.

---

## Snapshot Debugging

A useful mental technique: when trying to understand a bug, pick a suspicious line of code and ask "what is the complete state of the program when execution reaches this line?"

Then verify your expectation by:
1. Adding \`Console.WriteLine\` statements to print values at that point
2. Using the debugger to pause execution and inspect variables
3. Tracing the code manually from the start

Mismatched expectations (what you thought state was vs what it actually is) point directly to the bug.

---

## What Comes Next

The next lesson covers scope and variable lifetime — which variables are visible where, and how long they exist.
`,
};
