export const lessonMiniProjectSimpleCalculator = {
  id: "mini-project-simple-calculator-cs",
  title: "Mini Project: Simple Calculator",
  hasChallenge: false,
  article: `
## Mini Project: Simple Calculator

This project builds a command-line calculator that handles the four arithmetic operations, demonstrates clean input parsing, and introduces the idea of organizing code into separate concerns.

---

## Project Specification

Build a console calculator that:

1. Displays a menu of operations: Add, Subtract, Multiply, Divide
2. Asks the user to choose an operation
3. Asks for two numbers
4. Displays the result
5. Loops until the user chooses to exit
6. Handles division by zero gracefully

---

## Skills This Practices

- **switch expressions** — dispatching to operations by operator choice
- **Method decomposition** — each operation in a focused method
- **Input validation** — parsing doubles, validating menu choices
- **Exception handling** — or defensive checks for division by zero
- **Loop control** — menu-driven programs

---

## Sample Interaction

\`\`\`
=== Simple Calculator ===

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit

Choose an option (1-5): 1
Enter first number: 15.5
Enter second number: 4.2
Result: 15.5 + 4.2 = 19.7

1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit

Choose an option (1-5): 4
Enter first number: 10
Enter second number: 0
Error: Cannot divide by zero.

Choose an option (1-5): 5
Goodbye!
\`\`\`

---

## Core Structure to Build

\`\`\`csharp
double Calculate(double a, double b, string operation)
{
    return operation switch
    {
        "add"      => a + b,
        "subtract" => a - b,
        "multiply" => a * b,
        "divide"   => b != 0
                        ? a / b
                        : throw new DivideByZeroException(),
        _ => throw new ArgumentException($"Unknown operation: {operation}")
    };
}
\`\`\`

---

## Requirements in Detail

**Menu:**
- Show numbered options
- Accept the number OR the operation name (stretch: both)
- Re-display the menu after each calculation

**Input parsing:**
- Use \`double\` for numbers so the calculator handles decimals
- Use \`double.TryParse()\` for validation

**Division by zero:**
- Check before dividing, not after — don't rely on an exception for normal program flow
- Print a clear error message and continue to the menu

**Formatting results:**
- Display the full expression: "15.5 + 4.2 = 19.7"
- Use appropriate decimal formatting — avoid displaying "19.700000000000003"

**Exit:**
- Option 5 exits cleanly with a farewell message

---

## Handling Floating-Point Display

Floating-point arithmetic can produce results like \`0.30000000000000004\`. Format output with \`G6\` or \`F4\` to avoid displaying raw floating-point noise:

\`\`\`csharp
double result = 0.1 + 0.2;
Console.WriteLine(result);        // 0.30000000000000004 — ugly
Console.WriteLine($"{result:G6}"); // 0.3 — better
Console.WriteLine($"{result:F4}"); // 0.3000 — always 4 decimal places
\`\`\`

Choose the format that best serves a calculator use case.

---

## Stretch Goals

1. **History** — keep a list of past calculations and display them with option 6
2. **Chaining** — instead of re-asking for numbers, allow "use previous result as first number"
3. **More operations** — add power (\`Math.Pow\`), square root, modulo
4. **Expression parsing** — accept expressions like "15.5 + 4.2" as a single input string

---

## Architecture Suggestion

Keep these concerns separate:
- **Input reading** — methods that read and validate input
- **Calculation** — pure methods that take numbers and return numbers
- **Display** — methods that format and print results

This separation makes the code easier to understand and change. It's the foundation of good software design.

---

## What Comes Next

The final mini-project in this module is the Grade Calculator — a program with more complex logic that processes multiple pieces of data.
`,
};
