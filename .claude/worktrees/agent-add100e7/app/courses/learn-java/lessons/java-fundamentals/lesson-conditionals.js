export const lessonConditionals = {
  id: "conditionals",
  title: "Conditionals",
  hasChallenge: false,
  article: `
## Conditionals

Conditionals let your program make decisions — run this code if a condition is true, otherwise run that code.

---

## The \`if\` Statement

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
}
\`\`\`

The code inside the \`{ }\` only runs if the condition in parentheses evaluates to \`true\`.

---

## \`if\` / \`else\`

\`\`\`java
int score = 75;

if (score >= 90) {
    System.out.println("Grade: A");
} else {
    System.out.println("Grade: B or lower");
}
\`\`\`

The \`else\` block runs when the condition is \`false\`.

---

## \`if\` / \`else if\` / \`else\`

\`\`\`java
int score = 75;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else if (score >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: F");
}
\`\`\`

Java evaluates conditions top to bottom. The first condition that is \`true\` executes its block; the rest are skipped.

---

## Nested Conditionals

You can put conditionals inside other conditionals:

\`\`\`java
int age = 20;
boolean hasId = true;

if (age >= 18) {
    if (hasId) {
        System.out.println("Access granted");
    } else {
        System.out.println("Please show ID");
    }
} else {
    System.out.println("Access denied — must be 18+");
}
\`\`\`

Nested conditionals can become hard to read. Often you can flatten them with logical operators:

\`\`\`java
if (age >= 18 && hasId) {
    System.out.println("Access granted");
}
\`\`\`

---

## The Ternary Operator

A shorthand for simple if/else that returns a value:

\`\`\`java
int age = 20;
String status = (age >= 18) ? "adult" : "minor";
System.out.println(status);   // "adult"
\`\`\`

Syntax: \`condition ? valueIfTrue : valueIfFalse\`

Use the ternary for simple, readable one-liners. Avoid it for complex logic — a regular \`if\` is clearer.

---

## Common Mistakes

**Mistake 1: Using \`=\` instead of \`==\`**
\`\`\`java
if (x = 5) { ... }   // ERROR: assignment in condition, not comparison
if (x == 5) { ... }  // Correct
\`\`\`

**Mistake 2: Forgetting that Strings need \`.equals()\`**
\`\`\`java
String color = "red";
if (color == "red") { ... }        // Wrong — compares references
if (color.equals("red")) { ... }   // Correct — compares content
\`\`\`

**Mistake 3: Missing braces (valid but risky)**
\`\`\`java
if (score > 90)
    System.out.println("A");       // Works, but risky
    System.out.println("Great!");  // This always runs! Not in the if block.
\`\`\`

Always use curly braces, even for single-line bodies.

---

## A Complete Example

\`\`\`java
public class Temperature {
    public static void main(String[] args) {
        double temp = 22.5;

        if (temp < 0) {
            System.out.println("Freezing");
        } else if (temp < 10) {
            System.out.println("Cold");
        } else if (temp < 20) {
            System.out.println("Cool");
        } else if (temp < 30) {
            System.out.println("Comfortable");
        } else {
            System.out.println("Hot");
        }
    }
}
\`\`\`

---

## What You Learned

- \`if\`, \`else if\`, \`else\` for multi-way decisions
- Conditions evaluate to \`boolean\`
- The ternary operator for simple value selection
- Always use curly braces to avoid scope bugs
- Always use \`.equals()\` for String comparison, never \`==\`

## What Comes Next

For situations where you're testing a single variable against many specific values, Java's \`switch\` statement (and the modern switch expression) is cleaner than a chain of \`if/else\`.

Continue to:
**2.8 Switch Statements**
`,
};
