export const lessonFunctions = {
    id: "functions",
    title: "Functions",
    hasChallenge: false,

    article: `

## Introduction

So far, your programs run from top to bottom.

That works fine for small scripts.

But real programs aren't small.

Real programs have hundreds — sometimes thousands — of moving parts.

Without functions, that code becomes impossible to manage.

Functions are the most important concept in programming.

Not just in Python. In every language.

Once you understand functions well, everything else in programming starts to click.

---

# Part 1: The Basics

---

## What Is a Function?

A function is a **named, reusable block of code** that performs a specific task.

You define it once. You can run it anytime — as many times as you want.

\`\`\`python
def greet():
    print("Hello!")
\`\`\`

Defining a function does not run it.

To run it, you call it:

\`\`\`python
greet()
\`\`\`

Output: \`Hello!\`

---

## Why Functions Exist

Without functions:

\`\`\`python
print("Welcome, Elijah!")
print("You have 3 new messages.")
print("---")

print("Welcome, Marcus!")
print("You have 1 new message.")
print("---")
\`\`\`

With functions:

\`\`\`python
def show_welcome(name, messages):
    print(f"Welcome, {name}!")
    print(f"You have {messages} new messages.")
    print("---")

show_welcome("Elijah", 3)
show_welcome("Marcus", 1)
\`\`\`

Same result. Less code. Easier to change. Easier to read.

If you ever need to update that welcome message, you change it **in one place** — not everywhere it appears.

---

## Parameters vs Arguments

These two words are often confused.

- A **parameter** is the variable name in the function definition
- An **argument** is the actual value you pass when calling it

\`\`\`python
def greet(name):     # name is the PARAMETER
    print(f"Hello, {name}!")

greet("Elijah")      # "Elijah" is the ARGUMENT
\`\`\`

The parameter is a placeholder. The argument fills it in.

---

## Multiple Parameters

\`\`\`python
def introduce(name, age, city):
    print(f"My name is {name}, I'm {age}, and I'm from {city}.")

introduce("Elijah", 25, "New York")
\`\`\`

Output: \`My name is Elijah, I'm 25, and I'm from New York.\`

Arguments are matched to parameters **by position** — left to right.

---

# Part 2: Return Values

---

## print vs return

This is one of the most important distinctions in Python.

\`print()\` shows something on the screen — that's it.

\`return\` sends a value **back to the caller** so it can be stored and used.

\`\`\`python
def add_print(a, b):
    print(a + b)       # shows it, but can't be used

def add_return(a, b):
    return a + b       # sends it back to be used

result = add_return(5, 3)
print(result * 2)      # works — we have the value
\`\`\`

Think of it this way:

- \`print\` is a **display** — the value is gone after the screen shows it
- \`return\` is a **delivery** — the value is handed back to whoever called the function

Most real-world functions use \`return\`. Not \`print\`.

---

## Storing the Return Value

\`\`\`python
def square(n):
    return n * n

x = square(4)
y = square(7)

print(x + y)    # 16 + 49 = 65
\`\`\`

The return value can be stored, passed to other functions, put in a list — anything.

---

## Early Return

You can \`return\` at any point in a function — not just at the end.

This is called an **early return** or a **guard clause**.

\`\`\`python
def divide(a, b):
    if b == 0:
        return "Can't divide by zero"
    return a / b

print(divide(10, 2))   # 5.0
print(divide(10, 0))   # Can't divide by zero
\`\`\`

Early returns are used to handle edge cases before the main logic runs.

This keeps your code clean — no deep nesting required.

---

## Returning Multiple Values

Python functions can return more than one value.

\`\`\`python
def min_max(numbers):
    return min(numbers), max(numbers)

lowest, highest = min_max([5, 2, 9, 1, 7])

print(lowest)    # 1
print(highest)   # 9
\`\`\`

Behind the scenes, Python returns a **tuple**.

You unpack it using multiple variable names on the left side.

---

# Part 3: Flexible Parameters

---

## Default Parameters

You can give parameters a **default value**.

If the caller doesn't provide that argument, the default is used.

\`\`\`python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Elijah")              # Hello, Elijah!
greet("Elijah", "Welcome")   # Welcome, Elijah!
\`\`\`

Default parameters must come **after** required parameters.

This won't work:

\`\`\`python
def greet(greeting="Hello", name):   # SyntaxError
\`\`\`

---

## Keyword Arguments

When calling a function, you can use the parameter name explicitly.

\`\`\`python
def create_profile(name, age, city):
    print(f"{name}, {age}, {city}")

create_profile(age=25, city="New York", name="Elijah")
\`\`\`

Output: \`Elijah, 25, New York\`

Keyword arguments can be passed in **any order**.

This is useful when a function has many parameters — it makes the call readable.

---

# Part 4: Scope

---

## What Is Scope?

**Scope** determines where a variable exists and can be accessed.

Variables created inside a function are **local** — they only exist inside that function.

\`\`\`python
def calculate():
    result = 100
    print(result)    # works fine inside

calculate()
print(result)        # NameError — result doesn't exist out here
\`\`\`

This is intentional. Functions are self-contained.

They do their job without messing with variables elsewhere in your program.

---

## Local vs Global

\`\`\`python
total = 0            # global variable

def add_to_total(n):
    local_value = n * 2   # local — only exists here
    return local_value

total = add_to_total(5)
print(total)         # 10
\`\`\`

\`total\` is **global** — defined outside any function.

\`local_value\` is **local** — created inside the function, gone when the function ends.

As a general rule: **don't modify global variables inside functions**.

Pass what you need in. Return what you need out.

---

# Part 5: Functions Calling Functions

---

## Building With Functions

Functions can call other functions.

This is how real programs are built — small functions combined to do bigger things.

\`\`\`python
def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def describe_temperature(c):
    f = celsius_to_fahrenheit(c)
    if f < 32:
        feeling = "freezing"
    elif f < 60:
        feeling = "cold"
    elif f < 80:
        feeling = "comfortable"
    else:
        feeling = "hot"
    return f"{c}°C is {f}°F — that's {feeling}."

print(describe_temperature(0))
print(describe_temperature(22))
print(describe_temperature(38))
\`\`\`

Output:

\`\`\`
0°C is 32.0°F — that's freezing.
22°C is 71.6°F — that's comfortable.
38°C is 100.4°F — that's hot.
\`\`\`

\`describe_temperature\` delegates the conversion work to \`celsius_to_fahrenheit\`.

Each function does one thing. Together they do something useful.

---

# Part 6: Documenting Functions

---

## Docstrings

A **docstring** is a string at the top of a function that explains what it does.

\`\`\`python
def calculate_tip(bill, percentage=18):
    """
    Calculate the tip amount for a restaurant bill.

    Args:
        bill: The total bill amount in dollars
        percentage: Tip percentage (default: 18)

    Returns:
        The tip amount as a float
    """
    return bill * (percentage / 100)
\`\`\`

Docstrings are not required — but they're a professional habit.

They also power the built-in \`help()\` function:

\`\`\`python
help(calculate_tip)
\`\`\`

---

# Part 7: Lambda Functions

---

## One-Line Functions

Sometimes you need a small, throwaway function for a single operation.

Python has a shorthand for this called a **lambda**.

\`\`\`python
square = lambda n: n * n
print(square(5))    # 25
\`\`\`

This is equivalent to:

\`\`\`python
def square(n):
    return n * n
\`\`\`

Lambdas are most useful when passing a function as an argument to another function.

\`\`\`python
numbers = [5, 2, 8, 1, 9, 3]
sorted_numbers = sorted(numbers, key=lambda n: n)
print(sorted_numbers)   # [1, 2, 3, 5, 8, 9]
\`\`\`

For anything beyond one line, use a regular \`def\` function.

---

## Mini Challenge

Build a **grade calculator**.

You have a list of student records — each one is a dictionary:

\`\`\`python
students = [
    {"name": "Alice", "scores": [88, 92, 79, 95]},
    {"name": "Bob", "scores": [70, 65, 80, 72]},
    {"name": "Charlie", "scores": [95, 98, 100, 91]},
    {"name": "Diana", "scores": [55, 60, 58, 62]},
]
\`\`\`

Write **three separate functions**:

1. \`calculate_average(scores)\`
   - Takes a list of scores
   - Returns the average (rounded to 1 decimal place)

2. \`get_grade(average)\`
   - Takes the average
   - Returns a letter grade using this scale:

| Average | Grade |
|---|---|
| 90 and above | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| Below 60 | F |

3. \`print_report(students)\`
   - Takes the full list of students
   - Calls the two functions above for each student
   - Prints a formatted report

Expected output:

\`\`\`
Alice    | Avg: 88.5 | Grade: B
Bob      | Avg: 71.8 | Grade: C
Charlie  | Avg: 96.0 | Grade: A
Diana    | Avg: 58.8 | Grade: F
\`\`\`

**Rules:**
- Each function must do **one job only**
- \`print_report\` should not calculate anything — delegate to the other two
- No hardcoded values inside \`get_grade\`

Give it a try before reading the solution.

---

## One Way to Solve It

\`\`\`python
def calculate_average(scores):
    return round(sum(scores) / len(scores), 1)

def get_grade(average):
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    else:
        return "F"

def print_report(students):
    for student in students:
        avg = calculate_average(student["scores"])
        grade = get_grade(avg)
        print(f"{student['name']:<8} | Avg: {avg} | Grade: {grade}")

students = [
    {"name": "Alice", "scores": [88, 92, 79, 95]},
    {"name": "Bob", "scores": [70, 65, 80, 72]},
    {"name": "Charlie", "scores": [95, 98, 100, 91]},
    {"name": "Diana", "scores": [55, 60, 58, 62]},
]

print_report(students)
\`\`\`

Notice how each function is short, readable, and does one thing.

\`print_report\` doesn't care *how* the average is calculated — it just asks for it.

That separation is exactly how real programs are structured.

---

## What You Learned

- How to define and call a function
- The difference between parameters and arguments
- Why \`return\` is more powerful than \`print\`
- How early returns clean up conditional logic
- How to return multiple values
- Default parameters and keyword arguments
- What scope is and why local variables don't leak
- How functions call other functions
- How to write a docstring
- What lambdas are and when to use them

---

## What Comes Next

Your functions still use hardcoded data.

Next, you'll learn how to make your programs interactive — reading input from the user at runtime.

**Input & Output**

`
}
