export const lessonListComprehensions = {
  id: "list-comprehensions",
  title: "List Comprehensions",

  article: `
## Introduction

You know how to build a list.

You know how to loop through one.

Now let's combine both — in a single line.

That's what list comprehensions do.

---

## The Problem They Solve

Say you want a list of squares.

The long way:

\`\`\`python
squares = []

for number in range(1, 6):
    squares.append(number ** 2)

print(squares)
\`\`\`

That works.
But it's five lines for a simple idea.

---

## The List Comprehension Way

\`\`\`python
squares = [number ** 2 for number in range(1, 6)]
print(squares)
\`\`\`

Save.
Run it.

Output:

\`\`\`
[1, 4, 9, 16, 25]
\`\`\`

Same result.
One line.
Much cleaner.

---

## Breaking Down the Syntax

\`\`\`
[expression for item in iterable]
\`\`\`

- **expression** — what to do with each item
- **item** — the variable name you choose
- **iterable** — the list or range to loop through

Read it as:
"Give me \`expression\` for every \`item\` in \`iterable\`."

---

## Another Example

\`\`\`python
words = ["hello", "world", "python"]
upper = [word.upper() for word in words]
print(upper)
\`\`\`

Output:

\`\`\`
['HELLO', 'WORLD', 'PYTHON']
\`\`\`

---

## Adding a Condition

You can filter items using an \`if\` clause.

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens = [n for n in numbers if n % 2 == 0]
print(evens)
\`\`\`

Output:

\`\`\`
[2, 4, 6, 8]
\`\`\`

Read it as:
"Give me \`n\` for every \`n\` in \`numbers\` if \`n\` is even."

---

## Combining Expression and Condition

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
print(even_squares)
\`\`\`

Output:

\`\`\`
[4, 16, 36]
\`\`\`

---

## When to Use Them

List comprehensions are great when:

- You are transforming a list into another list
- You want to filter a list
- The logic fits in a single, readable line

Avoid them when:

- The logic is complex
- You need multiple nested conditions
- Readability would suffer

Simple is better than clever.

---

## Try This

- Create a list of numbers 1 to 10.
  Use a list comprehension to make a new list with each number tripled.

- Given \`words = ["cat", "elephant", "dog", "hippopotamus"]\`,
  use a list comprehension to get only the words longer than 4 characters.

- Create a list comprehension that produces the first 10 multiples of 7.

---

## What You Learned

You now understand:

- What a list comprehension is
- The syntax: \`[expression for item in iterable]\`
- How to add a condition with \`if\`
- When to use them and when to write a regular loop instead

List comprehensions don't add new power.

They make existing ideas shorter and clearer.

---

## What Comes Next

Your functions are solid.

Now let's look at a special kind of function that doesn't need a name.

**Lambda Functions**
`,
};
