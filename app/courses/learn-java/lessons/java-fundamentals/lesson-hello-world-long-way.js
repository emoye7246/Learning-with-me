export const lessonHelloWorldLongWay = {
  id: "hello-world-long-way",
  title: "Hello World — The Long Way",
  hasChallenge: false,
  article: `
## Hello World — The Long Way

Every Java tutorial shows Hello World. Almost none of them explain it.

This lesson does the opposite. You will read every token and understand what it does.

---

## The Program

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

This is 5 lines and contains 12 distinct concepts. Let's go through them.

---

## \`public\`

\`public\` is an **access modifier**.

It means: this class (or method) is accessible from any other code.

Java has four access modifiers: \`public\`, \`private\`, \`protected\`, and package-private (no keyword). You'll learn all of them in the OOP module. For now, use \`public\` for your class and \`main\` method.

---

## \`class\`

\`class\` is a keyword that tells Java you're defining a class.

Everything in Java lives inside a class. Classes are blueprints — they define what data and behavior a thing has. Even this simple program is a class.

---

## \`HelloWorld\`

This is the **class name**.

Rules:
- Must start with a letter (not a number or symbol)
- By convention, class names use **UpperCamelCase**: \`HelloWorld\`, \`BankAccount\`, \`UserProfile\`
- The filename **must match**: \`HelloWorld.java\`

---

## \`{ }\` — Curly Braces

The opening \`{\` starts the class body. The closing \`}\` ends it.

Everything inside these braces belongs to the class.

Java uses curly braces — not indentation — to define scope. The indentation is just style.

---

## \`static\`

\`static\` means this method belongs to the **class itself**, not to an instance of the class.

This matters for \`main\` because the JVM needs to call it without creating an object first. So \`main\` must be \`static\`.

You'll fully understand static in the OOP module. For now, just know it's required here.

---

## \`void\`

\`void\` is the **return type** of the method.

It means: this method doesn't return a value.

In Java, every method must declare what type it returns (or \`void\` if nothing). You'll write methods that return \`int\`, \`String\`, and other types later.

---

## \`main\`

This is the **method name**.

The JVM looks specifically for a method named \`main\` with the signature \`public static void main(String[] args)\`. This exact signature is the entry point of your program.

Change the name to anything else, and the JVM won't know where to start.

---

## \`String[] args\`

This is the **parameter** of the \`main\` method.

- \`String\` — the type (a sequence of characters)
- \`[]\` — this is an **array** (a list of values)
- \`args\` — the parameter name

\`args\` contains any command-line arguments passed when running the program. For example, if you run:

\`\`\`bash
java HelloWorld Alice
\`\`\`

Then \`args[0]\` is \`"Alice"\`. For now, you won't use \`args\` — but the parameter must still be there.

---

## \`System.out.println\`

This is the most common way to print output in Java.

- \`System\` — a class in the Java standard library
- \`out\` — a static field on \`System\`, representing the standard output stream
- \`println\` — a method that prints a string and adds a newline (\`\\n\`) at the end

Compare with \`print\` (no newline) and \`printf\` (formatted output).

---

## \`"Hello, World!"\`

This is a **String literal** — a sequence of characters enclosed in double quotes.

Java Strings are always double quotes. Single quotes (\`'A'\`) are for characters (\`char\`), not Strings.

---

## \`;\` — The Semicolon

Every statement in Java ends with a semicolon.

If you forget it, the compiler will tell you exactly where. This is one of the most common errors beginners make.

---

## Putting It Together

\`\`\`
public class HelloWorld {           <- class declaration
    public static void main(        <- entry point method
        String[] args               <- parameter: command-line args
    ) {
        System.out.println(         <- print method
            "Hello, World!"         <- string literal
        );                          <- end of statement
    }                               <- end of method
}                                   <- end of class
\`\`\`

---

## What You Learned

- Every Java program lives in a class; the filename must match the class name
- The \`main\` method with signature \`public static void main(String[] args)\` is the entry point
- \`System.out.println\` prints a line to the terminal
- **Every statement ends with \`;\`**
- \`public\`, \`static\`, \`void\` each have specific meanings you'll learn more deeply in later modules

## What Comes Next

Now that you understand the structure, let's learn how to store data — variables and their types.

Continue to:
**2.3 Variables and Type Declarations**
`,
};
