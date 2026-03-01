export const lessonTuples = {
  id: "tuples",
  title: "Tuples",

  article: `
## Tuples

A tuple is a list that can't be changed.

Once created, the items are fixed. You can read them, loop over them, unpack them. But you can't add, remove, or swap items.

That constraint is the point.

---

## Creating a Tuple

\`\`\`python
point = (10, 20)
rgb = (255, 128, 0)
single = (42,)   # trailing comma required for single-item tuples
empty = ()
\`\`\`

Parentheses are optional in many contexts, but use them for clarity:

\`\`\`python
point = 10, 20   # also a tuple
\`\`\`

---

## Accessing Items

Same as lists — zero-indexed.

\`\`\`python
point = (10, 20)
print(point[0])   # 10
print(point[1])   # 20
print(point[-1])  # 20
\`\`\`

Slicing also works.

\`\`\`python
coords = (1, 2, 3, 4, 5)
print(coords[1:3])  # (2, 3)
\`\`\`

---

## Tuples are Immutable

\`\`\`python
point = (10, 20)
point[0] = 99   # TypeError: 'tuple' object does not support item assignment
\`\`\`

This is intentional. If you need to change the value, use a list instead.

---

## Unpacking

Tuples were made for unpacking.

\`\`\`python
point = (10, 20)
x, y = point
print(x)  # 10
print(y)  # 20
\`\`\`

Python assigns values left-to-right. The count must match.

\`\`\`python
a, b, c = (1, 2, 3)   # works
a, b = (1, 2, 3)       # ValueError: too many values to unpack
\`\`\`

---

## Star Unpacking

\`\`\`python
first, *rest = (1, 2, 3, 4, 5)
print(first)  # 1
print(rest)   # [2, 3, 4, 5]
\`\`\`

\`rest\` becomes a list. Useful when you care about the first item and want the remainder.

---

## Swapping Variables

Tuple unpacking makes this clean:

\`\`\`python
a, b = 1, 2
a, b = b, a
print(a, b)  # 2 1
\`\`\`

No temp variable needed.

---

## When to Use Tuples vs Lists

Use a **list** when:
- Items may change (add, remove, reorder)
- You're building a collection dynamically

Use a **tuple** when:
- Items are fixed by nature: coordinates, RGB values, dates
- You're returning multiple values from a function
- You want to signal "this should not change"

\`\`\`python
def get_dimensions():
    return (1920, 1080)

width, height = get_dimensions()
\`\`\`

---

## Tuples as Dictionary Keys

Lists can't be dictionary keys. Tuples can.

\`\`\`python
grid = {}
grid[(0, 0)] = "start"
grid[(1, 0)] = "path"
grid[(2, 0)] = "end"

print(grid[(0, 0)])  # start
\`\`\`

This is common in grid-based programs, maps, and caches.

---

## Named Tuples (Brief Intro)

When your tuple has meaning, name its fields:

\`\`\`python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x)   # 10
print(p.y)   # 20
\`\`\`

More readable than \`p[0]\` and \`p[1]\`.

---

## Common Mistakes

- Forgetting the trailing comma for single-item tuples: \`(42)\` is just \`42\`, not a tuple.
- Trying to modify a tuple and wondering why it fails.
- Using a list when a tuple would communicate intent better.

---

## Try this

1. Create a tuple \`(width, height)\` and unpack it into two variables.
2. Write a function that returns three values as a tuple.
3. Build a dictionary with tuple keys for a 3x3 grid.
4. Swap two variables without a temp variable using tuple unpacking.

---

## What you just learned

- How to create and access tuples
- Why tuples are immutable and why that matters
- How to unpack tuples including star unpacking
- When to choose tuples over lists

---

## What comes next

Next lesson: **Dictionaries & Sets**
`,
};
