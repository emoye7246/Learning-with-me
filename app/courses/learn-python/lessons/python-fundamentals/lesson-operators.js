export const lessonOperators = {
  id: "operators",
  title: "Operators",

  article: `
## Introduction

You've already used some operators without thinking much about them.

\`+\` adds numbers.
\`=\` assigns a value.

But Python has many more.

Operators are the symbols that let your program compare, combine, and evaluate data.

This lesson covers the ones you'll use every day.

---

## Arithmetic Operators

You've seen these:

\`\`\`python
print(5 + 2)   # 7
print(5 - 2)   # 3
print(5 * 2)   # 10
print(5 / 2)   # 2.5
print(5 // 2)  # 2  (floor division)
print(5 % 2)   # 1  (remainder / modulus)
print(5 ** 2)  # 25 (exponent)
\`\`\`

The one worth paying attention to: \`%\`

The modulus operator returns the **remainder** after division.

\`5 % 2\` → 5 divided by 2 is 2 remainder 1. So the answer is \`1\`.

This is useful for checking if a number is even or odd.

---

## Comparison Operators

Comparison operators compare two values and return True or False.

\`\`\`python
print(5 == 5)   # True  (equal to)
print(5 != 3)   # True  (not equal to)
print(5 > 3)    # True  (greater than)
print(5 < 3)    # False (less than)
print(5 >= 5)   # True  (greater than or equal to)
print(5 <= 4)   # False (less than or equal to)
\`\`\`

Try this:

\`\`\`python
age = 20

print(age >= 18)
\`\`\`

Save.
Run it.

You should see \`True\`.

These are the foundation of decision-making in Python.

---

## Assignment Operators

You already know \`=\`.

But Python has shortcuts for updating variables.

\`\`\`python
count = 10

count += 5   # same as: count = count + 5
count -= 3   # same as: count = count - 3
count *= 2   # same as: count = count * 2
count //= 4  # same as: count = count // 4

print(count)
\`\`\`

These make your code shorter and easier to read.

---

## Logical Operators

Logical operators combine conditions.

\`\`\`python
age = 25
has_id = True

print(age >= 18 and has_id)   # True (both must be True)
print(age < 18 or has_id)     # True (at least one must be True)
print(not has_id)              # False (flips True to False)
\`\`\`

- \`and\` → True only if both sides are True
- \`or\`  → True if at least one side is True
- \`not\` → flips the result

---

## Identity Operators

Identity operators check if two variables point to the same object in memory.

\`\`\`python
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)   # True  (b is the same object as a)
print(a is c)   # False (c is a different object with same values)
print(a is not c)  # True
\`\`\`

This is different from \`==\`.

\`==\` checks if values are equal.
\`is\` checks if they are the exact same object.

---

## Membership Operators

Membership operators check if a value exists inside something.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print("apple" in fruits)      # True
print("grape" in fruits)      # False
print("grape" not in fruits)  # True
\`\`\`

These work with lists, strings, tuples, and dictionaries.

---

## Try This

\`\`\`python
score = 75

# Is the score passing (60 or above)?
print(score >= 60)

# Is the score between 70 and 90?
print(score >= 70 and score <= 90)

# Is it NOT a perfect score?
print(score != 100)
\`\`\`

Run it.
Change the score.
Observe how the outputs change.

---

## What You Learned

You now understand:

- Arithmetic operators (including \`%\` and \`//\`)
- Comparison operators (\`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`)
- Assignment shortcuts (\`+=\`, \`-=\`, etc.)
- Logical operators (\`and\`, \`or\`, \`not\`)
- Identity operators (\`is\`, \`is not\`)
- Membership operators (\`in\`, \`not in\`)

Operators are how your program evaluates the world.

Every condition you write depends on them.

---

## What Comes Next

You can now evaluate and compare data.

Next, let's go deeper into one of the most powerful types in Python.

**Strings & Formatting**
`,
};
