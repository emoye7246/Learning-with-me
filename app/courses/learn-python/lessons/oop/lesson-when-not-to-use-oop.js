export const lessonWhenNotToUseOop = {
  id: "when-not-to-use-oop",
  title: "When NOT to Use OOP",

  article: `
## When NOT to Use OOP

OOP is a tool. Tools have the wrong job sometimes.

A lot of beginner Python code over-engineers with classes when simple functions would do.

---

## The Signs You Don't Need OOP

**You have one function.**

\`\`\`python
# Don't do this
class TextProcessor:
    def process(self, text):
        return text.strip().lower()

# Do this
def process(text):
    return text.strip().lower()
\`\`\`

A class with one method that takes no state is just a function with extra steps.

---

**Your class has no state.**

If \`__init__\` sets no attributes, you don't need a class.

\`\`\`python
# Unnecessary
class MathHelper:
    def add(self, a, b):
        return a + b

# Better
def add(a, b):
    return a + b
\`\`\`

---

**You're grouping functions, not modeling entities.**

If your class is just a namespace for related functions, a module does that job better.

\`\`\`python
# Instead of a utils class, just use a module: utils.py
def format_currency(amount):
    return f"\${amount:.2f}"\

def format_date(dt):
    return dt.strftime("%Y-%m-%d")
\`\`\`

Import \`utils.format_currency\`. Clean and clear.

---

## Scripts Don't Need Classes

A script that runs once, top to bottom, doesn't need OOP.

\`\`\`python
# main.py — just fine without classes

import csv

def load_data(path):
    with open(path) as f:
        return list(csv.DictReader(f))

def summarize(rows):
    return sum(float(r["amount"]) for r in rows)

data = load_data("sales.csv")
print(f"Total: {summarize(data)}")
\`\`\`

Functions + modules handle 80% of real-world Python scripts cleanly.

---

## When OOP Does Earn Its Place

- Multiple instances with independent state (users, accounts, game entities)
- Long-lived objects that change over time (a session, a running process)
- Real-world entities that have both data and behavior
- You need polymorphism: calling the same method on different types

---

## The Practical Heuristic

Ask yourself: **"Am I modeling a thing, or am I organizing operations?"**

- Modeling a **thing** (User, BankAccount, GameCharacter) → consider OOP
- Organizing **operations** (parse, format, filter, calculate) → use functions

---

## What you just learned

- When a class is just a function with unnecessary wrapping
- Why stateless classes signal design problems
- When modules serve better than namespacing with classes
- The clear signal that OOP is justified

---

## What comes next

Next project: **Bank Account Simulator**
`,
};
