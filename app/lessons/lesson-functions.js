export const lessonFunctions = {
    id: "basics-functions",
    title: "Functions",
  
    // ✅ Article markdown
    article: `
  ## Functions in Python
  
  Functions let you **group code** into reusable blocks.
  Instead of writing the same logic over and over, you write it once and reuse it.
  
  ### Defining a function
  Use the \`def\` keyword to define a function:
  
  \`\`\`python
  def greet():
      return "Hello!"
  \`\`\`
  
  ### Calling a function
  To run a function, you **call** it by name:
  
  \`\`\`python
  message = greet()
  print(message)
  \`\`\`
  
  ### Functions with parameters
  Functions can accept input values called **parameters**:
  
  \`\`\`python
  def greet(name):
      return "Hello, " + name
  \`\`\`
  
  ### Why functions matter
  - Cleaner code
  - Less repetition
  - Easier debugging
  - Easier testing (perfect for this app)
  
  ---
  
  Scroll down and hit **Start Challenge** to write your own function.
  `,
  
    // recommended additions
    type: "function",
    entry: "add_numbers",
  
    objectives: [
      "Understand what functions are",
      "Define functions using def",
      "Use parameters and return values"
    ],
  
    content: `## Your Task
  Write a function called \`add_numbers(a, b)\` that **returns** the sum of the two numbers.`,
  
    examples: [
      `def add_numbers(a, b):
      return a + b
  
  print(add_numbers(3, 5))`,
  
      `result = add_numbers(10, 2)
  print(result)`
    ],
  
    tasks: 'Write a function called `add_numbers(a, b)` that returns their sum.',
  
    starterCode: `def add_numbers(a, b):
      # Return the sum of a and b
      pass
  `,
  
    tests: [
      { input: [3, 5], expected: 8 },
      { input: [10, 2], expected: 12 }
    ],
  
    successMessage: "Function mastered! You’re officially writing reusable code 🧠🧩"
  };
  