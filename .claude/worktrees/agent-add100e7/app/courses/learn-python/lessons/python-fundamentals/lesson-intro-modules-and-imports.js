export const lessonModulesImports = {
    id: "modules-imports",
    title: "Intro to Modules & Imports",
    hasChallenge: false,

    article: `

## Introduction

So far, all your code has lived in one file.

You've written variables, functions, loops, and logic — all in one place.

That's fine for small programs.

But real Python projects aren't small — and they aren't one file.

Real Python is organized into **modules**.

Every serious Python project you'll encounter — web apps, data tools, AI systems — is built from modules working together.

Understanding how imports work is not optional. It's foundational.

---

# Part 1: What Is a Module?

---

## Modules Are Just Files

A module is simply a Python file.

If you create a file called \`math_tools.py\`, that file is a module.

If you create a file called \`helpers.py\`, that file is a module.

Every \`.py\` file you write is a module — whether you think of it that way or not.

---

## What Modules Give You

Without modules, every program has to define everything from scratch.

With modules:

- You write a function once and reuse it across multiple programs
- You organize large projects into focused, manageable files
- You use code written by others without rewriting it yourself

The last point is especially important.

Python comes with hundreds of built-in modules.
The Python community has published hundreds of thousands more.

You don't have to build everything. You just have to know how to import it.

---

# Part 2: Import Syntax

---

## Basic Import

\`\`\`python
import math

print(math.sqrt(16))    # 4.0
print(math.pi)          # 3.141592653589793
\`\`\`

\`import math\` loads the entire module.

You access its contents using dot notation: \`math.sqrt()\`, \`math.pi\`.

---

## Import a Specific Item

If you only need one thing from a module, import just that:

\`\`\`python
from math import sqrt

print(sqrt(25))    # 5.0
\`\`\`

Now you can use \`sqrt\` directly — no \`math.\` prefix needed.

You can import multiple items at once:

\`\`\`python
from math import sqrt, floor, ceil, pi

print(sqrt(9))      # 3.0
print(floor(4.7))   # 4
print(ceil(4.2))    # 5
print(pi)           # 3.141592653589793
\`\`\`

---

## Import With an Alias

Use \`as\` to give a module (or item) a shorter name:

\`\`\`python
import math as m

print(m.sqrt(36))    # 6.0
\`\`\`

This is especially common with third-party libraries you'll meet later:

\`\`\`python
import numpy as np
import pandas as pd
import datetime as dt
\`\`\`

These aliases are industry conventions — you'll see them in almost every Python data project.

---

## What NOT to Do — Wildcard Imports

You can technically import everything at once:

\`\`\`python
from math import *
\`\`\`

Avoid this.

It dumps everything from the module into your namespace.

You won't know where \`sqrt\` came from. You might accidentally overwrite a variable.

It makes code harder to read and debug.

Always import explicitly.

---

## Import Style — The Convention

By convention, imports are grouped and ordered at the top of every file:

\`\`\`python
# 1. Standard library (built into Python)
import math
import os
from datetime import datetime

# 2. Third-party packages (installed via pip)
import requests
import pandas as pd

# 3. Your own modules (local files)
from utilities import calculate_total
\`\`\`

This order is not enforced by Python — but it's expected by every professional team.

---

# Part 3: Exploring the Standard Library

---

## The Standard Library

Python's standard library is a collection of modules built into every Python installation.

You never need to install them — just import.

Here are the ones you'll use most often as you grow:

| Module | What it does |
|---|---|
| \`math\` | Mathematical functions and constants |
| \`random\` | Random number generation |
| \`datetime\` | Dates, times, and durations |
| \`os\` | Interact with the operating system |
| \`json\` | Read and write JSON data |
| \`sys\` | Access interpreter settings |
| \`time\` | Time-related functions (sleep, measure) |
| \`re\` | Regular expressions for pattern matching |
| \`collections\` | Specialized data structures |
| \`pathlib\` | Work with file paths cleanly |

This lesson covers the most immediately useful ones.

---

## math — Numbers and Calculations

\`\`\`python
import math

print(math.sqrt(144))       # 12.0
print(math.pow(2, 10))      # 1024.0
print(math.floor(9.8))      # 9
print(math.ceil(9.1))       # 10
print(math.pi)              # 3.141592653589793
print(math.e)               # 2.718281828459045
print(math.log(100, 10))    # 2.0
\`\`\`

\`math.floor()\` rounds down. \`math.ceil()\` rounds up.

These are different from Python's built-in \`round()\` — know the distinction.

---

## random — Randomness

\`\`\`python
import random

print(random.randint(1, 10))          # random int between 1 and 10
print(random.random())                # random float between 0.0 and 1.0
print(random.choice(["red", "blue", "green"]))  # random item from a list

numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)
print(numbers)                        # list in random order
\`\`\`

\`random\` is used in games, simulations, testing, and anywhere you need unpredictability.

---

## datetime — Dates and Times

\`\`\`python
from datetime import datetime

now = datetime.now()

print(now)                          # 2024-03-15 14:32:05.123456
print(now.year)                     # 2024
print(now.month)                    # 3
print(now.day)                      # 15
print(now.strftime("%B %d, %Y"))    # March 15, 2024
\`\`\`

\`strftime()\` formats a date as a string.

| Code | Meaning | Example |
|---|---|---|
| \`%Y\` | 4-digit year | 2024 |
| \`%m\` | Month as number | 03 |
| \`%B\` | Full month name | March |
| \`%d\` | Day of month | 15 |
| \`%H:%M\` | Hour:Minute | 14:32 |

---

## os — The Operating System

\`\`\`python
import os

print(os.getcwd())              # current working directory
print(os.path.exists("file.txt"))  # check if a file exists

files = os.listdir(".")         # list files in current directory
print(files)
\`\`\`

You'll use \`os\` when building tools that read files, manage directories, or run system commands.

---

## json — Reading and Writing JSON

JSON is the most common format for data exchange — APIs, config files, databases.

\`\`\`python
import json

# Convert Python dict to JSON string
data = {"name": "Elijah", "age": 25, "skills": ["Python", "JavaScript"]}
json_string = json.dumps(data, indent=2)
print(json_string)

# Convert JSON string back to Python
parsed = json.loads(json_string)
print(parsed["name"])    # Elijah
\`\`\`

Output:

\`\`\`
{
  "name": "Elijah",
  "age": 25,
  "skills": [
    "Python",
    "JavaScript"
  ]
}
Elijah
\`\`\`

You'll use \`json\` constantly when working with APIs and web data.

---

# Part 4: Exploring What's Inside a Module

---

## dir() — List Everything in a Module

\`dir()\` shows you every name (functions, constants, etc.) inside a module.

\`\`\`python
import math
print(dir(math))
\`\`\`

Output (partial):

\`\`\`
['ceil', 'comb', 'copysign', 'cos', 'degrees', 'e', 'exp', 'fabs',
 'factorial', 'floor', 'gcd', 'hypot', 'inf', 'isclose', 'isfinite',
 'isinf', 'isnan', 'log', 'log10', 'log2', 'nan', 'pi', 'pow',
 'radians', 'sin', 'sqrt', 'tan', 'tau', 'trunc']
\`\`\`

---

## help() — Read the Documentation

\`help()\` prints the documentation for any module, function, or object.

\`\`\`python
import math
help(math.sqrt)
\`\`\`

Output:

\`\`\`
Help on built-in function sqrt in module math:

sqrt(x, /)
    Return the square root of x.
\`\`\`

These two tools — \`dir()\` and \`help()\` — let you explore any module without leaving Python.

---

# Part 5: Writing Your Own Modules

---

## Creating a Module

Create a file called \`grading.py\`:

\`\`\`python
def calculate_average(scores):
    return round(sum(scores) / len(scores), 1)

def get_letter_grade(average):
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
\`\`\`

Then import it in your main file:

\`\`\`python
from grading import calculate_average, get_letter_grade

scores = [88, 92, 79, 95, 84]
avg = calculate_average(scores)
grade = get_letter_grade(avg)

print(f"Average: {avg} — Grade: {grade}")
\`\`\`

Output: \`Average: 87.6 — Grade: B\`

---

## The if __name__ == "__main__" Guard

This is one of the most important patterns in Python.

When Python runs a file directly, it sets a special variable called \`__name__\` to \`"__main__"\`.

When a file is *imported*, \`__name__\` is set to the module's filename instead.

\`\`\`python
# grading.py

def calculate_average(scores):
    return round(sum(scores) / len(scores), 1)

if __name__ == "__main__":
    # This only runs when you run grading.py directly
    # It does NOT run when someone imports grading
    test_scores = [80, 90, 70]
    print(calculate_average(test_scores))
\`\`\`

Without this guard, any test code at the bottom of your module would run every time someone imports it.

Always use this pattern when writing modules.

---

## Packages — Modules in Folders

When your project grows, you'll organize modules into folders.

A folder of Python files is called a **package**.

\`\`\`
my_project/
    main.py
    utils/
        __init__.py
        math_helpers.py
        string_helpers.py
\`\`\`

The \`__init__.py\` file (even if empty) tells Python: "this folder is a package."

Then you import from it like this:

\`\`\`python
from utils.math_helpers import calculate_total
\`\`\`

You don't need to build packages today — but now you'll recognize the structure when you see it.

---

# Part 6: Third-Party Packages

---

## Beyond the Standard Library

Python's standard library is powerful, but it doesn't have everything.

The Python community has published over **500,000 packages** on [PyPI](https://pypi.org) — the Python Package Index.

Some you'll encounter soon:

| Package | What it does |
|---|---|
| \`requests\` | Make HTTP requests (call APIs) |
| \`flask\` | Build web applications |
| \`pandas\` | Data analysis and manipulation |
| \`numpy\` | Fast numerical computing |
| \`pillow\` | Image processing |
| \`sqlalchemy\` | Work with databases |

---

## Installing With pip

\`pip\` is Python's package installer — it comes with Python.

To install a package, run this in your terminal:

\`\`\`
pip install requests
\`\`\`

Then import it normally:

\`\`\`python
import requests
\`\`\`

You'll use \`pip\` constantly once you start building real projects.

---

## Mini Challenge

Write a module called \`stats.py\` with three functions:

1. \`get_average(numbers)\` — returns the average, rounded to 2 decimal places
2. \`get_range(numbers)\` — returns the difference between the highest and lowest value
3. \`describe(numbers)\` — prints a full summary report

Then in your main file, use \`random\` to **generate** the data — don't hardcode it.

Expected output (values will vary since it's random):

\`\`\`
--- Stats Report ---
Count:    10
Values:   [3, 17, 8, 42, 11, 29, 5, 33, 14, 22]
Average:  18.4
Minimum:  3
Maximum:  42
Range:    39
\`\`\`

**Rules:**
- \`stats.py\` must use the \`if __name__ == "__main__"\` guard
- The main file imports from \`stats\` and uses \`random\` to generate 10 random integers between 1 and 50
- \`describe()\` calls \`get_average()\` and \`get_range()\` internally — no repeated logic

---

## One Way to Solve It

**stats.py:**

\`\`\`python
def get_average(numbers):
    return round(sum(numbers) / len(numbers), 2)

def get_range(numbers):
    return max(numbers) - min(numbers)

def describe(numbers):
    print("--- Stats Report ---")
    print(f"Count:    {len(numbers)}")
    print(f"Values:   {numbers}")
    print(f"Average:  {get_average(numbers)}")
    print(f"Minimum:  {min(numbers)}")
    print(f"Maximum:  {max(numbers)}")
    print(f"Range:    {get_range(numbers)}")

if __name__ == "__main__":
    describe([10, 20, 30, 40, 50])
\`\`\`

**main.py:**

\`\`\`python
import random
from stats import describe

numbers = [random.randint(1, 50) for _ in range(10)]
describe(numbers)
\`\`\`

---

## What You Learned

- What a module is and why they exist
- All four import forms: \`import\`, \`from ... import\`, \`import as\`, and why to avoid \`import *\`
- Import ordering conventions (standard lib → third-party → local)
- The standard library: \`math\`, \`random\`, \`datetime\`, \`os\`, \`json\`
- How to explore any module with \`dir()\` and \`help()\`
- How to write your own module and import it
- The \`if __name__ == "__main__"\` guard and why it matters
- What packages are and how folder-based organization works
- What third-party packages are and how \`pip\` installs them

---

## What Comes Next

You've now covered all the core concepts:
variables, numbers, strings, conditions, lists,
tuples, dictionaries, sets, loops, functions, input, and modules.

Next up is the mini-projects section — where you combine everything you've learned to build complete programs.

**Before You Begin: How These Mini-Projects Work**

`
}
