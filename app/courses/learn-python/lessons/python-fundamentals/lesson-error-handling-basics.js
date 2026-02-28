export const lessonErrorHandlingBasics = {
  id: "error-handling-basics",
  title: "Error Handling Basics",

  article: `
## Introduction

In the last lesson, you learned how to get input from a user.

You also saw what happens when that input is wrong.

If the user types something that isn't a number and you call \`int()\` on it,
the program crashes.

That crash is called an **exception**.

And Python gives you a way to handle it.

---

## What Is an Exception?

An exception is Python's way of saying:

"Something went wrong. I don't know how to continue."

When an exception is not handled,
the program stops immediately.

You've seen this error message before:

\`\`\`
ValueError: invalid literal for int() with base 10: 'hello'
\`\`\`

That is an exception.

The \`ValueError\` is the **type** of exception.
The rest is the message.

---

## The Mental Model

Think of your program as a set of instructions.

When something breaks mid-instruction,
Python raises an exception and stops.

\`try/except\` lets you say:

"If something goes wrong in this block, don't crash. Do this instead."

You are not hiding the error.

You are deciding what to do when it happens.

---

## Basic try/except

\`\`\`python
try:
    number = int(input("Enter a number: "))
    print("You entered:", number)
except:
    print("That wasn't a valid number.")
\`\`\`

Save.
Run it.

Try typing a word instead of a number.

The program does not crash.
It prints the message and continues.

---

## What Just Happened?

- Python runs the code inside \`try\`.
- If an exception occurs, it jumps to \`except\`.
- The code after \`except\` runs instead of crashing.
- If no exception occurs, \`except\` is skipped entirely.

---

## Catching a Specific Exception Type

The example above catches *any* exception.

That is usually too broad.

Better practice: catch the specific exception you expect.

\`\`\`python
try:
    number = int(input("Enter a number: "))
    print("You entered:", number)
except ValueError:
    print("That wasn't a valid number.")
\`\`\`

\`ValueError\` is raised when a conversion fails.

By naming it, you only catch *that* kind of error.

Other unexpected errors will still surface, which is what you want.

---

## Using else

The \`else\` block runs only when no exception occurred.

\`\`\`python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That wasn't a valid number.")
else:
    print("Got it:", number)
\`\`\`

This separates the success path from the error path clearly.

\`else\` is optional, but it keeps logic clean.

---

## Using finally

The \`finally\` block always runs — whether an exception happened or not.

\`\`\`python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That wasn't a valid number.")
finally:
    print("Done.")
\`\`\`

Use \`finally\` for cleanup steps that must happen regardless.

For now, just know it exists.

---

## Common Mistakes

- **Bare \`except\`** — Catching all exceptions silently hides bugs. Always name the exception type you expect.
- **Swallowing the error** — Handling an exception but doing nothing (no message, no log) makes debugging very hard.
- **Wrapping too much code in \`try\`** — Keep the \`try\` block small. Only wrap the line that might fail.
- **Assuming \`except\` means "fixed"** — The error is handled. That is not the same as resolved. You still need to guide the user or take corrective action.

---

## Practice Prompts

- Write a program that asks for a number and keeps asking until the user gives a valid one.
- Write a program that divides two numbers the user provides. Handle the case where the second number is zero. (Hint: look up \`ZeroDivisionError\`.)
- Wrap a \`float()\` conversion in a try/except and test it with various inputs.

No solutions here.

Try them yourself first.

---

## Reflection Questions

- What is the difference between catching \`Exception\` and catching \`ValueError\`?
- When would you use \`finally\` instead of just putting code after the try/except block?
- If your \`try\` block has 5 lines, which one should be inside it?

---

## What You Can Now Do

You can write programs that handle bad input without crashing.

Instead of stopping at the first unexpected value,
your program responds and continues.

That is the foundation of reliable software.

---

## What Comes Next

Now that your programs can handle failure,
you are ready to organize code across multiple files.

Next lesson: **Intro to Modules & Imports**
`,
};
