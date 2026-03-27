export const lessonRange = {
    id: "range",
    title: "The range() Function",
    hasChallenge: false,

    article: `
## The range() Function

You've seen \`range()\` used in for loops.

\`\`\`python
for i in range(5):
    print(i)
\`\`\`

But \`range()\` is more powerful than that.

This lesson covers everything you need to know about it.

---

## What range() Actually Is

\`range()\` doesn't create a list.

It creates a range object — a sequence of numbers generated on demand.

\`\`\`python
r = range(5)
print(r)        # range(0, 5)
print(type(r))  # <class 'range'>
\`\`\`

Python generates the numbers one at a time.
This is memory-efficient for large ranges.

---

## range(stop)

One argument: generates numbers from 0 up to (but not including) stop.

\`\`\`python
for i in range(5):
    print(i)
# 0 1 2 3 4
\`\`\`

---

## range(start, stop)

Two arguments: start and stop.

\`\`\`python
for i in range(2, 7):
    print(i)
# 2 3 4 5 6
\`\`\`

Stop is not included.

---

## range(start, stop, step)

Three arguments: start, stop, and step.

\`\`\`python
for i in range(0, 10, 2):
    print(i)
# 0 2 4 6 8
\`\`\`

Step controls how much to increment each time.

---

## Counting Backwards

Use a negative step to count down.

\`\`\`python
for i in range(10, 0, -1):
    print(i)
# 10 9 8 7 6 5 4 3 2 1
\`\`\`

---

## Converting range to a list

If you need a real list, wrap it with \`list()\`.

\`\`\`python
numbers = list(range(1, 6))
print(numbers)  # [1, 2, 3, 4, 5]
\`\`\`

---

## Checking Membership

You can use \`in\` with a range.

\`\`\`python
print(3 in range(1, 10))   # True
print(15 in range(1, 10))  # False
\`\`\`

This is efficient — Python doesn't generate all the numbers to check.

---

## len() with range

\`len()\` works on range objects.

\`\`\`python
print(len(range(0, 100, 5)))  # 20
\`\`\`

---

## Common Patterns

### Loop a fixed number of times

\`\`\`python
for _ in range(3):
    print("Hello")
\`\`\`

The \`_\` variable is a convention meaning "I don't need this value."

### Generate indices for a list

\`\`\`python
fruits = ["apple", "banana", "cherry"]

for i in range(len(fruits)):
    print(i, fruits[i])
\`\`\`

Though often, \`enumerate()\` is cleaner for this:

\`\`\`python
for i, fruit in enumerate(fruits):
    print(i, fruit)
\`\`\`

---

## Try This

\`\`\`python
# Print even numbers from 2 to 20
for n in range(2, 21, 2):
    print(n)

# Countdown from 5 to 1
for n in range(5, 0, -1):
    print(n)
print("Go!")
\`\`\`

---

## What You Learned

- \`range(stop)\`, \`range(start, stop)\`, \`range(start, stop, step)\`
- That \`range()\` generates numbers lazily (memory-efficient)
- How to count backwards with a negative step
- How to convert a range to a list

---

## What Comes Next

Now you understand sequences and how to traverse them.

Next, you'll go deeper — into the protocol Python uses to make things iterable.

**Iterators**

`
}
