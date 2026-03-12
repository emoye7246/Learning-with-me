export const lessonMatch = {
    id: "match",
    title: "Match / Case",
    hasChallenge: false,

    article: `
## Match / Case

You've used \`if\`, \`elif\`, and \`else\` to make decisions.

When you have many specific values to check,
\`if/elif\` chains can get long and repetitive.

Python 3.10 introduced \`match\` — a cleaner way to handle this.

---

## The Basic Syntax

\`\`\`python
command = "quit"

match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case "quit":
        print("Quitting...")
    case _:
        print("Unknown command.")
\`\`\`

Run it.

Python checks \`command\` against each \`case\`.
The first match runs.

\`case _\` is the default — it matches anything not caught above.

---

## Compared to if/elif

This:

\`\`\`python
match status:
    case 200:
        print("OK")
    case 404:
        print("Not Found")
    case 500:
        print("Server Error")
    case _:
        print("Unknown status")
\`\`\`

Is equivalent to:

\`\`\`python
if status == 200:
    print("OK")
elif status == 404:
    print("Not Found")
elif status == 500:
    print("Server Error")
else:
    print("Unknown status")
\`\`\`

Both work.
Match is cleaner when there are many specific values.

---

## Matching Multiple Values in One Case

\`\`\`python
day = "Saturday"

match day:
    case "Saturday" | "Sunday":
        print("Weekend")
    case _:
        print("Weekday")
\`\`\`

The \`|\` means "or" inside a case.

---

## Matching with Variables (Capture)

\`\`\`python
point = (3, 5)

match point:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"On the x-axis at {x}")
    case (0, y):
        print(f"On the y-axis at {y}")
    case (x, y):
        print(f"At ({x}, {y})")
\`\`\`

Here, \`x\` and \`y\` capture the actual values from the tuple.

This is more advanced — come back to it later if it feels complex.

---

## When to Use match vs if/elif

Use \`match\` when:
- You are comparing one variable against many specific values
- The code would become a long chain of \`elif\` statements

Use \`if/elif\` when:
- Your conditions involve ranges (\`x > 10\`)
- You are combining multiple conditions

---

## Important: Python Version

\`match\` requires Python 3.10 or newer.

Check your version:

\`\`\`
python --version
\`\`\`

If you're on an older version, use \`if/elif\` instead.

---

## Try This

\`\`\`python
grade = "B"

match grade:
    case "A":
        print("Excellent")
    case "B":
        print("Good")
    case "C":
        print("Passing")
    case _:
        print("Needs improvement")
\`\`\`

Change the value of \`grade\` and run it again.

---

## What You Learned

- How \`match/case\` works in Python
- The default case with \`_\`
- How to match multiple values with \`|\`
- When to prefer \`match\` over \`if/elif\`

---

## What Comes Next

You know how to store data and make decisions.

Next, you'll learn how to store multiple values in a single variable.

**Lists**

`
}
