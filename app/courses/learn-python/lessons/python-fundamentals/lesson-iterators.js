export const lessonIterators = {
    id: "iterators",
    title: "Iterators",
    hasChallenge: false,

    article: `
## Iterators

Every time you use a \`for\` loop, something is happening under the hood.

Python is using an iterator.

Understanding iterators helps you understand
how \`for\` loops work,
and unlocks some useful built-in tools.

---

## Iterables vs Iterators

An **iterable** is anything you can loop over.

- Lists
- Tuples
- Strings
- Ranges
- Dictionaries

An **iterator** is an object that tracks where you are in a sequence
and returns the next value on demand.

When you use a \`for\` loop,
Python converts the iterable into an iterator behind the scenes.

---

## iter() and next()

You can manually create an iterator with \`iter()\`
and step through it with \`next()\`.

\`\`\`python
fruits = ["apple", "banana", "cherry"]
it = iter(fruits)

print(next(it))  # apple
print(next(it))  # banana
print(next(it))  # cherry
print(next(it))  # StopIteration error
\`\`\`

When there are no more items, Python raises \`StopIteration\`.

The \`for\` loop handles this automatically.
That's how it knows when to stop.

---

## What a for Loop Really Does

This:

\`\`\`python
for item in fruits:
    print(item)
\`\`\`

Is roughly equivalent to:

\`\`\`python
it = iter(fruits)
while True:
    try:
        item = next(it)
        print(item)
    except StopIteration:
        break
\`\`\`

Python handles all of that for you.

---

## Strings Are Iterable

\`\`\`python
for char in "hello":
    print(char)
# h e l l o
\`\`\`

Each character is returned one by one.

---

## Dictionaries Are Iterable

Iterating over a dictionary gives you the keys.

\`\`\`python
user = {"name": "Elijah", "age": 25}

for key in user:
    print(key, "->", user[key])
\`\`\`

To iterate over key-value pairs:

\`\`\`python
for key, value in user.items():
    print(key, "->", value)
\`\`\`

---

## Useful Built-in Iterators

### enumerate()

Adds an index to any iterable.

\`\`\`python
fruits = ["apple", "banana", "cherry"]

for i, fruit in enumerate(fruits):
    print(i, fruit)
# 0 apple
# 1 banana
# 2 cherry
\`\`\`

### zip()

Combines two iterables in pairs.

\`\`\`python
names = ["Alice", "Bob", "Charlie"]
scores = [90, 85, 92]

for name, score in zip(names, scores):
    print(name, score)
# Alice 90
# Bob 85
# Charlie 92
\`\`\`

### reversed()

Iterates in reverse without modifying the original.

\`\`\`python
for item in reversed([1, 2, 3]):
    print(item)
# 3 2 1
\`\`\`

---

## Try This

\`\`\`python
fruits = ["apple", "banana", "cherry"]
it = iter(fruits)

print(next(it))
print(next(it))
print(next(it))

# Now use enumerate
for i, fruit in enumerate(fruits):
    print(f"{i + 1}. {fruit}")
\`\`\`

---

## What You Learned

- The difference between iterables and iterators
- How \`iter()\` and \`next()\` work
- What a \`for\` loop is actually doing
- How to use \`enumerate()\`, \`zip()\`, and \`reversed()\`

---

## What Comes Next

You've learned how Python moves through data.

Next, you'll write reusable blocks of code.

**Functions**

`
}
