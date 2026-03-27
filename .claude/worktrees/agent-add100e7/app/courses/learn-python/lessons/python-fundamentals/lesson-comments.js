export const lessonComments = {
    id: "comments",
    title: "Comments",
    hasChallenge: false,

    article: `
## Comments

Your code runs.

But code also gets read.

By you.
By teammates.
By future-you six months from now.

Comments let you leave notes inside your code
that Python ignores completely.

---

## What Is a Comment?

A comment starts with \`#\`.

Python skips everything after the \`#\` on that line.

\`\`\`python
# This is a comment
print("Hello")  # This prints a greeting
\`\`\`

Run this.

Only the print executes.
The comments are invisible to Python.

---

## Why Comments Matter

Comments explain *why* code does something,
not just what it does.

Bad comment:

\`\`\`python
# Add 1 to x
x = x + 1
\`\`\`

The code already says that.

Better comment:

\`\`\`python
# Offset by 1 because the API uses 0-based indexing
x = x + 1
\`\`\`

Now the reason is clear.

---

## Commenting Out Code

You can temporarily disable code with a comment.

\`\`\`python
print("This runs")
# print("This does not run")
print("This runs too")
\`\`\`

Useful when debugging.

---

## Multi-Line Comments

Python has no official multi-line comment syntax.

The convention is to use \`#\` on each line:

\`\`\`python
# This function calculates the total price
# It applies a discount if the user is a member
# Returns a float
\`\`\`

---

## Docstrings (Brief Mention)

Triple quotes are used for documentation strings inside functions and classes.

\`\`\`python
def greet(name):
    """Say hello to a user by name."""
    print(f"Hello, {name}!")
\`\`\`

This is different from a comment.
Python does *not* ignore it — it stores it as documentation.

You'll use docstrings more once you write your own functions.

---

## Try This

\`\`\`python
# My first Python program
name = "Elijah"  # The user's name

# Print a greeting
print("Hello, " + name)
\`\`\`

Now add your own comment explaining what the code does.

---

## What You Learned

- How to write a single-line comment with \`#\`
- How to comment out code while debugging
- The difference between a comment and a docstring
- When comments add value (and when they don't)

---

## What Comes Next

You know how to print, store values, and leave notes.

Next, you'll use numbers and math to make your programs calculate things.

**Numbers & Math**

`
}
