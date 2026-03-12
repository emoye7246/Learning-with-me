export const lessonAttributesAndMethods = {
  id: "attributes-and-methods",
  title: "Attributes & Methods",

  article: `
## Introduction

You've created classes and objects.

You've used \`__init__\` to set starting values.

Now let's go deeper into what makes objects useful.

**Attributes** are what an object *has*.
**Methods** are what an object *does*.

This lesson focuses on both.

---

## Attributes: Data on an Object

Attributes are variables attached to a specific object.

They're set in \`__init__\` and accessed with \`self\`.

\`\`\`python
class Car:
    def __init__(self, brand, color, speed):
        self.brand = brand
        self.color = color
        self.speed = speed

my_car = Car("Toyota", "red", 0)
print(my_car.brand)
print(my_car.speed)
\`\`\`

---

## Updating Attributes

Attributes aren't locked after creation.

You can change them directly:

\`\`\`python
my_car.speed = 60
print(my_car.speed)   # 60
\`\`\`

Or through a method:

\`\`\`python
class Car:
    def __init__(self, brand, speed=0):
        self.brand = brand
        self.speed = speed

    def accelerate(self, amount):
        self.speed += amount

    def brake(self, amount):
        self.speed -= amount
        if self.speed < 0:
            self.speed = 0

my_car = Car("Toyota")
my_car.accelerate(30)
my_car.accelerate(20)
my_car.brake(10)
print(my_car.speed)   # 40
\`\`\`

Methods give you control over *how* attributes are updated.

---

## Methods: Behavior on an Object

A method is a function defined inside a class.

It always takes \`self\` as its first parameter.

\`\`\`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount}. New balance: ${self.balance}")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds.")
        else:
            self.balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self.balance}")

account = BankAccount("Elijah", 100)
account.deposit(50)
account.withdraw(30)
account.withdraw(200)
\`\`\`

Save.
Run it.

\`\`\`
Deposited $50. New balance: $150
Withdrew $30. New balance: $120
Insufficient funds.
\`\`\`

---

## Methods That Return Values

Methods can return data, not just print it.

\`\`\`python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

r = Rectangle(5, 3)
print(r.area())       # 15
print(r.perimeter())  # 16
\`\`\`

---

## The \`__str__\` Method

Python has a special method that controls how an object is printed.

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def __str__(self):
        return f"{self.name} ({self.breed})"

my_dog = Dog("Rex", "Labrador")
print(my_dog)
\`\`\`

Output:

\`\`\`
Rex (Labrador)
\`\`\`

Without \`__str__\`, \`print(my_dog)\` shows something like \`<__main__.Dog object at 0x...>\`.

With it, you control the output.

---

## Try This

Build a \`Student\` class:

- Attributes: \`name\`, \`grade\` (starting at 0)
- Method \`study(points)\`: increases grade by points
- Method \`report()\`: prints name and current grade
- Method \`__str__\`: returns the student's name

Create two students.
Have each study a different amount.
Call \`report()\` on both.

---

## What You Learned

You now understand:

- How attributes store state on an object
- How to update attributes directly and through methods
- How methods can return values
- How \`__str__\` controls how an object prints

Objects aren't just data containers.

They have behavior built in.

---

## What Comes Next

You know how to build a complete, functional class.

Now learn how one class can be built on top of another.

**Inheritance**
`,
};
