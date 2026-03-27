export const lessonWhatProgrammingActuallyIs = {
  id: "what-programming-actually-is-cs",
  title: "What Programming Actually Is",
  hasChallenge: false,
  article: `
## What Programming Actually Is

Most people start learning to code with the wrong mental model. They think programming is about memorizing syntax, or about writing clever one-liners, or about knowing the right frameworks. It isn't.

**Programming is giving a machine a precise sequence of instructions, where every single step must be explicitly stated and nothing can be assumed.**

This distinction is everything.

---

## The Machine Has No Common Sense

A computer does exactly what you tell it to do — not what you meant to tell it, not what would be reasonable, not what a human would infer from context. Exactly what the code says.

Consider this: if you tell a friend "make me a cup of tea," they know to boil water, find a mug, use a tea bag, and pour. They fill in hundreds of implied steps from common sense.

If you tell a computer "make me a cup of tea" without defining every sub-step, it fails. Not because it's stupid — because it's precise. It doesn't guess. It executes.

This is not a bug in computers. It's the feature that makes them reliable. You want a machine running a bank's transaction system to do exactly what the code says — not approximately what the programmer probably intended.

---

## Programs Are Sequences of State Changes

At the most fundamental level, a program is a machine that:

1. Starts with some **initial state** (variables holding values, files on disk, network connections)
2. Executes instructions that **change that state**
3. Produces some **output** — text on screen, a file written, a network response sent

Every line of C# code you write is either:
- Reading some state
- Changing some state
- Deciding which state change to make next (conditionals, loops)
- Grouping state changes into reusable units (methods, classes)

That's it. Every program ever written, from a calculator to a video game to an operating system, is a sequence of state changes.

---

## The Execution Model

When you run a C# program, the .NET runtime starts at a well-defined entry point — the \`Main\` method (or top-level statements in modern C#) — and executes instructions one by one, in order, from top to bottom.

\`\`\`csharp
int x = 5;       // State: x = 5
int y = 3;       // State: x = 5, y = 3
int z = x + y;   // State: x = 5, y = 3, z = 8
Console.WriteLine(z); // Output: 8
\`\`\`

The runtime doesn't look ahead. It doesn't understand the program as a whole. It executes the current instruction, moves to the next, and repeats.

This is why debugging is a learnable skill: when a program misbehaves, you trace the execution — step by step — until you find where the actual state diverged from your expected state.

---

## What This Means for You

When you write code that doesn't work, the problem is almost always one of two things:

1. **You didn't tell the machine what you actually meant** — the syntax is valid, but the logic is wrong
2. **You assumed the machine would infer something** — it didn't

The solution is always the same: slow down, trace execution mentally (or with a debugger), and find the exact line where the machine did something different from what you expected.

This is the core skill of programming. It has nothing to do with C# specifically. It applies to every language, every platform, every problem.

Build this mental model now. It will save you hundreds of hours of frustration.

---

## What Comes Next

Now that you understand what programming is, the next lesson covers what makes C# specifically powerful — and what kinds of problems it is uniquely well-suited to solve.
`,
};
