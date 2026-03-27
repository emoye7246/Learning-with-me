export const lessonLists = {
    id: "lists",
    title: "Lists",
    hasChallenge: false,

    article: `
## Introduction to Lists

So far, each variable has held one value.

One number.
One string.
One boolean.

But what if you want to store multiple values together?

That's where lists come in.

---

## What Is a List?

A list is an ordered collection of values.

It allows you to store multiple items inside a single variable.

Lists are written using square brackets \`[]\`.

\`\`\`python
numbers = [1, 2, 3, 4, 5]
\`\`\`

Think of it like a numbered shelf.
Each slot holds a value, and each slot has a position.

---

## Creating a List

Try this:

\`\`\`python
numbers = [1, 2, 3, 4, 5]
print(numbers)
\`\`\`

Save. Run it.

You should see:

\`\`\`
[1, 2, 3, 4, 5]
\`\`\`

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
- even other lists (more on that later)

Most real-world lists store one type of thing to keep things predictable.

---

## Accessing Items (Indexing)

Lists are ordered.

Each item has a position called an **index**.

Positions start at **0**, not 1.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])  # apple
print(fruits[1])  # banana
print(fruits[2])  # cherry
\`\`\`

| Index | Value |
|---|---|
| \`0\` | \`"apple"\` |
| \`1\` | \`"banana"\` |
| \`2\` | \`"cherry"\` |

Python starts counting from 0.
This is true in almost every programming language.

---

## Negative Indexing

Python also lets you count from the **end** of a list using negative numbers.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print(fruits[-1])  # cherry  (last item)
print(fruits[-2])  # banana  (second to last)
\`\`\`

\`-1\` always means the last item, no matter how long the list is.

This is useful when you don't know the exact length of a list.

---

## Slicing a List

You can grab a **portion** of a list using a slice.

\`\`\`python
numbers = [10, 20, 30, 40, 50]

print(numbers[1:4])  # [20, 30, 40]
\`\`\`

The format is \`list[start:stop]\`.

- **start** — the index to begin at (included)
- **stop** — the index to stop at (not included)

A few shortcuts:

\`\`\`python
print(numbers[:3])   # [10, 20, 30]  — from the beginning
print(numbers[2:])   # [30, 40, 50]  — to the end
print(numbers[:])    # [10, 20, 30, 40, 50]  — full copy
\`\`\`

---

## Changing List Values

Lists are **mutable** — you can change them after they're created.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

fruits[1] = "blueberry"

print(fruits)  # ["apple", "blueberry", "cherry"]
\`\`\`

Just assign a new value to an index.

---

## Adding Items

**Append** adds one item to the end:

\`\`\`python
numbers = [1, 2, 3]
numbers.append(4)

print(numbers)  # [1, 2, 3, 4]
\`\`\`

**Insert** adds an item at a specific position:

\`\`\`python
numbers = [1, 2, 4]
numbers.insert(2, 3)  # insert 3 at index 2

print(numbers)  # [1, 2, 3, 4]
\`\`\`

---

## Removing Items

**Remove** deletes the first matching value:

\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")

print(fruits)  # ["apple", "cherry"]
\`\`\`

**Pop** removes an item by index (and returns it):

\`\`\`python
fruits = ["apple", "banana", "cherry"]
removed = fruits.pop(1)

print(removed)  # banana
print(fruits)   # ["apple", "cherry"]
\`\`\`

Calling \`.pop()\` with no argument removes the last item.

---

## List Length

To check how many items are in a list:

\`\`\`python
numbers = [1, 2, 3, 4]
print(len(numbers))  # 4
\`\`\`

---

## Sorting a List

\`\`\`python
numbers = [5, 2, 8, 1, 9]
numbers.sort()

print(numbers)  # [1, 2, 5, 8, 9]
\`\`\`

For strings, \`.sort()\` sorts alphabetically.

\`\`\`python
fruits = ["cherry", "apple", "banana"]
fruits.sort()

print(fruits)  # ["apple", "banana", "cherry"]
\`\`\`

---

## Checking if an Item Exists

Use the \`in\` keyword to check if a value is in a list:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

print("banana" in fruits)   # True
print("mango" in fruits)    # False
\`\`\`

---

## Common List Methods at a Glance

| Method | What it does |
|---|---|
| \`.append(x)\` | Add \`x\` to the end |
| \`.insert(i, x)\` | Add \`x\` at index \`i\` |
| \`.remove(x)\` | Remove the first \`x\` |
| \`.pop(i)\` | Remove and return item at index \`i\` |
| \`.sort()\` | Sort the list in place |
| \`.reverse()\` | Reverse the list in place |
| \`len(list)\` | Return the number of items |

---

## Try This

Build a small list and practice everything:

\`\`\`python
favorite_foods = ["pizza", "tacos", "pasta"]

print(favorite_foods[0])       # first item
print(favorite_foods[-1])      # last item
print(len(favorite_foods))     # how many

favorite_foods.append("sushi")
favorite_foods.remove("tacos")
favorite_foods.sort()

print(favorite_foods)
\`\`\`

Run it. Change values. See what happens.

---

## What You Learned

- What a list is and how to create one
- How indexing works (starting at 0)
- Negative indexing to access from the end
- Slicing to grab a portion of a list
- How to modify, add, and remove items
- How to sort and check for values
- The most common list methods

---

## What Comes Next

In the next lesson, we look at a special kind of list that can **never be changed**.

**Tuples**

`

}
