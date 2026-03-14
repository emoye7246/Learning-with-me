export const lessonFieldsAndConstructors = {
  id: "fields-and-constructors",
  title: "Fields and Constructors",
  hasChallenge: false,
  article: `
## Fields and Constructors

Fields store an object's state. Constructors ensure an object is properly initialized when it's created.

---

## Instance Fields

Fields declared at the class level (outside any method) are **instance fields** — each object gets its own copy:

\`\`\`java
public class Person {
    String name;     // instance field
    int age;         // instance field
    String email;    // instance field
}
\`\`\`

---

## The Problem with Direct Field Assignment

\`\`\`java
Person alice = new Person();
alice.name = "Alice";
// What if you forget to set alice.age?
// age defaults to 0 — silently wrong
\`\`\`

Without a constructor, nothing prevents you from creating objects with missing or invalid data.

---

## Defining a Constructor

A constructor is a special method that:
- Has the same name as the class
- Has no return type (not even \`void\`)
- Runs automatically when you use \`new\`

\`\`\`java
public class Person {
    String name;
    int age;
    String email;

    // Constructor
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
\`\`\`

Now creating a Person requires all three values:

\`\`\`java
Person alice = new Person("Alice", 30, "alice@example.com");
\`\`\`

You can't forget to set a field.

---

## \`this\` in Constructors

\`this\` refers to the current object being constructed.

When a parameter has the same name as a field, \`this.fieldName\` distinguishes the field from the parameter:

\`\`\`java
public Person(String name, int age) {
    this.name = name;   // this.name = field; name = parameter
    this.age = age;
}
\`\`\`

Without \`this\`, the parameter would shadow the field and the field would stay unset.

---

## Multiple Constructors (Overloading)

You can have multiple constructors with different parameter lists:

\`\`\`java
public class Person {
    String name;
    int age;
    String email;

    // Constructor with all fields
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Constructor with just name and age (email defaults to empty)
    public Person(String name, int age) {
        this(name, age, "");   // calls the other constructor
    }
}
\`\`\`

\`this(...)\` inside a constructor calls another constructor in the same class. This is constructor chaining.

---

## The Default Constructor

If you don't write any constructor, Java provides a no-argument default constructor automatically:

\`\`\`java
// Java generates this for free if you have no constructors:
public Person() { }
\`\`\`

But as soon as you define any constructor, the default no-arg constructor disappears. You must add it back explicitly if you want it.

---

## Field Initialization

Fields can be initialized inline:

\`\`\`java
public class Config {
    int timeout = 30;       // defaults to 30
    boolean debug = false;
    String prefix = "LOG";
}
\`\`\`

Inline initialization happens before the constructor runs.

---

## What You Learned

- Instance fields store per-object state; each object has its own copy
- Constructors initialize object state when \`new\` is called
- \`this.field\` refers to the field; distinguishes from parameters with the same name
- Constructor overloading: multiple constructors with different parameter lists
- \`this(...)\` chains constructor calls within the class
- If you define any constructor, Java removes the default no-arg constructor

## What Comes Next

You've seen \`this\` briefly. The next lesson explores methods more deeply — including how \`this\` works inside methods.

Continue to:
**4.4 Methods and \`this\`**
`,
};
