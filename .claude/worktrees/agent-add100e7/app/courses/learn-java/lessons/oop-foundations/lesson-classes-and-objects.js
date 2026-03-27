export const lessonClassesAndObjects = {
  id: "classes-and-objects",
  title: "Classes and Objects",
  hasChallenge: false,
  article: `
## Classes and Objects

A class is a blueprint. An object is something built from that blueprint.

You define the class once. You can create as many objects as you need.

---

## Defining a Class

\`\`\`java
public class Dog {
    // Fields (data the object holds)
    String name;
    String breed;
    int age;

    // Methods (what the object can do)
    void bark() {
        System.out.println(name + " says: Woof!");
    }

    void describe() {
        System.out.println(name + " is a " + age + "-year-old " + breed + ".");
    }
}
\`\`\`

This class defines:
- Three fields: \`name\`, \`breed\`, \`age\`
- Two methods: \`bark()\`, \`describe()\`

It does not create any dogs yet. It's a blueprint.

---

## Creating Objects with \`new\`

\`\`\`java
Dog rex = new Dog();
rex.name = "Rex";
rex.breed = "Labrador";
rex.age = 3;

Dog bella = new Dog();
bella.name = "Bella";
bella.breed = "Poodle";
bella.age = 5;
\`\`\`

Each \`new Dog()\` creates a separate object with its own copy of \`name\`, \`breed\`, and \`age\`.

---

## Accessing Fields and Methods

Use the dot operator (\`.\`) to access an object's fields and methods:

\`\`\`java
rex.bark();         // Rex says: Woof!
bella.describe();   // Bella is a 5-year-old Poodle.

System.out.println(rex.age);   // 3
rex.age = 4;                   // Happy birthday Rex
\`\`\`

---

## The Difference Between Class and Object

| Concept | Example |
|---|---|
| Class (blueprint) | \`Dog\` class definition |
| Object (instance) | \`Dog rex = new Dog();\` |
| Field access | \`rex.name\` |
| Method call | \`rex.bark()\` |

One class. Unlimited objects.

---

## Multiple Objects Share No State

\`\`\`java
rex.age = 4;
System.out.println(bella.age);   // 5 — bella's age is unchanged
\`\`\`

Changing one object's fields does not affect any other object.

---

## Null References

If you declare an object variable without creating an object:

\`\`\`java
Dog ghost;             // declared but not initialized
ghost.bark();          // NullPointerException
\`\`\`

Or explicitly set to null:

\`\`\`java
Dog ghost = null;
ghost.bark();          // NullPointerException
\`\`\`

A null reference points to nothing. Calling a method on null throws NullPointerException. Check for null before using an object.

---

## Object References

When you assign one object variable to another, you're copying the reference, not the object:

\`\`\`java
Dog a = new Dog();
a.name = "Fido";

Dog b = a;       // b points to the SAME object as a
b.name = "Max";

System.out.println(a.name);   // "Max" — a and b are the same dog
\`\`\`

This is different from primitives, where assignment copies the value.

---

## What You Learned

- A class is a blueprint; \`new\` creates an object from the blueprint
- Each object has its own copy of the fields
- Access fields and methods with the dot operator (\`.\`)
- Null references cause NullPointerException — always initialize objects before use
- Object variables hold references, not copies of the object

## What Comes Next

Setting field values through direct assignment works but is fragile. The next lesson introduces constructors — a better way to initialize objects.

Continue to:
**4.3 Fields and Constructors**
`,
};
