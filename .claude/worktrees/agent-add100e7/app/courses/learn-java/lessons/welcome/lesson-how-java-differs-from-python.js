export const lessonHowJavaDiffersFromPython = {
  id: "how-java-differs-from-python",
  title: "How Java Differs from Python",
  hasChallenge: false,
  article: `
## How Java Differs from Python

If you've used Python before, Java will feel unfamiliar at first.

Not harder — just different. And the differences are deliberate.

Understanding why Java works the way it does will save you hours of frustration.

---

## Static Typing vs Dynamic Typing

In Python, you can do this:

\`\`\`python
x = 10
x = "hello"  # perfectly valid — x just changed type
\`\`\`

In Java, this is a compile error:

\`\`\`java
int x = 10;
x = "hello"; // ERROR: incompatible types
\`\`\`

In Java, every variable has a **fixed type declared at compile time**.

This is called **static typing**. The Java compiler checks types before the program ever runs.

The benefit: an entire class of bugs (type errors) is caught before you ship. The tradeoff: more upfront declarations.

---

## Compiled vs Interpreted

Python is typically interpreted — a Python interpreter reads your code and executes it line by line.

Java is compiled first, then executed on the JVM:

1. You write \`.java\` source files
2. The Java compiler (\`javac\`) compiles them to \`.class\` bytecode files
3. The JVM runs the bytecode

This means Java catches syntax and type errors **before** the program runs, not during execution.

---

## Object-Oriented by Default

Python supports OOP but doesn't require it. You can write an entire Python script with no classes.

Java is **OOP-first**. Every piece of code lives inside a class — even your \`main\` method. There is no such thing as a Java program with no class.

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

This is the simplest possible Java program. It already has a class.

---

## Verbosity

Java is more verbose than Python.

Python:
\`\`\`python
print("Hello")
\`\`\`

Java:
\`\`\`java
System.out.println("Hello");
\`\`\`

Python loops:
\`\`\`python
for item in items:
    print(item)
\`\`\`

Java loops:
\`\`\`java
for (String item : items) {
    System.out.println(item);
}
\`\`\`

The verbosity is not pointless. It makes code **explicit** — the types, the scope, the intent are all visible in the code itself.

---

## No Whitespace Indentation Rules

Python uses indentation to define blocks:

\`\`\`python
if x > 0:
    print("positive")
\`\`\`

Java uses curly braces:

\`\`\`java
if (x > 0) {
    System.out.println("positive");
}
\`\`\`

Indentation in Java is a style convention — it doesn't affect how the code runs.

---

## Semicolons

Every Java statement ends with a semicolon \`;\`.

This is a common gotcha for Python developers.

\`\`\`java
int x = 10;          // statement — needs semicolon
System.out.println(x); // statement — needs semicolon
\`\`\`

Method definitions and class definitions use \`{ }\` blocks — no semicolon after the closing brace.

---

## What You Learned

- Java is statically typed: every variable type is declared and checked at compile time
- Java compiles to bytecode before running, catching errors early
- Java is OOP-first: all code lives inside classes
- Java is more verbose than Python but that verbosity adds explicitness
- Java uses \`{ }\` for blocks, not indentation
- Every Java statement ends with \`;\`

## What Comes Next

The next lesson explains the JVM — the runtime that makes Java's "write once, run anywhere" promise real.

Continue to:
**0.5 The JVM**
`,
};
