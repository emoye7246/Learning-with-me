export const lessonLoops = {
  id: "loops",
  title: "Loops",
  hasChallenge: false,
  article: `
## Loops

Loops repeat code. Java has three types: \`for\`, \`while\`, and \`do-while\`.

---

## The \`for\` Loop

Use when you know how many times to repeat:

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}
// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4
\`\`\`

The three parts of a for loop:
1. **Initialization**: \`int i = 0\` — runs once before the loop starts
2. **Condition**: \`i < 5\` — checked before each iteration; loop stops when false
3. **Update**: \`i++\` — runs after each iteration

---

## The Enhanced For Loop (For-Each)

For iterating over arrays and collections — cleaner when you don't need the index:

\`\`\`java
String[] names = {"Alice", "Bob", "Carol"};

for (String name : names) {
    System.out.println("Hello, " + name);
}
\`\`\`

Read this as: "for each String name in names, do..."

---

## The \`while\` Loop

Use when you don't know how many times to repeat upfront:

\`\`\`java
int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
    count++;
}
\`\`\`

The loop continues as long as the condition is \`true\`. If the condition starts \`false\`, the body never runs.

---

## The \`do-while\` Loop

Like \`while\`, but the body runs **at least once** before the condition is checked:

\`\`\`java
int count = 0;
do {
    System.out.println("Count: " + count);
    count++;
} while (count < 5);
\`\`\`

Use \`do-while\` when you need to execute the body first and then decide whether to continue — common for menu-driven programs that should show options at least once.

---

## \`break\` and \`continue\`

**\`break\`** — immediately exits the loop:

\`\`\`java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;   // exits the loop when i is 5
    }
    System.out.println(i);
}
// Output: 0 1 2 3 4
\`\`\`

**\`continue\`** — skips the rest of the current iteration and moves to the next:

\`\`\`java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;   // skip even numbers
    }
    System.out.println(i);
}
// Output: 1 3 5 7 9
\`\`\`

---

## Infinite Loops

An infinite loop runs forever. This is a bug in most cases, but sometimes intentional (e.g., a server listening for requests):

\`\`\`java
while (true) {
    // This runs forever unless you break out of it
    String input = scanner.nextLine();
    if (input.equals("quit")) break;
    processInput(input);
}
\`\`\`

If you accidentally create an infinite loop, stop it with **Ctrl+C** in the terminal.

---

## Nested Loops

Loops inside loops:

\`\`\`java
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 3; col++) {
        System.out.print(row * col + "\\t");
    }
    System.out.println();
}
// Output:
// 1    2    3
// 2    4    6
// 3    6    9
\`\`\`

---

## Choosing the Right Loop

| Situation | Loop to Use |
|---|---|
| Known number of iterations | \`for\` |
| Iterating over an array/list | enhanced \`for\` |
| Unknown iterations, check first | \`while\` |
| Must run at least once | \`do-while\` |

---

## What You Learned

- \`for\`: initialization, condition, update — ideal for counted iterations
- Enhanced \`for\`: clean iteration over arrays and collections
- \`while\`: condition-first, zero or more iterations
- \`do-while\`: body-first, one or more iterations
- \`break\` exits the loop; \`continue\` skips to the next iteration

## What Comes Next

Now that you can repeat operations, you need a way to store multiple values at once. The next lesson covers Java arrays.

Continue to:
**2.10 Arrays**
`,
};
