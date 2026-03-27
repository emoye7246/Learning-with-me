export const lessonScopeVariableLifetime = {
  id: "scope-variable-lifetime",
  title: "Scope and Variable Lifetime",
  hasChallenge: false,
  article: `
## Scope and Variable Lifetime

Scope determines where a variable can be accessed. Lifetime determines how long a variable exists in memory.

Understanding scope prevents entire categories of bugs.

---

## Block Scope

In Java, a variable declared inside a block \`{ }\` is only accessible within that block:

\`\`\`java
public static void main(String[] args) {
    int x = 10;             // x is in method scope

    if (x > 5) {
        int y = 20;         // y is in if-block scope
        System.out.println(x + y);   // 30 — both x and y are visible here
    }

    System.out.println(x);  // OK — x is still in scope
    System.out.println(y);  // ERROR: y is out of scope here
}
\`\`\`

The variable \`y\` is destroyed when the \`if\` block ends.

---

## Method Scope

Variables declared inside a method exist only for the duration of that method call:

\`\`\`java
public static void greet(String name) {
    String message = "Hello, " + name;   // message exists only in this method
    System.out.println(message);
}
// message is gone after greet() returns
\`\`\`

Each method call creates its own copy of local variables. This is why recursion works.

---

## Loop Scope

Variables declared in a for loop's initializer are scoped to that loop:

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);   // OK
}
System.out.println(i);       // ERROR: i is out of scope
\`\`\`

Variables declared inside the loop body are re-created each iteration:

\`\`\`java
for (int i = 0; i < 3; i++) {
    int doubled = i * 2;   // new variable created each iteration
    System.out.println(doubled);
}
\`\`\`

---

## Shadowing

You can declare a variable with the same name in an inner scope, hiding the outer variable:

\`\`\`java
int x = 10;
{
    int x = 20;   // ERROR in Java — Java doesn't allow shadowing local variables in the same method
}
\`\`\`

Java actually prevents this for local variables in the same method — the compiler will refuse. This is a safety feature.

However, a method parameter or local variable can shadow a class field (covered in OOP).

---

## Class-Level (Field) Scope

Variables declared at the class level (fields) are accessible in all methods of the class:

\`\`\`java
public class Counter {
    static int count = 0;   // class-level field

    public static void increment() {
        count++;   // accessible here
    }

    public static void printCount() {
        System.out.println(count);   // and here
    }
}
\`\`\`

Fields have a longer lifetime than local variables — they exist as long as the class (or object) exists.

---

## Why Scope Matters for Bug Prevention

Tight scope prevents variables from being modified in unexpected places.

**Bad — too wide scope:**
\`\`\`java
int result;
// ... 50 lines of code ...
result = compute();   // Could result have been accidentally modified between?
\`\`\`

**Better — declare close to use:**
\`\`\`java
// ... 50 lines of code ...
int result = compute();   // declared and assigned together
\`\`\`

Declare variables in the narrowest scope that makes sense. This limits where they can be changed, making code easier to reason about.

---

## What You Learned

- Variables are only accessible within the block \`{ }\` they were declared in
- Method variables are created at the method call and destroyed when the method returns
- Loop counters declared in \`for (int i = ...)\` exist only inside the loop
- Java prevents shadowing of local variables in the same method
- Declare variables in the narrowest scope possible

## What Comes Next

Now that you can reason about code and state, the next lesson teaches you to use IntelliJ's debugger — which lets you step through code live and inspect variables at runtime.

Continue to:
**3.4 Using the Java Debugger**
`,
};
