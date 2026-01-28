export const lessonInputAndOutput = {
    id: "basics-input-output",
    title: "Input & Output",
  
    // ✅ Article markdown
    article: `
  ## Input & Output in Python
  
  So far, your programs have used **fixed values**.
  Input lets users provide data, and output lets your program respond.
  
  This is what makes programs **interactive**.
  
  ### Output with print()
  You’ve already seen \`print()\`, which displays information:
  
  \`\`\`python
  print("Hello!")
  \`\`\`
  
  ### Input with input()
  Use \`input()\` to receive user input:
  
  \`\`\`python
  name = input("Enter your name: ")
  print("Hello, " + name)
  \`\`\`
  
  ⚠️ Important: \`input()\` **always returns a string**.
  
  ### Converting input
  If you need a number, convert it:
  
  \`\`\`python
  age = int(input("Enter your age: "))
  \`\`\`
  
  ### Why input & output matter
  - User interaction
  - Games & tools
  - Real-world programs
  - Command-line apps
  
  ---
  
  Scroll down and hit **Start Challenge** to connect input and output.
  `,
  
    // recommended additions
    type: "function",
    entry: "greet_user",
  
    objectives: [
      "Understand how input() works",
      "Use print() for output",
      "Convert input when needed"
    ],
  
    content: `## Your Task
  Write a function called \`greet_user(name)\` that **returns** the string:
  
  \`"Hello, <name>!"\`
  
  In real programs, \`name\` would come from \`input()\`,
  but for testing purposes, it will be passed as a parameter.`,
  
    examples: [
      `name = "Alex"
  print("Hello, " + name + "!")`,
  
      `def greet_user(name):
      return "Hello, " + name + "!"
  
  print(greet_user("Jordan"))`
    ],
  
    tasks: 'Write a function called `greet_user(name)` that returns a greeting.',
  
    starterCode: `def greet_user(name):
      # Return: "Hello, <name>!"
      pass
  `,
  
    tests: [
      { input: ["Alex"], expected: "Hello, Alex!" },
      { input: ["Jordan"], expected: "Hello, Jordan!" }
    ],
  
    successMessage: "Well done! You’ve connected input and output like a real programmer 🎉🖥️"
  };
  