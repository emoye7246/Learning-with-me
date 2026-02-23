export const lessonStateChangeOverTime = {
  id: "state-change-over-time",
  title: "State & Change Over Time",

  article: `
## State & Change Over Time

## Introduction

Execution order tells you what ran.

State tells you what changed.

Most real bugs are state bugs.

A value was supposed to update but did not.

Or a value changed earlier than expected.

When you can track state over time,
program behavior becomes predictable.

---

## Mental Model

State means "the current values in memory."

At any moment,
your program has a snapshot.

Then one line runs,
and a new snapshot exists.

Think like this:

- before line
- after line

Every assignment,
loop iteration,
and mutation updates that snapshot.

If you can narrate snapshots,
you can debug almost anything at this level.

---

## Small Code Examples

### Example 1: Reassignment updates state

\`\`\`python
count = 1
count = count + 1
count = count + 1
print(count)
\`\`\`

State trace:

- after line 1: \`count = 1\`
- after line 2: \`count = 2\`
- after line 3: \`count = 3\`
- output: \`3\`

Same variable name.

Different values over time.

---

### Example 2: Loop-driven state change

\`\`\`python
total = 0
for n in [3, 4, 5]:
    total = total + n
print(total)
\`\`\`

Iteration snapshots:

- start: \`total = 0\`
- after first loop: \`total = 3\`
- after second loop: \`total = 7\`
- after third loop: \`total = 12\`
- output: \`12\`

When loops feel confusing,
trace one iteration at a time.

---

### Example 3: Mutable object state

\`\`\`python
tasks = ["read"]
tasks.append("practice")
print(tasks)
\`\`\`

This is different from reassignment.

You did not create a new list name.

You changed the existing list object.

Output becomes:

\`['read', 'practice']\`

That difference matters later for functions and shared data.

---

## Common Mistakes

- Assuming a variable keeps its old value after reassignment.
- Looking only at final output and skipping intermediate state.
- Forgetting that methods like \`append()\` mutate the original object.
- Reusing unclear variable names (\`x\`, \`data\`, \`thing\`) that hide meaning.
- Updating state in too many places without checkpoints.

---

## Practice Prompts

- Build a loop that counts even numbers in a list. Print state on each iteration.
- Simulate a wallet balance with three deposits and two withdrawals using reassignment.
- Start with an empty list and mutate it with \`append\`, \`remove\`, and \`sort\`. Log state after each step.
- Take an old loop and add temporary debug prints to show key state transitions.

No full solutions.

Focus on snapshots.

---

## Reflection Questions

- Which state changes are easiest for you to miss while reading code?
- Do you separate reassignment from mutation clearly in your mind?
- Where should you place debug prints to catch bad state transitions early?

---

## What This Unlocks

You can reason about behavior across time,
not just one line at a glance.

That is essential for loops, data processing, and debugging.

---

## What You Can Now Do

You can track and explain state transitions through assignments, iterations, and mutations.

---

## Next Lesson

Next, you will learn that state is not visible everywhere.

You will map where values exist and how long they live.
`,
};
