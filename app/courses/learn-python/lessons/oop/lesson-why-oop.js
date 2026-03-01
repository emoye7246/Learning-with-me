export const lessonWhyOop = {
  id: "why-oop",
  title: "Why OOP? From Functions to Classes",

  article: `
## Why OOP? From Functions to Classes

You've been writing functions. Functions work well for small programs.

As programs grow, you need a way to group data and behavior together. That's what object-oriented programming (OOP) does.

---

## The Problem Functions Don't Solve

Imagine a bank account:

\`\`\`python
balance = 1000

def deposit(balance, amount):
    return balance + amount

def withdraw(balance, amount):
    return balance - amount

balance = deposit(balance, 200)
balance = withdraw(balance, 50)
print(balance)  # 1150
\`\`\`

This works. But the balance is just a loose variable. Any code can change it. You have to pass it everywhere. There's no enforced relationship between the data and the functions that act on it.

---

## What OOP Does Differently

OOP lets you bundle data and functions into a single unit called an **object**.

\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

account = BankAccount(1000)
account.deposit(200)
account.withdraw(50)
print(account.balance)  # 1150
\`\`\`

The balance lives inside the object. The functions that modify it live there too. They can't be separated.

---

## The Core Idea

**Objects = data + behavior bundled together.**

A class is the blueprint. An object is the built thing.

You can build many objects from one class, each with its own data.

\`\`\`python
checking = BankAccount(1000)
savings = BankAccount(5000)

checking.deposit(200)
savings.deposit(500)

print(checking.balance)  # 1200
print(savings.balance)   # 5500
\`\`\`

Two accounts. Same blueprint. Independent state.

---

## When OOP Makes Sense

OOP is useful when you have:

- Multiple items that share structure but have independent state (users, accounts, products)
- Behavior that belongs to the data (a \`User\` can \`login()\`, a \`File\` can \`read()\`)
- Real-world entities that map naturally to objects

OOP is not useful when you just need to process data and return a result. Use functions for that.

---

## The Real World Already Uses OOP

Every library you've imported uses classes.

\`\`\`python
from pathlib import Path

p = Path("data/output.txt")  # Path is a class
p.read_text()                 # read_text is a method
p.exists()                    # exists is a method
\`\`\`

You've been using objects without knowing it.

---

## What you just learned

- Why functions alone can be limiting for stateful programs
- What OOP does: bundles data and behavior
- The difference between a class (blueprint) and an object (instance)
- When OOP is and isn't the right tool

---

## What comes next

Next lesson: **Classes, Instances & __init__**
`,
};
