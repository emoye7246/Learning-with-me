export const lessonOperators = {
    id: "operators",
    title: "Operators",
    hasChallenge: false,

    article: `
## Operators

Operators are symbols that perform actions on values.

You've used some already:
\`+\` for adding, \`=\` for assigning.

This lesson covers all the operator types you'll use regularly.

---

## Arithmetic Operators

Used for math.

\`\`\`python
x = 10
y = 3

print(x + y)   # 13  addition
print(x - y)   # 7   subtraction
print(x * y)   # 30  multiplication
print(x / y)   # 3.3333...  division (always returns float)
print(x // y)  # 3   floor division (drops decimal)
print(x % y)   # 1   modulo (remainder)
print(x ** y)  # 1000  exponentiation (10 to the power of 3)
\`\`\`

Run this.
Understand each result before moving on.

---

## The Modulo Operator

\`%\` gives you the remainder after division.

\`\`\`python
print(10 % 3)  # 1  (10 / 3 = 3 remainder 1)
print(8 % 2)   # 0  (8 / 2 = 4 remainder 0)
\`\`\`

Common use: checking if a number is even or odd.

\`\`\`python
number = 7
if number % 2 == 0:
    print("even")
else:
    print("odd")
\`\`\`

---

## Comparison Operators

Used to compare values.
Always return \`True\` or \`False\`.

\`\`\`python
print(5 == 5)   # True   equal to
print(5 != 3)   # True   not equal to
print(5 > 3)    # True   greater than
print(5 < 3)    # False  less than
print(5 >= 5)   # True   greater than or equal
print(5 <= 4)   # False  less than or equal
\`\`\`

---

## Assignment Operators

Used to assign and update variables.

\`\`\`python
x = 10

x += 3   # same as x = x + 3  → 13
x -= 2   # same as x = x - 2  → 11
x *= 4   # same as x = x * 4  → 44
x /= 2   # same as x = x / 2  → 22.0
x //= 3  # same as x = x // 3 → 7.0
x **= 2  # same as x = x ** 2 → 49.0
x %= 5   # same as x = x % 5  → 4.0
\`\`\`

These are shorthand.
You'll use \`+=\` most often.

---

## Logical Operators

Used to combine conditions.

\`\`\`python
age = 20
is_member = True

print(age >= 18 and is_member)   # True  (both must be true)
print(age < 18 or is_member)     # True  (at least one must be true)
print(not is_member)              # False (flips the value)
\`\`\`

- \`and\` → both conditions must be True
- \`or\` → at least one condition must be True
- \`not\` → reverses True/False

---

## Identity Operators

Used to check if two variables point to the same object.

\`\`\`python
x = None

print(x is None)      # True
print(x is not None)  # False
\`\`\`

Use \`is\` (not \`==\`) when checking for \`None\`.

---

## Membership Operators

Used to check if something exists inside a collection.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print("apple" in fruits)      # True
print("grape" not in fruits)  # True
\`\`\`

Works with lists, strings, tuples, and dictionaries.

---

## Operator Precedence

Python follows standard math order:

1. \`**\` (exponentiation)
2. \`*\`, \`/\`, \`//\`, \`%\`
3. \`+\`, \`-\`
4. \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`
5. \`not\`
6. \`and\`
7. \`or\`

When in doubt, use parentheses.

\`\`\`python
result = (2 + 3) * 4  # 20, not 14
\`\`\`

---

## Try This

\`\`\`python
x = 15

print(x % 2 == 0)       # Is x even?
print(x > 10 and x < 20)  # Is x between 10 and 20?

x += 5
print(x)  # What is x now?
\`\`\`

---

## What You Learned

- Arithmetic operators: \`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\`
- Comparison operators: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`
- Assignment operators: \`+=\`, \`-=\`, \`*=\`, etc.
- Logical operators: \`and\`, \`or\`, \`not\`
- Identity operators: \`is\`, \`is not\`
- Membership operators: \`in\`, \`not in\`

---

## What Comes Next

You can now work with values and compare them.

Next, you'll learn how to make decisions in your programs.

**Booleans & Conditions**

`
}
