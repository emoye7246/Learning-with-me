export const lessonBooleansAndConditions = {
    id: "booleans-and-conditions",
    title: "Booleans and Conditions",
    hasChallenge: false,

    article: `
## Booleans & Conditions

Until now, your programs have been dumb.

Not an insult — just accurate.

They execute every line in order, top to bottom, no matter what.
They cannot react to data.
They cannot make a decision.
They just run.

Every real program you have ever used does something different based on circumstances.
Spotify plays the song if you are logged in. It redirects you if you are not.
A bank app shows your balance if your PIN is correct. It blocks you if it is wrong.
A weather app says "bring a coat" if the temperature is below 10°C.

That kind of logic — reacting to data — starts here.

---

## The Boolean Type

A boolean is one of Python's built-in types.

It has exactly two possible values:

\`\`\`python
True
False
\`\`\`

That is it. No other values exist.

Notice the capital letters. \`True\` and \`False\` are not strings — they are not \`"True"\` or \`"False"\`.
They are their own type, and capitalisation matters:

\`\`\`python
print(True)     # works
print(true)     # NameError — Python does not recognise this
\`\`\`

You can store them in variables just like any other value:

\`\`\`python
is_logged_in = True
has_paid = False
account_active = True

print(is_logged_in)     # True
print(has_paid)         # False
\`\`\`

The naming convention for boolean variables is to start with \`is_\`, \`has_\`, \`can_\`, or \`was_\` —
because it reads like a question: "Is the user logged in?" "Has the user paid?"

---

## Comparison Operators

Most of the time, booleans are not written directly.
They are the result of comparing two values.

| Expression | Result |
|---|---|
| 10 > 3 | True |
| 10 < 3 | False |
| 5 == 5 | True |
| 5 == 6 | False |
| 5 != 6 | True |
| 10 >= 10 | True |
| 9 <= 8 | False |


The full set of comparison operators:

| Operator | Meaning |
|---|---|
| >  | greater than |
| <  | less than    |
| == | equal to     |
| != | not equal to |
| >= | greater than or equal to |
| <= | less than or equal to |

Every one of these expressions produces either \`True\` or \`False\`.
Nothing else.

---

## The Most Common Mistake in Programming

Stop here. This is important.

\`\`\`python
=     # assignment — stores a value in a variable
==    # comparison — checks if two values are equal
\`\`\`

They look similar. They do completely different things.

\`\`\`python
age = 25        # assigns the value 25 to age
age == 25       # asks: is age equal to 25? returns True
age == 30       # asks: is age equal to 30? returns False
\`\`\`

Using \`=\` when you meant \`==\` is one of the most common bugs beginners write.
Python will often catch it as a syntax error — but not always.

When you are checking a value, always use \`==\`.

---

## Making Decisions with if

Now you can use these boolean expressions to control what your program does.

\`\`\`python
age = 20

if age >= 18:
    print("Access granted.")
\`\`\`

Read this exactly like English:

*If age is greater than or equal to 18, print "Access granted."*

If the condition is \`True\`, the indented block runs.
If the condition is \`False\`, Python skips it entirely.

---

## Indentation Is Not Optional

This is Python-specific and catches everyone out at least once.

Python uses indentation to define what belongs inside a block.
There are no curly braces like other languages.

\`\`\`python
if age >= 18:
    print("This runs if the condition is True.")
    print("This also runs — it is in the same block.")

print("This always runs — it is outside the if block.")
\`\`\`

The standard is 4 spaces per level.
If your indentation is wrong, Python throws an \`IndentationError\`.

\`\`\`python
if age >= 18:
print("Wrong.")    # IndentationError — not indented
\`\`\`

Get into the habit now: every line inside a block is indented by 4 spaces.

---

## Handling the Opposite Case with else

An \`if\` on its own only handles one case.
\`else\` handles everything that did not match.

\`\`\`python
age = 16

if age >= 18:
    print("Access granted.")
else:
    print("Access denied. You must be 18 or older.")
\`\`\`

One or the other always runs. Never both. Never neither.

Real-world example — a login check:

\`\`\`python
entered_password = "letmein"
correct_password = "securepass123"

if entered_password == correct_password:
    print("Login successful.")
else:
    print("Incorrect password. Please try again.")
\`\`\`

---

## Multiple Branches with elif

Sometimes there are more than two possible outcomes.
\`elif\` (short for "else if") lets you add more branches.

\`\`\`python
score = 73

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")
\`\`\`

Python checks conditions from top to bottom.
The moment one condition is \`True\`, it runs that block and skips the rest.

This means order matters.

Try swapping the first two conditions around and notice what breaks — a score of 95 would
match \`>= 80\` before it reaches \`>= 90\`, so it would incorrectly print "Grade: B".
Always write \`elif\` chains from most specific to least specific.

---

## Logical Operators — Combining Conditions

Sometimes one condition is not enough.
You need two things to be true at once, or at least one of two things to be true.

**and** — both conditions must be True:

\`\`\`python
age = 22
has_id = True

if age >= 18 and has_id:
    print("Entry allowed.")
else:
    print("Entry denied.")
\`\`\`

Both \`age >= 18\` and \`has_id\` must be \`True\`.
If either is \`False\`, the whole condition is \`False\`.

**or** — at least one condition must be True:

\`\`\`python
is_member = False
has_voucher = True

if is_member or has_voucher:
    print("Discount applied.")
else:
    print("No discount available.")
\`\`\`

If either is \`True\`, the block runs.

**not** — reverses a boolean:

\`\`\`python
is_banned = False

if not is_banned:
    print("Welcome back.")
\`\`\`

\`not False\` becomes \`True\`. \`not True\` becomes \`False\`.
This is useful when a variable describes a negative state and you want to flip it.

---

## Truthy and Falsy Values

Here is something that surprises most beginners.

In Python, you do not always need to write \`== True\` or \`== False\`.
Most values have a natural truth value.

**Falsy** — these are treated as \`False\` in a condition:

\`\`\`python
0           # zero
""          # empty string
[]          # empty list
None        # no value
\`\`\`

**Truthy** — everything else is treated as \`True\`:

\`\`\`python
1           # any non-zero number
"hello"     # any non-empty string
[1, 2, 3]   # any non-empty list
\`\`\`

This means you can write cleaner conditions:

\`\`\`python
username = ""

if username:
    print(f"Hello, {username}.")
else:
    print("Please enter a username.")
\`\`\`

If \`username\` is an empty string, the condition is \`False\` and the else runs.
If \`username\` contains anything at all, the condition is \`True\`.

Real-world use: checking if a form field was filled in, if a list has results, if a value was returned from a function.

---

## Nested Conditions

You can put \`if\` statements inside other \`if\` statements.

\`\`\`python
is_logged_in = True
is_admin = False

if is_logged_in:
    print("Welcome back.")
    if is_admin:
        print("Admin panel loaded.")
    else:
        print("Standard dashboard loaded.")
else:
    print("Please log in.")
\`\`\`

Each level of nesting adds another 4 spaces of indentation.

Be careful with deep nesting — if you find yourself 4 or 5 levels deep, that is usually a sign the logic needs to be restructured.
Two levels is generally fine. Three starts to get hard to read.

---

## Mini Task: Access Control System

You now know enough to build a real decision-making program.

**Your task:** write a Python script that simulates an access control system for a members-only venue.

Rules:
- A user must be **18 or older** to enter
- A user must have a **valid membership** (\`is_member = True\`) OR a **guest pass** (\`has_guest_pass = True\`)
- If they are allowed in, print a personalised welcome message using their name
- If they are not old enough, tell them specifically why
- If they are old enough but have no membership or guest pass, tell them specifically why

Start with this structure:

\`\`\`python
name = "Jordan"
age = 20
is_member = False
has_guest_pass = True
\`\`\`

Expected output for the values above:

\`\`\`
Welcome, Jordan. Enjoy your visit.
\`\`\`

Test it with these scenarios and make sure each gives the right output:
- Age 16, member → denied (underage)
- Age 25, not a member, no guest pass → denied (no membership)
- Age 19, is a member → welcomed in

**Extension:**
- Add a \`is_banned\` variable — if \`True\`, deny entry regardless of age or membership
- Add a VIP tier: if the user is a member AND age is over 21, print an extra line welcoming them to the VIP lounge

Take your time. Think through the logic before you write any code.
Planning conditions on paper first is a legitimate developer technique.

---

## What You Learned

- Booleans are Python's \`True\` and \`False\` — their own type, not strings
- Comparison operators produce booleans: \`>\`, \`<\`, \`==\`, \`!=\`, \`>=\`, \`<=\`
- \`=\` assigns a value — \`==\` compares two values — never mix them up
- \`if\`, \`elif\`, \`else\` control which code runs based on conditions
- Indentation defines blocks — 4 spaces, always
- \`and\`, \`or\`, \`not\` combine and reverse boolean expressions
- Truthy and falsy values let you write cleaner conditions without explicit comparisons
- Nested conditions are valid but should be kept shallow

---

## What Comes Next

Your programs can now make decisions.

But they can only store one value per variable.

Next, you will learn how to store multiple values together — and start working with collections of data.

**Lists**

`

}
