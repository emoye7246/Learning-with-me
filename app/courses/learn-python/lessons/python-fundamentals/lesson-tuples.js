export const lessonTuples = {
  id: "tuples",
  title: "Tuples",

  article: `
## Introduction

You know how to store multiple values using lists.

Lists are great.

But they can be changed.

Items can be added, removed, or swapped around.

Sometimes that's not what you want.

Sometimes you want a collection that stays fixed.

That's a tuple.

---

## What Is a Tuple?

A tuple is an ordered collection of values —
just like a list —
but it cannot be changed after it's created.

Tuples use parentheses \`()\` instead of square brackets.

Try this:

\`\`\`python
coordinates = (40.7128, -74.0060)
print(coordinates)
\`\`\`

Save.
Run it.

You should see the two values printed together.

---

## Accessing Tuple Items

Just like lists, tuples use index positions.

\`\`\`python
point = (10, 20, 30)

print(point[0])   # 10
print(point[1])   # 20
print(point[2])   # 30
\`\`\`

Indexing starts at 0.

---

## Tuples Are Immutable

Try to change a value:

\`\`\`python
point = (10, 20, 30)
point[0] = 99
\`\`\`

Save.
Run it.

You'll see an error:

\`\`\`
TypeError: 'tuple' object does not support item assignment
\`\`\`

That error is intentional.

Tuples are designed to protect their values.

---

## When Do You Use a Tuple?

Use a tuple when the data should not change.

Real examples:
- A GPS coordinate: \`(latitude, longitude)\`
- Days of the week: \`("Mon", "Tue", "Wed", "Thu", "Fri")\`
- RGB color values: \`(255, 0, 128)\`
- A function returning multiple values

Lists are for collections that grow or change.
Tuples are for collections that are fixed by nature.

---

## Tuple Unpacking

One of the most useful things about tuples is unpacking.

\`\`\`python
point = (10, 20)

x, y = point

print(x)   # 10
print(y)   # 20
\`\`\`

Python assigns each value to a separate variable automatically.

This is clean.
This is used everywhere in real Python code.

---

## Checking Tuple Length

\`\`\`python
colors = ("red", "green", "blue")
print(len(colors))   # 3
\`\`\`

---

## Looping Through a Tuple

\`\`\`python
days = ("Monday", "Tuesday", "Wednesday")

for day in days:
    print(day)
\`\`\`

It works exactly like a list.

---

## One-Item Tuples

A tuple with a single item needs a trailing comma.

\`\`\`python
single = ("hello",)
print(type(single))   # <class 'tuple'>
\`\`\`

Without the comma:

\`\`\`python
not_a_tuple = ("hello")
print(type(not_a_tuple))   # <class 'str'>
\`\`\`

The comma is what makes it a tuple.

---

## Try This

- Create a tuple of three of your favorite movies.
  Print each one using a for loop.

- Create a coordinate tuple \`(3, 7)\`.
  Unpack it into \`x\` and \`y\`.
  Print each separately.

- Try modifying a value in the tuple.
  Observe the error.

---

## What You Learned

You now understand:

- What a tuple is
- How tuples differ from lists (immutability)
- How to access tuple items by index
- How to unpack a tuple
- When to use a tuple vs a list

Lists for what changes.
Tuples for what stays.

---

## What Comes Next

You've seen collections based on order.

Next, a collection based on uniqueness.

**Sets**
`,
};
