export const lessonBooleansAndConditions = {
    id: "booleans-and-conditions",
    title: "Booleans and Conditions",

    article: `
## Booleans & Conditions

Until now, your programs have executed every line.

No choices.
No decisions.
Just instructions in order.

Now we introduce logic.

Programs can decide what to do.

---

## What Is a Boolean?

A boolean is a type with only two possible values:

- \`True\`
- \`False\`

They are not strings.
They are not numbers.

They represent truth.

---

## Creating Boolean Variables

Try this:

\`\`\`python
is_learning = True
is_tired = False

print(is_learning)
print(is_tired)
\`\`\`

Run it.

Notice how Python prints \`True\` and \`False\`.

---

## Comparison Operators

Booleans are often created by comparisons.

Example:

\`\`\`python
print(5 > 3)
print(10 == 2)
print(4 != 4)
\`\`\`

Operators:

- \`>\` greater than
- \`<\` less than
- \`==\` equal to
- \`!=\` not equal to
- \`>=\` greater than or equal to
- \`<=\` less than or equal to

These expressions evaluate to \`True\` or \`False\`.

---

## Important: = vs ==

This is critical.

- \`=\` assigns a value
- \`==\` compares two values

Example:

\`\`\`python
age = 25      # assignment
print(age == 25)  # comparison
\`\`\`

If you mix these up, your program will break.

---

## Making Decisions with if

Now we use conditions.

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult.")
\`\`\`

Read this like English:

If age is greater than or equal to 18,
then print this message.

---

## Indentation Matters

Notice the space before \`print\`.

That indentation is required.

Python uses indentation to define blocks of code.

If indentation is wrong,
Python will throw an error.

Always indent inside an \`if\` block.

---

## Adding else

Programs can also handle the opposite case.

\`\`\`python
age = 16

if age >= 18:
    print("You are an adult.")
else:
    print("You are under 18.")
\`\`\`

If the condition is False,
Python runs the \`else\` block instead.

---

## Multiple Conditions (elif)

You can add more branches.

\`\`\`python
score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("Keep improving.")
\`\`\`

Python checks conditions in order.
The first one that matches runs.

---

## Logical Operators

You can combine conditions.

\`\`\`python
age = 20
is_student = True

if age >= 18 and is_student:
    print("You qualify.")
\`\`\`

Logical operators:

- \`and\`
- \`or\`
- \`not\`

These let you build more complex logic.

---

## Try This

Create a simple program:

\`\`\`python
temperature = 30

if temperature > 25:
    print("It's hot today.")
else:
    print("It's cool today.")
\`\`\`

Change the number.
Run it again.
Observe the difference.

---

## What You Learned

You now understand:

- What booleans are
- Comparison operators
- The difference between \`=\` and \`==\`
- How to use \`if\`, \`elif\`, and \`else\`
- Why indentation matters

This is the beginning of real logic.    

---

## What Comes Next

Right now, your program makes one decision.

Next, we introduce repetition.

We make code run multiple times.

**Loops**

`

}