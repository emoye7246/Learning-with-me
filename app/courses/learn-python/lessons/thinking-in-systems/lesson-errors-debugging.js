export const lessonErrorsDebugging = {
  id: "errors-debugging",
  title: "Errors & Debugging",

  article: `
## Errors & Debugging

## Introduction

Debugging is not random trial and error.

It is a process.

When code fails,
you need a method you can trust.

That method should work even when you feel stuck.

---

## Mental Model

Use a repeatable debug loop:

1. Reproduce the issue.
2. Read the exact traceback and line.
3. Inspect nearby state (values and types).
4. Change one thing only.
5. Re-run and verify.

One change at a time is critical.

Multiple changes hide root causes.

---

## Small Code Examples

### Example 1: NameError from misspelling

\`\`\`python
count = 5
print(coutn)
\`\`\`

Start with the actual message.

It tells you which name is unknown.

Here, the fix is spelling consistency:

\`count\` vs \`coutn\`.

---

### Example 2: TypeError from mixed types

\`\`\`python
age = "25"
next_year = age + 1
print(next_year)
\`\`\`

If types differ,
operations may fail.

Debug question:

"What is the type of each value right before the failing line?"

---

### Example 3: Debug checkpoints inside a loop

\`\`\`python
prices = [10, 20, 30]
total = 0

for p in prices:
    total = total + p
    print("debug total:", total)
\`\`\`

Temporary checkpoints reveal where logic diverges.

Add them close to the suspected problem,
then remove them after confirming behavior.

---

## Common Mistakes

- Skipping traceback details and guessing blindly.
- Changing many lines after one error.
- Catching broad exceptions that hide useful signals.
- Ignoring type/state before applying a fix.
- Stopping after "no crash" instead of verifying correctness.

---

## Practice Prompts

- Intentionally introduce a variable typo and fix it using traceback only.
- Create a small script that mixes strings and integers. Add type checks and resolve the error.
- Add debug checkpoints to a loop, locate a logic issue, then remove checkpoints.
- Pick one previous bug you had and rewrite the steps you took to fix it.

No full solutions.

Use the process.

---

## Reflection Questions

- Which debugging step do you skip most often?
- Do you usually inspect types before changing code?
- How often do you verify behavior after "fixing" an error?

---

## What This Unlocks

You gain a stable response to failure.

Instead of panic,
you run a method.

That confidence compounds over time.

---

## What You Can Now Do

You can diagnose common Python errors with a clear, repeatable debugging workflow.

---

## Next Lesson

Next, you will improve code that already works.

You will refactor for clarity so future bugs are less likely.
`,
};
