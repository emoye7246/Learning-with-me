export const lessonTryExcept = {
    id: "try-except",
    title: "Try / Except (Error Handling)",
    hasChallenge: false,

    article: `
## Try / Except

Things go wrong.

Users type letters when you expect numbers.
Files don't exist.
Network connections fail.

Your program shouldn't crash when this happens.

\`try/except\` lets you handle errors gracefully.

---

## The Basic Structure

\`\`\`python
try:
    # Code that might fail
    result = 10 / 0
except ZeroDivisionError:
    # Code that runs if it fails
    print("You can't divide by zero.")
\`\`\`

Python tries the code in the \`try\` block.
If an error occurs, it jumps to the \`except\` block.
If no error occurs, the \`except\` block is skipped.

---

## A Real Example: Converting User Input

\`\`\`python
user_input = "abc"

try:
    number = int(user_input)
    print("You entered:", number)
except ValueError:
    print("That's not a valid number.")
\`\`\`

Without \`try/except\`, this crashes.
With it, the program handles the problem cleanly.

---

## Common Exception Types

| Exception | When it happens |
|---|---|
| \`ValueError\` | Wrong value type (e.g., \`int("abc")\`) |
| \`TypeError\` | Wrong type (e.g., \`"a" + 1\`) |
| \`ZeroDivisionError\` | Dividing by zero |
| \`IndexError\` | List index out of range |
| \`KeyError\` | Dictionary key doesn't exist |
| \`FileNotFoundError\` | File doesn't exist |

---

## Catching Multiple Exceptions

\`\`\`python
try:
    value = int(input("Enter a number: "))
    result = 100 / value
    print(result)
except ValueError:
    print("Please enter a valid number.")
except ZeroDivisionError:
    print("Can't divide by zero.")
\`\`\`

---

## The else Clause

Code in \`else\` runs only if no exception occurred.

\`\`\`python
try:
    number = int("42")
except ValueError:
    print("Invalid number.")
else:
    print("Converted successfully:", number)
\`\`\`

---

## The finally Clause

Code in \`finally\` always runs — error or not.

\`\`\`python
try:
    file = open("data.txt")
    content = file.read()
except FileNotFoundError:
    print("File not found.")
finally:
    print("Done attempting to read file.")
\`\`\`

Useful for cleanup actions that must always happen
(like closing a file or a database connection).

---

## Getting the Error Message

You can capture the exception object to read its message.

\`\`\`python
try:
    result = int("not a number")
except ValueError as e:
    print("Error:", e)
# Error: invalid literal for int() with base 10: 'not a number'
\`\`\`

---

## Catching Any Exception (Use Carefully)

\`\`\`python
try:
    # risky code
    pass
except Exception as e:
    print("Something went wrong:", e)
\`\`\`

This catches everything.
Use sparingly — it can hide bugs you should know about.

---

## What Not to Do

Don't use empty \`except\` blocks.

\`\`\`python
# Bad
try:
    do_something()
except:
    pass  # silently swallows all errors
\`\`\`

If something breaks, you'll have no idea why.

---

## Try This

\`\`\`python
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Cannot divide by zero.")
        return None

print(safe_divide(10, 2))
print(safe_divide(10, 0))
\`\`\`

---

## What You Learned

- How \`try/except\` prevents crashes
- Common exception types and when they occur
- How to use \`else\` and \`finally\`
- How to capture and display error messages
- Why silent \`except: pass\` is bad practice

---

## What Comes Next

You can now handle errors.

Next, you'll master one of Python's most powerful features — strings.

**Strings & Formatting**

`
}
