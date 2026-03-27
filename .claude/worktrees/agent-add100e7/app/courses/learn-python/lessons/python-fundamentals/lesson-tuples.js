export const lessonTuples = {
  id: "tuples",
  title: "Tuples",
  hasChallenge: false,

  article: `
## Tuples

You just learned about lists.

Lists are great — ordered, flexible, changeable.

But Python has another kind of collection that works differently.

It's called a **tuple**.

---

## What Is a Tuple?

A tuple is like a list — but **fixed**.

Once you create it, it can't be changed.

- You can't add items.
- You can't remove items.
- You can't swap items around.

That immutability is the whole point.

---

## Creating a Tuple

Tuples use parentheses \`()\` instead of square brackets.

\`\`\`python
point = (10, 20)
print(point)  # (10, 20)
\`\`\`

---

## The Single-Item Tuple Gotcha

Here's something that trips up almost every beginner.

If you want a tuple with **one item**, you need a trailing comma.

\`\`\`python
not_a_tuple = (42)
is_a_tuple  = (42,)

print(type(not_a_tuple))  # <class 'int'>
print(type(is_a_tuple))   # <class 'tuple'>
\`\`\`

Without the comma, Python just sees parentheses around a number — not a tuple.

The comma is what makes it a tuple, not the parentheses.

---

## Tuples Without Parentheses

The parentheses are actually optional.

Python creates a tuple any time you separate values with commas.

\`\`\`python
point = 10, 20
print(point)        # (10, 20)
print(type(point))  # <class 'tuple'>
\`\`\`

This comes up a lot in real code, especially when returning multiple values.

---

## Accessing Items

Tuple indexing works exactly like lists — starting at 0.

\`\`\`python
point = (10, 20, 30)

print(point[0])   # 10
print(point[-1])  # 30  (last item)
\`\`\`

Slicing works too:

\`\`\`python
coords = (10, 20, 30, 40, 50)
print(coords[1:4])  # (20, 30, 40)
\`\`\`

---

## What Happens If You Try to Change It?

\`\`\`python
point = (10, 20)
point[0] = 99
\`\`\`

Python raises an error:

\`\`\`
TypeError: 'tuple' object does not support item assignment
\`\`\`

This is intentional. Tuples are designed to be fixed.

---

## Why Would You Want That?

At first this seems like a limitation.

But immutability is a feature.

Some data should **never** change. Using a tuple signals that clearly.

| Use a list when... | Use a tuple when... |
|---|---|
| The data will change | The data is fixed |
| Items are the same type | Items represent a single record |
| Order might be rearranged | Order is part of the meaning |

Real examples where tuples make sense:

\`\`\`python
resolution = (1920, 1080)
color       = (255, 128, 0)
date        = (2024, 12, 25)
\`\`\`

Using a tuple here tells anyone reading the code:
"These values are fixed by design."

---

## Tuple Unpacking

One of the most useful things you can do with a tuple is **unpack** it.

Each item gets assigned to its own variable in one line.

\`\`\`python
point = (10, 20)

x, y = point

print(x)  # 10
print(y)  # 20
\`\`\`

This is cleaner than \`point[0]\` and \`point[1]\`.

Python assigns values left to right, matching by position.

---

## The Swap Trick

Tuple unpacking makes swapping two variables elegant in Python.

\`\`\`python
a = 5
b = 10

a, b = b, a

print(a)  # 10
print(b)  # 5
\`\`\`

The right side \`b, a\` creates a temporary tuple \`(10, 5)\`, then unpacks it into \`a\` and \`b\`.

In most languages, swapping requires a temporary variable. Not in Python.

---

## Extended Unpacking

You can use \`*\` to collect the remaining items into a list.

\`\`\`python
first, *rest = (10, 20, 30, 40)

print(first)  # 10
print(rest)   # [20, 30, 40]
\`\`\`

Or capture a middle section:

\`\`\`python
first, *middle, last = (10, 20, 30, 40, 50)

print(first)   # 10
print(middle)  # [20, 30, 40]
print(last)    # 50
\`\`\`

---

## Returning Multiple Values from a Function

Functions can only return one value — but a tuple counts as one.

\`\`\`python
def get_dimensions():
    return (1920, 1080)

width, height = get_dimensions()

print(width)   # 1920
print(height)  # 1080
\`\`\`

This is a real pattern used throughout Python.

---

## Checking for Values and Length

The \`in\` keyword and \`len()\` work just like with lists.

\`\`\`python
colors = ("red", "green", "blue")

print("green" in colors)  # True
print("yellow" in colors) # False
print(len(colors))        # 3
\`\`\`

---

## Tuple Methods

Tuples only have two built-in methods — because they can't be changed.

| Method | What it does |
|---|---|
| \`.count(x)\` | Count how many times \`x\` appears |
| \`.index(x)\` | Return the index of the first \`x\` |

\`\`\`python
nums = (1, 2, 3, 2, 2)

print(nums.count(2))   # 3
print(nums.index(3))   # 2
\`\`\`

---

## Try This

\`\`\`python
person = ("Alex", 28, "London")

name, age, city = person

print(f"{name} is {age} years old and lives in {city}.")

a = 100
b = 200
a, b = b, a
print(a, b)
\`\`\`

Then try:
- Add a fourth field to the tuple (e.g. occupation)
- Use \`*rest\` to unpack just the name, then collect the rest
- Use \`.count()\` on a tuple with repeated values

---

## What You Learned

- What a tuple is and how it differs from a list
- The single-item tuple gotcha — always use a trailing comma
- That parentheses are optional — the comma is what matters
- How to access items using indexes, negative indexes, and slices
- How to unpack a tuple into variables
- The swap trick using unpacking
- Extended unpacking with \`*\`
- How to return multiple values from a function
- The two tuple methods: \`.count()\` and \`.index()\`

---

## What Comes Next

Now that you know how to store data by position,
the next step is organizing data by **label** instead.

**Dictionaries & Sets**

`,
};
