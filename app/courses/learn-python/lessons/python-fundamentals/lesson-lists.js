export const lessonLists = {
    id: "lists",
    title: "Lists",

    article: `
## Introduction to Lists

So far, each variable has held one value.

One number.
One string.
One boolean.

But what if you want to store multiple values together?

That’s where lists come in.

---

## What Is a List?

A list is an ordered collection of values.

It allows you to store multiple items
inside a single variable.

Lists are written using square brackets \`[]\`.

---

## Creating a List

Try this:

\`\`\`python
numbers = [1, 2, 3, 4, 5]
print(numbers)
\`\`\`

Save.
Run it.

You should see:

[1, 2, 3, 4, 5]

---

## Lists Can Hold Different Types

Python lists are flexible.

\`\`\`python
mixed = [10, "Hello", True]
print(mixed)
\`\`\`

Lists can store:
- numbers
- strings
- booleans
- even other lists (later)

---

## Accessing Items (Indexing)

Lists are ordered.

Each item has a position.

Positions start at **0**, not 1.

Try this:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])
print(fruits[1])
print(fruits[2])
\`\`\`

Notice:

- fruits[0] → apple
- fruits[1] → banana
- fruits[2] → cherry

Python starts counting from 0.

---

## Why Does Counting Start at 0?

It may feel strange at first.

But internally,
Python counts positions starting from zero.

This is normal in programming.

You will get used to it quickly.

---

## Changing List Values

Lists are mutable.

That means you can modify them.

Try this:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

fruits[1] = "blueberry"

print(fruits)
\`\`\`

The second item changes.

---

## Adding Items

You can add items using \`.\append()\`.

\`\`\`python
numbers = [1, 2, 3]
numbers.append(4)

print(numbers)
\`\`\`

This adds the value to the end of the list.

---

## List Length

To check how many items are inside a list:

\`\`\`python
numbers = [1, 2, 3, 4]
print(len(numbers))
\`\`\`

The \`len()\` function returns the number of items.

---

## List Length

To check how many items are inside a list:

\`\`\`python
numbers = [1, 2, 3, 4]
print(len(numbers))
\`\`\`

The \`len()\` function returns the number of items.

---

## Try This

Create your own list:

\`\`\`python
favorite_foods = ["pizza", "tacos", "pasta"]

print(favorite_foods[0])
print(len(favorite_foods))
\`\`\`

Change an item.
Add a new item.
Run it again.

---

## What You Learned

You now understand:

- What a list is
- How to create one
- How to access items using indexes
- Why indexing starts at 0
- How to modify a list
- How to add items
- How to check its length

Lists are powerful.

But right now,
you can only access one item at a time.

---

## What Comes Next

In the next lesson,
we explore more structured collections.

We introduce key-value pairs.

**Dictionaries & Sets**

`

}