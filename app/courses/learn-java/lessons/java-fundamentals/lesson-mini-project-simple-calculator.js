export const lessonMiniProjectSimpleCalculator = {
  id: "mini-project-simple-calculator",
  title: "Mini-Project: Simple Calculator",
  hasChallenge: false,
  article: `
## Overview

Build a command-line calculator in Java.

The user enters two numbers and an operator (\`+\`, \`-\`, \`*\`, \`/\`). Your program computes and displays the result.

This project builds your skill with Scanner, conditionals, and type handling.

---

## What You're Building

A program that:
- Asks the user to enter the first number
- Asks for an operator
- Asks for the second number
- Computes the result
- Displays it formatted cleanly

---

## Requirements Checklist (Core)

- [ ] Read two numbers from the user (they can be decimals — use \`double\`)
- [ ] Read an operator as a String: \`+\`, \`-\`, \`*\`, or \`/\`
- [ ] Perform the correct operation based on the operator
- [ ] Print the result in a clear format: e.g., \`5.0 + 3.0 = 8.0\`
- [ ] Handle division by zero — print an error instead of crashing
- [ ] Handle an unrecognized operator — print "Unknown operator"

---

## User Experience Checklist (Recommended)

- [ ] Clear prompts for each input
- [ ] Formatted output: use \`%.2f\` to show two decimal places
- [ ] Allow the user to perform multiple calculations (wrap in a loop)
- [ ] Let the user type "quit" to exit

---

## Rules

- Division by zero must be handled gracefully — no exceptions
- Unrecognized operators must show an error message, not crash
- Inputs should be doubles, not ints (handles decimal input)

---

## Suggested Build Plan

1. Create a Scanner
2. Read the first number using \`scanner.nextDouble()\`
3. Read the operator using \`scanner.next()\`
4. Read the second number
5. Use \`if/else\` or a \`switch\` on the operator to compute the result
6. Handle division by zero as a special case inside the division branch
7. Print the result
8. (Optional) Wrap everything in a \`while (true)\` loop and break on "quit"

---

## Testing Checklist

- [ ] Addition: 5 + 3 = 8.00
- [ ] Subtraction: 10 - 4 = 6.00
- [ ] Multiplication: 3 * 7 = 21.00
- [ ] Division: 10 / 4 = 2.50
- [ ] Division by zero — shows error message, doesn't crash
- [ ] Unknown operator (e.g., \`^\`) — shows "Unknown operator"
- [ ] Decimal inputs: 3.5 + 1.5 = 5.00

---

## Extension Challenges

### Upgrade 1 — Modulo Support
- [ ] Add \`%\` as a valid operator
- [ ] Note: \`%\` with doubles is valid in Java

### Upgrade 2 — Continuous Mode
- [ ] Keep asking for new calculations until the user types "quit"
- [ ] Show a menu: "Enter a calculation or 'quit' to exit:"

### Upgrade 3 — History
- [ ] Keep a list of all calculations performed
- [ ] Print the history when the user types "history"

### Upgrade 4 — Input Validation
- [ ] Handle the case where the user types letters instead of a number
- [ ] Use \`scanner.hasNextDouble()\` to check before reading

---

## Submission Requirements

File name: \`Calculator.java\`

Run with:
\`\`\`bash
javac Calculator.java && java Calculator
\`\`\`

---

## What You're Proving

A working calculator demonstrates:
- Reading and parsing user input
- Using conditionals to branch on user choice
- Defensive programming (handling bad input gracefully)
- Thinking about edge cases before they become bugs
`,
  support: {
    intro: `
Use this support in order: Level 1 → Level 2 → Blueprint → Example Solution.

Always try to write the code yourself first. The goal is understanding, not a working program you didn't write.
    `.trim(),

    level1Nudges: [
      "What type should you use for the numbers — int or double? (Hint: what if the user types 3.5?)",
      "How do you read a single word (like an operator) with Scanner?",
      "How do you compare Strings in Java? (Hint: not with ==)",
      "Where exactly should you check for division by zero — before or after dividing?",
      "If the operator is '/', how do you know if the second number is zero?",
    ],

    level2Hints: [
      "Use scanner.nextDouble() for numbers and scanner.next() for the operator.",
      "Use a switch statement (or switch expression) on the operator string.",
      "Inside the '/' case, check: if (b == 0) { print error } else { divide }",
      "The default case in your switch handles unknown operators.",
      "To format output with 2 decimal places: System.out.printf(\"%.2f%n\", result);",
    ],

    blueprint: [
      "Create Scanner.",
      "Print prompt: 'Enter first number:'",
      "Read: double a = scanner.nextDouble();",
      "Print prompt: 'Enter operator (+, -, *, /):'",
      "Read: String op = scanner.next();",
      "Print prompt: 'Enter second number:'",
      "Read: double b = scanner.nextDouble();",
      "Use switch(op):",
      "  case \"+\": result = a + b; break;",
      "  case \"-\": result = a - b; break;",
      "  case \"*\": result = a * b; break;",
      "  case \"/\": if (b == 0) print error; else result = a / b; break;",
      "  default: print 'Unknown operator'; return;",
      "Print: a + ' ' + op + ' ' + b + ' = ' + result (formatted).",
    ],

    debuggingGuide: [
      {
        problem: "My switch statement never matches the operator.",
        hint: "Are you using == to compare strings? Use .equals() instead, or use a switch statement (which uses .equals() automatically for strings).",
      },
      {
        problem: "Division by zero crashes with ArithmeticException.",
        hint: "In Java, double division by zero actually gives Infinity or NaN, not an exception. But it's better to check explicitly: if (b == 0.0) print an error.",
      },
      {
        problem: "Scanner throws an exception when reading numbers.",
        hint: "Make sure you're calling scanner.nextDouble() not scanner.nextLine() for numbers. Also check that you don't have leftover newlines in the buffer.",
      },
    ],

    revealSolutionWarning: `
This is one possible implementation. If yours works and passes the checklist, it's correct.

Read this line by line. Don't copy without understanding.
    `.trim(),

    exampleSolution: `import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double a = scanner.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        String op = scanner.next();

        System.out.print("Enter second number: ");
        double b = scanner.nextDouble();

        double result;
        switch (op) {
            case "+" -> result = a + b;
            case "-" -> result = a - b;
            case "*" -> result = a * b;
            case "/" -> {
                if (b == 0) {
                    System.out.println("Error: Division by zero.");
                    scanner.close();
                    return;
                }
                result = a / b;
            }
            default -> {
                System.out.println("Unknown operator: " + op);
                scanner.close();
                return;
            }
        }

        System.out.printf("%.2f %s %.2f = %.2f%n", a, op, b, result);
        scanner.close();
    }
}`,
  },
};
