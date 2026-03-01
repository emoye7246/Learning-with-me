export const lessonClassesInstancesInit = {
  id: "classes-instances-init",
  title: "Classes, Instances & __init__",

  article: `
## Classes, Instances & __init__

A class is a template. An instance is a real object built from that template.

You define a class once. You create as many instances as you need.

---

## Defining a Class

\`\`\`python
class Dog:
    pass
\`\`\`

That's the minimum. A class named \`Dog\` with no behavior.

\`pass\` means "nothing here yet." Python requires something in the block.

---

## Creating an Instance

\`\`\`python
rex = Dog()
\`\`\`

\`rex\` is now an instance of \`Dog\`. It's a real object in memory.

\`\`\`python
print(type(rex))   # <class '__main__.Dog'>
print(rex)         # <__main__.Dog object at 0x...>
\`\`\`

Not very useful yet. Let's add some data.

---

## __init__: The Initializer

\`__init__\` runs automatically when you create an instance.

It sets up the initial state.

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

rex = Dog("Rex", "German Shepherd")
print(rex.name)    # Rex
print(rex.breed)   # German Shepherd
\`\`\`

When you call \`Dog("Rex", "German Shepherd")\`, Python calls \`__init__\` with those arguments.

---

## What is self?

\`self\` refers to the instance being created.

When you write \`self.name = name\`, you're saying:

"Store \`name\` on this specific instance as an attribute called \`name\`."

\`self\` is always the first parameter. Python passes it automatically when you call a method.

---

## Multiple Instances, Independent State

\`\`\`python
rex = Dog("Rex", "German Shepherd")
buddy = Dog("Buddy", "Labrador")

print(rex.name)    # Rex
print(buddy.name)  # Buddy
\`\`\`

Each instance has its own copy of \`name\` and \`breed\`.

Changing one doesn't affect the other.

---

## Default Values in __init__

\`\`\`python
class Dog:
    def __init__(self, name, breed="Unknown"):
        self.name = name
        self.breed = breed

stray = Dog("Stray")
print(stray.breed)  # Unknown
\`\`\`

Same pattern as default function arguments.

---

## Accessing and Modifying Attributes

Read an attribute:

\`\`\`python
print(rex.name)
\`\`\`

Set or update it:

\`\`\`python
rex.name = "Rexy"
print(rex.name)  # Rexy
\`\`\`

Attributes are just variables tied to an object. They can be read and written directly.

---

## Common Mistakes

- Forgetting \`self\` as the first parameter in \`__init__\`.
- Writing \`self.name\` vs \`name\` — \`name\` is just a local variable, \`self.name\` is the attribute.
- Calling \`Dog.name\` instead of \`rex.name\` — the class itself has no name, the instance does.

---

## Try this

1. Create a \`Car\` class with \`make\`, \`model\`, and \`year\` attributes.
2. Create two car instances with different values.
3. Print both cars' attributes.
4. Update one car's \`year\` and confirm the other is unchanged.

---

## What you just learned

- How to define a class and create instances
- How \`__init__\` initializes instance data
- What \`self\` refers to
- How multiple instances have independent state

---

## What comes next

Next lesson: **Methods & self**
`,
};
