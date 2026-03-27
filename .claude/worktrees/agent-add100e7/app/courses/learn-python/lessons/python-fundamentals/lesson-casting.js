export const lessonCasting = {
    id: "casting",
    title: "Casting (Type Conversion)",
    hasChallenge: false,

    article: `
## Casting

Sometimes you have a value of one type
but you need a different type.

That's called casting — or type conversion.

Python gives you built-in functions to do this.

---

## int()

Converts a value to a whole number.

\`\`\`python
x = int("42")
print(x)       # 42
print(type(x)) # <class 'int'>
\`\`\`

Also works on floats:

\`\`\`python
x = int(9.99)
print(x)  # 9
\`\`\`

Notice: it doesn't round.
It truncates — it just drops the decimal part.

---

## float()

Converts a value to a decimal number.

\`\`\`python
x = float("3.14")
print(x)       # 3.14
print(type(x)) # <class 'float'>
\`\`\`

Also works on integers:

\`\`\`python
x = float(5)
print(x)  # 5.0
\`\`\`

---

## str()

Converts a value to text.

\`\`\`python
age = 25
message = "I am " + str(age) + " years old."
print(message)  # I am 25 years old.
\`\`\`

This is the most common casting you'll do.

Without \`str()\`, combining text and numbers causes a TypeError.

---

## bool()

Converts a value to True or False.

\`\`\`python
print(bool(1))      # True
print(bool(0))      # False
print(bool(""))     # False
print(bool("hi"))   # True
print(bool(None))   # False
\`\`\`

In Python, most values are truthy.

These values are falsy (evaluate to False):
- \`0\`
- \`0.0\`
- \`""\` (empty string)
- \`[]\` (empty list)
- \`None\`

Everything else is truthy.

---

## When Casting Fails

Not every conversion makes sense.

\`\`\`python
x = int("hello")
# ValueError: invalid literal for int() with base 10: 'hello'
\`\`\`

Python will raise an error if the conversion is impossible.

You'll learn how to handle these errors later in the course.

---

## A Common Real-World Example

User input always comes in as a string.

\`\`\`python
age_text = input("Enter your age: ")
age = int(age_text)
print("Next year you will be", age + 1)
\`\`\`

Without casting, \`age + 1\` would fail
because you can't add a number to a string.

---

## Try This

\`\`\`python
number_string = "100"
number = int(number_string)
print(number + 50)  # Should print 150

price = 9.99
print("Price: $" + str(price))

print(bool(0))
print(bool(42))
\`\`\`

---

## What You Learned

- How to convert between types using \`int()\`, \`float()\`, \`str()\`, \`bool()\`
- That \`int()\` truncates, not rounds
- Which values are falsy in Python
- Why user input always needs to be cast

---

## What Comes Next

Now you understand types and how to convert them.

Next, you'll learn all the ways Python lets you operate on values.

**Operators**

`
}
