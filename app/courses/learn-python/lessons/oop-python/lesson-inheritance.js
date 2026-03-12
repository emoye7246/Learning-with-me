export const lessonInheritance = {
  id: "inheritance",
  title: "Inheritance",

  article: `
## Introduction

You've built classes that bundle data and behavior together.

Now imagine you need a new class
that's similar to an existing one —
but with a few differences.

You could copy and paste everything.

Or you could use **inheritance**.

Inheritance lets one class borrow from another.

---

## The Idea

Say you have a \`Dog\` class:

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} says: Woof!")
\`\`\`

Now you want a \`GuideDog\` class.

A guide dog is still a dog.
It still has a name.
It still barks.

But it also has extra behavior — like guiding a person.

---

## Creating a Child Class

\`\`\`python
class GuideDog(Dog):
    def guide(self):
        print(f"{self.name} is guiding their owner.")
\`\`\`

The \`(Dog)\` means \`GuideDog\` inherits from \`Dog\`.

Try this:

\`\`\`python
buddy = GuideDog("Buddy")
buddy.speak()
buddy.guide()
\`\`\`

Save.
Run it.

\`\`\`
Buddy says: Woof!
Buddy is guiding their owner.
\`\`\`

\`GuideDog\` got \`speak()\` from \`Dog\` automatically.

Then it added its own method on top.

---

## Parent and Child

The original class is called the **parent** (or base class).

The new class is called the **child** (or subclass).

The child inherits everything from the parent:
- Attributes
- Methods

And the child can add its own.

---

## Overriding a Method

The child can replace a parent's method.

\`\`\`python
class Cat:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} says: Meow!")

class KiittenClass(Cat):
    def speak(self):
        print(f"{self.name} says: mew...")

cat = Cat("Whiskers")
kitten = KiittenClass("Tiny")

cat.speak()     # Whiskers says: Meow!
kitten.speak()  # Tiny says: mew...
\`\`\`

The child's method takes priority over the parent's.

This is called **method overriding**.

---

## Using super()

Sometimes the child wants to extend the parent's behavior, not replace it.

Use \`super()\` to call the parent's version.

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)   # Call Animal's __init__
        self.breed = breed

my_dog = Dog("Rex", "Labrador")
print(my_dog.name)    # Rex
print(my_dog.breed)   # Labrador
\`\`\`

\`super().__init__(name)\` runs the parent's \`__init__\`
so you don't have to repeat that code.

---

## A Real Example

\`\`\`python
class Vehicle:
    def __init__(self, brand, speed=0):
        self.brand = brand
        self.speed = speed

    def move(self):
        print(f"{self.brand} is moving at {self.speed} mph.")

class ElectricCar(Vehicle):
    def __init__(self, brand, battery_level):
        super().__init__(brand)
        self.battery_level = battery_level

    def charge(self):
        self.battery_level = 100
        print(f"{self.brand} is fully charged.")

tesla = ElectricCar("Tesla", 80)
tesla.speed = 65
tesla.move()
tesla.charge()
\`\`\`

Output:

\`\`\`
Tesla is moving at 65 mph.
Tesla is fully charged.
\`\`\`

---

## Try This

Create a \`Person\` class with:
- \`name\` and \`age\` attributes
- A \`greet()\` method that prints a greeting

Then create an \`Employee\` class that inherits from \`Person\`:
- Add a \`job_title\` attribute (use \`super()\` in \`__init__\`)
- Add a \`introduce()\` method that prints name, age, and job title

Create one \`Person\` and one \`Employee\`.
Call their methods.

---

## What You Learned

You now understand:

- What inheritance is
- How to create a child class
- How child classes inherit parent attributes and methods
- How to override a method
- How to use \`super()\` to extend the parent's behavior

Inheritance lets you build on existing code
instead of rewriting it.

That's how real programs grow.

---

## What Comes Next

You've completed the Object-Oriented Python module.

You now know how to think about programs as collections of interacting objects.

In the next module, you'll learn how to trace through programs step by step —
and how to reason about what your code is really doing.

**Thinking in Systems**
`,
};
