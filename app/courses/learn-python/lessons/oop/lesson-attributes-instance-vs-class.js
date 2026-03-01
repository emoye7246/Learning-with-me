export const lessonAttributesInstanceVsClass = {
  id: "attributes-instance-vs-class",
  title: "Attributes: Instance vs Class",

  article: `
## Attributes: Instance vs Class

Not all attributes live on the instance.

Some attributes belong to the class itself and are shared across all instances.

Knowing the difference prevents subtle bugs.

---

## Instance Attributes

Set inside \`__init__\` with \`self.\`. Each instance has its own copy.

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name   # instance attribute

rex = Dog("Rex")
buddy = Dog("Buddy")

print(rex.name)    # Rex
print(buddy.name)  # Buddy
\`\`\`

Changing \`rex.name\` doesn't affect \`buddy.name\`. They're independent.

---

## Class Attributes

Defined at the class level, outside \`__init__\`.

\`\`\`python
class Dog:
    species = "Canis familiaris"   # class attribute

    def __init__(self, name):
        self.name = name           # instance attribute

rex = Dog("Rex")
buddy = Dog("Buddy")

print(rex.species)    # Canis familiaris
print(buddy.species)  # Canis familiaris
print(Dog.species)    # Canis familiaris
\`\`\`

All instances share the same class attribute value.

---

## When to Use Class Attributes

Use class attributes for:

- Constants shared by all instances (species, default timeout, version)
- Counters tracking how many instances have been created

\`\`\`python
class User:
    count = 0   # shared counter

    def __init__(self, name):
        self.name = name
        User.count += 1   # update class attribute via the class name

u1 = User("Alice")
u2 = User("Bob")
print(User.count)  # 2
\`\`\`

---

## The Lookup Chain

Python checks for an attribute in this order:

1. The instance
2. The class
3. Parent classes

\`\`\`python
class Dog:
    sound = "generic sound"

rex = Dog()
rex.sound = "Woof"    # shadow the class attribute on this instance

buddy = Dog()

print(rex.sound)    # Woof   (instance attribute wins)
print(buddy.sound)  # generic sound   (falls through to class)
print(Dog.sound)    # generic sound
\`\`\`

When you assign to \`self.sound\`, you create an instance attribute that shadows the class attribute. The class is unchanged.

---

## Mutating Class Attributes (The Trap)

\`\`\`python
class Team:
    members = []   # DANGER: shared mutable list

t1 = Team()
t2 = Team()

t1.members.append("Alice")
print(t2.members)   # ["Alice"]  — unexpected!
\`\`\`

Both instances share the same list. Mutating it via one instance affects all others.

Fix: initialize mutable defaults inside \`__init__\`:

\`\`\`python
class Team:
    def __init__(self):
        self.members = []   # each instance gets its own list
\`\`\`

---

## Practical Summary

| | Instance Attribute | Class Attribute |
|---|---|---|
| Where defined | inside \`__init__\` with \`self.\` | at class level |
| Scope | per instance | shared by all |
| Use for | state unique to each object | constants, counters |
| Mutable defaults | safe | avoid |

---

## Common Mistakes

- Defining a mutable default (list, dict) as a class attribute.
- Confusing \`Dog.count\` (class) with \`self.count\` (instance) when incrementing.
- Shadowing a class attribute by accident via assignment to \`self\`.

---

## Try this

1. Create a \`Counter\` class with a class attribute \`total = 0\`.
2. Each time an instance is created, increment \`total\`.
3. Print \`Counter.total\` after creating 3 instances.
4. Give each instance a unique label and print all labels.

---

## What you just learned

- The difference between instance and class attributes
- How Python resolves attribute lookup order
- Why mutable class attributes are dangerous
- When each type of attribute is appropriate

---

## What comes next

Next lesson: **Inheritance & Reuse**
`,
};
