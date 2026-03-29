export const lessonPseudocode = {
  id: "pseudocode",
  title: "Pseudocode: Think Before You Type",
  hasChallenge: false,

  article: `
## Introduction

You are about to start building real programs.

Before you write a single line of Python,
there is one skill that will separate the developers who struggle
from the developers who build with confidence.

That skill is pseudocode.

It costs nothing.
It requires no syntax.
And it is used every single day by the best engineers in the world.

---

## What Is Pseudocode

Pseudocode is writing out your logic in plain language
before translating it into code.

It is not Python.
It is not any programming language.

It is just your thinking, written down in a structured way.

\`\`\`
ask the user for a number
if the number is greater than 10:
    tell them it is large
otherwise:
    tell them it is small
\`\`\`

That is pseudocode.

No colons in the right places.
No imports.
No worrying about syntax errors.

Just logic.

---

## Why It Matters More Than You Think

Most beginners open a blank file and try to type code immediately.

They hit a wall.
They rewrite.
They get confused.
They spend 20 minutes fixing syntax on logic that was broken from the start.

Pseudocode breaks that cycle.

When you plan in plain language first:

- You catch logic problems before they become code problems.
- You know exactly what you need to build before you build it.
- You write code faster because the thinking is already done.
- You make fewer mistakes because you are not thinking and typing at the same time.

Thinking and typing at the same time is hard.

Pseudocode lets you do them separately.

---

## The Greatest Developers Still Do This

Here is something that might surprise you.

Senior engineers with decades of experience still write pseudocode.

Not because they have to.
Because they know what happens when they don't.

When NASA engineers designed flight control software,
they planned logic in plain language before touching a compiler.

When engineers at companies like Google and Amazon work on complex systems,
whiteboards covered in plain-language logic come before any editor is opened.

Donald Knuth, one of the most respected computer scientists who ever lived,
wrote entire algorithms in structured English before formalizing them.

The pattern is consistent:

> The more complex the problem,
> the more important it is to think before you type.

Pseudocode is not a beginner crutch.
It is a professional habit.

---

## What Good Pseudocode Looks Like

There are no strict rules.

The goal is clarity, not formatting.

Here is a loose structure that works well:

- Use plain action words: **ask**, **store**, **check**, **repeat**, **display**
- Use indentation to show nesting
- Use "if", "otherwise", "repeat while", "for each" — you already know these ideas
- Write one thought per line

### Example: Planning a number guessing game

\`\`\`
pick a secret number between 1 and 100

repeat:
    ask the user to guess a number

    if the guess is too low:
        tell them to guess higher
    if the guess is too high:
        tell them to guess lower
    if the guess is correct:
        congratulate them
        stop repeating

display how many guesses it took
\`\`\`

Notice what happened there.

Before writing a single line of Python,
you already know:
- you need a loop
- you need three conditions inside the loop
- you need a counter
- you need a way to stop the loop

That is the entire structure of your program.
Writing the Python now becomes translation, not invention.

---

## Pseudocode to Python: Seeing the Bridge

Here is how that translation works in practice.

**Pseudocode:**
\`\`\`
ask the user for their age
if age is 18 or older:
    display "you can vote"
otherwise:
    calculate years until they can vote
    display how many years are left
\`\`\`

**Python:**
\`\`\`python
age = int(input("Enter your age: "))

if age >= 18:
    print("You can vote.")
else:
    years_left = 18 - age
    print(f"You can vote in {years_left} year(s).")
\`\`\`

The structure is identical.

The pseudocode became the skeleton.
Python filled in the details.

---

## A Common Mistake

Some beginners write pseudocode that is just code with different spelling.

\`\`\`
# This is not pseudocode — it is just messy Python
x = input()
if x > 10
    print big
else
    print small
\`\`\`

That misses the point.

Pseudocode should free you from syntax so you can focus on logic.

If you are thinking about variable names and print statements,
you are thinking too small.

Zoom out first.
Zoom in later.

---

## How to Use Pseudocode in Your Workflow

Here is a simple process you can use for every project:

**Step 1 — Read the problem fully before touching the keyboard.**

**Step 2 — Write out what needs to happen in plain English.**
Do not write Python yet. Just describe the steps.

**Step 3 — Refine the pseudocode.**
Add conditions. Add loops. Add edge cases you thought of.

**Step 4 — Now open Python and translate line by line.**

**Step 5 — When you get stuck, go back to the pseudocode.**
The problem is almost always a logic gap, not a syntax gap.

This process works for 5-line scripts and 5,000-line systems.
It scales.

---

## Practice Prompts

Before writing any Python, write pseudocode for each of these:

- A program that asks for a password and keeps asking until the correct one is entered.
- A program that takes a list of numbers and prints only the even ones.
- A program that asks for a name and prints a personalized greeting depending on the time of day.
- A simple ATM: ask for a PIN, show a balance, let the user withdraw or deposit.

Do not write Python yet.

Just plan.

Read what you wrote.
Ask: "Does this make sense as a sequence of steps?"

If yes, you are ready to code.

---

## Reflection Questions

- Have you ever written code that "worked" but you could not fully explain why?
- When you hit a bug, is your first move to change code or to re-read the logic?
- What would change if you always knew your plan before you started typing?

---

## What This Unlocks

You stop staring at a blank file.

You stop rewriting code that had broken logic from the start.

You build faster because the thinking came first.

Pseudocode is not extra work.
It is the work that makes all the other work easier.

---

## What You Can Now Do

You can plan a program in plain language before writing a single line of Python.

You have a workflow: plan, refine, translate, debug the logic not the syntax.

---

## What Comes Next

You are now ready to build.

The mini-projects ahead will give you real goals and real constraints.

Before you write a single line of code for any of them,
write your pseudocode first.

That is the habit.
Start it now.
`,
};
