export const lessonClassesAndObjects = {
    id: "basics-classes-objects",
    title: "Classes & Objects",
  
    // ✅ Article markdown
    article: `
  ## Classes & Objects in Python
  
  Classes let you create **custom data types**.
  They bundle **data (attributes)** and **behavior (methods)** together.
  
  Think of a class as a **blueprint** and an object as the **thing built from it**.
  
  ### Defining a class
  Use the \`class\` keyword:
  
  \`\`\`python
  class Person:
      def __init__(self, name):
          self.name = name
  \`\`\`
  
  ### The __init__ method
  \`__init__\` runs when a new object is created.
  \`self\` refers to the **current object**.
  
  ### Creating an object
  You create an object (instance) from a class like this:
  
  \`\`\`python
  p = Person("Alex")
  print(p.name)
  \`\`\`
  
  ### Methods
  Classes can have functions called **methods**:
  
  \`\`\`python
  class Person:
      def __init__(self, name):
          self.name = name
  
      def greet(self):
          return "Hello, " + self.name
  \`\`\`
  
  ---
  
  Scroll down and hit **Start Challenge** to create your first class.
  `,
  
    // recommended additions
    type: "class",
    entry: "Person",
  
    objectives: [
      "Understand what classes and objects are",
      "Use __init__ to define attributes",
      "Create methods inside a class"
    ],
  
    content: `## Your Task
  Create a class called \`Person\` with:
  
  - An \`__init__(self, name)\` method
  - A method called \`greet()\` that returns:
  
  \`"Hello, <name>"\``,
  
    examples: [
      `class Person:
      def __init__(self, name):
          self.name = name
  
      def greet(self):
          return "Hello, " + self.name
  
  p = Person("Alex")
  print(p.greet())`
    ],
  
    tasks: 'Create a class `Person` with a `greet()` method that returns a greeting.',
  
    starterCode: `class Person:
      def __init__(self, name):
          # Store the name
          pass
  
      def greet(self):
          # Return: "Hello, <name>"
          pass
  `,
  
    tests: [
      { input: ["Alex"], expected: "Hello, Alex" },
      { input: ["Jordan"], expected: "Hello, Jordan" }
    ],
  
    successMessage: "Class created! You just entered object-oriented programming 🧱🔥"
  };
  