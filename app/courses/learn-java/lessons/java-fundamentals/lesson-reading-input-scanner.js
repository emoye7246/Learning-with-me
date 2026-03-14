export const lessonReadingInputScanner = {
  id: "reading-input-scanner",
  title: "Reading Input with Scanner",
  hasChallenge: false,
  article: `
## Reading Input with Scanner

To make interactive programs, you need to read input from the user. Java's \`Scanner\` class handles this.

---

## Importing and Creating a Scanner

\`\`\`java
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");

        scanner.close();
    }
}
\`\`\`

- \`import java.util.Scanner;\` — brings Scanner into scope
- \`new Scanner(System.in)\` — creates a Scanner that reads from standard input (the keyboard)
- \`scanner.nextLine()\` — reads a full line of text
- \`scanner.close()\` — releases the underlying resource (good practice)

---

## Reading Different Types

\`\`\`java
Scanner scanner = new Scanner(System.in);

System.out.print("Enter your age: ");
int age = scanner.nextInt();

System.out.print("Enter your height (meters): ");
double height = scanner.nextDouble();

System.out.print("Are you employed? (true/false): ");
boolean employed = scanner.nextBoolean();
\`\`\`

Common Scanner methods:
| Method | Reads |
|---|---|
| \`nextLine()\` | Full line as String |
| \`next()\` | Next word (whitespace-delimited) |
| \`nextInt()\` | Next integer |
| \`nextDouble()\` | Next double |
| \`nextLong()\` | Next long |
| \`nextBoolean()\` | Next boolean (true/false) |

---

## The Newline Trap

This is one of the most common Scanner bugs:

\`\`\`java
Scanner scanner = new Scanner(System.in);

System.out.print("Enter your age: ");
int age = scanner.nextInt();    // reads the number, but leaves '\\n' in the buffer

System.out.print("Enter your name: ");
String name = scanner.nextLine();  // reads the leftover '\\n' — name is empty!
\`\`\`

**Fix:** Add an extra \`scanner.nextLine()\` call after reading a number, to consume the newline:

\`\`\`java
int age = scanner.nextInt();
scanner.nextLine();    // consume the leftover newline
String name = scanner.nextLine();  // now correctly reads the name
\`\`\`

---

## Checking Input Availability

\`hasNextInt()\`, \`hasNextDouble()\`, etc. check if there's more input of a given type without consuming it:

\`\`\`java
while (scanner.hasNextInt()) {
    int value = scanner.nextInt();
    System.out.println("Read: " + value);
}
\`\`\`

---

## A Complete Interactive Program

\`\`\`java
import java.util.Scanner;

public class Greeter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("Hello, " + name + "!");
        System.out.println("In 10 years, you will be " + (age + 10) + ".");

        scanner.close();
    }
}
\`\`\`

---

## What You Learned

- \`Scanner\` reads user input from the keyboard
- Common methods: \`nextLine()\`, \`nextInt()\`, \`nextDouble()\`
- After \`nextInt()\` or \`nextDouble()\`, call \`nextLine()\` to consume the leftover newline
- \`hasNextInt()\` and similar methods check input type before reading
- Always close the Scanner when done

## What Comes Next

You've learned the core types. Now let's look at how to convert between types — widening, narrowing, and casting.

Continue to:
**2.13 Type Casting**
`,
};
