export const lessonDunderMethods = {
  id: "dunder-methods",
  title: "Dunder Methods (__str__, __repr__, __len__)",

  article: `
## Dunder Methods

Dunder stands for "double underscore." These are special methods Python calls automatically in specific situations.

They let your objects work with built-in Python operations.

---

## __str__: Human-Readable Output

\`__str__\` defines what \`print()\` shows.

Without it:

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

rex = Dog("Rex")
print(rex)   # <__main__.Dog object at 0x...>
\`\`\`

With it:

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Dog named {self.name}"

rex = Dog("Rex")
print(rex)     # Dog named Rex
print(str(rex))  # Dog named Rex
\`\`\`

---

## __repr__: Developer Output

\`__repr__\` is for debugging. It should show how to recreate the object.

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def __repr__(self):
        return f"Dog(name={self.name!r}, breed={self.breed!r})"

rex = Dog("Rex", "Shepherd")
print(repr(rex))  # Dog(name='Rex', breed='Shepherd')
\`\`\`

The \`!r\` adds quotes around string values automatically.

When only \`__repr__\` is defined, Python uses it for both \`str()\` and \`repr()\`.

---

## __len__: len() Support

\`\`\`python
class Playlist:
    def __init__(self, songs):
        self.songs = songs

    def __len__(self):
        return len(self.songs)

p = Playlist(["Song A", "Song B", "Song C"])
print(len(p))   # 3
\`\`\`

---

## __eq__: Equality Comparison

By default, \`==\` checks identity (same object in memory).

\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1 == p2)   # True — not the same object, but equal values
\`\`\`

---

## __add__: Arithmetic Support

\`\`\`python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)   # Vector(4, 6)
\`\`\`

---

## The Pattern

Every dunder method corresponds to a Python operator or built-in.

| Dunder | Triggered by |
|---|---|
| \`__str__\` | \`print()\`, \`str()\` |
| \`__repr__\` | \`repr()\`, interactive shell |
| \`__len__\` | \`len()\` |
| \`__eq__\` | \`==\` |
| \`__add__\` | \`+\` |
| \`__lt__\` | \`<\` |
| \`__contains__\` | \`in\` |

---

## Practical Rule

Always define at minimum:

- \`__repr__\` — for debugging
- \`__str__\` — if the object has a user-facing display

Everything else is optional and situational.

---

## Try this

1. Create a \`Book\` class with \`title\` and \`author\`.
2. Define \`__str__\` to return \`"Title by Author"\`.
3. Define \`__repr__\` to return a string that looks like a constructor call.
4. Define \`__eq__\` that returns True when titles match.

---

## What you just learned

- What dunder methods are and when Python calls them
- How \`__str__\` and \`__repr__\` control object display
- How to support \`len()\`, \`==\`, and \`+\` on custom objects
- The minimum set of dunders to define

---

## What comes next

Next lesson: **Composition vs Inheritance**
`,
};
