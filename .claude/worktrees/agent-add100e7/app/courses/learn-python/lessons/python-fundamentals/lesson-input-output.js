export const lessonInputOutput = {
    id: "input-output",
    title: "Input & Output",
    hasChallenge: false,

    article: `

## Introduction

So far, your programs use fixed values.

Numbers you typed. Strings you wrote. Lists you created.

But real programs are **interactive**.

They ask questions. They receive answers. They respond.

That's the foundation of almost every program you'll ever build:

**Input → Process → Output**

This is called the **IPO model**.

- **Input** — receive data from the user
- **Process** — do something with it
- **Output** — show a result

Every calculator, login screen, search bar, and form follows this exact model.

This lesson teaches you how to build all three pieces.

---

# Part 1: Output with print()

---

## The Basics

You've already used \`print()\`.

\`\`\`python
print("Hello, world!")
\`\`\`

But \`print()\` can do more than you've seen.

---

## Printing Multiple Values

You can pass multiple values separated by commas:

\`\`\`python
name = "Elijah"
age = 25

print("Name:", name, "Age:", age)
\`\`\`

Output: \`Name: Elijah Age: 25\`

Python adds a space between each value by default.

---

## Changing the Separator

Use \`sep=\` to change what goes between values:

\`\`\`python
print("2024", "03", "15", sep="-")
\`\`\`

Output: \`2024-03-15\`

\`\`\`python
print("one", "two", "three", sep=" | ")
\`\`\`

Output: \`one | two | three\`

---

## Changing the End Character

By default, \`print()\` adds a newline at the end.

Use \`end=\` to change that:

\`\`\`python
print("Loading", end="")
print("...")
\`\`\`

Output: \`Loading...\`

Or keep everything on one line:

\`\`\`python
for i in range(1, 6):
    print(i, end=" ")
\`\`\`

Output: \`1 2 3 4 5\`

---

## f-Strings — Formatted Output

f-strings embed variables directly into a string.

\`\`\`python
name = "Elijah"
score = 94.5

print(f"Player: {name}")
print(f"Score: {score}")
\`\`\`

Output:

\`\`\`
Player: Elijah
Score: 94.5
\`\`\`

### Rounding Numbers in f-strings

\`\`\`python
price = 9.99999

print(f"Total: \${price:.2f}")
\`\`\`

Output: \`Total: $10.00\`

\`:.2f\` means: format as a float with 2 decimal places.

### Aligning Text in f-strings

\`\`\`python
items = [("Apple", 1.50), ("Banana", 0.75), ("Mango", 2.99)]

for name, price in items:
    print(f"{name:<10} \${price:.2f}")
\`\`\`

Output:

\`\`\`
Apple      $1.50
Banana     $0.75
Mango      $2.99
\`\`\`

\`:<10\` means: left-align in a field of 10 characters.

| Format | Meaning |
|---|---|
| \`{value:.2f}\` | Float with 2 decimal places |
| \`{value:d}\` | Integer |
| \`{value:<10}\` | Left-align in 10 chars |
| \`{value:>10}\` | Right-align in 10 chars |
| \`{value:^10}\` | Center in 10 chars |

---

# Part 2: Input with input()

---

## Getting Input from the User

\`input()\` pauses your program and waits for the user to type something.

\`\`\`python
name = input("What is your name? ")
print(f"Hello, {name}!")
\`\`\`

The string inside \`input()\` is the **prompt** — it tells the user what to type.

---

## input() Always Returns a String

This is the most important thing to know about \`input()\`.

No matter what the user types — a number, a date, a name — it always comes back as a string.

\`\`\`python
age = input("How old are you? ")
print(type(age))    # <class 'str'>
\`\`\`

Even if they type \`25\`, you get \`"25"\` — not the number 25.

---

# Part 3: Type Conversion

---

## Converting Input to Numbers

To use input as a number, you must convert it.

\`\`\`python
age = int(input("How old are you? "))
print(age + 1)    # works — it's now an integer
\`\`\`

For decimal numbers, use \`float()\`:

\`\`\`python
height = float(input("Your height in meters: "))
print(f"That's {height * 100} cm")
\`\`\`

---

## Type Conversion Functions

| Function | Converts to | Example |
|---|---|---|
| \`int(x)\` | Whole number | \`int("25")\` → \`25\` |
| \`float(x)\` | Decimal number | \`float("3.14")\` → \`3.14\` |
| \`str(x)\` | String | \`str(100)\` → \`"100"\` |
| \`bool(x)\` | Boolean | \`bool(0)\` → \`False\` |

---

## What Happens When Conversion Fails?

If the user types something that can't be converted, Python raises a \`ValueError\`.

\`\`\`python
age = int(input("How old are you? "))
# User types "hello" instead of a number
# ValueError: invalid literal for int() with base 10: 'hello'
\`\`\`

Your program will crash.

This is exactly why the next lesson covers **Error Handling** — so you can handle this gracefully instead of crashing.

For now, just know: always convert, and expect that users don't always type what you expect.

---

## Multiple Inputs on One Line

Sometimes you want to ask for several values at once.

\`split()\` breaks a string into a list at every space.

\`\`\`python
data = input("Enter first and last name: ")
first, last = data.split()

print(f"First: {first}")
print(f"Last: {last}")
\`\`\`

Input: \`Elijah Moye\`

Output:

\`\`\`
First: Elijah
Last: Moye
\`\`\`

This can be written more concisely:

\`\`\`python
first, last = input("Enter first and last name: ").split()
\`\`\`

For numbers:

\`\`\`python
a, b = input("Enter two numbers: ").split()
a, b = int(a), int(b)

print(f"Sum: {a + b}")
\`\`\`

---

# Part 4: Putting It Together

---

## The IPO Pattern in Practice

Here's the Input → Process → Output model applied clearly:

\`\`\`python
# INPUT
name = input("What is your name? ")
score = int(input("What is your score? "))

# PROCESS
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

# OUTPUT
print(f"\\n{name} scored {score} and received a {grade}.")
\`\`\`

Separating these three phases makes your code easier to read, test, and modify.

---

## Building an Interactive Loop

Most real programs don't just ask once — they loop.

\`\`\`python
while True:
    raw = input("Enter a number (or 'quit' to stop): ")

    if raw == "quit":
        print("Goodbye!")
        break

    number = int(raw)
    print(f"{number} squared is {number ** 2}")
\`\`\`

Output:

\`\`\`
Enter a number (or 'quit' to stop): 5
5 squared is 25
Enter a number (or 'quit' to stop): 12
12 squared is 144
Enter a number (or 'quit' to stop): quit
Goodbye!
\`\`\`

This pattern — loop, receive input, check for exit condition, process — is everywhere in real programs.

---

## Mini Challenge

Build a **personal tip calculator**.

Your program should:

1. Ask for the bill total (allow decimals)
2. Ask for the tip percentage (e.g., 15, 18, 20)
3. Ask for the number of people splitting the bill
4. Calculate and display:
   - The tip amount
   - The total bill (with tip)
   - Each person's share

Expected output should look like this:

\`\`\`
--- Bill Summary ---
Bill:          $85.00
Tip (18%):     $15.30
Total:         $100.30
Each person:   $33.43
\`\`\`

**Rules:**
- All currency values must show exactly 2 decimal places
- Use f-strings for all output formatting
- Put the calculation logic in a function called \`calculate_bill\`

Give it a try before reading the solution.

---

## One Way to Solve It

\`\`\`python
def calculate_bill(total, tip_percent, people):
    tip = total * (tip_percent / 100)
    grand_total = total + tip
    per_person = grand_total / people
    return tip, grand_total, per_person

bill = float(input("Bill total: $"))
tip_pct = float(input("Tip percentage: "))
people = int(input("Number of people: "))

tip, total, per_person = calculate_bill(bill, tip_pct, people)

print(f"\\n--- Bill Summary ---")
print(f"Bill:          \${bill:.2f}")
print(f"Tip ({tip_pct:.0f}%):     \${tip:.2f}")
print(f"Total:         \${total:.2f}")
print(f"Each person:   \${per_person:.2f}")
\`\`\`

Notice:
- \`calculate_bill\` handles the math — no \`print()\` inside it
- The input section is separate from the processing section
- All formatting happens in the output section
- This is clean IPO structure

---

## What You Learned

- How \`print()\` works with multiple values, \`sep=\`, and \`end=\`
- How to format output with f-strings — rounding, alignment, padding
- How \`input()\` works and why it always returns a string
- How to convert input with \`int()\`, \`float()\`, \`str()\`, and \`bool()\`
- What happens when a conversion fails (and that error handling is the fix)
- How to receive multiple values in one input using \`split()\`
- The IPO model — Input → Process → Output — as a design pattern
- How to build an interactive loop that runs until the user quits

---

## What Comes Next

Your programs now interact — but they still crash when a user types something unexpected.

Typing "hello" when you expect a number throws a \`ValueError\` and stops everything.

Next, you'll learn how to handle those situations gracefully — so your program can respond with a helpful message instead of crashing.

**Error Handling Basics**

`
}
