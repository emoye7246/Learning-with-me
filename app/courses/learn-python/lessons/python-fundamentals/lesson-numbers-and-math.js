export const lessonNumbersMath = {
    id: "numbers-and-math",
    title: "Numbers and Math",

    article: `
   ## Numbers & Math

Programming is not just about printing text.

It is about working with data.

And one of the most common kinds of data is numbers.

In this lesson, you will use Python as a calculator —
but more importantly,
you will understand how it thinks about math.

---

## Basic Arithmetic

Open your \`hello.py\` file
and replace the contents with:

\`\`\`python
print(2 + 3)
print(10 - 4)
print(6 * 5)
print(8 / 2)
\`\`\`

Save.
Run the file.

Observe the output.

---

## What Just Happened?

Python evaluated each expression
and printed the result.

The operators you used were:

- \`+\`  (addition)
- \`-\`  (subtraction)
- \`*\`  (multiplication)
- \`/\`  (division)

These behave just like standard math.

---

## Storing Results in Variables

Instead of printing numbers directly,
you can store results in variables.

Try this:

\`\`\`python
result = 5 * 4
print(result)
\`\`\`

Now Python calculates first,
stores the result,
and then prints it.

---

## Integer vs Float Division

Notice something important.

Try this:

\`\`\`python
print(5 / 2)
\`\`\`

The result is:

2.5

Even though both numbers are integers,
division produces a float (a decimal number).

If you want whole-number division,
use:

\`\`\`python
print(5 // 2)
\`\`\`

This is called **floor division**.
It removes the decimal.

---

## Integer vs Float Division

Notice something important.

Try this:

\`\`\`python
print(5 / 2)
\`\`\`

The result is:

2.5

Even though both numbers are integers,
division produces a float (a decimal number).

If you want whole-number division,
use:

\`\`\`python
print(5 // 2)
\`\`\`

This is called **floor division**.
It removes the decimal.

---

## Exponents

To raise a number to a power:

\`\`\`python
print(2 ** 3)
\`\`\`

This means:

2 to the power of 3.

The result is:

8

---

## Exponents

To raise a number to a power:

\`\`\`python
print(2 ** 3)
\`\`\`

This means:

2 to the power of 3.

The result is:

8

---

## Order of Operations

Python follows standard math rules:

- Parentheses first
- Exponents
- Multiplication and division
- Addition and subtraction

Try:

\`\`\`python
print(2 + 3 * 4)
print((2 + 3) * 4)
\`\`\`

Notice the difference.

Parentheses change the result.

---

## Why This Matters

Numbers are not just calculations.

They are used for:
- tracking time
- counting items
- measuring data
- controlling logic
- powering algorithms

Understanding how Python handles math
is foundational.

---

## Why This Matters

Numbers are not just calculations.

They are used for:
- tracking time
- counting items
- measuring data
- controlling logic
- powering algorithms

Understanding how Python handles math
is foundational.

---

## Try This

Create a small calculation of your own:

\`\`\`python
price = 19.99
quantity = 3

total = price * quantity
print(total)
\`\`\`

Modify the numbers.
Run it again.

Observe how the output changes.

---

## What You Learned

You now understand:

- Arithmetic operators
- Integer vs float division
- Modulus
- Exponents
- Order of operations

This is more than math.

This is data manipulation.

---

## What You Learned

You now understand:

- Arithmetic operators
- Integer vs float division
- Modulus
- Exponents
- Order of operations

This is more than math.

This is data manipulation.

    `
}