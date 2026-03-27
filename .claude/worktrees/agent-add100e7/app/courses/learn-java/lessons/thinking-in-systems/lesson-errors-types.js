export const lessonErrorsTypes = {
  id: "errors-types",
  title: "Error Types",
  hasChallenge: false,
  article: `
## Error Types

Java programs can fail in three fundamentally different ways. Recognizing which type of error you have determines how to fix it.

---

## Syntax Errors

Syntax errors are mistakes in the grammar of the language.

The Java compiler catches these before the program runs. If you have a syntax error, the program won't compile.

Examples:
\`\`\`java
int x = 10        // Missing semicolon
if x > 5 {        // Missing parentheses around condition
String s = "hello  // Missing closing quote
\`\`\`

IntelliJ shows syntax errors as red underlines as you type. Fix them by reading the error message carefully — the compiler usually points to the exact line.

**Characteristic:** Program won't compile. Always fixable. Compiler tells you where.

---

## Runtime Errors (Exceptions)

Runtime errors occur while the program is running. The program compiled fine, but something went wrong during execution.

Java signals runtime errors by throwing **exceptions**. If an exception isn't handled, the program terminates and prints a stack trace.

Common runtime errors:

\`\`\`java
// NullPointerException
String s = null;
s.length();   // s is null — can't call methods on null

// ArrayIndexOutOfBoundsException
int[] arr = {1, 2, 3};
arr[5];   // index 5 doesn't exist

// NumberFormatException
Integer.parseInt("abc");   // "abc" is not a number

// ClassCastException
Object obj = "hello";
Integer i = (Integer) obj;   // String is not an Integer

// StackOverflowError
public static void recurse() { recurse(); }   // infinite recursion
\`\`\`

**Characteristic:** Program compiles and starts. Fails during execution. Stack trace shows where.

---

## Logic Errors (Bugs)

Logic errors are the hardest type. The program compiles and runs without throwing an exception — it just produces the wrong output.

Examples:
\`\`\`java
// Meant to compute average, but forgot the denominator
int sum = a + b + c;
int average = sum;   // should be sum / 3

// Loop runs one too many times (off-by-one)
for (int i = 0; i <= arr.length; i++) {   // should be i < arr.length
    process(arr[i]);   // throws ArrayIndexOutOfBoundsException at last iteration
}

// Wrong comparison operator
if (score = 90) { ... }    // assignment, not comparison — always true in some languages
// Java catches this at compile time (not all languages do)
\`\`\`

**Characteristic:** Program runs successfully but produces wrong results. Requires tracing and debugging to find.

---

## A Decision Tree for Debugging

1. **Can't compile?** → Syntax error. Read the red underline in IntelliJ. Fix the grammar.

2. **Compiles but crashes?** → Runtime error. Read the stack trace. Find the line. Understand why that operation failed.

3. **Runs but wrong output?** → Logic error. Trace through the code. Use the debugger. Find where state diverges from expectation.

---

## What You Learned

- **Syntax errors** — grammar mistakes, caught at compile time, IntelliJ underlines them in red
- **Runtime errors** — exceptions thrown during execution, shown as stack traces
- **Logic errors** — code that runs but produces wrong output, found through tracing and debugging
- Most common exceptions: NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException

## What Comes Next

When your program throws an exception, Java prints a stack trace. The next lesson teaches you to read them efficiently.

Continue to:
**3.6 Reading Stack Traces**
`,
};
