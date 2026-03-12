export const lessonDataTypes = {
    id: "data-types",
    title: "Data Types",
    hasChallenge: false,

    article: `
## Data Types

Every value in Python has a type.

A type tells Python what kind of data something is
and what you can do with it.

You've already seen a few types.

Now let's understand them properly.

---

## The Core Types

### int — Whole Numbers

\`\`\`python
age = 25
score = -10
year = 2024
\`\`\`

No decimal point.
Positive or negative.
No size limit in Python.

---

### float — Decimal Numbers

\`\`\`python
price = 9.99
temperature = -3.5
pi = 3.14159
\`\`\`

Has a decimal point.

Be aware: floats are not always exact.

\`\`\`python
print(0.1 + 0.2)
# Output: 0.30000000000000004
\`\`\`

This is a floating point precision issue.
It affects all programming languages, not just Python.

---

### str — Text (Strings)

\`\`\`python
name = "Elijah"
message = 'Hello, world!'
empty = ""
\`\`\`

Use single or double quotes.
They work the same way.

Strings are sequences of characters.

---

### bool — True or False

\`\`\`python
is_logged_in = True
has_errors = False
\`\`\`

Only two possible values: \`True\` or \`False\`.

Note the capital letters.
\`true\` and \`false\` are not valid in Python.

---

### NoneType — The Absence of a Value

\`\`\`python
result = None
\`\`\`

\`None\` represents nothing.
It is not zero.
It is not an empty string.
It is the intentional absence of a value.

You'll see \`None\` often when a function returns nothing.

---

## Checking the Type of a Value

Use \`type()\` to check:

\`\`\`python
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hello"))   # <class 'str'>
print(type(True))      # <class 'bool'>
print(type(None))      # <class 'NoneType'>
\`\`\`

Run this.
Observe each output.

---

## Types Affect Behavior

Different types behave differently under the same operation.

\`\`\`python
print(1 + 2)        # 3  (integer addition)
print("a" + "b")    # ab (string concatenation)
\`\`\`

The \`+\` operator means different things for different types.

This is why types matter.

---

## Mixing Types

Some operations fail when types don't match:

\`\`\`python
print("Age: " + 25)
# TypeError: can only concatenate str (not "int") to str
\`\`\`

You need to convert the number to a string first.

You'll learn how to do that in the next lesson.

---

## Try This

\`\`\`python
x = 42
y = 3.14
z = "hello"
flag = True
nothing = None

print(type(x))
print(type(y))
print(type(z))
print(type(flag))
print(type(nothing))
\`\`\`

Run it.
Make sure you recognise each output.

---

## What You Learned

- The five core Python types: int, float, str, bool, NoneType
- How to check a value's type with \`type()\`
- Why types affect how operations behave
- That floats have precision limits

---

## What Comes Next

Now that you know the types,
you'll learn how to convert between them.

**Casting**

`
}
