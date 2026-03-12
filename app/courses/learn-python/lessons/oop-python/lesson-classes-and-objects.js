export const lessonClassesAndObjects = {
  id: "classes-and-objects",
  title: "Classes & Objects",

  article: `
## Introduction

You've read about the idea of objects.

Now you'll create one.

In Python, you define a class to describe what an object looks like.

Then you create an object from it.

Let's do both.

---

## Defining a Class

Use the \`class\` keyword.

\`\`\`python
class Dog:
    pass
\`\`\`

Save.
Run it.

Nothing visible happens yet.

You've just defined the blueprint.
There are no dogs yet.

\`pass\` is a placeholder. It tells Python the class is intentionally empty for now.

---

## Creating an Object

To create an object from a class, call the class like a function.

\`\`\`python
class Dog:
    pass

my_dog = Dog()
print(my_dog)
\`\`\`

Save.
Run it.

You'll see something like:

\`\`\`
<__main__.Dog object at 0x...>
\`\`\`

That's your dog.
It exists.
It just doesn't have any data yet.

---

## Adding Attributes

You can attach data to an object directly.

\`\`\`python
class Dog:
    pass

my_dog = Dog()
my_dog.name = "Rex"
my_dog.breed = "Labrador"

print(my_dog.name)
print(my_dog.breed)
\`\`\`

Save.
Run it.

\`\`\`
Rex
Labrador
\`\`\`

The object now carries its own data.

---

## Creating Multiple Objects

One class can produce many objects.

\`\`\`python
class Dog:
    pass

dog1 = Dog()
dog1.name = "Rex"

dog2 = Dog()
dog2.name = "Bella"

print(dog1.name)
print(dog2.name)
\`\`\`

Each object is independent.

Changing \`dog1\` doesn't affect \`dog2\`.

---

## Adding a Method

A method is a function defined inside a class.

\`\`\`python
class Dog:
    def bark(self):
        print("Woof!")

my_dog = Dog()
my_dog.bark()
\`\`\`

Output:

\`\`\`
Woof!
\`\`\`

Notice \`self\`.

Every method in a class takes \`self\` as its first parameter.

\`self\` refers to the specific object calling the method.

You'll understand this better in the next lesson.

---

## Using Data Inside a Method

\`\`\`python
class Dog:
    def bark(self):
        print(self.name + " says: Woof!")

my_dog = Dog()
my_dog.name = "Rex"
my_dog.bark()
\`\`\`

Output:

\`\`\`
Rex says: Woof!
\`\`\`

The method can access the object's own data through \`self\`.

---

## Try This

- Create a class called \`Car\`.
- Give an instance of it a \`color\` and a \`brand\` attribute.
- Add a method called \`describe()\` that prints both.
- Create two different Car objects and call \`describe()\` on each.

---

## What You Learned

You now understand:

- How to define a class with \`class\`
- How to create an object from a class
- How to add attributes to an object
- How to define and call a method
- What \`self\` refers to

---

## What Comes Next

Right now, you add attributes manually after creating an object.

There's a better way — setting attributes at the moment of creation.

**Attributes & Methods**
`,
};
