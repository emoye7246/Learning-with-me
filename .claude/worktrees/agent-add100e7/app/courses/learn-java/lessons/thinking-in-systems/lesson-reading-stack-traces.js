export const lessonReadingStackTraces = {
  id: "reading-stack-traces",
  title: "Reading Stack Traces",
  hasChallenge: false,
  article: `
## Reading Stack Traces

When a Java program throws an unhandled exception, it prints a stack trace to the console.

Most beginners see a stack trace and panic. Experienced developers read it and know exactly where to look.

---

## A Stack Trace Example

Suppose this program:
\`\`\`java
public class StackTraceDemo {
    public static void main(String[] args) {
        printLength(null);
    }

    public static void printLength(String s) {
        System.out.println(s.length());
    }
}
\`\`\`

Produces this stack trace:
\`\`\`
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "s" is null
    at StackTraceDemo.printLength(StackTraceDemo.java:7)
    at StackTraceDemo.main(StackTraceDemo.java:3)
\`\`\`

---

## How to Read It — Top to Bottom

**Line 1: The exception type and message**
\`\`\`
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "s" is null
\`\`\`
- Exception type: \`NullPointerException\`
- Message: "Cannot invoke \\"String.length()\\" because \\"s\\" is null"
- This tells you exactly what went wrong

**Line 2: Where the exception was thrown**
\`\`\`
    at StackTraceDemo.printLength(StackTraceDemo.java:7)
\`\`\`
- Class: \`StackTraceDemo\`
- Method: \`printLength\`
- File: \`StackTraceDemo.java\`
- Line number: \`7\`

This is the exact line that threw the exception. Go there first.

**Line 3: The caller**
\`\`\`
    at StackTraceDemo.main(StackTraceDemo.java:3)
\`\`\`
- \`main\` called \`printLength\` on line 3 with a null argument

The stack trace reads top-to-bottom from most-recent to least-recent call. The top entry is where the exception was thrown.

---

## The Most Useful Line

In most stack traces, the first line from your own code (not from the Java standard library) is where to look.

Ignore lines that reference \`java.lang\`, \`java.util\`, \`sun.*\`, etc. — those are Java internals. Your bug is in your code.

---

## Common Stack Traces

**NullPointerException:**
\`\`\`
java.lang.NullPointerException: Cannot invoke "String.length()" because "name" is null
\`\`\`
→ You're calling a method on a variable that is null. Check where it should be initialized.

**ArrayIndexOutOfBoundsException:**
\`\`\`
java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
\`\`\`
→ You accessed index 5 in an array of length 5. Valid indices are 0–4.

**NumberFormatException:**
\`\`\`
java.lang.NumberFormatException: For input string: "abc"
\`\`\`
→ You tried to parse "abc" as a number. The input isn't numeric.

**ClassCastException:**
\`\`\`
java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer
\`\`\`
→ You tried to cast a String to Integer. The types are incompatible.

---

## Ctrl+Click in IntelliJ

In IntelliJ's Run console, you can Ctrl+click (Cmd+click on Mac) on a filename and line number in a stack trace. IntelliJ will jump to that exact line in your code.

This is much faster than manually finding the file.

---

## What You Learned

- Stack traces show the exception type, message, and call chain
- The first line is the exception type and what went wrong
- The subsequent \`at\` lines are the call stack from most-recent to least-recent
- Start debugging at the first line from your own code
- In IntelliJ, Ctrl+click a filename in the stack trace to jump to that line

## What Comes Next

Finding bugs is one skill. Writing code that doesn't have bugs in the first place is another. The next lesson covers refactoring for clarity.

Continue to:
**3.7 Refactoring for Code Clarity**
`,
};
