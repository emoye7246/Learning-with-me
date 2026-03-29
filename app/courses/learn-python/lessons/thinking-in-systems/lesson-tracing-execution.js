export const lessonTracingExecution = {
  id: "tracing-execution",
  title: "Tracing Execution",
  hasChallenge: false,

  article: `
## Introduction

You already know Python syntax.

The next skill is reading code like a system.

Most confusion comes from one thing:

not knowing exactly what ran, and in what order.

Tracing execution fixes that.

It turns "I think this happened"
into
"I can prove what happened."

This is not about running code faster or being smarter.

It is about building discipline.

The programmer who traces carefully makes fewer bugs.
When bugs do appear, they find them in minutes, not hours.

---

## Mental Model

Think of Python as a very literal reader.

It starts at the top.

It moves line by line.

It follows rules exactly:

- assignment stores values
- conditions choose one path
- function calls jump into function bodies
- then return back to the call site

Python does not "understand your intention."

It only executes instructions in order.

Your goal is to follow that path with discipline.

Here is a useful way to think about it:

> You are not the author reading your own story.
> You are the reader encountering the code for the first time.
> No assumptions. No shortcuts. No skipping ahead.

---

## How to Trace

Before looking at examples, here is the actual method.

When you trace code by hand:

1. **Write down each variable and its current value.**
2. **Move line by line. Do not skip.**
3. **When you hit a condition, evaluate it explicitly.**
4. **When you hit a function call, note where you are, jump into the function, and track when you return.**
5. **After each step, update your variable table.**

A simple variable table looks like this:

\`\`\`
Line | Action              | Variables
-----|---------------------|------------------
 1   | x = 2               | x = 2
 2   | print(x)            | output: 2
 3   | x = x + 3           | x = 5
 4   | print(x)            | output: 5
\`\`\`

You do not need a table every time.
But when code is confusing, building one forces clarity.

---

## Small Code Examples

### Example 1: Top-to-bottom execution

\`\`\`python
x = 2
print(x)
x = x + 3
print(x)
\`\`\`

Trace it slowly:

1. \`x\` becomes \`2\`
2. first print outputs \`2\`
3. \`x\` is updated to \`5\`
4. second print outputs \`5\`

The key detail in step 3 is that \`x + 3\` is evaluated using the **current** value of \`x\` at that moment.

Python does not look ahead.
It does not care what \`x\` was or will be.
It only knows what \`x\` holds right now.

---

### Example 2: Branching changes execution path

\`\`\`python
score = 72

if score >= 70:
    print("pass")
else:
    print("retry")
\`\`\`

Trace order:

1. store \`score\` as \`72\`
2. evaluate condition: \`72 >= 70\` → \`True\`
3. enter the \`if\` block
4. print \`"pass"\`
5. skip the \`else\` block entirely

Only one branch executes.

That detail prevents many logic mistakes.

A common error is assuming both branches run when a condition is "close."
They do not. Python takes one path and skips the other completely.

---

### Example 3: Function call and return flow

\`\`\`python
def double(n):
    return n * 2

value = 5
result = double(value)
print(result)
\`\`\`

Execution flow:

1. function \`double\` is **defined** — not run yet
2. \`value\` becomes \`5\`
3. call \`double(value)\` — Python jumps into the function body
4. inside function: \`n\` receives \`5\`
5. evaluate \`n * 2\` → \`10\`
6. return \`10\` — Python jumps back to the call site
7. \`result\` stores the returned value \`10\`
8. print outputs \`10\`

Function tracing is "jump in, jump out."

The moment you hit a function call, your current location pauses.
Everything happens inside the function.
Then you return exactly where you left off.

If you lose track of where you are in the call stack,
you will misread the output.

---

## Real-World Scenario: The Discount Bug

Imagine you are building a checkout system.

A user reports: "The discount is not applying correctly."

Here is the code:

\`\`\`python
price = 100
discount = 0.10

if price > 50:
    price = price - discount
    print(price)
\`\`\`

You run it and see: \`99.9\`

That is not right. You expected \`90\`.

Without tracing, you might guess:
"Maybe the discount variable is wrong."
"Maybe the condition is wrong."

With tracing:

1. \`price\` = \`100\`
2. \`discount\` = \`0.10\`
3. condition: \`100 > 50\` → \`True\`
4. \`price = price - discount\` → \`100 - 0.10\` → \`99.9\`

Now you see it immediately.

The bug is not the condition.
The bug is that \`discount\` holds a decimal fraction, not a dollar amount.

The fix is clear:

\`\`\`python
price = 100
discount = 0.10

if price > 50:
    price = price - (price * discount)
    print(price)
\`\`\`

Trace it again:

1. \`price\` = \`100\`
2. \`discount\` = \`0.10\`
3. condition: \`100 > 50\` → \`True\`
4. \`price * discount\` → \`100 * 0.10\` → \`10\`
5. \`price = 100 - 10\` → \`90\`

Output: \`90\`

Tracing turned a vague complaint into a specific, provable fix.
That is the exact skill developers use in production debugging.

---

## Common Mistakes

- **Reading visually instead of sequentially.** Your eyes jump to familiar patterns. Tracing requires following execution order, not reading order.
- **Assuming a branch runs without evaluating the condition.** Always check what the condition resolves to before deciding which path executes.
- **Forgetting that defining a function does not execute it.** The function body is skipped until the function is called.
- **Skipping intermediate steps.** The mistake is almost always in a middle step you glossed over.
- **Not tracking variable updates.** A variable can change multiple times. If you assume it holds its initial value throughout, your trace will be wrong.
- **Losing your place during function calls.** When you jump into a function, write down where you came from. When the function returns, go back to that exact point.

---

## Practice Prompts

- Write 6 lines where one variable changes 4 times. Predict each output before running.
- Create an \`if/else\` with a score variable. Test three different scores and trace each path by hand before running.
- Write one function that returns a value and one that only prints. Trace both and note the difference in how \`result\` behaves.
- Take an old script and annotate each line with either "runs always" or "runs conditionally."
- Find a small bug in a 5–8 line script by tracing it on paper instead of running it.

No full solutions.

Trace first.

Then run.

---

## Reflection Questions

- At which step do you usually lose track: condition checks, loops, or function calls?
- Do you predict output before execution, or only inspect after running?
- When you read someone else's code, do you start from the top or jump to what looks relevant?
- Could you explain a 10-line script's execution to someone out loud, step by step?

---

## What This Unlocks

You stop guessing about behavior.

You can explain exactly why output happened.

You can catch bugs before running the code.

That is the base skill behind calm debugging.

When someone says "I don't know why this isn't working,"
they almost always mean: "I haven't traced it yet."

---

## What You Can Now Do

You can trace line-by-line execution across assignments, branches, and function calls.

You have a method: the variable table.

You have a mindset: literal, sequential, no assumptions.

---

## What Comes Next

Next, you will trace not only order,
but change.

You will learn how state evolves over time
and how to follow a program's memory as it runs.
`,
};
