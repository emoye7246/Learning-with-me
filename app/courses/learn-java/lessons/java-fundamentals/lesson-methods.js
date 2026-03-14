export const lessonMethods = {
  id: "methods",
  title: "Methods",
  hasChallenge: false,
  article: `
## Methods

A method is a named block of code that performs a specific task.

Methods let you write code once, name it, and call it from anywhere. This is the foundation of reusable software.

---

## Defining a Method

\`\`\`java
public static void printGreeting(String name) {
    System.out.println("Hello, " + name + "!");
}
\`\`\`

Breaking it down:
- \`public\` — access modifier (visible to other classes)
- \`static\` — belongs to the class, not an instance (we'll drop this in OOP)
- \`void\` — return type (this method doesn't return anything)
- \`printGreeting\` — method name (lowerCamelCase by convention)
- \`String name\` — parameter (the input the method receives)

---

## Calling a Method

\`\`\`java
public class Methods {
    public static void main(String[] args) {
        printGreeting("Alice");   // call the method
        printGreeting("Bob");
    }

    public static void printGreeting(String name) {
        System.out.println("Hello, " + name + "!");
    }
}
\`\`\`

Output:
\`\`\`
Hello, Alice!
Hello, Bob!
\`\`\`

---

## Returning Values

Methods can return values using the \`return\` keyword:

\`\`\`java
public static int add(int a, int b) {
    return a + b;
}

// Calling it:
int result = add(3, 4);
System.out.println(result);   // 7
\`\`\`

The return type in the method signature (\`int\`) must match what you actually return.

\`void\` methods can have a bare \`return;\` to exit early, or no \`return\` at all.

---

## Multiple Parameters

\`\`\`java
public static double calculateBMI(double weightKg, double heightM) {
    return weightKg / (heightM * heightM);
}

double bmi = calculateBMI(70, 1.75);
System.out.printf("BMI: %.1f%n", bmi);   // BMI: 22.9
\`\`\`

---

## Method Overloading

Java allows multiple methods with the same name if their parameter lists differ:

\`\`\`java
public static int add(int a, int b) {
    return a + b;
}

public static double add(double a, double b) {
    return a + b;
}

public static int add(int a, int b, int c) {
    return a + b + c;
}
\`\`\`

Java chooses the right version based on the argument types you pass. This is called **method overloading**.

---

## Early Return

A method can return before reaching the end:

\`\`\`java
public static String classify(int score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "Below C";
}
\`\`\`

Early returns keep code flat and avoid deeply nested if/else chains.

---

## The Single Responsibility Principle

Each method should do **one thing**.

Instead of:
\`\`\`java
// Does too many things
public static void doEverything() {
    // read input
    // validate input
    // process input
    // output result
}
\`\`\`

Write:
\`\`\`java
public static String readInput() { ... }
public static boolean isValid(String input) { ... }
public static int process(String input) { ... }
public static void printResult(int result) { ... }
\`\`\`

Small, focused methods are easier to test, debug, and reuse.

---

## What You Learned

- Methods are named blocks of reusable code
- Signature includes: access modifier, \`static\`, return type, name, parameters
- \`return\` sends a value back to the caller
- Overloading lets multiple methods share a name with different parameters
- Each method should do one thing (Single Responsibility Principle)

## What Comes Next

Your programs can now use logic, loops, and methods. The next lesson teaches how to read input from the user using Scanner.

Continue to:
**2.12 Reading Input with Scanner**
`,
};
