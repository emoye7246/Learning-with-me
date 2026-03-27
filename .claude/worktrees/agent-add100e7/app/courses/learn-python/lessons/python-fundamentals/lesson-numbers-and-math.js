export const lessonNumbersMath = {
    id: "numbers-and-math",
    title: "Numbers and Math",
    hasChallenge: false,

    article: `
## Numbers & Math

Programming is not just about printing text.

It is about working with data.

And one of the most common kinds of data is numbers.

Every real program uses numbers — to count items, track prices, measure time, control loops, and power logic.

In this lesson you will learn how Python thinks about numbers, how to do math with them, and how to use that knowledge to build something real.

---

## Two Types of Numbers

Python has two main number types you need to know about right now.

**int** — a whole number, no decimal point.

\`\`\`python
age = 25
score = 100
year = 2024
\`\`\`

**float** — a number with a decimal point.

\`\`\`python
price = 19.99
temperature = 36.6
average = 8.5
\`\`\`

Python figures out which type to use based on how you write the number.
If you write \`5\`, it is an int.
If you write \`5.0\`, it is a float.

You can check the type of any value using \`type()\`:

\`\`\`python
print(type(5))      # <class 'int'>
print(type(5.0))    # <class 'float'>
\`\`\`

This matters because the type affects how math behaves — which you will see shortly.

---

## Basic Arithmetic

Open a file and try this:

\`\`\`python
print(2 + 3)    # addition
print(10 - 4)   # subtraction
print(6 * 5)    # multiplication
print(8 / 2)    # division
\`\`\`

Save. Run. Observe.

The operators you used:

\`\`\`python
+     # addition        
-     # subtraction     
*     # multiplication  
/     # division        
\`\`\`

---

## Storing Results in Variables

Printing raw calculations is fine for testing, but in real programs you store results so you can use them later.

\`\`\`python
price = 49.99
discount = 10.00

final_price = price - discount
print(final_price)
\`\`\`

Now you can reuse \`final_price\` anywhere in your program without recalculating it.

You can also do math directly on variables:

\`\`\`python
a = 12
b = 4

print(a + b)
print(a - b)
print(a * b)
print(a / b)
\`\`\`

The variables act exactly like the numbers they hold.

---

## Integer vs Float Division

Python has two division operators and they behave differently.

**Regular division** — always returns a float:

\`\`\`python
print(10 / 2)   # 5.0
print(7 / 2)    # 3.5
\`\`\`

**Floor division** — returns only the whole number part, dropping the decimal:

\`\`\`python
print(10 // 2)  # 5
print(7 // 2)   # 3
\`\`\`

Floor division is useful when you need a count, an index, or a whole number answer — not a decimal approximation.

---

## Modulus — The Remainder Operator

The \`%\` operator returns the **remainder** after division.

\`\`\`python
print(10 % 3)   # 1
print(15 % 4)   # 3
print(8 % 2)    # 0
\`\`\`

Why does this matter?

A remainder of \`0\` means the number divided evenly.
This is how you check if a number is even or odd:

\`\`\`python
number = 7
print(number % 2)   # 1 — odd

number = 8
print(number % 2)   # 0 — even
\`\`\`

You will use modulus constantly in real programs — checking divisibility, cycling through lists, formatting time values.

---

## Exponents

To raise a number to a power, use \`**\`:

\`\`\`python
print(2 ** 3)   # 8  (2 × 2 × 2)
print(5 ** 2)   # 25 (5 × 5)
print(10 ** 6)  # 1000000
\`\`\`

You can also use it for square roots, since a square root is just a power of 0.5:

\`\`\`python
print(25 ** 0.5)    # 5.0
print(144 ** 0.5)   # 12.0
\`\`\`

---

## Order of Operations

Python follows the same rules as standard math — often remembered as **PEMDAS**:

1. **P**arentheses
2. **E**xponents
3. **M**ultiplication and **D**ivision (left to right)
4. **A**ddition and **S**ubtraction (left to right)

This means multiplication happens before addition unless you use parentheses:

\`\`\`python
print(2 + 3 * 4)    # 14 — multiplication first
print((2 + 3) * 4)  # 20 — parentheses first
\`\`\`

When in doubt, use parentheses to make your intent explicit.
It removes ambiguity and makes your code easier to read.

\`\`\`python
total = (base_price + tax) * quantity
\`\`\`

This is clearer than relying on the reader to know the precedence rules.

---

## Augmented Assignment

When you want to update a variable using its current value, Python gives you a shorthand:

\`\`\`python
score = 0

score = score + 10   # the long way
score += 10          # the short way — same result
\`\`\`

The same shorthand works for all operators:

\`\`\`python
score += 10     # add 10
score -= 5      # subtract 5
score *= 2      # multiply by 2
score //= 3     # floor divide by 3
\`\`\`

You will use \`+=\` constantly — in loops, counters, running totals.

---

## Mini Task: Build a Mock Calculator

You now know enough to build something real.

**Your task:** write a Python script that acts as a simple calculator.

It should:
- Store two numbers in variables
- Calculate and print the result of all six operations: \`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`
- Label each result clearly so the output is readable

Here is the structure to get you started:

\`\`\`python
a = 20
b = 6

# your calculations go here
\`\`\`

Expected output (your values will match whatever \`a\` and \`b\` you choose):

\`\`\`
Addition:        26
Subtraction:     14
Multiplication:  120
Division:        3.3333333333333335
Floor Division:  3
Remainder:       2
\`\`\`

**Hints:**
- Use \`print()\` for each result
- You can format labels using a string followed by a value: \`print("Addition:", a + b)\`
- Try changing the values of \`a\` and \`b\` and running again — the calculations should update automatically

Once that works, extend it:
- Add a line that prints whether \`a\` is evenly divisible by \`b\` (hint: use \`%\`)
- Add a line that prints \`a\` to the power of \`b\`

Take your time. Figure it out yourself before looking anything up.
This is the most important habit you can build as a developer.

---

## What You Learned

- \`int\` vs \`float\` — and how Python decides which type to use
- All six arithmetic operators: \`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`
- Exponents with \`**\`
- How order of operations works in Python
- Augmented assignment with \`+=\`, \`-=\`, etc.
- How to store and reuse calculated values in variables

---

## What Comes Next

You can now work with numbers.

Next you will work with text — how to store it, format it, and combine it with data.

Next lesson: **Strings & Formatting**

    `
}
