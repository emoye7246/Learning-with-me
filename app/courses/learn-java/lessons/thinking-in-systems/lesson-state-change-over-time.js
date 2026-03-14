export const lessonStateChangeOverTime = {
  id: "state-change-over-time",
  title: "State Change Over Time",
  hasChallenge: false,
  article: `
## State Change Over Time

State is the current snapshot of all variables and their values at any point during execution.

Every program is a machine that transforms state over time.

---

## What State Is

When you write:

\`\`\`java
int balance = 1000;
\`\`\`

That's state. The variable \`balance\` has a current value of \`1000\`.

When you write:

\`\`\`java
balance -= 200;
\`\`\`

You've changed state. The value is now \`800\`.

State is not just individual variables — it's the combined snapshot of everything your program "remembers" at a moment in time.

---

## Programs as State Machines

Think of a program as a machine with a current state. Each instruction transitions the machine from one state to the next.

\`\`\`java
// Initial state: balance = 1000, transactions = 0
int balance = 1000;
int transactions = 0;

// State transition 1
balance -= 200;
transactions++;
// State: balance = 800, transactions = 1

// State transition 2
balance += 500;
transactions++;
// State: balance = 1300, transactions = 2
\`\`\`

A bug is when the state transitions incorrectly — when a state you didn't intend is produced.

---

## Mutable vs Immutable State

**Mutable state** changes during execution:
\`\`\`java
int counter = 0;
counter++;   // counter mutates
\`\`\`

**Immutable state** doesn't change:
\`\`\`java
final int MAX = 100;   // MAX never changes
\`\`\`

Good programs minimize unnecessary mutable state. The fewer things that can change, the fewer things that can go wrong.

---

## State in Loops

In a loop, state is what makes each iteration different from the previous:

\`\`\`java
int sum = 0;
for (int i = 1; i <= 10; i++) {
    sum += i;
}
\`\`\`

The state here includes both \`i\` (the counter) and \`sum\` (the accumulator). Both change with every iteration. The loop terminates when \`i\` exceeds 10.

---

## Common State Bugs

**Bug 1: Off-by-one**
\`\`\`java
// Processes items 0–9 but should process 1–10
for (int i = 0; i < 10; i++) {
    process(i);
}
\`\`\`

**Bug 2: Accumulated error**
\`\`\`java
double total = 0;
total += 0.1;
total += 0.2;
// total is 0.30000000000000004 — floating-point precision issue
\`\`\`

**Bug 3: Forgetting to reset**
\`\`\`java
int count = 0;
for (int round = 0; round < 3; round++) {
    // count is never reset between rounds — accumulates across all rounds
    for (int i = 0; i < 5; i++) {
        count++;
    }
}
\`\`\`

---

## Thinking in State

When debugging, ask:
- What state do I have right now?
- What state should I have?
- Which instruction produced the wrong state?

Add \`System.out.println\` statements to print state at critical points:

\`\`\`java
System.out.println("Before loop: balance = " + balance);
for (...) {
    System.out.println("  After transaction: balance = " + balance);
}
System.out.println("Final balance: " + balance);
\`\`\`

This is called **printf debugging** — temporarily adding print statements to trace state.

---

## What You Learned

- State is the current value of all variables at a point in time
- Every instruction is a state transition
- Bugs are incorrect state transitions
- Mutable state should be minimized where possible
- Printf debugging: print state at key points to find where it diverges from expectations

## What Comes Next

State lives in variables — and variables have scope. The next lesson explains scope and how long variables live.

Continue to:
**3.3 Scope and Variable Lifetime**
`,
};
