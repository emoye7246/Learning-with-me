export const lessonVariablesTypesDeclarations = {
  id: "variables-types-declarations",
  title: "Variables and Type Declarations",
  hasChallenge: false,
  article: `
## Variables and Type Declarations

A variable is a named location in memory that stores a value.

In Java, every variable has a **type** that is declared when the variable is created and cannot change.

---

## Declaring a Variable

The syntax for declaring a variable in Java:

\`\`\`java
type variableName = value;
\`\`\`

Examples:

\`\`\`java
int age = 25;
double price = 9.99;
boolean isActive = true;
String name = "Alice";
\`\`\`

---

## Declaration Without Initialization

You can declare a variable without giving it a value immediately:

\`\`\`java
int score;        // declared but not initialized
score = 100;      // assigned later
\`\`\`

But you cannot **use** a variable before it has been assigned a value. The compiler will stop you:

\`\`\`java
int score;
System.out.println(score);   // ERROR: variable score might not have been initialized
\`\`\`

---

## Local Variable Type Inference: \`var\`

Since Java 10, you can use \`var\` to let the compiler infer the type:

\`\`\`java
var name = "Alice";   // compiler knows this is a String
var count = 42;       // compiler knows this is an int
\`\`\`

\`var\` only works for local variables (inside methods). The type is still fixed at compile time — \`var\` is just shorthand.

---

## Naming Rules

**Rules (enforced by compiler):**
- Must start with a letter, \`$\`, or \`_\`
- Cannot be a Java keyword (\`int\`, \`class\`, \`for\`, etc.)
- Case-sensitive: \`age\` and \`Age\` are different variables

**Conventions (enforced by teams):**
- Use **lowerCamelCase**: \`firstName\`, \`totalScore\`, \`isValid\`
- Use descriptive names: \`userAge\` is better than \`a\`
- Constants use **UPPER_SNAKE_CASE**: \`MAX_SIZE\`, \`DEFAULT_TIMEOUT\`

---

## Constants with \`final\`

If a variable should never change after being set, declare it as \`final\`:

\`\`\`java
final int MAX_SCORE = 100;
MAX_SCORE = 200;   // ERROR: cannot assign a value to final variable
\`\`\`

Use \`final\` for values that are conceptually constant.

---

## Multiple Declarations

You can declare multiple variables of the same type on one line, but it's usually clearer to use separate lines:

\`\`\`java
// Allowed but often frowned upon:
int x = 1, y = 2, z = 3;

// Clearer:
int x = 1;
int y = 2;
int z = 3;
\`\`\`

---

## A Complete Example

\`\`\`java
public class Variables {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 30;
        double salary = 75000.50;
        boolean employed = true;
        final int RETIREMENT_AGE = 65;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        System.out.println("Employed: " + employed);
        System.out.println("Years until retirement: " + (RETIREMENT_AGE - age));
    }
}
\`\`\`

Output:
\`\`\`
Name: Alice
Age: 30
Salary: 75000.5
Employed: true
Years until retirement: 35
\`\`\`

---

## What You Learned

- Every Java variable has a declared type that cannot change
- Syntax: \`type variableName = value;\`
- \`var\` lets the compiler infer the type (Java 10+)
- \`final\` makes a variable a constant
- Local variables must be initialized before use
- lowerCamelCase for variables, UPPER_SNAKE_CASE for constants

## What Comes Next

Now that you know how to declare variables, the next lesson explores Java's primitive types in detail.

Continue to:
**2.4 Primitive Types**
`,
};
