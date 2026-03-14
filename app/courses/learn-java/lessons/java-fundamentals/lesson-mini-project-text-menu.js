export const lessonMiniProjectTextMenu = {
  id: "mini-project-text-menu",
  title: "Mini-Project: Text-Based Menu Program",
  hasChallenge: false,
  article: `
## Overview

Build a text-based menu program in Java.

The user is shown a numbered menu of options. They pick a number. The program runs the corresponding action, then shows the menu again.

This is the pattern used in countless real programs: CLI tools, ATMs, kiosks, terminal-based admin dashboards.

---

## What You're Building

A program that:
- Shows a numbered menu of options
- Reads the user's choice
- Performs the action for that choice
- Returns to the menu
- Exits cleanly when the user chooses the exit option

---

## The Menu to Implement

\`\`\`
===== Main Menu =====
1. Say hello
2. Show current date and time
3. Reverse a string
4. Check if a number is even or odd
5. Exit
\`\`\`

---

## Requirements Checklist (Core)

- [ ] Display the menu on each loop iteration
- [ ] Read the user's choice as an integer
- [ ] Use a loop that continues until the user selects "Exit"
- [ ] Implement each option:
  - [ ] Option 1: Ask for a name, print "Hello, [name]!"
  - [ ] Option 2: Print the current date and time (use \`java.time.LocalDateTime.now()\`)
  - [ ] Option 3: Ask for a string, print it reversed
  - [ ] Option 4: Ask for a number, print whether it's even or odd
  - [ ] Option 5: Print "Goodbye!" and exit
- [ ] Handle invalid input (non-integer or number not in 1–5)

---

## User Experience Checklist (Recommended)

- [ ] Clear separator between menu and output
- [ ] Press "any key to continue" feeling (show menu fresh each time)
- [ ] Don't crash on invalid menu input

---

## Rules

- The menu must reappear after each action
- Selecting Exit must exit cleanly
- Invalid menu selections must show an error, not crash

---

## Suggested Build Plan

1. Create a \`while (true)\` loop
2. Print the menu at the top of each iteration
3. Read the user's choice
4. Use a \`switch\` on the choice
5. Implement each case
6. For Exit (case 5): break out of the loop or call \`System.exit(0)\`
7. In the default case: print "Invalid choice, try again"

**For reversing a string:**
\`\`\`java
new StringBuilder(input).reverse().toString()
\`\`\`

**For current date/time:**
\`\`\`java
import java.time.LocalDateTime;
LocalDateTime.now().toString()
\`\`\`

---

## Testing Checklist

- [ ] Select each option 1–4 and confirm the correct output
- [ ] Select option 5 and confirm the program exits
- [ ] Enter 0 or 6 or 99 — confirm "Invalid choice" is shown
- [ ] Enter a letter instead of a number — confirm it doesn't crash

---

## Extension Challenges

### Upgrade 1 — Sub-Menu
- [ ] Add a "Math tools" option that opens a sub-menu with: square root, power, absolute value

### Upgrade 2 — History
- [ ] Track every option the user selected
- [ ] Add a "Show history" option to the menu

### Upgrade 3 — Settings
- [ ] Add a user name setting (stored as a variable)
- [ ] Option 1 uses the stored name if available: "Hello, Alice!" instead of asking

### Upgrade 4 — Input Validation Loop
- [ ] If the user enters an invalid choice, keep asking until they enter a valid number

---

## Submission Requirements

File name: \`TextMenu.java\`

Run with:
\`\`\`bash
javac TextMenu.java && java TextMenu
\`\`\`

---

## What You're Proving

Completing this project shows you can:
- Design a program that persists and loops
- Structure code with a clear main loop and method calls
- Handle multiple paths through a program
- Manage user input and edge cases
`,
  support: {
    intro: `
Use this support in order: Level 1 → Level 2 → Blueprint → Example Solution.

Try your own version first. The value is in the thinking, not in producing working code from someone else's blueprint.
    `.trim(),

    level1Nudges: [
      "What kind of loop would run until the user explicitly chooses to exit?",
      "How do you print a menu? (Hint: multiple System.out.println calls — or one big one)",
      "How do you read the user's choice as a number?",
      "How do you branch based on the user's numeric choice?",
      "What happens if the user types a letter when you call nextInt()? How could you guard against that?",
    ],

    level2Hints: [
      "A while (true) loop is common for menu programs. Use 'break' or 'return' to exit.",
      "Use a switch statement on the integer choice. The default case handles invalid input.",
      "For option 2, import java.time.LocalDateTime and call LocalDateTime.now().",
      "For reversing a string: new StringBuilder(input).reverse().toString()",
      "To avoid InputMismatchException on letters, use scanner.hasNextInt() before nextInt(), or wrap in try/catch.",
    ],

    blueprint: [
      "Import Scanner and LocalDateTime.",
      "Create Scanner.",
      "Start while (true) loop.",
      "Print the menu.",
      "Read choice: int choice = scanner.nextInt(); scanner.nextLine(); (consume newline)",
      "switch (choice):",
      "  case 1: Read name, print greeting.",
      "  case 2: Print LocalDateTime.now().",
      "  case 3: Read string, reverse it, print it.",
      "  case 4: Read number, check even/odd with %, print result.",
      "  case 5: Print goodbye, break out of loop.",
      "  default: Print 'Invalid choice.'",
      "After loop: close scanner.",
    ],

    debuggingGuide: [
      {
        problem: "My program crashes with InputMismatchException when I type a letter.",
        hint: "scanner.nextInt() throws if input isn't an integer. Use scanner.hasNextInt() before reading, or use a try/catch block around the read.",
      },
      {
        problem: "After option 3 (string reversal), the menu input behaves weirdly.",
        hint: "After scanner.nextInt() for the menu choice, call scanner.nextLine() to consume the leftover newline before reading a string with nextLine().",
      },
      {
        problem: "My loop never exits.",
        hint: "Make sure your Exit case includes a 'break' statement (or 'return' or 'System.exit(0)').",
      },
    ],

    revealSolutionWarning: `
This is one implementation. Yours may look different and still be correct.

Do not copy this without understanding each part.
    `.trim(),

    exampleSolution: `import java.time.LocalDateTime;
import java.util.Scanner;

public class TextMenu {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\\n===== Main Menu =====");
            System.out.println("1. Say hello");
            System.out.println("2. Show current date and time");
            System.out.println("3. Reverse a string");
            System.out.println("4. Check if a number is even or odd");
            System.out.println("5. Exit");
            System.out.print("Choose an option: ");

            if (!scanner.hasNextInt()) {
                System.out.println("Please enter a number.");
                scanner.nextLine();
                continue;
            }

            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline

            switch (choice) {
                case 1 -> {
                    System.out.print("Enter your name: ");
                    String name = scanner.nextLine();
                    System.out.println("Hello, " + name + "!");
                }
                case 2 -> System.out.println("Current time: " + LocalDateTime.now());
                case 3 -> {
                    System.out.print("Enter a string: ");
                    String input = scanner.nextLine();
                    System.out.println("Reversed: " + new StringBuilder(input).reverse());
                }
                case 4 -> {
                    System.out.print("Enter a number: ");
                    int num = scanner.nextInt();
                    scanner.nextLine();
                    System.out.println(num + " is " + (num % 2 == 0 ? "even" : "odd"));
                }
                case 5 -> {
                    System.out.println("Goodbye!");
                    scanner.close();
                    return;
                }
                default -> System.out.println("Invalid choice. Please enter 1–5.");
            }
        }
    }
}`,
  },
};
