export const lessonClassesInstancesConstructors = {
  id: "classes-instances-constructors-cs",
  title: "Classes, Instances & Constructors",
  hasChallenge: false,
  article: `
## Classes, Instances & Constructors

Now that you understand *why* OOP exists, it's time to learn how to actually write classes in C#. This lesson covers the \`class\` keyword, how to create instances with \`new\`, and how constructors let you control how objects are initialized.

### Declaring a Class

A class declaration uses the \`class\` keyword followed by the class name. By convention, class names use **PascalCase**:

\`\`\`csharp
class Person
{
    public string Name;
    public int Age;
}
\`\`\`

This defines a new type called \`Person\` with two public fields. Fields are variables that belong to the class.

### Creating Instances with \`new\`

You create an object (instance) using the \`new\` keyword followed by the class name and parentheses:

\`\`\`csharp
Person alice = new Person();
alice.Name = "Alice";
alice.Age = 30;

Person bob = new Person();
bob.Name = "Bob";
bob.Age = 25;

Console.WriteLine($"{alice.Name} is {alice.Age}"); // Alice is 30
Console.WriteLine($"{bob.Name} is {bob.Age}");     // Bob is 25
\`\`\`

Each instance (\`alice\`, \`bob\`) has its own copy of \`Name\` and \`Age\`. Changing one has no effect on the other.

### The Default Constructor

When you write \`new Person()\`, you're calling a **constructor** — a special method that runs when the object is created. If you don't define one, C# generates a default constructor for you that does nothing (all fields get their default values: \`null\` for strings, \`0\` for ints).

### Writing Your Own Constructor

Constructors look like methods but have **no return type** and must have the **same name as the class**:

\`\`\`csharp
class Person
{
    public string Name;
    public int Age;

    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}
\`\`\`

Now you must provide the name and age when creating a \`Person\`:

\`\`\`csharp
Person alice = new Person("Alice", 30);
Console.WriteLine(alice.Name); // Alice
\`\`\`

### The \`this\` Keyword

Inside a constructor (or any method), \`this\` refers to the current instance. It's especially useful when a parameter name shadows a field name:

\`\`\`csharp
class Person
{
    public string Name;
    public int Age;

    public Person(string name, int age)
    {
        this.Name = name; // this.Name = field, name = parameter
        this.Age = age;
    }
}
\`\`\`

When the parameter and field names differ, \`this\` is optional. When they're the same, it's required to disambiguate.

### Multiple Constructors (Overloading)

A class can have more than one constructor, as long as their parameter lists differ. This is called **constructor overloading**:

\`\`\`csharp
class Person
{
    public string Name;
    public int Age;

    // Constructor with both fields
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    // Constructor with name only; age defaults to 0
    public Person(string name)
    {
        Name = name;
        Age = 0;
    }
}

Person withAge = new Person("Alice", 30);
Person nameOnly = new Person("Bob");
\`\`\`

### Constructor Chaining with \`this()\`

To avoid repeating initialization logic, one constructor can call another using \`this()\`:

\`\`\`csharp
class Person
{
    public string Name;
    public int Age;

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    // Calls the constructor above with a default age
    public Person(string name) : this(name, 0) { }
}
\`\`\`

This keeps your constructors DRY (Don't Repeat Yourself) and makes the default values obvious.

### Target-Typed \`new\` (C# 9+)

When the type is already known from context, you can use \`new\` without repeating the type name:

\`\`\`csharp
Person alice = new("Alice", 30); // type inferred from the variable declaration
\`\`\`

This is purely a shorthand — behavior is identical.

### Summary

- Declare classes with the \`class\` keyword; create instances with \`new\`
- Constructors initialize objects; they share the class name and have no return type
- \`this\` refers to the current instance; useful when field and parameter names clash
- Overload constructors to support multiple initialization patterns
- Use \`this()\` to chain constructors and keep initialization logic in one place
`,
};
