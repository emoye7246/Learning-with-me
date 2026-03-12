export const lessonComments = {
  id: "comments",
  title: "Comments",

  article: `
## Introduction

You can write code that Python ignores.

That might sound strange.

Why write something that doesn't run?

Because code is not just for computers.

It's also for humans — including future you.

Comments let you leave notes, explain decisions, and make your code readable.

---

## What Is a Comment?

A comment starts with a \`#\` symbol.

Everything after \`#\` on that line is ignored by Python.

Try this:

\`\`\`python
# This is a comment
print("Hello, world!")
\`\`\`

Save.
Run it.

You should see:

\`\`\`
Hello, world!
\`\`\`

The comment never appeared.
Python skipped it completely.

---

## Where Comments Go

Comments can go above code:

\`\`\`python
# Ask the user for their name
name = input("What is your name? ")
\`\`\`

Or after code on the same line:

\`\`\`python
price = 9.99  # Price in dollars
\`\`\`

Both are valid.

---

## Multi-Line Comments

Python doesn't have a built-in multi-line comment syntax.

But you can stack single-line comments:

\`\`\`python
# This program calculates
# the total cost of items
# including tax
\`\`\`

Or use triple quotes (though this is technically a string, not a comment):

\`\`\`python
"""
This is sometimes used
as a block comment.
"""
\`\`\`

For now, stick to \`#\` comments.

---

## When to Use Comments

Use comments to explain **why**, not **what**.

The code already shows what is happening.

Comments explain the reasoning behind it.

Bad comment:
\`\`\`python
# Add 1 to count
count = count + 1
\`\`\`

Better comment:
\`\`\`python
# Keep track of how many attempts the user has made
count = count + 1
\`\`\`

---

## Commenting Out Code

Comments are also useful for temporarily disabling a line.

\`\`\`python
print("Starting program...")
# print("Debug info")
print("Done.")
\`\`\`

The middle line won't run.

This is called "commenting out" code.
It's useful when testing or debugging.

---

## Try This

Write a small program and add comments explaining each line:

\`\`\`python
# Store the user's name
name = "Elijah"

# Store the user's age
age = 25

# Print a greeting
print(f"Hello {name}, you are {age} years old.")
\`\`\`

Then try commenting out one of the print lines.
Run it and observe what changes.

---

## What You Learned

You now understand:

- What a comment is
- How to write single-line comments
- How to place inline comments
- When to use comments
- How to comment out code

Comments don't change what your program does.

They change how easy it is to understand.

---

## What Comes Next

Now that you can store data and explain your code,
let's look at how Python handles different types of data —
and how to switch between them.

**Type Casting**
`,
};
