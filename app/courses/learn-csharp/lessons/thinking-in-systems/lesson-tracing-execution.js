export const lessonTracingExecution = {
  id: "tracing-execution-cs",
  title: "Tracing Execution",
  hasChallenge: false,
  article: `
## Tracing Execution

Tracing is the ability to mentally simulate what a program does, step by step, without running it. It is the most fundamental debugging skill. Developers who can trace code rarely get stuck. Developers who can't trace are always at the mercy of "run and hope."

---

## What Tracing Means

Tracing means reading code line by line and tracking what every variable holds at every step. You maintain a mental model of the program's state as it evolves.

Consider this program:

\`\`\`csharp
int x = 5;
int y = 10;
int z = x + y;
x = z - 3;
Console.WriteLine(x);
\`\`\`

Trace it:

| Line | x | y | z | Notes |
|---|---|---|---|---|
| \`int x = 5\` | 5 | — | — | |
| \`int y = 10\` | 5 | 10 | — | |
| \`int z = x + y\` | 5 | 10 | 15 | z = 5 + 10 |
| \`x = z - 3\` | 12 | 10 | 15 | x = 15 - 3 |
| \`Console.WriteLine(x)\` | 12 | 10 | 15 | prints 12 |

Output: \`12\`

This seems obvious for a simple example. The skill becomes critical when programs involve loops, conditionals, and method calls.

---

## Tracing a Loop

\`\`\`csharp
int total = 0;
for (int i = 1; i <= 5; i++)
{
    total += i;
}
Console.WriteLine(total);
\`\`\`

Trace the loop:

| i | total before | total after |
|---|---|---|
| 1 | 0 | 1 |
| 2 | 1 | 3 |
| 3 | 3 | 6 |
| 4 | 6 | 10 |
| 5 | 10 | 15 |

Output: \`15\`

Notice: trace by tracking state changes, not by "what does this code do in general." The question is not "what does \`+=\` do?" — you know that. The question is "what is \`total\` right now?"

---

## Tracing Conditionals

\`\`\`csharp
int[] numbers = { 3, 7, 2, 8, 5 };
int max = numbers[0];

for (int i = 1; i < numbers.Length; i++)
{
    if (numbers[i] > max)
        max = numbers[i];
}

Console.WriteLine(max);
\`\`\`

Trace:

| i | numbers[i] | max before | condition | max after |
|---|---|---|---|---|
| 1 | 7 | 3 | 7 > 3 = true | 7 |
| 2 | 2 | 7 | 2 > 7 = false | 7 |
| 3 | 8 | 7 | 8 > 7 = true | 8 |
| 4 | 5 | 8 | 5 > 8 = false | 8 |

Output: \`8\`

---

## Tracing Method Calls

When tracing a method call, you "jump into" the method with the actual argument values substituted for the parameters:

\`\`\`csharp
int Multiply(int a, int b)
{
    int result = a * b;
    return result;
}

int x = 4;
int y = Multiply(x, 3);
Console.WriteLine(y);
\`\`\`

Trace:
1. \`x = 4\`
2. Call \`Multiply(4, 3)\` — \`a = 4\`, \`b = 3\`
3. Inside: \`result = 4 * 3 = 12\`
4. Return \`12\`
5. \`y = 12\`
6. Print \`12\`

---

## Why Tracing Is Better Than Running

Running the code tells you what happens. Tracing tells you why.

If you run code and get an unexpected result, running it again with different inputs tells you more symptoms but not the cause. Tracing lets you isolate the exact line where reality diverged from your expectation.

The practice:
1. Before running any new code, trace it mentally and predict the output
2. Run it
3. If the output doesn't match your prediction, trace again — the mismatch tells you where your understanding is wrong

This loop — predict, run, compare — is how you build accurate mental models of code.

---

## What Comes Next

The next lesson covers state change over time — how a program's state evolves through its execution, and how to reason about state at any given point.
`,
};
