export const lessonConstructors = {
  id: "constructors",
  title: "Constructors: __init__ and self",

  article: `
## Introduction

In the last lesson, you added attributes to an object after creating it.

\`\`\`python
my_dog = Dog()
my_dog.name = "Rex"
\`\`\`

That works, but it's not reliable.

What if someone creates a Dog and forgets to set the name?

There's a better way.

You can set attributes automatically when the object is created.

That's what \`__init__\` is for.

---

## What Is \`__init__\`?

\`__init__\` is a special method.

It runs automatically every time a new object is created.

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
\`\`\`

Now when you create a dog, you pass the values in directly.

\`\`\`python
my_dog = Dog("Rex", "Labrador")
print(my_dog.name)
print(my_dog.breed)
\`\`\`

Save.
Run it.

\`\`\`
Rex
Labrador
\`\`\`

---

## What Is \`self\`?

\`self\` refers to the object being created.

When you write:

\`\`\`python
self.name = name
\`\`\`

You're saying:

"Store this value on the object itself, under the attribute \`name\`."

Each object has its own copy of that attribute.

---

## Every Object Gets Its Own Data

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

dog1 = Dog("Rex", "Labrador")
dog2 = Dog("Bella", "Poodle")

print(dog1.name)   # Rex
print(dog2.name)   # Bella
\`\`\`

They're the same class.
Different objects.
Each has its own data.

---

## Adding Methods That Use \`self\`

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def describe(self):
        print(f"{self.name} is a {self.breed}.")

    def bark(self):
        print(f"{self.name} says: Woof!")

my_dog = Dog("Rex", "Labrador")
my_dog.describe()
my_dog.bark()
\`\`\`

Output:

\`\`\`
Rex is a Labrador.
Rex says: Woof!
\`\`\`

---

## Default Values

You can give parameters default values.

\`\`\`python
class Dog:
    def __init__(self, name, breed="Unknown"):
        self.name = name
        self.breed = breed

stray = Dog("Buddy")
print(stray.breed)   # Unknown
\`\`\`

If no breed is provided, it defaults to \`"Unknown"\`.

---

## Try This

Create a \`Book\` class:

- \`__init__\` should accept \`title\`, \`author\`, and \`pages\`
- Add a \`summary()\` method that prints all three values
- Create two different Book objects and call \`summary()\` on each

---

## What You Learned

You now understand:

- What \`__init__\` is and when it runs
- What \`self\` refers to
- How to define attributes in the constructor
- How each object holds its own data
- How to use default parameter values

\`__init__\` is the most important method you'll write.

Every class you create will probably have one.

---

## What Comes Next

Your objects are self-contained.

Now let's learn how one class can inherit from another.

**Inheritance**
`,
};
