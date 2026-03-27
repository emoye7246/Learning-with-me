export const lessonLoops = {
    id: "loops",
    title: "Loops (for / while)",
    hasChallenge: false,

    article: `

## Introduction

So far, your programs run top to bottom — one line at a time.

But what if you want something to happen multiple times?

- Print every item in a list
- Repeat something until a condition changes
- Count from 1 to 100

That's what loops are for.

Python has two kinds:

- **\`for\`** — repeat for each item in a sequence
- **\`while\`** — repeat as long as a condition is true

---

# Part 1: The for Loop

---

## Looping Through a List

\`\`\`python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
\`\`\`

Output:

\`\`\`
apple
banana
cherry
\`\`\`

The loop runs once for each item.

\`fruit\` is a **temporary variable** — each time the loop runs, it becomes the next item.

You can name it anything, but the name should describe what each item is.

---

## Looping Through a String

Strings are sequences too — each character is an item.

\`\`\`python
for letter in "hello":
    print(letter)
\`\`\`

Output:

\`\`\`
h
e
l
l
o
\`\`\`

---

## range() — Repeating a Set Number of Times

Use \`range()\` when you want to repeat something a specific number of times.

\`\`\`python
for number in range(5):
    print(number)
\`\`\`

Output: \`0 1 2 3 4\`

\`range(5)\` gives you 0 through 4 — five numbers starting at 0.

---

## range(start, stop)

To start somewhere other than 0:

\`\`\`python
for number in range(1, 6):
    print(number)
\`\`\`

Output: \`1 2 3 4 5\`

The stop value is **not included** — just like slicing.

---

## range(start, stop, step)

The third argument controls the **step** — how much to add each time.

Count by twos:

\`\`\`python
for number in range(0, 10, 2):
    print(number)
\`\`\`

Output: \`0 2 4 6 8\`

Count backwards:

\`\`\`python
for number in range(5, 0, -1):
    print(number)
\`\`\`

Output: \`5 4 3 2 1\`

| range() form | What it does |
|---|---|
| \`range(n)\` | 0 up to n (not including n) |
| \`range(a, b)\` | a up to b (not including b) |
| \`range(a, b, step)\` | a up to b, jumping by step |

---

## enumerate() — Index and Value Together

Sometimes you need both the **position** and the **value** while looping.

\`enumerate()\` gives you both.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

for index, fruit in enumerate(fruits):
    print(index, fruit)
\`\`\`

Output:

\`\`\`
0 apple
1 banana
2 cherry
\`\`\`

This is cleaner than manually tracking an index variable.

You can also start the count from a different number:

\`\`\`python
for index, fruit in enumerate(fruits, start=1):
    print(index, fruit)
\`\`\`

Output:

\`\`\`
1 apple
2 banana
3 cherry
\`\`\`

---

## Looping Through a Dictionary

Use \`.items()\` to loop over key-value pairs.

\`\`\`python
person = {"name": "Elijah", "age": 25, "city": "New York"}

for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

Output:

\`\`\`
name: Elijah
age: 25
city: New York
\`\`\`

---

## Loops With Conditions

You can combine loops and \`if\` statements.

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for number in numbers:
    if number % 2 == 0:
        print(number, "is even")
\`\`\`

Output:

\`\`\`
2 is even
4 is even
6 is even
8 is even
\`\`\`

---

## Nested Loops

A loop inside a loop is called a **nested loop**.

The inner loop runs completely for each iteration of the outer loop.

\`\`\`python
for row in range(1, 4):
    for col in range(1, 4):
        print(row, col)
\`\`\`

Output:

\`\`\`
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
\`\`\`

A common real use: building a multiplication table.

\`\`\`python
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end="  ")
    print()
\`\`\`

Output:

\`\`\`
1  2  3
2  4  6
3  6  9
\`\`\`

---

# Part 2: The while Loop

---

## What Is a while Loop?

A \`while\` loop repeats as long as a condition is \`True\`.

It doesn't loop over a list — it loops based on a condition.

\`\`\`python
count = 0

while count < 5:
    print(count)
    count += 1
\`\`\`

Output: \`0 1 2 3 4\`

Each iteration:
1. Check if \`count < 5\`
2. If True, run the block
3. Increment \`count\`
4. Go back and check again

---

## Infinite Loops — And How to Avoid Them

If the condition never becomes \`False\`, the loop runs forever.

\`\`\`python
count = 0

while count < 5:
    print(count)
    # forgot count += 1
\`\`\`

This never stops. That's an **infinite loop**.

Always make sure something inside your loop moves it toward ending.

---

## while True + break

Sometimes you intentionally want a loop that runs until you decide to stop it.

Use \`while True\` with a \`break\` statement.

\`\`\`python
attempts = 0

while True:
    attempts += 1
    print(f"Attempt {attempts}")

    if attempts >= 3:
        print("Done.")
        break
\`\`\`

Output:

\`\`\`
Attempt 1
Attempt 2
Attempt 3
Done.
\`\`\`

\`break\` exits the loop immediately, no matter where you are in it.

---

# Part 3: Loop Control

---

## break — Exit Early

\`break\` stops the loop as soon as it's hit.

\`\`\`python
numbers = [3, 7, 2, 9, 4]

for number in numbers:
    if number == 9:
        print("Found 9, stopping.")
        break
    print(number)
\`\`\`

Output:

\`\`\`
3
7
2
Found 9, stopping.
\`\`\`

Once \`break\` runs, the loop ends — even if items remain.

---

## continue — Skip to the Next Iteration

\`continue\` skips the rest of the current iteration and moves to the next one.

\`\`\`python
for number in range(1, 7):
    if number == 4:
        continue
    print(number)
\`\`\`

Output:

\`\`\`
1
2
3
5
6
\`\`\`

4 was skipped, but the loop kept going.

---

## break vs continue

| Keyword | What it does |
|---|---|
| \`break\` | Exits the loop entirely |
| \`continue\` | Skips to the next iteration |

---

## for vs while — When to Use Each

| Use \`for\` when... | Use \`while\` when... |
|---|---|
| Looping over a list, string, or dict | Repeating until something changes |
| You know how many times to repeat | You don't know how many times |
| Using \`range()\` | Waiting for user input or a condition |

If you can use \`for\`, use \`for\`.

\`while\` loops are easier to turn into infinite loops by accident.

---

## Mini Challenge

You have a list of student scores:

\`\`\`python
scores = [82, 55, 91, 47, 73, 68, 95, 39, 84, 60]
\`\`\`

Your goal — write a program that:

1. Loops through every score
2. Prints scores **above 70** with their position (starting at 1)
3. Counts how many students passed (score > 70)
4. Prints the final count at the end

Expected output should look something like:

\`\`\`
#1 — 82 ✓
#3 — 91 ✓
#5 — 73 ✓
#7 — 95 ✓
#9 — 84 ✓

5 students passed.
\`\`\`

**Hints:**
- Use \`enumerate()\` to get the position and score together
- Use an \`if\` statement inside your loop
- Keep a counter variable outside the loop and increment it when a student passes

Give it a try before reading further.

---

## One Way to Solve It

\`\`\`python
scores = [82, 55, 91, 47, 73, 68, 95, 39, 84, 60]

passed = 0

for index, score in enumerate(scores, start=1):
    if score > 70:
        print(f"#{index} — {score} ✓")
        passed += 1

print(f"\\n{passed} students passed.")
\`\`\`

There's more than one way to write this — yours doesn't need to match exactly.

What matters is that it works.

---

## What You Learned

- How \`for\` loops iterate over lists, strings, and ranges
- \`range(n)\`, \`range(a, b)\`, and \`range(a, b, step)\`
- How \`enumerate()\` gives you index and value together
- How to loop over a dictionary with \`.items()\`
- How \`while\` loops work and when to use them
- \`while True\` + \`break\` for controlled open-ended loops
- \`break\` to exit a loop early
- \`continue\` to skip an iteration
- How nested loops work
- When to choose \`for\` vs \`while\`

---

## What Comes Next

Your programs can now repeat.

But they still use the same hardcoded logic every time.

Next, you'll learn how to wrap logic into reusable blocks you can call whenever you need them.

**Functions**

`
}
