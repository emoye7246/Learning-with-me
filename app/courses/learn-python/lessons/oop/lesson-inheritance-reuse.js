export const lessonInheritanceReuse = {
  id: "inheritance-reuse",
  title: "Inheritance & Reuse",

  article: `
## Inheritance & Reuse

Inheritance lets one class build on another.

You define shared behavior in a parent class. Child classes inherit it and add or override what's specific to them.

---

## Basic Inheritance

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound.")

class Dog(Animal):
    def speak(self):
        print(f"{self.name} says: Woof!")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} says: Meow!")

rex = Dog("Rex")
whiskers = Cat("Whiskers")

rex.speak()       # Rex says: Woof!
whiskers.speak()  # Whiskers says: Meow!
\`\`\`

\`Dog\` and \`Cat\` inherit from \`Animal\`. They override \`speak\` with their own version.

---

## The Parent's __init__

When the child has its own \`__init__\`, call the parent's with \`super()\`:

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)    # run Animal's __init__
        self.breed = breed        # then add Dog-specific data

rex = Dog("Rex", "German Shepherd")
print(rex.name)    # Rex
print(rex.breed)   # German Shepherd
\`\`\`

\`super()\` refers to the parent class. Always call it when the child has its own \`__init__\`.

---

## Inheriting Without Overriding

Child classes automatically get all parent methods.

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def breathe(self):
        print(f"{self.name} breathes.")

class Dog(Animal):
    def bark(self):
        print("Woof!")

rex = Dog("Rex")
rex.breathe()   # Rex breathes.  — inherited from Animal
rex.bark()      # Woof!          — defined on Dog
\`\`\`

---

## Checking Inheritance

\`\`\`python
print(isinstance(rex, Dog))     # True
print(isinstance(rex, Animal))  # True — Dog is an Animal
print(issubclass(Dog, Animal))  # True
\`\`\`

---

## When to Use Inheritance

Use inheritance when there's a genuine "is-a" relationship.

A Dog **is** an Animal. ✓
A Car **is** a Vehicle. ✓
A \`UserReport\` **is** a \`Report\`. ✓

Don't use inheritance just to share code. That's what composition and functions are for.

---

## Avoiding Deep Hierarchies

Three or more levels of inheritance becomes hard to follow.

\`\`\`
Animal → Mammal → Primate → Human → Employee → Manager
\`\`\`

Each level adds complexity. Prefer shallow hierarchies. Use composition when things get messy.

---

## Common Mistakes

- Forgetting \`super().__init__()\` in the child's \`__init__\`.
- Overriding a method without realizing a parent method exists.
- Building deep inheritance chains when flat functions would do.

---

## Try this

1. Create a \`Vehicle\` class with \`make\`, \`model\`, and a \`describe()\` method.
2. Create \`Car\` and \`Truck\` classes that inherit from \`Vehicle\`.
3. Each should add one unique attribute and override \`describe()\`.
4. Use \`isinstance()\` to confirm the objects' types.

---

## What you just learned

- How to define a parent class and inherit from it
- How to use \`super()\` to call parent methods
- The "is-a" test for deciding when inheritance fits
- Why shallow hierarchies beat deep ones

---

## What comes next

Next lesson: **Dunder Methods**
`,
};
