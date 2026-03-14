export const lessonTracingExecution = {
  id: "tracing-execution",
  title: "Tracing Execution",
  hasChallenge: false,
  article: `
## Tracing Execution

Tracing execution means following a program line by line in your head, tracking what each variable holds at each step.

This is the most fundamental debugging skill. Before you can use a debugger effectively, you need to be able to trace by hand.

---

## What Tracing Is

Given a piece of code, tracing means:
1. Starting at the first line
2. Executing it mentally
3. Writing down (or holding in your head) the current value of each variable
4. Moving to the next line
5. Repeating

You are simulating the JVM.

---

## A Tracing Exercise

\`\`\`java
int x = 5;
int y = 3;
int z = x + y;
x = x * 2;
y = z - x;
System.out.println(y);
\`\`\`

Trace it:

| Line | x | y | z |
|---|---|---|---|
| \`int x = 5\` | 5 | — | — |
| \`int y = 3\` | 5 | 3 | — |
| \`int z = x + y\` | 5 | 3 | 8 |
| \`x = x * 2\` | 10 | 3 | 8 |
| \`y = z - x\` | 10 | -2 | 8 |
| \`println(y)\` | — | prints **-2** | — |

---

## Tracing Through Conditionals

\`\`\`java
int score = 72;
String grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}

System.out.println(grade);
\`\`\`

Trace:
- \`score = 72\`
- Is \`72 >= 90\`? No — skip
- Is \`72 >= 80\`? No — skip
- Is \`72 >= 70\`? Yes — \`grade = "C"\`
- Print \`"C"\`

---

## Tracing Through Loops

\`\`\`java
int total = 0;
for (int i = 1; i <= 5; i++) {
    total += i;
}
System.out.println(total);
\`\`\`

| Iteration | i | total |
|---|---|---|
| Start | 1 | 0 |
| i=1 | 1 | 1 |
| i=2 | 2 | 3 |
| i=3 | 3 | 6 |
| i=4 | 4 | 10 |
| i=5 | 5 | 15 |
| i=6 | — | loop ends |

Output: \`15\`

---

## Tracing Through Method Calls

When a method is called:
1. Execution jumps to the method
2. Parameters receive the argument values
3. The method body executes
4. The return value is passed back
5. Execution continues where the method was called

\`\`\`java
public static int square(int n) {
    return n * n;
}

// In main:
int result = square(4);
System.out.println(result);
\`\`\`

Trace:
- Call \`square(4)\` → n = 4
- Return \`4 * 4 = 16\`
- \`result = 16\`
- Print \`16\`

---

## Why Tracing Matters

When your program outputs the wrong value, tracing tells you exactly which line produced the wrong value and why.

Without tracing, debugging is guessing.
With tracing, debugging is systematic.

Practice tracing on every program you write until it becomes automatic.

---

## What You Learned

- Tracing is mentally simulating the JVM, line by line
- Track variable values in a table as you trace
- Conditionals: follow the branch that evaluates to true
- Loops: trace each iteration, tracking all variables
- Method calls: jump to method, run body, return to call site

## What Comes Next

Tracing teaches you to follow individual lines. The next concept is understanding how state changes over time as a program runs.

Continue to:
**3.2 State Change Over Time**
`,
};
