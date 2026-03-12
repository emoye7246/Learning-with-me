export const lessonLambda = {
  id: "lambda",
  title: "Lambda Functions",

  article: `
## Introduction

You've learned how to define functions with \`def\`.

They have names.
They have bodies.
They do work.

Python has another kind of function.

One without a name.

A **lambda function**.

---

## What Is a Lambda?

A lambda is a small, anonymous function.

It's defined in a single line.

\`\`\`python
add = lambda a, b: a + b
print(add(3, 5))
\`\`\`

Save.
Run it.

Output:

\`\`\`
8
\`\`\`

---

## Breaking Down the Syntax

\`\`\`
lambda parameters: expression
\`\`\`

- \`lambda\` — the keyword
- \`parameters\` — the inputs (just like a regular function)
- \`expression\` — the single line of logic that gets returned automatically

There is no \`return\` keyword.

The expression is the return value.

---

## Comparing to a Regular Function

Regular:

\`\`\`python
def square(x):
    return x ** 2
\`\`\`

Lambda:

\`\`\`python
square = lambda x: x ** 2
\`\`\`

Same result.
Different form.

---

## Where Lambdas Shine

Lambdas aren't usually assigned to a variable like above.

Their real power shows up when you need a quick function as an argument.

The most common use: \`sorted()\` with a custom key.

\`\`\`python
students = [
    {"name": "Alice", "grade": 88},
    {"name": "Bob", "grade": 95},
    {"name": "Charlie", "grade": 72},
]

sorted_students = sorted(students, key=lambda s: s["grade"])

for student in sorted_students:
    print(student["name"], student["grade"])
\`\`\`

Output:

\`\`\`
Charlie 72
Alice 88
Bob 95
\`\`\`

You told \`sorted()\` how to evaluate each item — using a lambda.

---

## Another Common Use: map()

\`map()\` applies a function to every item in a list.

\`\`\`python
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda n: n * 2, numbers))
print(doubled)
\`\`\`

Output:

\`\`\`
[2, 4, 6, 8, 10]
\`\`\`

---

## Another Common Use: filter()

\`filter()\` keeps only items where the function returns True.

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda n: n % 2 == 0, numbers))
print(evens)
\`\`\`

Output:

\`\`\`
[2, 4, 6]
\`\`\`

---

## When to Use a Lambda

Use a lambda when:

- You need a small function just once
- You're passing a function as an argument
- The logic fits in one expression

Use a regular \`def\` when:

- The logic is more complex
- You'll reuse the function in multiple places
- You want to add documentation

---

## Try This

- Write a lambda that takes a number and returns whether it's positive (\`True\`/\`False\`).

- Use \`sorted()\` with a lambda to sort this list by string length:
  \`["python", "go", "javascript", "rust"]\`

- Use \`map()\` with a lambda to convert a list of temperatures from Celsius to Fahrenheit.
  Formula: \`(c * 9/5) + 32\`

---

## What You Learned

You now understand:

- What a lambda function is
- The syntax: \`lambda parameters: expression\`
- How lambdas compare to regular \`def\` functions
- Where they're commonly used: \`sorted()\`, \`map()\`, \`filter()\`
- When to use a lambda vs a full function

Lambdas aren't a replacement for functions.

They're a shortcut for the moments when a full function would be overkill.

---

## What Comes Next

Your programs know how to process data.

Next, they'll learn how to interact with the person running them.

**Input & Output**
`,
};
