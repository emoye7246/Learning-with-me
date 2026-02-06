export const lessonHelloWorld = {
  id: "basics-hello-world",
  title: "Hello, World!",
  
  article: `
## Hello, world — Your First Step in Python

Welcome to your first Python lesson.

Every programming journey starts with a simple goal:
**make the computer respond to you.**

In this lesson, your objective is straightforward:
> **Produce the message \`Hello, world!\` using Python.**

This may look small, but it represents a major shift —  
you are writing instructions that a computer understands and executes.

---

## What is Python doing when you run code?

Python is a programming language that is read and executed **line by line** by something called the *Python interpreter*.

When you write Python code, you are not describing what you want in general terms.
You are giving **exact instructions** that Python follows in order.

There is no guessing.  
There is no skipping steps.  
Python does exactly what you tell it to do.

---

## Your first Python instruction

Here is a simple Python instruction:

\`\`\`python
print("Hello, world!")
\`\`\`

This single line is a complete Python program.

Let’s break it down carefully.

---

## Understanding \`print()\`

\`print\` is a **built-in Python function**.

A *function* is a reusable piece of code designed to perform a specific task.
The task of \`print()\` is simple:
> Display information to the output screen.

During this course, \`print()\` helps you:
- See results
- Debug your code
- Understand how Python evaluates values

---

## Why parentheses matter

In Python, functions are *called* using parentheses:

\`\`\`python
function_name(arguments)
\`\`\`

So when you write:

\`\`\`python
print("Hello, world!")
\`\`\`

You are telling Python:
> “Call the \`print\` function and give it this value.”

Without parentheses, Python would not know you are trying to execute the function.

---

## What is a string?

\`"Hello, world!"\` is a **string**.

A string is a sequence of characters wrapped in quotes.
Strings are how Python represents text.

Examples of valid strings:

\`\`\`python
"Hello"
"123"
"This is a sentence"
\`\`\`

The quotes are required.  
Without them, Python would assume you are referring to something else, like a variable.

---

## Printing vs returning a value

So far, you’ve learned how to **print** text.
Before the challenge, you need to understand one important difference:

> **Printing a value is not the same as returning a value.**

---

### What \`print()\` does

When you use \`print()\`:

\`\`\`python
print("Hello, world!")
\`\`\`

Python sends text to the screen so **you can see it**.

- Useful for learning
- Useful for debugging
- But the value is **not kept** by the program

Once printed, the value is gone.

---

### What \`return\` does

\`return\` is used **inside a function**.

It sends a value *back* to whoever called the function.

Example:

\`\`\`python
def hello():
    return "Hello, world!"
\`\`\`

Here’s what happens:
1. The function runs
2. Python reaches \`return\`
3. The value is sent back to the caller
4. The function stops running

This allows other code — including tests — to **use** the result.

---

### Why this challenge uses \`return\`

In this course, challenges are checked automatically.

That means:
- The system cannot rely on printed output
- It needs an exact value to compare

So instead of printing \`"Hello, world!"\`, you will **return** it from a function.

This mirrors how real Python code is written and tested.

---

### Printing a returned value (optional)

You *can* still print a returned value:

\`\`\`python
def hello():
    return "Hello, world!"

print(hello())
\`\`\`

But for this challenge, only the \`return\` matters.

---

## Your interactive challenge

Your task is to write a function that returns the following string **exactly**:

\`\`\`
Hello, world!
\`\`\`

Capitalization, punctuation, and spacing matter.

---

## Why this lesson matters

This lesson introduces concepts you will use constantly:
- Functions
- Arguments
- Strings
- Returning values
- Execution order

Later, you’ll replace \`"Hello, world!"\` with:
- Variables
- Calculations
- User input
- Data from real programs

But the structure stays the same.

---

## Before you move on

Make sure you understand:
- What \`print()\` does
- What \`return\` does
- Why strings need quotes
- Why tests rely on returned values

If this feels clear, you’re ready.

Scroll down and make Python respond.
`,

};
