export const lessonStateChangeOverTime = {
  id: "state-change-over-time",
  title: "State & Change Over Time",
  hasChallenge: false,

  article: `
## Introduction

Execution order tells you what ran.

State tells you what changed.

These are two different questions,
and you need both answers to fully understand a program.

Most real bugs are not syntax errors.
They are state bugs.

A value was supposed to update but did not.
Or a value changed earlier than expected.
Or two parts of a program were looking at the same data
and one of them changed it without the other knowing.

When you can track state over time,
program behavior stops feeling random.

It becomes predictable.
And predictable programs are debuggable programs.

---

## Mental Model

State means "the current values held in memory right now."

At any moment in a program's life,
you can take a snapshot:

> What does every variable hold at this exact line?

Then one line runs.
A new snapshot exists.

Think in before and after:

- what was true before this line ran
- what is true after this line ran

Every assignment changes the snapshot.
Every loop iteration changes the snapshot.
Every method that mutates an object changes the snapshot.

Here is the key insight:

> A variable is not a fixed label for a fixed value.
> It is a container that can be emptied and refilled.

When you read code, your job is not to see a name and assume its value.
Your job is to track what that container holds at each specific moment.

If you do that, you will rarely be surprised by output.

---

## How to Track State

Here is a practical method.

When code is confusing, build a state table by hand.

List each variable. Update it after every relevant line.

\`\`\`
Line | Code              | count
-----|-------------------|------
 1   | count = 1         | 1
 2   | count = count + 1 | 2
 3   | count = count + 1 | 3
 4   | print(count)      | output: 3
\`\`\`

This forces you to be explicit about what each line actually does to memory.

You cannot fool yourself with a table in front of you.

For loops, add a row for each iteration:

\`\`\`
Iteration | n  | total
----------|----|------
start     | —  | 0
1         | 3  | 3
2         | 4  | 7
3         | 5  | 12
\`\`\`

It feels slow at first.
But it is faster than running broken code ten times and guessing.

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

Same variable name. Different values over time.

The important thing to see here is that line 2 does two things at once:

1. It reads the current value of \`count\` on the right side.
2. It writes a new value into \`count\` on the left side.

The right side is evaluated first using the old value.
Then the result replaces the old value.

If you forget that order, reassignment lines will confuse you.

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
- after iteration 1 (n=3): \`total = 3\`
- after iteration 2 (n=4): \`total = 7\`
- after iteration 3 (n=5): \`total = 12\`
- output: \`12\`

Loops are where state bugs hide most often.

When a loop feels wrong, do not stare at the whole thing.
Trace one iteration at a time.
Ask: "What is the state going into this iteration, and what should come out?"

That question finds bugs faster than anything else.

---

### Example 3: Reassignment vs. Mutation

This distinction matters more than most beginners expect.

**Reassignment** — you replace what a variable points to:

\`\`\`python
name = "alice"
name = "bob"
print(name)
# output: bob
\`\`\`

\`name\` now points to a completely new value. \`"alice"\` is gone from the picture.

**Mutation** — you change the object itself:

\`\`\`python
tasks = ["read"]
tasks.append("practice")
print(tasks)
# output: ['read', 'practice']
\`\`\`

You did not create a new list.
You reached into the existing list and changed it in place.

Why does this distinction matter?

Because mutation affects **every part of the program that references the same object.**

\`\`\`python
a = [1, 2, 3]
b = a          # b points to the same list as a

b.append(4)

print(a)       # [1, 2, 3, 4]
print(b)       # [1, 2, 3, 4]
\`\`\`

You changed \`b\`, but \`a\` also changed.

They are the same object in memory.

This is one of the most common sources of unexpected state bugs in Python.
When you see behavior that seems impossible,
shared mutable state is often the reason.

---

## Real-World Scenario: The Wallet Bug

Imagine you are building a basic budgeting app.

A user reports: "My balance is wrong. I deposited money and it shows a lower number."

Here is the code:

\`\`\`python
balance = 200

transactions = [50, -30, 100, -20]

for amount in transactions:
    new_balance = balance + amount

print(new_balance)
\`\`\`

The user expects the final balance to reflect all four transactions.

But the output is \`180\`.

Without state tracking, you might think the loop is broken.

With a state table:

\`\`\`
Iteration | amount | balance | new_balance
----------|--------|---------|------------
1         | 50     | 200     | 250
2         | -30    | 200     | 170
3         | 100    | 200     | 300
4         | -20    | 200     | 180
\`\`\`

Now you see it clearly.

\`balance\` never changes. It stays at \`200\` through every iteration.

\`new_balance\` is recalculated fresh from the original \`balance\` each time.

The last transaction wins, and every previous one is discarded.

The fix:

\`\`\`python
balance = 200

transactions = [50, -30, 100, -20]

for amount in transactions:
    balance = balance + amount

print(balance)
\`\`\`

State table now:

\`\`\`
Iteration | amount | balance (after)
----------|--------|----------------
1         | 50     | 250
2         | -30    | 220
3         | 100    | 320
4         | -20    | 300
\`\`\`

Output: \`300\`

The bug was not the loop logic.
The bug was that \`balance\` was never being updated — \`new_balance\` was a dead end.

A state table made it obvious in seconds.

---

## Common Mistakes

- **Assuming a variable keeps its old value after reassignment.** Once a variable is reassigned, the old value is gone. Do not read lines out of order.
- **Looking only at final output and skipping intermediate state.** The bug is almost always in the middle, not at the end.
- **Not understanding the difference between reassignment and mutation.** These behave differently, especially when multiple variables reference the same object.
- **Reusing vague variable names** (\`x\`, \`data\`, \`temp\`) that make it hard to track which state belongs to which concern.
- **Updating state in too many places.** If three different lines all modify the same variable, it becomes very hard to trace. Keep state changes localized when possible.
- **Expecting a loop to "accumulate" when the accumulator is never updated.** The wallet bug above is the classic form of this. The accumulator must be on both sides of the assignment.

---

## Practice Prompts

- Build a loop that counts even numbers in a list. Print the state of your counter on every iteration.
- Simulate a bank account: start with a balance, apply three deposits and two withdrawals using reassignment. Print the balance after each transaction.
- Start with an empty list and mutate it using \`append\`, \`remove\`, and \`sort\`. Print the list after every operation.
- Assign one list to two different variable names. Mutate through one variable and observe what happens to the other. Write down what surprised you.
- Take an old loop from your own code. Build a state table for it by hand. Did anything behave differently than you expected?

No full solutions.

Focus on snapshots.

Trace before and after every line.

---

## Reflection Questions

- Which state changes are easiest for you to miss: reassignment inside a loop, mutation through a method, or shared references?
- When you hit a bug, do you immediately change code, or do you first trace what state actually is?
- Have you ever "fixed" a bug and then had the same bug reappear? That often means you changed the output but not the root state problem.
- Can you tell the difference between reassignment and mutation just by reading a line of code?

---

## What This Unlocks

You can reason about program behavior across time,
not just at a single line.

You stop being surprised by output.

You stop "fixing" bugs by changing random lines and hoping.

You trace the state, find the exact moment it went wrong, and fix that specific moment.

That is what debugging actually is.

---

## What You Can Now Do

You can track and explain state transitions through assignments, loop iterations, and mutations.

You can build a state table by hand and use it to locate bugs.

You understand the difference between reassignment and mutation
and why that difference matters in practice.

---

## What Comes Next

Next, you will learn that state is not visible everywhere.

Some values exist only inside a function.
Some exist for the life of the program.

You will map where values live and how long they last.
`,
};
