export const lessonTuples = {
  id: "tuples",
  title: "Tuples",
  hasChallenge: false,

  article: `
## Tuples

You just learned about lists.

Lists are great for storing collections of values.

But there's another kind of collection in Python
that works differently.

It's called a **tuple**.

---

## What Is a Tuple?

A tuple is like a list —
but once you create it, it can't be changed.

You can't add items.
You can't remove items.
You can't swap items around.

That's what makes it different.

---

## Creating a Tuple

Tuples use parentheses \`()\` instead of square brackets.

Try this:

\`\`\`python
point = (10, 20)
print(point)
\`\`\`

Save.
Run it.

You should see:

(10, 20)

---

## Accessing Items

You access tuple items the same way as lists —
using their index (position).

\`\`\`python
point = (10, 20)

print(point[0])
print(point[1])
\`\`\`

Output:

10
20

Positions start at 0, just like lists.

---

## What Happens If You Try to Change It?

Try this:

\`\`\`python
point = (10, 20)
point[0] = 99
\`\`\`

Python will give you an error:

\`\`\`
TypeError: 'tuple' object does not support item assignment
\`\`\`

This is intentional.

Tuples are designed to be fixed.

---

## Why Would You Want That?

At first, this might seem like a limitation.

But it's actually useful.

Sometimes you have data that should **never** change.

For example:
- a screen resolution: (1920, 1080)
- an RGB color: (255, 128, 0)
- a date: (2024, 12, 25)

Using a tuple tells anyone reading your code:
"These values are fixed by design."

If the data might change, use a list.
If it's fixed by nature, use a tuple.

---

## Tuple Unpacking

One of the most common things you'll do with tuples
is **unpack** them — assign each item to its own variable.

\`\`\`python
point = (10, 20)

x, y = point

print(x)
print(y)
\`\`\`

Output:

10
20

Python assigns the values left to right.

This is cleaner than writing \`point[0]\` and \`point[1]\`.

---

## Returning Multiple Values from a Function

Tuples are commonly used when a function needs to return more than one value.

\`\`\`python
def get_dimensions():
    return (1920, 1080)

width, height = get_dimensions()

print(width)
print(height)
\`\`\`

Output:

1920
1080

This is a real pattern used in Python all the time.

---

## Try This

1. Create a tuple with your name, age, and city.
2. Print each item using its index.
3. Unpack the tuple into three separate variables.
4. Print a sentence using those variables.

---

## What You Learned

You now understand:

- What a tuple is
- How to create one
- How to access items using indexes
- Why tuples can't be changed
- When to use a tuple instead of a list
- How to unpack a tuple into variables

---

## What Comes Next

Now that you know about lists and tuples,
the next step is organizing data by label
instead of by position.

**Dictionaries & Sets**

`,
};
