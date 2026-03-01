export const lessonMethodsAndSelf = {
  id: "methods-and-self",
  title: "Methods & self",

  article: `
## Methods & self

Attributes store data. Methods define behavior.

A method is a function that lives inside a class. It always has access to the instance through \`self\`.

---

## Defining a Method

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")

rex = Dog("Rex")
rex.bark()   # Rex says: Woof!
\`\`\`

\`bark\` is a method. It takes \`self\`, which gives it access to \`self.name\`.

---

## Methods Can Take Arguments

\`\`\`python
class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. Balance: {self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds.")
        else:
            self.balance -= amount
            print(f"Withdrew {amount}. Balance: {self.balance}")

account = BankAccount(100)
account.deposit(50)    # Deposited 50. Balance: 150
account.withdraw(200)  # Insufficient funds.
\`\`\`

\`amount\` is a regular parameter. \`self\` is the instance.

---

## Methods Can Return Values

\`\`\`python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

r = Rectangle(4, 6)
print(r.area())       # 24
print(r.perimeter())  # 20
\`\`\`

Methods can do anything a function can do. They just have access to instance data.

---

## Methods Calling Other Methods

\`\`\`python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def is_square(self):
        return self.width == self.height

    def describe(self):
        shape = "square" if self.is_square() else "rectangle"
        return f"A {shape} with area {self.area()}"

r = Rectangle(4, 4)
print(r.describe())   # A square with area 16
\`\`\`

Call other methods with \`self.method_name()\`.

---

## The Pattern: self is Always First

\`\`\`python
class Dog:
    def fetch(self, item):
        print(f"{self.name} fetched the {item}!")
\`\`\`

When you call \`rex.fetch("ball")\`, Python does this internally:

\`\`\`python
Dog.fetch(rex, "ball")
\`\`\`

\`self\` is \`rex\`. Python passes it automatically.

You write \`self\` in the definition. You don't pass it when calling.

---

## Common Mistakes

- Forgetting \`self\` in the method definition (you'll get a TypeError about wrong number of arguments).
- Calling instance attributes without \`self.\` — they won't exist as local variables.
- Defining a method but calling it like a regular function: \`bark(rex)\` instead of \`rex.bark()\`.

---

## Try this

1. Add a \`describe()\` method to a \`Car\` class that prints make, model, and year.
2. Add a \`start()\` method that prints "Engine started."
3. Add a \`fuel_needed(distance, mpg)\` method that returns how much fuel is needed.
4. Have \`describe()\` call another method inside it.

---

## What you just learned

- How to define methods on a class
- How \`self\` gives methods access to instance data
- How methods can take arguments and return values
- How methods can call other methods

---

## What comes next

Next lesson: **Attributes: Instance vs Class**
`,
};
