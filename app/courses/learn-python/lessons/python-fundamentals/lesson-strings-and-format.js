export const lessonStringsAndFormat = {
    id: "strings-and-format",
    title: "Strings and Format",

    article: `
## Strings & Formatting

So far, you’ve worked with numbers.

Now we go deeper into text.

Text in Python is called a **string**.

Strings are used everywhere:
- names
- messages
- user input
- file paths
- data from the internet

Understanding strings is essential.

--- 

## Creating Strings

A string is text surrounded by quotation marks.

\`\`\`python
name = "Elijah"
message = "I am learning Python."
\`\`\`

The quotes tell Python:
“This is text.”

Without quotes, Python treats the word as a variable name.

---

## Printing Strings

You can print a string directly:

\`\`\`python
print("Hello!")
\`\`\`

Or print a variable that holds a string:

\`\`\`python
greeting = "Welcome"
print(greeting)
\`\`\`

---

## Combining Strings (Concatenation)

You can join strings using the `+` operator.

\`\`\`python
first = "Hello"
second = "World"

print(first + " " + second)
\`\`\`

The result:

Hello World

This is called **concatenation**.

---

## Why This Sometimes Breaks

Try this:

\`\`\`python
age = 25
print("I am " + age)
\`\`\`

This will cause an error.

Why?

Because:
- \`"I am "\` is a string
- \`age\` is an integer

Python does not automatically combine different types.

---

## Converting Types

To fix that, convert the number into a string:

\`\`\`python
age = 25
print("I am " + str(age))
\`\`\`

The \`str()\` function converts a value into text.

---

## A Better Way: f-Strings

Python provides a cleaner way to format text.

This is called an **f-string**.

\`\`\`python
age = 25
print(f"I am {age} years old.")
\`\`\`

The \`f\` before the string allows you to insert variables directly.

This is the modern and recommended approach.

---

## How f-Strings Work

Inside the curly braces \`{}\`,
you can place:

- variables \`a\` and \`b\`
- the calculation \`a + b\`
- the result \`a + b = 8\`

Example:

\`\`\`python
a = 5
b = 3
print(f"{a} + {b} = {a + b}")
\`\`\`

This makes strings dynamic.

---

## Why Formatting Matters

Programs rarely print fixed text.

They print results.
They print calculations.
They print user data.

Formatting is how you combine:
- numbers
- variables
- text

into readable output.

---

## Try This

Write a small program:

\`\`\`python
name = "Elijah"
age = 25

print(f"My name is {name} and I am {age} years old.")
\`\`\`

Modify the values.
Run it again.

Observe the change.

---

## What You Learned

You now understand:

- What strings are
- How to concatenate strings
- Why types matter when combining values
- How to convert values using \`str()\`
- How to use \`f-strings\`

This prepares you for input and user interaction.

---

## What Comes Next

So far, your programs execute line by line.

Next, we introduce logic.

We begin making decisions.

**Booleans & Conditions**

`

}