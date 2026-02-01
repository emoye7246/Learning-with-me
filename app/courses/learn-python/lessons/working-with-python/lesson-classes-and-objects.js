export const lessonClassesAndObjects = {
    id: "basics-classes-objects",
    title: "Classes & Objects",
  
    // ✅ Article markdown (tone and structure aligned with lesson-hello-world)
    article: `
  ## Classes & Objects — Bundling Data and Behavior in Python
  
  So far you have worked with built-in types (strings, numbers, lists, dictionaries) and written functions that operate on them.
  The next step is to **define your own type**: a *class* that bundles **data (attributes)** and **behavior (methods)** into one thing.
  
  In this lesson, your objective is clear:
  > **Create a class \`Person\` with an \`__init__(self, name)\` that stores the name, and a method \`greet()\` that returns \`"Hello, &lt;name&gt;"\`.**
  
  Think of a class as a **blueprint** and an object as **one thing built from it**. You give Python the blueprint; it builds the object when you call the class.
  
  ---
  
  ## What is Python doing when you create a class and an object?
  
  Python is still read and executed **line by line** by the interpreter.
  
  When you write \`class Person:\`, you are not creating a person yet. You are giving **one specific instruction**: “Remember this blueprint under the name \`Person\`.”
  
  When you later write \`p = Person("Alex")\`, you are giving **another instruction**: “Build one object from the \`Person\` blueprint, run \`__init__\` with \`name = "Alex"\`, and assign that object to \`p\`.”
  
  Python creates a new object, calls \`__init__\` so you can set attributes (like \`self.name\`), and returns the object.
  There is no guessing.
  There is no skipping steps.
  Python does exactly what you tell it to do.
  
  ---
  
  ## The code you are working toward
  
  By the end of this lesson, you will write a class \`Person\` with a constructor that stores a name and a method that returns a greeting string.
  
  Here is the shape of what you are aiming for:
  
  \`\`\`python
  class Person:
      def __init__(self, name):
          self.name = name
  
      def greet(self):
          return "Hello, " + self.name
  \`\`\`
  
  When you create \`p = Person("Alex")\` and call \`p.greet()\`, it returns \`"Hello, Alex"\`.
  
  Let’s break down the pieces.
  
  ---
  
  ## Understanding \`class\` and \`__init__\`
  
  \`class\` is the keyword that **defines** a new type. The body of the class is indented under the \`class\` line.
  
  \`__init__\` is a **special method** that runs automatically when a new object is created. It is where you set up the object’s **attributes** (the data it holds).
  
  \`self\` is the first parameter of \`__init__\` and of every method. It refers to **the object being created or operated on**. When you write \`self.name = name\`, you are storing \`name\` on that object so you can use it later (e.g. in \`greet()\`).
  
  You do not pass \`self\` yourself when you call \`Person("Alex")\`; Python passes the new object as \`self\` and \`"Alex"\` as \`name\`.
  
  ---
  
  ## Understanding methods
  
  A **method** is a function defined inside a class. Its first parameter is always \`self\`, so it can access the object’s attributes.
  
  So \`greet(self)\` can use \`self.name\` to build the string \`"Hello, " + self.name\`.
  
  When you call \`p.greet()\`, Python passes \`p\` as \`self\` automatically. You do not write \`p.greet(p)\`.
  
  ---
  
  ## Why \`self\`?
  
  A class defines one blueprint, but you can create **many objects** from it. Each object has its own data. \`self\` is how the method knows **which object** it is working on.
  
  So \`p = Person("Alex")\` and \`q = Person("Jordan")\` create two different objects. \`p.greet()\` uses \`p.name\` (\`"Alex"\`); \`q.greet()\` uses \`q.name\` (\`"Jordan"\`).
  
  ---
  
  ## How Python evaluates \`Person("Alex")\` and \`p.greet()\`
  
  When Python runs \`p = Person("Alex")\`, it:
  
  1. Creates a new, empty object
  2. Calls \`Person.__init__(that_object, "Alex")\`, so \`self\` is the new object and \`name\` is \`"Alex"\`
  3. Inside \`__init__\`, \`self.name = name\` stores \`"Alex"\` on the object
  4. Returns the object and assigns it to \`p\`
  
  When Python runs \`p.greet()\`, it:
  
  1. Looks up \`greet\` on \`p\` (finds the method)
  2. Calls \`Person.greet(p)\`, so \`self\` is \`p\`
  3. Inside \`greet\`, \`self.name\` is \`"Alex"\`, so \`return "Hello, " + self.name\` returns \`"Hello, Alex"\`
  
  ---
  
  ## Your interactive challenge
  
  Your task is to create a class \`Person\` that:
  
  - Has an \`__init__(self, name)\` method that stores \`name\` on the object (e.g. \`self.name = name\`)
  - Has a method \`greet(self)\` that returns the string \`"Hello, " + self.name\` (so for \`"Alex"\` it returns \`"Hello, Alex"\`)
  
  When the tests create \`Person("Alex")\` and call \`.greet()\`, your method must return \`"Hello, Alex"\`.
  
  If your class passes the tests, the challenge is complete.
  
  Small details matter — the method name \`greet\`, the first parameter \`self\`, and the exact return string are all part of writing correct Python.
  
  ---
  
  ## Why this lesson matters
  
  This lesson introduces ideas you will use constantly:
  - Classes as blueprints and objects as instances
  - \`__init__\` for setting up attributes
  - Methods that use \`self\` to access the object’s data
  
  Later you will add more methods, use inheritance, and model more complex behavior. The same model applies; the context gets richer.
  
  ---
  
  ## Before you move on
  
  Make sure you understand:
  - What \`class\` and \`__init__\` do, and why \`self\` is the first parameter
  - How to define a method and use \`self\` to read attributes
  - How creating \`Person("Alex")\` and calling \`p.greet()\` work
  
  If this feels clear, you’re ready for the challenge.
  
  Scroll down when you’re ready and create your first class.
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
  