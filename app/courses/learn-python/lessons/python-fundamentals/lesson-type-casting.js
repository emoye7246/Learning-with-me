export const lessonTypeCasting = {
  id: "type-casting",
  title: "Type Casting",

  article: `
## Introduction

You've seen variables hold different types of data.

Integers.
Floats.
Strings.
Booleans.

Sometimes you need to convert one type to another.

That's called **type casting**.

---

## Why Does This Matter?

When you receive input from a user,
Python gives it to you as a string.

Even if the user typed a number.

If you try to do math with it,
Python will complain.

Type casting fixes that.

---

## Converting to an Integer

Use \`int()\` to convert to a whole number.

Try this:

\`\`\`python
number = int("25")
print(number + 5)
\`\`\`

Save.
Run it.

You should see:

\`\`\`
30
\`\`\`

The string \`"25"\` became the integer \`25\`.

---

## Converting to a Float

Use \`float()\` to convert to a decimal number.

\`\`\`python
price = float("9.99")
print(price * 2)
\`\`\`

Output:

\`\`\`
19.98
\`\`\`

---

## Converting to a String

Use \`str()\` to convert to text.

\`\`\`python
age = 25
message = "You are " + str(age) + " years old."
print(message)
\`\`\`

Without \`str()\`,
you'd get a TypeError.

You can't combine a string and an integer directly.

---

## Converting to a Boolean

Use \`bool()\` to convert to True or False.

\`\`\`python
print(bool(1))    # True
print(bool(0))    # False
print(bool(""))   # False
print(bool("hi")) # True
\`\`\`

The rules:
- \`0\`, \`""\`, \`[]\`, \`None\` → \`False\`
- Almost everything else → \`True\`

---

## What Happens When You Get It Wrong

\`\`\`python
int("hello")
\`\`\`

This raises a \`ValueError\`.

You can't turn the word "hello" into a number.

Later, you'll learn how to handle those failures gracefully.
For now, know that the conversion only works if the value makes sense.

---

## Checking the Type

Remember \`type()\` from the variables lesson?

\`\`\`python
x = "42"
print(type(x))       # <class 'str'>

y = int(x)
print(type(y))       # <class 'int'>
\`\`\`

You can confirm a conversion worked by checking the type.

---

## Try This

- Ask the user for a number. Convert it to an integer. Print it doubled.
- Take the float \`"3.14"\` and convert it to an integer. What happens to the decimal?
- Take the integer \`100\` and print it as part of a sentence using \`str()\`.

---

## What You Learned

You now understand:

- What type casting is
- How to use \`int()\`, \`float()\`, \`str()\`, and \`bool()\`
- Why casting fails when the value doesn't fit
- How to verify a type with \`type()\`

Types aren't permanent.

You can convert between them whenever you need to.

---

## What Comes Next

You know how to store values and convert between types.

Now let's talk about how Python compares and evaluates them.

**Operators**
`,
};
