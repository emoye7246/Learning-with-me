export const lessonTracingExecution = {
  id: "tracing-execution",
  title: "Tracing Execution",

  article: `
## Tracing Execution

## Introduction

You already know Python syntax.

The next skill is reading code like a system.

Most confusion comes from one thing:

not knowing exactly what ran, and in what order.

Tracing execution fixes that.

It turns "I think this happened"
into
"I can prove what happened."

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

If you can narrate those four steps,
you are tracing correctly.

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

1. store \`score\`
2. evaluate condition \`score >= 70\`
3. condition is true
4. run only the \`if\` block
5. skip the \`else\` block

Only one branch executes.

That detail prevents many logic mistakes.

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

1. function is defined (not run yet)
2. \`value\` becomes \`5\`
3. call \`double(value)\`
4. inside function: \`n\` is \`5\`
5. return \`10\`
6. \`result\` stores \`10\`
7. print outputs \`10\`

Function tracing is "jump in, jump out."

---

## Common Mistakes

- Reading code by visual chunks instead of execution order.
- Assuming a branch runs without checking the condition first.
- Forgetting that defining a function does not execute it.
- Skipping intermediate steps and jumping straight to final output.
- Changing several lines while debugging and losing the execution story.

---

## Practice Prompts

- Write 6 lines where one variable changes 4 times. Predict output before running.
- Create an \`if/else\` with a score variable. Test three different scores and trace each path.
- Write one function call that returns a value and one that only prints. Trace the difference.
- Take an old script and annotate each line with "runs always" or "runs conditionally."

No full solutions.

Trace first.

Then run.

---

## Reflection Questions

- At which step do you usually lose track: condition checks, loops, or function calls?
- Do you predict output before execution, or only inspect after running?
- How often do you explain your code path in plain English?

---

## What This Unlocks

You stop guessing about behavior.

You can explain exactly why output happened.

That is the base skill behind calm debugging.

---

## What You Can Now Do

You can trace line-by-line execution across assignments, branches, and function calls.

---

## Next Lesson

Next, you will trace not only order,
but change.

You will learn how state evolves over time.
`,
};
