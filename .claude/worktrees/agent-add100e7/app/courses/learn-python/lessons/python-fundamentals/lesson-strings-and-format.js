export const lessonStringsAndFormat = {
    id: "strings-and-format",
    title: "Strings & Formatting",
    hasChallenge: false,

    article: `
## Strings & Formatting

Numbers get a lot of attention in programming.

But text is everywhere.

Every message your app displays, every name a user types, every error you read, every URL you visit — all of it is a string.

If you want to build anything that communicates with a human, you need to understand strings deeply.

---

## What Is a String?

A string is a sequence of characters surrounded by quotation marks.

\`\`\`python
name = "Elijah"
message = "I am learning Python."
city = "London"
\`\`\`

The quotes are not part of the value — they are just how you tell Python where the text starts and ends.

Without quotes, Python reads the word as a variable name, not text.

\`\`\`python
name = Elijah   # Python looks for a variable called Elijah — error
name = "Elijah" # Python stores the text "Elijah" — correct
\`\`\`

---

## Single Quotes vs Double Quotes

Both work. Python does not care which you use.

\`\`\`python
a = "Hello"
b = 'Hello'

print(a == b)   # True — they are identical
\`\`\`

The reason both exist is so you can include one type of quote inside the other without breaking the string:

\`\`\`python
message = "It's a great day."        # single quote inside double quotes — fine
response = 'He said "hello" to her.' # double quotes inside single quotes — fine
\`\`\`

Pick one style and stick with it throughout your project.
Most Python developers use double quotes by default.

---

## Multiline Strings

If you need text that spans multiple lines, use triple quotes:

\`\`\`python
address = """
123 Main Street
London
W1A 1AA
"""

print(address)
\`\`\`

Triple quotes preserve line breaks exactly as written.
They are commonly used for long messages, email templates, documentation, and database queries.

---

## String Length

Every string has a length — the number of characters in it.
Use \`len()\` to find it:

\`\`\`python
name = "Elijah"
print(len(name))    # 6

password = "hunter2"
print(len(password))    # 7
\`\`\`

Real-world use: validating that a password is at least 8 characters, checking that a username is not too long, counting words in a document.

---

## Accessing Individual Characters

A string is a sequence, so you can access any character by its position.

Positions start at \`0\`, not \`1\`.

\`\`\`python
name = "Python"

print(name[0])  # P
print(name[1])  # y
print(name[5])  # n
\`\`\`

You can also count from the end using negative numbers:

\`\`\`python
print(name[-1])  # n — last character
print(name[-2])  # o — second to last
\`\`\`

This is called **indexing**.

---

## Slicing — Extracting a Piece of a String

You can extract a section of a string using a slice:

\`\`\`python
name = "Python Developer"

print(name[0:6])    # Python
print(name[7:])     # Developer
print(name[:6])     # Python
\`\`\`

The syntax is: \`string[start:end]\`
- \`start\` is inclusive (included in the result)
- \`end\` is exclusive (not included)

Real-world use: extracting a file extension from a filename, reading the first N characters of a message preview, parsing structured data.

---

## Combining Strings (Concatenation)

You can join strings together using \`+\`:

\`\`\`python
first = "Hello"
second = "World"

print(first + " " + second)    # Hello World
\`\`\`

But this gets messy fast.

Imagine building a user greeting:

\`\`\`python
first_name = "Elijah"
last_name = "Moye"
city = "London"

greeting = "Welcome, " + first_name + " " + last_name + ". You are logged in from " + city + "."
print(greeting)
\`\`\`

That is hard to read and easy to get wrong.
There is a better way.

---

## f-Strings — The Right Way to Format Text

f-strings let you embed variables and expressions directly inside a string.

\`\`\`python
first_name = "Elijah"
last_name = "Moye"
city = "London"

greeting = f"Welcome, {first_name} {last_name}. You are logged in from {city}."
print(greeting)
\`\`\`

The \`f\` before the opening quote turns it into a formatted string.
Anything inside \`{}\` is evaluated and inserted.

This is the modern, recommended approach. Use it by default.

---

## f-Strings Can Contain Expressions

You are not limited to just variable names inside the curly braces.
You can put any Python expression there:

\`\`\`python
a = 15
b = 4

print(f"{a} divided by {b} is {a / b:.2f}")
# 15 divided by 4 is 3.75
\`\`\`

The \`:.2f\` part controls the decimal formatting — \`2f\` means 2 decimal places, float.

This is called a **format spec** and is extremely useful when displaying prices, percentages, or measurements:

\`\`\`python
price = 4.5
tax_rate = 0.2
total = price * (1 + tax_rate)

print(f"Price: £{price:.2f}")
print(f"Total with tax: £{total:.2f}")
\`\`\`

Output:
\`\`\`
Price: £4.50
Total with tax: £5.40
\`\`\`

---

## Why Types Still Matter

Even with f-strings, you need to understand what happens when you try to combine types incorrectly.

\`\`\`python
age = 25
print("I am " + age)   # TypeError
\`\`\`

This fails because \`+\` on strings means join text — and \`age\` is an integer, not text.

The fix is to convert it:

\`\`\`python
print("I am " + str(age))   # works
\`\`\`

But the cleaner solution is always an f-string:

\`\`\`python
print(f"I am {age} years old.")   # works, no conversion needed
\`\`\`

f-strings handle the conversion automatically.

---

## String Methods

Strings come with built-in methods — actions you can call on them.

\`\`\`python
name = "  elijah moye  "

print(name.upper())     # "  ELIJAH MOYE  "
print(name.lower())     # "  elijah moye  "
print(name.strip())     # "elijah moye" — removes surrounding whitespace
print(name.title())     # "  Elijah Moye  " — capitalises each word
\`\`\`

Chaining methods:

\`\`\`python
clean_name = name.strip().title()
print(clean_name)   # "Elijah Moye"
\`\`\`

More useful methods:

\`\`\`python
email = "Elijah@Example.COM"
print(email.lower())            # "elijah@example.com"

sentence = "Python is great"
print(sentence.replace("great", "powerful"))  # "Python is powerful"
print(sentence.split(" "))      # ["Python", "is", "great"]
print("Python" in sentence)     # True — checking if a word exists
\`\`\`

Real-world use:
- \`.strip()\` — cleaning up user input (people accidentally add spaces all the time)
- \`.lower()\` — normalising emails before storing them
- \`.split()\` — turning a CSV line into a list of values
- \`.replace()\` — sanitising data before displaying or saving it

---

## Escape Characters

Sometimes you need to include special characters inside a string.

\`\`\`python
print("She said \\"hello\\"")   # She said "hello"
print("Line one\\nLine two")    # prints on two lines
print("Column 1\\tColumn 2")    # tab between values
\`\`\`

Common escape characters:

| Sequence | Meaning        |
|----------|----------------|
| \`\\\\n\`     | New line        |
| \`\\\\t\`     | Tab             |
| \`\\\\"\`     | Double quote    |
| \`\\\\\'\`     | Single quote    |
| \`\\\\\\\\\`     | Backslash       |

---

## Mini Task: Build a Formatted Profile Card

You now know enough to build something real.

**Your task:** write a Python script that builds and prints a formatted profile card for a user.

Requirements:
- Store the user's first name, last name, age, city, and job title in variables
- Print a clean, formatted output using f-strings
- Display the full name on one line, and their details below it
- Ensure the name is displayed in title case regardless of how it was entered

Here is the structure to get you started:

\`\`\`python
first_name = "elijah"
last_name = "moye"
age = 25
city = "london"
job = "python developer"

# build your profile card here
\`\`\`

Expected output (values will match whatever you stored):

\`\`\`
========================
  Elijah Moye
========================
Age:  25
City: London
Job:  Python Developer
========================
\`\`\`

**Hints:**
- Use \`.title()\` to capitalise names and job titles properly
- Use f-strings for all output lines
- The \`=\` lines are just strings — \`"=" * 24\` prints 24 equals signs

**Extension:**
- Add an email address variable and display it
- Add a line that prints how many characters are in their full name (hint: use \`len()\`)

Take your time and figure it out yourself.
Reading about strings and using them are different skills — this is where you build the second one.

---

## What You Learned

- Strings are sequences of characters — ordered and indexable
- Single, double, and triple quotes all create strings
- \`len()\` gets the length, indexing gets individual characters, slicing extracts sections
- Concatenation with \`+\` works but f-strings are cleaner and more powerful
- f-strings handle type conversion automatically and support format specs like \`:.2f\`
- String methods like \`.strip()\`, \`.lower()\`, \`.replace()\`, \`.split()\` are used constantly in real code

---

## What Comes Next

Your programs execute line by line right now.

Next, you will make them think.

**Booleans & Conditions**

`

}
